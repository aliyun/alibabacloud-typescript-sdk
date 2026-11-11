// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackupSourceEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * The backup gateway ID. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to get this value.
   * 
   * > This parameter is required if the **SourceEndpointInstanceType** parameter is set to `Agent`.
   * 
   * @example
   * 21321323213
   */
  backupGatewayId?: number;
  /**
   * @remarks
   * Backup objects: This parameter is optional if the database is located on an agent, but required for all other scenarios. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to obtain the value of this parameter.
   * 
   * @example
   * [{  "DBName":"待备份库名", "SchemaName":"待备份 Schema 名", "TableIncludes":[{ "TableName":"待备份表表名" }],  "TableExcludes":[{"TableName":"待备份库名不需要备份表的表名" }] } ]
   */
  backupObjects?: string;
  /**
   * @remarks
   * The backup plan ID. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to get this value.
   * 
   * This parameter is required.
   * 
   * @example
   * dbs1h****usfa
   */
  backupPlanId?: string;
  /**
   * @remarks
   * A client-generated token to ensure request idempotence.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The UID for cross-account backup.
   * 
   * @example
   * 2xxx7778xxxxxxxxxx
   */
  crossAliyunId?: string;
  /**
   * @remarks
   * The RAM role name for cross-account backup.
   * 
   * @example
   * test123
   */
  crossRoleName?: string;
  /**
   * @remarks
   * Specifies whether to use an SSL connection to back up the source database.
   * 
   * @example
   * true
   */
  enableSourceEndpointSsl?: string;
  ownerId?: string;
  /**
   * @remarks
   * The database name.
   * 
   * - This parameter is required for PostgreSQL and MongoDB databases.
   * 
   * - This parameter is also required for Microsoft SQL Server databases when the **SourceEndpointInstanceType** parameter is set to \\"Agent\\".
   * 
   * @example
   * test
   */
  sourceEndpointDatabaseName?: string;
  /**
   * @remarks
   * The IP address of the database. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to get this value.
   * 
   * > This parameter is required if the **SourceEndpointInstanceType** parameter is set to `Express`, `Agent`, or `Other`.
   * 
   * @example
   * 100.*.*.10:3306
   */
  sourceEndpointIP?: string;
  /**
   * @remarks
   * The database instance ID. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to get this value.
   * 
   * > This parameter is required if the **SourceEndpointInstanceType** parameter is set to `RDS`, `ECS`, `DDS`, or `Express`.
   * 
   * @example
   * rm-bp1p8c29479jv****
   */
  sourceEndpointInstanceID?: string;
  /**
   * @remarks
   * The type of the source instance. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to get this value. Valid values:
   * 
   * - **RDS**: an RDS instance
   * 
   * - **ECS**: a self-managed database on an ECS instance
   * 
   * - **Express**: a database connected over a leased line, VPN Gateway, or Smart Access Gateway
   * 
   * - **Agent**: a database connected over a backup gateway
   * 
   * - **DDS**: an ApsaraDB for MongoDB instance
   * 
   * - **Other**: a database connected over an IP address and port
   * 
   * This parameter is required.
   * 
   * @example
   * RDS
   */
  sourceEndpointInstanceType?: string;
  /**
   * @remarks
   * The Oracle Home path.
   * 
   * @example
   * /home/test
   */
  sourceEndpointOracleHome?: string;
  /**
   * @remarks
   * The Oracle SID. This parameter is required for Oracle databases.
   * 
   * @example
   * test
   */
  sourceEndpointOracleSID?: string;
  /**
   * @remarks
   * The password for the database account.
   * 
   * This parameter is required for all database engines except for Redis and Microsoft SQL Server (when the **SourceEndpointInstanceType** parameter is set to \\"Agent\\").
   * 
   * @example
   * test
   */
  sourceEndpointPassword?: string;
  /**
   * @remarks
   * The database port. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to get this value.
   * 
   * > This parameter is required if the **SourceEndpointInstanceType** parameter is set to `Express`, `Agent`, `Other`, or `ECS`.
   * 
   * @example
   * 3306
   */
  sourceEndpointPort?: number;
  /**
   * @remarks
   * The database region. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to get this value.
   * 
   * > This parameter is required if the **SourceEndpointInstanceType** parameter is set to `RDS`, `ECS`, `DDS`, `Express`, or `Agent`.
   * 
   * @example
   * cn-hangzhou
   */
  sourceEndpointRegion?: string;
  /**
   * @remarks
   * The username of the database account. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to get this value.
   * 
   * This parameter is required for all database engines except for Redis and Microsoft SQL Server (when the **SourceEndpointInstanceType** parameter is set to \\"Agent\\").
   * 
   * @example
   * test
   */
  sourceEndpointUserName?: string;
  /**
   * @remarks
   * The PEM certificate for the SSL connection.
   * 
   * @example
   * -----BEGIN CERTIFICATE----- ... -----END CERTIFICATE-----
   */
  sslCaPem?: string;
  static names(): { [key: string]: string } {
    return {
      backupGatewayId: 'BackupGatewayId',
      backupObjects: 'BackupObjects',
      backupPlanId: 'BackupPlanId',
      clientToken: 'ClientToken',
      crossAliyunId: 'CrossAliyunId',
      crossRoleName: 'CrossRoleName',
      enableSourceEndpointSsl: 'EnableSourceEndpointSsl',
      ownerId: 'OwnerId',
      sourceEndpointDatabaseName: 'SourceEndpointDatabaseName',
      sourceEndpointIP: 'SourceEndpointIP',
      sourceEndpointInstanceID: 'SourceEndpointInstanceID',
      sourceEndpointInstanceType: 'SourceEndpointInstanceType',
      sourceEndpointOracleHome: 'SourceEndpointOracleHome',
      sourceEndpointOracleSID: 'SourceEndpointOracleSID',
      sourceEndpointPassword: 'SourceEndpointPassword',
      sourceEndpointPort: 'SourceEndpointPort',
      sourceEndpointRegion: 'SourceEndpointRegion',
      sourceEndpointUserName: 'SourceEndpointUserName',
      sslCaPem: 'SslCaPem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupGatewayId: 'number',
      backupObjects: 'string',
      backupPlanId: 'string',
      clientToken: 'string',
      crossAliyunId: 'string',
      crossRoleName: 'string',
      enableSourceEndpointSsl: 'string',
      ownerId: 'string',
      sourceEndpointDatabaseName: 'string',
      sourceEndpointIP: 'string',
      sourceEndpointInstanceID: 'string',
      sourceEndpointInstanceType: 'string',
      sourceEndpointOracleHome: 'string',
      sourceEndpointOracleSID: 'string',
      sourceEndpointPassword: 'string',
      sourceEndpointPort: 'number',
      sourceEndpointRegion: 'string',
      sourceEndpointUserName: 'string',
      sslCaPem: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

