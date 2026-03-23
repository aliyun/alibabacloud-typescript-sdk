// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOnlineDatabaseTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  checkDBMode?: string;
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBName?: string;
  /**
   * @remarks
   * This parameter is required.
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

