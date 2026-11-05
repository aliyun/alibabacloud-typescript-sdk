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
exports.DescribeAvailableModelsResponseBody = exports.DescribeAvailableModelsResponseBodyItems = exports.DescribeAvailableModelsResponseBodyItemsGpuRequired = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeAvailableModelsResponseBodyItemsGpuRequired extends $dara.Model {
    static names() {
        return {
            gpuMinCount: 'GpuMinCount',
            gpuModel: 'GpuModel',
        };
    }
    static types() {
        return {
            gpuMinCount: 'string',
            gpuModel: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeAvailableModelsResponseBodyItemsGpuRequired = DescribeAvailableModelsResponseBodyItemsGpuRequired;
class DescribeAvailableModelsResponseBodyItems extends $dara.Model {
    static names() {
        return {
            containerEnv: 'ContainerEnv',
            customImageSource: 'CustomImageSource',
            customModelName: 'CustomModelName',
            DBInstanceClass: 'DBInstanceClass',
            directCommand: 'DirectCommand',
            displayModelName: 'DisplayModelName',
            gmtModified: 'GmtModified',
            gpuRequired: 'GpuRequired',
            imageImportStatus: 'ImageImportStatus',
            imageName: 'ImageName',
            inferenceEngine: 'InferenceEngine',
            minimumCpu: 'MinimumCpu',
            minimumMemory: 'MinimumMemory',
            modelName: 'ModelName',
            modelParams: 'ModelParams',
            modelSeries: 'ModelSeries',
            modelType: 'ModelType',
            ossPath: 'OssPath',
            supportedGpuModels: 'SupportedGpuModels',
            tuneArch: 'TuneArch',
        };
    }
    static types() {
        return {
            containerEnv: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            customImageSource: 'string',
            customModelName: 'string',
            DBInstanceClass: 'string',
            directCommand: 'string',
            displayModelName: 'string',
            gmtModified: 'string',
            gpuRequired: { 'type': 'array', 'itemType': DescribeAvailableModelsResponseBodyItemsGpuRequired },
            imageImportStatus: 'string',
            imageName: 'string',
            inferenceEngine: 'string',
            minimumCpu: 'number',
            minimumMemory: 'number',
            modelName: 'string',
            modelParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            modelSeries: 'string',
            modelType: 'string',
            ossPath: 'string',
            supportedGpuModels: { 'type': 'array', 'itemType': 'string' },
            tuneArch: 'string',
        };
    }
    validate() {
        if (this.containerEnv) {
            $dara.Model.validateMap(this.containerEnv);
        }
        if (Array.isArray(this.gpuRequired)) {
            $dara.Model.validateArray(this.gpuRequired);
        }
        if (this.modelParams) {
            $dara.Model.validateMap(this.modelParams);
        }
        if (Array.isArray(this.supportedGpuModels)) {
            $dara.Model.validateArray(this.supportedGpuModels);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeAvailableModelsResponseBodyItems = DescribeAvailableModelsResponseBodyItems;
class DescribeAvailableModelsResponseBody extends $dara.Model {
    static names() {
        return {
            engine: 'Engine',
            engineVersion: 'EngineVersion',
            items: 'Items',
            modelType: 'ModelType',
            requestId: 'RequestId',
            tuneArch: 'TuneArch',
        };
    }
    static types() {
        return {
            engine: 'string',
            engineVersion: 'string',
            items: { 'type': 'array', 'itemType': DescribeAvailableModelsResponseBodyItems },
            modelType: 'string',
            requestId: 'string',
            tuneArch: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.items)) {
            $dara.Model.validateArray(this.items);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeAvailableModelsResponseBody = DescribeAvailableModelsResponseBody;
//# sourceMappingURL=DescribeAvailableModelsResponseBody.js.map