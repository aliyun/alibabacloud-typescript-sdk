// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSyndbRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp158i5wvj436****
   */
  dbClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The name of the database in the ApsaraDB RDS for MySQL instance. The database is used for data synchronization.
   * 
   * This parameter is required.
   * 
   * @example
   * database
   */
  synDb?: string;
  static names(): { [key: string]: string } {
    return {
      dbClusterId: 'DbClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      synDb: 'SynDb',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      synDb: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

