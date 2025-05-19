// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCInstanceIpAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: 1. Pages start from page 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The region ID of the asset.
   * 
   * @example
   * cn-beijing
   */
  ddosRegionId?: string;
  /**
   * @remarks
   * The DDoS mitigation status of the asset. Valid values:
   * 
   * *   **defense**: queries assets for which traffic scrubbing is performed.
   * *   **blackhole**: queries assets for which blackhole filtering is triggered.
   * 
   * @example
   * defense
   */
  ddosStatus?: string;
  /**
   * @remarks
   * The ID of the RDS Custom instance to which the asset to query is added.
   * 
   * @example
   * rc-y6dn4pyuub1r89******
   */
  instanceId?: string;
  /**
   * @remarks
   * The IP address of the asset to query.
   * 
   * @example
   * 39.105.XXX.XXX
   */
  instanceIp?: string;
  /**
   * @remarks
   * The name of the RDS Custom instance to which the asset to query is added.
   * 
   * @example
   * rc-y6dn4pyuub1r89******
   */
  instanceName?: string;
  /**
   * @remarks
   * The type of the asset that is assigned a public IP address. Set the value to **ecs**.
   * 
   * @example
   * ecs
   */
  instanceType?: string;
  /**
   * @remarks
   * The number of instances on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region in which the RDS Custom instance resides.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the resource. Set the value to **ecs**.
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

