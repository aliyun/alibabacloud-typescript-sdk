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
exports.ModifyCronJobPolicyServerlessRequest = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ModifyCronJobPolicyServerlessRequest extends $dara.Model {
    static names() {
        return {
            allowShutDown: 'AllowShutDown',
            cronExpression: 'CronExpression',
            DBClusterId: 'DBClusterId',
            endTime: 'EndTime',
            jobId: 'JobId',
            ownerAccount: 'OwnerAccount',
            ownerId: 'OwnerId',
            regionId: 'RegionId',
            resourceOwnerAccount: 'ResourceOwnerAccount',
            resourceOwnerId: 'ResourceOwnerId',
            scaleApRoNumMax: 'ScaleApRoNumMax',
            scaleApRoNumMin: 'ScaleApRoNumMin',
            scaleMax: 'ScaleMax',
            scaleMin: 'ScaleMin',
            scaleRoNumMax: 'ScaleRoNumMax',
            scaleRoNumMin: 'ScaleRoNumMin',
            secondsUntilAutoPause: 'SecondsUntilAutoPause',
            serverlessRuleCpuEnlargeThreshold: 'ServerlessRuleCpuEnlargeThreshold',
            serverlessRuleCpuShrinkThreshold: 'ServerlessRuleCpuShrinkThreshold',
            serverlessRuleMode: 'ServerlessRuleMode',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            allowShutDown: 'string',
            cronExpression: 'string',
            DBClusterId: 'string',
            endTime: 'string',
            jobId: 'string',
            ownerAccount: 'string',
            ownerId: 'number',
            regionId: 'string',
            resourceOwnerAccount: 'string',
            resourceOwnerId: 'number',
            scaleApRoNumMax: 'string',
            scaleApRoNumMin: 'string',
            scaleMax: 'string',
            scaleMin: 'string',
            scaleRoNumMax: 'string',
            scaleRoNumMin: 'string',
            secondsUntilAutoPause: 'string',
            serverlessRuleCpuEnlargeThreshold: 'string',
            serverlessRuleCpuShrinkThreshold: 'string',
            serverlessRuleMode: 'string',
            startTime: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ModifyCronJobPolicyServerlessRequest = ModifyCronJobPolicyServerlessRequest;
//# sourceMappingURL=ModifyCronJobPolicyServerlessRequest.js.map