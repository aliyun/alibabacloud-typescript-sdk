// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVSwitchCidrReservationUsageResponseBodyCidrReservationUsages extends $dara.Model {
  /**
   * @remarks
   * The IP prefix that is allocated from the current reserved CIDR block to elastic network interfaces (ENIs) (network interface controller (NIC)).
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
   * The instance ID of the elastic network interfaces (ENIs) (network interface controller (NIC)) allocated from the reserved CIDR block.
   * 
   * @example
   * eni-bp14v2sdd3v8htln****
   */
  resourceId?: string;
  /**
   * @remarks
   * The instance type of the resource allocated from the reserved CIDR block. Valid value: **NetworkInterface**, which indicates elastic network interfaces (ENIs) (network interface controller (NIC)).
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
   * The list of the reserved CIDR block for a vSwitch that is allocated and used.
   */
  cidrReservationUsages?: GetVSwitchCidrReservationUsageResponseBodyCidrReservationUsages[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used to retrieve the next page of results. Valid values:
   * - If **NextToken** is empty, no subsequent query is available.
   * - If **NextToken** returns a value, the value indicates the token for the next query.
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
   * The total number of entries.
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

