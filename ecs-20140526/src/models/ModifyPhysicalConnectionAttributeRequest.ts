// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPhysicalConnectionAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The circuit code of the physical connection, provided by the line operator.
   */
  circuitCode?: string;
  /**
   * @remarks
   * A client-generated token to ensure the idempotency of the request.
   * 
   * The token must be unique across requests. The client token can contain only ASCII characters and cannot exceed 64 characters in length.
   */
  clientToken?: string;
  /**
   * @remarks
   * The new description of the physical connection.
   */
  description?: string;
  /**
   * @remarks
   * The line operator that provides the physical connection.
   */
  lineOperator?: string;
  /**
   * @remarks
   * The new name of the physical connection.
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The peer location of the physical connection.
   */
  peerLocation?: string;
  /**
   * @remarks
   * The ID of the physical connection.
   * 
   * This parameter is required.
   */
  physicalConnectionId?: string;
  /**
   * @remarks
   * The port type of the physical connection.
   */
  portType?: string;
  /**
   * @remarks
   * The ID of the redundant physical connection.
   */
  redundantPhysicalConnectionId?: string;
  /**
   * @remarks
   * The ID of the region where the physical connection is located.
   * 
   * To get the latest list of regions, call the `DescribeRegions` operation.
   * 
   * This parameter is required.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The client-side IP address or CIDR block in your data center.
   * 
   * This parameter is used only for outbound traffic shaping.
   */
  userCidr?: string;
  /**
   * @remarks
   * The bandwidth of the physical connection.
   * 
   * Unit: Mbit/s.
   */
  bandwidth?: number;
  static names(): { [key: string]: string } {
    return {
      circuitCode: 'CircuitCode',
      clientToken: 'ClientToken',
      description: 'Description',
      lineOperator: 'LineOperator',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      peerLocation: 'PeerLocation',
      physicalConnectionId: 'PhysicalConnectionId',
      portType: 'PortType',
      redundantPhysicalConnectionId: 'RedundantPhysicalConnectionId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      userCidr: 'UserCidr',
      bandwidth: 'bandwidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      circuitCode: 'string',
      clientToken: 'string',
      description: 'string',
      lineOperator: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      peerLocation: 'string',
      physicalConnectionId: 'string',
      portType: 'string',
      redundantPhysicalConnectionId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

