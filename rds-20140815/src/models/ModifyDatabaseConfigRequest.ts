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
   * rm-t4nnu1my39qr8****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The database name.
   * 
   * >  You can specify only one database name.
   * 
   * This parameter is required.
   * 
   * @example
   * testDB
   */
  DBName?: string;
  /**
   * @remarks
   * The database property that you want to modify.
   * 
   * *   **If you want to modify a property of the database**, set this parameter to the name of the database property.
   * *   **If you want to archive data from the database to an OSS bucket**, specify the database status. If you set this parameter to `covert_online_db_to_cold_storage`, the system converts an online database to a cold storage database. If you set this parameter to `convert_cold_storage_db_to_online`, the system converts a cold storage database to an online database.
   * 
   * This parameter is required.
   * 
   * @example
   * compatibility_level
   */
  databasePropertyName?: string;
  /**
   * @remarks
   * The value of the database property that you want to modify.
   * 
   * *   **If you want to modify a property of the database**, set this parameter to the property value.
   * *   **If you want to archive data from the database to an OSS bucket**, set this parameter to **1**. The system converts a database to a cold storage database or an online database.
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

