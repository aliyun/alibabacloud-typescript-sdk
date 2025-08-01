// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPluginsInstancesResponseBodyDataInstanceTag extends $dara.Model {
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

export class ListPluginsInstancesResponseBodyData extends $dara.Model {
  /**
   * @example
   * i-bp118piqcio9tiwgh84b
   */
  instanceId?: string;
  /**
   * @example
   * allowed-repos-qmf8w
   */
  instanceName?: string;
  instanceTag?: ListPluginsInstancesResponseBodyDataInstanceTag[];
  /**
   * @example
   * Alibaba Cloud Linux  3.2104 LTS 64 bit
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
   * cn-hangzhou
   */
  region?: string;
  /**
   * @example
   * rg-xxxx
   */
  resourceGroupId?: string;
  /**
   * @example
   * default resource group
   */
  resourceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instance_id',
      instanceName: 'instance_name',
      instanceTag: 'instance_tag',
      osName: 'os_name',
      privateIp: 'private_ip',
      publicIp: 'public_ip',
      region: 'region',
      resourceGroupId: 'resource_group_id',
      resourceGroupName: 'resource_group_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
      instanceTag: { 'type': 'array', 'itemType': ListPluginsInstancesResponseBodyDataInstanceTag },
      osName: 'string',
      privateIp: 'string',
      publicIp: 'string',
      region: 'string',
      resourceGroupId: 'string',
      resourceGroupName: 'string',
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

export class ListPluginsInstancesResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: ListPluginsInstancesResponseBodyData[];
  /**
   * @example
   * SysomOpenAPIException: SysomOpenAPI.InvalidParameter Invalid params, should be json string or dict
   */
  message?: string;
  /**
   * @example
   * 35F91AAB-5FDF-5A22-B211-C7C6B00817D0
   */
  requestId?: string;
  /**
   * @example
   * 42
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
      data: { 'type': 'array', 'itemType': ListPluginsInstancesResponseBodyData },
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

