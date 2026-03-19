// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackupSourceEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * The backup gateway ID. Call [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) to get this value.
   * 
   * > You must specify this parameter when **SourceEndpointInstanceType** is Agent.
   * 
   * @example
   * 21321323213
   */
  backupGatewayId?: number;
  /**
   * @remarks
   * The backup objects. This parameter is optional when SourceEndpointInstanceType is Agent. For all other cases, you must specify it. Call [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) to get this value.
   * 
   * @example
   * [{  "DBName":"待备份库名", "SchemaName":"待备份 Schema 名", "TableIncludes":[{ "TableName":"待备份表表名" }],  "TableExcludes":[{"TableName":"待备份库名不需要备份表的表名" }] } ]
   */
  backupObjects?: string;
  /**
   * @remarks
   * The backup plan ID. Call [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) to get this value.
   * 
   * This parameter is required.
   * 
   * @example
   * dbs1h****usfa
   */
  backupPlanId?: string;
  /**
   * @remarks
   * A unique string that ensures idempotence and prevents duplicate requests.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The UID of the Alibaba Cloud account used for cross-account backup. Call [DescribeRestoreTaskList](https://help.aliyun.com/document_detail/2869838.html) to get this value.
   * 
   * @example
   * 2xxx7778xxxxxxxxxx
   */
  crossAliyunId?: string;
  /**
   * @remarks
   * The RAM role name used for cross-account backup. Call [DescribeRestoreTaskList](https://help.aliyun.com/document_detail/2869838.html) to get this value.
   * 
   * @example
   * test123
   */
  crossRoleName?: string;
  /**
   * @example
   * true
   */
  enableSourceEndpointSsl?: string;
  ownerId?: string;
  /**
   * @remarks
   * The database name.
   * 
   * - You must specify this parameter for PostgreSQL or MongoDB databases.
   * 
   * - You must specify this parameter for Microsoft SQL Server databases connected through a backup gateway.
   * 
   * @example
   * test
   */
  sourceEndpointDatabaseName?: string;
  /**
   * @remarks
   * The database endpoint. Call [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) to get this value.
   * 
   * > You must specify this parameter when **SourceEndpointInstanceType** is Express, Agent, or Other.
   * 
   * @example
   * 100.*.*.10:3306
   */
  sourceEndpointIP?: string;
  /**
   * @remarks
   * The database instance ID. Call [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) to get this value.
   * 
   * > You must specify this parameter when **SourceEndpointInstanceType** is RDS, ECS, DDS, or Express.
   * 
   * @example
   * rm-bp1p8c29479jv****
   */
  sourceEndpointInstanceID?: string;
  /**
   * @remarks
   * The location of the database. Call [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) to get this value. Valid values:
   * 
   * - **RDS**
   * 
   * - **ECS**
   * 
   * - **Express**: A database connected through a leased line, VPN Gateway, or Smart Access Gateway
   * 
   * - **Agent**: A database connected through a backup gateway
   * 
   * - **DDS**: A MongoDB instance on Alibaba Cloud
   * 
   * - **Other**: A database connected directly using an IP address and port
   * 
   * This parameter is required.
   * 
   * @example
   * RDS
   */
  sourceEndpointInstanceType?: string;
  /**
   * @example
   * /home/test
   */
  sourceEndpointOracleHome?: string;
  /**
   * @remarks
   * The Oracle system ID (SID). You must specify this parameter for Oracle databases.
   * 
   * @example
   * test
   */
  sourceEndpointOracleSID?: string;
  /**
   * @remarks
   * The password.
   * 
   * This parameter is optional for Redis databases or for Microsoft SQL Server databases connected through a backup gateway. For all other cases, you must specify it.
   * 
   * @example
   * test
   */
  sourceEndpointPassword?: string;
  /**
   * @remarks
   * The database port. Call [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) to get this value.
   * 
   * > You must specify this parameter when **SourceEndpointInstanceType** is Express, Agent, Other, or ECS.
   * 
   * @example
   * 3306
   */
  sourceEndpointPort?: number;
  /**
   * @remarks
   * The region where the database is located. Call [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) to get this value.
   * 
   * > You must specify this parameter when **SourceEndpointInstanceType** is RDS, ECS, DDS, Express, or Agent.
   * 
   * @example
   * cn-hangzhou
   */
  sourceEndpointRegion?: string;
  /**
   * @remarks
   * The database account. Call [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) to get this value.
   * 
   * This parameter is optional for Redis databases or for Microsoft SQL Server databases connected through a backup gateway. For all other cases, you must specify it.
   * 
   * @example
   * test
   */
  sourceEndpointUserName?: string;
  /**
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

