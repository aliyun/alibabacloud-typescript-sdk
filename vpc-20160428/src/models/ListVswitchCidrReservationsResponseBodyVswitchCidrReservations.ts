// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListVSwitchCidrReservationsResponseBodyVSwitchCidrReservationsTags } from "./ListVswitchCidrReservationsResponseBodyVswitchCidrReservationsTags";


export class ListVSwitchCidrReservationsResponseBodyVSwitchCidrReservations extends $dara.Model {
  /**
   * @remarks
   * The number of used prefixes in the reserved CIDR block.
   * 
   * @example
   * 6
   */
  assignedCidrCount?: number;
  /**
   * @remarks
   * The number of available prefixes in the reserved CIDR block.
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
   * The IP version of the reserved CIDR block. Valid values:
   * 
   * *   **IPv4** (default)
   * *   **IPv6**
   * 
   * @example
   * IPv4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The status of the reserved CIDR block. Valid values:
   * 
   * *   **Assigning**
   * *   **Assigned**
   * *   **Releasing**
   * *   **Released**
   * 
   * @example
   * Assigned
   */
  status?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: ListVSwitchCidrReservationsResponseBodyVSwitchCidrReservationsTags[];
  /**
   * @remarks
   * The type of the reserved CIDR block. Valid value: **prefix**. CIDR blocks are allocated from the reserved CIDR block.
   * 
   * @example
   * prefix
   */
  type?: string;
  /**
   * @remarks
   * The reserved CIDR block.
   * 
   * @example
   * 192.168.1.64/28
   */
  vSwitchCidrReservationCidr?: string;
  /**
   * @remarks
   * The description of the reserved CIDR block.
   * 
   * @example
   * ReservationDescription
   */
  vSwitchCidrReservationDescription?: string;
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
   * The name of the reserved CIDR block.
   * 
   * @example
   * ReservationName
   */
  vSwitchCidrReservationName?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which the reserved CIDR block belongs.
   * 
   * @example
   * vsw-25navfgbue4g****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) to which the reserved CIDR block belongs.
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

