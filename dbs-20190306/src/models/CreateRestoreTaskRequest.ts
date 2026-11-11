// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRestoreTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically start the instance after an Oracle physical backup is restored.
   * 
   * @example
   * true
   */
  autoOpenDatabase?: string;
  /**
   * @remarks
   * Specifies whether to automatically shut down the instance after an Oracle physical backup is restored.
   * 
   * @example
   * true
   */
  autoShutdownDatabase?: string;
  /**
   * @remarks
   * The ID of the backup gateway.
   * 
   * > This parameter is required if **DestinationEndpointInstanceType** is set to Agent.
   * 
   * @example
   * 4312****
   */
  backupGatewayId?: number;
  /**
   * @remarks
   * The ID of the backup plan.
   * 
   * This parameter is required.
   * 
   * @example
   * dbs1hvb0ww****
   */
  backupPlanId?: string;
  /**
   * @remarks
   * The ID of the full backup set used for restoration. This parameter and RestoreTime are mutually exclusive.
   * 
   * @example
   * dbs1hvb0w*****
   */
  backupSetId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request and prevent duplicate submissions.
   * 
   * @example
   * ETnLKlblzczshOTUbOC********
   */
  clientToken?: string;
  /**
   * @remarks
   * The UID of the Alibaba Cloud account used for cross-account backup.
   * 
   * @example
   * 2749528728********
   */
  crossAliyunId?: string;
  /**
   * @remarks
   * The name of the RAM role used for cross-account backup.
   * 
   * @example
   * test123
   */
  crossRoleName?: string;
  /**
   * @remarks
   * The instance specifications of the new database instance to which data is restored.
   * 
   * @example
   * mysql.x4.large.2
   */
  destDatabaseInstanceClass?: string;
  /**
   * @remarks
   * The database engine version of the new database instance to which data is restored.
   * 
   * @example
   * 8.0
   */
  destDatabaseInstanceDatabaseVersion?: string;
  /**
   * @remarks
   * The region of the new database instance to which data is restored.
   * 
   * @example
   * cn-beijing
   */
  destDatabaseInstanceRegion?: string;
  /**
   * @remarks
   * The instance storage size of the new database to recover.
   * 
   * @example
   * 500
   */
  destDatabaseInstanceStorageSize?: string;
  /**
   * @remarks
   * The instance type of the new database to which data is restored.
   * 
   * @example
   * rds
   */
  destDatabaseInstanceType?: string;
  /**
   * @remarks
   * The vSwitch of the new database instance to which data is restored.
   * 
   * @example
   * vsw-xx
   */
  destDatabaseInstanceVSwitch?: string;
  /**
   * @remarks
   * The VPC of the new database instance to which data is restored.
   * 
   * @example
   * vpc-xx
   */
  destDatabaseInstanceVpc?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * > This parameter is required if the database engine is PostgreSQL or MongoDB.
   * 
   * @example
   * test
   */
  destinationEndpointDatabaseName?: string;
  /**
   * @remarks
   * The database connection address.
   * 
   * > This parameter is required if **DestinationEndpointInstanceType** is set to Express, Agent, or Other.
   * 
   * @example
   * rm-bp*****9jv8pxero.mysql.rds.aliyuncs.com
   */
  destinationEndpointIP?: string;
  /**
   * @remarks
   * The instance ID of the database.
   * 
   * > This parameter is required if **DestinationEndpointInstanceType** is set to RDS, ECS, DDS, or Express.
   * 
   * @example
   * rm-bp1p8c29*****
   */
  destinationEndpointInstanceID?: string;
  /**
   * @remarks
   * The location of the database. Valid values:
   * - **RDS**
   * - **ECS**
   * - **Express**: databases connected over Express Connect circuits, VPN gateways, or Smart Access Gateway (SAG)
   * - **Agent**: databases connected over backup gateways
   * - **DDS**: ApsaraDB for MongoDB
   * - **Other**: databases connected by using IP addresses and port numbers
   * - **dg**: self-managed databases that have no public IP addresses or port numbers and are connected over Database Gateway
   * 
   * This parameter is required.
   * 
   * @example
   * RDS
   */
  destinationEndpointInstanceType?: string;
  /**
   * @remarks
   * The Oracle SID.
   * 
   * > This parameter is required if the database engine is Oracle.
   * 
   * @example
   * test
   */
  destinationEndpointOracleSID?: string;
  /**
   * @remarks
   * The password of the database account.
   * 
   * > This parameter is not required if the database engine is Redis, or if the database is connected over a backup gateway and the database engine is SQL Server. In other scenarios, this parameter is required.
   * 
   * @example
   * Test
   */
  destinationEndpointPassword?: string;
  /**
   * @remarks
   * The port number of the database.
   * 
   * > This parameter is required if **DestinationEndpointInstanceType** is set to Express, Agent, Other, or ECS.
   * 
   * @example
   * 3306
   */
  destinationEndpointPort?: number;
  /**
   * @remarks
   * The region of the database instance.
   * >This parameter is required if **DestinationEndpointInstanceType** is set to RDS, ECS, DDS, Express, or Agent.
   * 
   * @example
   * cn-hangzhou
   */
  destinationEndpointRegion?: string;
  /**
   * @remarks
   * The username of the database account.
   * 
   * > This parameter is not required if the database engine is Redis, or if the database is connected over a backup gateway and the database engine is SQL Server. In other scenarios, this parameter is required.
   * 
   * @example
   * test
   */
  destinationEndpointUserName?: string;
  /**
   * @remarks
   * The method used to handle conflicts between objects with the same name. Valid values:
   * 
   * - **renamenew**: renames the object if an object with the same name exists.
   * 
   * @example
   * renamenew
   */
  duplicateConflict?: string;
  /**
   * @remarks
   * Specifies whether to connect to the destination by using an SSL-encrypted connection.
   * 
   * @example
   * true
   */
  enableDestinationEndpointSsl?: boolean;
  ownerId?: string;
  /**
   * @remarks
   * The method used to restore data to the destination. Valid values:
   * - **EXIST_INSTANCE**: restores data to an existing instance.
   * - **NEW_INSTANCE**: restores data to a new instance.
   * 
   * @example
   * EXIST_INSTANCE
   */
  restoreDestinationMode?: string;
  /**
   * @remarks
   * This parameter is required if **DestinationEndpointInstanceType** is set to Agent and the backup plan is for MySQL.
   * 
   * @example
   * test
   */
  restoreDir?: string;
  /**
   * @remarks
   * The directory of the database program.
   * 
   * @example
   * test
   */
  restoreHome?: string;
  /**
   * @remarks
   * The objects to be restored.
   * 
   * - For more information, see the definition of the **RestoreObjects** parameter below. This parameter is not required if the database is connected over a backup gateway. In other scenarios, this parameter is required.
   * - Template: `[{ "DBName": "Name of the database to be restored", "NewDBName": "Name of the destination database" }]`
   * 
   * > Restoring objects by calling this API operation only supports restoration at the database level. To restore specific tables, go to the console. For more information, see [Restore a database](https://help.aliyun.com/document_detail/85543.html).
   * 
   * @example
   * Example of MySQL table-level restoration:
   * [{\\"DBName\\":\\"dbname\\", \\"NewDBName\\":\\"dbname1\\"}]
   */
  restoreObjects?: string;
  /**
   * @remarks
   * The name of the restore task.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  restoreTaskName?: string;
  /**
   * @remarks
   * The point in time to which you want to restore the database. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1554560477000
   */
  restoreTime?: number;
  /**
   * @remarks
   * The credential for the SSL-encrypted connection to the destination.
   * 
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

