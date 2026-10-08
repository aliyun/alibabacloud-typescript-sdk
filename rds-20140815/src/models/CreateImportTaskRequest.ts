// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImportTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-bp1u*****ggm7j9j
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * The estimated data space. Unit: GB.
   * 
   * @example
   * 1000
   */
  estimatedSize?: number;
  /**
   * @remarks
   * The host IP address of the source MySQL instance. ApsaraDB RDS accesses this IP address to obtain the backup.
   * 
   * This parameter is required.
   * 
   * @example
   * 172.20.246.90
   */
  host?: string;
  ownerId?: number;
  /**
   * @remarks
   * The password of the source MySQL account. The password must be Base64-encoded.
   * 
   * This parameter is required.
   * 
   * @example
   * OEF5JjVOM2pzZXFKRw==
   */
  password?: string;
  /**
   * @remarks
   * The port of the source MySQL instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/610399.html) to query available regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The instance ID of the source cloud instance.
   * 
   * @example
   * i-bp1fe296n52ub3chezpg
   */
  sourceInstanceId?: string;
  /**
   * @remarks
   * The type of the source cloud instance.
   * 
   * @example
   * ECS
   */
  sourcePlatform?: string;
  /**
   * @remarks
   * The streaming port used to transfer the backup.
   * 
   * This parameter is required.
   * 
   * @example
   * 9999
   */
  streamPort?: number;
  /**
   * @remarks
   * The account of the source MySQL instance. The account must have permissions to create backups and set up replication. Refer to the following SQL statements for granting permissions:
   * ```
   * -- MySQL 5.7
   * mysql> CREATE USER \\"myadmin\\"@\\"%\\" IDENTIFIED BY \\"s3cret\\";
   * mysql> GRANT RELOAD, LOCK TABLES, PROCESS, REPLICATION CLIENT, REPLICATION SLAVE ON *.* TO
   *        \\"myadmin\\"@\\"%\\";
   * mysql> FLUSH PRIVILEGES;
   * -- MySQL 8.0
   * mysql> CREATE USER \\"myadmin\\"@\\"%\\" IDENTIFIED BY \\"Test123!\\";
   * mysql> GRANT BACKUP_ADMIN, PROCESS, RELOAD, LOCK TABLES, REPLICATION CLIENT, REPLICATION SLAVE ON *.* TO \\"myadmin\\"@\\"%\\";
   * mysql> GRANT SELECT ON performance_schema.log_status TO \\"myadmin\\"@\\"%\\";
   * mysql> GRANT SELECT ON performance_schema.keyring_component_status TO myadmin@\\"%\\";
   * mysql> GRANT SELECT ON performance_schema.replication_group_members TO myadmin@\\"%\\";
   * mysql> FLUSH PRIVILEGES;
   * 
   * This parameter is required.
   * 
   * @example
   * myadmin
   */
  user?: string;
  /**
   * @remarks
   * The installation path of xtrabackup on the source instance.
   * 
   * @example
   * /usr/bin/xtrabackup
   */
  xtrabackupPath?: string;
  static names(): { [key: string]: string } {
    return {
      dbInstanceId: 'DbInstanceId',
      estimatedSize: 'EstimatedSize',
      host: 'Host',
      ownerId: 'OwnerId',
      password: 'Password',
      port: 'Port',
      regionId: 'RegionId',
      sourceInstanceId: 'SourceInstanceId',
      sourcePlatform: 'SourcePlatform',
      streamPort: 'StreamPort',
      user: 'User',
      xtrabackupPath: 'XtrabackupPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstanceId: 'string',
      estimatedSize: 'number',
      host: 'string',
      ownerId: 'number',
      password: 'string',
      port: 'number',
      regionId: 'string',
      sourceInstanceId: 'string',
      sourcePlatform: 'string',
      streamPort: 'number',
      user: 'string',
      xtrabackupPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

