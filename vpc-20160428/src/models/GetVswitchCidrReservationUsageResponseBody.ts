// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVSwitchCidrReservationUsageResponseBodyCidrReservationUsages extends $dara.Model {
  /**
   * @remarks
   * The prefix CIDR block allocated from the current reserved CIDR block for a vSwitch to an elastic network interface (ENI).
   * 
   * @example
   * 192.168.1.64/28
   */
  ipPrefixCidr?: string;
  /**
   * @remarks
   * The instance ID of the reserved CIDR block allocated by prefix.
   * 
   * @example
   * vcr-bp1m12saqteraw3rp****
   */
  ipPrefixId?: string;
  /**
   * @remarks
   * The instance ID of the elastic network interface (ENI) allocated from the reserved CIDR block for a vSwitch.
   * 
   * @example
   * eni-bp14v2sdd3v8htln****
   */
  resourceId?: string;
  /**
   * @remarks
   * The instance type allocated from the reserved CIDR block for a vSwitch. Valid values: **NetworkInterface**, which indicates an elastic network interface (ENI).
   * 
   * @example
   * NetworkInterface
   */
  resourceType?: string;
  /**
   * @remarks
   * The instance ID of the reserved CIDR block for a vSwitch.
   * 
   * @example
   * vcr-bp1m12saqteraw3rp****
   */
  vSwitchCidrReservationId?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which the reserved CIDR block belongs.
   * 
   * @example
   * vsw-25navfgbue4g****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      ipPrefixCidr: 'IpPrefixCidr',
      ipPrefixId: 'IpPrefixId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      vSwitchCidrReservationId: 'VSwitchCidrReservationId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipPrefixCidr: 'string',
      ipPrefixId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      vSwitchCidrReservationId: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVSwitchCidrReservationUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of allocated reserved CIDR blocks for a vSwitch.
   */
  cidrReservationUsages?: GetVSwitchCidrReservationUsageResponseBodyCidrReservationUsages[];
  /**
   * @remarks
   * The number of entries per page in a paged query.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Valid values:
   * - If **NextToken** is empty, no subsequent query exists.
   * - If **NextToken** is returned, the value indicates the token for the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 54B48E3D-DF70-471B-AA93-08E683A1B45
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cidrReservationUsages: 'CidrReservationUsages',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrReservationUsages: { 'type': 'array', 'itemType': GetVSwitchCidrReservationUsageResponseBodyCidrReservationUsages },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cidrReservationUsages)) {
      $dara.Model.validateArray(this.cidrReservationUsages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

