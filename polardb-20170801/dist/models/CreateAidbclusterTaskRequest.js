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
exports.CreateAIDBClusterTaskRequest = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class CreateAIDBClusterTaskRequest extends $dara.Model {
    static names() {
        return {
            customOssBucketName: 'CustomOssBucketName',
            DBClusterId: 'DBClusterId',
            DBInstanceClass: 'DBInstanceClass',
            dataserviceMode: 'DataserviceMode',
            datasetPath: 'DatasetPath',
            evalDatasetPath: 'EvalDatasetPath',
            kubeType: 'KubeType',
            modelName: 'ModelName',
            modelSource: 'ModelSource',
            modelType: 'ModelType',
            ownerAccount: 'OwnerAccount',
            ownerId: 'OwnerId',
            regionId: 'RegionId',
            resourceOwnerAccount: 'ResourceOwnerAccount',
            resourceOwnerId: 'ResourceOwnerId',
            runningParameter: 'RunningParameter',
            securityGroupId: 'SecurityGroupId',
            taskName: 'TaskName',
            tuneArch: 'TuneArch',
            VPCId: 'VPCId',
            vSwitchId: 'VSwitchId',
            zoneId: 'ZoneId',
        };
    }
    static types() {
        return {
            customOssBucketName: 'string',
            DBClusterId: 'string',
            DBInstanceClass: 'string',
            dataserviceMode: 'string',
            datasetPath: 'string',
            evalDatasetPath: 'string',
            kubeType: 'string',
            modelName: 'string',
            modelSource: 'string',
            modelType: 'string',
            ownerAccount: 'string',
            ownerId: 'number',
            regionId: 'string',
            resourceOwnerAccount: 'string',
            resourceOwnerId: 'number',
            runningParameter: 'string',
            securityGroupId: 'string',
            taskName: 'string',
            tuneArch: 'string',
            VPCId: 'string',
            vSwitchId: 'string',
            zoneId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateAIDBClusterTaskRequest = CreateAIDBClusterTaskRequest;
//# sourceMappingURL=CreateAidbclusterTaskRequest.js.map