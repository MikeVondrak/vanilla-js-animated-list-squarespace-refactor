// <script type="text/javascript"> // UNCOMMENT THIS LINE for Squarespace

import "./css/squarespace-style.css"; // REMOVE THIS LINE for Squarespace
import "./css/style.css"; // REMOVE THIS LINE for Squarespace

// ===================================================================================================================
// * EDIT BELOW - Project Configuration
// ===================================================================================================================

// Set this to match an "id" of a projectView below - this is what the site will display
const projectsToDisplay = "Alphabetical"; // Only one of these should be active
//const projectsToDisplay = "UxUi"; // Comment out the rest like this

// Add new project views here - controls order of category buttons and order of project items
const projectConfig = {
  //
  // These are the project selectors from the "projectList" below
  // You can update these when you add new projects, this is just for your reference:
  //
  // ACuriousHarvest CohesionBrewing Conci EatItUp Guava
  // HappyBikes HomeRemedy KnottyTieConfigurator KnottyTieRebrand
  // Nod NorthWynkoop SpectrumIllustrationRebrand SpectrumUxUi
  // TheDailyVegan WynkoopAlley
  //
  // Categoty selectors for reference
  // a u b i p k => All, UX / UI, Branding, Illustration, Pattern, Books
  //
  projectViews: [
    {
      // You will need to add any new categories or projects to all of the definitions below for them to show up
      // - You will need to make up an ID for any new projects you add, the strings just have to match
      // - Put the ID of the project view you want to display in the "projectsToDisplay" variable above

      // Alphabetical category and project order - for example
      id: "Alphabetical",
      categoryOrder: ["a", "k", "b", "i", "p", "u"],
      projectOrder: [
        "ACuriousHarvest",
        "CohesionBrewing",
        "Conci",
        "EatItUp",
        "Guava",
        "HappyBikes",
        "HomeRemedy",
        "KnottyTieConfigurator",
        "KnottyTieRebrand",
        "Nod",
        "NorthWynkoop",
        "SpectrumIllustrationRebrand",
        "SpectrumUxUi",
        "TheDailyVegan",
        "WynkoopAlley"
      ]
    },
    {
      // UX/UI - these are reverse alphabetical, you can change the order
      id: "UxUi",
      categoryOrder: ["a", "u", "i", "b", "p", "k"],
      projectOrder: [
        "WynkoopAlley",
        "TheDailyVegan",
        "SpectrumUxUi",
        "SpectrumIllustrationRebrand",
        "NorthWynkoop",
        "Nod",
        "KnottyTieRebrand",
        "KnottyTieConfigurator",
        "HomeRemedy",
        "HappyBikes",
        "Guava",
        "EatItUp",
        "Conci",
        "CohesionBrewing",
        "ACuriousHarvest"
      ]
    }
  ]
};

// Add new categories here (lower nav)
const projectTags = [
  { display: "All", tag: "a" },
  { display: "UX / UI", tag: "u" },
  { display: "Branding", tag: "b" },
  { display: "Illustration", tag: "i" },
  { display: "Pattern", tag: "p" },
  { display: "Books", tag: "k" }
];

