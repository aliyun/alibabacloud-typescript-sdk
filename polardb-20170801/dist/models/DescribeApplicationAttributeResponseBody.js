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
exports.DescribeApplicationAttributeResponseBody = exports.DescribeApplicationAttributeResponseBodyStorages = exports.DescribeApplicationAttributeResponseBodySecurityIPArrays = exports.DescribeApplicationAttributeResponseBodySecurityGroups = exports.DescribeApplicationAttributeResponseBodyPolarClawSaaSApplicationAttribute = exports.DescribeApplicationAttributeResponseBodyPolarClawApplicationAttribute = exports.DescribeApplicationAttributeResponseBodyPolarClawApplicationAttributeLangfuseBinding = exports.DescribeApplicationAttributeResponseBodyMemApplicationAttribute = exports.DescribeApplicationAttributeResponseBodyMemApplicationAttributeSessionStore = exports.DescribeApplicationAttributeResponseBodyEndpoints = exports.DescribeApplicationAttributeResponseBodyDnatMappings = exports.DescribeApplicationAttributeResponseBodyComponents = exports.DescribeApplicationAttributeResponseBodyComponentsTopology = exports.DescribeApplicationAttributeResponseBodyComponentsSecurityIPArrays = exports.DescribeApplicationAttributeResponseBodyComponentsSecurityGroups = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeApplicationAttributeResponseBodyComponentsSecurityGroups extends $dara.Model {
    static names() {
        return {
            netType: 'NetType',
            regionId: 'RegionId',
            securityGroupId: 'SecurityGroupId',
            securityGroupName: 'SecurityGroupName',
        };
    }
    static types() {
        return {
            netType: 'string',
            regionId: 'string',
            securityGroupId: 'string',
            securityGroupName: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeApplicationAttributeResponseBodyComponentsSecurityGroups = DescribeApplicationAttributeResponseBodyComponentsSecurityGroups;
class DescribeApplicationAttributeResponseBodyComponentsSecurityIPArrays extends $dara.Model {
    static names() {
        return {
            securityIPArrayName: 'SecurityIPArrayName',
            securityIPArrayTag: 'SecurityIPArrayTag',
            securityIPList: 'SecurityIPList',
            securityIPNetType: 'SecurityIPNetType',
            securityIPType: 'SecurityIPType',
        };
    }
    static types() {
        return {
            securityIPArrayName: 'string',
            securityIPArrayTag: 'string',
            securityIPList: 'string',
            securityIPNetType: 'string',
            securityIPType: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeApplicationAttributeResponseBodyComponentsSecurityIPArrays = DescribeApplicationAttributeResponseBodyComponentsSecurityIPArrays;
class DescribeApplicationAttributeResponseBodyComponentsTopology extends $dara.Model {
    static names() {
        return {
            children: 'Children',
            layer: 'Layer',
            parents: 'Parents',
        };
    }
    static types() {
        return {
            children: { 'type': 'array', 'itemType': 'string' },
            layer: 'string',
            parents: { 'type': 'array', 'itemType': 'string' },
        };
    }
    validate() {
        if (Array.isArray(this.children)) {
            $dara.Model.validateArray(this.children);
        }
        if (Array.isArray(this.parents)) {
            $dara.Model.validateArray(this.parents);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeApplicationAttributeResponseBodyComponentsTopology = DescribeApplicationAttributeResponseBodyComponentsTopology;
class DescribeApplicationAttributeResponseBodyComponents extends $dara.Model {
    static names() {
        return {
            componentClass: 'ComponentClass',
            componentClassDescription: 'ComponentClassDescription',
            componentId: 'ComponentId',
            componentMaxReplica: 'ComponentMaxReplica',
            componentReplica: 'ComponentReplica',
            componentReplicaGroupName: 'ComponentReplicaGroupName',
            componentType: 'ComponentType',
            securityGroups: 'SecurityGroups',
            securityIPArrays: 'SecurityIPArrays',
            status: 'Status',
            topology: 'Topology',
        };
    }
    static types() {
        return {
            componentClass: 'string',
            componentClassDescription: 'string',
            componentId: 'string',
            componentMaxReplica: 'number',
            componentReplica: 'number',
            componentReplicaGroupName: 'string',
            componentType: 'string',
            securityGroups: { 'type': 'array', 'itemType': DescribeApplicationAttributeResponseBodyComponentsSecurityGroups },
            securityIPArrays: { 'type': 'array', 'itemType': DescribeApplicationAttributeResponseBodyComponentsSecurityIPArrays },
            status: 'string',
            topology: DescribeApplicationAttributeResponseBodyComponentsTopology,
        };
    }
    validate() {
        if (Array.isArray(this.securityGroups)) {
            $dara.Model.validateArray(this.securityGroups);
        }
        if (Array.isArray(this.securityIPArrays)) {
            $dara.Model.validateArray(this.securityIPArrays);
        }
        if (this.topology && typeof this.topology.validate === 'function') {
            this.topology.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeApplicationAttributeResponseBodyComponents = DescribeApplicationAttributeResponseBodyComponents;
class DescribeApplicationAttributeResponseBodyDnatMappings extends $dara.Model {
    static names() {
        return {
            accessAddress: 'AccessAddress',
            backendPort: 'BackendPort',
            entryId: 'EntryId',
            frontPort: 'FrontPort',
            portName: 'PortName',
            status: 'Status',
        };
    }
    static types() {
        return {
            accessAddress: 'string',
            backendPort: 'number',
            entryId: 'string',
            frontPort: 'number',
            portName: 'string',
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
exports.DescribeApplicationAttributeResponseBodyDnatMappings = DescribeApplicationAttributeResponseBodyDnatMappings;
class DescribeApplicationAttributeResponseBodyEndpoints extends $dara.Model {
    static names() {
        return {
            description: 'Description',
            domain: 'Domain',
            endpointId: 'EndpointId',
            IP: 'IP',
            netType: 'NetType',
            port: 'Port',
            portDescription: 'PortDescription',
        };
    }
    static types() {
        return {
            description: 'string',
            domain: 'string',
            endpointId: 'string',
            IP: 'string',
            netType: 'string',
            port: 'string',
            portDescription: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeApplicationAttributeResponseBodyEndpoints = DescribeApplicationAttributeResponseBodyEndpoints;
class DescribeApplicationAttributeResponseBodyMemApplicationAttributeSessionStore extends $dara.Model {
    static names() {
        return {
            accountMode: 'AccountMode',
            DBClusterId: 'DBClusterId',
            DBName: 'DBName',
            status: 'Status',
        };
    }
    static types() {
        return {
            accountMode: 'string',
            DBClusterId: 'string',
            DBName: 'string',
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
exports.DescribeApplicationAttributeResponseBodyMemApplicationAttributeSessionStore = DescribeApplicationAttributeResponseBodyMemApplicationAttributeSessionStore;
class DescribeApplicationAttributeResponseBodyMemApplicationAttribute extends $dara.Model {
    static names() {
        return {
            dbName: 'DbName',
            embedderModelName: 'EmbedderModelName',
            graphLlmModelName: 'GraphLlmModelName',
            llmModelName: 'LlmModelName',
            memoryType: 'MemoryType',
            multimodalEnabled: 'MultimodalEnabled',
            projectName: 'ProjectName',
            rerankerModelName: 'RerankerModelName',
            sessionStore: 'SessionStore',
            userName: 'UserName',
            visualEmbedderDimensions: 'VisualEmbedderDimensions',
            visualEmbedderModelName: 'VisualEmbedderModelName',
            visualLlmModalities: 'VisualLlmModalities',
            visualLlmModelName: 'VisualLlmModelName',
        };
    }
    static types() {
        return {
            dbName: 'string',
            embedderModelName: 'string',
            graphLlmModelName: 'string',
            llmModelName: 'string',
            memoryType: 'string',
            multimodalEnabled: 'boolean',
            projectName: 'string',
            rerankerModelName: 'string',
            sessionStore: DescribeApplicationAttributeResponseBodyMemApplicationAttributeSessionStore,
            userName: 'string',
            visualEmbedderDimensions: 'number',
            visualEmbedderModelName: 'string',
            visualLlmModalities: { 'type': 'array', 'itemType': 'string' },
            visualLlmModelName: 'string',
        };
    }
    validate() {
        if (this.sessionStore && typeof this.sessionStore.validate === 'function') {
            this.sessionStore.validate();
        }
        if (Array.isArray(this.visualLlmModalities)) {
            $dara.Model.validateArray(this.visualLlmModalities);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeApplicationAttributeResponseBodyMemApplicationAttribute = DescribeApplicationAttributeResponseBodyMemApplicationAttribute;
class DescribeApplicationAttributeResponseBodyPolarClawApplicationAttributeLangfuseBinding extends $dara.Model {
    static names() {
        return {
            activatedAt: 'ActivatedAt',
            apiKeyId: 'ApiKeyId',
            bindingTaskId: 'BindingTaskId',
            langfuseApplicationId: 'LangfuseApplicationId',
            phase: 'Phase',
            projectId: 'ProjectId',
        };
    }
    static types() {
        return {
            activatedAt: 'number',
            apiKeyId: 'string',
            bindingTaskId: 'number',
            langfuseApplicationId: 'string',
            phase: 'string',
            projectId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeApplicationAttributeResponseBodyPolarClawApplicationAttributeLangfuseBinding = DescribeApplicationAttributeResponseBodyPolarClawApplicationAttributeLangfuseBinding;
class DescribeApplicationAttributeResponseBodyPolarClawApplicationAttribute extends $dara.Model {
    static names() {
        return {
            langfuseBinding: 'LangfuseBinding',
        };
    }
    static types() {
        return {
            langfuseBinding: DescribeApplicationAttributeResponseBodyPolarClawApplicationAttributeLangfuseBinding,
        };
    }
    validate() {
        if (this.langfuseBinding && typeof this.langfuseBinding.validate === 'function') {
            this.langfuseBinding.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeApplicationAttributeResponseBodyPolarClawApplicationAttribute = DescribeApplicationAttributeResponseBodyPolarClawApplicationAttribute;
class DescribeApplicationAttributeResponseBodyPolarClawSaaSApplicationAttribute extends $dara.Model {
    static names() {
        return {
            authCallbackURL: 'AuthCallbackURL',
            authProviders: 'AuthProviders',
            supabaseClusterId: 'SupabaseClusterId',
        };
    }
    static types() {
        return {
            authCallbackURL: 'string',
            authProviders: { 'type': 'array', 'itemType': 'string' },
            supabaseClusterId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.authProviders)) {
            $dara.Model.validateArray(this.authProviders);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeApplicationAttributeResponseBodyPolarClawSaaSApplicationAttribute = DescribeApplicationAttributeResponseBodyPolarClawSaaSApplicationAttribute;
class DescribeApplicationAttributeResponseBodySecurityGroups extends $dara.Model {
    static names() {
        return {
            netType: 'NetType',
            regionId: 'RegionId',
            securityGroupId: 'SecurityGroupId',
            securityGroupName: 'SecurityGroupName',
        };
    }
    static types() {
        return {
            netType: 'string',
            regionId: 'string',
            securityGroupId: 'string',
            securityGroupName: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeApplicationAttributeResponseBodySecurityGroups = DescribeApplicationAttributeResponseBodySecurityGroups;
class DescribeApplicationAttributeResponseBodySecurityIPArrays extends $dara.Model {
    static names() {
        return {
            securityIPArrayName: 'SecurityIPArrayName',
            securityIPArrayTag: 'SecurityIPArrayTag',
            securityIPList: 'SecurityIPList',
            securityIPNetType: 'SecurityIPNetType',
            securityIPType: 'SecurityIPType',
        };
    }
    static types() {
        return {
            securityIPArrayName: 'string',
            securityIPArrayTag: 'string',
            securityIPList: 'string',
            securityIPNetType: 'string',
            securityIPType: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeApplicationAttributeResponseBodySecurityIPArrays = DescribeApplicationAttributeResponseBodySecurityIPArrays;
class DescribeApplicationAttributeResponseBodyStorages extends $dara.Model {
    static names() {
        return {
            storageCapacity: 'StorageCapacity',
            storageInstanceId: 'StorageInstanceId',
            storagePerformanceLevel: 'StoragePerformanceLevel',
            storageType: 'StorageType',
        };
    }
    static types() {
        return {
            storageCapacity: 'string',
            storageInstanceId: 'string',
            storagePerformanceLevel: 'string',
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
exports.DescribeApplicationAttributeResponseBodyStorages = DescribeApplicationAttributeResponseBodyStorages;
class DescribeApplicationAttributeResponseBody extends $dara.Model {
    static names() {
        return {
            applicationId: 'ApplicationId',
            applicationType: 'ApplicationType',
            architecture: 'Architecture',
            canDisableSnat: 'CanDisableSnat',
            components: 'Components',
            creationTime: 'CreationTime',
            DBClusterId: 'DBClusterId',
            description: 'Description',
            dnatMappings: 'DnatMappings',
            endpoints: 'Endpoints',
            expireTime: 'ExpireTime',
            expired: 'Expired',
            isLatestVersion: 'IsLatestVersion',
            latestVersion: 'LatestVersion',
            lockMode: 'LockMode',
            maintainEndTime: 'MaintainEndTime',
            maintainStartTime: 'MaintainStartTime',
            memApplicationAttribute: 'MemApplicationAttribute',
            minorVersion: 'MinorVersion',
            natGatewayId: 'NatGatewayId',
            natMappingSnatIpAddress: 'NatMappingSnatIpAddress',
            payType: 'PayType',
            polarClawApplicationAttribute: 'PolarClawApplicationAttribute',
            polarClawSaaSApplicationAttribute: 'PolarClawSaaSApplicationAttribute',
            polarFSInstanceId: 'PolarFSInstanceId',
            regionId: 'RegionId',
            requestId: 'RequestId',
            securityGroups: 'SecurityGroups',
            securityIPArrays: 'SecurityIPArrays',
            serverlessType: 'ServerlessType',
            snatStatus: 'SnatStatus',
            status: 'Status',
            storages: 'Storages',
            upgradeAvailable: 'UpgradeAvailable',
            VPCId: 'VPCId',
            vSwitchId: 'VSwitchId',
            version: 'Version',
            vpcNatGatewayId: 'VpcNatGatewayId',
            zoneId: 'ZoneId',
        };
    }
    static types() {
        return {
            applicationId: 'string',
            applicationType: 'string',
            architecture: 'string',
            canDisableSnat: 'boolean',
            components: { 'type': 'array', 'itemType': DescribeApplicationAttributeResponseBodyComponents },
            creationTime: 'string',
            DBClusterId: 'string',
            description: 'string',
            dnatMappings: { 'type': 'array', 'itemType': DescribeApplicationAttributeResponseBodyDnatMappings },
            endpoints: { 'type': 'array', 'itemType': DescribeApplicationAttributeResponseBodyEndpoints },
            expireTime: 'string',
            expired: 'boolean',
            isLatestVersion: 'boolean',
            latestVersion: 'string',
            lockMode: 'string',
            maintainEndTime: 'string',
            maintainStartTime: 'string',
            memApplicationAttribute: DescribeApplicationAttributeResponseBodyMemApplicationAttribute,
            minorVersion: 'string',
            natGatewayId: 'string',
            natMappingSnatIpAddress: 'string',
            payType: 'string',
            polarClawApplicationAttribute: DescribeApplicationAttributeResponseBodyPolarClawApplicationAttribute,
            polarClawSaaSApplicationAttribute: DescribeApplicationAttributeResponseBodyPolarClawSaaSApplicationAttribute,
            polarFSInstanceId: 'string',
            regionId: 'string',
            requestId: 'string',
            securityGroups: { 'type': 'array', 'itemType': DescribeApplicationAttributeResponseBodySecurityGroups },
            securityIPArrays: { 'type': 'array', 'itemType': DescribeApplicationAttributeResponseBodySecurityIPArrays },
            serverlessType: 'string',
            snatStatus: 'string',
            status: 'string',
            storages: { 'type': 'array', 'itemType': DescribeApplicationAttributeResponseBodyStorages },
            upgradeAvailable: 'string',
            VPCId: 'string',
            vSwitchId: 'string',
            version: 'string',
            vpcNatGatewayId: 'string',
            zoneId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.components)) {
            $dara.Model.validateArray(this.components);
        }
        if (Array.isArray(this.dnatMappings)) {
            $dara.Model.validateArray(this.dnatMappings);
        }
        if (Array.isArray(this.endpoints)) {
            $dara.Model.validateArray(this.endpoints);
        }
        if (this.memApplicationAttribute && typeof this.memApplicationAttribute.validate === 'function') {
            this.memApplicationAttribute.validate();
        }
        if (this.polarClawApplicationAttribute && typeof this.polarClawApplicationAttribute.validate === 'function') {
            this.polarClawApplicationAttribute.validate();
        }
        if (this.polarClawSaaSApplicationAttribute && typeof this.polarClawSaaSApplicationAttribute.validate === 'function') {
            this.polarClawSaaSApplicationAttribute.validate();
        }
        if (Array.isArray(this.securityGroups)) {
            $dara.Model.validateArray(this.securityGroups);
        }
        if (Array.isArray(this.securityIPArrays)) {
            $dara.Model.validateArray(this.securityIPArrays);
        }
        if (Array.isArray(this.storages)) {
            $dara.Model.validateArray(this.storages);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeApplicationAttributeResponseBody = DescribeApplicationAttributeResponseBody;
//# sourceMappingURL=DescribeApplicationAttributeResponseBody.js.map