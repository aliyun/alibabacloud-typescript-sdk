// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodeInstanceTypeResponseBodyNodeInstanceTypeModelsWuyingServerModelMetaInfo extends $dara.Model {
  /**
   * @example
   * vLLM
   */
  defaultInferenceEngine?: string;
  /**
   * @example
   * 支持文本生成
   */
  description?: string;
  /**
   * @example
   * 0.5
   */
  firstTokenLatencySeconds?: number;
  /**
   * @example
   * m-example-image
   */
  imageId?: string;
  /**
   * @example
   * ["text"]
   */
  inputModalities?: string[];
  /**
   * @example
   * 500
   */
  machineInputTokensPerSecond?: number;
  /**
   * @example
   * 70
   */
  machineOutputTokensPerSecond?: number;
  /**
   * @example
   * 32768
   */
  maxModelLen?: number;
  /**
   * @example
   * 65536
   */
  maxModelLenMax?: number;
  /**
   * @example
   * 1024
   */
  maxModelLenMin?: number;
  /**
   * @example
   * 16
   */
  maxNumSeqsMax?: number;
  /**
   * @example
   * 1
   */
  maxNumSeqsMin?: number;
  /**
   * @example
   * demo-model
   */
  modelId?: string;
  /**
   * @example
   * 示例模型
   */
  modelName?: string;
  /**
   * @example
   * ["text"]
   */
  outputModalities?: string[];
  /**
   * @example
   * true
   */
  recommended?: boolean;
  /**
   * @example
   * 8
   */
  recommendedMaxNumSeqs?: number;
  static names(): { [key: string]: string } {
    return {
      defaultInferenceEngine: 'DefaultInferenceEngine',
      description: 'Description',
      firstTokenLatencySeconds: 'FirstTokenLatencySeconds',
      imageId: 'ImageId',
      inputModalities: 'InputModalities',
      machineInputTokensPerSecond: 'MachineInputTokensPerSecond',
      machineOutputTokensPerSecond: 'MachineOutputTokensPerSecond',
      maxModelLen: 'MaxModelLen',
      maxModelLenMax: 'MaxModelLenMax',
      maxModelLenMin: 'MaxModelLenMin',
      maxNumSeqsMax: 'MaxNumSeqsMax',
      maxNumSeqsMin: 'MaxNumSeqsMin',
      modelId: 'ModelId',
      modelName: 'ModelName',
      outputModalities: 'OutputModalities',
      recommended: 'Recommended',
      recommendedMaxNumSeqs: 'RecommendedMaxNumSeqs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultInferenceEngine: 'string',
      description: 'string',
      firstTokenLatencySeconds: 'number',
      imageId: 'string',
      inputModalities: { 'type': 'array', 'itemType': 'string' },
      machineInputTokensPerSecond: 'number',
      machineOutputTokensPerSecond: 'number',
      maxModelLen: 'number',
      maxModelLenMax: 'number',
      maxModelLenMin: 'number',
      maxNumSeqsMax: 'number',
      maxNumSeqsMin: 'number',
      modelId: 'string',
      modelName: 'string',
      outputModalities: { 'type': 'array', 'itemType': 'string' },
      recommended: 'boolean',
      recommendedMaxNumSeqs: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.inputModalities)) {
      $dara.Model.validateArray(this.inputModalities);
    }
    if(Array.isArray(this.outputModalities)) {
      $dara.Model.validateArray(this.outputModalities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeInstanceTypeResponseBodyNodeInstanceTypeModels extends $dara.Model {
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 4
   */
  cpu?: string;
  /**
   * @example
   * 49152
   */
  ecsGpuMemory?: number;
  /**
   * @remarks
   * The number of GPUs.
   * 
   * @example
   * 2
   */
  gpu?: string;
  /**
   * @remarks
   * The GPU memory size. Unit: MB.
   * 
   * @example
   * 8192
   */
  gpuMemory?: number;
  /**
   * @example
   * RTX 5880
   */
  gpuSpec?: string;
  /**
   * @remarks
   * The maximum number of concurrent sessions, which is the number of sessions that can be simultaneously connected to a single resource. If too many sessions are connected at the same time, the application experience may degrade. The valid values vary depending on the resource specification. The valid values for each resource specification are as follows:
   * 
   * - appstreaming.general.2c4g: 1
   * - appstreaming.general.4c8g: 1 to 2
   * - appstreaming.general.8c16g: 1 to 4
   * - appstreaming.vgpu.8c16g.4g: 1 to 4
   * - appstreaming.vgpu.8c31g.16g: 1 to 4
   * - appstreaming.vgpu.14c93g.12g: 1 to 7
   * - appstreaming.vgpu.4c10g.2gt4: 1 to 2
   * - appstreaming.vgpu.4c16g.2ga10: 1 to 2
   * - appstreaming.vgpu.8c16g.4g: 1 to 4
   * - appstreaming.vgpu.8c31g.16g: 1 to 4
   * - appstreaming.vgpu.8c16g.4gt4: 1 to 4
   * - appstreaming.vgpu.8c32g.4ga10: 1 to 4
   * - appstreaming.vgpu.12c46g.11g28: 1 to 6
   * - appstreaming.vgpu.14c93g.12g: 1 to 7
   * - appstreaming.vgpu.16c32g.8g: 1 to 8
   * - appstreaming.vgpu.16c62g.8ga10: 1 to 8
   * 
   * @example
   * 4
   */
  maxCapacity?: number;
  /**
   * @remarks
   * The memory size. Unit: MB.
   * 
   * @example
   * 8192
   */
  memory?: number;
  /**
   * @remarks
   * The resource specification type ID.
   * 
   * @example
   * appstreaming.vgpu.4c8g.2g
   */
  nodeInstanceType?: string;
  /**
   * @remarks
   * The resource specification family.
   * 
   * @example
   * appstreaming.vgpu
   */
  nodeInstanceTypeFamily?: string;
  /**
   * @remarks
   * The resource specification name.
   * 
   * @example
   * WUYING-General-purpose_4vCPU8GB
   */
  nodeTypeName?: string;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  wuyingServerModelMetaInfo?: ListNodeInstanceTypeResponseBodyNodeInstanceTypeModelsWuyingServerModelMetaInfo;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      ecsGpuMemory: 'EcsGpuMemory',
      gpu: 'Gpu',
      gpuMemory: 'GpuMemory',
      gpuSpec: 'GpuSpec',
      maxCapacity: 'MaxCapacity',
      memory: 'Memory',
      nodeInstanceType: 'NodeInstanceType',
      nodeInstanceTypeFamily: 'NodeInstanceTypeFamily',
      nodeTypeName: 'NodeTypeName',
      requestId: 'RequestId',
      wuyingServerModelMetaInfo: 'WuyingServerModelMetaInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'string',
      ecsGpuMemory: 'number',
      gpu: 'string',
      gpuMemory: 'number',
      gpuSpec: 'string',
      maxCapacity: 'number',
      memory: 'number',
      nodeInstanceType: 'string',
      nodeInstanceTypeFamily: 'string',
      nodeTypeName: 'string',
      requestId: 'string',
      wuyingServerModelMetaInfo: ListNodeInstanceTypeResponseBodyNodeInstanceTypeModelsWuyingServerModelMetaInfo,
    };
  }

  validate() {
    if(this.wuyingServerModelMetaInfo && typeof (this.wuyingServerModelMetaInfo as any).validate === 'function') {
      (this.wuyingServerModelMetaInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeInstanceTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of resource specifications.
   */
  nodeInstanceTypeModels?: ListNodeInstanceTypeResponseBodyNodeInstanceTypeModels[];
  /**
   * @remarks
   * The page number of the query results currently displayed.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of query results per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of query results.
   * 
   * @example
   * 6
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nodeInstanceTypeModels: 'NodeInstanceTypeModels',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeInstanceTypeModels: { 'type': 'array', 'itemType': ListNodeInstanceTypeResponseBodyNodeInstanceTypeModels },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.nodeInstanceTypeModels)) {
      $dara.Model.validateArray(this.nodeInstanceTypeModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

