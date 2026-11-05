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
exports.DescribeAIDBClusterDatasetsResponseBody = exports.DescribeAIDBClusterDatasetsResponseBodyDatasets = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeAIDBClusterDatasetsResponseBodyDatasets extends $dara.Model {
    static names() {
        return {
            bucketName: 'BucketName',
            capacity: 'Capacity',
            creationTime: 'CreationTime',
            datasetId: 'DatasetId',
            datasetType: 'DatasetType',
            fileName: 'FileName',
            lastModified: 'LastModified',
            path: 'Path',
            storageType: 'StorageType',
            trainMode: 'TrainMode',
        };
    }
    static types() {
        return {
            bucketName: 'string',
            capacity: 'string',
            creationTime: 'string',
            datasetId: 'string',
            datasetType: 'string',
            fileName: 'string',
            lastModified: 'string',
            path: 'string',
            storageType: 'string',
            trainMode: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeAIDBClusterDatasetsResponseBodyDatasets = DescribeAIDBClusterDatasetsResponseBodyDatasets;
class DescribeAIDBClusterDatasetsResponseBody extends $dara.Model {
    static names() {
        return {
            continuationToken: 'ContinuationToken',
            dataServiceId: 'DataServiceId',
            datasetId: 'DatasetId',
            datasetMode: 'DatasetMode',
            datasetType: 'DatasetType',
            datasets: 'Datasets',
            fileCount: 'FileCount',
            isTruncated: 'IsTruncated',
            nextContinuationToken: 'NextContinuationToken',
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
            relativeDBClusterId: 'RelativeDBClusterId',
            requestId: 'RequestId',
            totalCount: 'TotalCount',
            totalRecords: 'TotalRecords',
        };
    }
    static types() {
        return {
            continuationToken: 'string',
            dataServiceId: 'string',
            datasetId: 'string',
            datasetMode: 'string',
            datasetType: 'string',
            datasets: { 'type': 'array', 'itemType': DescribeAIDBClusterDatasetsResponseBodyDatasets },
            fileCount: 'string',
            isTruncated: 'boolean',
            nextContinuationToken: 'string',
            pageNumber: 'string',
            pageSize: 'string',
            relativeDBClusterId: 'string',
            requestId: 'string',
            totalCount: 'string',
            totalRecords: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.datasets)) {
            $dara.Model.validateArray(this.datasets);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeAIDBClusterDatasetsResponseBody = DescribeAIDBClusterDatasetsResponseBody;
//# sourceMappingURL=DescribeAidbclusterDatasetsResponseBody.js.map