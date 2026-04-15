// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableModelsResponseBodyItemsGpuRequired extends $dara.Model {
  /**
   * @example
   * xx
   */
  gpuMinCount?: string;
  /**
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
  gpuRequired?: DescribeAvailableModelsResponseBodyItemsGpuRequired[];
  /**
   * @example
   * 8
   */
  minimumCpu?: number;
  /**
   * @example
   * 16384
   */
  minimumMemory?: number;
  /**
   * @example
   * Qwen3-32B-GPTQ-Int4
   */
  modelName?: string;
  /**
   * @example
   * BERT
   */
  modelSeries?: string;
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
   * @example
   * polardb_ai
   */
  engine?: string;
  /**
   * @example
   * 3.0
   */
  engineVersion?: string;
  items?: DescribeAvailableModelsResponseBodyItems[];
  /**
   * @remarks
   * Id of the request
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

