

    Polymer('core-doc-page', {

      hilight: function(event, detail, sender) {
        detail.code = prettyPrintOne((detail.code || '').replace(/</g,'&lt;').replace(/>/g,'&gt;'));
      },

      homepageFilter: function(data) {
        if (!data) {
          return '';
        }
        if (!data.homepage || data.homepage === 'github.io') {
          return '//polymer.github.io/' + data.name;
        } else {
          return data.homepage;
        }
      }

    });

  