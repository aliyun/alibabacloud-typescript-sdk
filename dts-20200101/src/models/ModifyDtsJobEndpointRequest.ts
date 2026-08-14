// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDtsJobEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the database instance.
   * 
   * > Specifying this parameter indicates cross-account data synchronization. You must also specify the **RoleName** parameter.
   * 
   * @example
   * 150780020300****
   */
  aliyunUid?: string;
  /**
   * @remarks
   * The database name when the database type is **PostgreSQL**, **PolarDB for PostgreSQL**, or **AnalyticDB PostgreSQL**. The authentication database name when the database type is **MongoDB**.
   * 
   * > This parameter is available and required only when the database type is **PostgreSQL**, **PolarDB for PostgreSQL**, **AnalyticDB PostgreSQL**, or **MongoDB**.
   * 
   * @example
   * admin
   */
  database?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run. Valid values:
   * 
   * - **true**: performs only a dry run. If the dry run succeeds, the instance is not modified.
   * - **false** (default): performs a dry run and then modifies the database instance of the DTS task if the dry run succeeds.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the DTS instance.
   * > If you do not specify this parameter, you must specify **DtsJobId**.
   * 
   * @example
   * dtsaw012y2g15q****
   */
  dtsInstanceId?: string;
  /**
   * @remarks
   * The DTS task ID. You can call [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) to query the task ID.
   * 
   * > If you do not specify this parameter, you must specify **DtsInstanceId**.
   * 
   * @example
   * m4312mab158****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The database instance to modify. Valid values:
   * 
   * - **src**: source instance.
   * - **dest**: destination instance.
   * 
   * This parameter is required.
   * 
   * @example
   * src
   */
  endpoint?: string;
  /**
   * @remarks
   * The ID of the database instance.
   * 
   * @example
   * rm-bp10k50h8374w****
   */
  endpointInstanceId?: string;
  /**
   * @remarks
   * The type of the database instance. Valid values:
   * 
   * - **rds**: ApsaraDB RDS for MySQL or ApsaraDB RDS for PostgreSQL.
   * - **polardb**: PolarDB for MySQL or PolarDB for PostgreSQL.
   * - **mongodb**: when used as the source, ApsaraDB for MongoDB (replica set architecture). When used as the destination, ApsaraDB for MongoDB (replica set or sharded cluster architecture).
   * - **distributed_mongodb**: supported only as the source of a distributed instance. Indicates ApsaraDB for MongoDB (sharded cluster architecture).
   * 
   * > The incremental node of a distributed instance must obtain data changes from the source through Oplog.
   * 
   * - **greenplum**: cloud-native data warehouse AnalyticDB for PostgreSQL.
   * - **kafka**: ApsaraMQ for Kafka.
   * - **ecs**: a self-managed database hosted on an ECS instance (only supported database types).
   * - **express**: a database connected over Express Connect (only supported database types).
   * - **other**: a database connected over the Internet (only supported database types).
   * 
   * > - Currently supported database types include **MySQL**, **PolarDB for MySQL**, **PostgreSQL**, **PolarDB for PostgreSQL**, **MongoDB**, **Kafka**, and **AnalyticDB PostgreSQL**.
   * - If the database is MongoDB (sharded cluster), the number of shards in the new database must be the same as that in the original MongoDB (sharded cluster).
   * - If you want to modify the source instance and the database type is **PostgreSQL**, make sure that the latency of the DTS instance is less than 30 seconds and stop writing data to the source. Otherwise, data inconsistency may occur.
   * - The parameter values are case-insensitive.
   * 
   * This parameter is required.
   * 
   * @example
   * rds
   */
  endpointInstanceType?: string;
  /**
   * @remarks
   * The IP address of the database instance.
   * 
   * @example
   * 172.168.XX.XXX
   */
  endpointIp?: string;
  /**
   * @remarks
   * The port of the database instance.
   * 
   * @example
   * 3306
   */
  endpointPort?: string;
  /**
   * @remarks
   * The region to which the database instance belongs.
   * 
   * @example
   * cn-hangzhou
   */
  endpointRegionId?: string;
  /**
   * @remarks
   * Specifies whether to modify the account and password. Valid values:
   * 
   * - **true**: yes.
   * - **false** (default): no.
   * 
   * @example
   * false
   */
  modifyAccount?: boolean;
  /**
   * @remarks
   * The database password.
   * 
   * > This parameter takes effect only when **ModifyAccount** is set to **true**.
   * 
   * @example
   * DTStest****
   */
  password?: string;
  /**
   * @remarks
   * The region to which the DTS instance belongs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The name of the RAM role for cross-account access.
   * 
   * > This parameter is required when you perform cross-account data synchronization. For the permissions required by this role and how to grant them, see [Configure RAM authorization for cross-account data migration or synchronization](https://help.aliyun.com/document_detail/48468.html).
   * 
   * @example
   * ram-for-dts
   */
  roleName?: string;
  /**
   * @remarks
   * The password of the shard in the MongoDB sharded cluster instance.
   * 
   * > - This parameter is available and required only when the source database instance is ApsaraDB for MongoDB (sharded cluster architecture).
   * - This parameter takes effect only when **ModifyAccount** is set to **true**.
   * 
   * @example
   * DTStest****
   */
  shardPassword?: string;
  /**
   * @remarks
   * The account of the shard in the MongoDB sharded cluster instance.
   * 
   * > - This parameter is available and required only when the source database instance is ApsaraDB for MongoDB (sharded cluster architecture).
   * - This parameter takes effect only when **ModifyAccount** is set to **true**.
   * 
   * @example
   * shard
   */
  shardUsername?: string;
  /**
   * @remarks
   * The synchronization direction. Valid values:
   * 
   * - **Forward** (default): forward.
   * - **Reverse**: reverse.
   * 
   * @example
   * Forward
   */
  synchronizationDirection?: string;
  /**
   * @remarks
   * The database account.
   * 
   * > This parameter takes effect only when **ModifyAccount** is set to **true**.
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

