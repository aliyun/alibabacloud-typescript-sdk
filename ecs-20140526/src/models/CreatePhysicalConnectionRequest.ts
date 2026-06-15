// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePhysicalConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The access point ID. You can call the `DescribeAccessPoints` operation to obtain a list of available access points.
   * 
   * This parameter is required.
   */
  accessPointId?: string;
  /**
   * @remarks
   * The circuit code provided by the carrier.
   */
  circuitCode?: string;
  /**
   * @remarks
   * A client-generated token that you can use to ensure the idempotency of the request. This token must be unique across requests, contain only ASCII characters, and be no more than 64 characters long.
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the physical connection. The description must be 2 to 256 characters long and cannot start with `http://` or `https://`.
   */
  description?: string;
  /**
   * @remarks
   * The carrier that provides the physical connection. Valid values: `CT` (China Telecom), `CU` (China Unicom), `CM` (China Mobile), `CO` (other Chinese carriers), and `AL` (Alibaba Cloud).
   * 
   * This parameter is required.
   */
  lineOperator?: string;
  /**
   * @remarks
   * The name of the physical connection. The name must be 2 to 128 characters long. It must start with a letter and can contain letters, digits, underscores (`_`), and hyphens (`-`).
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The physical location of your on-premises data center.
   * 
   * This parameter is required.
   */
  peerLocation?: string;
  /**
   * @remarks
   * The port type of the physical connection. You cannot change this parameter after the physical connection is created. Valid values: `1000Base-LX` (1 Gbit/s), `10GBase-LR` (10 Gbit/s), and `40GBase-LR` (40 Gbit/s).
   */
  portType?: string;
  /**
   * @remarks
   * The ID of the redundant physical connection. The redundant physical connection must be in the `Allocated`, `Confirmed`, or `Enabled` state.
   */
  redundantPhysicalConnectionId?: string;
  /**
   * @remarks
   * The ID of the region for the physical connection. You can call the `DescribeRegions` operation to obtain the latest list of regions.
   * 
   * This parameter is required.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the physical connection. Valid values: `VPC` and `VBR`. The default value is `VPC`. This parameter is available only to whitelisted users.
   */
  type?: string;
  /**
   * @remarks
   * The user CIDR block. This parameter is required when `Type` is set to `VPC`. The CIDR block must be a private IPv4 block. Valid CIDR blocks include the following blocks and their subnets: `10.0.0.0/8`, `172.16.0.0/12`, and `192.168.0.0/16`.
   */
  userCidr?: string;
  /**
   * @remarks
   * The bandwidth of the physical connection in Mbit/s. The value must be an integer that ranges from 1 to 10,240.
   */
  bandwidth?: number;
  static names(): { [key: string]: string } {
    return {
      accessPointId: 'AccessPointId',
      circuitCode: 'CircuitCode',
      clientToken: 'ClientToken',
      description: 'Description',
      lineOperator: 'LineOperator',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      peerLocation: 'PeerLocation',
      portType: 'PortType',
      redundantPhysicalConnectionId: 'RedundantPhysicalConnectionId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      type: 'Type',
      userCidr: 'UserCidr',
      bandwidth: 'bandwidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointId: 'string',
      circuitCode: 'string',
      clientToken: 'string',
      description: 'string',
      lineOperator: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      peerLocation: 'string',
      portType: 'string',
      redundantPhysicalConnectionId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      type: 'string',
      userCidr: 'string',
      bandwidth: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

