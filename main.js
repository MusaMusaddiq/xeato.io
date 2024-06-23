"use strict";
(self["webpackChunkAdmin"] = self["webpackChunkAdmin"] || []).push([["main"],{

/***/ 620:
/*!**************************************************!*\
  !*** ./src/app/Store/Appsettings/AppSettings.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DBCallingURL": () => (/* binding */ DBCallingURL),
/* harmony export */   "ImageUpload": () => (/* binding */ ImageUpload),
/* harmony export */   "imagePath": () => (/* binding */ imagePath)
/* harmony export */ });

const DBCallingURL = 'https://nextasoft.in/order-online/Api/ValuePass.php';
const ImageUpload = 'https://nextasoft.in/order-online/Api/imageupload.php';
const imagePath = 'https://nextasoft.in/order-online/Api/';


/***/ }),

/***/ 3825:
/*!*************************************!*\
  !*** ./src/app/Store/LoginUsers.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginUsers": () => (/* binding */ LoginUsers)
/* harmony export */ });
class LoginUsers {
    constructor() {
        this.Id = "";
        this.FirstName = "";
        this.Lastname = "";
        this.Email = "";
        this.Phone = "";
        this.Fax = "";
        this.UserName = "";
        this.Password = "";
        this.Image = "";
        this.RestaurantName = "";
        this.RestaurantEmail = "";
        this.Address = "";
        this.Timings = "";
        this.Workingdays = "";
        this.SupportNo = "";
        this.Logo = "";
        this.Currency = "";
        this.ViewName = "loginusers";
    }
}


/***/ }),

/***/ 2705:
/*!*************************************************!*\
  !*** ./src/app/Store/PageStore/Page.Actions.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClosePage": () => (/* binding */ ClosePage),
/* harmony export */   "OpenPage": () => (/* binding */ OpenPage),
/* harmony export */   "PageActionTypes": () => (/* binding */ PageActionTypes)
/* harmony export */ });
var PageActionTypes;
(function (PageActionTypes) {
    PageActionTypes["Open_Page"] = "OpenPage";
    PageActionTypes["Close_Page"] = "ClosePage";
})(PageActionTypes || (PageActionTypes = {}));
class OpenPage {
    constructor(payload) {
        this.payload = payload;
        this.type = PageActionTypes.Open_Page;
    }
}
class ClosePage {
    constructor(payload) {
        this.payload = payload;
        this.type = PageActionTypes.Close_Page;
    }
}


/***/ }),

/***/ 7696:
/*!*************************************************!*\
  !*** ./src/app/Store/PageStore/Page.Reducer.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pagereducer": () => (/* binding */ Pagereducer)
/* harmony export */ });
//export let initialState = []
// const newState = (state, newData) => {
//    
//     return Object.assign( state, newData);
// };
const Pagereducer = (state = [], action) => {
    switch (action.type) {
        case 'OpenPage':
            {
                let Page = action.payload;
                return [...(state.filter((el) => el.ViewName != Page.ViewName)), action.payload];
            }
        case 'ClosePage':
            {
                let ViewName = action.payload;
                return state.filter((el) => el.ViewName != ViewName);
            }
        default:
            return state;
    }
};


/***/ }),

/***/ 4029:
/*!***************************************!*\
  !*** ./src/app/apicalling.service.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApicallingService": () => (/* binding */ ApicallingService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _Store_Appsettings_AppSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Store/Appsettings/AppSettings */ 620);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        'Content-Type': 'application/json'
    })
};
class ApicallingService {
    // public Currency=AppSettings.Currency;
    constructor(http) {
        this.http = http;
        this.DBCallingURL = _Store_Appsettings_AppSettings__WEBPACK_IMPORTED_MODULE_0__.DBCallingURL;
        this.imagePath = _Store_Appsettings_AppSettings__WEBPACK_IMPORTED_MODULE_0__.imagePath;
        this.ImageUpload = _Store_Appsettings_AppSettings__WEBPACK_IMPORTED_MODULE_0__.ImageUpload;
        // Email(Name,Email,Subject,Message)
        // {
        //   var URL=this.Path+'Email.php';
        //    return this.http.post(URL,JSON.stringify( {Name:Name,Email:Email,Subject:Subject,Message:Message}),httpOptions);
        // }
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
    }
    SetViewData(data) {
        this.PassingData = data;
    }
    GetViewData() {
        let temp = this.PassingData;
        this.clearData();
        return temp;
    }
    GetUserName() {
        return localStorage.getItem("UserName");
    }
    GetBaranchID() {
        return sessionStorage.getItem("BaranchID");
    }
    GetUserID() {
        return sessionStorage.getItem("UserID");
    }
    clearData() {
        this.PassingData = undefined;
    }
    GetCommonScripts() {
        return new Promise(resolve => {
            const scriptElement = document.createElement('script');
            scriptElement.src = 'URL TO SCRIPT';
            scriptElement.onload = resolve;
            document.body.appendChild(scriptElement);
        });
    }
    DBCalling(Operation, Xml, Xml1, Xml2, Xml3, Xml4) {
        debugger;
        var URL = '';
        URL = this.DBCallingURL;
        return this.http.post(URL, { Screen: Xml, Operation: Operation, Xml: Xml1, XmlChild1: Xml2, XmlChild2: Xml3, Search: Xml4 }, httpOptions);
    }
}
ApicallingService.ɵfac = function ApicallingService_Factory(t) { return new (t || ApicallingService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
ApicallingService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ApicallingService, factory: ApicallingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _master_page_master_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./master-page/master-page.component */ 6699);
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories/categories.component */ 1224);
/* harmony import */ var _extras_extras_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extras/extras.component */ 7813);
/* harmony import */ var _coupons_coupons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./coupons/coupons.component */ 9650);
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products/products.component */ 4532);
/* harmony import */ var _offers_offers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offers/offers.component */ 6467);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile.component */ 6630);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 7528);
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./orders/orders.component */ 8686);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);













const routes = [
    // { path: '', pathMatch: 'full', redirectTo: '/welcome' },
    // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'Login'
    },
    {
        path: '', component: _master_page_master_page_component__WEBPACK_IMPORTED_MODULE_1__.MasterPageComponent,
        children: [
            { path: '', component: _master_page_master_page_component__WEBPACK_IMPORTED_MODULE_1__.MasterPageComponent, pathMatch: 'full' },
            { path: 'Dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__.DashboardComponent, pathMatch: 'full' },
            { path: 'Categories', component: _categories_categories_component__WEBPACK_IMPORTED_MODULE_2__.CategoriesComponent, pathMatch: 'full' },
            { path: 'Extras', component: _extras_extras_component__WEBPACK_IMPORTED_MODULE_3__.ExtrasComponent, pathMatch: 'full' },
            { path: 'Coupons', component: _coupons_coupons_component__WEBPACK_IMPORTED_MODULE_4__.CouponsComponent, pathMatch: 'full' },
            { path: 'Products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_5__.ProductsComponent, pathMatch: 'full' },
            { path: 'Offers', component: _offers_offers_component__WEBPACK_IMPORTED_MODULE_6__.OffersComponent, pathMatch: 'full' },
            { path: 'Profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__.ProfileComponent, pathMatch: 'full' },
            { path: 'Orders', component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_9__.OrdersComponent, pathMatch: 'full' },
        ]
    },
    {
        path: 'Login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent, pathMatch: 'full'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forRoot(routes, { useHash: true }), _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _apicalling_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apicalling.service */ 4029);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 5778);





class AppComponent {
    constructor(apiCall, http, router, store) {
        this.apiCall = apiCall;
        this.http = http;
        this.router = router;
        this.store = store;
        this.isCollapsed = false;
        this.lstAdmin = [];
        this.Logo = "";
        this.imagePath = "";
        this.imagePath = this.apiCall.imagePath;
    }
    ngOnInit() {
        debugger;
        if (this.store.source) {
            this.store.source.subscribe((data) => {
                debugger;
                const result2 = data['xeato_admin'].filter((x) => x.ViewName === 'loginusers');
                if (result2.length > 0) {
                    if (result2[0].Id != '' && result2[0].Id != 0 && result2[0].Id != null) {
                    }
                    else {
                        this.router.navigateByUrl('Login');
                    }
                }
            });
        }
        this.view();
    }
    view() {
        debugger;
        this.apiCall.DBCalling('View', "Admin", "", "", "", "").subscribe(res => {
            debugger;
            this.dbResult = res;
            this.lstAdmin = this.dbResult[0][0];
            this.Logo = this.imagePath + this.lstAdmin.Logo;
            const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
            link.type = 'image/x-icon';
            link.rel = 'shortcut icon';
            link.href = this.Logo;
            document.getElementsByTagName('head')[0].appendChild(link);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_apicalling_service__WEBPACK_IMPORTED_MODULE_0__.ApicallingService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "localStorageSyncReducer": () => (/* binding */ localStorageSyncReducer)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/i18n */ 8950);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/locales/en */ 9137);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3262);
/* harmony import */ var _icons_provider_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons-provider.module */ 1210);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/layout */ 8873);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/menu */ 713);
/* harmony import */ var _master_page_master_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./master-page/master-page.component */ 6699);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categories/categories.component */ 1224);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/button */ 7619);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/modal */ 1803);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/select */ 1071);
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/upload */ 1371);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/table */ 7085);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 4178);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 7005);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/input */ 2533);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 8154);
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng-zorro-antd/alert */ 6608);
/* harmony import */ var _extras_extras_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./extras/extras.component */ 7813);
/* harmony import */ var _coupons_coupons_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./coupons/coupons.component */ 9650);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ng-zorro-antd/radio */ 5953);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 6229);
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./products/products.component */ 4532);
/* harmony import */ var _offers_offers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./offers/offers.component */ 6467);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/profile.component */ 6630);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 7528);
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./orders/orders.component */ 8686);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 8284);
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ng-zorro-antd/spin */ 9797);
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ng-zorro-antd/badge */ 8757);
/* harmony import */ var ng_zorro_antd_segmented__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ng-zorro-antd/segmented */ 9343);
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! highcharts-angular */ 9342);
/* harmony import */ var ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngrx-store-localstorage */ 8981);
/* harmony import */ var ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @ngrx/store */ 5778);
/* harmony import */ var _Store_PageStore_Page_Reducer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Store/PageStore/Page.Reducer */ 7696);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 2560);













































(0,_angular_common__WEBPACK_IMPORTED_MODULE_15__.registerLocaleData)(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_16__["default"]);
function localStorageSyncReducer(rootReducer) {
    return (0,ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_13__.localStorageSync)({ keys: ['xeato_admin'], rehydrate: true })(rootReducer);
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ providers: [
        _angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe,
        { provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_18__.NZ_I18N, useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_18__.en_US }
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__.BrowserAnimationsModule,
        _icons_provider_module__WEBPACK_IMPORTED_MODULE_2__.IconsProviderModule,
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_23__.NzInputModule,
        ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_24__.NzLayoutModule,
        ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_25__.NzMenuModule,
        ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_25__.NzMenuModule,
        ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_25__.NzMenuModule,
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_26__.NzButtonModule,
        ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_27__.NzModalModule,
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_28__.NzSelectModule,
        ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_29__.NzUploadModule,
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_30__.NzTableModule,
        ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_31__.NzAvatarModule,
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_32__.NzDropDownModule,
        ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_33__.NzCheckboxModule,
        ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_34__.NzAlertModule,
        ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_35__.NzRadioModule,
        ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_36__.NzDatePickerModule,
        ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_37__.NzTabsModule,
        ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_38__.NzSpinModule,
        ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_39__.NzBadgeModule,
        ng_zorro_antd_segmented__WEBPACK_IMPORTED_MODULE_40__.NzSegmentedModule,
        highcharts_angular__WEBPACK_IMPORTED_MODULE_41__.HighchartsChartModule,
        _ngrx_store__WEBPACK_IMPORTED_MODULE_42__.StoreModule.forRoot({ xeato_admin: _Store_PageStore_Page_Reducer__WEBPACK_IMPORTED_MODULE_14__.Pagereducer }, {
            metaReducers: [localStorageSyncReducer]
        })] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _master_page_master_page_component__WEBPACK_IMPORTED_MODULE_3__.MasterPageComponent,
        _login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent,
        _categories_categories_component__WEBPACK_IMPORTED_MODULE_5__.CategoriesComponent,
        _extras_extras_component__WEBPACK_IMPORTED_MODULE_6__.ExtrasComponent,
        _coupons_coupons_component__WEBPACK_IMPORTED_MODULE_7__.CouponsComponent,
        _products_products_component__WEBPACK_IMPORTED_MODULE_8__.ProductsComponent,
        _offers_offers_component__WEBPACK_IMPORTED_MODULE_9__.OffersComponent,
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__.ProfileComponent,
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__.DashboardComponent,
        _orders_orders_component__WEBPACK_IMPORTED_MODULE_12__.OrdersComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__.BrowserAnimationsModule,
        _icons_provider_module__WEBPACK_IMPORTED_MODULE_2__.IconsProviderModule,
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_23__.NzInputModule,
        ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_24__.NzLayoutModule,
        ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_25__.NzMenuModule,
        ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_25__.NzMenuModule,
        ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_25__.NzMenuModule,
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_26__.NzButtonModule,
        ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_27__.NzModalModule,
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_28__.NzSelectModule,
        ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_29__.NzUploadModule,
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_30__.NzTableModule,
        ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_31__.NzAvatarModule,
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_32__.NzDropDownModule,
        ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_33__.NzCheckboxModule,
        ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_34__.NzAlertModule,
        ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_35__.NzRadioModule,
        ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_36__.NzDatePickerModule,
        ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_37__.NzTabsModule,
        ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_38__.NzSpinModule,
        ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_39__.NzBadgeModule,
        ng_zorro_antd_segmented__WEBPACK_IMPORTED_MODULE_40__.NzSegmentedModule,
        highcharts_angular__WEBPACK_IMPORTED_MODULE_41__.HighchartsChartModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_42__.StoreRootModule] }); })();


/***/ }),

/***/ 1224:
/*!****************************************************!*\
  !*** ./src/app/categories/categories.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesComponent": () => (/* binding */ CategoriesComponent)
/* harmony export */ });
/* harmony import */ var D_musaddiq_work_Angular_orderOnlineAdmin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _apicalling_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apicalling.service */ 4029);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/modal */ 1803);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5655);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/input */ 2533);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/menu */ 713);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/button */ 7619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 6495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 6686);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/table */ 7085);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 7005);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 8154);
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/alert */ 6608);


















function CategoriesComponent_tr_24_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Veg");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function CategoriesComponent_tr_24_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Non Veg");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function CategoriesComponent_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, CategoriesComponent_tr_24_span_6_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CategoriesComponent_tr_24_span_7_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td")(13, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "nz-dropdown-menu", null, 16)(17, "ul", 17)(18, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CategoriesComponent_tr_24_Template_li_click_18_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const data_r3 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.Edit(data_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CategoriesComponent_tr_24_Template_li_click_21_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const data_r3 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.Delete(data_r3.Id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    const data_r3 = ctx.$implicit;
    const i_r4 = ctx.index;

    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](16);

    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r4 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r3.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", data_r3.IsVegeterian == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", data_r3.IsVegeterian != 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r3.Description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("src", "", ctx_r1.imagePath, "", data_r3.Image, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzDropdownMenu", _r7);
  }
}

function CategoriesComponent_ng_container_26_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "nz-alert", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function CategoriesComponent_ng_container_26_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r12.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}

function CategoriesComponent_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CategoriesComponent_ng_container_26_div_2_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 25)(4, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CategoriesComponent_ng_container_26_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r13.Name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 25)(8, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "textarea", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CategoriesComponent_ng_container_26_Template_textarea_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r15.Description = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 29)(12, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CategoriesComponent_ng_container_26_Template_label_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r16.checked = $event);
    })("ngModelChange", function CategoriesComponent_ng_container_26_Template_label_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r17.vegChanges($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Is Vegetarian");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, CategoriesComponent_ng_container_26_div_14_Template, 2, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 32)(16, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Image Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function CategoriesComponent_ng_container_26_Template_input_change_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r18.onFileChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.Exist == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.Name)("ngClass", ctx_r2.Name == "" && ctx_r2.submit == true ? "error" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.Description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.status == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r2.submit == true && ctx_r2.imageSrc1 == "" ? "error" : "form-control");
  }
}

class CategoriesComponent {
  constructor(apiCall, modal, http) {
    this.apiCall = apiCall;
    this.modal = modal;
    this.http = http;
    this.Id = 0;
    this.search = "";
    this.lstCategory = [];
    this.imagePath = "";
    this.imageUpload = "";
    this.isVisible = false;
    this.Name = "";
    this.Description = "";
    this.status = false;
    this.imageSrc1 = "";
    this.submit = false;
    this.Image = "";
    this.IsVegeterian = 0;
    this.operation = "";
    this.msg = "";
    this.lstCategories = [];
    this.Exist = false;
    this.checked = false;
  }

  ngOnInit() {
    debugger;
    this.view();
    this.imagePath = this.apiCall.imagePath;
    this.imageUpload = this.apiCall.ImageUpload;
  }

  AddCategory() {
    debugger;
    this.isVisible = true;
  }

  SearchCategory(e) {
    debugger;
    debugger;
    this.apiCall.DBCalling('View', "categories", "", "", "", this.search).subscribe(res => {
      debugger;
      this.dbResult = res;
      this.lstCategories = this.dbResult[0];
    });
  }