// Add new projects here, then add the ID you created for the project to the projectViews above
const projectList = [
  {
    selector: "NorthWynkoop",
    title: "North Wynkoop",
    url: "/projects/north-wynkoop",
    imgSrc: "tile-north-wynkoop.jpg",
    tags: ["a", "b", "u", "p"]
  },
  {
    selector: "KnottyTieConfigurator",
    title: "Knotty Tie Configurator",
    url: "/projects/knotty-tie-configurator",
    imgSrc: "tile-knotty-tie-configurator.jpg",
    tags: ["a", "u"]
  },
  {
    selector: "KnottyTieRebrand",
    title: "Knotty Tie Rebrand",
    url: "/projects/knotty-tie-rebrand",
    imgSrc: "tile-knotty-tie-rebrand.png",
    tags: ["a", "b", "i", "u"]
  },
  {
    selector: "SpectrumUxUi",
    title: "Spectrum UX&nbsp;/&nbsp;UI",
    url: "/projects/spectrum-ux-ui",
    imgSrc: "tile-spectrum-uxui.png",
    tags: ["a", "b", "u"]
  },
  {
    selector: "Conci",
    title: "Conci",
    url: "/projects/conci",
    imgSrc: "tile-conci.png",
    tags: ["a", "u"]
  },
  {
    selector: "WynkoopAlley",
    title: "Wynkoop Alley",
    url: "/projects/wynkoop-alley",
    imgSrc: "tile-wynkoop-alley.png",
    tags: ["a", "b", "i", "p"]
  },
  {
    selector: "CohesionBrewing",
    title: "Cohesion Brewing",
    url: "/projects/cohesion-brewing",
    imgSrc: "tile-cohesion-brewing.gif",
    tags: ["a", "b", "p"]
  },
  {
    selector: "Guava",
    title: "Guava",
    url: "/projects/guava",
    imgSrc: "tile-guava.gif",
    tags: ["a", "b", "i"]
  },
  {
    selector: "Nod",
    title: "Nod",
    url: "/projects/nod",
    imgSrc: "tile-nod.jpg",
    tags: ["a", "i", "p"]
  },
  {
    selector: "HappyBikes",
    title: "Happy Bikes",
    url: "/projects/happy-bikes",
    imgSrc: "tile-happy-bikes.jpg",
    tags: ["a", "i", "p"]
  },
  {
    selector: "EatItUp",
    title: "Eat it Up!",
    url: "/projects/eat-it-up",
    imgSrc: "tile-eat-it-up.png",
    tags: ["a", "i", "k"]
  },
  {
    selector: "SpectrumIllustrationRebrand",
    title: "Spectrum Illustration Rebrand",
    url: "/projects/spectrum-illustration-rebrand",
    imgSrc: "tile-spectrum-illustration-rebrand.png",
    tags: ["a", "b", "i"]
  },
  {
    selector: "ACuriousHarvest",
    title: "A Curious Harvest",
    url: "/projects/a-curious-harvest",
    imgSrc: "tile-a-curious-harvest.png",
    tags: ["a", "k", "i"]
  },
  {
    selector: "HomeRemedy",
    title: "Home Remedy",
    url: "/projects/home-remedy",
    imgSrc: "tile-home-remedy.png",
    tags: ["a", "i", "k"]
  },
  {
    selector: "TheDailyVegan",
    title: "The Daily Vegan",
    url: "/projects/the-daily-vegan",
    imgSrc: "tile-the-daily-vegan.gif",
    tags: ["a", "k", "i"]
  }
];

// ===================================================================================================================
// End Configuration - DO NOT EDIT BELOW HERE
// ===================================================================================================================
// ===================================================================================================================
//
//
//
//
//
//
//
// TODO: CORS and MIME type issues trying to import or fetch JSON, have to hardcode
//import * as projectData from "./s/Base_Data.json";
//import * as projectConfig from "./s/Project_Config.json";

// *********************************************************
// Main app class
class AnimatedProjectList {
  // categories of projects and associated character "tag" for use in config file
  // populated from /s/Base_Data.json
  projectTags = [];

  // projects available to be displayed in the list
  // populated from /s/Base_Data.json
  projectList = [];

  // project display configurations
  // populated from /s/Project_Config.json
  projectConfig = {};

  // *********************************************************
  // Site Configuration
  // *********************************************************
  breakpoints = [
    { name: "xs", size: 320, cols: 1 },
    { name: "sm", size: 480, cols: 2 },
    { name: "md", size: 600, cols: 3 },
    { name: "lg", size: 840, cols: 3 },
    { name: "xl", size: 1024, cols: 3 },
    { name: "xxl", size: 1280, cols: 3 },
    { name: "xxxl", size: 1440, cols: 3 },
    { name: "hd", size: 1920, cols: 3 }
  ];

  imgSrcBaseUrl = "https://blue-helicon-3bfm.squarespace.com/"; // overridden by CSS variable
  imgSrcUrlJoiner = "s/"; // path where Squarespace stores uploaded images

