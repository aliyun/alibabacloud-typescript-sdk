// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGrantVSwitchesToCenResponseBodyVSwitches extends $dara.Model {
  /**
   * @remarks
   * The vSwitch instance ID.
   * 
   * @example
   * vsw-bp1194lh263wx1gsk****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The name of the vSwitch.
   * 
   * @example
   * nametest
   */
  vSwitchName?: string;
  /**
   * @remarks
   * The VPC-connected instance ID to which the vSwitch belongs.
   * 
   * @example
   * vpc-bp12ge2tq5gzdc915****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID of the vSwitch.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      vSwitchName: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGrantVSwitchesToCenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the list.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for paging.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A9288C78-881A-5D30-A8A9-68E05EE0A086
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries in the list.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of vSwitch information.
   */
  vSwitches?: ListGrantVSwitchesToCenResponseBodyVSwitches[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vSwitches: 'VSwitches',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      vSwitches: { 'type': 'array', 'itemType': ListGrantVSwitchesToCenResponseBodyVSwitches },
    };
  }

  validate() {
    if(Array.isArray(this.vSwitches)) {
      $dara.Model.validateArray(this.vSwitches);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

