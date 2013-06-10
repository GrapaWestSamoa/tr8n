/****************************************************************************
  Copyright (c) 2010-2012 Michael Berkovich, Ian McDaniel, tr8n.net

  Permission is hereby granted, free of charge, to any person obtaining
  a copy of this software and associated documentation files (the
  "Software"), to deal in the Software without restriction, including
  without limitation the rights to use, copy, modify, merge, publish,
  distribute, sublicense, and/or sell copies of the Software, and to
  permit persons to whom the Software is furnished to do so, subject to
  the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
  LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
  OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
  WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
****************************************************************************/

Tr8n.UI.LanguageSelector = {

  options: {},

  init: function(options) {
    this.options = options || {};
  },

  hide: function() {
    Tr8n.UI.Lightbox.hide();
  },

  show: function() {
    Tr8n.UI.Lightbox.show('/tr8n/tools/language_selector', {height:500, width:400});
  },

  change: function(locale) {
    Tr8n.UI.Lightbox.show('/tr8n/tools/language_selector/change?locale=' + locale, {width:400, height:480, message:"Changing language..."});      
  },

  toggleInlineTranslations: function() {
    if (Tr8n.inline_translations_enabled) {
        Tr8n.UI.Lightbox.show('/tr8n/tools/language_selector/toggle_inline_translations', {width:400, height:480, message:"Disabling inline translations..."});      
    } else {
        Tr8n.UI.Lightbox.show('/tr8n/tools/language_selector/toggle_inline_translations', {width:400, height:480, message:"Enabling inline translations..."});      
    }
  }
}