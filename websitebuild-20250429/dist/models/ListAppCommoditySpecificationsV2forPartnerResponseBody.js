"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAppCommoditySpecificationsV2ForPartnerResponseBody = exports.ListAppCommoditySpecificationsV2ForPartnerResponseBodyModule = exports.ListAppCommoditySpecificationsV2ForPartnerResponseBodyModuleNext = exports.ListAppCommoditySpecificationsV2ForPartnerResponseBodyModuleData = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
const ModuleNextComponentsValue_1 = require("./ModuleNextComponentsValue");
const ModuleNextPropertiesValue_1 = require("./ModuleNextPropertiesValue");
const ModuleDataComponentsValue_1 = require("./ModuleDataComponentsValue");
const ModuleDataPropertiesValue_1 = require("./ModuleDataPropertiesValue");
class ListAppCommoditySpecificationsV2ForPartnerResponseBodyModuleData extends $dara.Model {
    static names() {
        return {
            code: 'Code',
            components: 'Components',
            name: 'Name',
            properties: 'Properties',
        };
    }
    static types() {
        return {
            code: 'string',
            components: { 'type': 'map', 'keyType': 'string', 'valueType': ModuleDataComponentsValue_1.ModuleDataComponentsValue },
            name: 'string',
            properties: { 'type': 'map', 'keyType': 'string', 'valueType': ModuleDataPropertiesValue_1.ModuleDataPropertiesValue },
        };
    }
    validate() {
        if (this.components) {
            $dara.Model.validateMap(this.components);
        }
        if (this.properties) {
            $dara.Model.validateMap(this.properties);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListAppCommoditySpecificationsV2ForPartnerResponseBodyModuleData = ListAppCommoditySpecificationsV2ForPartnerResponseBodyModuleData;
class ListAppCommoditySpecificationsV2ForPartnerResponseBodyModuleNext extends $dara.Model {
    static names() {
        return {
            code: 'Code',
            components: 'Components',
            name: 'Name',
            properties: 'Properties',
        };
    }
    static types() {
        return {
            code: 'string',
            components: { 'type': 'map', 'keyType': 'string', 'valueType': ModuleNextComponentsValue_1.ModuleNextComponentsValue },
            name: 'string',
            properties: { 'type': 'map', 'keyType': 'string', 'valueType': ModuleNextPropertiesValue_1.ModuleNextPropertiesValue },
        };
    }
    validate() {
        if (this.components) {
            $dara.Model.validateMap(this.components);
        }
        if (this.properties) {
            $dara.Model.validateMap(this.properties);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListAppCommoditySpecificationsV2ForPartnerResponseBodyModuleNext = ListAppCommoditySpecificationsV2ForPartnerResponseBodyModuleNext;
class ListAppCommoditySpecificationsV2ForPartnerResponseBodyModule extends $dara.Model {
    static names() {
        return {
            currentPageNum: 'CurrentPageNum',
            data: 'Data',
            next: 'Next',
            nextPage: 'NextPage',
            pageSize: 'PageSize',
            prePage: 'PrePage',
            resultLimit: 'ResultLimit',
            totalItemNum: 'TotalItemNum',
            totalPageNum: 'TotalPageNum',
        };
    }
    static types() {
        return {
            currentPageNum: 'number',
            data: { 'type': 'array', 'itemType': ListAppCommoditySpecificationsV2ForPartnerResponseBodyModuleData },
            next: ListAppCommoditySpecificationsV2ForPartnerResponseBodyModuleNext,
            nextPage: 'boolean',
            pageSize: 'number',
            prePage: 'boolean',
            resultLimit: 'boolean',
            totalItemNum: 'number',
            totalPageNum: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.data)) {
            $dara.Model.validateArray(this.data);
        }
        if (this.next && typeof this.next.validate === 'function') {
            this.next.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListAppCommoditySpecificationsV2ForPartnerResponseBodyModule = ListAppCommoditySpecificationsV2ForPartnerResponseBodyModule;
class ListAppCommoditySpecificationsV2ForPartnerResponseBody extends $dara.Model {
    static names() {
        return {
            accessDeniedDetail: 'AccessDeniedDetail',
            allowRetry: 'AllowRetry',
            appName: 'AppName',
            dynamicCode: 'DynamicCode',
            dynamicMessage: 'DynamicMessage',
            errorArgs: 'ErrorArgs',
            maxResults: 'MaxResults',
            module: 'Module',
            nextToken: 'NextToken',
            requestId: 'RequestId',
            rootErrorCode: 'RootErrorCode',
            rootErrorMsg: 'RootErrorMsg',
            synchro: 'Synchro',
        };
    }
    static types() {
        return {
            accessDeniedDetail: 'string',
            allowRetry: 'boolean',
            appName: 'string',
            dynamicCode: 'string',
            dynamicMessage: 'string',
            errorArgs: { 'type': 'array', 'itemType': 'any' },
            maxResults: 'number',
            module: ListAppCommoditySpecificationsV2ForPartnerResponseBodyModule,
            nextToken: 'string',
            requestId: 'string',
            rootErrorCode: 'string',
            rootErrorMsg: 'string',
            synchro: 'boolean',
        };
    }
    validate() {
        if (Array.isArray(this.errorArgs)) {
            $dara.Model.validateArray(this.errorArgs);
        }
        if (this.module && typeof this.module.validate === 'function') {
            this.module.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListAppCommoditySpecificationsV2ForPartnerResponseBody = ListAppCommoditySpecificationsV2ForPartnerResponseBody;
//# sourceMappingURL=ListAppCommoditySpecificationsV2forPartnerResponseBody.js.map