  // TODO: combine these into an object array?
  cssVariableNames = {
    baseUrl: "--base-url",
    projectListPadding: "--project-list-padding",
    projectItemGutter: "--project-item-gutter",
    animationTime: "--animation-time"
  };
  cssVariables = {
    baseUrl: "",
    projectListPadding: "",
    projectItemGutter: "",
    animationTime: 0
  };

  htmlIds = {
    app: "Animated-Project-List",
    list: "Animated-List",
    filters: "List-Filters",
    filterBtn: "List-Filter-"
  };
  htmlNames = {};
  cssClasses = {
    list: "animated-list",
    item: "animated-list-item",
    title: "project-title",
    unit: "unit",
    setting: "setting-container",
    sqSpItemHover: "index-item-title",
    sqSpItemHoverLink: "index-item-title-link",
    sqSpItemHoverText: "index-item-title-text"
  };

  lengthUnits = {
    px: "px",
    pcnt: "%",
    vh: "vh"
  };

  // *********************************************************
  // vars
  // *********************************************************
  debug = false;
  throttled = false;
  throttleTime = 250;
  currentBreakpoint = this.breakpoints.find(bp => bp.name === "xs");
  currentProjectView = {};
  displayList = [];

  appEl = {};
  settingsEl = {};
  settingsPanelEl = {};
  settingsBtnEl = {};
  filtersEl = {};
  listEl = {};

  /**
   * Primary state
   */
  listState = {
    listWidth: 0,
    listInnerWidth: 0,
    listPadding: 0,
    itemSize: 0, // only handles square items for now
    itemGutter: 0,
    gridCoords: [{ x: 0, y: 0 }],
    numColumns: 0,
    numRows: 0,
    fitToScreen: false,
    currentTag: "a"
  };

  // *********************************************************
  // *********************************************************

  /**
   * Constructor
   */
  constructor(projectConfig, baseData) {
    this.initialize(projectConfig, baseData);
    this.calcBreakpoint();
    this.refreshGrid();
  }

  /**
   * First-time creation and init logic
   */
  initialize(config, data) {
    // load projects from JSON files uploaded to Squarespace
    this.loadProjectsData(config, data);

    // sort the projects according to the config defined by projectsToDisplay var
    this.doInitialProjectSort();

    // get configuration settings from custom CSS we added to Squarespace
    this.populateCssVariables();

    // make css adjustment for Squarespace pages
    this.setMainElementWidth();

    // select the element that is the main entry point for the app
    this.appEl = document.getElementById(this.htmlIds.app);

    // bail if we don't have something we need
    if (
      !this.verifyRequirements(this.appEl, this.projectList, this.projectTags)
    ) {
      return;
    }

    // create the divs that will hold the filter buttons and list
    this.buildContainerElements(this.projectList, this.projectTags);

    // attach event handlers for filter buttons and window resize
    this.addEventHandlers();
  }
  /**
   * Load projects data from local JSON file
   */
  loadProjectsData(projectConfig, projectData) {
    this.log("Loading Project Data: ");
    this.log(projectData);
    this.log(projectConfig);
    this.projectList = projectData.projectList;
    this.projectTags = projectData.projectTags;
    this.projectConfig = projectConfig;
  }

  /**
   * Perform initial sort to match config in use
   */
  doInitialProjectSort() {
    this.currentProjectView = this.projectConfig.projectViews.find(
      view => view.id === projectsToDisplay
    );
    if (!this.currentProjectView) {
      throw new Error(
        "Could not find project ID: " +
          projectsToDisplay +
          ", make sure the projectsToDisplay variable at the top of this file matches one of the 'id' values from Project_Config.json"
      );
    }
    this.log("Current View: " + this.currentProjectView.id);

    // sort the projects by comparing index found in the config projectOrder array
    this.projectList.sort((a, b) => {
      return (
        this.currentProjectView.projectOrder.indexOf(a.selector) -
        this.currentProjectView.projectOrder.indexOf(b.selector)
      );
    });
  }

