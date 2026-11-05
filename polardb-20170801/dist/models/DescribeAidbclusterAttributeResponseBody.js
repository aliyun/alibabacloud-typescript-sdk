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
exports.DescribeAIDBClusterAttributeResponseBody = exports.DescribeAIDBClusterAttributeResponseBodyVolumes = exports.DescribeAIDBClusterAttributeResponseBodyVnodeKubernetesConfig = exports.DescribeAIDBClusterAttributeResponseBodyVnodeKubernetesConfigTaints = exports.DescribeAIDBClusterAttributeResponseBodyVnodeKubernetesConfigLabels = exports.DescribeAIDBClusterAttributeResponseBodyTimeSlicesInfo = exports.DescribeAIDBClusterAttributeResponseBodyTimeSlicesInfoTimeSlices = exports.DescribeAIDBClusterAttributeResponseBodyEndpointList = exports.DescribeAIDBClusterAttributeResponseBodyEndpointListNetInfoItems = exports.DescribeAIDBClusterAttributeResponseBodyDBNodes = exports.DescribeAIDBClusterAttributeResponseBodyDBNodesSupportedApis = exports.DescribeAIDBClusterAttributeResponseBodyDBNodesChildVolumes = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeAIDBClusterAttributeResponseBodyDBNodesChildVolumes extends $dara.Model {
    static names() {
        return {
            mountPath: 'MountPath',
            name: 'Name',
            sizeGB: 'SizeGB',
            storageCategory: 'StorageCategory',
            storageType: 'StorageType',
        };
    }
    static types() {
        return {
            mountPath: 'string',
            name: 'string',
            sizeGB: 'string',
            storageCategory: 'string',
            storageType: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeAIDBClusterAttributeResponseBodyDBNodesChildVolumes = DescribeAIDBClusterAttributeResponseBodyDBNodesChildVolumes;
class DescribeAIDBClusterAttributeResponseBodyDBNodesSupportedApis extends $dara.Model {
    static names() {
        return {
            apiName: 'ApiName',
            generationMode: 'GenerationMode',
            path: 'Path',
            protocol: 'Protocol',
        };
    }
    static types() {
        return {
            apiName: 'string',
            generationMode: 'string',
            path: 'string',
            protocol: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeAIDBClusterAttributeResponseBodyDBNodesSupportedApis = DescribeAIDBClusterAttributeResponseBodyDBNodesSupportedApis;
class DescribeAIDBClusterAttributeResponseBodyDBNodes extends $dara.Model {
    static names() {
        return {
            childVolumes: 'ChildVolumes',
            command: 'Command',
            cpuCores: 'CpuCores',
            creationTime: 'CreationTime',
            DBNodeClass: 'DBNodeClass',
            DBNodeDescription: 'DBNodeDescription',
            DBNodeId: 'DBNodeId',
            DBNodeStatus: 'DBNodeStatus',
            GPU: 'GPU',
            linkIP: 'LinkIP',
            logIndex: 'LogIndex',
            memorySize: 'MemorySize',
            modelName: 'ModelName',
            modelSpaceName: 'ModelSpaceName',
            publicIp: 'PublicIp',
            supportedApis: 'SupportedApis',
            VNodeId: 'VNodeId',
            VPCId: 'VPCId',
            vSwitchId: 'VSwitchId',
            zoneId: 'ZoneId',
        };
    }
    static types() {
        return {
            childVolumes: { 'type': 'array', 'itemType': DescribeAIDBClusterAttributeResponseBodyDBNodesChildVolumes },
            command: 'string',
            cpuCores: 'string',
            creationTime: 'string',
            DBNodeClass: 'string',
            DBNodeDescription: 'string',
            DBNodeId: 'string',
            DBNodeStatus: 'string',
            GPU: 'string',
            linkIP: 'string',
            logIndex: 'string',
            memorySize: 'string',
            modelName: 'string',
            modelSpaceName: 'string',
            publicIp: 'string',
            supportedApis: { 'type': 'array', 'itemType': DescribeAIDBClusterAttributeResponseBodyDBNodesSupportedApis },
            VNodeId: 'string',
            VPCId: 'string',
            vSwitchId: 'string',
            zoneId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.childVolumes)) {
            $dara.Model.validateArray(this.childVolumes);
        }
        if (Array.isArray(this.supportedApis)) {
            $dara.Model.validateArray(this.supportedApis);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeAIDBClusterAttributeResponseBodyDBNodes = DescribeAIDBClusterAttributeResponseBodyDBNodes;
class DescribeAIDBClusterAttributeResponseBodyEndpointListNetInfoItems extends $dara.Model {
    static names() {
        return {
            connectionString: 'ConnectionString',
            netType: 'NetType',
            port: 'Port',
        };
    }
    static types() {
        return {
            connectionString: 'string',
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
exports.DescribeAIDBClusterAttributeResponseBodyEndpointListNetInfoItems = DescribeAIDBClusterAttributeResponseBodyEndpointListNetInfoItems;
class DescribeAIDBClusterAttributeResponseBodyEndpointList extends $dara.Model {
    static names() {
        return {
            netInfoItems: 'NetInfoItems',
        };
    }
    static types() {
        return {
            netInfoItems: { 'type': 'array', 'itemType': DescribeAIDBClusterAttributeResponseBodyEndpointListNetInfoItems },
        };
    }
    validate() {
        if (Array.isArray(this.netInfoItems)) {
            $dara.Model.validateArray(this.netInfoItems);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeAIDBClusterAttributeResponseBodyEndpointList = DescribeAIDBClusterAttributeResponseBodyEndpointList;
class DescribeAIDBClusterAttributeResponseBodyTimeSlicesInfoTimeSlices extends $dara.Model {
    static names() {
        return {
            beginTime: 'BeginTime',
            endTime: 'EndTime',
        };
    }
    static types() {
        return {
            beginTime: 'string',
            endTime: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeAIDBClusterAttributeResponseBodyTimeSlicesInfoTimeSlices = DescribeAIDBClusterAttributeResponseBodyTimeSlicesInfoTimeSlices;
class DescribeAIDBClusterAttributeResponseBodyTimeSlicesInfo extends $dara.Model {
    static names() {
        return {
            timeSlices: 'TimeSlices',
        };
    }
    static types() {
        return {
            timeSlices: { 'type': 'array', 'itemType': DescribeAIDBClusterAttributeResponseBodyTimeSlicesInfoTimeSlices },
        };
    }
    validate() {
        if (Array.isArray(this.timeSlices)) {
            $dara.Model.validateArray(this.timeSlices);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeAIDBClusterAttributeResponseBodyTimeSlicesInfo = DescribeAIDBClusterAttributeResponseBodyTimeSlicesInfo;
class DescribeAIDBClusterAttributeResponseBodyVnodeKubernetesConfigLabels extends $dara.Model {
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
exports.DescribeAIDBClusterAttributeResponseBodyVnodeKubernetesConfigLabels = DescribeAIDBClusterAttributeResponseBodyVnodeKubernetesConfigLabels;
class DescribeAIDBClusterAttributeResponseBodyVnodeKubernetesConfigTaints extends $dara.Model {
    static names() {
        return {
            effect: 'Effect',
            key: 'Key',
            value: 'Value',
        };
    }
    static types() {
        return {
            effect: 'string',
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
exports.DescribeAIDBClusterAttributeResponseBodyVnodeKubernetesConfigTaints = DescribeAIDBClusterAttributeResponseBodyVnodeKubernetesConfigTaints;
class DescribeAIDBClusterAttributeResponseBodyVnodeKubernetesConfig extends $dara.Model {
    static names() {
        return {
            labels: 'Labels',
            taints: 'Taints',
        };
    }
    static types() {
        return {
            labels: { 'type': 'array', 'itemType': DescribeAIDBClusterAttributeResponseBodyVnodeKubernetesConfigLabels },
            taints: { 'type': 'array', 'itemType': DescribeAIDBClusterAttributeResponseBodyVnodeKubernetesConfigTaints },
        };
    }
    validate() {
        if (Array.isArray(this.labels)) {
            $dara.Model.validateArray(this.labels);
        }
        if (Array.isArray(this.taints)) {
            $dara.Model.validateArray(this.taints);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeAIDBClusterAttributeResponseBodyVnodeKubernetesConfig = DescribeAIDBClusterAttributeResponseBodyVnodeKubernetesConfig;
class DescribeAIDBClusterAttributeResponseBodyVolumes extends $dara.Model {
    static names() {
        return {
            mountPath: 'MountPath',
            name: 'Name',
            sizeGB: 'SizeGB',
            storageCategory: 'StorageCategory',
            storageType: 'StorageType',
        };
    }
    static types() {
        return {
            mountPath: 'string',
            name: 'string',
            sizeGB: 'string',
            storageCategory: 'string',
            storageType: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeAIDBClusterAttributeResponseBodyVolumes = DescribeAIDBClusterAttributeResponseBodyVolumes;
class DescribeAIDBClusterAttributeResponseBody extends $dara.Model {
    static names() {
        return {
            aiNodeType: 'AiNodeType',
            apiKey: 'ApiKey',
            command: 'Command',
            creationTime: 'CreationTime',
            currentCapacity: 'CurrentCapacity',
            customOssPath: 'CustomOssPath',
            DBClusterDescription: 'DBClusterDescription',
            DBClusterId: 'DBClusterId',
            DBClusterStatus: 'DBClusterStatus',
            DBInstanceStatusDesc: 'DBInstanceStatusDesc',
            DBNodes: 'DBNodes',
            DBVersion: 'DBVersion',
            dedicatedHostModel: 'DedicatedHostModel',
            ecsSecurityGroupId: 'EcsSecurityGroupId',
            endpointList: 'EndpointList',
            expireTime: 'ExpireTime',
            expired: 'Expired',
            gatewayId: 'GatewayId',
            inferenceEngine: 'InferenceEngine',
            internalIp: 'InternalIp',
            KVCacheInstanceId: 'KVCacheInstanceId',
            kubeClusterId: 'KubeClusterId',
            lockMode: 'LockMode',
            maxQPM: 'MaxQPM',
            maxTPM: 'MaxTPM',
            modelName: 'ModelName',
            modelSpaceName: 'ModelSpaceName',
            modelType: 'ModelType',
            payType: 'PayType',
            previousCustomOssPath: 'PreviousCustomOssPath',
            publicIp: 'PublicIp',
            regionId: 'RegionId',
            requestId: 'RequestId',
            runType: 'RunType',
            storageType: 'StorageType',
            timeSlicesInfo: 'TimeSlicesInfo',
            timeSlicesType: 'TimeSlicesType',
            VPCId: 'VPCId',
            vSwitchId: 'VSwitchId',
            vnodeKubernetesConfig: 'VnodeKubernetesConfig',
            volumes: 'Volumes',
            zoneId: 'ZoneId',
            zoneIds: 'ZoneIds',
        };
    }
    static types() {
        return {
            aiNodeType: 'string',
            apiKey: 'string',
            command: 'string',
            creationTime: 'string',
            currentCapacity: 'number',
            customOssPath: 'string',
            DBClusterDescription: 'string',
            DBClusterId: 'string',
            DBClusterStatus: 'string',
            DBInstanceStatusDesc: 'string',
            DBNodes: { 'type': 'array', 'itemType': DescribeAIDBClusterAttributeResponseBodyDBNodes },
            DBVersion: 'string',
            dedicatedHostModel: 'boolean',
            ecsSecurityGroupId: 'string',
            endpointList: { 'type': 'array', 'itemType': DescribeAIDBClusterAttributeResponseBodyEndpointList },
            expireTime: 'string',
            expired: 'boolean',
            gatewayId: 'string',
            inferenceEngine: 'string',
            internalIp: 'string',
            KVCacheInstanceId: 'string',
            kubeClusterId: 'string',
            lockMode: 'string',
            maxQPM: 'string',
            maxTPM: 'string',
            modelName: 'string',
            modelSpaceName: 'string',
            modelType: 'string',
            payType: 'string',
            previousCustomOssPath: 'string',
            publicIp: 'string',
            regionId: 'string',
            requestId: 'string',
            runType: 'string',
            storageType: 'string',
            timeSlicesInfo: DescribeAIDBClusterAttributeResponseBodyTimeSlicesInfo,
            timeSlicesType: 'string',
            VPCId: 'string',
            vSwitchId: 'string',
            vnodeKubernetesConfig: DescribeAIDBClusterAttributeResponseBodyVnodeKubernetesConfig,
            volumes: { 'type': 'array', 'itemType': DescribeAIDBClusterAttributeResponseBodyVolumes },
            zoneId: 'string',
            zoneIds: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.DBNodes)) {
            $dara.Model.validateArray(this.DBNodes);
        }
        if (Array.isArray(this.endpointList)) {
            $dara.Model.validateArray(this.endpointList);
        }
        if (this.timeSlicesInfo && typeof this.timeSlicesInfo.validate === 'function') {
            this.timeSlicesInfo.validate();
        }
        if (this.vnodeKubernetesConfig && typeof this.vnodeKubernetesConfig.validate === 'function') {
            this.vnodeKubernetesConfig.validate();
        }
        if (Array.isArray(this.volumes)) {
            $dara.Model.validateArray(this.volumes);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeAIDBClusterAttributeResponseBody = DescribeAIDBClusterAttributeResponseBody;
//# sourceMappingURL=DescribeAidbclusterAttributeResponseBody.js.map