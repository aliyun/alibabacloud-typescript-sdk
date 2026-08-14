// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVSwitchCidrReservationRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. You can specify up to 20 tag keys. If you specify this parameter, the value cannot be an empty string.
   * 
   * A tag key can be up to 128 characters in length. It cannot start with aliyun or acs: and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify up to 20 tag values. If you specify this parameter, the value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length. It cannot start with aliyun or acs: and cannot contain `http://` or `https://`.
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

export class CreateVSwitchCidrReservationRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * - **true**: sends a check request without creating the reserved CIDR block for a vSwitch. The system checks whether the required parameters are specified, the request format is valid, and the service limits are not exceeded. If the check fails, the corresponding error message is returned. If the check passes, the `DryRunOperation` error code is returned.
   * - **false** (default): sends a Normal request. After the check passes, an HTTP 2xx status code is returned and the vSwitch reserved CIDR block for a vSwitch is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The expected number of IP prefixes to reserve. Valid values: 1 to 32.
   * 
   * @example
   * 1
   */
  ipPrefixNumber?: number;
  /**
   * @remarks
   * The IP version of the reserved CIDR block for a vSwitch. Valid values:
   * 
   * - **IPv4** (default)
   * - **IPv6**
   * 
   * > You do not need to specify this parameter when creating an IPv4 reserved CIDR block for a vSwitch. This parameter is required when creating an IPv6 reserved CIDR block for a vSwitch.
   * 
   * @example
   * IPv4
   */
  ipVersion?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the vSwitch.
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
   * The resource tags.
   */
  tag?: CreateVSwitchCidrReservationRequestTag[];
  /**
   * @remarks
   * The reserved CIDR block for a vSwitch.
   * 
   * - If **IpVersion** is set to **IPv4**, the reserved CIDR block for a vSwitch must be a proper subset of the IPv4 CIDR block of the vSwitch, and the mask length cannot exceed 28.
   * - If **IpVersion** is set to **IPv6**, the reserved CIDR block for a vSwitch must be a proper subset of the IPv6 CIDR block of the vSwitch, and the mask length cannot exceed 80.
   * 
   * > - You must specify either the **VSwitchCidrReservationMask** parameter or the **VSwitchCidrReservationCidr** parameter.
   * > - The reserved CIDR block cannot contain the system reserved IP addresses of the vSwitch.
   * 
   * @example
   * 192.168.1.64/28
   */
  vSwitchCidrReservationCidr?: string;
  /**
   * @remarks
   * The description of the reserved CIDR block for a vSwitch. If you leave this parameter empty, the default value is empty.
   * 
   * The description must be 1 to 256 characters in length and must start with a letter or Chinese character. It cannot start with `http://` or `https://`.
   * 
   * @example
   * ReservationDescription
   */
  vSwitchCidrReservationDescription?: string;
  /**
   * @remarks
   * The mask of the reserved CIDR block for a vSwitch.
   * 
   * - If **IpVersion** is set to **IPv4**, the mask length of the reserved CIDR block must be at least 2 bits longer than the IPv4 CIDR block mask of the vSwitch and cannot exceed 28.
   * - If **IpVersion** is set to **IPv6**, the mask length of the reserved CIDR block must be longer than the IPv6 CIDR block mask of the vSwitch and cannot exceed 80.
   * 
   * > - You must specify either the **VSwitchCidrReservationMask** parameter or the **VSwitchCidrReservationCidr** parameter.
   * > - The reserved CIDR block cannot contain the system reserved IP addresses of the vSwitch.
   * 
   * @example
   * 28
   */
  vSwitchCidrReservationMask?: string;
  /**
   * @remarks
   * The name of the reserved CIDR block for a vSwitch.
   * 
   * The name must be 1 to 128 characters in length and must start with a letter or Chinese character. It can contain digits, underscores (_), and hyphens (-). It cannot start with `http://` or `https://`.
   * 
   * @example
   * ReservationName
   */
  vSwitchCidrReservationName?: string;
  /**
   * @remarks
   * The type of the reserved CIDR block for a vSwitch. Valid values: **prefix**, which indicates that IP addresses are allocated by CIDR block.
   * 
   * > When users or cloud services automatically assign CIDR blocks to elastic network interfaces (ENIs), the CIDR blocks must be allocated from the reserved CIDR block for a vSwitch. If the IP addresses in the reserved CIDR block for a vSwitch are exhausted, the system returns an error.
   * 
   * @example
   * prefix
   */
  vSwitchCidrReservationType?: string;
  /**
   * @remarks
   * The ID of the vSwitch for which you want to create a reserved CIDR block for a vSwitch.
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
      ipPrefixNumber: 'IpPrefixNumber',
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
      ipPrefixNumber: 'number',
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

