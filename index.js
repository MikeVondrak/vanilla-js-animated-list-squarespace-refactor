// import stylesheet to have access to CSS vars
import "./css/style.css";

// *********************************************************
// Main app class
class AnimatedProjectList {
  // *********************************************************
  // Project Configuration - ENTER YOUR PROJECTS HERE
  // *********************************************************
  projectTags = {
    All: "a",
    Branding: "b",
    Illustration: "i",
    "UI-UX": "u",
    Pattern: "p",
    Books: "k"
  };

  // define the projects that will be displayed in the list
  imgSrcUrl = "https://blue-helicon-3bfm.squarespace.com/";
  projectList = [
    {
      selector: "WynkoopAlley",
      title: "Wynkoop Alley",
      url: "/projects/wynkoop-alley",
      imgSrc: this.imgSrcUrl + "s/tile-wynkoop-alley.png",
      tags: ["a", "b", "i", "p"]
    },
    {
      selector: "CohesionBrewing",
      title: "Cohesion Brewing",
      url: "/projects/cohesion-brewing",
      imgSrc: this.imgSrcUrl + "s/tile-cohesion-brewing.gif",
      tags: ["a", "b", "p"]
    },
    {
      selector: "NorthWynkoop",
      title: "North Wynkoop",
      url: "/projects/north-wynkoop",
      imgSrc: this.imgSrcUrl + "s/tile-north-wynkoop.jpg",
      tags: ["a", "b", "u", "p"]
    },
    {
      selector: "Guava",
      title: "Guava",
      url: "/projects/guava",
      imgSrc: this.imgSrcUrl + "s/tile-guava.gif",
      tags: ["a", "b", "i"]
    },
    {
      selector: "Nod",
      title: "Nod",
      url: "/projects/nod",
      imgSrc: this.imgSrcUrl + "s/tile-nod.jpg",
      tags: ["a", "i", "p"]
    },
    {
      selector: "HappyBikes",
      title: "Happy Bikes",
      url: "/projects/happy-bikes",
      imgSrc: this.imgSrcUrl + "s/tile-happy-bikes.jpg",
      tags: ["a", "i", "p"]
    },
    {
      selector: "KnottyTieConfigurator",
      title: "Knotty Tie Configurator",
      url: "/projects/knotty-tie-configurator",
      imgSrc: this.imgSrcUrl + "s/tile-knotty-tie-configurator.jpg",
      tags: ["a", "u"]
    },
    {
      selector: "EatItUp",
      title: "Eat it Up!",
      url: "/projects/eat-it-up",
      imgSrc: this.imgSrcUrl + "s/tile-eat-it-up.jpg",
      tags: ["a", "i", "k"]
    },
    {
      selector: "KnottyTieRebrand",
      title: "Knotty Tie Rebrand",
      url: "/projects/knotty-tie-rebrand",
      imgSrc: this.imgSrcUrl + "s/tile-knotty-tie-rebrand.jpg",
      tags: ["a", "b", "i", "u"]
    },
    {
      selector: "SpectrumIllustrationRebrand",
      title: "Spectrum Illustration Rebrand",
      url: "/projects/spectrum-illustration-rebrand",
      imgSrc: this.imgSrcUrl + "s/tile-spectrum-illustration-rebrand.png",
      tags: ["a", "b", "i"]
    },
    {
      selector: "SpectrumUxUi",
      title: "Spectrum UX / UI",
      url: "/projects/spectrum-ux-ui",
      imgSrc: this.imgSrcUrl + "s/tile-spectrum-ux-ui.jpg",
      tags: ["a", "b", "u"]
    },
    {
      selector: "ACuriousHarvest",
      title: "A Curious Harvest",
      url: "/projects/a-curious-harvest",
      imgSrc: this.imgSrcUrl + "s/tile-a-curious-harvest.jpg",
      tags: ["a", "k", "i"]
    },
    {
      selector: "HomeRemedy",
      title: "Home Remedy",
      url: "/projects/home-remedy",
      imgSrc: this.imgSrcUrl + "s/tile-home-remedy.png",
      tags: ["a", "i", "k"]
    },
    {
      selector: "TheDailyVegan",
      title: "The Daily Vegan",
      url: "/projects/the-daily-vegan",
      imgSrc: this.imgSrcUrl + "s/tile-the-daily-vegan.gif",
      tags: ["a", "k", "i"]
    }
  ];
  // *********************************************************
  // End Configuration - DO NOT EDIT BELOW HERE
  // *********************************************************

