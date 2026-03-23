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
   * Estimated data space, in GB
   * 
   * @example
   * 1000
   */
  estimatedSize?: number;
  /**
   * @remarks
   * The source MySQL host IP address. RDS will access this IP address to retrieve the backup.
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
   * The Password of the source MySQL Account, which must be Base64-encoded.
   * 
   * This parameter is required.
   * 
   * @example
   * OEF5JjVOM2pzZXFKRw==
   */
  password?: string;
  /**
   * @remarks
   * Source MySQL port
   * 
   * This parameter is required.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The Region ID. You can invoke [DescribeRegions](https://help.aliyun.com/document_detail/610399.html) to obtain it.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The source cloud instance ID.
   * 
   * @example
   * i-bp1fe296n52ub3chezpg
   */
  sourceInstanceId?: string;
  /**
   * @remarks
   * Source cloud instance type
   * 
   * @example
   * ECS
   */
  sourcePlatform?: string;
  /**
   * @remarks
   * Stream port used for backup transmission
   * 
   * This parameter is required.
   * 
   * @example
   * 9999
   */
  streamPort?: number;
  /**
   * @remarks
   * Source MySQL account, which must have permissions to create backups and set up replication. Refer to the following SQL for granting permissions:  
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
   * ```
   * 
   * This parameter is required.
   * 
   * @example
   * myadmin
   */
  user?: string;
  /**
   * @remarks
   * Installation path of xtrabackup on the source
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

