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
exports.DescribeGatewayApikeyListResponseBody = exports.DescribeGatewayApikeyListResponseBodyItems = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeGatewayApikeyListResponseBodyItems extends $dara.Model {
    static names() {
        return {
            apiKey: 'ApiKey',
            consumerGroupId: 'ConsumerGroupId',
            consumerId: 'ConsumerId',
            consumerTag: 'ConsumerTag',
            createTime: 'CreateTime',
            gwClusterId: 'GwClusterId',
            modifyTime: 'ModifyTime',
            name: 'Name',
        };
    }
    static types() {
        return {
            apiKey: 'string',
            consumerGroupId: 'string',
            consumerId: 'string',
            consumerTag: 'string',
            createTime: 'string',
            gwClusterId: 'string',
            modifyTime: 'string',
            name: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeGatewayApikeyListResponseBodyItems = DescribeGatewayApikeyListResponseBodyItems;
class DescribeGatewayApikeyListResponseBody extends $dara.Model {
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
            items: { 'type': 'array', 'itemType': DescribeGatewayApikeyListResponseBodyItems },
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
exports.DescribeGatewayApikeyListResponseBody = DescribeGatewayApikeyListResponseBody;
//# sourceMappingURL=DescribeGatewayApikeyListResponseBody.js.map