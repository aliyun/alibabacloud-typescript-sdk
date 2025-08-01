// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesWithEcsInfoResponseBodyDataInstanceTag extends $dara.Model {
  /**
   * @example
   * test_tag_key
   */
  tagKey?: string;
  /**
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
   * @example
   * cbf7a37bc905d4682a3338b3744810269
   */
  clusterId?: string;
  /**
   * @example
   * i-bp118piqcio9tiwgh84b
   */
  instanceId?: string;
  /**
   * @example
   * allowed-repos-r2tzl
   */
  instanceName?: string;
  instanceTag?: ListInstancesWithEcsInfoResponseBodyDataInstanceTag[];
  kernelVersion?: string;
  /**
   * @example
   * x86
   */
  osArch?: string;
  /**
   * @example
   * 100
   */
  osHealthScore?: string;
  /**
   * @example
   * Alibaba Cloud Linux  3.2104 LTS 64bit
   */
  osName?: string;
  /**
   * @example
   * 1.1.1.1
   */
  privateIp?: string;
  /**
   * @example
   * 1.1.1.1
   */
  publicIp?: string;
  /**
   * @example
   * rg-xxxxxx
   */
  resourceGroupId?: string;
  /**
   * @example
   * default resource group
   */
  resourceGroupName?: string;
  /**
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
   * @example
   * Success
   */
  code?: string;
  data?: ListInstancesWithEcsInfoResponseBodyData[];
  /**
   * @example
   * result: code=1 msg=(Request failed, status_code != 200)
   */
  message?: string;
  /**
   * @example
   * 35F91AAB-5FDF-5A22-B211-C7C6B00817D0
   */
  requestId?: string;
  /**
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

