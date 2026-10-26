// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOnlineDatabaseTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The consistency check method used after the database is opened. Valid values:
   * * **SyncExecuteDBCheck**: Executes the database check synchronously.
   * * **AsyncExecuteDBCheck**: Executes the database check asynchronously.
   * 
   * > Compatible with SQL Server 2008 R2.
   * 
   * This parameter is required.
   * 
   * @example
   * AsyncExecuteDBCheck
   */
  checkDBMode?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request and prevent duplicate submissions. You can generate the value of this parameter on the client side. The value must be unique across different requests and can contain a maximum of 64 ASCII characters. The value cannot contain non-ASCII characters.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * Instance ID of the instance. You can call the DescribeDBInstances operation to query instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * testDB
   */
  DBName?: string;
  /**
   * @remarks
   * Specifies whether to retain the database-level and table-level Change Data Capture (CDC) settings and the data in change tables. Regardless of the value of this parameter, CDC jobs are not rebuilt.
   * 
   * @example
   * true
   */
  keepCDC?: boolean;
  /**
   * @remarks
   * The ID of the migration task.
   * 
   * This parameter is required.
   * 
   * @example
   * 5652255443
   */
  migrateTaskId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      checkDBMode: 'CheckDBMode',
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      DBName: 'DBName',
      keepCDC: 'KeepCDC',
      migrateTaskId: 'MigrateTaskId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkDBMode: 'string',
      clientToken: 'string',
      DBInstanceId: 'string',
      DBName: 'string',
      keepCDC: 'boolean',
      migrateTaskId: 'string',
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