  // *********************************************************
  // Site Configuration
  // *********************************************************
  breakpoints = [
    { name: "xs", size: 320, cols: 1 },
    { name: "sm", size: 480, cols: 2 },
    { name: "md", size: 600, cols: 3 },
    { name: "lg", size: 840, cols: 3 },
    { name: "xl", size: 1024, cols: 4 },
    { name: "hd", size: 1440, cols: 5 }
  ];

  cssVariableNames = {
    numberOfProjects: "--number-of-projects",
    projectListPadding: "--project-list-padding",
    projectItemHeight: "--project-item-height",
    projectItemGutter: "--project-item-gutter",
    fadeTime: "--fade-time",
    transformTime: "--transform-time"
  };

  cssVariables = {
    numberOfProjects: 0,
    projectListPadding: "",
    projectItemHeight: "",
    projectItemGutter: "",
    fadeTime: 0,
    transformTime: 0
  };

  htmlIds = {
    app: "Animated-Project-List",
    list: "Animated-List",
    filters: "List-Filters",
    settings: "Animation-Settings",
    settingsPanel: "Animation-Settings-Panel",
    inputItemHeight: "Input-Item-Height",
    inputItemHeightUnit: "Input-Item-Height-Unit",
    inputItemsPerRow: "Input-Items-Per-Row"
  };
  htmlNames = {
    itemHeightUnit: "Item-Height-Unit-Radio"
  };
  cssClasses = {
    list: "animated-list",
    item: "animated-list-item",
    title: "project-title",
    unit: "unit",
    setting: "setting-container"
  };

  lengthUnits = {
    px: "px",
    pcnt: "%",
    vh: "vh"
  };

  // *********************************************************
  // vars
  // *********************************************************
  throttled = false;
  throttleTime = 20;
  currentBreakpoint = this.breakpoints.find(bp => bp.name === "xs");
  displayList = [];
  settingsShowing = false;

  appEl = {};
  settingsEl = {};
  settingsPanelEl = {};
  settingsBtnEl = {};
  filtersEl = {};
  listEl = {};

  currentTag = "a";

  /**
   * Primary state
   */
  listState = {
    listWidth: 0,
    numberOfColumns,
    columnWidth: 0,
    gridCoords: [[0, 0]],
    fitToScreen: false,
    currentTag: "a",

    columnCoordsX: [],
    column2Pos: 0
  };

  perRow = 3;
  alternatingRows = false;

  // list: array of project objects to list
  // tags: object with tag / id pairs to create filter buttons
  constructor() {
    this.initialize();
  }

  initialize() {
    this.populateCssVariables();
    this.calcBreakpoint();

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

    // run once upon construction
    this.buildContainerElements(this.projectList, this.projectTags);
    this.addEventHandlers();

    // add window resize event handler
    let f = this.handleResize.bind(this);
    window.addEventListener("resize", f);

    // draw the list of items
    this.populateListItems();
    this.updateListHeight();

    //this.sortProjectsByTag("a");
    this.handleResize();
    this.updateSettingsValues();
  }

  verifyRequirements(appEl, list, tags) {
    if (!appEl) {
      console.log("Error: could not find element with ID #" + this.htmlIds.app);
      return false;
    }
    if (!list) {
      appEl.innerHTML = "<p>No list data provided</p>";
      return false;
    }
    if (!tags) {
      appEl.innerHTML = "<p>No filter data provided</p>";
      return false;
    }
    return true;
  }

  // Squarespace pages of "blank" type have a style applied to the <main> element that limits the width to 1280,
  // override this here instead of in CSS so we can affect only the home page
  setMainElementWidth() {
    const el = document.getElementsByTagName("main");
    el[0].style.width = "100%";
    el[0].style.maxWidth = "100%";
  }

  populateCssVariables() {
    let bodyStyles = window.getComputedStyle(document.body);

    for (const prop in this.cssVariableNames) {
      const cssVarName = this.cssVariableNames[prop];
      this.cssVariables[prop] = bodyStyles.getPropertyValue(cssVarName).trim();
    }
  }

