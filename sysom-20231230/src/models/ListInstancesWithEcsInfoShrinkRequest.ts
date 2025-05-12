// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesWithEcsInfoShrinkRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  current?: number;
  /**
   * @example
   * healthy
   */
  healthStatus?: string;
  /**
   * @example
   * i-bp118piqcio9tiwgh84b
   */
  instanceId?: string;
  /**
   * @example
   * 84b
   */
  instanceIdName?: string;
  /**
   * @example
   * block-load-balancer-hjdm9
   */
  instanceName?: string;
  instanceTagShrink?: string;
  /**
   * @example
   * 1
   */
  isManaged?: number;
  /**
   * @example
   * Alibaba Cloud Linux  3.2104 LTS 64bit
   */
  osName?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  region?: string;
  /**
   * @example
   * rg-xxxxxxx
   */
  resourceGroupId?: string;
  /**
   * @example
   * default
   */
  resourceGroupIdName?: string;
  /**
   * @example
   * default resource group
   */
  resourceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      current: 'current',
      healthStatus: 'health_status',
      instanceId: 'instance_id',
      instanceIdName: 'instance_id_name',
      instanceName: 'instance_name',
      instanceTagShrink: 'instance_tag',
      isManaged: 'is_managed',
      osName: 'os_name',
      pageSize: 'pageSize',
      privateIp: 'private_ip',
      publicIp: 'public_ip',
      region: 'region',
      resourceGroupId: 'resource_group_id',
      resourceGroupIdName: 'resource_group_id_name',
      resourceGroupName: 'resource_group_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      healthStatus: 'string',
      instanceId: 'string',
      instanceIdName: 'string',
      instanceName: 'string',
      instanceTagShrink: 'string',
      isManaged: 'number',
      osName: 'string',
      pageSize: 'number',
      privateIp: 'string',
      publicIp: 'string',
      region: 'string',
      resourceGroupId: 'string',
      resourceGroupIdName: 'string',
      resourceGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

