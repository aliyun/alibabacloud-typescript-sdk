// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVSwitchesResponseBodyVSwitches extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the vSwitch is the default vSwitch. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * false
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The state of the vSwitch. Valid values:
   * 
   * *   `Pending`: The vSwitch is being configured.
   * *   `Available`: The vSwitch is available.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1g24p9no0iqir46****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The name of the vSwitch.
   * 
   * @example
   * vsw-test
   */
  vSwitchName?: string;
  /**
   * @remarks
   * The ID of the VPC to which the vSwitch belongs.
   * 
   * @example
   * vpc-bp17gig441u0msmd6****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone to which the switch belongs.
   * 
   * @example
   * cn-hangzhou-k
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      isDefault: 'IsDefault',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDefault: 'boolean',
      status: 'string',
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

export class DescribeVSwitchesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * This parameter is required.
   * 
   * @example
   * “”
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BD65C0AD-D3C6-48D3-8D93-38D2015C****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of vSwitches that are deployed in the VPC in the region. This parameter is optional and is not returned by default.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  /**
   * @remarks
   * The available vSwitches.
   */
  vSwitches?: DescribeVSwitchesResponseBodyVSwitches[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vSwitches: 'VSwitches',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      vSwitches: { 'type': 'array', 'itemType': DescribeVSwitchesResponseBodyVSwitches },
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

