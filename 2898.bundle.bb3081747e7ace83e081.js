"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[2898],{22898:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var i=n(3827),r=n.n(i),o=n(43001),s=n(58553);const a=function(e,t,n){const{tools:i}=t.get("cornerstone.overlayViewportTools")??{};return e.createToolGroupAndAddTools(n,i)};function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)({}).hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},c.apply(null,arguments)}function l(e){const{displaySets:t,viewportOptions:n,displaySetOptions:i,servicesManager:r,extensionManager:l}=e,p=n.viewportId,{displaySetService:u,toolGroupService:d,customizationService:S}=r.services,y=`PMAPToolGroup-${p}`;if(1!==t.length)throw new Error("PMAP viewport must have a single display set");const v=t[0],[w,f]=(0,s.O_)(),g=(0,o.useRef)(null),{viewports:I,activeViewportId:h}=w,m=v.getReferenceDisplaySet(),b=function(e,t){const{SharedFunctionalGroupsSequence:n}=t.instance,i=Array.isArray(n)?n[0]:n,{PixelMeasuresSequence:r}=i,o=Array.isArray(r)?r[0]:r,{SpacingBetweenSlices:s,SliceThickness:a}=o,c=e.images[0],l={PatientID:c.PatientID,PatientName:c.PatientName,PatientSex:c.PatientSex,PatientAge:c.PatientAge,SliceThickness:c.SliceThickness||a,StudyDate:c.StudyDate,SeriesDescription:c.SeriesDescription,SeriesInstanceUID:c.SeriesInstanceUID,SeriesNumber:c.SeriesNumber,ManufacturerModelName:c.ManufacturerModelName,SpacingBetweenSlices:c.SpacingBetweenSlices||s};return l}(m,v);g.current={displaySet:m,metadata:b};const D=(0,o.useCallback)((()=>{const{displaySet:t}=g.current,{component:r}=l.getModuleEntry("@ohif/extension-cornerstone.viewportModule.cornerstone");i.unshift({});const[s]=i;return s.options=s.options??{},Object.assign(s.options,{colormap:{name:"rainbow",opacity:[{value:0,opacity:.5},{value:1,opacity:1}]}}),o.createElement(r,c({},e,{displaySets:[t,v],viewportOptions:{viewportType:"volume",toolGroupId:y,orientation:n.orientation,viewportId:n.viewportId},displaySetOptions:[{},s]}))}),[l,i,e,v,y,n.orientation,n.viewportId]);return(0,o.useEffect)((()=>{const e=u.subscribe(u.EVENTS.DISPLAY_SETS_REMOVED,(({displaySetInstanceUIDs:e})=>{const t=I.get(h);e.includes(t.displaySetInstanceUID)&&f.setDisplaySetsForViewport({viewportId:h,displaySetInstanceUIDs:[]})}));return()=>{e.unsubscribe()}}),[h,u,f,I]),(0,o.useEffect)((()=>{let e=d.getToolGroup(y);if(!e)return e=a(d,S,y),()=>d.destroyToolGroup(y)}),[S,y,d]),o.createElement(o.Fragment,null,o.createElement("div",{className:"relative flex h-full w-full flex-row overflow-hidden"},D()))}l.propTypes={displaySets:r().arrayOf(r().object),viewportId:r().string.isRequired,dataSource:r().object,children:r().node};const p=l}}]);
//# sourceMappingURL=2898.bundle.bb3081747e7ace83e081.js.map