  // construct the containing elements for the filter buttons and project list
  // RUN ONCE
  buildContainerElements(list, tags) {
    this.displayList = [...list];

    // create the containers for the filter buttons and the project list
    let containers = '<div id="' + this.htmlIds.settings + '"></div>';
    containers += '<div id="' + this.htmlIds.filters + '"></div>';
    containers += '<div id="' + this.htmlIds.list + '"></div>';
    this.appEl.innerHTML = containers;

    // get references to the created elements to populate them
    this.settingsEl = document.getElementById(this.htmlIds.settings);
    this.filtersEl = document.getElementById(this.htmlIds.filters);
    this.listEl = document.getElementById(this.htmlIds.list);

    // expandable section with animation / layout settings
    this.settingsEl.innerHTML = this.buildSettings();
    this.settingsPanelEl = document.getElementById(this.htmlIds.settingsPanel);

    this.settingsBtnEl = this.settingsEl.getElementsByTagName("button")[0];

    // add filter links based on project tags, e.g. to show branding projects only
    this.filtersEl.innerHTML = this.buildFilterButtons(tags);

    this.listEl.innerHTML = this.buildList();
  }

  buildUnitsGroup(id) {
    const radioAttrs = {
      type: "radio",
      name: this.htmlNames.itemHeightUnit
    };
    let markup = "";
    Object.keys(this.lengthUnits).forEach((unit, idx) => {
      const elId = id + "-" + unit;
      const elAttrs =
        idx === 0
          ? { ...radioAttrs, id: elId, value: unit, checked: true }
          : { ...radioAttrs, id: elId, value: unit };
      let radio = this.generateElement(
        "input",
        elAttrs,
        this.cssClasses.unit,
        undefined,
        false,
        false,
        true
      );
      let label = this.generateElement(
        "label",
        { for: elId },
        this.cssClasses.unit,
        this.lengthUnits[unit]
      );
      markup += radio + label;
    });
    return markup;
  }

  // construct the settings controls for animations and layout
  buildSettings() {
    const toggleSettingsButton = this.generateElement(
      "button",
      "",
      undefined,
      "&#x25BC;"
    );

    // item height setting
    const heightTextboxLabel = this.generateElement(
      "label",
      { for: this.htmlIds.inputItemHeight },
      undefined,
      "Item Height:"
    );
    const heightTextboxInput = this.generateElement("input", {
      id: this.htmlIds.inputItemHeight,
      type: "textbox"
    });
    const radios = this.buildUnitsGroup(this.htmlIds.inputItemHeightUnit);
    const heightSetting = this.generateElement(
      "div",
      undefined,
      this.cssClasses.setting,
      heightTextboxLabel + heightTextboxInput + radios
    );

    // number of items per row setting
    const perRowTextboxLabel = this.generateElement(
      "label",
      { for: this.htmlIds.inputItemsPerRow },
      undefined,
      "Per Row:"
    );
    const perRowTextboxInput = this.generateElement("input", {
      id: this.htmlIds.inputItemsPerRow,
      type: "textbox"
    });
    const perRowSetting = this.generateElement(
      "div",
      undefined,
      this.cssClasses.setting,
      perRowTextboxLabel + perRowTextboxInput
    );

    // combine settings for panel
    const settingsContent = this.generateElement(
      "div",
      undefined,
      undefined,
      heightSetting + perRowSetting
    );
    const settingsPanel = this.generateElement(
      "div",
      this.htmlIds.settingsPanel,
      undefined,
      settingsContent
    );

    const content = toggleSettingsButton + settingsPanel;
    return content;
  }

  // construct the button elements for the filter buttons
  // RUN ONCE
  buildFilterButtons(filterList) {
    let buttons = "";
    let keys = Object.keys(filterList);
    keys.forEach((filter, index) => {
      const btnClass = index === 0 ? "selected" : "";
      const markup = this.generateElement("button", filter, btnClass, filter);
      buttons += markup;
    });
    return buttons;
  }

