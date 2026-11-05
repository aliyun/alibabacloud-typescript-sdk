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
exports.CreateAIDBClusterRequest = exports.CreateAIDBClusterRequestTimeSlices = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class CreateAIDBClusterRequestTimeSlices extends $dara.Model {
    static names() {
        return {
            beginTime: 'BeginTime',
            endTime: 'EndTime',
        };
    }
    static types() {
        return {
            beginTime: 'number',
            endTime: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateAIDBClusterRequestTimeSlices = CreateAIDBClusterRequestTimeSlices;
class CreateAIDBClusterRequest extends $dara.Model {
    static names() {
        return {
            ackAdmin: 'AckAdmin',
            autoRenew: 'AutoRenew',
            autoUseCoupon: 'AutoUseCoupon',
            capacity: 'Capacity',
            clientToken: 'ClientToken',
            createPublicEndpoint: 'CreatePublicEndpoint',
            DBClusterDescription: 'DBClusterDescription',
            DBClusterId: 'DBClusterId',
            DBNodeClass: 'DBNodeClass',
            extension: 'Extension',
            inferenceEngine: 'InferenceEngine',
            kubeClusterId: 'KubeClusterId',
            kubeConfig: 'KubeConfig',
            kubeManagement: 'KubeManagement',
            kubeType: 'KubeType',
            kubernetesConfig: 'KubernetesConfig',
            managementMode: 'ManagementMode',
            modelName: 'ModelName',
            modelSpace: 'ModelSpace',
            ownerAccount: 'OwnerAccount',
            ownerId: 'OwnerId',
            password: 'Password',
            payType: 'PayType',
            period: 'Period',
            promotionCode: 'PromotionCode',
            regionId: 'RegionId',
            resourceOwnerAccount: 'ResourceOwnerAccount',
            resourceOwnerId: 'ResourceOwnerId',
            securityGroupId: 'SecurityGroupId',
            storageSpace: 'StorageSpace',
            storageType: 'StorageType',
            timeSlices: 'TimeSlices',
            usedTime: 'UsedTime',
            VPCId: 'VPCId',
            vSwitchId: 'VSwitchId',
            zoneId: 'ZoneId',
        };
    }
    static types() {
        return {
            ackAdmin: 'string',
            autoRenew: 'string',
            autoUseCoupon: 'boolean',
            capacity: 'number',
            clientToken: 'string',
            createPublicEndpoint: 'string',
            DBClusterDescription: 'string',
            DBClusterId: 'string',
            DBNodeClass: 'string',
            extension: 'string',
            inferenceEngine: 'string',
            kubeClusterId: 'string',
            kubeConfig: 'string',
            kubeManagement: 'string',
            kubeType: 'string',
            kubernetesConfig: 'string',
            managementMode: 'string',
            modelName: 'string',
            modelSpace: 'string',
            ownerAccount: 'string',
            ownerId: 'number',
            password: 'string',
            payType: 'string',
            period: 'string',
            promotionCode: 'string',
            regionId: 'string',
            resourceOwnerAccount: 'string',
            resourceOwnerId: 'number',
            securityGroupId: 'string',
            storageSpace: 'number',
            storageType: 'string',
            timeSlices: { 'type': 'array', 'itemType': CreateAIDBClusterRequestTimeSlices },
            usedTime: 'string',
            VPCId: 'string',
            vSwitchId: 'string',
            zoneId: 'string',
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
exports.CreateAIDBClusterRequest = CreateAIDBClusterRequest;
//# sourceMappingURL=CreateAidbclusterRequest.js.map