// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPluginsInstancesResponseBodyDataInstanceTag extends $dara.Model {
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

export class ListPluginsInstancesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Instance ID
   * 
   * @example
   * i-bp118piqcio9tiwgh84b
   */
  instanceId?: string;
  /**
   * @remarks
   * Widget instance name.
   * 
   * @example
   * allowed-repos-qmf8w
   */
  instanceName?: string;
  /**
   * @remarks
   * Tags of instances
   */
  instanceTag?: ListPluginsInstancesResponseBodyDataInstanceTag[];
  /**
   * @remarks
   * Operating system name of the instance
   * 
   * @example
   * Alibaba Cloud Linux  3.2104 LTS 64 bit
   */
  osName?: string;
  /**
   * @remarks
   * Private IP address
   * 
   * @example
   * 1.1.1.1
   */
  privateIp?: string;
  /**
   * @remarks
   * Internet IP address
   * 
   * @example
   * 1.1.1.1
   */
  publicIp?: string;
  /**
   * @remarks
   * Area where the instance resides
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-xxxx
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
   * @remarks
   * Status code  
   * - `code == Success` indicates successful authorization;  
   * - Other status codes indicate failed authorization. When authorization fails, view the `message` field to obtain detailed error information.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Return Result.
   */
  data?: ListPluginsInstancesResponseBodyData[];
  /**
   * @remarks
   * Description
   * 
   * @example
   * SysomOpenAPIException: SysomOpenAPI.InvalidParameter Invalid params, should be json string or dict
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
   * Total number of query results.
   * 
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

