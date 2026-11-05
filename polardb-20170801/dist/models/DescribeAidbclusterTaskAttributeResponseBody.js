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
exports.DescribeAIDBClusterTaskAttributeResponseBody = exports.DescribeAIDBClusterTaskAttributeResponseBodyTaskInfo = exports.DescribeAIDBClusterTaskAttributeResponseBodyDataSets = exports.DescribeAIDBClusterTaskAttributeResponseBodyCustomBucketInfo = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeAIDBClusterTaskAttributeResponseBodyCustomBucketInfo extends $dara.Model {
    static names() {
        return {
            customOssBucketName: 'CustomOssBucketName',
        };
    }
    static types() {
        return {
            customOssBucketName: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeAIDBClusterTaskAttributeResponseBodyCustomBucketInfo = DescribeAIDBClusterTaskAttributeResponseBodyCustomBucketInfo;
class DescribeAIDBClusterTaskAttributeResponseBodyDataSets extends $dara.Model {
    static names() {
        return {
            datasetName: 'DatasetName',
            path: 'Path',
            splitDatasetRatio: 'SplitDatasetRatio',
            type: 'Type',
        };
    }
    static types() {
        return {
            datasetName: 'string',
            path: 'string',
            splitDatasetRatio: 'string',
            type: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeAIDBClusterTaskAttributeResponseBodyDataSets = DescribeAIDBClusterTaskAttributeResponseBodyDataSets;
class DescribeAIDBClusterTaskAttributeResponseBodyTaskInfo extends $dara.Model {
    static names() {
        return {
            completedTime: 'CompletedTime',
            modelName: 'ModelName',
            modelPath: 'ModelPath',
            modelSource: 'ModelSource',
            runningTimes: 'RunningTimes',
            startTime: 'StartTime',
            trainMode: 'TrainMode',
            trainType: 'TrainType',
        };
    }
    static types() {
        return {
            completedTime: 'string',
            modelName: 'string',
            modelPath: 'string',
            modelSource: 'string',
            runningTimes: 'string',
            startTime: 'string',
            trainMode: 'string',
            trainType: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeAIDBClusterTaskAttributeResponseBodyTaskInfo = DescribeAIDBClusterTaskAttributeResponseBodyTaskInfo;
class DescribeAIDBClusterTaskAttributeResponseBody extends $dara.Model {
    static names() {
        return {
            accessInfo: 'AccessInfo',
            clusterNetworkType: 'ClusterNetworkType',
            createTime: 'CreateTime',
            customBucketInfo: 'CustomBucketInfo',
            DBClusterDescription: 'DBClusterDescription',
            DBClusterId: 'DBClusterId',
            DBClusterStatus: 'DBClusterStatus',
            DBClusterStatusDesc: 'DBClusterStatusDesc',
            DBType: 'DBType',
            DBVersion: 'DBVersion',
            dataSets: 'DataSets',
            extraInfo: 'ExtraInfo',
            kindCode: 'KindCode',
            lockMode: 'LockMode',
            maintainEndTime: 'MaintainEndTime',
            maintainStartTime: 'MaintainStartTime',
            modelPath: 'ModelPath',
            requestId: 'RequestId',
            taskInfo: 'TaskInfo',
            tuneArch: 'TuneArch',
            VPCId: 'VPCId',
            vSwitchId: 'VSwitchId',
        };
    }
    static types() {
        return {
            accessInfo: 'string',
            clusterNetworkType: 'string',
            createTime: 'string',
            customBucketInfo: DescribeAIDBClusterTaskAttributeResponseBodyCustomBucketInfo,
            DBClusterDescription: 'string',
            DBClusterId: 'string',
            DBClusterStatus: 'string',
            DBClusterStatusDesc: 'string',
            DBType: 'string',
            DBVersion: 'string',
            dataSets: { 'type': 'array', 'itemType': DescribeAIDBClusterTaskAttributeResponseBodyDataSets },
            extraInfo: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
            kindCode: 'number',
            lockMode: 'string',
            maintainEndTime: 'string',
            maintainStartTime: 'string',
            modelPath: 'string',
            requestId: 'string',
            taskInfo: { 'type': 'array', 'itemType': DescribeAIDBClusterTaskAttributeResponseBodyTaskInfo },
            tuneArch: 'string',
            VPCId: 'string',
            vSwitchId: 'string',
        };
    }
    validate() {
        if (this.customBucketInfo && typeof this.customBucketInfo.validate === 'function') {
            this.customBucketInfo.validate();
        }
        if (Array.isArray(this.dataSets)) {
            $dara.Model.validateArray(this.dataSets);
        }
        if (Array.isArray(this.extraInfo)) {
            $dara.Model.validateArray(this.extraInfo);
        }
        if (Array.isArray(this.taskInfo)) {
            $dara.Model.validateArray(this.taskInfo);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeAIDBClusterTaskAttributeResponseBody = DescribeAIDBClusterTaskAttributeResponseBody;
//# sourceMappingURL=DescribeAidbclusterTaskAttributeResponseBody.js.map