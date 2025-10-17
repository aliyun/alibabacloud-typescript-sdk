// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FailoverDBClusterZonalRequest extends $dara.Model {
  /**
   * @example
   * 6000170000591aed949d0f54a343f1a4233c1e7d1c5******
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * false
   */
  rollBackForDisaster?: boolean;
  /**
   * @example
   * pi-***********
   */
  targetDBNodeId?: string;
  /**
   * @example
   * Primary
   */
  targetZoneType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      rollBackForDisaster: 'RollBackForDisaster',
      targetDBNodeId: 'TargetDBNodeId',
      targetZoneType: 'TargetZoneType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      rollBackForDisaster: 'boolean',
      targetDBNodeId: 'string',
      targetZoneType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

