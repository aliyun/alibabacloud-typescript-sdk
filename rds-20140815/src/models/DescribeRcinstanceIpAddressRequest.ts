// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCInstanceIpAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the page to return. Default value: 1, which indicates that the first page is returned.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The region ID of the assets that are assigned public IP addresses to query.
   * 
   * @example
   * cn-beijing
   */
  ddosRegionId?: string;
  /**
   * @remarks
   * The DDoS mitigation status of the assets that are assigned public IP addresses to query. Valid values:
   * 
   * - **defense**: Cleaning. Assets that are assigned public IP addresses for which Anti-DDoS Origin scrubs traffic are queried.
   * - **blackhole**: Black Hole Activated. Assets that are assigned public IP addresses that are in the blackhole filtering status are queried.
   * 
   * @example
   * defense
   */
  ddosStatus?: string;
  /**
   * @remarks
   * The instance ID of the Custom instance to which the assets that are assigned public IP addresses belong.
   * 
   * @example
   * rc-y6dn4pyuub1r89******
   */
  instanceId?: string;
  /**
   * @remarks
   * The IP address of the assets that are assigned public IP addresses to query.
   * 
   * @example
   * 39.105.XXX.XXX
   */
  instanceIp?: string;
  /**
   * @remarks
   * The name of the Custom instance to which the assets that are assigned public IP addresses belong.
   * 
   * @example
   * rc-y6dn4pyuub1r89******
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance type of the assets that are assigned public IP addresses to query. Set the value to **ecs**.
   * 
   * @example
   * ecs
   */
  instanceType?: string;
  /**
   * @remarks
   * Settings for paged query. The number of instances to return on each page for paging.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the Custom instance.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The resource type. Set the value to **ecs**.
   * 
   * @example
   * ecs
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      ddosRegionId: 'DdosRegionId',
      ddosStatus: 'DdosStatus',
      instanceId: 'InstanceId',
      instanceIp: 'InstanceIp',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      ddosRegionId: 'string',
      ddosStatus: 'string',
      instanceId: 'string',
      instanceIp: 'string',
      instanceName: 'string',
      instanceType: 'string',
      pageSize: 'number',
      regionId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