  /**
   * Get CSS variables defined in body of custom CSS in Squarespace
   */
  populateCssVariables() {
    let bodyStyles = window.getComputedStyle(document.body);

    for (const prop in this.cssVariableNames) {
      const cssVarName = this.cssVariableNames[prop];
      this.cssVariables[prop] = bodyStyles.getPropertyValue(cssVarName).trim();
      if (prop === "animationTime") {
        this.cssVariables[prop] = parseFloat(this.cssVariables[prop]) * 1000;
      }
    }
  }
  /**
   * Squarespace pages of "blank" type have a style applied to the <main> element that limits the width to 1280,
   * - override this here instead of in CSS so we can affect only the home page
   */
  setMainElementWidth() {
    const el = document.getElementsByTagName("main");
    el[0].style.width = "100%";
    el[0].style.maxWidth = "100%";
  }
  /**
   * Verify we have everything needed to render the list or display an error message if possible
   */
  verifyRequirements(appEl, list, tags) {
    if (!appEl) {
      this.log("Error: could not find element with ID #" + this.htmlIds.app);
      return false;
    }
    if (!list || list.length === 0) {
      appEl.innerHTML = "<p>No list data provided</p>";
      return false;
    }
    if (!tags || tags.length === 0) {
      appEl.innerHTML = "<p>No filter data provided</p>";
      return false;
    }
    return true;
  }
  /**
   * Construct the containing divs for the filter buttons and project list
   */
  buildContainerElements(list, tags) {
    this.displayList = [...list];

    // create the containers for the filter buttons and the project list
    let containers = "";
    containers += '<div id="' + this.htmlIds.filters + '"></div>';
    containers += '<div id="' + this.htmlIds.list + '"></div>';
    this.appEl.innerHTML = containers;

    // get references to the created elements to populate them
    this.filtersEl = document.getElementById(this.htmlIds.filters);
    this.listEl = document.getElementById(this.htmlIds.list);

    // add filter buttons based on project tags, e.g. to show branding projects only
    this.filtersEl.innerHTML = this.buildFilterButtons(tags);

    // build the project list items
    this.listEl.innerHTML = this.buildList();

    // get bg images for list items
    this.populateListItemBgs();
  }
  /**
   * iterate through list of items and apply background-image style using imgSrc from project
   */
  populateListItemBgs() {
    this.projectList.forEach(project => {
      let el = document.getElementById(project.selector);
      el.style.backgroundImage =
        "url(" +
        this.imgSrcBaseUrl +
        this.imgSrcUrlJoiner +
        project.imgSrc +
        ")";
    });
  }
  /**
   * Add event handlers for filter button click, window resize
   */
  addEventHandlers() {
    const filterButtons = [...this.filtersEl.children];

    filterButtons.forEach((btn, idx) => {
      btn.addEventListener("click", () => {
        // find the tag that matches the ID on the button that was clicked
        const tag = this.getTagForFilterButtonId(btn.id);
        this.updateFilterButtonState(btn.id);
        this.sortProjectsByTag(tag.tag);
      });
    });

    // add window resize event handler
    let resizeFunction = this.handleResize.bind(this);
    window.addEventListener("resize", resizeFunction);
  }

  /**
   * Get tag for ID
   */
  getTagForFilterButtonId(id) {
    const filterBtnPrefix = this.htmlIds.filterBtn;
    const tag = this.projectTags.find(pt => filterBtnPrefix + pt.tag === id);
    return tag;
  }

  /**
   * Add / remove the "selected" class from the active filter button
   */
  updateFilterButtonState(selectedBtnId) {
    // iterate through buttons and remove selected class
    this.projectTags.forEach(tag => {
      const btnId = this.htmlIds.filterBtn + tag.tag;
      const btnEl = document.getElementById(btnId);
      if (btnId === selectedBtnId) {
        btnEl.classList.add("selected");
      } else {
        btnEl.classList.remove("selected");
      }
    });
  }
  /**
   * Recalculate grid on window resize
   */
  handleResize() {
    if (!this.throttled) {
      this.throttled = true;
      setTimeout(() => {
        this.log("Handle Window Resize");
        this.refreshGrid();

        this.throttled = false;
      }, this.cssVariables.animationTime - 1);
    }
  }

