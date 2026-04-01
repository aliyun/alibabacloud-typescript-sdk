// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestoreTableRequest extends $dara.Model {
  /**
   * @remarks
   * The backup set ID. You can call the DescribeBackups operation to obtain the backup set ID.
   * 
   * >  You must specify at least one of **BackupId** or **RestoreTime** parameters.
   * 
   * @example
   * 9026262
   */
  backupId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the generated token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5xxxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Specifies whether to enable the fast restoration feature for individual databases and tables. Valid values:
   * 
   * *   **true**: enables the feature.
   * *   **false**: disables the feature.
   * 
   * > For more information, see [Restore individual databases and tables of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/103175.html).
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
   * The point in time to which you want to restore data. The point in time must fall within the specified log backup retention period. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * > *   You must specify at least one of **BackupId** and **RestoreTime**.
   * > *   You must enable the log backup feature. For more information, see [Back up an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/98818.html).
   * 
   * @example
   * 2011-06-11T16:00:00Z
   */
  restoreTime?: string;
  /**
   * @remarks
   * The names of the databases and tables that you want to restore for the source instance.
   * 
   * >  ApsaraDB RDS for PostgreSQL allows you to restore only specified databases, not tables.
   * 
   * *   ApsaraDB RDS for MySQL: `[{"type":"db","name":"<The name of Database 1 on the source instance>","newname":"<The name of Database 1 on the destination instance>","tables":[{"type":"table","name":"<The name of Table 1 in Database 1 on the source instance>","newname":"<The name of Table 1 in Database 1 on the destination instance>"},{"type":"table","name":"<The name of Table 2 in Database 1 on the source instance>","newname":"<The name of Table 2 in Database 1 on the destination instance>"}]},{"type":"db","name":"<The name of Database 2 on the source instance>","newname":"<The name of Database 2 on the destination instance>","tables":[{"type":"table","name":"<The name of Table 3 in Database 2 on the source instance>","newname":"<The name of Table 3 in Database 2 on the destination instance>"},{"type":"table","name":"<The name of Table 4 in Database 2 on the source instance>","newname":"<The name of Table 4 in Database 2 on the destination instance>"}]}]`
   * *   ApsaraDB RDS for PostgreSQL: `[{"type":"db","name":"<The name of Database 1 on the source instance 1>","newname":"<The name of Database 1 on the destination instance>"}]`
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

