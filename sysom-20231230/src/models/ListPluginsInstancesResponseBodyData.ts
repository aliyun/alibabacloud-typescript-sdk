// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPluginsInstancesResponseBodyDataInstanceTag } from "./ListPluginsInstancesResponseBodyDataInstanceTag";


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

