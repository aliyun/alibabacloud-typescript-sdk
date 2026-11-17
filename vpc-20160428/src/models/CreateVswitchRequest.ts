// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVSwitchRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. You can specify at most 20 tag keys. If you specify this parameter, you cannot specify an empty string.
   * 
   * A tag key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceJoshua
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify at most 20 tag values. If you specify this parameter, you can specify an empty string.
   * 
   * A tag value can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
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

export class CreateVSwitchRequest extends $dara.Model {
  /**
   * @remarks
   * The CIDR block of the vSwitch. The CIDR block of the vSwitch must meet the following requirements: 
   * 
   * - The mask length of the vSwitch CIDR block ranges from 16 to 29 bits.  
   * 
   * - The vSwitch CIDR block must be a subset of the VPC CIDR block. 
   * 
   * - The vSwitch CIDR block cannot be the same as the destination CIDR block of a route in the VPC. However, it can be a subset of the destination CIDR block. 
   * 
   * - The vSwitch CIDR block cannot fall within the following reserved address ranges: 100.64.0.0/10, 127.0.0.0/8, 169.254.0.0/16, and 224.0.0.0/4.
   * 
   * > After a vSwitch is created, you cannot modify its CIDR block.
   * 
   * @example
   * 172.16.0.0/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The IPv4 CIDR block mask of the vSwitch.
   * > The mask length of the IPv4 CIDR block of the vSwitch ranges from 16 to 29 bits. You must specify at least one of CidrBlock and CidrMask.
   * 
   * @example
   * 24
   */
  cidrMask?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that the value is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request may be different.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe63****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the vSwitch.  
   * 
   * The description must be 1 to 256 characters in length, and cannot start with `http://` or `https://`.
   * 
   * @example
   * vSwitch
   */
  description?: string;
  /**
   * @remarks
   * The last 8 bits of the IPv6 CIDR block of the vSwitch. Valid values: **0** to **255**.
   * You can specify this parameter to assign an IPv6 CIDR block to the vSwitch only when IPv6 is enabled for the VPC to which the vSwitch belongs. After the IPv6 CIDR block is assigned, you cannot modify it. Make sure that the IPv6 CIDR block does not overlap with the CIDR blocks of other vSwitches in the same VPC.
   * 
   * @example
   * 12
   */
  ipv6CidrBlock?: number;
  /**
   * @remarks
   * The subnet mask of the IPv6 CIDR block of the vSwitch. You can specify this parameter to assign an IPv6 CIDR block to the vSwitch only when IPv6 is enabled for the VPC to which the vSwitch belongs.
   * 
   * > Only 64 is supported.
   * 
   * @example
   * 64
   */
  ipv6CidrMask?: number;
  /**
   * @remarks
   * Specifies whether to create an IPv6-only vSwitch. Valid values:
   * - false (default): creates a regular vSwitch (not IPv6-only).
   * 
   * - true: creates an IPv6-only vSwitch.
   * 
   * @example
   * false
   */
  ipv6Only?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the vSwitch to be created.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags of the resource.
   */
  tag?: CreateVSwitchRequestTag[];
  /**
   * @remarks
   * The name of the vSwitch. 
   * 
   * The name must be 1 to 128 characters in length, and cannot start with `http://` or `https://`.
   * 
   * @example
   * vSwitch-1
   */
  vSwitchName?: string;
  /**
   * @remarks
   * The ID of the VPC to which the vSwitch to be created belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-257gqcdfvx6n****
   */
  vpcId?: string;
  /**
   * @remarks
   * The IPv6 CIDR block of the VPC. If the VPC to which the vSwitch belongs has multiple IPv6 CIDR blocks, you can specify this parameter to specify the IPv6 CIDR block to which the vSwitch belongs. If you do not specify this parameter, the IPv6 CIDR block assigned when IPv6 is enabled for the VPC is used.
   * 
   * @example
   * 2408:XXXX:0:6a::/56
   */
  vpcIpv6CidrBlock?: string;
  /**
   * @remarks
   * The zone ID of the vSwitch to be created.
   * 
   * You can call the [DescribeZones](https://help.aliyun.com/document_detail/36064.html) operation to query zone IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      cidrMask: 'CidrMask',
      clientToken: 'ClientToken',
      description: 'Description',
      ipv6CidrBlock: 'Ipv6CidrBlock',
      ipv6CidrMask: 'Ipv6CidrMask',
      ipv6Only: 'Ipv6Only',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
      vSwitchName: 'VSwitchName',
      vpcId: 'VpcId',
      vpcIpv6CidrBlock: 'VpcIpv6CidrBlock',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      cidrMask: 'number',
      clientToken: 'string',
      description: 'string',
      ipv6CidrBlock: 'number',
      ipv6CidrMask: 'number',
      ipv6Only: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': CreateVSwitchRequestTag },
      vSwitchName: 'string',
      vpcId: 'string',
      vpcIpv6CidrBlock: 'string',
      zoneId: 'string',
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

