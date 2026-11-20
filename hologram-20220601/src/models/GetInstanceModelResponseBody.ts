// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceModelResponseBodyModelServiceList extends $dara.Model {
  /**
   * @remarks
   * The Model Studio API key. This key is for display purposes only and cannot be used directly.
   * 
   * @example
   * sk-42f6c8xxxxxb
   */
  apiKey?: string;
  /**
   * @remarks
   * The CPU occupied by this model service. This parameter is applicable only to Hologres AI nodes.
   * 
   * @example
   * 32
   */
  cpu?: number;
  /**
   * @remarks
   * The GPU occupied by this model service. This parameter is applicable only to Hologres AI nodes.
   * 
   * @example
   * 2
   */
  gpu?: number;
  /**
   * @remarks
   * The GPU memory occupied by this model service. This parameter is applicable only to Hologres AI nodes.
   * 
   * @example
   * 32
   */
  gpuMemory?: number;
  /**
   * @remarks
   * The deployment region of the AI node.
   * 
   * @example
   * cn-beijing
   */
  instanceRegion?: string;
  /**
   * @remarks
   * The memory occupied by this model service. This parameter is applicable only to Hologres AI nodes.
   * 
   * @example
   * 32
   */
  memory?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Failed
   */
  message?: string;
  /**
   * @remarks
   * The custom name of the model service.
   * 
   * @example
   * my_model
   */
  modelName?: string;
  /**
   * @remarks
   * The model parameters. This parameter is applicable only to Model Studio models.
   * 
   * @example
   * {"timeout":600,"max_retries":10,"max_retry_delay":8,"initial_retry_delay":0.5}
   */
  modelParams?: string;
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * qwen3.5-plus
   */
  modelType?: string;
  /**
   * @remarks
   * The underlying model provider.
   * 
   * @example
   * bailian
   */
  provider?: string;
  /**
   * @remarks
   * The number of service replicas. This parameter is applicable only to Hologres AI nodes.
   * 
   * @example
   * 2
   */
  serviceCount?: number;
  /**
   * @remarks
   * The deployment region.
   * 
   * @example
   * cn-beijing
   */
  serviceDeployRegion?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * Specifies whether the model service supports access through an API key.
   * 
   * @example
   * true
   */
  supportApiKeyAccess?: boolean;
  /**
   * @remarks
   * The model purpose.
   * 
   * @example
   * embedding
   */
  taskType?: string;
  /**
   * @remarks
   * The version.
   * 
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
      supportApiKeyAccess: 'supportApiKeyAccess',
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
      supportApiKeyAccess: 'boolean',
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
   * @remarks
   * The ID of the AI node instance.
   * 
   * @example
   * hologram_aicombo_public_cn-77xxx
   */
  aiInstanceId?: string;
  /**
   * @remarks
   * Specifies whether auto-renewal is enabled for the resource. Valid values:
   * - true: Auto-renewal is enabled. The resource is automatically renewed upon expiration.
   * - false: Auto-renewal is disabled. The resource is stopped upon expiration.
   * 
   * @example
   * true
   */
  autoRenewal?: boolean;
  /**
   * @remarks
   * The billing method. Valid values:
   * - PrePaid: subscription.
   * - PostPaid: pay-as-you-go.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The commodity code.
   * 
   * @example
   * hologram_aipostpay_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The total CPU of the node. This parameter is applicable only to Hologres AI nodes.
   * 
   * @example
   * 32
   */
  cpu?: number;
  /**
   * @remarks
   * The total CPU used by the node. This parameter is applicable only to Hologres AI nodes.
   * 
   * @example
   * 32
   */
  cpuUsed?: number;
  /**
   * @remarks
   * The expiration time in UTC.
   * 
   * @example
   * 2026-01-28T07:44:27.535Z
   */
  expirationTime?: string;
  /**
   * @remarks
   * The total GPU of the node. This parameter is applicable only to Hologres AI nodes.
   * 
   * @example
   * 4
   */
  gpu?: number;
  /**
   * @remarks
   * The total GPU memory of the node. This parameter is applicable only to Hologres AI nodes.
   * 
   * @example
   * 128
   */
  gpuMemory?: number;
  /**
   * @remarks
   * The total GPU memory used by the node. This parameter is applicable only to Hologres AI nodes.
   * 
   * @example
   * 64
   */
  gpuMemoryUsed?: number;
  /**
   * @remarks
   * The total GPU used by the node. This parameter is applicable only to Hologres AI nodes.
   * 
   * @example
   * 2
   */
  gpuUsed?: number;
  /**
   * @remarks
   * The total memory of the node. This parameter is applicable only to Hologres AI nodes.
   * 
   * @example
   * 128
   */
  memory?: number;
  /**
   * @remarks
   * The total memory used by the node. This parameter is applicable only to Hologres AI nodes.
   * 
   * @example
   * 64
   */
  memoryUsed?: number;
  /**
   * @remarks
   * The list of model services.
   */
  modelServiceList?: GetInstanceModelResponseBodyModelServiceList[];
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * 2
   */
  nodeCount?: number;
  /**
   * @remarks
   * The region ID.
   * 
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
   * @remarks
   * The resource type.
   * 
   * @example
   * middle
   */
  resourceType?: string;
  /**
   * @remarks
   * The node status.
   * 
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