  // build the list of project tags separated by commas, without 'a' for All
  buildProjectTagList(tagList) {
    let tags = "<span>";
    tags += tagList.filter(tag => tag !== "a").join(", ");
    tags += "</span>";
    return tags;
  }

  // e.g. "animated-list-item animated-list-item-1"
  buildProjectCssClasses(itemId) {
    return this.cssClasses.item + " " + this.cssClasses.item + "-" + itemId;
  }

  buildListItem(project, cssClass, tagSpan) {
    // generateElement: tag, id, class, content, add close tag, only close tag
    // build the markup for an animated-list-item from innermost element out
    let markup = this.generateElement(
      "div",
      undefined,
      this.cssClasses.title,
      project.title
    );
    markup = this.generateElement(
      "a",
      { href: project.url },
      undefined,
      markup
    );
    markup = this.generateElement("div", project.selector, cssClass, markup);

    return markup;
  }

  buildList() {
    let listHtml = "";
    this.displayList.forEach((project, index) => {
      const projectItem = this.projectList[index];
      const cssClass = this.buildProjectCssClasses(index);
      const tags = this.buildProjectTagList(project.tags);

      let template = this.buildListItem(projectItem, cssClass, tags);

      // and add it to the list element
      listHtml += template;
    });
    return listHtml;
  }

  addEventHandlers() {
    const filterButtons = [...this.filtersEl.children];

    filterButtons.forEach((btn, idx) => {
      btn.addEventListener("click", () => {
        const tag = Object.keys(this.projectTags).find(key => key === btn.id);
        const tagId = this.projectTags[tag];
        this.updateFilterButtonState(btn.id);
        this.sortProjectsByTag(tagId);
      });
    });

    this.settingsBtnEl.addEventListener("click", () => {
      this.toggleSettingsPanel();
    });
    document
      .getElementById(this.htmlIds.inputItemHeight)
      .addEventListener("input", this.itemHeightChanged.bind(this));
    Object.keys(this.lengthUnits).forEach(unit => {
      const inputId = this.htmlIds.inputItemHeightUnit + "-" + unit;
      document
        .getElementById(inputId)
        .addEventListener("input", this.itemHeightUnitChanged.bind(this));
    });

    document
      .getElementById(this.htmlIds.inputItemsPerRow)
      .addEventListener("input", this.projectsPerRowChange.bind(this));
  }

  populateListItems() {
    // iterate through list of items and apply background-image style using imgSrc from project
    this.projectList.forEach(project => {
      let el = document.getElementById(project.selector);
      el.style.backgroundImage = "url(" + project.imgSrc + ")";

      //let linkEl = el.getElementsByTagName("h2")[0];
      // this is a class in Squarespace to set larger font size
      //linkEl.classList.add("index-item-title");
    });

    const items = document.getElementsByClassName(this.cssClasses.item);
  }

  updateFilterButtonState(selectedBtnId) {
    // iterate through buttons and remove selected class
    Object.keys(this.projectTags).forEach(tag => {
      const btnEl = document.getElementById(tag);
      if (tag === selectedBtnId) {
        btnEl.classList.add("selected");
      } else {
        btnEl.classList.remove("selected");
      }
    });
  }

  updateListHeight() {
    const itemHeight = this.getCurrentListItemHeightPx();
    const gutterHeight = parseInt(this.cssVariables.projectItemGutter);
    const paddingHeight = parseInt(this.cssVariables.projectListPadding);

    let numRows = 0;

    if (this.displayList.length % 3 === 0) {
      numRows = (this.displayList.length / 3) * 2;
    } else {
      numRows = Math.floor(2 * ((this.displayList.length - 1) / 3) + 1);
    }

    const calcHeight =
      (itemHeight + gutterHeight) * numRows + paddingHeight * 2;

    this.listEl.style.height = calcHeight.toString() + "px";
  }

  getListState() {
    const columnGutter = parseInt(this.cssVariables.projectItemGutter);
    const curStyle = window.getComputedStyle(this.listEl);
    const listPadding = parseInt(curStyle.paddingLeft);
    const listWidth = parseInt(curStyle.width) - listPadding * 2;
    const columnWidth =
      (listWidth - columnGutter * (this.perRow - 1)) / this.perRow;

    // leftmost element starts at 0, fill in X coordinates of columns based on number per row
    const columnXPos = [0];
    for (let i = 1; i < this.perRow; i++) {
      let colPos = columnWidth * i + columnGutter * i;
      columnXPos.push(colPos);
    }
    this.listState = {
      listWidth: listWidth,
      columnWidth: columnWidth,
      column2Pos: columnWidth + columnGutter,
      columnCoordsX: columnXPos
    };
  }

