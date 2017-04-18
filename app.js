
const checklist = {
  title: 'My quiz',
  tasks: [
      {   text: "SEO number one",

          checked: false,
          section: "seo",
      },{
          text: "Design number one",
          checked: false,
          section: "seo",
      },{
          text: "Something Else",
          checked: false,
          section: "seo",
      }
  ]
};

new Vue({
    el: '#spring-clean',
    data: {
        isFinished: false,
        // Grab the data from the variable above
        checklist: checklist,

        filters: {
            // Grab all items that aren't checked
            unchecked: function(task) {
                return ! task.checked;
            },
            // Grab all items that are checked
            checked: function(task) {
                return task.checked;
            },
            section: function(task) {
                return task.section;
            }
        }
    },

    computed: {
        // The items that the user wants
        wanted: function() {
            return this.checklist.tasks.filter(this.filters.checked);
        },
        // The items that the user doesn't want
        unwanted: function() {
            return this.checklist.tasks.filter(this.filters.unchecked);
        },
        seo: function() {
            return this.checklist.tasks.filter(this.filters.section) === "seo";
        }
    },

    methods: {
        finished: function() {
            this.isFinished = true;
        }
    }
});
