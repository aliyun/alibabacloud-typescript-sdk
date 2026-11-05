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
exports.DescribeKVCacheInstancesResponseBody = exports.DescribeKVCacheInstancesResponseBodyItems = exports.DescribeKVCacheInstancesResponseBodyItemsKVCacheItem = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeKVCacheInstancesResponseBodyItemsKVCacheItem extends $dara.Model {
    static names() {
        return {
            AIDBClusterId: 'AIDBClusterId',
            creationTime: 'CreationTime',
            DBClusterId: 'DBClusterId',
            expireTime: 'ExpireTime',
            expired: 'Expired',
            KVCacheInstanceId: 'KVCacheInstanceId',
            KVCacheInstanceStatus: 'KVCacheInstanceStatus',
            KVCacheSpace: 'KVCacheSpace',
            payType: 'PayType',
            regionId: 'RegionId',
            VPCId: 'VPCId',
            vSwitchId: 'VSwitchId',
            zoneId: 'ZoneId',
        };
    }
    static types() {
        return {
            AIDBClusterId: 'string',
            creationTime: 'string',
            DBClusterId: 'string',
            expireTime: 'string',
            expired: 'string',
            KVCacheInstanceId: 'string',
            KVCacheInstanceStatus: 'string',
            KVCacheSpace: 'number',
            payType: 'string',
            regionId: 'string',
            VPCId: 'string',
            vSwitchId: 'string',
            zoneId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeKVCacheInstancesResponseBodyItemsKVCacheItem = DescribeKVCacheInstancesResponseBodyItemsKVCacheItem;
class DescribeKVCacheInstancesResponseBodyItems extends $dara.Model {
    static names() {
        return {
            KVCacheItem: 'KVCacheItem',
        };
    }
    static types() {
        return {
            KVCacheItem: { 'type': 'array', 'itemType': DescribeKVCacheInstancesResponseBodyItemsKVCacheItem },
        };
    }
    validate() {
        if (Array.isArray(this.KVCacheItem)) {
            $dara.Model.validateArray(this.KVCacheItem);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeKVCacheInstancesResponseBodyItems = DescribeKVCacheInstancesResponseBodyItems;
class DescribeKVCacheInstancesResponseBody extends $dara.Model {
    static names() {
        return {
            items: 'Items',
            pageNumber: 'PageNumber',
            pageRecordCount: 'PageRecordCount',
            requestId: 'RequestId',
            totalRecordCount: 'TotalRecordCount',
        };
    }
    static types() {
        return {
            items: DescribeKVCacheInstancesResponseBodyItems,
            pageNumber: 'number',
            pageRecordCount: 'number',
            requestId: 'string',
            totalRecordCount: 'number',
        };
    }
    validate() {
        if (this.items && typeof this.items.validate === 'function') {
            this.items.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeKVCacheInstancesResponseBody = DescribeKVCacheInstancesResponseBody;
//# sourceMappingURL=DescribeKvcacheInstancesResponseBody.js.map