// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesWithEcsInfoShrinkRequest extends $dara.Model {
  xDebugId?: string;
  /**
   * @remarks
   * The page number for pagination. This parameter specifies the current page.
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * Filters instances by health status.
   * 
   * @example
   * healthy
   */
  healthStatus?: string;
  /**
   * @remarks
   * Specifies an instance ID to filter the Agent installation status of the specified instance.
   * 
   * @example
   * i-bp118piqcio9tiwgh84b
   */
  instanceId?: string;
  /**
   * @remarks
   * Filters instances by instance name or instance ID. Fuzzy match is supported.
   * 
   * @example
   * 84b
   */
  instanceIdName?: string;
  /**
   * @remarks
   * The name of the component instance.
   * 
   * @example
   * block-load-balancer-hjdm9
   */
  instanceName?: string;
  /**
   * @remarks
   * Filters instances by instance tag.
   */
  instanceTagShrink?: string;
  /**
   * @remarks
   * Filters instances by management status.
   * 
   * @example
   * 1
   */
  isManaged?: number;
  /**
   * @remarks
   * Filters instances by operating system name.
   * 
   * @example
   * Alibaba Cloud Linux  3.2104 LTS 64bit
   */
  osName?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Filters instances by private IP address.
   * 
   * @example
   * 1.1.1.1
   */
  privateIp?: string;
  /**
   * @remarks
   * Filters instances by public IP address.
   * 
   * @example
   * 1.1.1.1
   */
  publicIp?: string;
  /**
   * @remarks
   * Filters instances by region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  region?: string;
  /**
   * @remarks
   * Filters instances by resource group ID.
   * 
   * @example
   * rg-xxxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Filters instances by resource group name or resource group ID. Fuzzy match is supported.
   * 
   * @example
   * default
   */
  resourceGroupIdName?: string;
  /**
   * @remarks
   * Filters instances by resource group name.
   * 
   * @example
   * default resource group
   */
  resourceGroupName?: string;
  xSysomInvokeSource?: string;
  static names(): { [key: string]: string } {
    return {
      xDebugId: 'X-Debug-Id',
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
      xSysomInvokeSource: 'x-sysom-invoke-source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xDebugId: 'string',
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
      xSysomInvokeSource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

