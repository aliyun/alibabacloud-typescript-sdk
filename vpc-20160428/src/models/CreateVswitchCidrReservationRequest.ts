// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateVSwitchCidrReservationRequestTag } from "./CreateVswitchCidrReservationRequestTag";


export class CreateVSwitchCidrReservationRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run, without performing the actual request. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
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
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the vSwitch is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Resource tags
   */
  tag?: CreateVSwitchCidrReservationRequestTag[];
  /**
   * @remarks
   * The reserved CIDR block of the vSwitch.
   * 
   * *   When **IpVersion** is set to **IPv4**, the reserved CIDR block must be a proper subset of the IPv4 CIDR block of the vSwitch and the subnet mask length of the reserved CIDR block cannot be greater than 28.
   * *   When **IpVersion** is set to **IPv6**, the reserved CIDR block must be a proper subset of the IPv6 CIDR block of the vSwitch and the subnet mask length of the reserved CIDR block cannot be greater than 80.
   * 
   * >  You must specify one of **VSwitchCidrReservationMask** and **VSwitchCidrReservationCidr**.
   * 
   * @example
   * 192.168.1.64/28
   */
  vSwitchCidrReservationCidr?: string;
  /**
   * @remarks
   * The description of the reserved CIDR block. This parameter is empty by default.
   * 
   * The description must be 2 to 256 characters in length. It must start with a letter and cannot start with `http://` or `https://`.
   * 
   * @example
   * ReservationDescription
   */
  vSwitchCidrReservationDescription?: string;
  /**
   * @remarks
   * The subnet mask of the reserved CIDR block.
   * 
   * *   When **IpVersion** is set to **IPv4**, the subnet mask length of the CIDR block must be greater than the IPv4 subnet mask length of the vSwitch and cannot be greater than 28.
   * *   When **IpVersion** is set to **IPv6**, the subnet mask length of the CIDR block must be greater than the IPv6 subnet mask length of the vSwitch and cannot be greater than 80.
   * 
   * >  You must specify one of **VSwitchCidrReservationMask** and **VSwitchCidrReservationCidr**.
   * 
   * @example
   * 28
   */
  vSwitchCidrReservationMask?: string;
  /**
   * @remarks
   * The name of the reserved CIDR block.
   * 
   * The name must be 2 to 128 characters in length and can contain digits, underscores (_), and hyphens (-). It must start with a letter.
   * 
   * @example
   * ReservationName
   */
  vSwitchCidrReservationName?: string;
  /**
   * @remarks
   * The type of reserved CIDR block. Set the value to **prefix**.
   * 
   * >  When a user or a cloud service allocates a CIDR block to an elastic network interface (ENI), the CIDR block must be allocated from the reserved CIDR block. If the reserved CIDR block is exhausted, an error is returned.
   * 
   * @example
   * prefix
   */
  vSwitchCidrReservationType?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which the reserved CIDR block belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-25navfgbue4g****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ipVersion: 'IpVersion',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
      vSwitchCidrReservationCidr: 'VSwitchCidrReservationCidr',
      vSwitchCidrReservationDescription: 'VSwitchCidrReservationDescription',
      vSwitchCidrReservationMask: 'VSwitchCidrReservationMask',
      vSwitchCidrReservationName: 'VSwitchCidrReservationName',
      vSwitchCidrReservationType: 'VSwitchCidrReservationType',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ipVersion: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': CreateVSwitchCidrReservationRequestTag },
      vSwitchCidrReservationCidr: 'string',
      vSwitchCidrReservationDescription: 'string',
      vSwitchCidrReservationMask: 'string',
      vSwitchCidrReservationName: 'string',
      vSwitchCidrReservationType: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

