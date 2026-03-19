// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRestoreTaskRequest extends $dara.Model {
  autoOpenDatabase?: string;
  autoShutdownDatabase?: string;
  /**
   * @remarks
   * backup gateway ID.
   * 
   * > This parameter is required when **DestinationEndpointInstanceType** is agent.
   * 
   * @example
   * 4312****
   */
  backupGatewayId?: number;
  /**
   * @remarks
   * backup plan ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dbs1hvb0ww****
   */
  backupPlanId?: string;
  /**
   * @remarks
   * The ID of the full backup set used for restoration. Mutually exclusive with RestoreTime.
   * 
   * @example
   * dbs1hvb0w*****
   */
  backupSetId?: string;
  /**
   * @remarks
   * Ensures request idempotence and prevents duplicate submissions.
   * 
   * @example
   * ETnLKlblzczshOTUbOC********
   */
  clientToken?: string;
  /**
   * @remarks
   * UID for cross-Alibaba Cloud account backup.
   * 
   * @example
   * 2749528728********
   */
  crossAliyunId?: string;
  /**
   * @remarks
   * RAM role name for cross-Alibaba Cloud account backup.
   * 
   * @example
   * test123
   */
  crossRoleName?: string;
  /**
   * @example
   * mysql.x4.large.2
   */
  destDatabaseInstanceClass?: string;
  destDatabaseInstanceDatabaseVersion?: string;
  /**
   * @example
   * cn-beijing
   */
  destDatabaseInstanceRegion?: string;
  /**
   * @example
   * 500
   */
  destDatabaseInstanceStorageSize?: string;
  /**
   * @example
   * rds
   */
  destDatabaseInstanceType?: string;
  destDatabaseInstanceVSwitch?: string;
  /**
   * @example
   * vpc-xx
   */
  destDatabaseInstanceVpc?: string;
  /**
   * @remarks
   * database name.
   * 
   * > This parameter is required when the database type is PostgreSQL or MongoDB.
   * 
   * @example
   * test
   */
  destinationEndpointDatabaseName?: string;
  /**
   * @remarks
   * database endpoint.
   * 
   * > This parameter is required when **DestinationEndpointInstanceType** is express, agent, or other.
   * 
   * @example
   * rm-bp*****9jv8pxero.mysql.rds.aliyuncs.com
   */
  destinationEndpointIP?: string;
  /**
   * @remarks
   * database instance ID.
   * 
   * > This parameter is required when **DestinationEndpointInstanceType** is RDS, ECS, DDS, or Express.
   * 
   * @example
   * rm-bp1p8c29*****
   */
  destinationEndpointInstanceID?: string;
  /**
   * @remarks
   * database location. Valid values:
   * 
   * - **RDS**
   * 
   * - **ECS**
   * 
   * - **Express**: databases accessed via leased line/VPN Gateway/Smart Gateway
   * 
   * - **Agent**: databases accessed via backup gateway
   * 
   * - **DDS**: Cloud MongoDB
   * 
   * - **Other**: databases directly connected via IP:Port
   * 
   * - **dg**: self-managed databases without public IP:Port (accessed via Database Gateway DG)
   * 
   * This parameter is required.
   * 
   * @example
   * RDS
   */
  destinationEndpointInstanceType?: string;
  /**
   * @remarks
   * Oracle SID name.
   * 
   * > This parameter is required when the database type is Oracle.
   * 
   * @example
   * test
   */
  destinationEndpointOracleSID?: string;
  /**
   * @remarks
   * password.
   * 
   * > This parameter is optional when the database type is Redis, or when the database location is agent and the database type is MSSQL. It is required in all other scenarios.
   * 
   * @example
   * Test
   */
  destinationEndpointPassword?: string;
  /**
   * @remarks
   * database port.
   * 
   * > This parameter is required when **DestinationEndpointInstanceType** is express, agent, other, or ECS.
   * 
   * @example
   * 3306
   */
  destinationEndpointPort?: number;
  /**
   * @remarks
   * region of the database instance.
   * 
   * > This parameter is required when **DestinationEndpointInstanceType** is RDS, ECS, DDS, Express, or Agent.
   * 
   * @example
   * cn-hangzhou
   */
  destinationEndpointRegion?: string;
  /**
   * @remarks
   * database account.
   * 
   * > This parameter is optional when the database type is Redis, or when the database location is agent and the database type is MSSQL. It is required in all other scenarios.
   * 
   * @example
   * test
   */
  destinationEndpointUserName?: string;
  /**
   * @remarks
   * Conflict handling for objects with the same name. Currently supports:
   * 
   * **renamenew**: Rename objects if names conflict.
   * 
   * @example
   * renamenew
   */
  duplicateConflict?: string;
  enableDestinationEndpointSsl?: boolean;
  ownerId?: string;
  /**
   * @example
   * exist_instance
   */
  restoreDestinationMode?: string;
  /**
   * @remarks
   * Required when **DestinationEndpointInstanceType** is agent and the backup plan is MySQL.
   * 
   * @example
   * test
   */
  restoreDir?: string;
  /**
   * @remarks
   * database program directory.
   * 
   * @example
   * test
   */
  restoreHome?: string;
  /**
   * @remarks
   * restore objects.
   * 
   * - For details, see the **RestoreObjects** parameter definition below. This parameter is optional when the database location is agent, and required in all other scenarios.
   * 
   * - Input template: `[{ "DBName": "database name to be restored", "NewDBName": "target database name to be restored" }]`
   * 
   * > This API only supports restoring objects at the database level. To configure table-level restoration, use the console. For details, see [Recover databases](https://help.aliyun.com/document_detail/85543.html).
   * 
   * @example
   * MySQL表级别恢复示例如下：
   * [{\\"DBName\\":\\"dbname\\", \\"NewDBName\\":\\"dbname1\\"}]
   */
  restoreObjects?: string;
  /**
   * @remarks
   * restore job name.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  restoreTaskName?: string;
  /**
   * @remarks
   * restore time. Value: 1554560477000.
   * 
   * @example
   * 1554560477000
   */
  restoreTime?: number;
  /**
   * @example
   * -----BEGIN CERTIFICATE----- ... -----END CERTIFICATE-----
   */
  sslCaPem?: string;
  static names(): { [key: string]: string } {
    return {
      autoOpenDatabase: 'AutoOpenDatabase',
      autoShutdownDatabase: 'AutoShutdownDatabase',
      backupGatewayId: 'BackupGatewayId',
      backupPlanId: 'BackupPlanId',
      backupSetId: 'BackupSetId',
      clientToken: 'ClientToken',
      crossAliyunId: 'CrossAliyunId',
      crossRoleName: 'CrossRoleName',
      destDatabaseInstanceClass: 'DestDatabaseInstanceClass',
      destDatabaseInstanceDatabaseVersion: 'DestDatabaseInstanceDatabaseVersion',
      destDatabaseInstanceRegion: 'DestDatabaseInstanceRegion',
      destDatabaseInstanceStorageSize: 'DestDatabaseInstanceStorageSize',
      destDatabaseInstanceType: 'DestDatabaseInstanceType',
      destDatabaseInstanceVSwitch: 'DestDatabaseInstanceVSwitch',
      destDatabaseInstanceVpc: 'DestDatabaseInstanceVpc',
      destinationEndpointDatabaseName: 'DestinationEndpointDatabaseName',
      destinationEndpointIP: 'DestinationEndpointIP',
      destinationEndpointInstanceID: 'DestinationEndpointInstanceID',
      destinationEndpointInstanceType: 'DestinationEndpointInstanceType',
      destinationEndpointOracleSID: 'DestinationEndpointOracleSID',
      destinationEndpointPassword: 'DestinationEndpointPassword',
      destinationEndpointPort: 'DestinationEndpointPort',
      destinationEndpointRegion: 'DestinationEndpointRegion',
      destinationEndpointUserName: 'DestinationEndpointUserName',
      duplicateConflict: 'DuplicateConflict',
      enableDestinationEndpointSsl: 'EnableDestinationEndpointSsl',
      ownerId: 'OwnerId',
      restoreDestinationMode: 'RestoreDestinationMode',
      restoreDir: 'RestoreDir',
      restoreHome: 'RestoreHome',
      restoreObjects: 'RestoreObjects',
      restoreTaskName: 'RestoreTaskName',
      restoreTime: 'RestoreTime',
      sslCaPem: 'SslCaPem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoOpenDatabase: 'string',
      autoShutdownDatabase: 'string',
      backupGatewayId: 'number',
      backupPlanId: 'string',
      backupSetId: 'string',
      clientToken: 'string',
      crossAliyunId: 'string',
      crossRoleName: 'string',
      destDatabaseInstanceClass: 'string',
      destDatabaseInstanceDatabaseVersion: 'string',
      destDatabaseInstanceRegion: 'string',
      destDatabaseInstanceStorageSize: 'string',
      destDatabaseInstanceType: 'string',
      destDatabaseInstanceVSwitch: 'string',
      destDatabaseInstanceVpc: 'string',
      destinationEndpointDatabaseName: 'string',
      destinationEndpointIP: 'string',
      destinationEndpointInstanceID: 'string',
      destinationEndpointInstanceType: 'string',
      destinationEndpointOracleSID: 'string',
      destinationEndpointPassword: 'string',
      destinationEndpointPort: 'number',
      destinationEndpointRegion: 'string',
      destinationEndpointUserName: 'string',
      duplicateConflict: 'string',
      enableDestinationEndpointSsl: 'boolean',
      ownerId: 'string',
      restoreDestinationMode: 'string',
      restoreDir: 'string',
      restoreHome: 'string',
      restoreObjects: 'string',
      restoreTaskName: 'string',
      restoreTime: 'number',
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