  setupColumnPropertiesForRow(el, idx, transformMatrix, rowCounter) {
    // every third project takes up 2 columns, all others 1
    if (this.alternatingRows && (idx + 1) % 3 === 0) {
      el.style.width = this.listState.listWidth + "px";
      rowCounter++;
    } else {
      el.style.width = this.listState.columnWidth + "px";

      // TODO: support setting static height vs calc??
      el.style.height = this.getListItemHeightSquare() + "px";

      // move element to next row
      const colIdx = idx % this.perRow;
      //debugger;
      transformMatrix.tx = this.listState.columnCoordsX[colIdx];
      if ((idx + 1) % this.perRow === 0) {
        rowCounter++;
      }
    }
    return rowCounter;
  }

  getCurrentListItemHeightPx() {
    const itemStyle = this.getListItemStyle();
    return parseInt(itemStyle.height);
  }

  getListItemHeightSquare() {
    const itemStyle = this.getListItemStyle();
    const itemWidth = itemStyle.width;
    console.log("%%%%%%%%%%%%% item width: " + itemWidth);
    return parseInt(itemWidth);
  }

  getListItemStyle() {
    const listItem = this.listEl.getElementsByClassName(
      this.cssClasses.item
    )[0];
    const itemStyle = window.getComputedStyle(listItem);
    return itemStyle;
  }

  renderDisplayList() {
    this.getListState();
    let rowCounter = 0;
    this.displayList.forEach((project, idx) => {
      let el = document.getElementById(project.selector);

      let transformMatrix = this.getValuesFromTransformMatrix(el);
      transformMatrix.scaleX = 1;
      transformMatrix.scaleY = 1;
      el.style.display = "flex";

      //const itemHeight = this.getCurrentListItemHeightPx();
      const itemHeight = this.getListItemHeightSquare();
      const itemGutter = parseInt(this.cssVariables.projectItemGutter);

      transformMatrix.ty = rowCounter * (itemHeight + itemGutter);
      transformMatrix.tx = 0; // reset for logic below

      rowCounter = this.setupColumnPropertiesForRow(
        el,
        idx,
        transformMatrix,
        rowCounter
      );

      this.setCssTransform(el, transformMatrix);

      // wait 1 cycle after setting display back to 'flex' so animation isn't cancelled
      setTimeout(() => {
        el.style.opacity = 1;
      });
    });
  }

