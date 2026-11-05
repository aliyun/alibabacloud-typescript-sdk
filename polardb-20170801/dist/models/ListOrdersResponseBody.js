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
exports.ListOrdersResponseBody = exports.ListOrdersResponseBodyOrderList = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ListOrdersResponseBodyOrderList extends $dara.Model {
    static names() {
        return {
            aliUid: 'AliUid',
            chargeType: 'ChargeType',
            commodityCode: 'CommodityCode',
            createdTime: 'CreatedTime',
            instanceId: 'InstanceId',
            orderId: 'OrderId',
            orderStatus: 'OrderStatus',
            orderType: 'OrderType',
            produceCode: 'ProduceCode',
            region: 'Region',
        };
    }
    static types() {
        return {
            aliUid: 'string',
            chargeType: 'string',
            commodityCode: 'string',
            createdTime: 'string',
            instanceId: 'string',
            orderId: 'string',
            orderStatus: 'string',
            orderType: 'string',
            produceCode: 'string',
            region: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListOrdersResponseBodyOrderList = ListOrdersResponseBodyOrderList;
class ListOrdersResponseBody extends $dara.Model {
    static names() {
        return {
            maxResults: 'MaxResults',
            nextToken: 'NextToken',
            orderList: 'OrderList',
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
            requestId: 'RequestId',
            totalCount: 'TotalCount',
        };
    }
    static types() {
        return {
            maxResults: 'number',
            nextToken: 'string',
            orderList: { 'type': 'array', 'itemType': ListOrdersResponseBodyOrderList },
            pageNumber: 'number',
            pageSize: 'number',
            requestId: 'string',
            totalCount: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.orderList)) {
            $dara.Model.validateArray(this.orderList);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListOrdersResponseBody = ListOrdersResponseBody;
//# sourceMappingURL=ListOrdersResponseBody.js.map