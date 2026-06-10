// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesWithEcsInfoResponseBodyDataInstanceTag extends $dara.Model {
  /**
   * @remarks
   * Name of the tag.
   * 
   * @example
   * test_tag_key
   */
  tagKey?: string;
  /**
   * @remarks
   * Tag value.
   * 
   * @example
   * test_tag_value
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'tag_key',
      tagValue: 'tag_value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesWithEcsInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Cluster ID
   * 
   * @example
   * cbf7a37bc905d4682a3338b3744810269
   */
  clusterId?: string;
  /**
   * @remarks
   * instance ID
   * 
   * @example
   * i-bp118piqcio9tiwgh84b
   */
  instanceId?: string;
  /**
   * @remarks
   * Instance Name.
   * 
   * @example
   * allowed-repos-r2tzl
   */
  instanceName?: string;
  /**
   * @remarks
   * tags of instances
   */
  instanceTag?: ListInstancesWithEcsInfoResponseBodyDataInstanceTag[];
  /**
   * @remarks
   * Milvus version
   * 
   * @example
   * 5.10.134-14.an8.x86_64
   */
  kernelVersion?: string;
  /**
   * @remarks
   * ECS instance architecture
   * 
   * @example
   * x86
   */
  osArch?: string;
  /**
   * @remarks
   * Instance health score
   * 
   * @example
   * 100
   */
  osHealthScore?: string;
  /**
   * @remarks
   * The operating system name of the instance
   * 
   * @example
   * Alibaba Cloud Linux  3.2104 LTS 64bit
   */
  osName?: string;
  /**
   * @remarks
   * Instance private IP
   * 
   * @example
   * 1.1.1.1
   */
  privateIp?: string;
  /**
   * @remarks
   * Instance Internet IP
   * 
   * @example
   * 1.1.1.1
   */
  publicIp?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-xxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Resource group name
   * 
   * @example
   * default resource group
   */
  resourceGroupName?: string;
  /**
   * @remarks
   * The running status of the instance. Valid values:  
   * - **Running**: The instance is running.  
   * - **Offline**: The instance is offline.  
   * 
   * > An instance in the Offline state indicates that the heartbeat from the edge zone to the SysOM Server has been lost. This does not mean that the corresponding ECS instance is not running.
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      instanceId: 'instance_id',
      instanceName: 'instance_name',
      instanceTag: 'instance_tag',
      kernelVersion: 'kernel_version',
      osArch: 'os_arch',
      osHealthScore: 'os_health_score',
      osName: 'os_name',
      privateIp: 'private_ip',
      publicIp: 'public_ip',
      resourceGroupId: 'resource_group_id',
      resourceGroupName: 'resource_group_name',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceTag: { 'type': 'array', 'itemType': ListInstancesWithEcsInfoResponseBodyDataInstanceTag },
      kernelVersion: 'string',
      osArch: 'string',
      osHealthScore: 'string',
      osName: 'string',
      privateIp: 'string',
      publicIp: 'string',
      resourceGroupId: 'string',
      resourceGroupName: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceTag)) {
      $dara.Model.validateArray(this.instanceTag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesWithEcsInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Returned data.
   */
  data?: ListInstancesWithEcsInfoResponseBodyData[];
  /**
   * @remarks
   * Error message. An empty value indicates that the data has been read completely.
   * 
   * @example
   * result: code=1 msg=(Request failed, status_code != 200)
   */
  message?: string;
  /**
   * @remarks
   * Request RequestId
   * 
   * @example
   * 35F91AAB-5FDF-5A22-B211-C7C6B00817D0
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of records
   * 
   * @example
   * 319
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
      data: { 'type': 'array', 'itemType': ListInstancesWithEcsInfoResponseBodyData },
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

