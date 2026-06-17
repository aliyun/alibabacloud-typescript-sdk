// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableModelsResponseBodyItemsGpuRequired extends $dara.Model {
  /**
   * @remarks
   * The minimum number of GPUs required.
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
   * The required GPU configurations.
   */
  gpuRequired?: DescribeAvailableModelsResponseBodyItemsGpuRequired[];
  /**
   * @remarks
   * The minimum number of CPU cores required.
   * 
   * @example
   * 8
   */
  minimumCpu?: number;
  /**
   * @remarks
   * The minimum memory required, in MiB.
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
   * The supported GPU models.
   */
  supportedGpuModels?: string[];
  static names(): { [key: string]: string } {
    return {
      gpuRequired: 'GpuRequired',
      minimumCpu: 'MinimumCpu',
      minimumMemory: 'MinimumMemory',
      modelName: 'ModelName',
      modelSeries: 'ModelSeries',
      supportedGpuModels: 'SupportedGpuModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gpuRequired: { 'type': 'array', 'itemType': DescribeAvailableModelsResponseBodyItemsGpuRequired },
      minimumCpu: 'number',
      minimumMemory: 'number',
      modelName: 'string',
      modelSeries: 'string',
      supportedGpuModels: { 'type': 'array', 'itemType': 'string' },
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
   * The engine version.
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
   * The ID of the request.
   * 
   * @example
   * 3AA69096-757C-4647-B36C-29EBC2******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      engineVersion: 'string',
      items: { 'type': 'array', 'itemType': DescribeAvailableModelsResponseBodyItems },
      requestId: 'string',
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

