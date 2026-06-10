// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesWithEcsInfoRequestInstanceTag extends $dara.Model {
  /**
   * @remarks
   * Tag key.
   * 
   * @example
   * feature_dim_radar_chart
   */
  key?: string;
  /**
   * @remarks
   * Tag value.
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesWithEcsInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This field exists when using paging and indicates the current page.
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * Filter instances by health status.
   * 
   * @example
   * healthy
   */
  healthStatus?: string;
  /**
   * @remarks
   * If this field is specified, filter the Agent installation status for the specified instance.
   * 
   * @example
   * i-bp118piqcio9tiwgh84b
   */
  instanceId?: string;
  /**
   * @remarks
   * Filter by instance name or instance ID. Fuzzy query is supported.
   * 
   * @example
   * 84b
   */
  instanceIdName?: string;
  /**
   * @remarks
   * Widget instance name.
   * 
   * @example
   * block-load-balancer-hjdm9
   */
  instanceName?: string;
  /**
   * @remarks
   * Filter by tags of instances.
   */
  instanceTag?: ListInstancesWithEcsInfoRequestInstanceTag;
  /**
   * @remarks
   * Filter instances by managed status.
   * 
   * @example
   * 1
   */
  isManaged?: number;
  /**
   * @remarks
   * Filter instances by operating system name.
   * 
   * @example
   * Alibaba Cloud Linux  3.2104 LTS 64bit
   */
  osName?: string;
  /**
   * @remarks
   * Page size. Default value is 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Filter instances by private IP address.
   * 
   * @example
   * 1.1.1.1
   */
  privateIp?: string;
  /**
   * @remarks
   * Filter instances by public IP address.
   * 
   * @example
   * 1.1.1.1
   */
  publicIp?: string;
  /**
   * @remarks
   * Filter instances by region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  region?: string;
  /**
   * @remarks
   * Filter instances by resource group ID.
   * 
   * @example
   * rg-xxxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Filter by resource group name or resource group ID. Fuzzy query is supported.
   * 
   * @example
   * default
   */
  resourceGroupIdName?: string;
  /**
   * @remarks
   * Filter instances by resource group name.
   * 
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
      instanceTag: 'instance_tag',
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
      instanceTag: ListInstancesWithEcsInfoRequestInstanceTag,
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
    if(this.instanceTag && typeof (this.instanceTag as any).validate === 'function') {
      (this.instanceTag as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

