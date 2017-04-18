
const checklist = {
  title: 'Checklist',
  tasks: [
      {   text: "Have you given your website content a spruce recently?",
          checked: false,
          section: "website",
      },{
          text: "Is your website content up to date?",
          checked: false,
          section: "website",
      },{
          text: "Are contact details easy to find?",
          checked: false,
          section: "website",
      },{
          text: " you clearly communicate your USP’s on your homepage?",
          checked: false,
          section: "website",
      },{
          text: "Do you use stock photography?",
          checked: false,
          section: "website",
      },{
          text: "Do you scour your analytics to make regular improvements?",
          checked: false,
          section: "analytics",
      },{
          text: "Do you have analytic goals setup? ",
          checked: false,
          section: "analytics",
      },{
          text: "Do you know how to use analytics to improve engagement?",
          checked: false,
          section: "analytics",
      },{
          text: "Do you know how to use analytics to Improve click rates?",
          checked: false,
          section: "analytics",
      },{
          text: "Have got Defined the Lead Form Submission as your goal?",
          checked: false,
          section: "analytics",
      },{
          text: "Do you have a social media strategy?",
          checked: false,
          section: "social",
      },{
          text: "Are all your social media channels looking fresh?",
          checked: false,
          section: "social",
      },{
          text: "Are you posting a least once a day on Twitter?",
          checked: false,
          section: "social",
      },{
          text: "Are you using tools to que Tweets so you can be proactive and not reactionary?",
          checked: false,
          section: "social",
      },{
          text: "Is your social media content unique for each channel?",
          checked: false,
          section: "social",
      },{
          text: "How you made sure all forms of marketing looked polished?",
          checked: false,
          section: "marketing",
      },{
          text: "Is online the only form of marketing?",
          checked: false,
          section: "marketing",
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
            website: function(task) {
                return task.section == 'website';
            },
            social: function(task) {
                return task.section == 'social';
            },
            marketing: function(task) {
                return task.section == 'marketing';
            },
            analytics: function(task) {
                return task.section == 'analytics';
            }
        }
    },

    computed: {
        // The items that the user is already doing
        doing: function() {
            return this.checklist.tasks.filter(this.filters.checked);
        },
        // The items that the user isn't currently doing
        notDoing: function() {
            return this.checklist.tasks.filter(this.filters.unchecked);
        },
        websiteTask: function() {
          return this.checklist.tasks.filter(this.filters.website);
        },
        socialTask: function() {
          return this.checklist.tasks.filter(this.filters.social);
        },
        marketingTask: function() {
          return this.checklist.tasks.filter(this.filters.marketing);
        },
        analyticsTask: function() {
          return this.checklist.tasks.filter(this.filters.analytics);
        },
    },

    methods: {
        finished: function() {
            this.isFinished = true;
        }
    }
});