  /**
   * Set breakpoint for current screen width and return true if changed
   */
  calcBreakpoint() {
    this.log("Starting Breakpoint:", this.currentBreakpoint);
    let breakpointChanged = false;
    const winWidth = window.innerWidth;
    if (!this.breakpoints || !Array.isArray(this.breakpoints)) {
      throw new Error("breakpoints missing or not an array");
    }
    const prevBpName = this.currentBreakpoint.name;
    this.breakpoints.forEach(bp => {
      if (winWidth >= bp.size) {
        this.currentBreakpoint = bp;
      }
    });
    breakpointChanged = this.currentBreakpoint.name !== prevBpName;
    this.log("Window innerWidth:" + winWidth);
    this.log("Breakpoint Changed: " + breakpointChanged);
    if (breakpointChanged) {
      this.log(this.currentBreakpoint);
    }
    return breakpointChanged;
  }

  refreshGrid() {
    this.constructGrid();
    this.renderGrid();
    this.updateListHeight();

    // re-render after animation is done to adjust for scrollbar presence
    setTimeout(() => {
      this.constructGrid();
      this.renderGrid();
      this.updateListHeight();
    }, this.cssVariables.animationTime);
  }

  /**
   * Construct grid based on displayed items
   */
  constructGrid() {
    const itemGutter = parseInt(this.cssVariables.projectItemGutter);
    const listPadding = 0; // parseInt(this.cssVariables.projectListPadding); // no padding for Squarespace
    const listWidth = this.listEl.clientWidth;
    const listInnerWidth = listWidth - listPadding * 2;
    const numCols = this.currentBreakpoint.cols;
    const numItems = this.displayList.length;
    const numGutters = numCols - 1;
    const size = (listInnerWidth - itemGutter * numGutters) / numCols;

    // calculate the x,y coordinates of each item in the list
    let i = 0,
      row = 0;
    while (i < numItems) {
      for (let j = 0; j < numCols; j++) {
        let inc = size + itemGutter;
        this.listState.gridCoords[i] = { x: j * inc, y: row * inc };
        i++;
      }
      row++;
    }
    this.listState.numColumns = numCols;
    this.listState.numRows = row;
    this.listState.itemSize = size;
    this.listState.itemGutter = itemGutter;
    this.listState.listPadding = listPadding;
    this.listState.listWidth = listWidth;
    this.listState.listInnerWidth = listInnerWidth;
  }

  /**
   * Render grid item markup
   */
  renderGrid() {
    this.displayList.forEach((project, idx) => {
      const el = document.getElementById(project.selector);
      const coords = this.listState.gridCoords[idx];
      let transformMatrix = this.getValuesFromTransformMatrix(el);

      el.style.display = "flex";
      el.style.width = this.listState.itemSize + "px";
      el.style.height = this.listState.itemSize + "px";
      transformMatrix.tx = coords.x.toString();
      transformMatrix.ty = coords.y.toString();
      transformMatrix.scaleX = 1;
      transformMatrix.scaleY = 1;

      this.setCssTransform(el, transformMatrix);

      // wait 1 cycle after setting display: flex so animation isn't cancelled
      setTimeout(() => {
        el.style.opacity = 1;
      });
    });
  }

  /**
   * filter the list of projects based on what tags they're identified with
   */
  sortProjectsByTag(tag = "a") {
    this.currentTag = tag;

    // get each project to filter out
    const removeList = this.projectList.filter(
      project => !project.tags.includes(tag)
    );
    const addList = this.projectList.filter(
      project =>
        project.tags.includes(tag) &&
        !this.displayList.find(p => p.selector === project.selector)
    );
    this.displayList = this.projectList.filter(project =>
      project.tags.includes(tag)
    );

    removeList.forEach(project => {
      let el = document.getElementById(project.selector);

      let transformMatrix = this.getValuesFromTransformMatrix(el);
      //transformMatrix.scaleX = 0;
      //transformMatrix.scaleY = 0;
      el.style.opacity = 0;
      this.setCssTransform(el, transformMatrix);

      // wait for fade-out to finish then display none so space is removed from DOM
      setTimeout(() => {
        el.style.display = "none";
      }, this.cssVariables.animationTime);
    });

    this.refreshGrid();
  }

