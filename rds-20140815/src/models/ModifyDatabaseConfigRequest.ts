// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDatabaseConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-t4nnu1my39q******
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The database name.
   * 
   * > You cannot specify multiple database names.
   * 
   * This parameter is required.
   * 
   * @example
   * testDB
   */
  DBName?: string;
  /**
   * @remarks
   * The database attribute to be modified.
   * 
   * - **Modify database attributes feature**: Specify the name of the attribute for the destination database.
   * - **Data archiving to OSS feature**: Specify the status of the destination database. Set the value to `covert_online_db_to_cold_storage` to convert an online database to a cold storage database, or set the value to `convert_cold_storage_db_to_online` to convert a cold storage database to an online database.
   * 
   * This parameter is required.
   * 
   * @example
   * compatibility_level
   */
  databasePropertyName?: string;
  /**
   * @remarks
   * The expected value of the database attribute.
   * - **Modify database attributes feature**: Specify the value of the attribute for the destination database.
   * - **Data archiving to OSS feature**: Set the value to **1** to convert the destination database to a cold storage or online state.
   * 
   * This parameter is required.
   * 
   * @example
   * 150
   */
  databasePropertyValue?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      DBName: 'DBName',
      databasePropertyName: 'DatabasePropertyName',
      databasePropertyValue: 'DatabasePropertyValue',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      DBName: 'string',
      databasePropertyName: 'string',
      databasePropertyValue: 'string',
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