  Edit(e) {
    debugger;
    this.isVisible = true;
    this.Id = e.Id;
    this.Name = e.Name;
    this.Description = e.Description;
    this.status = true;
    this.imageSrc = this.imagePath + e.Image;
    this.Image = e.Image;

    if (e.IsVegeterian == 0) {
      this.checked = false;
    } else {
      this.checked = true;
    }

    this.Id = e.Id;
  }

  Delete(e) {
    this.modal.confirm({
      nzTitle: 'Are you sure?',
      nzContent: '<b style="color: red;">You wont be able to revert this!</b>',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.apiCall.DBCalling('Delete', "categories", e, "", "", "").subscribe(res => {
        debugger;
        this.dbResult = res;

        if (this.dbResult[0][0].DBresult > 0) {
          this.msg = 'Deleted';
          this.success();
          this.isVisible = false;
          this.view();
        }
      }),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }

  handleCancel() {
    debugger;
    this.Reset();
    this.isVisible = false;
    this.submit = false;
  }

  vegChanges(d) {
    debugger;

    if (d == true) {
      this.IsVegeterian = 1;
    } else {
      this.IsVegeterian = 0;
    }
  }

  saveCategory() {
    debugger;
    this.submit = true;

    if (this.Name != '' && this.Image != '') {
      debugger;
      var data = {
        'Id': this.Id,
        'Name': this.Name,
        'Description': this.Description,
        'IsVegeterian': this.IsVegeterian,
        'Image': this.Image
      };
      var jsonData = JSON.stringify(data);

      if (this.Id == 0) {
        this.operation = "Insert";
      } else {
        this.operation = "Update";
      }

      this.apiCall.DBCalling(this.operation, "categories", jsonData, "", "", "").subscribe(res => {
        debugger;
        this.dbResult = res;

        if (this.dbResult[0][0].DBresult > 0) {
          if (this.Id == 0) {
            this.msg = 'Saved';
          } else {
            this.msg = 'Updated';
          }

          this.isVisible = false;
          this.Reset();
          this.success();
          this.view();
        } else if (this.dbResult[0][0].DBresult == -1) {
          debugger;
          this.Exist = true;
        }
      });
    }
  }

  success() {
    this.modal.success({
      nzTitle: 'Success',
      nzContent: 'Category ' + this.msg + ' Successfully!'
    });
  }

  view() {
    debugger;
    this.apiCall.DBCalling('View', "categories", "", "", "", this.search).subscribe(res => {
      debugger;
      this.dbResult = res;
      this.lstCategories = this.dbResult[0];
    });
  }

  Reset() {
    this.submit = false;
    this.Id = 0;
    this.Name = "";
    this.Description = "";
    this.Image = "";
    this.IsVegeterian = 0;
    this.checked = false;
    this.status = false;
  }

  onFileChange(event) {
    debugger;
    this.status = false;
    const file = event.target.files[0];
    this.status = event.target.files.length > 0 ? true : false;
    var Imageurl = event.target.files[0];

    if (this.status == true) {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imageSrc = reader.result;
        this.imageSrc1 = this.imageSrc;
        this.saveImage();
      };
    }
  }

  saveImage() {
    var _this = this;

    return (0,D_musaddiq_work_Angular_orderOnlineAdmin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        let value = _this.Image;
        _this.Image = ""; //  this.loader.loaderon()

        yield _this.http.post(_this.imageUpload, {
          'image': _this.imageSrc
        }).subscribe(res => {
          debugger;
          _this.dbResult = res;

          if (res == null) {
            _this.Image = value; // this.saveCategory()
          } else {
            debugger;
            _this.Image = _this.dbResult[0][1]; //  this.saveCategory()
          }
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }

}

CategoriesComponent.ɵfac = function CategoriesComponent_Factory(t) {
  return new (t || CategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_apicalling_service__WEBPACK_IMPORTED_MODULE_1__.ApicallingService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

CategoriesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CategoriesComponent,
  selectors: [["app-categories"]],
  decls: 27,
  vars: 4,
  consts: [[1, "row", "p-3"], [1, "col-md-4", "p-0"], ["nz-input", "", "placeholder", "Search here...", 3, "ngModel", "ngModelChange"], [1, "col-md-8"], ["nz-button", "", "nzType", "primary", 1, "float-end", 3, "click"], [1, "col-md-12", "p-0", "mt-3"], ["nzSize", "small", 3, "nzData"], ["basicTable", ""], [4, "ngFor", "ngForOf"], ["nzTitle", "Add Category", 3, "nzVisible", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], ["class", "success-chip", 4, "ngIf"], ["class", "danger-chip", 4, "ngIf"], ["nz-image", "", "width", "30px", "height", "30px", "alt", "", 3, "src"], ["nz-button", "", "nz-dropdown", "", "nzPlacement", "bottomCenter", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "ellipsis", "nzTheme", "outline", 2, "font-size", "18px"], ["menu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", 3, "click"], ["nz-icon", "", "nzType", "edit", "nzTheme", "outline", 1, "mr-05"], ["nz-icon", "", "nzType", "delete", "nzTheme", "outline", 1, "mr-05"], [1, "success-chip"], [1, "danger-chip"], [1, "row"], ["class", "col-md-12 mb-3", 4, "ngIf"], [1, "col-md-12", "mb-3"], ["for", ""], ["nz-input", "", "placeholder", "Name", 3, "ngModel", "ngClass", "ngModelChange"], ["rows", "3", "nz-input", "", 3, "ngModel", "ngModelChange"], [1, "col-md-12"], ["nz-checkbox", "", 3, "ngModel", "ngModelChange"], ["class", "col-md-2", 4, "ngIf"], [1, "col-md-10"], ["type", "file", "id", "file", 1, "form-control", 3, "ngClass", "change"], ["nzType", "warning", "nzMessage", "Category Already Exist!"], [1, "col-md-2"], [1, "w-100", 3, "src"]],
  template: function CategoriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CategoriesComponent_Template_input_ngModelChange_2_listener($event) {
        return ctx.search = $event;
      })("ngModelChange", function CategoriesComponent_Template_input_ngModelChange_2_listener($event) {
        return ctx.SearchCategory($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CategoriesComponent_Template_button_click_4_listener() {
        return ctx.AddCategory();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Add Category");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5)(7, "nz-table", 6, 7)(9, "thead")(10, "tr")(11, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "#");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "IsVegetarian");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Description");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Image");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Action");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, CategoriesComponent_tr_24_Template, 24, 8, "tr", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "nz-modal", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzVisibleChange", function CategoriesComponent_Template_nz_modal_nzVisibleChange_25_listener($event) {
        return ctx.isVisible = $event;
      })("nzOnCancel", function CategoriesComponent_Template_nz_modal_nzOnCancel_25_listener() {
        return ctx.handleCancel();
      })("nzOnOk", function CategoriesComponent_Template_nz_modal_nzOnOk_25_listener() {
        return ctx.saveCategory();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, CategoriesComponent_ng_container_26_Template, 19, 7, "ng-container", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.search);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzData", ctx.lstCategories);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _r0.data);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzVisible", ctx.isVisible);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__.NzIconDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__.NzInputDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_9__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_9__.NzMenuItemDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__.NzWaveDirective, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__.NzModalContentDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTbodyComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTrDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_14__.NzDropDownDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_14__.NzDropdownMenuComponent, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_14__.NzDropdownButtonDirective, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_15__.NzCheckboxComponent, ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_16__.NzAlertComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MifQ== */"]
});

/***/ }),

/***/ 9650:
/*!**********************************************!*\
  !*** ./src/app/coupons/coupons.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CouponsComponent": () => (/* binding */ CouponsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _apicalling_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apicalling.service */ 4029);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/modal */ 1803);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5655);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/input */ 2533);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/menu */ 713);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/button */ 7619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 6495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 6686);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/table */ 7085);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 7005);
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/alert */ 6608);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/radio */ 5953);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 6229);

















function CouponsComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td")(8, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td")(13, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "nz-dropdown-menu", null, 14)(17, "ul", 15)(18, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CouponsComponent_tr_24_Template_li_click_18_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const data_r3 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.Edit(data_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CouponsComponent_tr_24_Template_li_click_21_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const data_r3 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.Delete(data_r3.Id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const data_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r4 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r3.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r3.Code);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r3.Status == "Active" ? "success-chip" : "danger-chip");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r3.Status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r3.Description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzDropdownMenu", _r5);
} }
function CouponsComponent_ng_container_26_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "nz-alert", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CouponsComponent_ng_container_26_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CouponsComponent_ng_container_26_div_2_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 21)(4, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CouponsComponent_ng_container_26_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.Name = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 21)(8, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CouponsComponent_ng_container_26_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r12.Code = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 25)(12, "nz-radio-group", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CouponsComponent_ng_container_26_Template_nz_radio_group_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.Type = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Percentage");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 21)(18, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CouponsComponent_ng_container_26_Template_input_ngModelChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r14.Amount = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 30)(22, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Valid From");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "nz-date-picker", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CouponsComponent_ng_container_26_Template_nz_date_picker_ngModelChange_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r15.ValidFrom = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 30)(27, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Valid To");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "nz-date-picker", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CouponsComponent_ng_container_26_Template_nz_date_picker_ngModelChange_30_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r16.ValidTo = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 25)(32, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "textarea", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CouponsComponent_ng_container_26_Template_textarea_ngModelChange_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r17.Description = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.Exist == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.Name)("ngClass", ctx_r2.Name == "" && ctx_r2.submit == true ? "error" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.Code)("ngClass", ctx_r2.Code == "" && ctx_r2.submit == true ? "error" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.Type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.Amount)("ngClass", ctx_r2.Amount == 0 && ctx_r2.submit == true ? "error" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.ValidFrom)("ngClass", ctx_r2.ValidFrom == "" && ctx_r2.submit == true ? "error" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.ValidTo)("ngClass", ctx_r2.ValidTo == "" && ctx_r2.submit == true ? "error" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.Description);
} }
class CouponsComponent {
    constructor(apiCall, modal, http) {
        this.apiCall = apiCall;
        this.modal = modal;
        this.http = http;
        this.isVisible = false;
        this.Name = "";
        this.Description = "";
        this.Code = "";
        this.Amount = 0;
        this.Type = "Amount";
        this.search = "";
        this.lstCoupons = [];
        this.ValidFrom = "";
        this.ValidTo = "";
        this.Id = 0;
        this.operation = "";
        this.submit = false;
        this.msg = "";
        this.Exist = false;
    }
    ngOnInit() {
        debugger;
        this.view('');
    }
    view(e) {
        debugger;
        this.apiCall.DBCalling('View', "Coupons", "", "", "", this.search).subscribe(res => {
            debugger;
            this.dbResult = res;
            this.lstCoupons = this.dbResult[0];
        });
    }
    AddCoupons() {
        debugger;
        this.isVisible = true;
    }
    saveCoupons() {
        debugger;
        this.submit = true;
        if (this.Name != '') {
            debugger;
            var data = ({ 'Id': this.Id, 'Name': this.Name, 'Description': this.Description, 'Code': this.Code, 'Amount': this.Amount, 'Type': this.Type,
                'ValidFrom': this.ValidFrom, 'ValidTo': this.ValidTo });
            var jsonData = JSON.stringify(data);
            if (this.Id == 0) {
                this.operation = "Insert";
            }
            else {
                this.operation = "Update";
            }
            this.apiCall.DBCalling(this.operation, "Coupons", jsonData, "", "", "").subscribe(res => {
                debugger;
                this.dbResult = res;
                if (this.dbResult[0][0].DBresult > 0) {
                    if (this.Id == 0) {
                        this.msg = 'Saved';
                    }
                    else {
                        this.msg = 'Updated';
                    }
                    this.isVisible = false;
                    this.Reset();
                    this.success();
                    this.view('');
                }
                else if (this.dbResult[0][0].DBresult == -1) {
                    debugger;
                    this.Exist = true;
                }
            });
        }
    }
    Edit(e) {
        debugger;
        this.Id = e.Id;
        this.Name = e.Name;
        this.Description = e.Description;
        this.Code = e.Code;
        this.Amount = e.Amount;
        this.Type = e.Type;
        this.ValidFrom = e.ValidFrom;
        this.ValidTo = e.ValidTo;
        this.isVisible = true;
    }
    Delete(e) {
        this.modal.confirm({
            nzTitle: 'Are you sure?',
            nzContent: '<b style="color: red;">You wont be able to revert this!</b>',
            nzOkText: 'Yes',
            nzOkType: 'primary',
            nzOkDanger: true,
            nzOnOk: () => this.apiCall.DBCalling('Delete', "Coupons", e, "", "", "").subscribe(res => {
                debugger;
                this.dbResult = res;
                if (this.dbResult[0][0].DBresult > 0) {
                    this.msg = 'Deleted';
                    this.success();
                    this.isVisible = false;
                    this.view('');
                }
            }),
            nzCancelText: 'No',
            nzOnCancel: () => console.log('Cancel')
        });
    }
    success() {
        this.modal.success({
            nzTitle: 'Success',
            nzContent: 'Coupons ' + this.msg + ' Successfully!'
        });
    }
    Reset() {
        this.Id = 0;
        this.Name = "";
        this.Description = "";
        this.Code = "";
        this.Amount = 0;
        this.Type = "";
        this.submit = false;
    }
    handleCancel() {
        debugger;
        this.Reset();
        this.isVisible = false;
        this.submit = false;
    }
}
CouponsComponent.ɵfac = function CouponsComponent_Factory(t) { return new (t || CouponsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_apicalling_service__WEBPACK_IMPORTED_MODULE_0__.ApicallingService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_2__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
CouponsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CouponsComponent, selectors: [["app-coupons"]], decls: 27, vars: 4, consts: [[1, "row", "p-3"], [1, "col-md-4", "p-0"], ["nz-input", "", "placeholder", "Search here...", 3, "ngModel", "ngModelChange"], [1, "col-md-8"], ["nz-button", "", "nzType", "primary", 1, "float-end", 3, "click"], [1, "col-md-12", "p-0", "mt-3"], ["nzSize", "small", 3, "nzData"], ["basicTable", ""], [4, "ngFor", "ngForOf"], ["nzTitle", "Add Coupons", 3, "nzVisible", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], [3, "ngClass"], ["nz-button", "", "nz-dropdown", "", "nzPlacement", "bottomCenter", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "ellipsis", "nzTheme", "outline", 2, "font-size", "18px"], ["menu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", 3, "click"], ["nz-icon", "", "nzType", "edit", "nzTheme", "outline", 1, "mr-05"], ["nz-icon", "", "nzType", "delete", "nzTheme", "outline", 1, "mr-05"], [1, "row"], ["class", "col-md-12 mb-3", 4, "ngIf"], [1, "col-md-12", "mb-3"], ["for", ""], ["nz-input", "", "placeholder", "Name", 3, "ngModel", "ngClass", "ngModelChange"], ["nz-input", "", "placeholder", "Code", 3, "ngModel", "ngClass", "ngModelChange"], [1, "col-md-12"], [3, "ngModel", "ngModelChange"], ["nz-radio", "", "nzValue", "Amount"], ["nz-radio", "", "nzValue", "Percentage"], ["nz-input", "", "placeholder", "Amount", "type", "number", 3, "ngModel", "ngClass", "ngModelChange"], [1, "col-md-6", "mb-3"], [1, "w-100", 3, "ngModel", "ngClass", "ngModelChange"], ["rows", "3", "nz-input", "", 3, "ngModel", "ngModelChange"], ["nzType", "warning", "nzMessage", "Already Exist!"]], template: function CouponsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CouponsComponent_Template_input_ngModelChange_2_listener($event) { return ctx.search = $event; })("ngModelChange", function CouponsComponent_Template_input_ngModelChange_2_listener($event) { return ctx.view($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CouponsComponent_Template_button_click_4_listener() { return ctx.AddCoupons(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Add Coupons");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "nz-table", 6, 7)(9, "thead")(10, "tr")(11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, CouponsComponent_tr_24_Template, 24, 7, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "nz-modal", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzVisibleChange", function CouponsComponent_Template_nz_modal_nzVisibleChange_25_listener($event) { return ctx.isVisible = $event; })("nzOnCancel", function CouponsComponent_Template_nz_modal_nzOnCancel_25_listener() { return ctx.handleCancel(); })("nzOnOk", function CouponsComponent_Template_nz_modal_nzOnOk_25_listener() { return ctx.saveCoupons(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, CouponsComponent_ng_container_26_Template, 35, 13, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzData", ctx.lstCoupons);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _r0.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzVisible", ctx.isVisible);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__.NzIconDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__.NzInputDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_8__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_8__.NzMenuItemDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__.NzWaveDirective, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_2__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_2__.NzModalContentDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTbodyComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTrDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_13__.NzDropDownDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_13__.NzDropdownMenuComponent, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_13__.NzDropdownButtonDirective, ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_14__.NzAlertComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_15__.NzRadioComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_15__.NzRadioGroupComponent, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_16__.NzDatePickerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Vwb25zLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 7528:
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highcharts */ 5972);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts/modules/exporting */ 3916);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var highcharts_modules_export_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts/modules/export-data */ 8232);
/* harmony import */ var highcharts_modules_export_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_export_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apicalling_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apicalling.service */ 4029);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/modal */ 1803);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/table */ 7085);
/* harmony import */ var ng_zorro_antd_segmented__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/segmented */ 9343);











