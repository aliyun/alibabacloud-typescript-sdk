// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceModelResponseBodyInstanceModelList extends $dara.Model {
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
   * The **AI specifications**.
   * 
   * @example
   * small-8core-30G-24G
   */
  aiSpec?: string;
  /**
   * @remarks
   * Specifies whether **auto-renewal** is enabled.
   */
  autoRenewal?: boolean;
  /**
   * @remarks
   * The billing method. Valid values:
   * - PrePaid: subscription.
   * - PostPaid: pay-as-you-go.
   * 
   * @example
   * PostPaid
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
   * The CPU specifications. This parameter applies only to Hologres AI nodes.
   * 
   * @example
   * 7
   */
  cpu?: number;
  /**
   * @remarks
   * The total CPU usage of the node. This parameter applies only to Hologres AI nodes.
   * 
   * @example
   * 7
   */
  cpuUsed?: number;
  /**
   * @remarks
   * The expiration time (UTC).
   * 
   * @example
   * 2026-01-28T07:44:27.535Z
   */
  expirationTime?: string;
  /**
   * @remarks
   * The number of GPUs. This parameter applies only to Hologres AI nodes.
   * 
   * @example
   * 1
   */
  gpu?: number;
  /**
   * @remarks
   * The GPU memory size. Unit: GB. This parameter applies only to Hologres AI nodes.
   * 
   * @example
   * 32
   */
  gpuMemory?: number;
  /**
   * @remarks
   * The total GPU memory usage of the node. This parameter applies only to Hologres AI nodes.
   * 
   * @example
   * 32
   */
  gpuMemoryUsed?: number;
  /**
   * @remarks
   * The total GPU usage of the node. This parameter applies only to Hologres AI nodes.
   * 
   * @example
   * 32
   */
  gpuUsed?: number;
  /**
   * @remarks
   * The **Hologres instance ID**.
   * 
   * @example
   * hgpostcn-cn-yi34hlzdx003
   */
  holoInstanceId?: string;
  /**
   * @remarks
   * The **Hologres instance name**.
   * 
   * @example
   * myInstance
   */
  holoInstanceName?: string;
  /**
   * @remarks
   * The memory size. Unit: GiB. This parameter applies only to Hologres AI nodes.
   * 
   * @example
   * 16
   */
  memory?: number;
  /**
   * @remarks
   * The total memory usage of the node. This parameter applies only to Hologres AI nodes.
   * 
   * @example
   * 32
   */
  memoryUsed?: number;
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
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * small
   */
  resourceType?: string;
  /**
   * @remarks
   * The **status**.
   * 
   * @example
   * ResourceReady
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aiInstanceId: 'aiInstanceId',
      aiSpec: 'aiSpec',
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
      holoInstanceId: 'holoInstanceId',
      holoInstanceName: 'holoInstanceName',
      memory: 'memory',
      memoryUsed: 'memoryUsed',
      nodeCount: 'nodeCount',
      regionId: 'regionId',
      resourceType: 'resourceType',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiInstanceId: 'string',
      aiSpec: 'string',
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
      holoInstanceId: 'string',
      holoInstanceName: 'string',
      memory: 'number',
      memoryUsed: 'number',
      nodeCount: 'number',
      regionId: 'string',
      resourceType: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceModelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of AI resources.
   */
  instanceModelList?: ListInstanceModelResponseBodyInstanceModelList[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2C2ECDC1-FBAD-14A5-AA4A-96BC787FBDBC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceModelList: 'instanceModelList',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceModelList: { 'type': 'array', 'itemType': ListInstanceModelResponseBodyInstanceModelList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceModelList)) {
      $dara.Model.validateArray(this.instanceModelList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

