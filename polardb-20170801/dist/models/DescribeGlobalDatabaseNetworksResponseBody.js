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
exports.DescribeGlobalDatabaseNetworksResponseBody = exports.DescribeGlobalDatabaseNetworksResponseBodyItems = exports.DescribeGlobalDatabaseNetworksResponseBodyItemsLabels = exports.DescribeGlobalDatabaseNetworksResponseBodyItemsDBClusters = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeGlobalDatabaseNetworksResponseBodyItemsDBClusters extends $dara.Model {
    static names() {
        return {
            DBClusterId: 'DBClusterId',
            regionId: 'RegionId',
            role: 'Role',
        };
    }
    static types() {
        return {
            DBClusterId: 'string',
            regionId: 'string',
            role: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeGlobalDatabaseNetworksResponseBodyItemsDBClusters = DescribeGlobalDatabaseNetworksResponseBodyItemsDBClusters;
class DescribeGlobalDatabaseNetworksResponseBodyItemsLabels extends $dara.Model {
    static names() {
        return {
            GDNVersion: 'GDNVersion',
        };
    }
    static types() {
        return {
            GDNVersion: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeGlobalDatabaseNetworksResponseBodyItemsLabels = DescribeGlobalDatabaseNetworksResponseBodyItemsLabels;
class DescribeGlobalDatabaseNetworksResponseBodyItems extends $dara.Model {
    static names() {
        return {
            createTime: 'CreateTime',
            DBClusters: 'DBClusters',
            DBType: 'DBType',
            DBVersion: 'DBVersion',
            GDNDescription: 'GDNDescription',
            GDNId: 'GDNId',
            GDNStatus: 'GDNStatus',
            labels: 'Labels',
        };
    }
    static types() {
        return {
            createTime: 'string',
            DBClusters: { 'type': 'array', 'itemType': DescribeGlobalDatabaseNetworksResponseBodyItemsDBClusters },
            DBType: 'string',
            DBVersion: 'string',
            GDNDescription: 'string',
            GDNId: 'string',
            GDNStatus: 'string',
            labels: DescribeGlobalDatabaseNetworksResponseBodyItemsLabels,
        };
    }
    validate() {
        if (Array.isArray(this.DBClusters)) {
            $dara.Model.validateArray(this.DBClusters);
        }
        if (this.labels && typeof this.labels.validate === 'function') {
            this.labels.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeGlobalDatabaseNetworksResponseBodyItems = DescribeGlobalDatabaseNetworksResponseBodyItems;
class DescribeGlobalDatabaseNetworksResponseBody extends $dara.Model {
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
            items: { 'type': 'array', 'itemType': DescribeGlobalDatabaseNetworksResponseBodyItems },
            pageNumber: 'number',
            pageRecordCount: 'number',
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
exports.DescribeGlobalDatabaseNetworksResponseBody = DescribeGlobalDatabaseNetworksResponseBody;
//# sourceMappingURL=DescribeGlobalDatabaseNetworksResponseBody.js.map