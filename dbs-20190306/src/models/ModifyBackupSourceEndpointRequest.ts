// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackupSourceEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * The backup gateway ID. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to obtain the ID.
   * 
   * >  If you set **SourceEndpointInstanceType** to Agent, this parameter is required.
   * 
   * @example
   * 21321323213
   */
  backupGatewayId?: number;
  /**
   * @remarks
   * The backup object. If you set SourceEndpointInstanceType to Agent, this parameter is optional. Otherwise, it is required. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to obtain the backup object.
   * 
   * @example
   * [{ "DBName":"Name of the database to be backed up", "SchemaName":"Name of the schema to be backed up", "TableIncludes":[{ "TableName":"Name of the table to be backed up" }], "TableExcludes":[{"TableName":"Name of the table to be excluded during the backup" }] } ]
   */
  backupObjects?: string;
  /**
   * @remarks
   * The ID of the backup schedule. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to obtain it.
   * 
   * This parameter is required.
   * 
   * @example
   * dbs1h****usfa
   */
  backupPlanId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The unique ID (UID) of the Alibaba Cloud account to which the backup schedule belongs. You can call the [DescribeRestoreTaskList](https://help.aliyun.com/document_detail/2869838.html) operation to obtain the UID.
   * 
   * @example
   * 2xxx7778xxxxxxxxxx
   */
  crossAliyunId?: string;
  /**
   * @remarks
   * The name of the RAM role that is used to perform backups across Alibaba Cloud accounts. You can call the [DescribeRestoreTaskList](https://help.aliyun.com/document_detail/2869838.html) operation to obtain the RAM role.
   * 
   * @example
   * test123
   */
  crossRoleName?: string;
  ownerId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * *   This parameter is required if the database is a PostgreSQL or MongoDB database.
   * *   This parameter is required if the database is an SQL Server database that is connected to DBS over a DBS backup gateway.
   * 
   * @example
   * test
   */
  sourceEndpointDatabaseName?: string;
  /**
   * @remarks
   * The endpoint of the database. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to obtain the endpoint.
   * 
   * >  If you set **SourceEndpointInstanceType** to Express, Agent, or Other, this parameter is required.
   * 
   * @example
   * 100.*.*.10:3306
   */
  sourceEndpointIP?: string;
  /**
   * @remarks
   * The database instance ID. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to obtain the ID.
   * 
   * >  If you set **SourceEndpointInstanceType** to RDS, ECS, DDS, or Express, this parameter is required.
   * 
   * @example
   * rm-bp1p8c29479jv****
   */
  sourceEndpointInstanceID?: string;
  /**
   * @remarks
   * The location of the database. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to obtain it. Valid values:
   * 
   * *   **RDS**
   * *   **ECS**
   * *   **Express**: The database is connected to DBS via Express Connect, VPN Gateway, or Smart Access Gateway.
   * *   **Agent**: The database is connected to DBS over a DBS backup gateway.
   * *   **DDS**: The database is an ApsaraDB for MongoDB database.
   * *   **Other**: The database is connected to DBS using the IP address and port of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * RDS
   */
  sourceEndpointInstanceType?: string;
  /**
   * @remarks
   * The SID of the Oracle source database. If the database is an Oracle database, this parameter is required.
   * 
   * @example
   * test
   */
  sourceEndpointOracleSID?: string;
  /**
   * @remarks
   * The password of the account that is used to connect to the database.
   * 
   * This parameter is required except that the database is an SQL Server database that is connected to DBS over a DBS backup gateway or a Redis database.
   * 
   * @example
   * test
   */
  sourceEndpointPassword?: string;
  /**
   * @remarks
   * The port that is used to connect to the database. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to obtain the port.
   * 
   * >  If you set **SourceEndpointInstanceType** to Express, Agent, Other, or ECS, this parameter is required.
   * 
   * @example
   * 3306
   */
  sourceEndpointPort?: number;
  /**
   * @remarks
   * The region in which the database you want to back up resides. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to obtain the region.
   * 
   * >  If you set **SourceEndpointInstanceType** to RDS, ECS, DDS, Express, or Agent, this parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  sourceEndpointRegion?: string;
  /**
   * @remarks
   * The account that is used to log on to the database. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to obtain the account.
   * 
   * If the database is an SQL Server database connected to DBS over a DBS backup gateway or a Redis database, this parameter is optional. Otherwise, it is required.
   * 
   * @example
   * test
   */
  sourceEndpointUserName?: string;
  static names(): { [key: string]: string } {
    return {
      backupGatewayId: 'BackupGatewayId',
      backupObjects: 'BackupObjects',
      backupPlanId: 'BackupPlanId',
      clientToken: 'ClientToken',
      crossAliyunId: 'CrossAliyunId',
      crossRoleName: 'CrossRoleName',
      ownerId: 'OwnerId',
      sourceEndpointDatabaseName: 'SourceEndpointDatabaseName',
      sourceEndpointIP: 'SourceEndpointIP',
      sourceEndpointInstanceID: 'SourceEndpointInstanceID',
      sourceEndpointInstanceType: 'SourceEndpointInstanceType',
      sourceEndpointOracleSID: 'SourceEndpointOracleSID',
      sourceEndpointPassword: 'SourceEndpointPassword',
      sourceEndpointPort: 'SourceEndpointPort',
      sourceEndpointRegion: 'SourceEndpointRegion',
      sourceEndpointUserName: 'SourceEndpointUserName',
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
      ownerId: 'string',
      sourceEndpointDatabaseName: 'string',
      sourceEndpointIP: 'string',
      sourceEndpointInstanceID: 'string',
      sourceEndpointInstanceType: 'string',
      sourceEndpointOracleSID: 'string',
      sourceEndpointPassword: 'string',
      sourceEndpointPort: 'number',
      sourceEndpointRegion: 'string',
      sourceEndpointUserName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

