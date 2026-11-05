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
exports.CreateBatchConsumerResponseBody = exports.CreateBatchConsumerResponseBodyItems = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class CreateBatchConsumerResponseBodyItems extends $dara.Model {
    static names() {
        return {
            active: 'Active',
            apiKey: 'ApiKey',
            apiKeyMd5: 'ApiKeyMd5',
            apiKeyStatus: 'ApiKeyStatus',
            apiStatus: 'ApiStatus',
            budgetLimit: 'BudgetLimit',
            budgetPolicyId: 'BudgetPolicyId',
            budgetUsed: 'BudgetUsed',
            consumerGroupId: 'ConsumerGroupId',
            consumerId: 'ConsumerId',
            consumerTag: 'ConsumerTag',
            description: 'Description',
            expireTime: 'ExpireTime',
            expired: 'Expired',
            gmtCreated: 'GmtCreated',
            gmtModified: 'GmtModified',
            gwClusterId: 'GwClusterId',
            name: 'Name',
            status: 'Status',
        };
    }
    static types() {
        return {
            active: 'boolean',
            apiKey: 'string',
            apiKeyMd5: 'string',
            apiKeyStatus: 'string',
            apiStatus: 'string',
            budgetLimit: 'number',
            budgetPolicyId: 'string',
            budgetUsed: 'number',
            consumerGroupId: 'string',
            consumerId: 'string',
            consumerTag: 'string',
            description: 'string',
            expireTime: 'string',
            expired: 'boolean',
            gmtCreated: 'string',
            gmtModified: 'string',
            gwClusterId: 'string',
            name: 'string',
            status: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateBatchConsumerResponseBodyItems = CreateBatchConsumerResponseBodyItems;
class CreateBatchConsumerResponseBody extends $dara.Model {
    static names() {
        return {
            items: 'Items',
            pageNumber: 'PageNumber',
            pageRecordCount: 'PageRecordCount',
            pageSize: 'PageSize',
            requestId: 'RequestId',
            totalPages: 'TotalPages',
            totalRecordCount: 'TotalRecordCount',
        };
    }
    static types() {
        return {
            items: { 'type': 'array', 'itemType': CreateBatchConsumerResponseBodyItems },
            pageNumber: 'number',
            pageRecordCount: 'number',
            pageSize: 'number',
            requestId: 'string',
            totalPages: 'number',
            totalRecordCount: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.items)) {
            $dara.Model.validateArray(this.items);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateBatchConsumerResponseBody = CreateBatchConsumerResponseBody;
//# sourceMappingURL=CreateBatchConsumerResponseBody.js.map