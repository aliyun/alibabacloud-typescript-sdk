// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableModelsResponseBodyItemsGpuRequired extends $dara.Model {
  /**
   * @remarks
   * The minimum number of GPUs.
   * 
   * @example
   * xx
   */
  gpuMinCount?: string;
  /**
   * @remarks
   * The GPU model.
   * 
   * @example
   * xxx
   */
  gpuModel?: string;
  static names(): { [key: string]: string } {
    return {
      gpuMinCount: 'GpuMinCount',
      gpuModel: 'GpuModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gpuMinCount: 'string',
      gpuModel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableModelsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The custom model registration key.
   * 
   * @example
   * Qwen3-32B
   */
  customModelName?: string;
  /**
   * @remarks
   * The display name of the model.
   * 
   * @example
   * My Qwen3 32B
   */
  displayModelName?: string;
  /**
   * @remarks
   * The last modified time of the registration.
   * 
   * @example
   * 2026-09-07 20:57:20
   */
  gmtModified?: string;
  /**
   * @remarks
   * The supported GPU types.
   */
  gpuRequired?: DescribeAvailableModelsResponseBodyItemsGpuRequired[];
  /**
   * @remarks
   * The minimum number of CPUs.
   * 
   * @example
   * 8
   */
  minimumCpu?: number;
  /**
   * @remarks
   * The minimum memory size.
   * 
   * @example
   * 16384
   */
  minimumMemory?: number;
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * Qwen3-32B-GPTQ-Int4
   */
  modelName?: string;
  /**
   * @remarks
   * The model series.
   * 
   * @example
   * BERT
   */
  modelSeries?: string;
  /**
   * @remarks
   * The model type.
   * 
   * @example
   * custom
   */
  modelType?: string;
  /**
   * @remarks
   * The OSS path of the custom model.
   * 
   * @example
   * /my-model-bucket/models
   */
  ossPath?: string;
  /**
   * @remarks
   * The supported GPU models.
   */
  supportedGpuModels?: string[];
  tuneArch?: string;
  static names(): { [key: string]: string } {
    return {
      customModelName: 'CustomModelName',
      displayModelName: 'DisplayModelName',
      gmtModified: 'GmtModified',
      gpuRequired: 'GpuRequired',
      minimumCpu: 'MinimumCpu',
      minimumMemory: 'MinimumMemory',
      modelName: 'ModelName',
      modelSeries: 'ModelSeries',
      modelType: 'ModelType',
      ossPath: 'OssPath',
      supportedGpuModels: 'SupportedGpuModels',
      tuneArch: 'TuneArch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customModelName: 'string',
      displayModelName: 'string',
      gmtModified: 'string',
      gpuRequired: { 'type': 'array', 'itemType': DescribeAvailableModelsResponseBodyItemsGpuRequired },
      minimumCpu: 'number',
      minimumMemory: 'number',
      modelName: 'string',
      modelSeries: 'string',
      modelType: 'string',
      ossPath: 'string',
      supportedGpuModels: { 'type': 'array', 'itemType': 'string' },
      tuneArch: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.gpuRequired)) {
      $dara.Model.validateArray(this.gpuRequired);
    }
    if(Array.isArray(this.supportedGpuModels)) {
      $dara.Model.validateArray(this.supportedGpuModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableModelsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The database engine.
   * 
   * @example
   * polardb_ai
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version.
   * 
   * @example
   * 3.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The list of models.
   */
  items?: DescribeAvailableModelsResponseBodyItems[];
  /**
   * @remarks
   * The model type corresponding to the request.
   * 
   * @example
   * custom
   */
  modelType?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 3AA69096-757C-4647-B36C-29EBC2******
   */
  requestId?: string;
  /**
   * @remarks
   * The model fine-tuning architecture.
   * 
   * @example
   * swift
   */
  tuneArch?: string;
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      items: 'Items',
      modelType: 'ModelType',
      requestId: 'RequestId',
      tuneArch: 'TuneArch',
    };
  }

  static types(): { [key: string]: any } {
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
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

