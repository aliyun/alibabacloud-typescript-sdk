// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TerminateMigrateTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraDB RDS for SQL Server instance. You can call DescribeDBInstances to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-bp159vf****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The ID of the backup migration task. You can call DescribeMigrateTasks to query the task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 56254****
   */
  migrateTaskId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      migrateTaskId: 'MigrateTaskId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      migrateTaskId: 'string',
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