const _c0 = ["barGraph"];
const _c1 = ["pieChart"];
const _c2 = ["splineChart"];
function DashboardComponent_tr_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td")(2, "h5", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td")(7, "h5", 37)(8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td")(14, "h5", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Quantity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "td")(19, "h5", 37)(20, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const d_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](d_r3.Product);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.lstAdmin.Currency);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](d_r3.Price);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](d_r3.Qty);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.lstAdmin.Currency);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](d_r3.Amount);
} }
highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_1___default()(highcharts__WEBPACK_IMPORTED_MODULE_0__);
highcharts_modules_export_data__WEBPACK_IMPORTED_MODULE_2___default()(highcharts__WEBPACK_IMPORTED_MODULE_0__);
class DashboardComponent {
    constructor(apiCall, modal, http, pipe) {
        this.apiCall = apiCall;
        this.modal = modal;
        this.http = http;
        this.pipe = pipe;
        this.options = ['Current Week', 'Current Month', 'Custom'];
        this.barGraph = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef(null);
        this.pieChart = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef(null);
        this.splineChart = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef(null);
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_0__;
        this.lstTopSelling = [];
        this.lstAdmin = [];
        this.dbResult1 = [];
        debugger;
        const currentDate = new Date();
        const currentDay = currentDate.getDay();
        const startDate = new Date(currentDate);
        startDate.setDate(currentDate.getDate() - currentDay); // Start of the week (Sunday)
        startDate.setHours(0, 0, 0, 0);
        const endDate = new Date(startDate);
        endDate.setDate(startDate.getDate() + 6); // End of the week (Saturday)
        endDate.setHours(23, 59, 59, 999);
        debugger;
        this.fromdate = this.pipe.transform(startDate, 'yyy-MM-dd HH:mm:ss');
        this.lastday = this.pipe.transform(endDate, 'yyy-MM-dd HH:mm:ss');
        const startOfPreviousWeek = new Date(currentDate);
        startOfPreviousWeek.setDate(currentDate.getDate() - currentDay - 6);
        // Calculate the end date of the previous week
        const endOfPreviousWeek = new Date(currentDate);
        endOfPreviousWeek.setDate(currentDate.getDate() - currentDay);
        this.PreviousStartdate = this.pipe.transform(startOfPreviousWeek, 'yyy-MM-dd HH:mm:ss');
        this.PreviousEnddate = this.pipe.transform(endOfPreviousWeek, 'yyy-MM-dd HH:mm:ss');
    }
    ngOnInit() {
        this.dashboardDetails();
        this.viewAdmin();
    }
    ngAfterViewInit() {
    }
    viewAdmin() {
        debugger;
        this.apiCall.DBCalling('View', "Admin", "", "", "", "").subscribe(res => {
            debugger;
            this.dbResult1 = res;
            this.lstAdmin = this.dbResult1[0][0];
        });
    }
    dashboardDetails() {
        debugger;
        var data = ({ 'Fromdate': this.fromdate, 'Todate': this.lastday, 'PrevFromdate': this.PreviousStartdate, 'PrevTodate': this.PreviousEnddate });
        var jsonData = JSON.stringify(data);
        this.apiCall.DBCalling('View', "Dashboard", jsonData, "", "", "").subscribe(res => {
            debugger;
            this.dbResult = res;
            this.lstTopSelling = this.dbResult[7];
            if (this.dbResult.length > 0) {
                this.revenue();
                this.weekdaysData();
                this.demandDeliveytype();
            }
        });
    }
    handleIndexChange(e) {
        console.log(e);
    }
    weekdaysData() {
        debugger;
        // this.months1 = [this.barGraphdata];
        highcharts__WEBPACK_IMPORTED_MODULE_0__.chart('barGraph', {
            title: {
                text: 'Orders',
                align: 'left'
            },
            xAxis: {
                categories: ['', '', '', '', '', '', ''],
            },
            yAxis: {
                title: {
                    text: ''
                }
            },
            tooltip: {
                valueSuffix: ''
            },
            series: [
                {
                    type: 'column',
                    name: 'Sun',
                    data: [+this.dbResult[5][0].Orders],
                },
                {
                    type: 'column',
                    name: 'Mon',
                    data: [+this.dbResult[5][1].Orders]
                }, {
                    type: 'column',
                    name: 'Tue',
                    data: [+this.dbResult[5][2].Orders]
                },
                {
                    type: 'column',
                    name: 'Wed',
                    data: [+this.dbResult[5][3].Orders],
                },
                {
                    type: 'column',
                    name: 'Thu',
                    data: [+this.dbResult[5][4].Orders],
                },
                {
                    type: 'column',
                    name: 'Fri',
                    data: [+this.dbResult[5][5].Orders],
                },
                {
                    type: 'column',
                    name: 'Sat',
                    data: [+this.dbResult[5][6].Orders],
                }
            ]
        });
    }
    demandDeliveytype() {
        debugger;
        highcharts__WEBPACK_IMPORTED_MODULE_0__.chart(this.pieChart.nativeElement, {
            chart: {
                type: 'pie'
            },
            title: {
                text: 'Pickup vs. Delivery'
            },
            series: [
                {
                    type: 'pie',
                    name: 'Categories',
                    data: [
                        {
                            name: 'Pickup',
                            y: +this.dbResult[6][0].PickupPercentage
                        },
                        {
                            name: 'Delivery',
                            y: +this.dbResult[6][0].DeliveryPercentage
                        }
                    ]
                }
            ]
        });
    }
    revenue() {
        debugger;
        highcharts__WEBPACK_IMPORTED_MODULE_0__.chart(this.splineChart.nativeElement, {
            title: {
                text: 'Sale Current Week vs. Previous Week'
            },
            xAxis: {
                categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
            },
            yAxis: {
                title: {
                    text: 'Value'
                }
            },
            series: [{
                    type: 'spline',
                    name: 'Current Week',
                    data: [+this.dbResult[3][0].Total, +this.dbResult[3][1].Total, +this.dbResult[3][2].Total, +this.dbResult[3][3].Total, +this.dbResult[3][4].Total, +this.dbResult[3][5].Total, +this.dbResult[3][6].Total]
                },
                {
                    type: 'spline',
                    name: 'Previous Week',
                    data: [+this.dbResult[4][0].Total, +this.dbResult[4][1].Total, +this.dbResult[4][2].Total, +this.dbResult[4][4].Total, +this.dbResult[4][4].Total, +this.dbResult[4][5].Total, +this.dbResult[4][6].Total]
                }]
        });
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_apicalling_service__WEBPACK_IMPORTED_MODULE_3__.ApicallingService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], viewQuery: function DashboardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c2, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.barGraph = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.pieChart = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.splineChart = _t.first);
    } }, decls: 99, vars: 7, consts: [[1, "row"], [1, "col-md-6"], [1, "col-md-6", "mb-3"], [1, "float-end", 3, "nzOptions", "nzValueChange"], [1, "col-xl-12", "col-lg-12"], [1, "col-sm-3", "mb-3"], [1, "card", "widget-flat"], [1, "card-body"], [1, "float-end"], [1, "fa-solid", "fa-users", "widget-icon"], ["title", "Number of Customers", 1, "text-muted", "fw-normal", "mt-0"], [1, "mt-3", "mb-3"], [1, "mb-0", "text-muted", "f-13"], [1, "text-success", "me-2"], [1, "fa", "fa-arrow-up"], [1, "text-nowrap"], [1, "fa-solid", "fa-cart-plus", "widget-icon"], ["title", "Number of Orders", 1, "text-muted", "fw-normal", "mt-0"], [1, "text-danger", "me-2"], [1, "fa", "fa-arrow-down"], [1, "mdi", "mdi-currency-usd", "widget-icon"], ["title", "Average Revenue", 1, "text-muted", "fw-normal", "mt-0"], [1, "fa-solid", "fa", "fa-times", "widget-icon"], ["title", "Growth", 1, "text-muted", "fw-normal", "mt-0"], [1, "col-xl-6", "col-lg-6"], [1, "col-md-12"], [2, "height", "330px"], ["splineChart", ""], [1, "col-xl-6", "col-lg-6", "mb-3"], ["id", "barGraph", 2, "height", "330px"], [1, "card"], [1, "header-title", "mt-2", "mb-3"], [1, "table-responsive"], [1, "table", "table-centered", "table-nowrap", "table-hover", "mb-0"], [4, "ngFor", "ngForOf"], [2, "height", "370px"], ["pieChart", ""], [1, "font-14", "my-1", "fw-normal"], [1, "text-muted", "font-13"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2)(5, "nz-segmented", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzValueChange", function DashboardComponent_Template_nz_segmented_nzValueChange_5_listener($event) { return ctx.handleIndexChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 0)(7, "div", 4)(8, "div", 0)(9, "div", 5)(10, "div", 6)(11, "div", 7)(12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "p", 12)(19, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, " 5.27%");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Since last month");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 5)(25, "div", 6)(26, "div", 7)(27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "p", 12)(34, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, " 1.08%");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Since last month");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 5)(40, "div", 6)(41, "div", 7)(42, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "h6", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Revenue");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "p", 12)(49, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](50, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, " 7.00%");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "Since last month");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 5)(55, "div", 6)(56, "div", 7)(57, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](58, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "Cancelled");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "p", 12)(64, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](65, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, " 4.87%");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "Since last month");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "div", 24)(70, "div", 6)(71, "div", 7)(72, "div", 0)(73, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](74, "div", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "div", 28)(77, "div", 6)(78, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](79, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "div", 24)(81, "div", 30)(82, "div", 7)(83, "h6", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84, "Top 5 Selling Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "div", 32)(86, "table", 33)(87, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](88, DashboardComponent_tr_88_Template, 25, 6, "tr", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "div", 24)(90, "div", 0)(91, "div", 1)(92, "div", 6)(93, "div", 7)(94, "div", 0)(95, "div", 25)(96, "div", 35, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](98, "Pie Chart Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzOptions", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.dbResult[0][0].customers);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.dbResult[1][0].Orders);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx.lstAdmin.Currency, " ", ctx.dbResult[1][0].Revenue, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.dbResult[2][0].Cancelled);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.lstTopSelling);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__.NzTbodyComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__.NzTrDirective, ng_zorro_antd_segmented__WEBPACK_IMPORTED_MODULE_9__.NzSegmentedComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 7813:
/*!********************************************!*\
  !*** ./src/app/extras/extras.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExtrasComponent": () => (/* binding */ ExtrasComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _apicalling_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apicalling.service */ 4029);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/modal */ 1803);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5655);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/input */ 2533);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/menu */ 713);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/button */ 7619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 6495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 6686);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/table */ 7085);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 7005);
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/alert */ 6608);















function ExtrasComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td")(8, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "nz-dropdown-menu", null, 13)(12, "ul", 14)(13, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExtrasComponent_tr_20_Template_li_click_13_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const data_r3 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.Edit(data_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExtrasComponent_tr_20_Template_li_click_16_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const data_r3 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.Delete(data_r3.Id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const data_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r4 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r3.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r3.Price);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzDropdownMenu", _r5);
} }
function ExtrasComponent_ng_container_22_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "nz-alert", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ExtrasComponent_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ExtrasComponent_ng_container_22_div_2_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 20)(4, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ExtrasComponent_ng_container_22_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.Name = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 23)(8, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Price (Optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ExtrasComponent_ng_container_22_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r12.Price = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.Exist == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.Name)("ngClass", ctx_r2.Name == "" && ctx_r2.submit == true ? "error" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.Price);
} }
class ExtrasComponent {
    constructor(apiCall, modal, http) {
        this.apiCall = apiCall;
        this.modal = modal;
        this.http = http;
        this.isVisible = false;
        this.Name = "";
        this.Price = 0;
        this.search = "";
        this.lstExtras = [];
        this.Id = 0;
        this.operation = "";
        this.submit = false;
        this.msg = "";
        this.Exist = false;
    }
    ngOnInit() {
        debugger;
        this.view('');
    }
    view(e) {
        debugger;
        this.apiCall.DBCalling('View', "Extras", "", "", "", this.search).subscribe(res => {
            debugger;
            this.dbResult = res;
            this.lstExtras = this.dbResult[0];
        });
    }
    AddExtras() {
        debugger;
        this.isVisible = true;
    }
    saveExtras() {
        debugger;
        this.submit = true;
        if (this.Name != '') {
            debugger;
            var data = ({ 'Id': this.Id, 'Name': this.Name, 'Price': this.Price });
            var jsonData = JSON.stringify(data);
            if (this.Id == 0) {
                this.operation = "Insert";
            }
            else {
                this.operation = "Update";
            }
            this.apiCall.DBCalling(this.operation, "Extras", jsonData, "", "", "").subscribe(res => {
                debugger;
                this.dbResult = res;
                if (this.dbResult[0][0].DBresult > 0) {
                    if (this.Id == 0) {
                        this.msg = 'Saved';
                    }
                    else {
                        this.msg = 'Updated';
                    }
                    this.isVisible = false;
                    this.Reset();
                    this.success();
                    this.view('');
                }
                else if (this.dbResult[0][0].DBresult == -1) {
                    debugger;
                    this.Exist = true;
                }
            });
        }
    }
    Edit(e) {
        this.Id = e.Id;
        this.Name = e.Name;
        this.Price = e.Price;
        this.isVisible = true;
    }
    Delete(e) {
        this.modal.confirm({
            nzTitle: 'Are you sure?',
            nzContent: '<b style="color: red;">You wont be able to revert this!</b>',
            nzOkText: 'Yes',
            nzOkType: 'primary',
            nzOkDanger: true,
            nzOnOk: () => this.apiCall.DBCalling('Delete', "Extras", e, "", "", "").subscribe(res => {
                debugger;
                this.dbResult = res;
                if (this.dbResult[0][0].DBresult > 0) {
                    this.msg = 'Deleted';
                    this.success();
                    this.isVisible = false;
                    this.view('');
                }
            }),
            nzCancelText: 'No',
            nzOnCancel: () => console.log('Cancel')
        });
    }
    success() {
        this.modal.success({
            nzTitle: 'Success',
            nzContent: 'Extras ' + this.msg + ' Successfully!'
        });
    }
    Reset() {
        this.Id = 0;
        this.Name = "";
        this.Price = 0;
        this.submit = false;
    }
    handleCancel() {
        debugger;
        this.Reset();
        this.isVisible = false;
        this.submit = false;
    }
}
ExtrasComponent.ɵfac = function ExtrasComponent_Factory(t) { return new (t || ExtrasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_apicalling_service__WEBPACK_IMPORTED_MODULE_0__.ApicallingService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_2__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
ExtrasComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ExtrasComponent, selectors: [["app-extras"]], decls: 23, vars: 4, consts: [[1, "row", "p-3"], [1, "col-md-4", "p-0"], ["nz-input", "", "placeholder", "Search here...", 3, "ngModel", "ngModelChange"], [1, "col-md-8"], ["nz-button", "", "nzType", "primary", 1, "float-end", 3, "click"], [1, "col-md-12", "p-0", "mt-3"], ["nzSize", "small", 3, "nzData"], ["basicTable", ""], [4, "ngFor", "ngForOf"], ["nzTitle", "Add Extras", 3, "nzVisible", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], ["nz-button", "", "nz-dropdown", "", "nzPlacement", "bottomCenter", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "ellipsis", "nzTheme", "outline", 2, "font-size", "18px"], ["menu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", 3, "click"], ["nz-icon", "", "nzType", "edit", "nzTheme", "outline", 1, "mr-05"], ["nz-icon", "", "nzType", "delete", "nzTheme", "outline", 1, "mr-05"], [1, "row"], ["class", "col-md-12 mb-3", 4, "ngIf"], [1, "col-md-12", "mb-3"], ["for", ""], ["nz-input", "", "placeholder", "Name", 3, "ngModel", "ngClass", "ngModelChange"], [1, "col-md-12"], ["nz-input", "", "placeholder", "Name", "type", "number", 3, "ngModel", "ngModelChange"], ["nzType", "warning", "nzMessage", "Already Exist!"]], template: function ExtrasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ExtrasComponent_Template_input_ngModelChange_2_listener($event) { return ctx.search = $event; })("ngModelChange", function ExtrasComponent_Template_input_ngModelChange_2_listener($event) { return ctx.view($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExtrasComponent_Template_button_click_4_listener() { return ctx.AddExtras(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Add Extras");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "nz-table", 6, 7)(9, "thead")(10, "tr")(11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ExtrasComponent_tr_20_Template, 19, 4, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "nz-modal", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzVisibleChange", function ExtrasComponent_Template_nz_modal_nzVisibleChange_21_listener($event) { return ctx.isVisible = $event; })("nzOnCancel", function ExtrasComponent_Template_nz_modal_nzOnCancel_21_listener() { return ctx.handleCancel(); })("nzOnOk", function ExtrasComponent_Template_nz_modal_nzOnOk_21_listener() { return ctx.saveExtras(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ExtrasComponent_ng_container_22_Template, 11, 4, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzData", ctx.lstExtras);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _r0.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzVisible", ctx.isVisible);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__.NzIconDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__.NzInputDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_8__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_8__.NzMenuItemDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__.NzWaveDirective, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_2__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_2__.NzModalContentDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTbodyComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTrDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_13__.NzDropDownDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_13__.NzDropdownMenuComponent, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_13__.NzDropdownButtonDirective, ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_14__.NzAlertComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHRyYXMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 1210:
/*!******************************************!*\
  !*** ./src/app/icons-provider.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconsProviderModule": () => (/* binding */ IconsProviderModule)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5655);
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ 7033);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



const icons = [_ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__.MenuFoldOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__.MenuUnfoldOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__.DashboardOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__.FormOutline];
class IconsProviderModule {
}
IconsProviderModule.ɵfac = function IconsProviderModule_Factory(t) { return new (t || IconsProviderModule)(); };
IconsProviderModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: IconsProviderModule });
IconsProviderModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [
        { provide: ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__.NZ_ICONS, useValue: icons }
    ], imports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__.NzIconModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__.NzIconModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](IconsProviderModule, { imports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__.NzIconModule], exports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__.NzIconModule] }); })();


