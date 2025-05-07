// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCInstanceIpAddressRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * cn-beijing
   */
  ddosRegionId?: string;
  /**
   * @example
   * defense
   */
  ddosStatus?: string;
  /**
   * @example
   * rc-y6dn4pyuub1r89******
   */
  instanceId?: string;
  /**
   * @example
   * 39.105.XXX.XXX
   */
  instanceIp?: string;
  /**
   * @example
   * rc-y6dn4pyuub1r89******
   */
  instanceName?: string;
  /**
   * @example
   * ecs
   */
  instanceType?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
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

