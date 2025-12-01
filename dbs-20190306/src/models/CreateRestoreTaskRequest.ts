// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRestoreTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup gateway.
   * 
   * > This parameter is required if the DestinationEndpointInstanceType parameter is set to Agent.
   * 
   * @example
   * 4312****
   */
  backupGatewayId?: number;
  /**
   * @remarks
   * The ID of the backup schedule.
   * 
   * This parameter is required.
   * 
   * @example
   * dbs1hvb0ww****
   */
  backupPlanId?: string;
  /**
   * @remarks
   * The ID of the full backup set.
   * 
   * @example
   * dbs1hvb0w*****
   */
  backupSetId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * ETnLKlblzczshOTUbOC********
   */
  clientToken?: string;
  /**
   * @remarks
   * The unique ID (UID) of the Alibaba Cloud account to which the source database belongs.
   * 
   * @example
   * 2749528728********
   */
  crossAliyunId?: string;
  /**
   * @remarks
   * The name of the RAM role that is used to perform backups across Alibaba Cloud accounts.
   * 
   * @example
   * test123
   */
  crossRoleName?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * 
   * 
   * > This parameter is required if the database is a PostgreSQL database or a MongoDB database.
   * 
   * @example
   * test
   */
  destinationEndpointDatabaseName?: string;
  /**
   * @remarks
   * The endpoint that is used to connect to the database.
   * 
   * > This parameter is required if the DestinationEndpointInstanceType parameter is set to Express, Agent, or Other.
   * 
   * @example
   * rm-bp*****9jv8pxero.mysql.rds.aliyuncs.com
   */
  destinationEndpointIP?: string;
  /**
   * @remarks
   * The ID of the database instance.
   * 
   * > This parameter is required if the DestinationEndpointInstanceType parameter is set to RDS, ECS, DDS, or Express.
   * 
   * @example
   * rm-bp1p8c29*****
   */
  destinationEndpointInstanceID?: string;
  /**
   * @remarks
   * The location of the database. Valid values:
   * 
   * *   **RDS**: The database is deployed on an ApsaraDB RDS instance.
   * *   **ECS**: The database is deployed on an Elastic Compute Service (ECS) instance.
   * *   **Express**: The database is connected to Database Backup (DBS) by using Express Connect, VPN Gateway, or Smart Access Gateway.
   * *   **Agent**: The database is connected over a DBS backup gateway.
   * *   **DDS**: The database is an ApsaraDB for MongoDB database.
   * *   **Other**: The database is connected to DBS by using the IP address and port of the database.
   * *   **dg**: The database is a self-managed database that does not have public IP addresses or port numbers and is connected to DBS over Database Gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * RDS
   */
  destinationEndpointInstanceType?: string;
  /**
   * @remarks
   * The system ID (SID) of the Oracle database.
   * 
   * 
   * 
   * > This parameter is required if the source database is an Oracle database.
   * 
   * @example
   * test
   */
  destinationEndpointOracleSID?: string;
  /**
   * @remarks
   * The password of the account that is used to connect to the source database.
   * 
   * 
   * 
   * > This parameter is required except that the database is an SQL Server database that is connected to DBS over a DBS backup gateway or a Redis database.
   * 
   * @example
   * Test
   */
  destinationEndpointPassword?: string;
  /**
   * @remarks
   * The port of the database.
   * > This parameter is required if the DestinationEndpointInstanceType parameter is set to Express, Agent, Other, or ECS.
   * 
   * @example
   * 3306
   */
  destinationEndpointPort?: number;
  /**
   * @remarks
   * The region ID of the destination database instance.
   * 
   * >  You must specify this parameter if **DestinationEndpointInstanceType** is set to RDS, ECS, DDS, Express, or Agent.
   * 
   * @example
   * cn-hangzhou
   */
  destinationEndpointRegion?: string;
  /**
   * @remarks
   * The username of the account that is used to connect to the database.
   * 
   * 
   * > This parameter is required except that the database is an SQL Server database that is connected to DBS over a DBS backup gateway or a Redis database.
   * 
   * @example
   * test
   */
  destinationEndpointUserName?: string;
  /**
   * @remarks
   * The method of processing objects with the same name. Valid values:
   * 
   * - failure: The restore task fails if the system detects objects with the same name. This is the default value.
   * - renamenew: The restore task renames objects with the same name starting from the second occurrence.
   * 
   * @example
   * renamenew
   */
  duplicateConflict?: string;
  ownerId?: string;
  /**
   * @remarks
   * This parameter is required if the DestinationEndpointInstanceType parameter is set to Agent and the backup object of the backup schedule is a MySQL database.
   * 
   * @example
   * test
   */
  restoreDir?: string;
  /**
   * @remarks
   * The program directory of the database.
   * 
   * @example
   * test
   */
  restoreHome?: string;
  /**
   * @remarks
   * The objects to be restored.
   * 
   * 
   * 
   * > This parameter is required except that the DestinationEndpointInstanceType parameter is set to Agent. For information about the parameter definition, see RestoreObjects.
   * 
   * @example
   * [ { "DBName":"Name of the database to be restored", "NewDBName":"Name of the database to which the objects will be restored", "SchemaName":"Schema name of the database to be restored", "NewSchemaName":"Schema name of the destination database to which the objects will be restored"}]
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
   * The time to run the restore task, such as 1554560477000.
   * 
   * @example
   * 1554560477000
   */
  restoreTime?: number;
  static names(): { [key: string]: string } {
    return {
      backupGatewayId: 'BackupGatewayId',
      backupPlanId: 'BackupPlanId',
      backupSetId: 'BackupSetId',
      clientToken: 'ClientToken',
      crossAliyunId: 'CrossAliyunId',
      crossRoleName: 'CrossRoleName',
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
      ownerId: 'OwnerId',
      restoreDir: 'RestoreDir',
      restoreHome: 'RestoreHome',
      restoreObjects: 'RestoreObjects',
      restoreTaskName: 'RestoreTaskName',
      restoreTime: 'RestoreTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupGatewayId: 'number',
      backupPlanId: 'string',
      backupSetId: 'string',
      clientToken: 'string',
      crossAliyunId: 'string',
      crossRoleName: 'string',
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
      ownerId: 'string',
      restoreDir: 'string',
      restoreHome: 'string',
      restoreObjects: 'string',
      restoreTaskName: 'string',
      restoreTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