/***/ }),

/***/ 8458:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _Store_LoginUsers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Store/LoginUsers */ 3825);
/* harmony import */ var _Store_PageStore_Page_Actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Store/PageStore/Page.Actions */ 2705);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _apicalling_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apicalling.service */ 4029);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/modal */ 1803);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 5778);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/button */ 7619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 6495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 6686);













function LoginComponent_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.invalid);
} }
class LoginComponent {
    constructor(apiCall, modal, http, router, store) {
        this.apiCall = apiCall;
        this.modal = modal;
        this.http = http;
        this.router = router;
        this.store = store;
        this.imagePath = "";
        this.imageUpload = "";
        this.lstAdmin = [];
        this.Logo = "";
        this.restaurant = "";
        this.username = "";
        this.password = "";
        this.submit = false;
        this.invalid = "";
        this.imagePath = this.apiCall.imagePath;
        this.imageUpload = this.apiCall.ImageUpload;
        this.LoginUsers = new _Store_LoginUsers__WEBPACK_IMPORTED_MODULE_0__.LoginUsers();
    }
    ngOnInit() {
        this.view();
    }
    view() {
        debugger;
        this.apiCall.DBCalling('View', "Admin", "", "", "", "").subscribe(res => {
            debugger;
            this.dbResult = res;
            this.lstAdmin = this.dbResult[0][0];
            this.Logo = this.imagePath + this.lstAdmin.Logo;
            this.restaurant = this.imagePath + this.lstAdmin.Image;
        });
    }
    login() {
        debugger;
        this.submit = true;
        if (this.username != '' && this.password != '') {
            debugger;
            if (this.lstAdmin.UserName == this.username && this.lstAdmin.Password == this.password) {
                this.LoginUsers.Id = this.lstAdmin.Id;
                this.store.dispatch(new _Store_PageStore_Page_Actions__WEBPACK_IMPORTED_MODULE_1__.OpenPage(Object.assign({}, this.LoginUsers)));
                this.router.navigateByUrl('Dashboard');
            }
            else {
                this.invalid = "Invalid Credentials!";
            }
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_apicalling_service__WEBPACK_IMPORTED_MODULE_2__.ApicallingService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 29, vars: 10, consts: [[1, "d-lg-flex", "half"], [1, "bg", "order-1", "order-md-2"], [1, "contents", "order-2", "order-md-1"], [1, "container"], [1, "row", "align-items-center", "justify-content-center"], [1, "col-md-7"], ["alt", "", 1, "mb-3", 2, "width", "120px", 3, "src"], [1, "mb-3"], [1, "form-group", "first", "mb-3"], ["for", "username"], ["type", "text", "placeholder", "Enter Username / Phone", "id", "username", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], [1, "form-group", "last", "mb-3"], ["for", "password"], ["type", "password", "placeholder", "Enter Password", "id", "password", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], [1, "mb-3", "align-items-center"], [1, "row"], [1, "col-md-6"], ["class", "text-danger fw-normal", "style", "", 4, "ngIf"], [1, "ml-auto", "float-end", 2, "text-align", "right"], ["href", "#", 1, "forgot-pass"], ["nz-button", "", "nzType", "primary", 1, "float-end", "w-100", 2, "height", "54px", "font-size", "19px", 3, "click"], [1, "text-danger", "fw-normal"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Login to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8)(12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Username / Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_14_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 11)(16, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_18_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 14)(20, "div", 15)(21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, LoginComponent_span_22_Template, 2, 1, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 16)(24, "span", 18)(25, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Forgot Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_27_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMapInterpolate1"]("background-image: url(", ctx.restaurant, ");");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx.Logo, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.lstAdmin.RestaurantName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.username)("ngClass", ctx.username == "" && ctx.submit == true ? "error" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.password)("ngClass", ctx.password == "" && ctx.submit == true ? "error" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.invalid != "");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__.NzWaveDirective], styles: ["p[_ngcontent-%COMP%] {\r\n    color: #b3b3b3;\r\n    font-weight: 300; }\r\n  \r\n  h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], .h1[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%], .h4[_ngcontent-%COMP%], .h5[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%] {\r\n    font-family: \"Roboto\", sans-serif; }\r\n  \r\n  a[_ngcontent-%COMP%] {\r\n    transition: .3s all ease; }\r\n  \r\n  a[_ngcontent-%COMP%]:hover {\r\n      text-decoration: none !important; }\r\n  \r\n  .content[_ngcontent-%COMP%] {\r\n    padding: 7rem 0; }\r\n  \r\n  h2[_ngcontent-%COMP%] {\r\n    font-size: 20px; }\r\n  \r\n  .half[_ngcontent-%COMP%], .half[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%] {\r\n    height: 100vh;\r\n    min-height: 700px; }\r\n  \r\n  @media (max-width: 991.98px) {\r\n    .half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\r\n      height: 200px; } }\r\n  \r\n  .half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%] {\r\n    background: #f6f7fc; }\r\n  \r\n  .half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%], .half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\r\n    width: 50%; }\r\n  \r\n  @media (max-width: 1199.98px) {\r\n      .half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%], .half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\r\n        width: 100%; } }\r\n  \r\n  .half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n      border: none;\r\n      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);\r\n      border-radius: 4px;\r\n      height: 54px;\r\n      background: #fff; }\r\n  \r\n  .half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:active, .half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, .half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:active, .half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\r\n        outline: none;\r\n        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1); }\r\n  \r\n  .half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\r\n    background-size: cover;\r\n    background-position: center; }\r\n  \r\n  .half[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #888;\r\n    text-decoration: underline; }\r\n  \r\n  .half[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    height: 54px;\r\n    padding-left: 30px;\r\n    padding-right: 30px; }\r\n  \r\n  .half[_ngcontent-%COMP%]   .forgot-pass[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    top: 2px;\r\n    font-size: 14px; }\r\n  \r\n  .control[_ngcontent-%COMP%] {\r\n    display: block;\r\n    position: relative;\r\n    padding-left: 30px;\r\n    margin-bottom: 15px;\r\n    cursor: pointer;\r\n    font-size: 14px; }\r\n  \r\n  .control[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%] {\r\n      position: relative;\r\n      top: .2rem;\r\n      color: #888; }\r\n  \r\n  .control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    z-index: -1;\r\n    opacity: 0; }\r\n  \r\n  .control__indicator[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 2px;\r\n    left: 0;\r\n    height: 20px;\r\n    width: 20px;\r\n    background: #e6e6e6;\r\n    border-radius: 4px; }\r\n  \r\n  .control--radio[_ngcontent-%COMP%]   .control__indicator[_ngcontent-%COMP%] {\r\n    border-radius: 50%; }\r\n  \r\n  .control[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]    ~ .control__indicator[_ngcontent-%COMP%], .control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    ~ .control__indicator[_ngcontent-%COMP%] {\r\n    background: #ccc; }\r\n  \r\n  .control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .control__indicator[_ngcontent-%COMP%] {\r\n    background: #fb771a; }\r\n  \r\n  .control[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]:not([disabled]):checked    ~ .control__indicator[_ngcontent-%COMP%], .control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked:focus    ~ .control__indicator[_ngcontent-%COMP%] {\r\n    background: #fb8633; }\r\n  \r\n  .control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled    ~ .control__indicator[_ngcontent-%COMP%] {\r\n    background: #e6e6e6;\r\n    opacity: 0.9;\r\n    pointer-events: none; }\r\n  \r\n  .control__indicator[_ngcontent-%COMP%]:after {\r\n    font-family: 'icomoon';\r\n    content: '\\e5ca';\r\n    position: absolute;\r\n    display: none;\r\n    font-size: 16px;\r\n    transition: .3s all ease; }\r\n  \r\n  .control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .control__indicator[_ngcontent-%COMP%]:after {\r\n    display: block;\r\n    color: #fff; }\r\n  \r\n  .control--checkbox[_ngcontent-%COMP%]   .control__indicator[_ngcontent-%COMP%]:after {\r\n    top: 50%;\r\n    left: 50%;\r\n    margin-top: -1px;\r\n    transform: translate(-50%, -50%); }\r\n  \r\n  .control--checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled    ~ .control__indicator[_ngcontent-%COMP%]:after {\r\n    border-color: #7b7b7b; }\r\n  \r\n  .control--checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled:checked    ~ .control__indicator[_ngcontent-%COMP%] {\r\n    background-color: #7e0cf5;\r\n    opacity: .2; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCLEVBQUU7O0VBRXBCOztJQUVFLGlDQUFpQyxFQUFFOztFQUVyQztJQUdFLHdCQUF3QixFQUFFOztFQUMxQjtNQUNFLGdDQUFnQyxFQUFFOztFQUV0QztJQUNFLGVBQWUsRUFBRTs7RUFFbkI7SUFDRSxlQUFlLEVBQUU7O0VBRW5CO0lBQ0UsYUFBYTtJQUNiLGlCQUFpQixFQUFFOztFQUVyQjtJQUNFO01BQ0UsYUFBYSxFQUFFLEVBQUU7O0VBRXJCO0lBQ0UsbUJBQW1CLEVBQUU7O0VBRXZCO0lBQ0UsVUFBVSxFQUFFOztFQUNaO01BQ0U7UUFDRSxXQUFXLEVBQUUsRUFBRTs7RUFDbkI7TUFDRSxZQUFZO01BRVosMENBQTBDO01BQzFDLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osZ0JBQWdCLEVBQUU7O0VBQ2xCO1FBQ0UsYUFBYTtRQUViLDBDQUEwQyxFQUFFOztFQUVsRDtJQUNFLHNCQUFzQjtJQUN0QiwyQkFBMkIsRUFBRTs7RUFFL0I7SUFDRSxXQUFXO0lBQ1gsMEJBQTBCLEVBQUU7O0VBRTlCO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUIsRUFBRTs7RUFFdkI7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGVBQWUsRUFBRTs7RUFFbkI7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGVBQWUsRUFBRTs7RUFDakI7TUFDRSxrQkFBa0I7TUFDbEIsVUFBVTtNQUNWLFdBQVcsRUFBRTs7RUFFakI7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVUsRUFBRTs7RUFFZDtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsT0FBTztJQUNQLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGtCQUFrQixFQUFFOztFQUV0QjtJQUNFLGtCQUFrQixFQUFFOztFQUV0Qjs7SUFFRSxnQkFBZ0IsRUFBRTs7RUFFcEI7SUFDRSxtQkFBbUIsRUFBRTs7RUFFdkI7O0lBRUUsbUJBQW1CLEVBQUU7O0VBRXZCO0lBQ0UsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixvQkFBb0IsRUFBRTs7RUFFeEI7SUFDRSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTtJQUdmLHdCQUF3QixFQUFFOztFQUU1QjtJQUNFLGNBQWM7SUFDZCxXQUFXLEVBQUU7O0VBRWY7SUFDRSxRQUFRO0lBQ1IsU0FBUztJQUNULGdCQUFnQjtJQUdoQixnQ0FBZ0MsRUFBRTs7RUFFcEM7SUFDRSxxQkFBcUIsRUFBRTs7RUFFekI7SUFDRSx5QkFBeUI7SUFDekIsV0FBVyxFQUFFIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICAgIGNvbG9yOiAjYjNiM2IzO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDsgfVxyXG4gIFxyXG4gIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsXHJcbiAgLmgxLCAuaDIsIC5oMywgLmg0LCAuaDUsIC5oNiB7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjsgfVxyXG4gIFxyXG4gIGEge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2U7XHJcbiAgICAtby10cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2U7IH1cclxuICAgIGE6aG92ZXIge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDsgfVxyXG4gIFxyXG4gIC5jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDdyZW0gMDsgfVxyXG4gIFxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDsgfVxyXG4gIFxyXG4gIC5oYWxmLCAuaGFsZiAuY29udGFpbmVyID4gLnJvdyB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWluLWhlaWdodDogNzAwcHg7IH1cclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcclxuICAgIC5oYWxmIC5iZyB7XHJcbiAgICAgIGhlaWdodDogMjAwcHg7IH0gfVxyXG4gIFxyXG4gIC5oYWxmIC5jb250ZW50cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjZmN2ZjOyB9XHJcbiAgXHJcbiAgLmhhbGYgLmNvbnRlbnRzLCAuaGFsZiAuYmcge1xyXG4gICAgd2lkdGg6IDUwJTsgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xyXG4gICAgICAuaGFsZiAuY29udGVudHMsIC5oYWxmIC5iZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7IH0gfVxyXG4gICAgLmhhbGYgLmNvbnRlbnRzIC5mb3JtLWNvbnRyb2wsIC5oYWxmIC5iZyAuZm9ybS1jb250cm9sIHtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIGhlaWdodDogNTRweDtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjsgfVxyXG4gICAgICAuaGFsZiAuY29udGVudHMgLmZvcm0tY29udHJvbDphY3RpdmUsIC5oYWxmIC5jb250ZW50cyAuZm9ybS1jb250cm9sOmZvY3VzLCAuaGFsZiAuYmcgLmZvcm0tY29udHJvbDphY3RpdmUsIC5oYWxmIC5iZyAuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxyXG4gIFxyXG4gIC5oYWxmIC5iZyB7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyB9XHJcbiAgXHJcbiAgLmhhbGYgYSB7XHJcbiAgICBjb2xvcjogIzg4ODtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XHJcbiAgXHJcbiAgLmhhbGYgLmJ0biB7XHJcbiAgICBoZWlnaHQ6IDU0cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4OyB9XHJcbiAgXHJcbiAgLmhhbGYgLmZvcmdvdC1wYXNzIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMnB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4OyB9XHJcbiAgXHJcbiAgLmNvbnRyb2wge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxNHB4OyB9XHJcbiAgICAuY29udHJvbCAuY2FwdGlvbiB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdG9wOiAuMnJlbTtcclxuICAgICAgY29sb3I6ICM4ODg7IH1cclxuICBcclxuICAuY29udHJvbCBpbnB1dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIG9wYWNpdHk6IDA7IH1cclxuICBcclxuICAuY29udHJvbF9faW5kaWNhdG9yIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMnB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2U2ZTZlNjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDsgfVxyXG4gIFxyXG4gIC5jb250cm9sLS1yYWRpbyAuY29udHJvbF9faW5kaWNhdG9yIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgfVxyXG4gIFxyXG4gIC5jb250cm9sOmhvdmVyIGlucHV0IH4gLmNvbnRyb2xfX2luZGljYXRvcixcclxuICAuY29udHJvbCBpbnB1dDpmb2N1cyB+IC5jb250cm9sX19pbmRpY2F0b3Ige1xyXG4gICAgYmFja2dyb3VuZDogI2NjYzsgfVxyXG4gIFxyXG4gIC5jb250cm9sIGlucHV0OmNoZWNrZWQgfiAuY29udHJvbF9faW5kaWNhdG9yIHtcclxuICAgIGJhY2tncm91bmQ6ICNmYjc3MWE7IH1cclxuICBcclxuICAuY29udHJvbDpob3ZlciBpbnB1dDpub3QoW2Rpc2FibGVkXSk6Y2hlY2tlZCB+IC5jb250cm9sX19pbmRpY2F0b3IsXHJcbiAgLmNvbnRyb2wgaW5wdXQ6Y2hlY2tlZDpmb2N1cyB+IC5jb250cm9sX19pbmRpY2F0b3Ige1xyXG4gICAgYmFja2dyb3VuZDogI2ZiODYzMzsgfVxyXG4gIFxyXG4gIC5jb250cm9sIGlucHV0OmRpc2FibGVkIH4gLmNvbnRyb2xfX2luZGljYXRvciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cclxuICBcclxuICAuY29udHJvbF9faW5kaWNhdG9yOmFmdGVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnaWNvbW9vbic7XHJcbiAgICBjb250ZW50OiAnXFxlNWNhJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC4zcyBhbGwgZWFzZTtcclxuICAgIC1vLXRyYW5zaXRpb246IC4zcyBhbGwgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IC4zcyBhbGwgZWFzZTsgfVxyXG4gIFxyXG4gIC5jb250cm9sIGlucHV0OmNoZWNrZWQgfiAuY29udHJvbF9faW5kaWNhdG9yOmFmdGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6ICNmZmY7IH1cclxuICBcclxuICAuY29udHJvbC0tY2hlY2tib3ggLmNvbnRyb2xfX2luZGljYXRvcjphZnRlciB7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG1hcmdpbi10b3A6IC0xcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IH1cclxuICBcclxuICAuY29udHJvbC0tY2hlY2tib3ggaW5wdXQ6ZGlzYWJsZWQgfiAuY29udHJvbF9faW5kaWNhdG9yOmFmdGVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzdiN2I3YjsgfVxyXG4gIFxyXG4gIC5jb250cm9sLS1jaGVja2JveCBpbnB1dDpkaXNhYmxlZDpjaGVja2VkIH4gLmNvbnRyb2xfX2luZGljYXRvciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2UwY2Y1O1xyXG4gICAgb3BhY2l0eTogLjI7IH0iXX0= */"] });


/***/ }),

/***/ 6699:
/*!******************************************************!*\
  !*** ./src/app/master-page/master-page.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MasterPageComponent": () => (/* binding */ MasterPageComponent)
/* harmony export */ });
/* harmony import */ var _Store_LoginUsers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Store/LoginUsers */ 3825);
/* harmony import */ var _Store_PageStore_Page_Actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Store/PageStore/Page.Actions */ 2705);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _apicalling_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apicalling.service */ 4029);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/modal */ 1803);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 5778);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5655);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/layout */ 8873);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/menu */ 713);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/button */ 7619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 6495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 6686);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 7005);















