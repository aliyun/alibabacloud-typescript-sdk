// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateVSwitchRequestTag } from "./CreateVswitchRequestTag";


export class CreateVSwitchRequest extends $dara.Model {
  /**
   * @remarks
   * The CIDR block of the vSwitch. Take note of the following limits:
   * 
   * *   The subnet mask of the CIDR block must be 16 to 29 bits in length.
   * *   The CIDR block of the vSwitch must fall within the CIDR block of the VPC to which the vSwitch belongs.
   * *   The CIDR block of a vSwitch cannot be the same as the destination CIDR block in a route entry of the VPC. However, it can be a subset of the destination CIDR block.
   * 
   * This parameter is required.
   * 
   * @example
   * 172.16.0.0/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that it is unique among all requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, **ClientToken** is set to the value of **RequestId**. The value of **RequestId** may be different for each API request.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe63****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the vSwitch.
   * 
   * The description must be 1 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * vSwitch
   */
  description?: string;
  /**
   * @remarks
   * The last eight bits of the IPv6 CIDR block of the vSwitch. Valid values: **0** to **255**.
   * 
   * @example
   * 12
   */
  ipv6CidrBlock?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the vSwitch.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tag of the resource.
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
   * The ID of the VPC where you want to create the vSwitch.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-257gqcdfvx6n****
   */
  vpcId?: string;
  /**
   * @remarks
   * The IPv6 CIDR block of the VPC.
   * 
   * @example
   * 2408:XXXX:0:6a::/56
   */
  vpcIpv6CidrBlock?: string;
  /**
   * @remarks
   * The zone ID of the vSwitch.
   * 
   * You can call the [DescribeZones](https://help.aliyun.com/document_detail/36064.html) operation to query the most recent zone list.
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
      clientToken: 'ClientToken',
      description: 'Description',
      ipv6CidrBlock: 'Ipv6CidrBlock',
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
      clientToken: 'string',
      description: 'string',
      ipv6CidrBlock: 'number',
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