  // filter the list of projects based on what tags they're identified with
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
      }, this.cssVariables.fadeTime);
    });

    this.getListState();
    const listWidth = this.listState.listWidth;
    const columnWidth = this.listState.columnWidth;
    const column2Pos = this.listState.column2Pos;

    console.log(
      ">>>>> listWidth: " +
        listWidth +
        ", columnWidth: " +
        columnWidth +
        ", column2Pos: " +
        column2Pos
    );

    this.renderDisplayList();
    this.updateListHeight();

    console.log("removeList", removeList);
    console.log("addList", addList);
    console.log("displayList", this.displayList);

    // wait for animation to finish so DOM is up to date after setting display 'flex' on items
    setTimeout(() => {
      this.renderDisplayList();
      // NEED updateList function to redraw items after scrollbar has been shown/hidden based on content length triggered by setting display 'none' or 'flex'
    }, this.cssVariables.fadeTime);
  }

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

  getScaleValue(value) {
    if (!value || value === 0) {
      return 0.001;
    }
    return value;
  }

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

  handleResize() {
    if (!this.throttled) {
      this.calcBreakpoint();
      this.setColumnsPerBreakpoint();
      this.sortProjectsByTag(this.currentTag);

      this.throttled = true;
      setTimeout(() => {
        console.log("############# HANDLE RESIZE");
        this.throttled = false;
      }, this.throttleTime);
    }
  }

  setColumnsPerBreakpoint() {
    if (
      this.displayList &&
      this.displayList.length < this.currentBreakpoint.cols
    ) {
      this.perRow = this.displayList.length ? this.displayList.length : 1;
      //this.renderDisplayList();
      const h = this.getListItemHeightSquare();
      console.log("+++++++++ new item height: " + h);
      this.setItemsHeight(h, "px");
    } else {
      console.log(
        "+++++++++ items > perRow: " +
          this.displayList.length +
          " " +
          this.perRow
      );
      this.perRow = this.currentBreakpoint.cols;
    }
  }

  calcBreakpoint() {
    const winWidth = window.innerWidth;
    if (!this.breakpoints || !Array.isArray(this.breakpoints)) {
      debugger;
      return;
    }
    this.breakpoints.forEach(bp => {
      if (winWidth >= bp.size) {
        this.currentBreakpoint = bp;
      }
    });
    console.log(
      "*********** WIDTH:" + winWidth + ", CURRENT BREAKPOINT: ",
      this.currentBreakpoint
    );
  }

  toggleSettingsPanel() {
    if (this.settingsShowing) {
      this.settingsPanelEl.classList.remove("expanded");
      setTimeout(() => {
        this.settingsPanelEl.style.display = "none";
        this.settingsShowing = false;
      }, this.cssVariables.fadeTime);
    } else {
      this.settingsPanelEl.style.display = "block";
      this.settingsShowing = true;
      setTimeout(() => {
        this.settingsPanelEl.classList.add("expanded");
      }, 10);
    }
  }

  updateSettingsValues() {
    // get the current item style
    const projectTileItem = document.getElementsByClassName(
      this.cssClasses.item
    )[0];
    const istyle = projectTileItem.style.height;
    const itemStyles = window.getComputedStyle(projectTileItem);
    let itemHeight = itemStyles.getPropertyValue("height");
    // parse value and units from height string
    let heightVal = parseInt(itemHeight);
    let heightUnit = itemHeight.match(/\D+$/)[0]; // get the existing unit

    const inputs = this.settingsPanelEl.getElementsByTagName("input");
    for (let input of inputs) {
      switch (input.id) {
        case this.htmlIds.inputItemHeight:
          input.value = heightVal;
          break;
      }
    }
  }

  itemHeightChanged(event) {
    const heightInput = document.getElementById(this.htmlIds.inputItemHeight);
    const newHeightValue = heightInput.value; //event.target.value;
    const inputs = this.settingsPanelEl.getElementsByTagName("input");
    let selectedUnit;

    for (let input of inputs) {
      if (input.checked) {
        selectedUnit = input.value;
      }
    }
    this.cssVariables.projectItemHeight = newHeightValue + selectedUnit;
    this.setItemsHeight(newHeightValue, selectedUnit);
    this.sortProjectsByTag(this.currentTag);
  }

  setItemsHeight(height, unit) {
    const projectTileItems = document.getElementsByClassName(
      this.cssClasses.item
    );
    for (let item of projectTileItems) {
      item.style.height = height + unit;
    }
  }

  itemHeightUnitChanged(event) {
    this.itemHeightChanged(event);
  }

  projectsPerRowChange(event) {
    const perRowInput = document.getElementById(this.htmlIds.inputItemsPerRow);
    this.perRow = parseInt(perRowInput.value) || 0;
    this.sortProjectsByTag(this.currentTag);
  }

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
}

// *********************************************************
// Initialization
console.log("Initialzing...");
var mainApp;

if (window.Squarespace) {
  console.log("Detected Squarespace");
  window.Squarespace.onInitialize(Y, () => {
    // check if we're loading the Home page
    const animatedList = document.getElementById("Animated-Project-List");
    if (!!animatedList) {
      // TODO - refactor the code to be able just call init function if AJAX call is reloading page rather than recreate
      if (mainApp) {
        console.log("APP ALREADY CREATED");
        mainApp = new AnimatedProjectList();
      } else {
        console.log("CREATING NEW APP");
        mainApp = new AnimatedProjectList();
      }
    }
  });
} else {
  console.log("No Squarespace detected, normal init");
  mainApp = new AnimatedProjectList();
}

console.log("!!!!!!!!!!!!!! APP INITIALIZED");
