"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[4842],{4842:(o,e,t)=>{t.r(e),t.d(e,{default:()=>D,initToolGroups:()=>s,moreTools:()=>v,toolbarButtons:()=>m});var a=t(84793),i=t(73577);const n=JSON.parse('{"u2":"@ohif/mode-longitudinal"}').u2,l={"viewport-0":"rgb(200, 0, 0)","viewport-1":"rgb(200, 200, 0)","viewport-2":"rgb(0, 200, 0)"},r={axial:"rgb(200, 0, 0)",sagittal:"rgb(200, 200, 0)",coronal:"rgb(0, 200, 0)"};const s=function(o,e,t,a){!function(o,e,t,a,i){const n=o.getModuleEntry("@ohif/extension-cornerstone.utilityModule.tools"),{toolNames:l,Enums:r}=n.exports,s={active:[{toolName:l.WindowLevel,bindings:[{mouseButton:r.MouseBindings.Primary}]},{toolName:l.Pan,bindings:[{mouseButton:r.MouseBindings.Auxiliary}]},{toolName:l.Zoom,bindings:[{mouseButton:r.MouseBindings.Secondary}]},{toolName:l.StackScrollMouseWheel,bindings:[]}],passive:[{toolName:l.Length},{toolName:l.ArrowAnnotate,configuration:{getTextCallback:(o,e)=>{i?o(" "):t.runCommand("arrowTextCallback",{callback:o,eventDetails:e})},changeTextCallback:(o,e,a)=>{void 0===i&&t.runCommand("arrowTextCallback",{callback:a,data:o,eventDetails:e})}}},{toolName:l.Bidirectional},{toolName:l.DragProbe},{toolName:l.Probe},{toolName:l.EllipticalROI},{toolName:l.CircleROI},{toolName:l.RectangleROI},{toolName:l.StackScroll},{toolName:l.Angle},{toolName:l.CobbAngle},{toolName:l.Magnify},{toolName:l.SegmentationDisplay},{toolName:l.CalibrationLine},{toolName:l.PlanarFreehandContourSegmentation,configuration:{displayOnePointAsCrosshairs:!0}},{toolName:l.UltrasoundDirectional},{toolName:l.PlanarFreehandROI},{toolName:l.SplineROI},{toolName:l.LivewireContour},{toolName:l.WindowLevelRegion}],enabled:[{toolName:l.ImageOverlayViewer},{toolName:l.ReferenceLines}],disabled:[{toolName:l.AdvancedMagnify}]};e.createToolGroupAndAddTools(a,s)}(o,e,t,"default",a),function(o,e){const t=o.getModuleEntry("@ohif/extension-cornerstone-dicom-sr.utilityModule.tools");if(!t)return;const a=o.getModuleEntry("@ohif/extension-cornerstone.utilityModule.tools"),{toolNames:i}=t.exports,{toolNames:n,Enums:l}=a.exports,r={active:[{toolName:n.WindowLevel,bindings:[{mouseButton:l.MouseBindings.Primary}]},{toolName:n.Pan,bindings:[{mouseButton:l.MouseBindings.Auxiliary}]},{toolName:n.Zoom,bindings:[{mouseButton:l.MouseBindings.Secondary}]},{toolName:n.StackScrollMouseWheel,bindings:[]}],passive:[{toolName:i.SRLength},{toolName:i.SRArrowAnnotate},{toolName:i.SRBidirectional},{toolName:i.SREllipticalROI},{toolName:i.SRCircleROI},{toolName:i.SRPlanarFreehandROI},{toolName:i.SRRectangleROI},{toolName:n.WindowLevelRegion},{toolName:i.SRPlanarFreehandContourSegmentation,configuration:{displayOnePointAsCrosshairs:!0}}],enabled:[{toolName:i.DICOMSRDisplay,bindings:[]}]};e.createToolGroupAndAddTools("SRToolGroup",r)}(o,e),function(o,e,t,a){const i=o.getModuleEntry("@ohif/extension-cornerstone.utilityModule.tools"),n=o._servicesManager,{cornerstoneViewportService:s}=n.services,{toolNames:c,Enums:d}=i.exports,m={active:[{toolName:c.WindowLevel,bindings:[{mouseButton:d.MouseBindings.Primary}]},{toolName:c.Pan,bindings:[{mouseButton:d.MouseBindings.Auxiliary}]},{toolName:c.Zoom,bindings:[{mouseButton:d.MouseBindings.Secondary}]},{toolName:c.StackScrollMouseWheel,bindings:[]}],passive:[{toolName:c.Length},{toolName:c.ArrowAnnotate,configuration:{getTextCallback:(o,e)=>{a?o(""):t.runCommand("arrowTextCallback",{callback:o,eventDetails:e})},changeTextCallback:(o,e,i)=>{void 0===a&&t.runCommand("arrowTextCallback",{callback:i,data:o,eventDetails:e})}}},{toolName:c.Bidirectional},{toolName:c.DragProbe},{toolName:c.Probe},{toolName:c.EllipticalROI},{toolName:c.CircleROI},{toolName:c.RectangleROI},{toolName:c.StackScroll},{toolName:c.Angle},{toolName:c.CobbAngle},{toolName:c.PlanarFreehandROI},{toolName:c.SegmentationDisplay},{toolName:c.WindowLevelRegion},{toolName:c.PlanarFreehandContourSegmentation,configuration:{displayOnePointAsCrosshairs:!0}}],disabled:[{toolName:c.Crosshairs,configuration:{viewportIndicators:!0,viewportIndicatorsConfig:{circleRadius:5,xOffset:.95,yOffset:.05},disableOnPassive:!0,autoPan:{enabled:!1,panSize:10},getReferenceLineColor:o=>{const e=s.getViewportInfo(o),t=e?.viewportOptions;return t?l[t.id]||r[t.orientation]||"#0c0":(console.warn("missing viewport?",o),"#0c0")}}},{toolName:c.AdvancedMagnify},{toolName:c.ReferenceLines}]};e.createToolGroupAndAddTools("mpr",m)}(o,e,t,a),function(o,e){const t=o.getModuleEntry("@ohif/extension-cornerstone.utilityModule.tools"),{toolNames:a,Enums:i}=t.exports,n={active:[{toolName:a.TrackballRotateTool,bindings:[{mouseButton:i.MouseBindings.Primary}]},{toolName:a.Zoom,bindings:[{mouseButton:i.MouseBindings.Secondary}]},{toolName:a.Pan,bindings:[{mouseButton:i.MouseBindings.Auxiliary}]}]};e.createToolGroupAndAddTools("volume3d",n)}(o,e)},{createButton:c}=a.ToolbarService,d={commandName:"setToolActiveToolbar",commandOptions:{toolGroupIds:["default","mpr","SRToolGroup","volume3d"]}},m=[{id:"MeasurementTools",uiType:"ohif.splitButton",props:{groupId:"MeasurementTools",evaluate:"evaluate.group.promoteToPrimaryIfCornerstoneToolNotActiveInTheList",primary:c({id:"Length",icon:"tool-length",label:"Length",tooltip:"Length Tool",commands:d,evaluate:"evaluate.cornerstoneTool"}),secondary:{icon:"chevron-down",tooltip:"More Measure Tools"},items:[c({id:"Length",icon:"tool-length",label:"Length",tooltip:"Length Tool",commands:d,evaluate:"evaluate.cornerstoneTool"}),c({id:"Bidirectional",icon:"tool-bidirectional",label:"Bidirectional",tooltip:"Bidirectional Tool",commands:d,evaluate:"evaluate.cornerstoneTool"}),c({id:"ArrowAnnotate",icon:"tool-annotate",label:"Annotation",tooltip:"Arrow Annotate",commands:d,evaluate:"evaluate.cornerstoneTool"}),c({id:"CircleROI",icon:"tool-circle",label:"Circle",tooltip:"Circle Tool",commands:d,evaluate:"evaluate.cornerstoneTool"}),c({id:"PlanarFreehandROI",icon:"icon-tool-freehand-roi",label:"Freehand ROI",tooltip:"Freehand ROI",commands:d,evaluate:"evaluate.cornerstoneTool"}),c({id:"SplineROI",icon:"icon-tool-spline-roi",label:"Spline ROI",tooltip:"Spline ROI",commands:d,evaluate:"evaluate.cornerstoneTool"}),c({id:"LivewireContour",icon:"icon-tool-livewire",label:"Livewire tool",tooltip:"Livewire tool",commands:d,evaluate:"evaluate.cornerstoneTool"})]}},{id:"EllipticalROI",uiType:"ohif.radioGroup",props:{icon:"tool-ellipse",label:"Ellipse",tooltip:"Ellipse ROI",commands:d,evaluate:"evaluate.cornerstoneTool"}},{id:"Magnify",uiType:"ohif.radioGroup",props:{icon:"tool-magnify",label:"Zoom-in",tooltip:"Zoom-in",commands:d,evaluate:"evaluate.cornerstoneTool"}},{id:"RectangleROI",uiType:"ohif.radioGroup",props:{icon:"tool-rectangle",label:"Rectangle",tooltip:"Rectangle ROI",commands:d,evaluate:"evaluate.cornerstoneTool"}},{},{id:"Zoom",uiType:"ohif.radioGroup",props:{icon:"tool-zoom",label:"Zoom",commands:d,evaluate:"evaluate.cornerstoneTool"}},{id:"WindowLevel",uiType:"ohif.radioGroup",props:{icon:"tool-window-level",label:"Window Level",commands:d,evaluate:"evaluate.cornerstoneTool"}},{id:"Pan",uiType:"ohif.radioGroup",props:{type:"tool",icon:"tool-move",label:"Pan",commands:d,evaluate:"evaluate.cornerstoneTool"}},{id:"Cine",uiType:"ohif.radioGroup",props:{icon:"tool-cine",label:"Cine",tooltip:"Cine",commands:"toggleCine",evaluate:["evaluate.cine","evaluate.not3D"]}},{id:"Angle",uiType:"ohif.radioGroup",props:{icon:"tool-angle",label:"Angle",tooltip:"Angle",commands:d,evaluate:"evaluate.cornerstoneTool"}},{id:"TrackballRotate",uiType:"ohif.radioGroup",props:{type:"tool",icon:"tool-3d-rotate",label:"3D Rotate",commands:d,evaluate:{name:"evaluate.cornerstoneTool",disabledText:"Select a 3D viewport to enable this tool"}}},{id:"Capture",uiType:"ohif.radioGroup",props:{icon:"tool-capture",label:"Capture",commands:"showDownloadViewportModal",evaluate:"evaluate.action"}},{id:"Layout",uiType:"ohif.layoutSelector",props:{rows:3,columns:4,evaluate:"evaluate.action"}},{id:"StackScroll",uiType:"ohif.radioGroup",props:{icon:"tool-stack-scroll",label:"Stack Scroll",tooltip:"Stack Scroll",commands:d,evaluate:"evaluate.cornerstoneTool"}},{id:"Probe",uiType:"ohif.radioGroup",props:{icon:"tool-probe",label:"Probe",tooltip:"Probe",commands:d,evaluate:"evaluate.cornerstoneTool"}},{id:"Crosshairs",uiType:"ohif.radioGroup",props:{type:"tool",icon:"tool-crosshair",label:"Crosshairs",commands:{commandName:"setToolActiveToolbar",commandOptions:{toolGroupIds:["mpr"]}},evaluate:{name:"evaluate.cornerstoneTool",disabledText:"Select an MPR viewport to enable this tool"}}}];var u=t(12651);const{createButton:p}=a.ToolbarService,g=[{commandName:"setSourceViewportForReferenceLinesTool",context:"CORNERSTONE"}],v=[{id:"MoreTools",uiType:"ohif.splitButton",props:{groupId:"MoreTools",evaluate:"evaluate.group.promoteToPrimaryIfCornerstoneToolNotActiveInTheList",primary:p({id:"Reset",icon:"tool-reset",tooltip:"Reset View",label:"Reset",commands:"resetViewport",evaluate:"evaluate.action"}),secondary:{icon:"chevron-down",label:"",tooltip:"More Tools"},items:[p({id:"Reset",icon:"tool-reset",label:"Reset View",tooltip:"Reset View",commands:"resetViewport",evaluate:"evaluate.action"}),p({id:"rotate-right",icon:"tool-rotate-right",label:"Rotate Right",tooltip:"Rotate +90",commands:"rotateViewportCW",evaluate:"evaluate.action"}),p({id:"flipHorizontal",icon:"tool-flip-horizontal",label:"Flip Horizontal",tooltip:"Flip Horizontally",commands:"flipViewportHorizontal",evaluate:["evaluate.viewportProperties.toggle","evaluate.not3D"]}),p({id:"ImageSliceSync",icon:"link",label:"Image Slice Sync",tooltip:"Enable position synchronization on stack viewports",commands:{commandName:"toggleSynchronizer",commandOptions:{type:"imageSlice"}},listeners:{[u.EVENTS.STACK_VIEWPORT_NEW_STACK]:{commandName:"toggleImageSliceSync",commandOptions:{toggledState:!0}}},evaluate:["evaluate.cornerstone.synchronizer","evaluate.not3D"]}),p({id:"ReferenceLines",icon:"tool-referenceLines",label:"Reference Lines",tooltip:"Show Reference Lines",commands:"toggleEnabledDisabledToolbar",listeners:{[a.pK.EVENTS.ACTIVE_VIEWPORT_ID_CHANGED]:g,[a.pK.EVENTS.VIEWPORTS_READY]:g},evaluate:"evaluate.cornerstoneTool.toggle"}),p({id:"ImageOverlayViewer",icon:"toggle-dicom-overlay",label:"Image Overlay",tooltip:"Toggle Image Overlay",commands:"toggleEnabledDisabledToolbar",evaluate:"evaluate.cornerstoneTool.toggle"}),p({id:"invert",icon:"tool-invert",label:"Invert",tooltip:"Invert Colors",commands:"invertViewport",evaluate:"evaluate.viewportProperties.toggle"}),p({id:"CobbAngle",icon:"icon-tool-cobb-angle",label:"Cobb Angle",tooltip:"Cobb Angle",commands:d,evaluate:"evaluate.cornerstoneTool"}),p({id:"CalibrationLine",icon:"tool-calibration",label:"Calibration",tooltip:"Calibration Line",commands:d,evaluate:"evaluate.cornerstoneTool"}),p({id:"TagBrowser",icon:"dicom-tag-browser",label:"Dicom Tag Browser",tooltip:"Dicom Tag Browser",commands:"openDICOMTagViewer"}),p({id:"AdvancedMagnify",icon:"icon-tool-loupe",label:"Magnify Probe",tooltip:"Magnify Probe",commands:"toggleActiveDisabledToolbar",evaluate:"evaluate.cornerstoneTool.toggle.ifStrictlyDisabled"}),p({id:"UltrasoundDirectionalTool",icon:"icon-tool-ultrasound-bidirectional",label:"Ultrasound Directional",tooltip:"Ultrasound Directional",commands:d,evaluate:["evaluate.cornerstoneTool","evaluate.isUS"]}),p({id:"WindowLevelRegion",icon:"icon-tool-window-region",label:"Window Level Region",tooltip:"Window Level Region",commands:d,evaluate:"evaluate.cornerstoneTool"})]}}],b=["SM","ECG","SEG","RTSTRUCT"],T="@ohif/extension-default.layoutTemplateModule.viewerLayout",h="@ohif/extension-default.sopClassHandlerModule.stack",f="@ohif/extension-measurement-tracking.panelModule.trackedMeasurements",y="@ohif/extension-measurement-tracking.panelModule.seriesList",S="@ohif/extension-measurement-tracking.viewportModule.cornerstone-tracked",N="@ohif/extension-cornerstone-dicom-sr.sopClassHandlerModule.dicom-sr",R="@ohif/extension-cornerstone-dicom-sr.viewportModule.dicom-sr",w="@ohif/extension-dicom-video.sopClassHandlerModule.dicom-video",M="@ohif/extension-dicom-video.viewportModule.dicom-video",C="@ohif/extension-dicom-pdf.sopClassHandlerModule.dicom-pdf",x="@ohif/extension-dicom-pdf.viewportModule.dicom-pdf",I="@ohif/extension-cornerstone-dicom-seg.sopClassHandlerModule.dicom-seg",A="@ohif/extension-cornerstone-dicom-seg.viewportModule.dicom-seg",O="@ohif/extension-cornerstone-dicom-seg.panelModule.panelSegmentation",P="@ohif/extension-cornerstone-dicom-pmap.sopClassHandlerModule.dicom-pmap",L="@ohif/extension-cornerstone-dicom-pmap.viewportModule.dicom-pmap",B="@ohif/extension-cornerstone-dicom-rt.viewportModule.dicom-rt",E="@ohif/extension-cornerstone-dicom-rt.sopClassHandlerModule.dicom-rt",k={"@ohif/extension-default":"^3.0.0","@ohif/extension-cornerstone":"^3.0.0","@ohif/extension-measurement-tracking":"^3.0.0","@ohif/extension-cornerstone-dicom-sr":"^3.0.0","@ohif/extension-cornerstone-dicom-seg":"^3.0.0","@ohif/extension-cornerstone-dicom-pmap":"^3.0.0","@ohif/extension-cornerstone-dicom-rt":"^3.0.0","@ohif/extension-dicom-pdf":"^3.0.1","@ohif/extension-dicom-video":"^3.0.1",Report:"^0.0.1"};const D={id:n,modeFactory:function({modeConfiguration:o}){let e=[];return{id:n,routeName:"viewer",displayName:i.Z.t("Modes:Basic Viewer"),onModeEnter:function({servicesManager:o,extensionManager:e,commandsManager:t}){const{measurementService:a,toolbarService:i,toolGroupService:n,customizationService:l}=o.services;a.clearMeasurements(),s(e,n,t,this.labelConfig),i.addButtons([...m,...v]),i.createButtonSection("primary",["MeasurementTools","EllipticalROI","RectangleROI","Zoom","Magnify","Pan","TrackballRotate","WindowLevel","StackScroll","Probe","Capture","Layout","Crosshairs","Cine","Angle","MoreTools"]),l.addModeCustomizations([{id:"segmentation.panel",disableEditing:!0}])},onModeExit:({servicesManager:o})=>{const{toolGroupService:t,syncGroupService:a,segmentationService:i,cornerstoneViewportService:n,uiDialogService:l,uiModalService:r}=o.services;e.forEach((o=>o.unsubscribe())),e=[],l.dismissAll(),r.hide(),t.destroy(),a.destroy(),i.destroy(),n.destroy()},validationTags:{study:[],series:[]},isValidMode:function({modalities:o}){return{valid:!!o.split("\\").filter((o=>-1===b.indexOf(o))).length,description:"The mode does not support studies that ONLY include the following modalities: SM, ECG, SEG, RTSTRUCT"}},routes:[{path:"longitudinal",layoutTemplate:()=>({id:T,props:{leftPanels:[y],rightPanels:[O,"Report.panelModule.Report",f],rightPanelClosed:!0,viewports:[{namespace:S,displaySetsToDisplay:[h]},{namespace:R,displaySetsToDisplay:[N]},{namespace:M,displaySetsToDisplay:[w]},{namespace:x,displaySetsToDisplay:[C]},{namespace:A,displaySetsToDisplay:[I]},{namespace:L,displaySetsToDisplay:[P]},{namespace:B,displaySetsToDisplay:[E]}]}})}],extensions:k,hangingProtocol:"default",sopClassHandlers:[w,I,P,h,C,N,E],hotkeys:[...a.dD.defaults.hotkeyBindings],...o}},extensionDependencies:k}}}]);
//# sourceMappingURL=4842.bundle.0827d22e889e35f933df.js.map