class MasterPageComponent {
    constructor(apiCall, modal, http, router, store) {
        this.apiCall = apiCall;
        this.modal = modal;
        this.http = http;
        this.router = router;
        this.store = store;
        this.isCollapsed = false;
        this.dbResult = [];
        this.lstAdmin = [];
        this.LoginUsers = new _Store_LoginUsers__WEBPACK_IMPORTED_MODULE_0__.LoginUsers();
    }
    ngOnInit() {
        this.view();
    }
    view() {
        debugger;
        this.apiCall.DBCalling('View', "Admin", "", "", "", "").subscribe(res => {
            debugger;
            this.dbResult = res;
            this.lstAdmin = this.dbResult[0][0];
        });
    }
    Profile() {
        this.router.navigateByUrl('Profile');
    }
    Logout() {
        debugger;
        this.LoginUsers = new _Store_LoginUsers__WEBPACK_IMPORTED_MODULE_0__.LoginUsers();
        this.store.dispatch(new _Store_PageStore_Page_Actions__WEBPACK_IMPORTED_MODULE_1__.OpenPage(Object.assign({}, this.LoginUsers)));
        this.router.navigateByUrl('Login');
    }
}
MasterPageComponent.ɵfac = function MasterPageComponent_Factory(t) { return new (t || MasterPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_apicalling_service__WEBPACK_IMPORTED_MODULE_2__.ApicallingService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store)); };
MasterPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MasterPageComponent, selectors: [["app-master-page"]], decls: 48, vars: 7, consts: [[1, "app-layout"], ["nzCollapsible", "", "nzWidth", "256px", "nzBreakpoint", "md", 1, "menu-sidebar", 3, "nzCollapsed", "nzTrigger", "nzCollapsedChange"], [1, "sidebar-logo"], ["href", "https://ng.ant.design/", "target", "_blank"], ["src", "https://ng.ant.design/assets/img/logo.svg", "alt", "logo"], ["nz-menu", "", "nzTheme", "dark", "nzMode", "inline", 3, "nzInlineCollapsed"], ["nz-submenu", "", "nzOpen", "", "nzTitle", "Dashboard", "nzIcon", "dashboard"], ["nz-menu-item", "", "nzMatchRouter", ""], ["routerLink", "/Products"], ["routerLink", "/Categories"], ["routerLink", "/Extras"], ["routerLink", "/Coupons"], ["routerLink", "/Offers"], ["nz-submenu", "", "nzOpen", "", "nzTitle", "Orders", "nzIcon", "form"], ["routerLink", "/Orders"], [1, "app-header"], [1, "header-trigger", 3, "click"], ["nz-icon", "", 1, "trigger", 3, "nzType"], ["nz-button", "", "nzType", "primary", "nz-dropdown", "", 2, "float", "right", "top", "15px", "margin-right", "25px", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "down"], ["menu4", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", 3, "click"], [1, "inner-content"]], template: function MasterPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-layout", 0)(1, "nz-sider", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzCollapsedChange", function MasterPageComponent_Template_nz_sider_nzCollapsedChange_1_listener($event) { return ctx.isCollapsed = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2)(3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ul", 5)(8, "li", 6)(9, "ul")(10, "li", 7)(11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "li", 7)(14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "li", 7)(17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Extras");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "li", 7)(20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Coupons");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "li", 7)(23, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Offers");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "li", 13)(26, "ul")(27, "li", 7)(28, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "nz-layout")(31, "nz-header")(32, "div", 15)(33, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MasterPageComponent_Template_span_click_33_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "nz-dropdown-menu", null, 20)(40, "ul", 21)(41, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MasterPageComponent_Template_li_click_41_listener() { return ctx.Profile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MasterPageComponent_Template_li_click_43_listener() { return ctx.Logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "nz-content")(46, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzCollapsed", ctx.isCollapsed)("nzTrigger", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.lstAdmin.RestaurantName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzInlineCollapsed", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzType", ctx.isCollapsed ? "menu-unfold" : "menu-fold");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzDropdownMenu", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.lstAdmin.RestaurantName, " ");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__.NzIconDirective, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__.NzLayoutComponent, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__.NzHeaderComponent, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__.NzContentComponent, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__.NzSiderComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_10__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_10__.NzMenuItemDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_10__.NzSubMenuComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__.NzWaveDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_14__.NzDropDownDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_14__.NzDropdownMenuComponent, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_14__.NzDropdownButtonDirective], styles: ["[_nghost-%COMP%] {\r\n  display: flex;\r\n  text-rendering: optimizeLegibility;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n.app-layout[_ngcontent-%COMP%] {\r\n  min-height: 100vh;\r\n}\r\n\r\n.menu-sidebar[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  z-index: 10;\r\n  min-height: 100vh;\r\n  box-shadow: 2px 0 6px rgba(0,21,41,.35);\r\n}\r\n\r\n.header-trigger[_ngcontent-%COMP%] {\r\n  height: 64px;\r\n  padding: 20px 24px;\r\n  font-size: 20px;\r\n  cursor: pointer;\r\n  transition: all .3s,padding 0s;\r\n}\r\n\r\n.trigger[_ngcontent-%COMP%]:hover {\r\n  color: #1890ff;\r\n}\r\n\r\n.sidebar-logo[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  height: 64px;\r\n  padding-left: 24px;\r\n  overflow: hidden;\r\n  line-height: 64px;\r\n  background: #001529;\r\n  transition: all .3s;\r\n}\r\n\r\n.sidebar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  height: 32px;\r\n  width: 32px;\r\n  vertical-align: middle;\r\n}\r\n\r\n.sidebar-logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  margin: 0 0 0 20px;\r\n  color: #fff;\r\n  font-weight: 600;\r\n  font-size: 14px;\r\n  font-family: Avenir,Helvetica Neue,Arial,Helvetica,sans-serif;\r\n  vertical-align: middle;\r\n}\r\n\r\nnz-header[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  width: 100%;\r\n  z-index: 2;\r\n}\r\n\r\n.app-header[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  height: 64px;\r\n  padding: 0;\r\n  background: #fff;\r\n  box-shadow: 0 1px 4px rgba(0,21,41,.08);\r\n}\r\n\r\nnz-content[_ngcontent-%COMP%] {\r\n  margin: 24px;\r\n}\r\n\r\n.inner-content[_ngcontent-%COMP%] {\r\n  padding: 24px;\r\n  background: #fff;\r\n  height: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hc3Rlci1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLG1DQUFtQztFQUNuQyxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0VBQ2YsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osV0FBVztFQUNYLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsNkRBQTZEO0VBQzdELHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkIiwiZmlsZSI6Im1hc3Rlci1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbn1cclxuXHJcbi5hcHAtbGF5b3V0IHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLm1lbnUtc2lkZWJhciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJveC1zaGFkb3c6IDJweCAwIDZweCByZ2JhKDAsMjEsNDEsLjM1KTtcclxufVxyXG5cclxuLmhlYWRlci10cmlnZ2VyIHtcclxuICBoZWlnaHQ6IDY0cHg7XHJcbiAgcGFkZGluZzogMjBweCAyNHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyxwYWRkaW5nIDBzO1xyXG59XHJcblxyXG4udHJpZ2dlcjpob3ZlciB7XHJcbiAgY29sb3I6ICMxODkwZmY7XHJcbn1cclxuXHJcbi5zaWRlYmFyLWxvZ28ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDY0cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbGluZS1oZWlnaHQ6IDY0cHg7XHJcbiAgYmFja2dyb3VuZDogIzAwMTUyOTtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG59XHJcblxyXG4uc2lkZWJhci1sb2dvIGltZyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogMzJweDtcclxuICB3aWR0aDogMzJweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uc2lkZWJhci1sb2dvIGgxIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAwIDAgMCAyMHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBBdmVuaXIsSGVsdmV0aWNhIE5ldWUsQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxubnotaGVhZGVyIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5hcHAtaGVhZGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLDIxLDQxLC4wOCk7XHJcbn1cclxuXHJcbm56LWNvbnRlbnQge1xyXG4gIG1hcmdpbjogMjRweDtcclxufVxyXG5cclxuLmlubmVyLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDI0cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 6467:
/*!********************************************!*\
  !*** ./src/app/offers/offers.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffersComponent": () => (/* binding */ OffersComponent)
/* harmony export */ });
/* harmony import */ var D_musaddiq_work_Angular_orderOnlineAdmin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _apicalling_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apicalling.service */ 4029);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/modal */ 1803);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5655);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/input */ 2533);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/menu */ 713);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/button */ 7619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 6495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 6686);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/select */ 1071);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/table */ 7085);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 7005);
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/alert */ 6608);


















function OffersComponent_ng_container_25_li_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const p_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("src", "", ctx_r6.imagePath, "", p_r7.Image, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](p_r7.Name);
  }
}

function OffersComponent_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "tr")(2, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzExpandChange", function OffersComponent_ng_container_25_Template_td_nzExpandChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const data_r3 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.onExpandChange(data_r3.Id, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td")(14, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "nz-dropdown-menu", null, 18)(18, "ul", 19)(19, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OffersComponent_ng_container_25_Template_li_click_19_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const data_r3 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.Edit(data_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OffersComponent_ng_container_25_Template_li_click_22_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const data_r3 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.Delete(data_r3.Id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "tr", 23)(26, "td")(27, "strong", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Offer Products");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "ul", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, OffersComponent_ng_container_25_li_30_Template, 4, 3, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const data_r3 = ctx.$implicit;
    const i_r4 = ctx.index;

    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](17);

    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzExpand", ctx_r1.expandSet.has(data_r3.Id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r4 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r3.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r3.Amout);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r3.Description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("src", "", ctx_r1.imagePath, "", data_r3.PostImage, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzDropdownMenu", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzExpand", ctx_r1.expandSet.has(data_r3.Id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.lstOfferProducts);
  }
}

function OffersComponent_ng_container_27_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "nz-alert", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function OffersComponent_ng_container_27_nz_option_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-option", 41);
  }

  if (rf & 2) {
    const d_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzLabel", d_r15.Name)("nzValue", d_r15.Id);
  }
}

function OffersComponent_ng_container_27_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r14.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}

function OffersComponent_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, OffersComponent_ng_container_27_div_2_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 30)(4, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Offer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OffersComponent_ng_container_27_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r16.Name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 30)(8, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OffersComponent_ng_container_27_Template_input_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r18.Amount = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 30)(12, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Products");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "nz-select", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OffersComponent_ng_container_27_Template_nz_select_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r19.lstProduct = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, OffersComponent_ng_container_27_nz_option_16_Template, 1, 2, "nz-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 30)(18, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "textarea", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OffersComponent_ng_container_27_Template_textarea_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r20.Description = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, OffersComponent_ng_container_27_div_21_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 38)(23, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Image Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function OffersComponent_ng_container_27_Template_input_change_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r21.onFileChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.Exist == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.Name)("ngClass", ctx_r2.Name == "" && ctx_r2.submit == true ? "error" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.Amount)("ngClass", ctx_r2.Amount == 0 && ctx_r2.submit == true ? "error" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.lstProduct)("ngClass", ctx_r2.lstProduct.length == 0 && ctx_r2.submit == true ? "error" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.lstProducts);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.Description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.status == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r2.submit == true && ctx_r2.imageSrc1 == "" ? "error" : "form-control");
  }
}

class OffersComponent {
  constructor(apiCall, modal, http) {
    this.apiCall = apiCall;
    this.modal = modal;
    this.http = http;
    this.Id = 0;
    this.search = "";
    this.imagePath = "";
    this.isVisible = false;
    this.Name = "";
    this.Description = "";
    this.status = false;
    this.submit = false;
    this.imageSrc1 = "";
    this.Image = "";
    this.operation = "";
    this.msg = "";
    this.lstOffers = [];
    this.lstProducts = [];
    this.lstProduct = [];
    this.imageUpload = "";
    this.Exist = false;
    this.Amount = 0;
    this.lstOfferProducts = [];
    this.expandSet = new Set();
  }

  ngOnInit() {
    debugger;
    this.view('');
    this.viewProducts('');
    this.imagePath = this.apiCall.imagePath;
    this.imageUpload = this.apiCall.ImageUpload;
  }

  onExpandChange(id, checked) {
    debugger;
    this.lstOfferProducts = [];

    if (checked) {
      debugger;
      this.expandSet = new Set();
      this.expandSet.add(id);
      this.apiCall.DBCalling('viewProducts', "Offers", "", "", "", id).subscribe(res => {
        debugger;
        this.dbResult = res;
        this.lstOfferProducts = this.dbResult[0];
      });
    } else {
      this.expandSet.delete(id);
    }
  }

  AddOffer() {
    debugger;
    this.isVisible = true;
  }

  Edit(e) {
    debugger;
    this.isVisible = true;
    this.Id = e.Id;
    this.Name = e.Name;
    this.Amount = e.Amout;
    this.lstProduct = JSON.parse(e.Products);
    this.Description = e.Description;
    this.status = true;
    this.imageSrc = this.imagePath + e.PostImage;
    this.Image = e.PostImage;
  }

