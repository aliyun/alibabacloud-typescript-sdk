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
exports.CreateApplicationRequest = exports.CreateApplicationRequestTag = exports.CreateApplicationRequestStorages = exports.CreateApplicationRequestParameters = exports.CreateApplicationRequestMemApplicationSpec = exports.CreateApplicationRequestKnowledgeApplicationSpec = exports.CreateApplicationRequestEndpoints = exports.CreateApplicationRequestDnatEntries = exports.CreateApplicationRequestComponents = exports.CreateApplicationRequestAgenticDBBranchSpec = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class CreateApplicationRequestAgenticDBBranchSpec extends $dara.Model {
    static names() {
        return {
            branchId: 'BranchId',
            DBClusterId: 'DBClusterId',
            forkFromApplicationId: 'ForkFromApplicationId',
            forkFromBranch: 'ForkFromBranch',
            projectId: 'ProjectId',
            tenantId: 'TenantId',
        };
    }
    static types() {
        return {
            branchId: 'string',
            DBClusterId: 'string',
            forkFromApplicationId: 'string',
            forkFromBranch: 'boolean',
            projectId: 'string',
            tenantId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateApplicationRequestAgenticDBBranchSpec = CreateApplicationRequestAgenticDBBranchSpec;
class CreateApplicationRequestComponents extends $dara.Model {
    static names() {
        return {
            componentClass: 'ComponentClass',
            componentMaxReplica: 'ComponentMaxReplica',
            componentReplica: 'ComponentReplica',
            componentType: 'ComponentType',
            scaleMax: 'ScaleMax',
            scaleMin: 'ScaleMin',
            securityGroups: 'SecurityGroups',
            securityIPArrayName: 'SecurityIPArrayName',
            securityIPList: 'SecurityIPList',
            securityIPType: 'SecurityIPType',
        };
    }
    static types() {
        return {
            componentClass: 'string',
            componentMaxReplica: 'number',
            componentReplica: 'number',
            componentType: 'string',
            scaleMax: 'string',
            scaleMin: 'string',
            securityGroups: 'string',
            securityIPArrayName: 'string',
            securityIPList: 'string',
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
exports.CreateApplicationRequestComponents = CreateApplicationRequestComponents;
class CreateApplicationRequestDnatEntries extends $dara.Model {
    static names() {
        return {
            frontPort: 'FrontPort',
            portName: 'PortName',
        };
    }
    static types() {
        return {
            frontPort: 'number',
            portName: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateApplicationRequestDnatEntries = CreateApplicationRequestDnatEntries;
class CreateApplicationRequestEndpoints extends $dara.Model {
    static names() {
        return {
            description: 'Description',
            endpointType: 'EndpointType',
        };
    }
    static types() {
        return {
            description: 'string',
            endpointType: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateApplicationRequestEndpoints = CreateApplicationRequestEndpoints;
class CreateApplicationRequestKnowledgeApplicationSpec extends $dara.Model {
    static names() {
        return {
            dashboardPassword: 'DashboardPassword',
            dbPassword: 'DbPassword',
            llmModel: 'LlmModel',
            polarAIEmbedderInstanceId: 'PolarAIEmbedderInstanceId',
            polarAILlmInstanceId: 'PolarAILlmInstanceId',
            polarAIRerankerInstanceId: 'PolarAIRerankerInstanceId',
            polarAIVlInstanceId: 'PolarAIVlInstanceId',
        };
    }
    static types() {
        return {
            dashboardPassword: 'string',
            dbPassword: 'string',
            llmModel: 'string',
            polarAIEmbedderInstanceId: 'string',
            polarAILlmInstanceId: 'string',
            polarAIRerankerInstanceId: 'string',
            polarAIVlInstanceId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateApplicationRequestKnowledgeApplicationSpec = CreateApplicationRequestKnowledgeApplicationSpec;
class CreateApplicationRequestMemApplicationSpec extends $dara.Model {
    static names() {
        return {
            dbName: 'DbName',
            dbPassword: 'DbPassword',
            dbUser: 'DbUser',
            embedderModel: 'EmbedderModel',
            embedderModelDimension: 'EmbedderModelDimension',
            graphLlmModel: 'GraphLlmModel',
            llmModel: 'LlmModel',
            memoryType: 'MemoryType',
            polarAIEmbedderInstanceId: 'PolarAIEmbedderInstanceId',
            polarAIGraphLlmInstanceId: 'PolarAIGraphLlmInstanceId',
            polarAILlmInstanceId: 'PolarAILlmInstanceId',
            polarAIRerankerInstanceId: 'PolarAIRerankerInstanceId',
            projectName: 'ProjectName',
            rerankerModel: 'RerankerModel',
            shard: 'Shard',
            visualEmbedderModel: 'VisualEmbedderModel',
            visualEmbedderModelDimension: 'VisualEmbedderModelDimension',
            visualLlmModalities: 'VisualLlmModalities',
            visualLlmModel: 'VisualLlmModel',
        };
    }
    static types() {
        return {
            dbName: 'string',
            dbPassword: 'string',
            dbUser: 'string',
            embedderModel: 'string',
            embedderModelDimension: 'number',
            graphLlmModel: 'string',
            llmModel: 'string',
            memoryType: 'string',
            polarAIEmbedderInstanceId: 'string',
            polarAIGraphLlmInstanceId: 'string',
            polarAILlmInstanceId: 'string',
            polarAIRerankerInstanceId: 'string',
            projectName: 'string',
            rerankerModel: 'string',
            shard: 'number',
            visualEmbedderModel: 'string',
            visualEmbedderModelDimension: 'number',
            visualLlmModalities: { 'type': 'array', 'itemType': 'string' },
            visualLlmModel: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.visualLlmModalities)) {
            $dara.Model.validateArray(this.visualLlmModalities);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateApplicationRequestMemApplicationSpec = CreateApplicationRequestMemApplicationSpec;
class CreateApplicationRequestParameters extends $dara.Model {
    static names() {
        return {
            parameterName: 'ParameterName',
            parameterValue: 'ParameterValue',
        };
    }
    static types() {
        return {
            parameterName: 'string',
            parameterValue: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateApplicationRequestParameters = CreateApplicationRequestParameters;
class CreateApplicationRequestStorages extends $dara.Model {
    static names() {
        return {
            containerMountPath: 'ContainerMountPath',
            endpointId: 'EndpointId',
            mountPath: 'MountPath',
            storageCapacity: 'StorageCapacity',
            storageEndpoint: 'StorageEndpoint',
            storageInstanceId: 'StorageInstanceId',
            storagePerformanceLevel: 'StoragePerformanceLevel',
            storageType: 'StorageType',
        };
    }
    static types() {
        return {
            containerMountPath: 'string',
            endpointId: 'string',
            mountPath: 'string',
            storageCapacity: 'string',
            storageEndpoint: 'string',
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
exports.CreateApplicationRequestStorages = CreateApplicationRequestStorages;
class CreateApplicationRequestTag extends $dara.Model {
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
exports.CreateApplicationRequestTag = CreateApplicationRequestTag;
class CreateApplicationRequest extends $dara.Model {
    static names() {
        return {
            AIDBClusterId: 'AIDBClusterId',
            agenticDBBranchSpec: 'AgenticDBBranchSpec',
            agenticDBClusterId: 'AgenticDBClusterId',
            applicationType: 'ApplicationType',
            architecture: 'Architecture',
            authProvider: 'AuthProvider',
            authProviderConfig: 'AuthProviderConfig',
            autoAllocatePublicEip: 'AutoAllocatePublicEip',
            autoCreatePolarFs: 'AutoCreatePolarFs',
            autoRenew: 'AutoRenew',
            autoUseCoupon: 'AutoUseCoupon',
            components: 'Components',
            DBClusterId: 'DBClusterId',
            description: 'Description',
            dnatEntries: 'DnatEntries',
            dnatIpAddress: 'DnatIpAddress',
            dryRun: 'DryRun',
            endpoints: 'Endpoints',
            knowledgeApplicationSpec: 'KnowledgeApplicationSpec',
            memApplicationSpec: 'MemApplicationSpec',
            modelApi: 'ModelApi',
            modelApiKey: 'ModelApiKey',
            modelBaseUrl: 'ModelBaseUrl',
            modelFrom: 'ModelFrom',
            modelName: 'ModelName',
            parameters: 'Parameters',
            payType: 'PayType',
            period: 'Period',
            polarFSInstanceId: 'PolarFSInstanceId',
            promotionCode: 'PromotionCode',
            regionId: 'RegionId',
            resourceGroupId: 'ResourceGroupId',
            securityGroupId: 'SecurityGroupId',
            securityIPArrayName: 'SecurityIPArrayName',
            securityIPList: 'SecurityIPList',
            securityIPType: 'SecurityIPType',
            skillTemplateId: 'SkillTemplateId',
            storages: 'Storages',
            tag: 'Tag',
            targetVersion: 'TargetVersion',
            usedTime: 'UsedTime',
            vSwitchId: 'VSwitchId',
            vpcId: 'VpcId',
            vpcNatGatewayId: 'VpcNatGatewayId',
            zoneId: 'ZoneId',
        };
    }
    static types() {
        return {
            AIDBClusterId: 'string',
            agenticDBBranchSpec: CreateApplicationRequestAgenticDBBranchSpec,
            agenticDBClusterId: 'string',
            applicationType: 'string',
            architecture: 'string',
            authProvider: 'string',
            authProviderConfig: 'string',
            autoAllocatePublicEip: 'boolean',
            autoCreatePolarFs: 'boolean',
            autoRenew: 'boolean',
            autoUseCoupon: 'boolean',
            components: { 'type': 'array', 'itemType': CreateApplicationRequestComponents },
            DBClusterId: 'string',
            description: 'string',
            dnatEntries: { 'type': 'array', 'itemType': CreateApplicationRequestDnatEntries },
            dnatIpAddress: 'string',
            dryRun: 'boolean',
            endpoints: { 'type': 'array', 'itemType': CreateApplicationRequestEndpoints },
            knowledgeApplicationSpec: CreateApplicationRequestKnowledgeApplicationSpec,
            memApplicationSpec: CreateApplicationRequestMemApplicationSpec,
            modelApi: 'string',
            modelApiKey: 'string',
            modelBaseUrl: 'string',
            modelFrom: 'string',
            modelName: 'string',
            parameters: { 'type': 'array', 'itemType': CreateApplicationRequestParameters },
            payType: 'string',
            period: 'string',
            polarFSInstanceId: 'string',
            promotionCode: 'string',
            regionId: 'string',
            resourceGroupId: 'string',
            securityGroupId: 'string',
            securityIPArrayName: 'string',
            securityIPList: 'string',
            securityIPType: 'string',
            skillTemplateId: 'string',
            storages: { 'type': 'array', 'itemType': CreateApplicationRequestStorages },
            tag: { 'type': 'array', 'itemType': CreateApplicationRequestTag },
            targetVersion: 'string',
            usedTime: 'string',
            vSwitchId: 'string',
            vpcId: 'string',
            vpcNatGatewayId: 'string',
            zoneId: 'string',
        };
    }
    validate() {
        if (this.agenticDBBranchSpec && typeof this.agenticDBBranchSpec.validate === 'function') {
            this.agenticDBBranchSpec.validate();
        }
        if (Array.isArray(this.components)) {
            $dara.Model.validateArray(this.components);
        }
        if (Array.isArray(this.dnatEntries)) {
            $dara.Model.validateArray(this.dnatEntries);
        }
        if (Array.isArray(this.endpoints)) {
            $dara.Model.validateArray(this.endpoints);
        }
        if (this.knowledgeApplicationSpec && typeof this.knowledgeApplicationSpec.validate === 'function') {
            this.knowledgeApplicationSpec.validate();
        }
        if (this.memApplicationSpec && typeof this.memApplicationSpec.validate === 'function') {
            this.memApplicationSpec.validate();
        }
        if (Array.isArray(this.parameters)) {
            $dara.Model.validateArray(this.parameters);
        }
        if (Array.isArray(this.storages)) {
            $dara.Model.validateArray(this.storages);
        }
        if (Array.isArray(this.tag)) {
            $dara.Model.validateArray(this.tag);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateApplicationRequest = CreateApplicationRequest;
//# sourceMappingURL=CreateApplicationRequest.js.map