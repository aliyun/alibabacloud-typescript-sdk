// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDtsJobEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account (primary account) to which the database instance belongs.
   * >  Passing this parameter indicates that cross-Alibaba Cloud account data synchronization will be performed, and you also need to pass the **RoleName** parameter.
   * 
   * @example
   * 150780020300****
   */
  aliyunUid?: string;
  /**
   * @remarks
   * When the database type is **PostgreSQL**, **PolarDB for PostgreSQL**, or **AnalyticDB PostgreSQL**, it represents the database name; when the database type is **MongoDB**, it represents the authentication database name.
   * > This parameter is only available and must be provided when the database type is **PostgreSQL**, **PolarDB for PostgreSQL**, **AnalyticDB PostgreSQL**, or **MongoDB**.
   * 
   * @example
   * admin
   */
  database?: string;
  /**
   * @remarks
   * Specifies whether to perform only a precheck. Valid values:
   * 
   * *   **true**: Yes. After the precheck is passed, the database is not changed.
   * *   **false** (default): No. After the precheck is passed, the system changes the original database of the DTS task and runs the task.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the DTS instance. If this parameter is not provided, **DtsJobId** must be specified.
   * 
   * @example
   * dtsaw012y2g15q****
   */
  dtsInstanceId?: string;
  /**
   * @remarks
   * DTS job ID, which can be queried by calling [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html).
   * > If this parameter is not provided, **DtsInstanceId** must be filled in.
   * 
   * @example
   * m4312mab158****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The database instance to be modified, with values:
   * - **src**: Source database instance. - **dest**: Target database instance.
   * 
   * This parameter is required.
   * 
   * @example
   * src
   */
  endpoint?: string;
  /**
   * @remarks
   * ID of the database instance.
   * 
   * @example
   * rm-bp10k50h8374w****
   */
  endpointInstanceId?: string;
  /**
   * @remarks
   * The type of the database. Valid values:
   * 
   * *   **rds**: ApsaraDB RDS for MySQL instance, ApsaraDB RDS for SQL Server instance, or ApsaraDB RDS for PostgreSQL instance.
   * *   **polardb**: PolarDB for MySQL cluster or PolarDB for PostgreSQL cluster.
   * *   **mongodb**: ApsaraDB for MongoDB replica set instance.
   * *   **distributed_mongodb**: ApsaraDB for MongoDB sharded cluster instance.
   * *   **greenplum**: AnalyticDB for PostgreSQL instance.
   * *   **kafka**: ApsaraMQ for Kafka instance.
   * *   **ecs**: self-managed database that is hosted on an Elastic Compute Service (ECS) instance. If you set this parameter to ecs, the database must be the supported one.
   * *   **express**: database that is connected over Express Connect. If you set this parameter to express, the database must be the supported one.
   * *   **other**: database that is connected over Internet. If you set this parameter to other, the database must be the supported one.
   * 
   * > 
   * 
   * *   The following types of databases are supported: **MySQL**, **PolarDB for MySQL**, **PostgreSQL**, **PolarDB for PostgreSQL**, **MongoDB**, **SQL Server**, **Kafka**, and **AnalyticDB for PostgreSQL**.
   * 
   * *   If the original database is an ApsaraDB for MongoDB sharded cluster instance, the new database must have the same number of shards as the original database.
   * *   If the database that you want to change is a source **PostgreSQL** database, you must make sure that the latency of the DTS instance is less than 30 seconds and no data is written to the source database during the change. Otherwise, data inconsistency may occur.
   * *   The value of this parameter is case-insensitive.
   * 
   * This parameter is required.
   * 
   * @example
   * rds
   */
  endpointInstanceType?: string;
  /**
   * @remarks
   * The IP of the database instance.
   * 
   * @example
   * 172.168.XX.XXX
   */
  endpointIp?: string;
  /**
   * @remarks
   * port of the database instance.
   * 
   * @example
   * 3306
   */
  endpointPort?: string;
  /**
   * @remarks
   * The ID of the region in which the database resides.
   * 
   * @example
   * cn-hangzhou
   */
  endpointRegionId?: string;
  /**
   * @remarks
   * Specifies whether to change the password of the database account. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  modifyAccount?: boolean;
  /**
   * @remarks
   * The password of the database account.
   * 
   * >  This parameter is valid only if **ModifyAccount** is set to **true**.
   * 
   * @example
   * DTStest****
   */
  password?: string;
  /**
   * @remarks
   * The ID of the region in which the DTS instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Cross Alibaba Cloud account role name. When performing data synchronization across Alibaba Cloud accounts, this parameter must be passed. For the required permissions and authorization methods for this role, please refer to [How to Configure RAM Authorization for Cross-Account Data Migration or Synchronization](https://help.aliyun.com/document_detail/48468.html).
   * 
   * @example
   * ram-for-dts
   */
  roleName?: string;
  /**
   * @remarks
   * The account password of the shard of the ApsaraDB for MongoDB sharded cluster instance.
   * 
   * > 
   * 
   * *   This parameter is valid and required only if the source database is an ApsaraDB for MongoDB sharded cluster instance.
   * 
   * *   This parameter is valid only if **ModifyAccount** is set to **true**.
   * 
   * @example
   * DTStest****
   */
  shardPassword?: string;
  /**
   * @remarks
   * The account username of the shard of the ApsaraDB for MongoDB sharded cluster instance.
   * 
   * > 
   * 
   * *   This parameter is valid and required only if the source database is an ApsaraDB for MongoDB sharded cluster instance.
   * 
   * *   This parameter is valid only if **ModifyAccount** is set to **true**.
   * 
   * @example
   * shard
   */
  shardUsername?: string;
  /**
   * @remarks
   * Synchronization direction, with values:
   * - **Forward** (default): Forward. - **Reverse**: Reverse.
   * 
   * @example
   * Forward
   */
  synchronizationDirection?: string;
  /**
   * @remarks
   * The database account.
   * 
   * >  This parameter is valid only if **ModifyAccount** is set to **true**.
   * 
   * @example
   * dtstest
   */
  username?: string;
  zeroEtlJob?: boolean;
  static names(): { [key: string]: string } {
    return {
      aliyunUid: 'AliyunUid',
      database: 'Database',
      dryRun: 'DryRun',
      dtsInstanceId: 'DtsInstanceId',
      dtsJobId: 'DtsJobId',
      endpoint: 'Endpoint',
      endpointInstanceId: 'EndpointInstanceId',
      endpointInstanceType: 'EndpointInstanceType',
      endpointIp: 'EndpointIp',
      endpointPort: 'EndpointPort',
      endpointRegionId: 'EndpointRegionId',
      modifyAccount: 'ModifyAccount',
      password: 'Password',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      roleName: 'RoleName',
      shardPassword: 'ShardPassword',
      shardUsername: 'ShardUsername',
      synchronizationDirection: 'SynchronizationDirection',
      username: 'Username',
      zeroEtlJob: 'ZeroEtlJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'string',
      database: 'string',
      dryRun: 'boolean',
      dtsInstanceId: 'string',
      dtsJobId: 'string',
      endpoint: 'string',
      endpointInstanceId: 'string',
      endpointInstanceType: 'string',
      endpointIp: 'string',
      endpointPort: 'string',
      endpointRegionId: 'string',
      modifyAccount: 'boolean',
      password: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      roleName: 'string',
      shardPassword: 'string',
      shardUsername: 'string',
      synchronizationDirection: 'string',
      username: 'string',
      zeroEtlJob: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