  Delete(e) {
    debugger;
    this.modal.confirm({
      nzTitle: 'Are you sure?',
      nzContent: '<b style="color: red;">You wont be able to revert this!</b>',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.apiCall.DBCalling('Delete', "Offers", e, "", "", "").subscribe(res => {
        debugger;
        this.dbResult = res;

        if (this.dbResult[0][0].DBresult > 0) {
          this.msg = 'Deleted';
          this.success();
          this.isVisible = false;
          this.view('');
        }
      }),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }

  handleCancel() {
    debugger;
    this.Reset();
    this.isVisible = false;
    this.submit = false;
  }

  saveOffer() {
    debugger;
    this.submit = true;

    if (this.Name != '' && this.Image != '' && this.Amount && this.lstProduct.length != 0) {
      debugger;
      var data = {
        'Id': this.Id,
        'Name': this.Name,
        'Description': this.Description,
        'PostImage': this.Image,
        'Type': '',
        'Amount': this.Amount,
        'Products': this.lstProduct
      };
      var jsonData = JSON.stringify(data);

      if (this.Id == 0) {
        this.operation = "Insert";
      } else {
        this.operation = "Update";
      }

      this.apiCall.DBCalling(this.operation, "Offers", jsonData, "", "", "").subscribe(res => {
        debugger;
        this.dbResult = res;

        if (this.dbResult[0][0].DBresult > 0) {
          if (this.Id == 0) {
            this.msg = 'Saved';
          } else {
            this.msg = 'Updated';
          }

          this.isVisible = false;
          this.Reset();
          this.success();
          this.view('');
        } else if (this.dbResult[0][0].DBresult == -1) {
          debugger;
          this.Exist = true;
        }
      });
    }
  }

  success() {
    this.modal.success({
      nzTitle: 'Success',
      nzContent: 'Offer ' + this.msg + ' Successfully!'
    });
  }

  view(e) {
    debugger;
    this.apiCall.DBCalling('View', "Offers", "", "", "", this.search).subscribe(res => {
      debugger;
      this.dbResult = res;
      this.lstOffers = this.dbResult[0];
    });
  }

  viewProducts(e) {
    debugger;
    this.apiCall.DBCalling('View', "Products", "", "", "", this.search).subscribe(res => {
      debugger;
      this.dbResult = res;
      this.lstProducts = this.dbResult[0];
    });
  }

  Reset() {
    this.submit = false;
    this.Id = 0;
    this.Name = "";
    this.Description = "";
    this.Image = "";
    this.status = false;
  }

  onFileChange(event) {
    debugger;
    this.status = false;
    const file = event.target.files[0];
    this.status = event.target.files.length > 0 ? true : false;
    var Imageurl = event.target.files[0];

    if (this.status == true) {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imageSrc = reader.result;
        this.imageSrc1 = this.imageSrc;
        this.saveImage();
      };
    }
  }

  saveImage() {
    var _this = this;

    return (0,D_musaddiq_work_Angular_orderOnlineAdmin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        let value = _this.Image;
        _this.Image = ""; //  this.loader.loaderon()

        yield _this.http.post(_this.imageUpload, {
          'image': _this.imageSrc
        }).subscribe(res => {
          debugger;
          _this.dbResult = res;

          if (res == null) {
            _this.Image = value; // this.saveOffer()
          } else {
            debugger;
            _this.Image = _this.dbResult[0][1]; //  this.saveOffer()
          }
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }

}

OffersComponent.ɵfac = function OffersComponent_Factory(t) {
  return new (t || OffersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_apicalling_service__WEBPACK_IMPORTED_MODULE_1__.ApicallingService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

OffersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: OffersComponent,
  selectors: [["app-offers"]],
  decls: 28,
  vars: 4,
  consts: [[1, "row", "p-3"], [1, "col-md-4", "p-0"], ["nz-input", "", "placeholder", "Search here...", 3, "ngModel", "ngModelChange"], [1, "col-md-8"], ["nz-button", "", "nzType", "primary", 1, "float-end", 3, "click"], [1, "col-md-12", "p-0", "mt-3"], ["nzSize", "small", "nzTableLayout", "fixed", 3, "nzData"], ["basicTable", ""], ["nzWidth", "60px"], ["nzWidth", "60px", 1, "text-center"], [4, "ngFor", "ngForOf"], ["nzTitle", "Add Offer", 3, "nzVisible", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], [3, "nzExpand", "nzExpandChange"], [1, "text-center"], ["nz-image", "", "width", "30px", "height", "30px", "alt", "", 3, "src"], ["nz-button", "", "nz-dropdown", "", "nzPlacement", "bottomCenter", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "ellipsis", "nzTheme", "outline", 2, "font-size", "18px"], ["menu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", 3, "click"], ["nz-icon", "", "nzType", "edit", "nzTheme", "outline", 1, "mr-05"], ["nz-icon", "", "nzType", "delete", "nzTheme", "outline", 1, "mr-05"], [3, "nzExpand"], [1, "mx-3"], [2, "list-style", "auto"], ["class", "mb-1", 4, "ngFor", "ngForOf"], [1, "mb-1"], [1, "row"], ["class", "col-md-12 mb-3", 4, "ngIf"], [1, "col-md-12", "mb-3"], ["for", ""], ["nz-input", "", "placeholder", "Name", 3, "ngModel", "ngClass", "ngModelChange"], ["nz-input", "", "placeholder", "0.00", "type", "number", 3, "ngModel", "ngClass", "ngModelChange"], ["nzMode", "tags", "nzPlaceHolder", "Please select", 1, "w-100", 3, "ngModel", "ngClass", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["rows", "3", "nz-input", "", 3, "ngModel", "ngModelChange"], ["class", "col-md-2", 4, "ngIf"], [1, "col-md-10"], ["type", "file", "id", "file", 1, "form-control", 3, "ngClass", "change"], ["nzType", "warning", "nzMessage", "Offer Already Exist!"], [3, "nzLabel", "nzValue"], [1, "col-md-2"], [1, "w-100", 3, "src"]],
  template: function OffersComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OffersComponent_Template_input_ngModelChange_2_listener($event) {
        return ctx.search = $event;
      })("ngModelChange", function OffersComponent_Template_input_ngModelChange_2_listener($event) {
        return ctx.view($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OffersComponent_Template_button_click_4_listener() {
        return ctx.AddOffer();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Add Offer");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5)(7, "nz-table", 6, 7)(9, "thead")(10, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "th", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "#");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Price");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Description");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Image");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Action");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, OffersComponent_ng_container_25_Template, 31, 10, "ng-container", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "nz-modal", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzVisibleChange", function OffersComponent_Template_nz_modal_nzVisibleChange_26_listener($event) {
        return ctx.isVisible = $event;
      })("nzOnCancel", function OffersComponent_Template_nz_modal_nzOnCancel_26_listener() {
        return ctx.handleCancel();
      })("nzOnOk", function OffersComponent_Template_nz_modal_nzOnOk_26_listener() {
        return ctx.saveOffer();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, OffersComponent_ng_container_27_Template, 26, 11, "ng-container", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.search);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzData", ctx.lstOffers);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _r0.data);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzVisible", ctx.isVisible);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__.NzIconDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__.NzInputDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_9__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_9__.NzMenuItemDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__.NzWaveDirective, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__.NzModalContentDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__.NzOptionComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__.NzSelectComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__.NzTdAddOnComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__.NzTbodyComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__.NzTrExpandDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__.NzTableFixedRowComponent, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_15__.NzDropDownDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_15__.NzDropdownMenuComponent, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_15__.NzDropdownButtonDirective, ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_16__.NzAlertComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvZmZlcnMuY29tcG9uZW50LmNzcyJ9 */"]
});

/***/ }),

/***/ 8686:
/*!********************************************!*\
  !*** ./src/app/orders/orders.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersComponent": () => (/* binding */ OrdersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _apicalling_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apicalling.service */ 4029);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/modal */ 1803);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5655);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/input */ 2533);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/menu */ 713);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/button */ 7619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 6495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 6686);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/table */ 7085);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 7005);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 8284);
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/badge */ 8757);















function OrdersComponent_nz_tab_5_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
} if (rf & 2) {
    const tab_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzType", tab_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", tab_r1.name, " ");
} }
function OrdersComponent_nz_tab_5_ng_container_32_nz_badge_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-badge", 31);
} }
function OrdersComponent_nz_tab_5_ng_container_32_nz_badge_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-badge", 32);
} }
function OrdersComponent_nz_tab_5_ng_container_32_nz_badge_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-badge", 33);
} }
function OrdersComponent_nz_tab_5_ng_container_32_nz_badge_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-badge", 34);
} }
function OrdersComponent_nz_tab_5_ng_container_32_nz_badge_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-badge", 35);
} }
function OrdersComponent_nz_tab_5_ng_container_32_nz_badge_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-badge", 36);
} }
function OrdersComponent_nz_tab_5_ng_container_32_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "COD");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OrdersComponent_nz_tab_5_ng_container_32_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Online Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OrdersComponent_nz_tab_5_ng_container_32_li_35_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrdersComponent_nz_tab_5_ng_container_32_li_35_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const data_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r25.updateOrder("Accepted", data_r7)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Accept");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OrdersComponent_nz_tab_5_ng_container_32_li_36_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrdersComponent_nz_tab_5_ng_container_32_li_36_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const data_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r28.updateOrder("Cancelled", data_r7)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OrdersComponent_nz_tab_5_ng_container_32_li_37_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrdersComponent_nz_tab_5_ng_container_32_li_37_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33); const data_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r31.updateOrder("Ready for Pick up", data_r7)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Ready To Pick");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OrdersComponent_nz_tab_5_ng_container_32_li_38_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrdersComponent_nz_tab_5_ng_container_32_li_38_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const data_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r34.updateOrder("Picked up", data_r7)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Picked Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OrdersComponent_nz_tab_5_ng_container_32_li_39_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrdersComponent_nz_tab_5_ng_container_32_li_39_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const data_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r37.updateOrder("Out for Delivery", data_r7)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Out For Delivery");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OrdersComponent_nz_tab_5_ng_container_32_li_40_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrdersComponent_nz_tab_5_ng_container_32_li_40_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r42); const data_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r40.updateOrder("Delivered", data_r7)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Delivered");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OrdersComponent_nz_tab_5_ng_container_32_tr_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const data_r43 = ctx.$implicit;
    const i_r44 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r44 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r43.Productname);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r43.addonName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r43.Qty);
} }
function OrdersComponent_nz_tab_5_ng_container_32_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr")(2, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzExpandChange", function OrdersComponent_nz_tab_5_ng_container_32_Template_td_nzExpandChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r46); const data_r7 = restoredCtx.$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r45.onExpandChange(data_r7.Id, $event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, OrdersComponent_nz_tab_5_ng_container_32_nz_badge_8_Template, 1, 0, "nz-badge", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, OrdersComponent_nz_tab_5_ng_container_32_nz_badge_9_Template, 1, 0, "nz-badge", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, OrdersComponent_nz_tab_5_ng_container_32_nz_badge_10_Template, 1, 0, "nz-badge", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, OrdersComponent_nz_tab_5_ng_container_32_nz_badge_11_Template, 1, 0, "nz-badge", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, OrdersComponent_nz_tab_5_ng_container_32_nz_badge_12_Template, 1, 0, "nz-badge", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, OrdersComponent_nz_tab_5_ng_container_32_nz_badge_13_Template, 1, 0, "nz-badge", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, OrdersComponent_nz_tab_5_ng_container_32_span_19_Template, 2, 0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, OrdersComponent_nz_tab_5_ng_container_32_span_20_Template, 2, 0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "td")(30, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "nz-dropdown-menu", null, 25)(34, "ul", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, OrdersComponent_nz_tab_5_ng_container_32_li_35_Template, 2, 0, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, OrdersComponent_nz_tab_5_ng_container_32_li_36_Template, 2, 0, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, OrdersComponent_nz_tab_5_ng_container_32_li_37_Template, 2, 0, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, OrdersComponent_nz_tab_5_ng_container_32_li_38_Template, 2, 0, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, OrdersComponent_nz_tab_5_ng_container_32_li_39_Template, 2, 0, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, OrdersComponent_nz_tab_5_ng_container_32_li_40_Template, 2, 0, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "tr", 28)(42, "p", 29)(43, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Instructions : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "nz-table", 30, 8)(48, "thead")(49, "tr")(50, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Addon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, OrdersComponent_nz_tab_5_ng_container_32_tr_59_Template, 9, 4, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r7 = ctx.$implicit;
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](33);
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](47);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzExpand", ctx_r5.expandSet.has(data_r7.Id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r7.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r7.customer);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r7.OrderStatus == "Accepted");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r7.OrderStatus == "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r7.OrderStatus == "Ready for Pick up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r7.OrderStatus == "Picked up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r7.OrderStatus == "Out for Delivery");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r7.OrderStatus == "Delivered");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r5.lstAdmin.Currency, "", data_r7.Total, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r7.PaymentStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r7.Cod == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r7.OnlinePayment == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r7.RefrenceNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r7.OrderType);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r5.lstAdmin.Currency, "", data_r7.Discount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r7.CreatedDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzDropdownMenu", _r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.selectedTab == "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.selectedTab == "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.selectedTab == "Accepted" && ctx_r5.lstAdmin.Pickup == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.selectedTab == "Accepted" || ctx_r5.selectedTab == "Ready for Pick up" && ctx_r5.lstAdmin.Pickup == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.selectedTab == "Accepted" || ctx_r5.selectedTab == "Out for Delivery" && ctx_r5.lstAdmin.Delivery == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.selectedTab == "Accepted" || ctx_r5.selectedTab == "Out for Delivery" && ctx_r5.lstAdmin.Delivery == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzExpand", ctx_r5.expandSet.has(data_r7.Id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r7.Instructions, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzData", ctx_r5.lstOrderDetails)("nzShowPagination", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _r23.data);
} }
function OrdersComponent_nz_tab_5_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-tab", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzClick", function OrdersComponent_nz_tab_5_Template_nz_tab_nzClick_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r48); const tab_r1 = restoredCtx.$implicit; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r47.changeTab(tab_r1.name)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OrdersComponent_nz_tab_5_ng_template_1_Template, 2, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "nz-table", 7, 8)(6, "thead")(7, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Order Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Customer name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Order Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Payment Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Payment Mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Payment Ref");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Delivery Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, OrdersComponent_nz_tab_5_ng_container_32_Template, 60, 31, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTitle", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzData", ctx_r0.lstOrders);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _r4.data);
} }
class OrdersComponent {
    constructor(apiCall, modal, http) {
        this.apiCall = apiCall;
        this.modal = modal;
        this.http = http;
        this.expandSet = new Set();
        this.lstOrders = [];
        this.lstOrderDetails = [];
        this.lstAdmin = [];
        this.selectedTab = "All";
        this.msg = "";
        this.lstOrdersdata = [];
        this.tabs = [
            { name: 'All', icon: 'apple' },
            { name: 'Accepted', icon: 'android' },
            { name: 'Cancelled', icon: 'android' },
            { name: 'Ready for Pick up', icon: 'android' },
            { name: 'Picked up', icon: 'android' },
            { name: 'Out for Delivery', icon: 'android' },
            { name: 'Delivered', icon: 'android' }
        ];
    }
    ngOnInit() {
        debugger;
        this.viewOrders('');
        this.Admin();
    }
    onExpandChange(id, checked) {
        debugger;
        if (checked) {
            this.expandSet = new Set();
            this.expandSet.add(id);
            debugger;
            this.apiCall.DBCalling('orderDetails', "Orders", "", "", "", id).subscribe(res => {
                debugger;
                this.dbResult = res;
                this.lstOrderDetails = this.dbResult[0];
            });
        }
        else {
            this.expandSet.delete(id);
        }
    }
    viewOrders(search) {
        debugger;
        this.apiCall.DBCalling('View', "Orders", "", "", "", search).subscribe(res => {
            debugger;
            this.dbResult = res;
            this.lstOrdersdata = this.dbResult[0];
            this.lstOrders = this.dbResult[0];
        });
    }
    updateOrder(d, e) {
        debugger;
        var data = ({ 'Id': e.Id, 'OrderStatus': d });
        var jsonData = JSON.stringify(data);
        this.modal.confirm({
            nzTitle: 'Are you sure?',
            nzContent: '<b style="color: red;">You want to ' + d + ' this order</b>',
            nzOkText: 'Yes',
            nzOkType: 'primary',
            nzOkDanger: true,
            nzOnOk: () => this.apiCall.DBCalling('updateOrderStatus', "Orders", jsonData, "", "", "").subscribe(res => {
                debugger;
                this.dbResult = res;
                if (this.dbResult[0][0].DBresult > 0) {
                    this.msg = d;
                    this.success();
                    if (d == 'Ready for Pick up') {
                        this.readyPickup(e);
                    }
                    if (d == 'Picked up') {
                        this.PickedUp(e);
                    }
                    if (d == 'Out for Delivery') {
                        this.outForDelivery(e);
                    }
                    if (d == 'Delivered') {
                        this.delivered(e);
                    }
                    this.viewOrders('');
                    this.selectedTab = "All";
                }
            }),
            nzCancelText: 'No',
            nzOnCancel: () => console.log('Cancel')
        });
    }
    success() {
        this.modal.success({
            nzTitle: 'Success',
            nzContent: 'Order ' + this.msg + ' Successfully!'
        });
    }
    Admin() {
        this.apiCall.DBCalling('View', "Admin", "", "", "", "").subscribe(res => {
            debugger;
            this.dbResult = res;
            this.lstAdmin = this.dbResult[0][0];
            if (this.lstAdmin.Pickup == 0) {
                this.tabs.splice(3, 1);
                this.tabs.splice(3, 1);
            }
            if (this.lstAdmin.Delivery == 0) {
                debugger;
                this.tabs.splice(5, 1);
                this.tabs.splice(5, 1);
            }
        });
    }
    changeTab(d) {
        debugger;
        this.selectedTab = d;
        if (d != 'All') {
            debugger;
            this.lstOrders = this.lstOrdersdata.filter((x) => x.OrderStatus == d);
        }
        else if (d == 'All') {
            this.lstOrders = this.lstOrdersdata;
        }
    }
    readyPickup(data) {
        debugger;
        this.http.post('https://nextasoft.in/order-online/Api/pickup.php', { 'To': data.Email, 'orderId': data.Id, 'username': data.customer }).subscribe(res => {
            debugger;
            console.log(res);
        });
    }
    PickedUp(data) {
        debugger;
        this.http.post('https://nextasoft.in/order-online/Api/pickup-confirmation.php', { 'To': data.Email, 'orderId': data.Id, 'username': data.customer }).subscribe(res => {
            debugger;
            console.log(res);
        });
    }
    outForDelivery(data) {
        debugger;
        this.http.post('https://nextasoft.in/order-online/Api/outfordelivery.php', { 'To': data.Email, 'orderId': data.Id, 'username': data.customer }).subscribe(res => {
            debugger;
            console.log(res);
        });
    }
    delivered(data) {
        debugger;
        this.http.post('https://nextasoft.in/order-online/Api/delivered.php', { 'To': data.Email, 'orderId': data.Id, 'username': data.customer }).subscribe(res => {
            debugger;
            console.log(res);
        });
    }
}
OrdersComponent.ɵfac = function OrdersComponent_Factory(t) { return new (t || OrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_apicalling_service__WEBPACK_IMPORTED_MODULE_0__.ApicallingService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_2__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
OrdersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OrdersComponent, selectors: [["app-orders"]], decls: 6, vars: 1, consts: [[1, "row"], [1, "col-md-4", "mb-3"], ["nz-input", "", "placeholder", "Search here..."], [1, "col-md-12"], [3, "nzTitle", "nzClick", 4, "ngFor", "ngForOf"], [3, "nzTitle", "nzClick"], ["titleTemplate", ""], ["nzSize", "small", "nzTableLayout", "fixed", 3, "nzData"], ["basicTable", ""], ["nzWidth", "60px"], ["nzWidth", "80px"], ["nzWidth", "200px"], [4, "ngFor", "ngForOf"], ["nz-icon", "", 3, "nzType"], [3, "nzExpand", "nzExpandChange"], [1, "text-left"], ["nzStatus", "success", "nzText", "Accepted", 4, "ngIf"], ["nzStatus", "error", "nzText", "Cancelled", 4, "ngIf"], ["nzStatus", "processing", "nzText", "Ready for Pick up", 4, "ngIf"], ["nzStatus", "success", "nzText", "Picked up", 4, "ngIf"], ["nzStatus", "processing", "nzText", "Out for Delivery", 4, "ngIf"], ["nzStatus", "success", "nzText", "Delivered", 4, "ngIf"], [4, "ngIf"], ["nz-button", "", "nz-dropdown", "", "nzPlacement", "bottomCenter", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "ellipsis", "nzTheme", "outline", 2, "font-size", "18px"], ["menu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", 3, "click", 4, "ngIf"], [3, "nzExpand"], [1, "m-0", 2, "padding-left", "1rem"], [2, "width", "40%", "padding", "1rem", "margin-left", "0px", 3, "nzData", "nzShowPagination"], ["nzStatus", "success", "nzText", "Accepted"], ["nzStatus", "error", "nzText", "Cancelled"], ["nzStatus", "processing", "nzText", "Ready for Pick up"], ["nzStatus", "success", "nzText", "Picked up"], ["nzStatus", "processing", "nzText", "Out for Delivery"], ["nzStatus", "success", "nzText", "Delivered"], ["nz-menu-item", "", 3, "click"]], template: function OrdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "nz-tabset");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, OrdersComponent_nz_tab_5_Template, 33, 3, "nz-tab", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tabs);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__.NzIconDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__.NzInputDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_7__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_7__.NzMenuItemDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__.NzWaveDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTdAddOnComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTbodyComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTrExpandDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTableFixedRowComponent, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_12__.NzDropDownDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_12__.NzDropdownMenuComponent, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_12__.NzDropdownButtonDirective, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_13__.NzTabSetComponent, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_13__.NzTabComponent, ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_14__.NzBadgeComponent], styles: [".ant-alert[_ngcontent-%COMP%] {\r\n    box-sizing: border-box !important;\r\n    margin: 0 !important;\r\n    padding: 0 !important;\r\n    color: rgba(0, 0, 0, 0.85) !important;\r\n    font-size: 14px !important;\r\n    font-variant: tabular-nums !important;\r\n    line-height: 1.5715 !important;\r\n    list-style: none !important;\r\n    font-feature-settings: 'tnum', \"tnum\", \"tnum\" !important;\r\n    position: relative !important;\r\n    display: block !important;\r\n    align-items: center !important;\r\n    padding: 2px 10px !important;\r\n    word-wrap: break-word !important;\r\n    border-radius: 25px !important;\r\n}\r\n\r\n.anticon[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    color: inherit;\r\n    font-style: normal;\r\n    line-height: 0;\r\n    text-align: center;\r\n    text-transform: none;\r\n    vertical-align: 0.1em;\r\n    text-rendering: optimizelegibility;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUNBQWlDO0lBQ2pDLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIscUNBQXFDO0lBQ3JDLDBCQUEwQjtJQUMxQixxQ0FBcUM7SUFDckMsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQix3REFBZ0Q7SUFDaEQsNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6Qiw4QkFBOEI7SUFDOUIsNEJBQTRCO0lBQzVCLGdDQUFnQztJQUNoQyw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsa0NBQWtDO0lBQ2xDLG1DQUFtQztJQUNuQyxrQ0FBa0M7QUFDdEMiLCJmaWxlIjoib3JkZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW50LWFsZXJ0IHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3ggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NSkgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC12YXJpYW50OiB0YWJ1bGFyLW51bXMgIWltcG9ydGFudDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU3MTUgIWltcG9ydGFudDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ3RudW0nLCBcInRudW1cIiAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMnB4IDEwcHggIWltcG9ydGFudDtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYW50aWNvbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogMC4xZW07XHJcbiAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVsZWdpYmlsaXR5O1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG59Il19 */"] });


