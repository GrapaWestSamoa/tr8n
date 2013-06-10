#--
# Copyright (c) 2010-2013 Michael Berkovich, tr8nhub.com
#
# Permission is hereby granted, free of charge, to any person obtaining
# a copy of this software and associated documentation files (the
# "Software"), to deal in the Software without restriction, including
# without limitation the rights to use, copy, modify, merge, publish,
# distribute, sublicense, and/or sell copies of the Software, and to
# permit persons to whom the Software is furnished to do so, subject to
# the following conditions:
#
# The above copyright notice and this permission notice shall be
# included in all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
# EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
# MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
# NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
# LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
# OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
# WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
#++

class Tr8n::Admin::TranslationController < Tr8n::Admin::BaseController

  def index
    @results = Tr8n::Translation.filter(:params => params, :filter => Tr8n::TranslationFilter)
  end

  def view
    @translation = Tr8n::Translation.find_by_id(params[:id])
    return redirect_to(:action => :index) unless @translation

    filter = {"wf_c0" => "translation_id", "wf_o0" => "is", "wf_v0_0" => @translation.id}
    extra_params = {:id => @translation.id, :mode => params[:mode]}

    @results = Tr8n::TranslationVote.filter(:params => params.merge(filter))
    @results.wf_filter.extra_params.merge!(extra_params)
  end

  def votes
    @results = Tr8n::TranslationVote.filter(:params => params, :filter => Tr8n::TranslationVoteFilter)
  end

end
