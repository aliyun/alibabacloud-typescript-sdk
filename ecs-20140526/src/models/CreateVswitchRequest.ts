// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVSwitchRequest extends $dara.Model {
  /**
   * @remarks
   * The CIDR block for the vSwitch.\\
   * It must be a subnet of the VPC\\"s CIDR block and must not overlap with the CIDR blocks of other vSwitches in the same VPC.\\
   * 
   * This parameter is required.
   */
  cidrBlock?: string;
  /**
   * @remarks
   * A client token to ensure the idempotence of the request. The token must be unique across requests, contain only ASCII characters, and not exceed 64 characters in length.
   */
  clientToken?: string;
  /**
   * @remarks
   * The description for the vSwitch.\\
   * It must be 2 to 256 characters long and must not start with `http://` or `https://`.\\
   */
  description?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region in which to create the vSwitch.\\
   * Call the `DescribeRegions` operation to get a list of available regions.\\
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The name for the vSwitch.\\
   * The name must be 2 to 128 characters long, start with a letter, and contain only letters, digits, underscores (_), and hyphens (-).\\
   * If unspecified, the name defaults to the vSwitch ID.\\
   * \\
   */
  vSwitchName?: string;
  /**
   * @remarks
   * The ID of the VPC in which to create the vSwitch.
   * 
   * This parameter is required.
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the zone in which to create the vSwitch.\\
   * Call the `DescribeZones` operation to get a list of available zones.\\
   * 
   * This parameter is required.
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      clientToken: 'ClientToken',
      description: 'Description',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vSwitchName: 'VSwitchName',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      clientToken: 'string',
      description: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