/***/ }),

/***/ 4532:
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsComponent": () => (/* binding */ ProductsComponent)
/* harmony export */ });
/* harmony import */ var D_musaddiq_work_Angular_orderOnlineAdmin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _apicalling_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apicalling.service */ 4029);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/modal */ 1803);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5655);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/input */ 2533);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/menu */ 713);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/button */ 7619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 6495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 6686);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/select */ 1071);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/table */ 7085);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 7005);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 8154);
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/alert */ 6608);



















function ProductsComponent_tr_26_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Veg");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function ProductsComponent_tr_26_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Non Veg");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function ProductsComponent_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ProductsComponent_tr_26_span_8_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ProductsComponent_tr_26_span_9_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "td")(15, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "nz-dropdown-menu", null, 16)(19, "ul", 17)(20, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_tr_26_Template_li_click_20_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const data_r3 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.Edit(data_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_tr_26_Template_li_click_23_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const data_r3 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.Delete(data_r3.Id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    const data_r3 = ctx.$implicit;
    const i_r4 = ctx.index;

    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](18);

    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r4 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r3.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r3.Price);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", data_r3.IsVegeterian == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", data_r3.IsVegeterian != 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("src", "", ctx_r1.imagePath, "", data_r3.Image, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r3.Description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzDropdownMenu", _r7);
  }
}

function ProductsComponent_ng_container_28_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "nz-alert", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function ProductsComponent_ng_container_28_nz_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-option", 40);
  }

  if (rf & 2) {
    const d_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzLabel", d_r15.Name)("nzValue", d_r15.Id);
  }
}

function ProductsComponent_ng_container_28_nz_option_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-option", 40);
  }

  if (rf & 2) {
    const d_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzLabel", d_r16.Name)("nzValue", d_r16.Id);
  }
}

function ProductsComponent_ng_container_28_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r14.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}

function ProductsComponent_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProductsComponent_ng_container_28_div_2_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 25)(4, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "nz-select", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProductsComponent_ng_container_28_Template_nz_select_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r17.CategoryId = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ProductsComponent_ng_container_28_nz_option_8_Template, 1, 2, "nz-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 29)(10, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProductsComponent_ng_container_28_Template_input_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r19.Name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 29)(14, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProductsComponent_ng_container_28_Template_input_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r20.Price = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 25)(18, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Addons");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "nz-select", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProductsComponent_ng_container_28_Template_nz_select_ngModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r21.Extras = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, ProductsComponent_ng_container_28_nz_option_22_Template, 1, 2, "nz-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 33)(24, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProductsComponent_ng_container_28_Template_label_ngModelChange_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r22.checked = $event);
    })("ngModelChange", function ProductsComponent_ng_container_28_Template_label_ngModelChange_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r23.vegChanges($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Is Vegetarian");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 25)(27, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "textarea", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProductsComponent_ng_container_28_Template_textarea_ngModelChange_29_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r24.Description = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, ProductsComponent_ng_container_28_div_30_Template, 2, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 37)(32, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Image Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ProductsComponent_ng_container_28_Template_input_change_34_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r25.onFileChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.Exist == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.CategoryId)("ngClass", ctx_r2.CategoryId == "" && ctx_r2.submit == true ? "error" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.lstCategories);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.Name)("ngClass", ctx_r2.Name == "" && ctx_r2.submit == true ? "error" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.Price)("ngClass", ctx_r2.Price == 0 && ctx_r2.submit == true ? "error" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.Extras);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.lstExtras);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.Description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.status == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r2.submit == true && ctx_r2.imageSrc1 == "" ? "error" : "form-control");
  }
}

class ProductsComponent {
  constructor(apiCall, modal, http) {
    this.apiCall = apiCall;
    this.modal = modal;
    this.http = http;
    this.Id = 0;
    this.search = "";
    this.lstProduct = [];
    this.imagePath = "";
    this.isVisible = false;
    this.CategoryId = "";
    this.Name = "";
    this.status = false;
    this.submit = false;
    this.imageSrc1 = "";
    this.Image = "";
    this.Description = 0;
    this.operation = "";
    this.msg = "";
    this.lstCategories = [];
    this.imageUpload = "";
    this.Exist = false;
    this.Price = 0;
    this.Extras = [];
    this.lstProducts = [];
    this.IsVegeterian = 0;
    this.lstExtras = [];
    this.checked = false;
  }

  ngOnInit() {
    debugger;
    this.view('');
    this.viewCategory();
    this.viewExtras();
    this.imagePath = this.apiCall.imagePath;
    this.imageUpload = this.apiCall.ImageUpload;
  }

  AddProduct() {
    debugger;
    this.isVisible = true;
  }

  Edit(e) {
    debugger;
    this.isVisible = true;
    this.Id = e.Id;
    this.CategoryId = e.CategoryId;
    this.Name = e.Name;
    this.Price = e.Price;
    this.Extras = JSON.parse(e.Extras);
    this.Description = e.Description;
    this.IsVegeterian = e.IsVegeterian;
    this.status = true;
    this.imageSrc = this.imagePath + e.Image;
    this.Image = e.Image;

    if (e.IsVegeterian == 0) {
      this.checked = false;
    } else {
      this.checked = true;
    }

    this.Id = e.Id;
  }

  Delete(e) {
    this.modal.confirm({
      nzTitle: 'Are you sure?',
      nzContent: '<b style="color: red;">You wont be able to revert this!</b>',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.apiCall.DBCalling('Delete', "Products", e, "", "", "").subscribe(res => {
        debugger;
        this.dbResult = res;

        if (this.dbResult[0][0].DBresult > 0) {
          this.msg = 'Deleted';
          this.success();
          this.isVisible = false;
          this.view('');
        }
      }),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }

  handleCancel() {
    debugger;
    this.Reset();
    this.isVisible = false;
    this.submit = false;
  }

  vegChanges(d) {
    debugger;

    if (d == true) {
      this.IsVegeterian = 1;
    } else {
      this.IsVegeterian = 0;
    }
  }

  saveProduct() {
    debugger;
    this.submit = true;

    if (this.CategoryId != '' && this.Name != '' && this.Price != 0 && this.Image != '') {
      debugger;
      var data = {
        'Id': this.Id,
        'CategoryId': this.CategoryId,
        'Name': this.Name,
        'Description': this.Description,
        'Price': this.Price,
        'Image': this.Image,
        'Extras': this.Extras,
        'IsVegeterian': this.IsVegeterian
      };
      var jsonData = JSON.stringify(data);

      if (this.Id == 0) {
        this.operation = "Insert";
      } else {
        this.operation = "Update";
      }

      this.apiCall.DBCalling(this.operation, "Products", jsonData, "", "", "").subscribe(res => {
        debugger;
        this.dbResult = res;

        if (this.dbResult[0][0].DBresult > 0) {
          if (this.Id == 0) {
            this.msg = 'Saved';
          } else {
            this.msg = 'Updated';
          }

          this.isVisible = false;
          this.Reset();
          this.success();
          this.view('');
        } else if (this.dbResult[0][0].DBresult == -1) {
          debugger;
          this.Exist = true;
        }
      });
    }
  }

  viewExtras() {
    debugger;
    this.apiCall.DBCalling('View', "Extras", "", "", "", this.search).subscribe(res => {
      debugger;
      this.dbResult = res;
      this.lstExtras = this.dbResult[0];
    });
  }

  success() {
    this.modal.success({
      nzTitle: 'Success',
      nzContent: 'Product ' + this.msg + ' Successfully!'
    });
  }

  view(e) {
    debugger;
    this.apiCall.DBCalling('View', "Products", "", "", "", this.search).subscribe(res => {
      debugger;
      this.dbResult = res;
      this.lstProducts = this.dbResult[0];
    });
  }

  viewCategory() {
    debugger;
    this.apiCall.DBCalling('View', "categories", "", "", "", this.search).subscribe(res => {
      debugger;
      this.dbResult = res;
      this.lstCategories = this.dbResult[0];
    });
  }

  Reset() {
    this.submit = false;
    this.Id = 0;
    this.CategoryId = "";
    this.Name = "";
    this.Image = "";
    this.Description = 0;
    this.checked = false;
    this.status = false;
  }

  onFileChange(event) {
    debugger;
    this.status = false;
    const file = event.target.files[0];
    this.status = event.target.files.length > 0 ? true : false;
    var Imageurl = event.target.files[0];

    if (this.status == true) {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imageSrc = reader.result;
        this.imageSrc1 = this.imageSrc;
        this.saveImage();
      };
    }
  }

  saveImage() {
    var _this = this;

    return (0,D_musaddiq_work_Angular_orderOnlineAdmin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        let value = _this.Image;
        _this.Image = ""; //  this.loader.loaderon()

        yield _this.http.post(_this.imageUpload, {
          'image': _this.imageSrc
        }).subscribe(res => {
          debugger;
          _this.dbResult = res;

          if (res == null) {
            _this.Image = value; // this.saveProduct()
          } else {
            debugger;
            _this.Image = _this.dbResult[0][1]; //  this.saveProduct()
          }
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }

}

ProductsComponent.ɵfac = function ProductsComponent_Factory(t) {
  return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_apicalling_service__WEBPACK_IMPORTED_MODULE_1__.ApicallingService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

ProductsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ProductsComponent,
  selectors: [["app-products"]],
  decls: 29,
  vars: 4,
  consts: [[1, "row", "p-3"], [1, "col-md-4", "p-0"], ["nz-input", "", "placeholder", "Search here...", 3, "ngModel", "ngModelChange"], [1, "col-md-8"], ["nz-button", "", "nzType", "primary", 1, "float-end", 3, "click"], [1, "col-md-12", "p-0", "mt-3"], ["nzSize", "small", 3, "nzData"], ["basicTable", ""], [4, "ngFor", "ngForOf"], ["nzTitle", "Add Product", 3, "nzVisible", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], ["class", "success-chip", 4, "ngIf"], ["class", "danger-chip", 4, "ngIf"], ["nz-image", "", "width", "30px", "height", "30px", "alt", "", 3, "src"], ["nz-button", "", "nz-dropdown", "", "nzPlacement", "bottomCenter", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "ellipsis", "nzTheme", "outline", 2, "font-size", "18px"], ["menu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", 3, "click"], ["nz-icon", "", "nzType", "edit", "nzTheme", "outline", 1, "mr-05"], ["nz-icon", "", "nzType", "delete", "nzTheme", "outline", 1, "mr-05"], [1, "success-chip"], [1, "danger-chip"], [1, "row"], ["class", "col-md-12 mb-3", 4, "ngIf"], [1, "col-md-12", "mb-3"], ["for", ""], ["nzShowSearch", "", "nzAllowClear", "", "nzPlaceHolder", "Select a Category", 1, "w-100", 3, "ngModel", "ngClass", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], [1, "col-md-6", "mb-3"], ["nz-input", "", "placeholder", "Name", 3, "ngModel", "ngClass", "ngModelChange"], ["nz-input", "", "placeholder", "Price", "type", "number", 3, "ngModel", "ngClass", "ngModelChange"], ["nzMode", "tags", "nzPlaceHolder", "Please select", 1, "w-100", 3, "ngModel", "ngModelChange"], [1, "col-md-12"], ["nz-checkbox", "", 3, "ngModel", "ngModelChange"], ["rows", "3", "nz-input", "", 3, "ngModel", "ngModelChange"], ["class", "col-md-2", 4, "ngIf"], [1, "col-md-10"], ["type", "file", "id", "file", 1, "form-control", 3, "ngClass", "change"], ["nzType", "warning", "nzMessage", "Product Already Exist!"], [3, "nzLabel", "nzValue"], [1, "col-md-2"], [1, "w-100", 3, "src"]],
  template: function ProductsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProductsComponent_Template_input_ngModelChange_2_listener($event) {
        return ctx.search = $event;
      })("ngModelChange", function ProductsComponent_Template_input_ngModelChange_2_listener($event) {
        return ctx.view($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_Template_button_click_4_listener() {
        return ctx.AddProduct();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Add Product");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5)(7, "nz-table", 6, 7)(9, "thead")(10, "tr")(11, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "#");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Price");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Vegeterian");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Image");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Description");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Action");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, ProductsComponent_tr_26_Template, 26, 9, "tr", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "nz-modal", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzVisibleChange", function ProductsComponent_Template_nz_modal_nzVisibleChange_27_listener($event) {
        return ctx.isVisible = $event;
      })("nzOnCancel", function ProductsComponent_Template_nz_modal_nzOnCancel_27_listener() {
        return ctx.handleCancel();
      })("nzOnOk", function ProductsComponent_Template_nz_modal_nzOnOk_27_listener() {
        return ctx.saveProduct();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, ProductsComponent_ng_container_28_Template, 35, 14, "ng-container", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.search);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzData", ctx.lstProducts);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _r0.data);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzVisible", ctx.isVisible);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__.NzIconDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__.NzInputDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_9__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_9__.NzMenuItemDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__.NzWaveDirective, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__.NzModalContentDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__.NzOptionComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__.NzSelectComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__.NzTbodyComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__.NzTrDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_15__.NzDropDownDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_15__.NzDropdownMenuComponent, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_15__.NzDropdownButtonDirective, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_16__.NzCheckboxComponent, ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_17__.NzAlertComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0cy5jb21wb25lbnQuY3NzIn0= */"]
});

/***/ }),

/***/ 6630:
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var D_musaddiq_work_Angular_orderOnlineAdmin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _apicalling_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apicalling.service */ 4029);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/modal */ 1803);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/input */ 2533);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/button */ 7619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 6495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 6686);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/select */ 1071);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 8154);














function ProfileComponent_nz_option_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-option", 36);
  }

  if (rf & 2) {
    const d_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("nzLabel", "", d_r4.Name, " - ", d_r4.Sign, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzValue", d_r4.Id);
  }
}

function ProfileComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20)(1, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Delivery Chargs");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_58_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.lstAdmin.DeliveryCharges = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.lstAdmin.DeliveryCharges)("ngClass", ctx_r1.lstAdmin.Delivery == 1 && ctx_r1.lstAdmin.DeliveryCharges == 0 || ctx_r1.lstAdmin.DeliveryCharges == null || ctx_r1.lstAdmin.DeliveryCharges == undefined && ctx_r1.submit == true ? "error" : "");
  }
}

function ProfileComponent_div_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r2.Logo, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}

function ProfileComponent_div_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r3.restaurant, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}

