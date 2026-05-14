// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceModelResponseBodyInstanceModelList extends $dara.Model {
  /**
   * @example
   * hologram_aicombo_public_cn-77xxx
   */
  aiInstanceId?: string;
  /**
   * @example
   * small-8core-30G-24G
   */
  aiSpec?: string;
  autoRenewal?: boolean;
  /**
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @example
   * hologram_aipostpay_public_cn
   */
  commodityCode?: string;
  cpu?: number;
  cpuUsed?: number;
  /**
   * @example
   * 2026-01-28T07:44:27.535Z
   */
  expirationTime?: string;
  gpu?: number;
  gpuMemory?: number;
  gpuMemoryUsed?: number;
  gpuUsed?: number;
  /**
   * @example
   * hgpostcn-cn-yi34hlzdx003
   */
  holoInstanceId?: string;
  holoInstanceName?: string;
  memory?: number;
  memoryUsed?: number;
  nodeCount?: number;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * small
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

