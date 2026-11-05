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
exports.DescribeMarketingActivityResponseBody = exports.DescribeMarketingActivityResponseBodyItems = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeMarketingActivityResponseBodyItems extends $dara.Model {
    static names() {
        return {
            category: 'Category',
            chargeType: 'ChargeType',
            classCode: 'ClassCode',
            classGroup: 'ClassGroup',
            cpu: 'Cpu',
            diskSize: 'DiskSize',
            engine: 'Engine',
            engineVersion: 'EngineVersion',
            instanceId: 'InstanceId',
            instanceName: 'InstanceName',
            maxConnections: 'MaxConnections',
            maxIombps: 'MaxIombps',
            maxIops: 'MaxIops',
            memory: 'Memory',
            storageType: 'StorageType',
            upgradeCategory: 'UpgradeCategory',
            upgradeClassCode: 'UpgradeClassCode',
            upgradeClassGroup: 'UpgradeClassGroup',
            upgradeCpu: 'UpgradeCpu',
            upgradeDescContent: 'UpgradeDescContent',
            upgradeDiskSize: 'UpgradeDiskSize',
            upgradeMaxConnections: 'UpgradeMaxConnections',
            upgradeMaxIombps: 'UpgradeMaxIombps',
            upgradeMaxIops: 'UpgradeMaxIops',
            upgradeMemory: 'UpgradeMemory',
            upgradeReferencePrice: 'UpgradeReferencePrice',
            upgradeStorageType: 'UpgradeStorageType',
        };
    }
    static types() {
        return {
            category: 'string',
            chargeType: 'string',
            classCode: 'string',
            classGroup: 'string',
            cpu: 'string',
            diskSize: 'number',
            engine: 'string',
            engineVersion: 'string',
            instanceId: 'string',
            instanceName: 'string',
            maxConnections: 'number',
            maxIombps: 'number',
            maxIops: 'number',
            memory: 'number',
            storageType: 'string',
            upgradeCategory: 'string',
            upgradeClassCode: 'string',
            upgradeClassGroup: 'string',
            upgradeCpu: 'string',
            upgradeDescContent: 'string',
            upgradeDiskSize: 'number',
            upgradeMaxConnections: 'number',
            upgradeMaxIombps: 'number',
            upgradeMaxIops: 'number',
            upgradeMemory: 'number',
            upgradeReferencePrice: 'string',
            upgradeStorageType: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeMarketingActivityResponseBodyItems = DescribeMarketingActivityResponseBodyItems;
class DescribeMarketingActivityResponseBody extends $dara.Model {
    static names() {
        return {
            aliUid: 'AliUid',
            bid: 'Bid',
            items: 'Items',
            regionId: 'RegionId',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            aliUid: 'number',
            bid: 'string',
            items: { 'type': 'array', 'itemType': DescribeMarketingActivityResponseBodyItems },
            regionId: 'string',
            requestId: 'string',
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
exports.DescribeMarketingActivityResponseBody = DescribeMarketingActivityResponseBody;
//# sourceMappingURL=DescribeMarketingActivityResponseBody.js.map