// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceModelResponseBodyModelServiceList extends $dara.Model {
  /**
   * @example
   * sk-42f6c8xxxxxb
   */
  apiKey?: string;
  /**
   * @example
   * 32
   */
  cpu?: number;
  /**
   * @example
   * 2
   */
  gpu?: number;
  /**
   * @example
   * 32
   */
  gpuMemory?: number;
  /**
   * @example
   * cn-beijing
   */
  instanceRegion?: string;
  /**
   * @example
   * 32
   */
  memory?: number;
  /**
   * @example
   * Failed
   */
  message?: string;
  /**
   * @example
   * my_model
   */
  modelName?: string;
  /**
   * @example
   * {"timeout":600,"max_retries":10,"max_retry_delay":8,"initial_retry_delay":0.5}
   */
  modelParams?: string;
  /**
   * @example
   * qwen3.5-plus
   */
  modelType?: string;
  /**
   * @example
   * bailian
   */
  provider?: string;
  /**
   * @example
   * 2
   */
  serviceCount?: number;
  /**
   * @example
   * cn-beijing
   */
  serviceDeployRegion?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * embedding
   */
  taskType?: string;
  /**
   * @example
   * v1.1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'apiKey',
      cpu: 'cpu',
      gpu: 'gpu',
      gpuMemory: 'gpuMemory',
      instanceRegion: 'instanceRegion',
      memory: 'memory',
      message: 'message',
      modelName: 'modelName',
      modelParams: 'modelParams',
      modelType: 'modelType',
      provider: 'provider',
      serviceCount: 'serviceCount',
      serviceDeployRegion: 'serviceDeployRegion',
      status: 'status',
      taskType: 'taskType',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      cpu: 'number',
      gpu: 'number',
      gpuMemory: 'number',
      instanceRegion: 'string',
      memory: 'number',
      message: 'string',
      modelName: 'string',
      modelParams: 'string',
      modelType: 'string',
      provider: 'string',
      serviceCount: 'number',
      serviceDeployRegion: 'string',
      status: 'string',
      taskType: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceModelResponseBody extends $dara.Model {
  /**
   * @example
   * hologram_aicombo_public_cn-77xxx
   */
  aiInstanceId?: string;
  /**
   * @example
   * true
   */
  autoRenewal?: boolean;
  /**
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @example
   * hologram_aipostpay_public_cn
   */
  commodityCode?: string;
  /**
   * @example
   * 32
   */
  cpu?: number;
  /**
   * @example
   * 32
   */
  cpuUsed?: number;
  /**
   * @example
   * 2026-01-28T07:44:27.535Z
   */
  expirationTime?: string;
  /**
   * @example
   * 4
   */
  gpu?: number;
  /**
   * @example
   * 128
   */
  gpuMemory?: number;
  /**
   * @example
   * 64
   */
  gpuMemoryUsed?: number;
  /**
   * @example
   * 2
   */
  gpuUsed?: number;
  /**
   * @example
   * 128
   */
  memory?: number;
  /**
   * @example
   * 64
   */
  memoryUsed?: number;
  modelServiceList?: GetInstanceModelResponseBodyModelServiceList[];
  /**
   * @example
   * 2
   */
  nodeCount?: number;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 819A7F0F-2951-540F-BD94-6A41ECF0281F
   */
  requestId?: string;
  /**
   * @example
   * middle
   */
  resourceType?: string;
  /**
   * @example
   * ResourceReady
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aiInstanceId: 'aiInstanceId',
      autoRenewal: 'autoRenewal',
      chargeType: 'chargeType',
      commodityCode: 'commodityCode',
      cpu: 'cpu',
      cpuUsed: 'cpuUsed',
      expirationTime: 'expirationTime',
      gpu: 'gpu',
      gpuMemory: 'gpuMemory',
      gpuMemoryUsed: 'gpuMemoryUsed',
      gpuUsed: 'gpuUsed',
      memory: 'memory',
      memoryUsed: 'memoryUsed',
      modelServiceList: 'modelServiceList',
      nodeCount: 'nodeCount',
      regionId: 'regionId',
      requestId: 'requestId',
      resourceType: 'resourceType',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiInstanceId: 'string',
      autoRenewal: 'boolean',
      chargeType: 'string',
      commodityCode: 'string',
      cpu: 'number',
      cpuUsed: 'number',
      expirationTime: 'string',
      gpu: 'number',
      gpuMemory: 'number',
      gpuMemoryUsed: 'number',
      gpuUsed: 'number',
      memory: 'number',
      memoryUsed: 'number',
      modelServiceList: { 'type': 'array', 'itemType': GetInstanceModelResponseBodyModelServiceList },
      nodeCount: 'number',
      regionId: 'string',
      requestId: 'string',
      resourceType: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.modelServiceList)) {
      $dara.Model.validateArray(this.modelServiceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

