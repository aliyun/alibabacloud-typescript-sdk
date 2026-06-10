// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Cluster ID
   * 
   * @example
   * c2218ca2b76ec45e7b7ee1693f6fcd374
   */
  clusterId?: string;
  /**
   * @remarks
   * ECS instance ID
   * 
   * @example
   * i-wz9d00ut2ska3mlyhn6j
   */
  instance?: string;
  /**
   * @remarks
   * Milvus version of the instance
   * 
   * @example
   * 5.10.134-16.1.an8.x86_64
   */
  kernelVersion?: string;
  /**
   * @remarks
   * Metadata of the instance
   * 
   * @example
   * {
   *     "uname": "Linux",
   *     "oncpu": "off",
   *     "release": "5.10.134-16.3.al8.aarch64",
   *     "monitor": "on",
   *     "version_id": "3",
   *     "version": "3 (Soaring Falcon)",
   *     "podNs": [
   * 
   *     ],
   *     "machine": "aarch64",
   *     "name": "Alibaba Cloud Linux",
   *     "sysak": "3.4.0-1",
   *     "id": "alinux",
   *     "region": "cn-hangzhou",
   *     "centos-release": "Alibaba Cloud Linux release 3 (Soaring Falcon)"
   * }
   */
  meta?: any;
  /**
   * @remarks
   * Architecture of the ECS instance
   * 
   * @example
   * x86
   */
  osArch?: string;
  /**
   * @remarks
   * Health score of the instance
   * 
   * @example
   * 100
   */
  osHealthScore?: string;
  /**
   * @remarks
   * Operating system name of the instance (retrieved from /etc/os-release)
   * 
   * @example
   * Anolis OS
   */
  osName?: string;
  /**
   * @remarks
   * Operating system name ID of the instance (retrieved from /etc/os-release)
   * 
   * @example
   * anolis
   */
  osNameId?: string;
  /**
   * @remarks
   * Operating system version of the instance (obtained from /etc/os-release)
   * 
   * @example
   * 8.9
   */
  osVersion?: string;
  /**
   * @remarks
   * Operating system version ID of the instance (retrieved from /etc/os-release)
   * 
   * @example
   * rhel fedora centos
   */
  osVersionId?: string;
  /**
   * @remarks
   * Region where the instance is located
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * Status of the instance
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      instance: 'instance',
      kernelVersion: 'kernel_version',
      meta: 'meta',
      osArch: 'os_arch',
      osHealthScore: 'os_health_score',
      osName: 'os_name',
      osNameId: 'os_name_id',
      osVersion: 'os_version',
      osVersionId: 'os_version_id',
      region: 'region',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      instance: 'string',
      kernelVersion: 'string',
      meta: 'any',
      osArch: 'string',
      osHealthScore: 'string',
      osName: 'string',
      osNameId: 'string',
      osVersion: 'string',
      osVersionId: 'string',
      region: 'string',
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

export class ListInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code  
   * - `code == Success` indicates that authorization succeeded.  
   * - Any other status code indicates that authorization failed. When authorization fails, check the `message` field for detailed error information.
   * 
   * @example
   * SysomOpenAPI.ServerError
   */
  code?: string;
  /**
   * @remarks
   * Return Result.
   */
  data?: ListInstancesResponseBodyData[];
  /**
   * @remarks
   * Error message  
   * - If `code == Success`, this field is empty.  
   * - Otherwise, this field contains the request error message.
   * 
   * @example
   * Requests for llm service failed
   */
  message?: string;
  /**
   * @remarks
   * Request RequestId
   * 
   * @example
   * 9515E5A0-8905-59B0-9BBF-5F0BE568C3A0
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of records
   * 
   * @example
   * 623
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'request_id',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListInstancesResponseBodyData },
      message: 'string',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

