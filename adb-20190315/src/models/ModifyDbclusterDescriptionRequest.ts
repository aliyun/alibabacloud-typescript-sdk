// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterDescriptionRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the cluster.
   * 
   * *   The description cannot start with `http://` or `https`.
   * *   The description must be 2 to 256 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * adb_test
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp11q28kvl688****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterDescription: 'DBClusterDescription',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterDescription: 'string',
      DBClusterId: 'string',
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

