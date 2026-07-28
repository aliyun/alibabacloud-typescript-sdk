// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVSwitchCidrReservationsResponseBodyVSwitchCidrReservationsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * FinanceJoshua
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVSwitchCidrReservationsResponseBodyVSwitchCidrReservations extends $dara.Model {
  /**
   * @remarks
   * The number of used prefix CIDR blocks in the reserved CIDR block for a vSwitch.
   * 
   * @example
   * 6
   */
  assignedCidrCount?: number;
  /**
   * @remarks
   * The number of active prefix CIDR blocks in the reserved CIDR block for a vSwitch.
   * 
   * @example
   * 10
   */
  availableCidrCount?: number;
  /**
   * @remarks
   * The time when the reserved CIDR block was created.
   * 
   * @example
   * 2023-03-14T10:02:37Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The IP version of the reserved CIDR block for a vSwitch. Valid values:
   * 
   * - **IPv4** (default): IPv4.
   * - **IPv6**: IPv6.
   * 
   * @example
   * IPv4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The status of the reserved CIDR block. Valid values:
   * 
   * - **Assigning**: being allocated.
   * - **Assigned**: allocated.
   * - **Releasing**: being released.
   * - **Released**: released.
   * 
   * @example
   * Assigned
   */
  status?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: ListVSwitchCidrReservationsResponseBodyVSwitchCidrReservationsTags[];
  /**
   * @remarks
   * The type of the reserved CIDR block for a vSwitch. Valid values: **prefix** (default), which indicates that addresses are allocated by CIDR block.
   * 
   * @example
   * prefix
   */
  type?: string;
  /**
   * @remarks
   * The reserved CIDR block for a vSwitch.
   * 
   * @example
   * 192.168.1.64/28
   */
  vSwitchCidrReservationCidr?: string;
  /**
   * @remarks
   * The description of the reserved CIDR block for a vSwitch.
   * 
   * @example
   * ReservationDescription
   */
  vSwitchCidrReservationDescription?: string;
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
   * The name of the reserved CIDR block for a vSwitch.
   * 
   * @example
   * ReservationName
   */
  vSwitchCidrReservationName?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which the reserved CIDR block for a vSwitch belongs.
   * 
   * @example
   * vsw-25navfgbue4g****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC to which the reserved CIDR block for a vSwitch belongs.
   * 
   * @example
   * vpc-bp1wdz2pdhgurz1od****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      assignedCidrCount: 'AssignedCidrCount',
      availableCidrCount: 'AvailableCidrCount',
      creationTime: 'CreationTime',
      ipVersion: 'IpVersion',
      status: 'Status',
      tags: 'Tags',
      type: 'Type',
      vSwitchCidrReservationCidr: 'VSwitchCidrReservationCidr',
      vSwitchCidrReservationDescription: 'VSwitchCidrReservationDescription',
      vSwitchCidrReservationId: 'VSwitchCidrReservationId',
      vSwitchCidrReservationName: 'VSwitchCidrReservationName',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignedCidrCount: 'number',
      availableCidrCount: 'number',
      creationTime: 'string',
      ipVersion: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListVSwitchCidrReservationsResponseBodyVSwitchCidrReservationsTags },
      type: 'string',
      vSwitchCidrReservationCidr: 'string',
      vSwitchCidrReservationDescription: 'string',
      vSwitchCidrReservationId: 'string',
      vSwitchCidrReservationName: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVSwitchCidrReservationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page.
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
  /**
   * @remarks
   * The list of reserved CIDR blocks for a vSwitch.
   */
  vSwitchCidrReservations?: ListVSwitchCidrReservationsResponseBodyVSwitchCidrReservations[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vSwitchCidrReservations: 'VSwitchCidrReservations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      vSwitchCidrReservations: { 'type': 'array', 'itemType': ListVSwitchCidrReservationsResponseBodyVSwitchCidrReservations },
    };
  }

  validate() {
    if(Array.isArray(this.vSwitchCidrReservations)) {
      $dara.Model.validateArray(this.vSwitchCidrReservations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

