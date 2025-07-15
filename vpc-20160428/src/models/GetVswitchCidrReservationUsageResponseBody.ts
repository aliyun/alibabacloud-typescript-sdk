// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVSwitchCidrReservationUsageResponseBodyCidrReservationUsages extends $dara.Model {
  /**
   * @remarks
   * The CIDR block allocated to the ENI from the reserved CIDR block.
   * 
   * @example
   * 192.168.1.64/28
   */
  ipPrefixCidr?: string;
  /**
   * @remarks
   * The ID of the reserved CIDR block.
   * 
   * @example
   * vcr-bp1m12saqteraw3rp****
   */
  ipPrefixId?: string;
  /**
   * @remarks
   * The ID of the elastic network interface (ENI) whose CIDR block is allocated from the reserved CIDR block.
   * 
   * @example
   * eni-bp14v2sdd3v8htln****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource to which a CIDR block is allocated from the reserved CIDR block. Only **NetworkInterface** may be returned, which indicates an ENI.
   * 
   * @example
   * NetworkInterface
   */
  resourceType?: string;
  /**
   * @remarks
   * The ID of the reserved CIDR block.
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
   * A list of reserved CIDR blocks that are in use.
   */
  cidrReservationUsages?: GetVSwitchCidrReservationUsageResponseBodyCidrReservationUsages[];
  /**
   * @remarks
   * The number of entries to return per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If **NextToken** is empty, no next page exists.
   * *   If a value is returned for **NextToken**, the value is the token that determines the start point of the next query.
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

