// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestartDBNodeZonalRequest extends $dara.Model {
  /**
   * @remarks
   * A client token to ensure request idempotence. Generate a unique token for each request. The token must be case-sensitive and up to 64 ASCII characters long.
   * 
   * @example
   * 6000170000591aed949d0f54a343f1a4233c1e7d1c5c******
   */
  clientToken?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The cluster node ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pi-*************
   */
  DBNodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBClusterId: 'DBClusterId',
      DBNodeId: 'DBNodeId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBClusterId: 'string',
      DBNodeId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

