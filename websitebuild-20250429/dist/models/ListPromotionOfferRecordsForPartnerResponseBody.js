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
exports.ListPromotionOfferRecordsForPartnerResponseBody = exports.ListPromotionOfferRecordsForPartnerResponseBodyModule = exports.ListPromotionOfferRecordsForPartnerResponseBodyModuleRecords = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ListPromotionOfferRecordsForPartnerResponseBodyModuleRecords extends $dara.Model {
    static names() {
        return {
            activityCode: 'ActivityCode',
            activityName: 'ActivityName',
            employeeCode: 'EmployeeCode',
            failReason: 'FailReason',
            issuanceTime: 'IssuanceTime',
            offerSnapshot: 'OfferSnapshot',
            recordId: 'RecordId',
            remark: 'Remark',
            status: 'Status',
            userId: 'UserId',
        };
    }
    static types() {
        return {
            activityCode: 'string',
            activityName: 'string',
            employeeCode: 'string',
            failReason: 'string',
            issuanceTime: 'string',
            offerSnapshot: 'string',
            recordId: 'string',
            remark: 'string',
            status: 'string',
            userId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListPromotionOfferRecordsForPartnerResponseBodyModuleRecords = ListPromotionOfferRecordsForPartnerResponseBodyModuleRecords;
class ListPromotionOfferRecordsForPartnerResponseBodyModule extends $dara.Model {
    static names() {
        return {
            pageNum: 'PageNum',
            pageSize: 'PageSize',
            records: 'Records',
            totalCount: 'TotalCount',
        };
    }
    static types() {
        return {
            pageNum: 'number',
            pageSize: 'number',
            records: { 'type': 'array', 'itemType': ListPromotionOfferRecordsForPartnerResponseBodyModuleRecords },
            totalCount: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.records)) {
            $dara.Model.validateArray(this.records);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListPromotionOfferRecordsForPartnerResponseBodyModule = ListPromotionOfferRecordsForPartnerResponseBodyModule;
class ListPromotionOfferRecordsForPartnerResponseBody extends $dara.Model {
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
            module: ListPromotionOfferRecordsForPartnerResponseBodyModule,
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
exports.ListPromotionOfferRecordsForPartnerResponseBody = ListPromotionOfferRecordsForPartnerResponseBody;
//# sourceMappingURL=ListPromotionOfferRecordsForPartnerResponseBody.js.map