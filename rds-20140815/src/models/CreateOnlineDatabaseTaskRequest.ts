// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOnlineDatabaseTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The consistency check method after the database is open. Valid values:
   * 
   * *   **SyncExecuteDBCheck**: synchronous database check
   * *   **AsyncExecuteDBCheck**: asynchronous database check
   * 
   * > The check methods are supported for RDS instances that run SQL Server 2008 R2.
   * 
   * This parameter is required.
   * 
   * @example
   * AsyncExecuteDBCheck
   */
  checkDBMode?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5xxxxxxx
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