class ProfileComponent {
  constructor(apiCall, modal, http) {
    this.apiCall = apiCall;
    this.modal = modal;
    this.http = http;
    this.lstAdmin = [];
    this.imagePath = "";
    this.imageUpload = "";
    this.lstCurrency = [];
    this.submit = false;
    this.status = false;
    this.logo1 = "";
    this.restaurant1 = "";
    this.Image = "";
    this.Imagetype = "";
    this.restaurantImage = "";
    this.Id = 0;
    this.operation = "";
    this.msg = "";
    this.allChecked = false;
    this.DeliveryCharges = 1;
    this.Tax = 0;
    this.adminOptions = [{
      label: 'Cod',
      value: 'Cod',
      checked: false
    }, {
      label: 'Online',
      value: 'Online',
      checked: false
    }, {
      label: 'Pickup',
      value: 'Pickup',
      checked: false
    }, {
      label: 'Delivery',
      value: 'Delivery',
      checked: false
    }];
    this.imagePath = this.apiCall.imagePath;
    this.imageUpload = this.apiCall.ImageUpload;
  }

  ngOnInit() {
    this.view();
    this.viewCurrency();
  }

  view() {
    debugger;
    this.apiCall.DBCalling('View', "Admin", "", "", "", "").subscribe(res => {
      debugger;
      this.dbResult = res;
      this.lstAdmin = this.dbResult[0][0];
      this.status = true;
      this.Logo = this.imagePath + this.lstAdmin.Logo;
      this.restaurant = this.imagePath + this.lstAdmin.Image;
      this.logo1 = this.imagePath + this.lstAdmin.Logo;
      this.restaurant1 = this.imagePath + this.lstAdmin.Image;

      if (this.lstAdmin.Cod == 1) {
        debugger;
        this.adminOptions[0].checked = true;
      }

      if (this.lstAdmin.Online == 1) {
        debugger;
        this.adminOptions[1].checked = true;
      }

      if (this.lstAdmin.Pickup == 1) {
        debugger;
        this.adminOptions[2].checked = true;
      }

      if (this.lstAdmin.Delivery == 1) {
        debugger;
        this.adminOptions[3].checked = true;
      }
    });
  }

  viewCurrency() {
    debugger;
    this.apiCall.DBCalling('View', "Currency", "", "", "", "").subscribe(res => {
      debugger;
      this.dbResult = res;
      this.lstCurrency = this.dbResult[0];
    });
  }

  save() {
    debugger; // this.lstAdmin.Cod = (this.adminOptions.filter(x=>x.label === 'Cod' && x.checked === true)) ? 1 : 0;
    // this.lstAdmin.Online = this.adminOptions.filter(x=>x.label === 'Online' && x.checked === true) ? 1 : 0;
    // this.lstAdmin.Delivery = this.adminOptions.filter(x=>x.label === 'Delivery' && x.checked === true) ? 1 : 0;
    // this.lstAdmin.Pickup = this.adminOptions.filter(x=>x.label === 'Pickup' && x.checked === true) ? 1 : 0;

    debugger;
    this.submit = true;

    if (this.lstAdmin.FirstName != '' && this.lstAdmin.Lastname != '' && this.lstAdmin.Email != '' && this.lstAdmin.Phone != '' && this.lstAdmin.UserName != '' && this.lstAdmin.Password != '' && this.lstAdmin.Image != '' && this.lstAdmin.RestaurantName != '' && this.lstAdmin.RestaurantEmail != '' && this.lstAdmin.Address != '' && this.lstAdmin.Timings != '' && this.lstAdmin.Workingdays != '' && this.lstAdmin.Logo != '' && this.lstAdmin.Currency != '' && this.lstAdmin.Currency != null) {
      debugger;

      if (this.Image != '') {
        this.lstAdmin.Logo = this.Image;
      }

      if (this.restaurantImage != '') {
        this.lstAdmin.Image = this.restaurantImage;
      }

      var data = {
        'Id': this.lstAdmin.Id,
        'FirstName': this.lstAdmin.FirstName,
        'Lastname': this.lstAdmin.Lastname,
        'Email': this.lstAdmin.Email,
        'Phone': this.lstAdmin.Phone,
        'Fax': this.lstAdmin.Fax,
        'UserName': this.lstAdmin.UserName,
        'Password': this.lstAdmin.Password,
        'Image': this.lstAdmin.Image,
        'RestaurantName': this.lstAdmin.RestaurantName,
        'RestaurantEmail': this.lstAdmin.RestaurantEmail,
        'Address': this.lstAdmin.Address,
        'Timings': this.lstAdmin.Timings,
        'Workingdays': this.lstAdmin.Workingdays,
        'SupportNo': this.lstAdmin.SupportNo,
        'Logo': this.lstAdmin.Logo,
        'Currency': this.lstAdmin.currencyId,
        'Pickup': this.lstAdmin.Pickup,
        'Delivery': this.lstAdmin.Delivery,
        'Cod': this.lstAdmin.Cod,
        'Online': this.lstAdmin.Online,
        'DeliveryCharges': this.lstAdmin.DeliveryCharges,
        'Tax': this.lstAdmin.Tax,
        'Android': this.lstAdmin.Android,
        'Ios': this.lstAdmin.Ios,
        'Website': this.lstAdmin.Website
      };
      var jsonData = JSON.stringify(data);

      if (this.lstAdmin.Delivery == 1 && this.lstAdmin.DeliveryCharges > 0) {
        this.saveInDB(jsonData);
      }

      if (this.lstAdmin.Delivery != 1) {
        this.saveInDB(jsonData);
      }
    }
  }

  saveInDB(jsonData) {
    this.apiCall.DBCalling('Update', "Admin", jsonData, "", "", "").subscribe(res => {
      debugger;
      this.dbResult = res;

      if (this.dbResult[0][0].DBresult > 0) {
        if (this.lstAdmin.Id == 0) {
          this.msg = 'Saved';
        } else {
          this.msg = 'Updated';
        }

        this.success();
        this.view();
      }
    });
  }

  success() {
    this.modal.success({
      nzTitle: 'Success',
      nzContent: 'Profile ' + this.msg + ' Successfully!'
    });
  }

  onFileChange(event, e) {
    debugger;
    this.status = false;
    this.Imagetype = e;
    const file = event.target.files[0];
    this.status = event.target.files.length > 0 ? true : false;
    var Imageurl = event.target.files[0];

    if (this.status == true) {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        if (e == 'logo') {
          this.Logo = reader.result;
          this.logo1 = this.Logo;
        } else {
          this.restaurant = reader.result;
          this.logo1 = this.restaurant;
        }

        this.saveImage();
      };
    }
  }

  saveImage() {
    var _this = this;

    return (0,D_musaddiq_work_Angular_orderOnlineAdmin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.Imagetype == 'logo') {
        try {
          let value = _this.Image;
          _this.Image = "";
          yield _this.http.post(_this.imageUpload, {
            'image': _this.Logo
          }).subscribe(res => {
            debugger;
            _this.dbResult = res;

            if (res == null) {
              _this.Image = value;
            } else {
              debugger;
              _this.Image = _this.dbResult[0][1];
            }
          });
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          let value = _this.restaurantImage;
          _this.restaurantImage = "";
          yield _this.http.post(_this.imageUpload, {
            'image': _this.restaurant
          }).subscribe(res => {
            debugger;
            _this.dbResult = res;

            if (res == null) {
              _this.restaurantImage = value;
            } else {
              debugger;
              _this.restaurantImage = _this.dbResult[0][1];
            }
          });
        } catch (error) {
          console.log(error);
        }
      }
    })();
  }

  updateSingleChecked(e) {
    debugger;

    if (this.adminOptions.every(item => !item.checked)) {} else if (this.adminOptions.every(item => item.checked)) {
      this.allChecked = true;
    } else {}

    for (let i = 0; i < this.adminOptions.length; i++) {
      if (this.adminOptions[i].label == 'Cod' && this.adminOptions[i].checked == true) {
        this.lstAdmin.Cod = 1;
      } else if (this.adminOptions[i].label == 'Cod' && this.adminOptions[i].checked == false) {
        this.lstAdmin.Cod = 0;
      }

      if (this.adminOptions[i].label == 'Online' && this.adminOptions[i].checked == true) {
        this.lstAdmin.Online = 1;
      } else if (this.adminOptions[i].label == 'Online' && this.adminOptions[i].checked == false) {
        this.lstAdmin.Online = 0;
      }

      if (this.adminOptions[i].label == 'Delivery' && this.adminOptions[i].checked == true) {
        this.lstAdmin.Delivery = 1;
      } else if (this.adminOptions[i].label == 'Delivery' && this.adminOptions[i].checked == false) {
        this.lstAdmin.Delivery = 0;
      }

      if (this.adminOptions[i].label == 'Pickup' && this.adminOptions[i].checked == true) {
        this.lstAdmin.Pickup = 1;
      } else if (this.adminOptions[i].label == 'Pickup' && this.adminOptions[i].checked == false) {
        this.lstAdmin.Pickup = 0;
      }
    }
  }

  selectCurreny(d) {
    debugger; // let data = this.lstCurrency.filter((x:any)=> x.Id ===d );

    this.lstAdmin.Currency = d;
  }

}

ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
  return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_apicalling_service__WEBPACK_IMPORTED_MODULE_1__.ApicallingService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

ProfileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ProfileComponent,
  selectors: [["app-profile"]],
  decls: 99,
  vars: 39,
  consts: [[1, "container-fluid"], [1, "row", "mb-3"], [1, "col-md-2", "mx-auto"], ["alt", "", 1, "w-100", 2, "aspect-ratio", "1/1", "object-fit", "contain", "border-radius", "50%", "border", "2px solid #efefef", 3, "src"], [1, "row"], [1, "col-md-3", "mb-3"], ["for", ""], ["nz-input", "", "placeholder", "First name", 3, "ngModel", "ngClass", "ngModelChange"], ["nz-input", "", "placeholder", "Last name", 3, "ngModel", "ngClass", "ngModelChange"], ["nz-input", "", "placeholder", "Restaurant Name", 3, "ngModel", "ngClass", "ngModelChange"], ["nz-input", "", "placeholder", "Restaurant Email", 3, "ngModel", "ngClass", "ngModelChange"], ["nz-input", "", "placeholder", "Email", 3, "ngModel", "ngClass", "ngModelChange"], ["nz-input", "", "placeholder", "Phone", "type", "number", 3, "ngModel", "ngClass", "ngModelChange"], ["nz-input", "", "placeholder", "Username", 3, "ngModel", "ngClass", "ngModelChange"], ["nz-input", "", "placeholder", "Password", 3, "ngModel", "ngClass", "ngModelChange"], ["nz-input", "", "placeholder", "Timings", 3, "ngModel", "ngClass", "ngModelChange"], ["nz-input", "", "placeholder", "Working Days", 3, "ngModel", "ngClass", "ngModelChange"], ["nz-input", "", "placeholder", "Support No", 3, "ngModel", "ngClass", "ngModelChange"], ["nzPlaceHolder", "Please select", 1, "w-100", 3, "ngModel", "ngClass", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], [1, "col-md-3"], ["nz-input", "", "placeholder", "Enter Tax Percentage", "type", "number", 3, "ngModel", "ngModelChange"], ["class", "col-md-3", 4, "ngIf"], ["for", "", 2, "visibility", "hidden"], [3, "ngModel", "ngModelChange"], [1, "col-md-12", "mb-3"], ["nz-input", "", "placeholder", "www.yourdomain.com", "type", "text", 3, "ngModel", "ngModelChange"], ["nz-input", "", "placeholder", "Android ppp url", "type", "text", 3, "ngModel", "ngModelChange"], ["nz-input", "", "placeholder", "IOS app url", "type", "text", 3, "ngModel", "ngModelChange"], ["nz-input", "", "placeholder", "Address", 3, "ngModel", "ngClass", "ngModelChange"], [1, "col-md-6"], ["class", "col-md-2", 4, "ngIf"], [1, "col-md-10"], ["type", "file", "id", "file", 1, "form-control", 3, "ngClass", "change"], [1, "col-md-12", "mt-3"], ["nz-button", "", "nzType", "primary", 1, "float-end", "w-100", 3, "click"], [3, "nzLabel", "nzValue"], ["nz-input", "", "placeholder", "Delivery charges", "type", "number", 3, "ngModel", "ngClass", "ngModelChange"], [1, "col-md-2"], [1, "w-100", 2, "height", "86px", "object-fit", "contain", 3, "src"], [1, "w-100", 2, "height", "86px", "object-fit", "cover", 3, "src"]],
  template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "First Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_8_listener($event) {
        return ctx.lstAdmin.FirstName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5)(10, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Last Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_12_listener($event) {
        return ctx.lstAdmin.Lastname = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 5)(14, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Restaurant Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_16_listener($event) {
        return ctx.lstAdmin.RestaurantName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 5)(18, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Restaurant Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_20_listener($event) {
        return ctx.lstAdmin.RestaurantEmail = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 5)(22, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_24_listener($event) {
        return ctx.lstAdmin.Email = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 5)(26, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Phone");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_28_listener($event) {
        return ctx.lstAdmin.Phone = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 5)(30, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "UserName");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_32_listener($event) {
        return ctx.lstAdmin.UserName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 5)(34, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_36_listener($event) {
        return ctx.lstAdmin.Password = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 5)(38, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Timings");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_40_listener($event) {
        return ctx.lstAdmin.Timings = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 5)(42, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Working Days");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_44_listener($event) {
        return ctx.lstAdmin.Workingdays = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 5)(46, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Support No");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_48_listener($event) {
        return ctx.lstAdmin.SupportNo = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 5)(50, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Currency");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "nz-select", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_nz_select_ngModelChange_52_listener($event) {
        return ctx.lstAdmin.currencyId = $event;
      })("ngModelChange", function ProfileComponent_Template_nz_select_ngModelChange_52_listener($event) {
        return ctx.selectCurreny($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](53, ProfileComponent_nz_option_53_Template, 1, 3, "nz-option", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 20)(55, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Tax(%)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_57_listener($event) {
        return ctx.lstAdmin.Tax = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](58, ProfileComponent_div_58_Template, 4, 2, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 5)(60, "label", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Address");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "nz-checkbox-group", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_nz_checkbox_group_ngModelChange_63_listener($event) {
        return ctx.adminOptions = $event;
      })("ngModelChange", function ProfileComponent_Template_nz_checkbox_group_ngModelChange_63_listener($event) {
        return ctx.updateSingleChecked($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 25)(65, "div", 4)(66, "div", 20)(67, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Website Url");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_69_listener($event) {
        return ctx.lstAdmin.Website = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 20)(71, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "Android App Url");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "input", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_73_listener($event) {
        return ctx.lstAdmin.Android = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 20)(75, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "IOS App Url");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "input", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_77_listener($event) {
        return ctx.lstAdmin.Ios = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 25)(79, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "Address");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "input", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_81_listener($event) {
        return ctx.lstAdmin.Address = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 30)(83, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](84, ProfileComponent_div_84_Template, 2, 1, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 32)(86, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "Logo");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "input", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ProfileComponent_Template_input_change_88_listener($event) {
        return ctx.onFileChange($event, "logo");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 30)(90, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](91, ProfileComponent_div_91_Template, 2, 1, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 32)(93, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, "Restaurant Image");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "input", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ProfileComponent_Template_input_change_95_listener($event) {
        return ctx.onFileChange($event, "restaurantImage");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 34)(97, "button", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_97_listener() {
        return ctx.save();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "Save");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("src", "", ctx.imagePath, "", ctx.lstAdmin.Logo, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.lstAdmin.FirstName)("ngClass", ctx.lstAdmin.FirstName == "" && ctx.submit == true ? "error" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.lstAdmin.Lastname)("ngClass", ctx.lstAdmin.Lastname == "" && ctx.submit == true ? "error" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.lstAdmin.RestaurantName)("ngClass", ctx.lstAdmin.RestaurantName == "" && ctx.submit == true ? "error" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.lstAdmin.RestaurantEmail)("ngClass", ctx.lstAdmin.RestaurantEmail == "" && ctx.submit == true ? "error" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.lstAdmin.Email)("ngClass", ctx.lstAdmin.Email == "" && ctx.submit == true ? "error" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.lstAdmin.Phone)("ngClass", ctx.lstAdmin.Phone == 0 && ctx.submit == true ? "error" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.lstAdmin.UserName)("ngClass", ctx.lstAdmin.UserName == "" && ctx.submit == true ? "error" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.lstAdmin.Password)("ngClass", ctx.lstAdmin.Password == "" && ctx.submit == true ? "error" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.lstAdmin.Timings)("ngClass", ctx.lstAdmin.Timings == "" && ctx.submit == true ? "error" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.lstAdmin.Workingdays)("ngClass", ctx.lstAdmin.Workingdays == "" && ctx.submit == true ? "error" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.lstAdmin.SupportNo)("ngClass", ctx.lstAdmin.SupportNo == "" && ctx.submit == true ? "error" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.lstAdmin.currencyId)("ngClass", ctx.lstAdmin.Currency == "" || ctx.lstAdmin.Currency == null && ctx.submit == true ? "error" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.lstCurrency);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.lstAdmin.Tax);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.lstAdmin.Delivery == 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.adminOptions);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.lstAdmin.Website);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.lstAdmin.Android);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.lstAdmin.Ios);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.lstAdmin.Address)("ngClass", ctx.lstAdmin.Address == "" && ctx.submit == true ? "error" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.status == true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.submit == true && ctx.logo1 == "" ? "error" : "form-control");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.status == true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.submit == true && ctx.restaurant1 == "" ? "error" : "form-control");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__.NzInputDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__.NzWaveDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__.NzOptionComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__.NzSelectComponent, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_12__.NzCheckboxGroupComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"]
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map