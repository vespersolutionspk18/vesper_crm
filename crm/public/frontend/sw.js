if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const u=s=>l(s,r),o={module:{uri:r},exports:a,require:u};e[r]=Promise.all(n.map((s=>o[s]||u(s)))).then((s=>(i(...s),a)))}}define(["./workbox-78e2cf90"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/ArrowUpRightIcon-4de3e6ce.js",revision:null},{url:"assets/AssignmentModal-b9aa1b53.js",revision:null},{url:"assets/CalendarIcon-e7721136.js",revision:null},{url:"assets/CallLogs-452f60e3.css",revision:null},{url:"assets/CallLogs-a6592a05.js",revision:null},{url:"assets/CallUI-3b9212e1.css",revision:null},{url:"assets/CallUI-6bc1ab54.js",revision:null},{url:"assets/CameraIcon-d076352a.js",revision:null},{url:"assets/CommentIcon-8a1c544e.js",revision:null},{url:"assets/Contact-7bdfc76b.css",revision:null},{url:"assets/Contact-db85e69f.js",revision:null},{url:"assets/ContactModal-55a57e78.css",revision:null},{url:"assets/ContactModal-7ee44134.js",revision:null},{url:"assets/Contacts-0b5c4cf3.js",revision:null},{url:"assets/contacts-111adff3.js",revision:null},{url:"assets/ContactsIcon-5941e60f.js",revision:null},{url:"assets/ContactsListView-b9703a92.js",revision:null},{url:"assets/CRMLogo-c061fa7d.js",revision:null},{url:"assets/CustomActions-dd6491ed.js",revision:null},{url:"assets/Dashboard-9bdcdb62.js",revision:null},{url:"assets/Deal-a99ed4b0.js",revision:null},{url:"assets/Deals-ea476d8b.js",revision:null},{url:"assets/DealsIcon-3bb51480.js",revision:null},{url:"assets/DealsListView-c0ffb5e0.js",revision:null},{url:"assets/DesktopLayout-3c25d9d6.js",revision:null},{url:"assets/DetailsIcon-e1b98c12.js",revision:null},{url:"assets/DragVerticalIcon-21aa16a4.js",revision:null},{url:"assets/Dropdown-d1bc143c.js",revision:null},{url:"assets/DurationIcon-31a1b254.js",revision:null},{url:"assets/EditIcon-5c615a04.js",revision:null},{url:"assets/EmailIcon-5d882006.js",revision:null},{url:"assets/EmailTemplate-35a4205a.js",revision:null},{url:"assets/EmailTemplateModal-8f279830.js",revision:null},{url:"assets/EmailTemplates-5089be70.js",revision:null},{url:"assets/FadedScrollableDiv-3ad27946.js",revision:null},{url:"assets/Fields-bccd83f4.js",revision:null},{url:"assets/Fields-ef38f986.css",revision:null},{url:"assets/FileUploader-e02978ad.js",revision:null},{url:"assets/FontColor-3577a7b2.js",revision:null},{url:"assets/global-005ed632.js",revision:null},{url:"assets/index-23e032df.js",revision:null},{url:"assets/index-6f95f2b2.css",revision:null},{url:"assets/index-9a3d44ca.js",revision:null},{url:"assets/IndicatorIcon-8bdc1dd8.js",revision:null},{url:"assets/InsertImage-3b0c7423.js",revision:null},{url:"assets/InsertLink-529780ee.js",revision:null},{url:"assets/InsertVideo-ef3cb28b.js",revision:null},{url:"assets/InvalidPage-d677f4bf.js",revision:null},{url:"assets/KanbanView-ad95323d.js",revision:null},{url:"assets/label-c0466358.js",revision:null},{url:"assets/LayoutHeader-f400e0a9.js",revision:null},{url:"assets/Lead-013a62a2.js",revision:null},{url:"assets/Leads-02bc53da.js",revision:null},{url:"assets/LeadsIcon-6f6c2324.js",revision:null},{url:"assets/Link-b1fdcf99.js",revision:null},{url:"assets/ListBulkActions-9fa5be79.js",revision:null},{url:"assets/ListFooter-3ed6863c.js",revision:null},{url:"assets/ListRows-bf71bc40.js",revision:null},{url:"assets/Login-ecf9304f.js",revision:null},{url:"assets/MarkAsDoneIcon-eb32e216.js",revision:null},{url:"assets/MobileDeal-c64a7108.js",revision:null},{url:"assets/MobileLayout-87c096cb.js",revision:null},{url:"assets/MobileLead-49a77aed.js",revision:null},{url:"assets/MobileNotification-dc679c92.js",revision:null},{url:"assets/NestedPopover-767b5999.js",revision:null},{url:"assets/NoteModal-67a2219e.js",revision:null},{url:"assets/Notes-af23b153.js",revision:null},{url:"assets/notifications-e6bf153f.js",revision:null},{url:"assets/Organization-3242d4cc.js",revision:null},{url:"assets/OrganizationModal-7c7ff91b.js",revision:null},{url:"assets/organizations-345b05ec.js",revision:null},{url:"assets/Organizations-3673a775.js",revision:null},{url:"assets/OrganizationsIcon-f5eb7efc.js",revision:null},{url:"assets/PhoneIcon-2b0b9034.js",revision:null},{url:"assets/QuickEntryModal-95813af5.js",revision:null},{url:"assets/Section-e7f6a7fa.js",revision:null},{url:"assets/settings-5e848745.js",revision:null},{url:"assets/SidePanelModal-7abc63d3.js",revision:null},{url:"assets/SLASection-60be6e93.js",revision:null},{url:"assets/SLASection-923fb4c7.css",revision:null},{url:"assets/statuses-c18f787a.js",revision:null},{url:"assets/Switch.vue_vue_type_script_setup_true_lang-edf4e043.js",revision:null},{url:"assets/Tabs-9ce471e9.js",revision:null},{url:"assets/TaskIcon-ba34b83b.js",revision:null},{url:"assets/TaskModal-6c6e7874.css",revision:null},{url:"assets/TaskModal-74495bbe.js",revision:null},{url:"assets/Tasks-877a9fff.js",revision:null},{url:"assets/ViewControls-4002c267.js",revision:null},{url:"assets/views-43c0d23f.js",revision:null},{url:"assets/WhatsAppIcon-a922c570.js",revision:null},{url:"index.html",revision:"0c8326be13f4f7e55e2eb6607b87ff2c"},{url:"registerSW.js",revision:"c05366fa02b0c433223d141a5e2f2040"},{url:"manifest.webmanifest",revision:"8bd1dc465e950b2ed01f4b3c89979f05"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
