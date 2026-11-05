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
exports.CreatePolarFsRequest = exports.CreatePolarFsRequestCustomBucketPathList = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class CreatePolarFsRequestCustomBucketPathList extends $dara.Model {
    static names() {
        return {
            bucket: 'Bucket',
            path: 'Path',
        };
    }
    static types() {
        return {
            bucket: 'string',
            path: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreatePolarFsRequestCustomBucketPathList = CreatePolarFsRequestCustomBucketPathList;
class CreatePolarFsRequest extends $dara.Model {
    static names() {
        return {
            accelerateStorageSize: 'AccelerateStorageSize',
            accelerateSwitch: 'AccelerateSwitch',
            accelerateType: 'AccelerateType',
            authorizedUserIds: 'AuthorizedUserIds',
            autoRenew: 'AutoRenew',
            autoUseCoupon: 'AutoUseCoupon',
            creationCategory: 'CreationCategory',
            customBucketCount: 'CustomBucketCount',
            customBucketPath: 'CustomBucketPath',
            customBucketPathList: 'CustomBucketPathList',
            customOssAk: 'CustomOssAk',
            customOssSk: 'CustomOssSk',
            DBClusterId: 'DBClusterId',
            DBType: 'DBType',
            payType: 'PayType',
            period: 'Period',
            promotionCode: 'PromotionCode',
            regionId: 'RegionId',
            resourceGroupId: 'ResourceGroupId',
            storageSpace: 'StorageSpace',
            storageType: 'StorageType',
            usedTime: 'UsedTime',
            VPCId: 'VPCId',
            vSwitchId: 'VSwitchId',
            zoneId: 'ZoneId',
        };
    }
    static types() {
        return {
            accelerateStorageSize: 'number',
            accelerateSwitch: 'string',
            accelerateType: 'string',
            authorizedUserIds: 'string',
            autoRenew: 'boolean',
            autoUseCoupon: 'boolean',
            creationCategory: 'string',
            customBucketCount: 'number',
            customBucketPath: 'string',
            customBucketPathList: { 'type': 'array', 'itemType': CreatePolarFsRequestCustomBucketPathList },
            customOssAk: 'string',
            customOssSk: 'string',
            DBClusterId: 'string',
            DBType: 'string',
            payType: 'string',
            period: 'string',
            promotionCode: 'string',
            regionId: 'string',
            resourceGroupId: 'string',
            storageSpace: 'number',
            storageType: 'string',
            usedTime: 'string',
            VPCId: 'string',
            vSwitchId: 'string',
            zoneId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.customBucketPathList)) {
            $dara.Model.validateArray(this.customBucketPathList);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreatePolarFsRequest = CreatePolarFsRequest;
//# sourceMappingURL=CreatePolarFsRequest.js.map