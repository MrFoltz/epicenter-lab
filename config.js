// Settings for the Earthquake Triangulation Lab. Edit the values between the quotation marks, then commit the file on GitHub.
window.LAB_CONFIG = {
  submitUrl: "https://script.google.com/macros/s/AKfycbwAdyBlpKvyL_i0GQYpH0FJ0r1FsoFvXEIgK8Ca9OmGhKUxEDkcmcVOY94tNaG3emGY/exec",     // paste your Google Apps Script "Web app" address here (it ends in /exec)
  classCode: "quake26",     // a code you make up; it must match CLASS_CODE in the Google script exactly
  feedback: 2,       // after students submit, show them: 2 = marks and score, 1 = score only, 0 = nothing
  times: true,       // label exact arrival times on the seismograms
  dist: true,        // label the distance on the graph guide
  quick: false,      // allow quick-plot from the start
  unlock: false,     // unlock the geology reveal from the start
  autosum: false     // show the hazard summary automatically
};
