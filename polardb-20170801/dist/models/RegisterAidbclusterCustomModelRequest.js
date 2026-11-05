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
exports.RegisterAIDBClusterCustomModelRequest = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class RegisterAIDBClusterCustomModelRequest extends $dara.Model {
    static names() {
        return {
            containerEnv: 'ContainerEnv',
            customOssBucketName: 'CustomOssBucketName',
            customOssBucketPath: 'CustomOssBucketPath',
            DBInstanceClass: 'DBInstanceClass',
            directCommand: 'DirectCommand',
            displayModelName: 'DisplayModelName',
            imageName: 'ImageName',
            inferenceEngine: 'InferenceEngine',
            modelName: 'ModelName',
            modelParams: 'ModelParams',
            regionId: 'RegionId',
            registryPassword: 'RegistryPassword',
            registryUsername: 'RegistryUsername',
        };
    }
    static types() {
        return {
            containerEnv: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            customOssBucketName: 'string',
            customOssBucketPath: 'string',
            DBInstanceClass: 'string',
            directCommand: 'string',
            displayModelName: 'string',
            imageName: 'string',
            inferenceEngine: 'string',
            modelName: 'string',
            modelParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            regionId: 'string',
            registryPassword: 'string',
            registryUsername: 'string',
        };
    }
    validate() {
        if (this.containerEnv) {
            $dara.Model.validateMap(this.containerEnv);
        }
        if (this.modelParams) {
            $dara.Model.validateMap(this.modelParams);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.RegisterAIDBClusterCustomModelRequest = RegisterAIDBClusterCustomModelRequest;
//# sourceMappingURL=RegisterAidbclusterCustomModelRequest.js.map