  /**
   * Get last element in display list and calculate height of list parent container
   */
  updateListHeight() {
    const numGutters = this.listState.numRows - 1;
    const rowsSize = this.listState.itemSize * this.listState.numRows;
    const guttersSize = this.listState.itemGutter * numGutters;
    const height = rowsSize + guttersSize + this.listState.listPadding * 2;
    this.listEl.style.height = height + "px";
  }

  /**
   * Get style of item element
   */
  getListItemStyle(idx = 0) {
    const listItem = this.getListItem(idx);
    const itemStyle = window.getComputedStyle(listItem);
    return itemStyle;
  }
  /**
   * Get html element of list item for first or optional passed index element
   */
  getListItemEl(idx = 0) {
    const listItem = this.listEl.getElementsByClassName(this.cssClasses.item);
    return listItem[idx];
  }

  /**
   * Parse CSS transform matrix string and return object
   */
  getValuesFromTransformMatrix(element) {
    let computedStyles = window.getComputedStyle(element);

    let transformMatrix =
      computedStyles.transform ||
      computedStyles.webkitTransform ||
      computedStyles.mozTransform;

    if (transformMatrix === "none") {
      transformMatrix = "matrix(0, 0, 0, 0, 0, 0)";
    }

    // Can either be 2d or 3d transform
    const matrixType = transformMatrix.includes("3d") ? "3d" : "2d";
    let matrix = {
      tx: 0,
      ty: 0,
      tz: 0,
      scaleX: 0,
      scaleY: 0,
      skewX: 0,
      skewY: 0
    };
    // regex to parse values from "matrix(#, #, #, #, #)" format
    // starts with matrix, any number of chars, open paren, group of 1+ chars, close paren
    const matrixRegexMatch = transformMatrix.match(/^matrix.*\((.+)\)/);
    // first item in match array is entire string, second is group of chars inside parens
    const vals = matrixRegexMatch[1];
    const matrixValues = vals.split(", ");

    if (matrixType === "2d") {
      // matrix( scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY() )
      // for 2D matrix, 5th = X, 6th = Y transform value
      matrix = {
        tx: matrixValues[4],
        ty: matrixValues[5],
        scaleX: matrixValues[0],
        // https://stackoverflow.com/questions/30528819/matrix-scale-transition-not-working
        scaleY: matrixValues[3],
        skewX: matrixValues[1],
        skewY: matrixValues[2]
      };
    } else if (matrixType === "3d") {
      throw new Error("3D matrix not implemented");
      // for 3D matrix, 12th = X, 13th = Y, 14th = Z transform value
      // sx = matrixValues[0];
      // sy = matrixValues[11]; ???
      // tx = matrixValues[12];
      // ty = matrixValues[13];
      // tz = matrixValues[14];
    }
    return matrix;
  }

  /**
   * Create CSS transform matrix string from object
   */
  setCssTransform(element, matrix) {
    let transform = "matrix(";
    transform +=
      this.getScaleValue(matrix.scaleX) +
      ", " +
      matrix.skewX +
      ", " +
      matrix.skewY +
      ", " +
      this.getScaleValue(matrix.scaleY) +
      ", " +
      matrix.tx +
      ", " +
      matrix.ty +
      ")";
    element.style.transform = transform;
    this.getValuesFromTransformMatrix(element);
  }

  /**
   * Using 0 as a value in the transform matrix causes animations not to run
   * use 0.001 instead
   */
  getScaleValue(value) {
    if (!value || value === 0) {
      return 0.001;
    }
    return value;
  }

  /**
   * construct the button elements for the filter buttons
   */
  buildFilterButtons(filterList) {
    let buttons = "";

    // sort the project categories according to the current configuration
    filterList.sort((a, b) => {
      return (
        this.currentProjectView.categoryOrder.indexOf(a.tag) -
        this.currentProjectView.categoryOrder.indexOf(b.tag)
      );
    });

    filterList.forEach((filter, index) => {
      const btnId = this.htmlIds.filterBtn + filter.tag;
      const btnClass = index === 0 ? "selected" : "";
      const markup = this.generateElement(
        "button",
        btnId,
        btnClass,
        filter.display
      );
      buttons += markup;
    });
    return buttons;
  }

