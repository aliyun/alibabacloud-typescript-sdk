// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPhysicalConnectionAttributeRequest extends $dara.Model {
  circuitCode?: string;
  clientToken?: string;
  description?: string;
  lineOperator?: string;
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  peerLocation?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  physicalConnectionId?: string;
  portType?: string;
  redundantPhysicalConnectionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  userCidr?: string;
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

