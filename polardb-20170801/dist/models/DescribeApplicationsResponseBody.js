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
exports.DescribeApplicationsResponseBody = exports.DescribeApplicationsResponseBodyItems = exports.DescribeApplicationsResponseBodyItemsApplications = exports.DescribeApplicationsResponseBodyItemsApplicationsTags = exports.DescribeApplicationsResponseBodyItemsApplicationsTagsTag = exports.DescribeApplicationsResponseBodyItemsApplicationsEndpoints = exports.DescribeApplicationsResponseBodyItemsApplicationsEndpointsEndpoint = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeApplicationsResponseBodyItemsApplicationsEndpointsEndpoint extends $dara.Model {
    static names() {
        return {
            IP: 'IP',
            netType: 'NetType',
            port: 'Port',
        };
    }
    static types() {
        return {
            IP: 'string',
            netType: 'string',
            port: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeApplicationsResponseBodyItemsApplicationsEndpointsEndpoint = DescribeApplicationsResponseBodyItemsApplicationsEndpointsEndpoint;
class DescribeApplicationsResponseBodyItemsApplicationsEndpoints extends $dara.Model {
    static names() {
        return {
            endpoint: 'endpoint',
        };
    }
    static types() {
        return {
            endpoint: { 'type': 'array', 'itemType': DescribeApplicationsResponseBodyItemsApplicationsEndpointsEndpoint },
        };
    }
    validate() {
        if (Array.isArray(this.endpoint)) {
            $dara.Model.validateArray(this.endpoint);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeApplicationsResponseBodyItemsApplicationsEndpoints = DescribeApplicationsResponseBodyItemsApplicationsEndpoints;
class DescribeApplicationsResponseBodyItemsApplicationsTagsTag extends $dara.Model {
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
exports.DescribeApplicationsResponseBodyItemsApplicationsTagsTag = DescribeApplicationsResponseBodyItemsApplicationsTagsTag;
class DescribeApplicationsResponseBodyItemsApplicationsTags extends $dara.Model {
    static names() {
        return {
            tag: 'Tag',
        };
    }
    static types() {
        return {
            tag: { 'type': 'array', 'itemType': DescribeApplicationsResponseBodyItemsApplicationsTagsTag },
        };
    }
    validate() {
        if (Array.isArray(this.tag)) {
            $dara.Model.validateArray(this.tag);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeApplicationsResponseBodyItemsApplicationsTags = DescribeApplicationsResponseBodyItemsApplicationsTags;
class DescribeApplicationsResponseBodyItemsApplications extends $dara.Model {
    static names() {
        return {
            applicationId: 'ApplicationId',
            applicationType: 'ApplicationType',
            branchId: 'BranchId',
            creationTime: 'CreationTime',
            DBClusterId: 'DBClusterId',
            description: 'Description',
            endpoints: 'Endpoints',
            engineVersion: 'EngineVersion',
            expireTime: 'ExpireTime',
            expired: 'Expired',
            payType: 'PayType',
            polarFSInstanceId: 'PolarFSInstanceId',
            regionId: 'RegionId',
            status: 'Status',
            tags: 'Tags',
            zoneId: 'ZoneId',
        };
    }
    static types() {
        return {
            applicationId: 'string',
            applicationType: 'string',
            branchId: 'string',
            creationTime: 'string',
            DBClusterId: 'string',
            description: 'string',
            endpoints: DescribeApplicationsResponseBodyItemsApplicationsEndpoints,
            engineVersion: 'string',
            expireTime: 'string',
            expired: 'string',
            payType: 'string',
            polarFSInstanceId: 'string',
            regionId: 'string',
            status: 'string',
            tags: DescribeApplicationsResponseBodyItemsApplicationsTags,
            zoneId: 'string',
        };
    }
    validate() {
        if (this.endpoints && typeof this.endpoints.validate === 'function') {
            this.endpoints.validate();
        }
        if (this.tags && typeof this.tags.validate === 'function') {
            this.tags.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeApplicationsResponseBodyItemsApplications = DescribeApplicationsResponseBodyItemsApplications;
class DescribeApplicationsResponseBodyItems extends $dara.Model {
    static names() {
        return {
            applications: 'Applications',
        };
    }
    static types() {
        return {
            applications: { 'type': 'array', 'itemType': DescribeApplicationsResponseBodyItemsApplications },
        };
    }
    validate() {
        if (Array.isArray(this.applications)) {
            $dara.Model.validateArray(this.applications);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeApplicationsResponseBodyItems = DescribeApplicationsResponseBodyItems;
class DescribeApplicationsResponseBody extends $dara.Model {
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
            items: DescribeApplicationsResponseBodyItems,
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
exports.DescribeApplicationsResponseBody = DescribeApplicationsResponseBody;
//# sourceMappingURL=DescribeApplicationsResponseBody.js.map