  /**
   * Construct the list of project items
   * - items are hidden with display: none, only need to build the list once
   */
  buildList() {
    let listHtml = "";
    this.displayList.forEach((project, index) => {
      const projectItem = this.projectList[index];
      const cssClass = this.buildProjectCssClasses(index);
      const tags = this.buildProjectTagList(project.tags);

      let template = this.buildListItem(projectItem, cssClass, tags);
      listHtml += template;
    });
    return listHtml;
  }

  /**
   * build the list of project tags separated by commas, without 'a' for All
   */
  buildProjectTagList(tagList) {
    let tags = "<span>";
    tags += tagList.filter(tag => tag !== "a").join(", ");
    tags += "</span>";
    return tags;
  }

  /**
   * Generate class for project item, e.g. "animated-list-item animated-list-item-1"
   */
  buildProjectCssClasses(itemId) {
    return (
      this.cssClasses.item +
      " " +
      this.cssClasses.item +
      "-" +
      itemId +
      " " +
      this.cssClasses.sqSpItemHover
    );
  }

  /**
   * Build the markup for an animated-list-item from innermost element out
   * - NOTE: tagSpan is not currently displayed
   */
  buildListItem(project, cssClass, tagSpan) {
    let markup = this.generateElement(
      "span",
      undefined,
      undefined,
      project.title
    );
    markup = this.generateElement(
      "div",
      undefined,
      this.cssClasses.title + " " + this.cssClasses.sqSpItemHoverText,
      markup
    );
    markup = this.generateElement(
      "a",
      { href: project.url },
      this.cssClasses.sqSpItemHoverLink,
      markup
    );
    markup = this.generateElement("div", project.selector, cssClass, markup);

    return markup;
  }

  /**
   * Helper function to generate HTML elements
   */
  generateElement(
    tag,
    attributes = "",
    classes = "",
    content = "",
    addCloseTag = true,
    onlyCloseTag = false,
    selfClosing = false
  ) {
    if (!tag || tag === "") {
      return "<div>Invalid element: " + tag + "</div>";
    }

    let attrs = "";
    // single string attribute is assumed to be ID
    if (attributes !== "") {
      if (typeof attributes === "string") {
        attrs = ' id="' + attributes + '"';
      } else {
        // otherwise build a list of attributes based on the passed object
        const keys = Object.keys(attributes);
        keys.forEach(key => {
          attrs += " " + key + '="' + attributes[key] + '"';
        });
      }
    }

    let markup = "";
    if (onlyCloseTag) {
      markup = this.generateElement(
        "div",
        undefined,
        undefined,
        undefined,
        false,
        true
      );
      return markup;
    }
    markup = "<" + tag;
    markup += attrs;
    markup += classes !== "" ? ' class="' + classes + '"' : "";
    markup += selfClosing ? "/>" : ">";
    markup += content !== "" ? content : "";
    markup += addCloseTag && !selfClosing ? "</" + tag + ">" : "";
    return markup;
  }

  log(message) {
    if (this.debugOutput) {
      console.log(message);
    }
  }
}

// *********************************************************
// *********************************************************
// *********************************************************
// App Initialization
console.log("Creating Animated List...");
var mainApp;
const baseData = {
  projectTags,
  projectList
};

if (window.Squarespace) {
  console.log("Initializing for Squarespace");
  window.Squarespace.onInitialize(Y, () => {
    // check if we're loading the Home page
    const animatedList = document.getElementById("Animated-Project-List");
    if (!!animatedList) {
      // TODO - refactor the code to be able just call init function if AJAX call is reloading page rather than recreate
      if (mainApp) {
        // console.log("APP ALREADY CREATED");
        mainApp = new AnimatedProjectList(projectConfig, baseData);
      } else {
        // console.log("CREATING NEW APP");
        mainApp = new AnimatedProjectList(projectConfig, baseData);
      }
    }
  });
} else {
  console.log("Squarespace not detected");
  mainApp = new AnimatedProjectList(projectConfig, baseData);
}

console.log("Initialization Complete!");

// UNCOMMENT THE LINE BELOW for Squarespace
// </script>
