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
exports.ListAppInstancesResponseBody = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
const AppInstanceAggregate_1 = require("./AppInstanceAggregate");
class ListAppInstancesResponseBody extends $dara.Model {
    static names() {
        return {
            accessDeniedDetail: 'AccessDeniedDetail',
            allowRetry: 'AllowRetry',
            appName: 'AppName',
            currentPageNum: 'CurrentPageNum',
            data: 'Data',
            dynamicCode: 'DynamicCode',
            dynamicMessage: 'DynamicMessage',
            errorArgs: 'ErrorArgs',
            maxResults: 'MaxResults',
            nextPage: 'NextPage',
            nextToken: 'NextToken',
            pageSize: 'PageSize',
            prePage: 'PrePage',
            requestId: 'RequestId',
            resultLimit: 'ResultLimit',
            rootErrorCode: 'RootErrorCode',
            rootErrorMsg: 'RootErrorMsg',
            startPosition: 'StartPosition',
            synchro: 'Synchro',
            totalPageNum: 'TotalPageNum',
        };
    }
    static types() {
        return {
            accessDeniedDetail: 'string',
            allowRetry: 'boolean',
            appName: 'string',
            currentPageNum: 'number',
            data: { 'type': 'array', 'itemType': AppInstanceAggregate_1.AppInstanceAggregate },
            dynamicCode: 'string',
            dynamicMessage: 'string',
            errorArgs: { 'type': 'array', 'itemType': 'any' },
            maxResults: 'number',
            nextPage: 'boolean',
            nextToken: 'string',
            pageSize: 'number',
            prePage: 'boolean',
            requestId: 'string',
            resultLimit: 'boolean',
            rootErrorCode: 'string',
            rootErrorMsg: 'string',
            startPosition: 'string',
            synchro: 'boolean',
            totalPageNum: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.data)) {
            $dara.Model.validateArray(this.data);
        }
        if (Array.isArray(this.errorArgs)) {
            $dara.Model.validateArray(this.errorArgs);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListAppInstancesResponseBody = ListAppInstancesResponseBody;
//# sourceMappingURL=ListAppInstancesResponseBody.js.map