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
exports.DescribeResourcePackagesResponseBody = exports.DescribeResourcePackagesResponseBodyResourcePackageList = exports.DescribeResourcePackagesResponseBodyResourcePackageListTags = exports.DescribeResourcePackagesResponseBodyResourcePackageListResourcePackageQuotaList = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeResourcePackagesResponseBodyResourcePackageListResourcePackageQuotaList extends $dara.Model {
    static names() {
        return {
            allocatedCapacity: 'AllocatedCapacity',
            projectId: 'ProjectId',
            usedCapacity: 'UsedCapacity',
        };
    }
    static types() {
        return {
            allocatedCapacity: 'number',
            projectId: 'string',
            usedCapacity: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeResourcePackagesResponseBodyResourcePackageListResourcePackageQuotaList = DescribeResourcePackagesResponseBodyResourcePackageListResourcePackageQuotaList;
class DescribeResourcePackagesResponseBodyResourcePackageListTags extends $dara.Model {
    static names() {
        return {
            key: 'Key',
            value: 'Value',
        };
    }
    static types() {
        return {
            key: 'string',
            value: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeResourcePackagesResponseBodyResourcePackageListTags = DescribeResourcePackagesResponseBodyResourcePackageListTags;
class DescribeResourcePackagesResponseBodyResourcePackageList extends $dara.Model {
    static names() {
        return {
            autoQuota: 'AutoQuota',
            createTime: 'CreateTime',
            expireTime: 'ExpireTime',
            resourcePackageId: 'ResourcePackageId',
            resourcePackageQuotaList: 'ResourcePackageQuotaList',
            resourcePackageType: 'ResourcePackageType',
            status: 'Status',
            tags: 'Tags',
            totalCapacity: 'TotalCapacity',
            usedCapacity: 'UsedCapacity',
        };
    }
    static types() {
        return {
            autoQuota: 'boolean',
            createTime: 'number',
            expireTime: 'number',
            resourcePackageId: 'string',
            resourcePackageQuotaList: { 'type': 'array', 'itemType': DescribeResourcePackagesResponseBodyResourcePackageListResourcePackageQuotaList },
            resourcePackageType: 'string',
            status: 'string',
            tags: { 'type': 'array', 'itemType': DescribeResourcePackagesResponseBodyResourcePackageListTags },
            totalCapacity: 'number',
            usedCapacity: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.resourcePackageQuotaList)) {
            $dara.Model.validateArray(this.resourcePackageQuotaList);
        }
        if (Array.isArray(this.tags)) {
            $dara.Model.validateArray(this.tags);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeResourcePackagesResponseBodyResourcePackageList = DescribeResourcePackagesResponseBodyResourcePackageList;
class DescribeResourcePackagesResponseBody extends $dara.Model {
    static names() {
        return {
            requestId: 'RequestId',
            resourcePackageList: 'ResourcePackageList',
        };
    }
    static types() {
        return {
            requestId: 'string',
            resourcePackageList: { 'type': 'array', 'itemType': DescribeResourcePackagesResponseBodyResourcePackageList },
        };
    }
    validate() {
        if (Array.isArray(this.resourcePackageList)) {
            $dara.Model.validateArray(this.resourcePackageList);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeResourcePackagesResponseBody = DescribeResourcePackagesResponseBody;
//# sourceMappingURL=DescribeResourcePackagesResponseBody.js.map