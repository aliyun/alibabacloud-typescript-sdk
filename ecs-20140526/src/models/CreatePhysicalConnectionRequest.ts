// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePhysicalConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  accessPointId?: string;
  circuitCode?: string;
  clientToken?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  lineOperator?: string;
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  peerLocation?: string;
  portType?: string;
  redundantPhysicalConnectionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  type?: string;
  userCidr?: string;
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

