// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVSwitchesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to query vSwitches with IPv6 CIDR blocks enabled. Valid values:
   * - true: Queries vSwitches with IPv6 CIDR blocks enabled in the specified region.
   * - false: Does not query vSwitches with IPv6 CIDR blocks enabled in the specified region.
   * 
   * If you do not specify this parameter, the system queries all vSwitches by default.
   * 
   * @example
   * false
   */
  enableIpv6?: boolean;
  /**
   * @remarks
   * The ENS edge zone ID.
   * 
   * @example
   * cn-xian-unicom
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The array of ENS edge zone IDs. Array length: 1 to 100.
   */
  ensRegionIds?: string[];
  /**
   * @remarks
   * The ID of the VPC to which the vSwitch to be queried belongs.
   * 
   * @example
   * vpc-25cdvfeq58pl****
   */
  networkId?: string;
  /**
   * @remarks
   * The page number of the list. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paging query. Maximum value: **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-5m9xhlq8oh***
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The array of vSwitch IDs. Array length: 1 to 100.
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * The vSwitch name.
   * 
   * @example
   * testVSwitchName
   */
  vSwitchName?: string;
  static names(): { [key: string]: string } {
    return {
      enableIpv6: 'EnableIpv6',
      ensRegionId: 'EnsRegionId',
      ensRegionIds: 'EnsRegionIds',
      networkId: 'NetworkId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      vSwitchId: 'VSwitchId',
      vSwitchIds: 'VSwitchIds',
      vSwitchName: 'VSwitchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableIpv6: 'boolean',
      ensRegionId: 'string',
      ensRegionIds: { 'type': 'array', 'itemType': 'string' },
      networkId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      vSwitchId: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vSwitchName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ensRegionIds)) {
      $dara.Model.validateArray(this.ensRegionIds);
    }
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

