// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestoreTableRequest extends $dara.Model {
  /**
   * @remarks
   * The backup set ID. You can call the DescribeBackups operation to query the backup set list.
   * 
   * > You must specify at least one of **BackupId** and **RestoreTime**.
   * 
   * @example
   * 902****
   */
  backupId?: string;
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
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Specifies whether to enable fast restoration for individual databases and tables. Valid values:
   * * **true**: Enabled.
   * * **false**: Disabled.
   * 
   * > For more information about fast restoration for individual databases and tables, see [Restore individual databases and tables](https://help.aliyun.com/document_detail/103175.html).
   * 
   * @example
   * true
   */
  instantRecovery?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Any point in time within the backup retention period. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * > * You must specify at least one of **BackupId** and **RestoreTime**.
   * > * [Log backup](https://help.aliyun.com/document_detail/98818.html) must be enabled for the instance.
   * 
   * @example
   * 2011-06-11T16:00:00Z
   */
  restoreTime?: string;
  /**
   * @remarks
   * The databases and tables to restore.
   * > ApsaraDB RDS for PostgreSQL supports only the restoration of specific databases, not specific tables.
   * 
   * - ApsaraDB RDS for MySQL format: ```[{"type":"db","name":"<Database 1 name>","newname":"<New database 1 name>","tables":[{"type":"table","name":"<Table 1 name in database 1>","newname":"<New table 1 name>"},{"type":"table","name":"<Table 2 name in database 1>","newname":"<New table 2 name>"}]},{"type":"db","name":"<Database 2 name>","newname":"<New database 2 name>","tables":[{"type":"table","name":"<Table 3 name in database 2>","newname":"<New table 3 name>"},{"type":"table","name":"<Table 4 name in database 2>","newname":"<New table 4 name>"}]}]```
   * 
   * - ApsaraDB RDS for PostgreSQL format: ```[{"type":"db","name":"<Database 1 name>","newname":"<New database 1 name>"}]```
   * 
   * This parameter is required.
   * 
   * @example
   * [{"type":"db","name":"testdb1","newname":"testdb1_new","tables":[{"type":"table","name":"testdb1table1","newname":"testdb1table1_new"}]}]
   */
  tableMeta?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      instantRecovery: 'InstantRecovery',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      restoreTime: 'RestoreTime',
      tableMeta: 'TableMeta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      clientToken: 'string',
      DBInstanceId: 'string',
      instantRecovery: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      restoreTime: 'string',
      tableMeta: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

