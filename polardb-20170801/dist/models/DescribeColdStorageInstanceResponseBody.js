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
exports.DescribeColdStorageInstanceResponseBody = exports.DescribeColdStorageInstanceResponseBodyTables = exports.DescribeColdStorageInstanceResponseBodyTablesChildObjects = exports.DescribeColdStorageInstanceResponseBodyOssClusterInfoList = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeColdStorageInstanceResponseBodyOssClusterInfoList extends $dara.Model {
    static names() {
        return {
            createdTime: 'CreatedTime',
            ossClusterId: 'OssClusterId',
            region: 'Region',
            size: 'Size',
        };
    }
    static types() {
        return {
            createdTime: 'string',
            ossClusterId: 'string',
            region: 'string',
            size: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeColdStorageInstanceResponseBodyOssClusterInfoList = DescribeColdStorageInstanceResponseBodyOssClusterInfoList;
class DescribeColdStorageInstanceResponseBodyTablesChildObjects extends $dara.Model {
    static names() {
        return {
            objectName: 'ObjectName',
            objectType: 'ObjectType',
            size: 'Size',
            status: 'Status',
        };
    }
    static types() {
        return {
            objectName: 'string',
            objectType: 'string',
            size: 'string',
            status: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeColdStorageInstanceResponseBodyTablesChildObjects = DescribeColdStorageInstanceResponseBodyTablesChildObjects;
class DescribeColdStorageInstanceResponseBodyTables extends $dara.Model {
    static names() {
        return {
            childObjects: 'ChildObjects',
            DB: 'DB',
            DBName: 'DBName',
            fieldName: 'FieldName',
            ossClusterId: 'OssClusterId',
            partion: 'Partion',
            size: 'Size',
            status: 'Status',
            table: 'Table',
            tableName: 'TableName',
        };
    }
    static types() {
        return {
            childObjects: { 'type': 'array', 'itemType': DescribeColdStorageInstanceResponseBodyTablesChildObjects },
            DB: 'string',
            DBName: 'string',
            fieldName: 'string',
            ossClusterId: 'string',
            partion: 'string',
            size: 'string',
            status: 'string',
            table: 'string',
            tableName: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.childObjects)) {
            $dara.Model.validateArray(this.childObjects);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeColdStorageInstanceResponseBodyTables = DescribeColdStorageInstanceResponseBodyTables;
class DescribeColdStorageInstanceResponseBody extends $dara.Model {
    static names() {
        return {
            maxResults: 'MaxResults',
            nextToken: 'NextToken',
            objectType: 'ObjectType',
            ossClusterEnabled: 'OssClusterEnabled',
            ossClusterInfoList: 'OssClusterInfoList',
            pageNumber: 'PageNumber',
            pageRecordCount: 'PageRecordCount',
            pageSize: 'PageSize',
            requestId: 'RequestId',
            supportOssCluster: 'SupportOssCluster',
            tables: 'Tables',
            totalRecord: 'TotalRecord',
        };
    }
    static types() {
        return {
            maxResults: 'number',
            nextToken: 'string',
            objectType: 'string',
            ossClusterEnabled: 'string',
            ossClusterInfoList: { 'type': 'array', 'itemType': DescribeColdStorageInstanceResponseBodyOssClusterInfoList },
            pageNumber: 'number',
            pageRecordCount: 'number',
            pageSize: 'number',
            requestId: 'string',
            supportOssCluster: 'string',
            tables: { 'type': 'array', 'itemType': DescribeColdStorageInstanceResponseBodyTables },
            totalRecord: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.ossClusterInfoList)) {
            $dara.Model.validateArray(this.ossClusterInfoList);
        }
        if (Array.isArray(this.tables)) {
            $dara.Model.validateArray(this.tables);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeColdStorageInstanceResponseBody = DescribeColdStorageInstanceResponseBody;
//# sourceMappingURL=DescribeColdStorageInstanceResponseBody.js.map