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
exports.CreateKnowledgeSpaceRequest = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class CreateKnowledgeSpaceRequest extends $dara.Model {
    static names() {
        return {
            DBType: 'DBType',
            description: 'Description',
            embeddingDimension: 'EmbeddingDimension',
            embeddingModel: 'EmbeddingModel',
            enforceAcl: 'EnforceAcl',
            LLMModel: 'LLMModel',
            name: 'Name',
            OSSAccessKey: 'OSSAccessKey',
            OSSBucket: 'OSSBucket',
            OSSSecretKey: 'OSSSecretKey',
            regionId: 'RegionId',
            rerankModel: 'RerankModel',
            securityGroupId: 'SecurityGroupId',
            shardingSize: 'ShardingSize',
            shardingStrategy: 'ShardingStrategy',
            vSwitchId: 'VSwitchId',
            vpcId: 'VpcId',
            zoneId: 'ZoneId',
        };
    }
    static types() {
        return {
            DBType: 'string',
            description: 'string',
            embeddingDimension: 'number',
            embeddingModel: 'string',
            enforceAcl: 'boolean',
            LLMModel: 'string',
            name: 'string',
            OSSAccessKey: 'string',
            OSSBucket: 'string',
            OSSSecretKey: 'string',
            regionId: 'string',
            rerankModel: 'string',
            securityGroupId: 'string',
            shardingSize: 'number',
            shardingStrategy: 'string',
            vSwitchId: 'string',
            vpcId: 'string',
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
exports.CreateKnowledgeSpaceRequest = CreateKnowledgeSpaceRequest;
//# sourceMappingURL=CreateKnowledgeSpaceRequest.js.map