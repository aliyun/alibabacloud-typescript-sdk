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
exports.DescribeDBClusterPriceRequest = exports.DescribeDBClusterPriceRequestDBNodes = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDBClusterPriceRequestDBNodes extends $dara.Model {
    static names() {
        return {
            DBNodeClass: 'DBNodeClass',
            DBNodeId: 'DBNodeId',
        };
    }
    static types() {
        return {
            DBNodeClass: 'string',
            DBNodeId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBClusterPriceRequestDBNodes = DescribeDBClusterPriceRequestDBNodes;
class DescribeDBClusterPriceRequest extends $dara.Model {
    static names() {
        return {
            creationCategory: 'CreationCategory',
            DBClusterId: 'DBClusterId',
            DBNodeClass: 'DBNodeClass',
            DBNodeIds: 'DBNodeIds',
            DBNodeNum: 'DBNodeNum',
            DBNodes: 'DBNodes',
            DBType: 'DBType',
            DBVersion: 'DBVersion',
            hotStandbyCluster: 'HotStandbyCluster',
            modifyType: 'ModifyType',
            orderType: 'OrderType',
            payType: 'PayType',
            period: 'Period',
            provisionedIops: 'ProvisionedIops',
            regionId: 'RegionId',
            serverlessType: 'ServerlessType',
            storageChargeType: 'StorageChargeType',
            storageSpace: 'StorageSpace',
            storageType: 'StorageType',
            usedTime: 'UsedTime',
            zoneId: 'ZoneId',
        };
    }
    static types() {
        return {
            creationCategory: 'string',
            DBClusterId: 'string',
            DBNodeClass: 'string',
            DBNodeIds: { 'type': 'array', 'itemType': 'string' },
            DBNodeNum: 'number',
            DBNodes: { 'type': 'array', 'itemType': DescribeDBClusterPriceRequestDBNodes },
            DBType: 'string',
            DBVersion: 'string',
            hotStandbyCluster: 'string',
            modifyType: 'string',
            orderType: 'string',
            payType: 'string',
            period: 'string',
            provisionedIops: 'string',
            regionId: 'string',
            serverlessType: 'string',
            storageChargeType: 'string',
            storageSpace: 'string',
            storageType: 'string',
            usedTime: 'string',
            zoneId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.DBNodeIds)) {
            $dara.Model.validateArray(this.DBNodeIds);
        }
        if (Array.isArray(this.DBNodes)) {
            $dara.Model.validateArray(this.DBNodes);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBClusterPriceRequest = DescribeDBClusterPriceRequest;
//# sourceMappingURL=DescribeDbclusterPriceRequest.js.map