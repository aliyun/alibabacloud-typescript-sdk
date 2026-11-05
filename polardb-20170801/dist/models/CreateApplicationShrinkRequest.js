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
exports.CreateApplicationShrinkRequest = exports.CreateApplicationShrinkRequestTag = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class CreateApplicationShrinkRequestTag extends $dara.Model {
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
exports.CreateApplicationShrinkRequestTag = CreateApplicationShrinkRequestTag;
class CreateApplicationShrinkRequest extends $dara.Model {
    static names() {
        return {
            AIDBClusterId: 'AIDBClusterId',
            agenticDBBranchSpecShrink: 'AgenticDBBranchSpec',
            agenticDBClusterId: 'AgenticDBClusterId',
            applicationType: 'ApplicationType',
            architecture: 'Architecture',
            authProvider: 'AuthProvider',
            authProviderConfig: 'AuthProviderConfig',
            autoAllocatePublicEip: 'AutoAllocatePublicEip',
            autoCreatePolarFs: 'AutoCreatePolarFs',
            autoRenew: 'AutoRenew',
            autoUseCoupon: 'AutoUseCoupon',
            componentsShrink: 'Components',
            DBClusterId: 'DBClusterId',
            description: 'Description',
            dnatEntriesShrink: 'DnatEntries',
            dnatIpAddress: 'DnatIpAddress',
            dryRun: 'DryRun',
            endpointsShrink: 'Endpoints',
            knowledgeApplicationSpecShrink: 'KnowledgeApplicationSpec',
            memApplicationSpecShrink: 'MemApplicationSpec',
            modelApi: 'ModelApi',
            modelApiKey: 'ModelApiKey',
            modelBaseUrl: 'ModelBaseUrl',
            modelFrom: 'ModelFrom',
            modelName: 'ModelName',
            parametersShrink: 'Parameters',
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
            storagesShrink: 'Storages',
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
            agenticDBBranchSpecShrink: 'string',
            agenticDBClusterId: 'string',
            applicationType: 'string',
            architecture: 'string',
            authProvider: 'string',
            authProviderConfig: 'string',
            autoAllocatePublicEip: 'boolean',
            autoCreatePolarFs: 'boolean',
            autoRenew: 'boolean',
            autoUseCoupon: 'boolean',
            componentsShrink: 'string',
            DBClusterId: 'string',
            description: 'string',
            dnatEntriesShrink: 'string',
            dnatIpAddress: 'string',
            dryRun: 'boolean',
            endpointsShrink: 'string',
            knowledgeApplicationSpecShrink: 'string',
            memApplicationSpecShrink: 'string',
            modelApi: 'string',
            modelApiKey: 'string',
            modelBaseUrl: 'string',
            modelFrom: 'string',
            modelName: 'string',
            parametersShrink: 'string',
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
            storagesShrink: 'string',
            tag: { 'type': 'array', 'itemType': CreateApplicationShrinkRequestTag },
            targetVersion: 'string',
            usedTime: 'string',
            vSwitchId: 'string',
            vpcId: 'string',
            vpcNatGatewayId: 'string',
            zoneId: 'string',
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
exports.CreateApplicationShrinkRequest = CreateApplicationShrinkRequest;
//# sourceMappingURL=CreateApplicationShrinkRequest.js.map