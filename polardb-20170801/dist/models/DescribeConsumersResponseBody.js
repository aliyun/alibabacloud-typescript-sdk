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
exports.DescribeConsumersResponseBody = exports.DescribeConsumersResponseBodyItems = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeConsumersResponseBodyItems extends $dara.Model {
    static names() {
        return {
            allowedModels: 'AllowedModels',
            apiKey: 'ApiKey',
            consumerGroupId: 'ConsumerGroupId',
            consumerGroupName: 'ConsumerGroupName',
            consumerId: 'ConsumerId',
            gmtCreated: 'GmtCreated',
            gmtModified: 'GmtModified',
            lifetimeCostCount: 'LifetimeCostCount',
            lifetimeTokenCount: 'LifetimeTokenCount',
            mtdCostCount: 'MtdCostCount',
            mtdTokenCount: 'MtdTokenCount',
            name: 'Name',
            nickName: 'NickName',
        };
    }
    static types() {
        return {
            allowedModels: 'string',
            apiKey: 'string',
            consumerGroupId: 'string',
            consumerGroupName: 'string',
            consumerId: 'string',
            gmtCreated: 'string',
            gmtModified: 'string',
            lifetimeCostCount: 'number',
            lifetimeTokenCount: 'number',
            mtdCostCount: 'number',
            mtdTokenCount: 'number',
            name: 'string',
            nickName: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeConsumersResponseBodyItems = DescribeConsumersResponseBodyItems;
class DescribeConsumersResponseBody extends $dara.Model {
    static names() {
        return {
            items: 'Items',
            pageNumber: 'PageNumber',
            pageRecordCount: 'PageRecordCount',
            pageSize: 'PageSize',
            requestId: 'RequestId',
            totalRecordCount: 'TotalRecordCount',
        };
    }
    static types() {
        return {
            items: { 'type': 'array', 'itemType': DescribeConsumersResponseBodyItems },
            pageNumber: 'number',
            pageRecordCount: 'number',
            pageSize: 'number',
            requestId: 'string',
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
exports.DescribeConsumersResponseBody = DescribeConsumersResponseBody;
//# sourceMappingURL=DescribeConsumersResponseBody.js.map