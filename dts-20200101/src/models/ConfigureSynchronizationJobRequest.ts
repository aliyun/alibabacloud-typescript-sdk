// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigureSynchronizationJobRequestDestinationEndpoint extends $dara.Model {
  /**
   * @remarks
   * The name of the database to which the synchronization object in the destination instance belongs.
   * 
   * @example
   * dtstestdata
   */
  dataBaseName?: string;
  /**
   * @remarks
   * The IP address of the destination database.
   * 
   * >  You must specify this parameter only if the **DestinationEndpoint.InstanceType** parameter is set to **Express**, **dg**, or **cen**.
   * 
   * @example
   * 172.16.88.***
   */
  IP?: string;
  /**
   * @remarks
   * The ID of the destination instance.
   * 
   * >  If the **DestinationEndpoint.InstanceType** parameter is set to **MaxCompute** or **DataHub**, you must specify the name of the MaxCompute project or the DataHub project.
   * 
   * If the destination instance is an AnalyticDB for MySQL cluster, specify the ID of the AnalyticDB for MySQL cluster.
   * 
   * @example
   * rm-bp1r46452ai50****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the destination instance. Valid values:
   * 
   * *   **Redis**: ApsaraDB for Redis instance
   * *   **RDS**: ApsaraDB RDS instance
   * *   **PolarDB**: PolarDB for MySQL cluster or PolarDB O Edition cluster
   * *   **ECS**: self-managed database that is hosted on ECS
   * *   **Express**: self-managed database that is connected over Express Connect
   * *   **DataHub**: DataHub project
   * *   **MaxCompute**: MaxCompute project
   * *   **AnalyticDB**: AnalyticDB for MySQL cluster V3.0 or V2.0
   * *   **Greenplum**: AnalyticDB for PostgreSQL instance
   * 
   * >  The default value is **RDS**.
   * 
   * @example
   * RDS
   */
  instanceType?: string;
  /**
   * @remarks
   * The password of the destination database account.
   * 
   * > 
   * *   If the **DestinationEndpoint.InstanceType** parameter is set to **ECS**, **Express**, **dg**, or **cen**, you must specify the DestinationEndpoint.Password parameter.
   * 
   * @example
   * Test654321
   */
  password?: string;
  /**
   * @remarks
   * The service port number of the destination database.
   * 
   * >  You must specify this parameter only if the **DestinationEndpoint.InstanceType** parameter is set to **ECS**, **Express**, **dg**, or **cen**.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The database account of the destination database.
   * 
   * > 
   * *   The permissions that are required for database accounts vary with the synchronization scenario. For more information, see [Overview of data synchronization scenarios](https://help.aliyun.com/document_detail/140954.html).
   * *   If the **DestinationEndpoint.InstanceType** parameter is set to **ECS**, **Express**, **dg**, or **cen**, you must specify the DestinationEndpoint.UserName parameter.
   * *   If the **DestinationEndpoint.InstanceType** parameter is set to RDS and the database version is MySQL 5.5 or MySQL 5.6, you do not need to specify the DestinationEndpoint.UserName and **DestinationEndpoint.Password** parameters.
   * *   If the **DestinationEndpoint.InstanceType** parameter is set to **Redis**, you do not need to specify the DestinationEndpoint.UserName parameter.
   * 
   * @example
   * dtstestaccount
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      dataBaseName: 'DataBaseName',
      IP: 'IP',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      password: 'Password',
      port: 'Port',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataBaseName: 'string',
      IP: 'string',
      instanceId: 'string',
      instanceType: 'string',
      password: 'string',
      port: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureSynchronizationJobRequestPartitionKey extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the incremental data table contains partitions defined by the modifytime_day field. Valid values: **true** and **false**.
   * 
   * >  This parameter is available only if the **DestinationEndpoint.InstanceType** parameter is set to **MaxCompute**.
   * 
   * @example
   * true
   */
  modifyTimeDay?: boolean;
  /**
   * @remarks
   * Specifies whether the incremental data table contains partitions defined by the modifytime_hour field. Valid values: **true** and **false**.
   * 
   * >  This parameter is available only if the **DestinationEndpoint.InstanceType** parameter is set to **MaxCompute**.
   * 
   * @example
   * true
   */
  modifyTimeHour?: boolean;
  /**
   * @remarks
   * Specifies whether the incremental data table contains partitions defined by the modifytime_minute field. Valid values: **true** and **false**.
   * 
   * >  This parameter is available only if the **DestinationEndpoint.InstanceType** parameter is set to **MaxCompute**.
   * 
   * @example
   * true
   */
  modifyTimeMinute?: boolean;
  /**
   * @remarks
   * Specifies whether the incremental data table contains partitions defined by the modifytime_month field. Valid values: **true** and **false**.
   * 
   * >  This parameter is available only if the **DestinationEndpoint.InstanceType** parameter is set to **MaxCompute**.
   * 
   * @example
   * true
   */
  modifyTimeMonth?: boolean;
  /**
   * @remarks
   * Specifies whether the incremental data table contains partitions defined by the modifytime_year field. Valid values: **true** and **false**.
   * 
   * >  This parameter is available only if the **DestinationEndpoint.InstanceType** parameter is set to **MaxCompute**.
   * 
   * @example
   * true
   */
  modifyTimeYear?: boolean;
  static names(): { [key: string]: string } {
    return {
      modifyTimeDay: 'ModifyTime_Day',
      modifyTimeHour: 'ModifyTime_Hour',
      modifyTimeMinute: 'ModifyTime_Minute',
      modifyTimeMonth: 'ModifyTime_Month',
      modifyTimeYear: 'ModifyTime_Year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifyTimeDay: 'boolean',
      modifyTimeHour: 'boolean',
      modifyTimeMinute: 'boolean',
      modifyTimeMonth: 'boolean',
      modifyTimeYear: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureSynchronizationJobRequestSourceEndpoint extends $dara.Model {
  /**
   * @remarks
   * The name of the database to which the synchronization object in the source instance belongs.
   * 
   * @example
   * dtstestdata
   */
  databaseName?: string;
  /**
   * @remarks
   * The IP address of the source database.
   * 
   * >  You must specify this parameter only if the **SourceEndpoint.InstanceType** parameter is set to **ECS**, **Express**, **dg**, or **cen**.
   * 
   * @example
   * 172.16.88.***
   */
  IP?: string;
  /**
   * @remarks
   * The ID of the source instance.
   * 
   * @example
   * rm-bp1i99e8l7913****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the source instance. Valid values:
   * 
   * *   **RDS**: ApsaraDB RDS instance
   * *   **Redis**: ApsaraDB for Redis instance
   * *   **PolarDB**: PolarDB for MySQL cluster or PolarDB O Edition cluster
   * *   **ECS**: self-managed database that is hosted on Elastic Compute Service (ECS)
   * *   **Express**: self-managed database that is connected over Express Connect
   * *   **dg**: self-managed database that is connected over Database Gateway
   * *   **cen**: self-managed database that is connected over Cloud Enterprise Network (CEN)
   * 
   * >  The default value is **RDS**.
   * 
   * @example
   * RDS
   */
  instanceType?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the source RDS instance.
   * 
   * >  You can specify this parameter to synchronize data across different Alibaba Cloud accounts. In this case, you also need to specify the **SourceEndpoint.Role** parameter.
   * 
   * @example
   * 140692647406****
   */
  ownerID?: string;
  /**
   * @remarks
   * The password of the source database account.
   * 
   * >  You must specify this parameter only if the **SourceEndpoint.InstanceType** parameter is set to **ECS**, **Express**, **dg**, or **cen**.
   * 
   * @example
   * Test123456
   */
  password?: string;
  /**
   * @remarks
   * The service port number of the source database.
   * 
   * >  You must specify this parameter only if the **SourceEndpoint.InstanceType** parameter is set to **ECS**, **Express**, **dg**, or **cen**.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The name of the RAM role configured for the Alibaba Cloud account that owns the source instance.
   * 
   * >  You must specify this parameter when you synchronize data across different Alibaba Cloud accounts. For information about the permissions and authorization methods of the RAM role, see [Configure RAM authorization for cross-account data migration and synchronization](https://help.aliyun.com/document_detail/48468.html).
   * 
   * @example
   * ram-for-dts
   */
  role?: string;
  /**
   * @remarks
   * The database account of the source database.
   * 
   * > 
   * *   You must specify this parameter only if the **SourceEndpoint.InstanceType** parameter is set to **ECS**, **Express**, **dg**, or **cen**.
   * *   If the **SourceEndpoint.InstanceType** parameter is set to **Redis**, you do not need to specify the database account.
   * *   The permissions that are required for database accounts vary with the synchronization scenario. For more information, see [Overview of data synchronization scenarios](https://help.aliyun.com/document_detail/140954.html).
   * 
   * @example
   * dtstestaccount
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      IP: 'IP',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      ownerID: 'OwnerID',
      password: 'Password',
      port: 'Port',
      role: 'Role',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      IP: 'string',
      instanceId: 'string',
      instanceType: 'string',
      ownerID: 'string',
      password: 'string',
      port: 'string',
      role: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureSynchronizationJobRequest extends $dara.Model {
  destinationEndpoint?: ConfigureSynchronizationJobRequestDestinationEndpoint;
  partitionKey?: ConfigureSynchronizationJobRequestPartitionKey;
  sourceEndpoint?: ConfigureSynchronizationJobRequestSourceEndpoint;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account. You do not need to specify this parameter because this parameter will be removed in the future.
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
  /**
   * @remarks
   * The synchronization checkpoint.
   * 
   * @example
   * 1610540493
   */
  checkpoint?: string;
  /**
   * @remarks
   * Specifies whether to perform initial full data synchronization. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * >  Default value: **true**.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  dataInitialization?: boolean;
  /**
   * @remarks
   * The reserved parameter of DTS. The value is a JSON string. You can specify this parameter to meet special requirements, for example, whether to automatically start a precheck. For more information, see [MigrationReserved](https://help.aliyun.com/document_detail/176470.html).
   * 
   * >  This parameter can be used for data synchronization between ApsaraDB for Redis Enterprise Edition instances. For more information, see [Use OpenAPI Explorer to configure one-way or two-way data synchronization between ApsaraDB for Redis Enterprise Edition instances](https://help.aliyun.com/document_detail/155967.html).
   * 
   * @example
   * {     "autoStartModulesAfterConfig": "none",     "targetTableMode": 2 }
   */
  migrationReserved?: string;
  ownerId?: string;
  regionId?: string;
  /**
   * @remarks
   * 资源组ID。
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specifies whether to perform initial schema synchronization. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * >  Default value: **true**.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  structureInitialization?: boolean;
  /**
   * @remarks
   * The synchronization direction. Valid values:
   * 
   * *   **Forward**
   * *   **Reverse**
   * 
   * > 
   * *   Default value: **Forward**.
   * *   The value **Reverse** takes effect only if the topology of the data synchronization instance is two-way synchronization.
   * 
   * @example
   * Forward
   */
  synchronizationDirection?: string;
  /**
   * @remarks
   * The ID of the data synchronization instance. You can call the [DescribeSynchronizationJobs](https://help.aliyun.com/document_detail/49454.html) operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dtsz4ao1dor13d****
   */
  synchronizationJobId?: string;
  /**
   * @remarks
   * The name of the data synchronization task.
   * 
   * >  We recommend that you specify an informative name for easy identification. You do not need to use a unique task name.
   * 
   * @example
   * MySQL同步
   */
  synchronizationJobName?: string;
  /**
   * @remarks
   * The objects that you want to synchronize. The value is a JSON string and can contain regular expressions. For more information, see [SynchronizationObjects](https://help.aliyun.com/document_detail/141901.html).
   * 
   * This parameter is required.
   * 
   * @example
   * [{"DBName":"dtstestdata","TableIncludes":[{"TableName":"customer"}]}]
   */
  synchronizationObjects?: string;
  static names(): { [key: string]: string } {
    return {
      destinationEndpoint: 'DestinationEndpoint',
      partitionKey: 'PartitionKey',
      sourceEndpoint: 'SourceEndpoint',
      accountId: 'AccountId',
      checkpoint: 'Checkpoint',
      dataInitialization: 'DataInitialization',
      migrationReserved: 'MigrationReserved',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      structureInitialization: 'StructureInitialization',
      synchronizationDirection: 'SynchronizationDirection',
      synchronizationJobId: 'SynchronizationJobId',
      synchronizationJobName: 'SynchronizationJobName',
      synchronizationObjects: 'SynchronizationObjects',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationEndpoint: ConfigureSynchronizationJobRequestDestinationEndpoint,
      partitionKey: ConfigureSynchronizationJobRequestPartitionKey,
      sourceEndpoint: ConfigureSynchronizationJobRequestSourceEndpoint,
      accountId: 'string',
      checkpoint: 'string',
      dataInitialization: 'boolean',
      migrationReserved: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      structureInitialization: 'boolean',
      synchronizationDirection: 'string',
      synchronizationJobId: 'string',
      synchronizationJobName: 'string',
      synchronizationObjects: 'string',
    };
  }

  validate() {
    if(this.destinationEndpoint && typeof (this.destinationEndpoint as any).validate === 'function') {
      (this.destinationEndpoint as any).validate();
    }
    if(this.partitionKey && typeof (this.partitionKey as any).validate === 'function') {
      (this.partitionKey as any).validate();
    }
    if(this.sourceEndpoint && typeof (this.sourceEndpoint as any).validate === 'function') {
      (this.sourceEndpoint as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

