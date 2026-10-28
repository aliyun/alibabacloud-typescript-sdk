// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigureSynchronizationJobRequestDestinationEndpoint extends $dara.Model {
  /**
   * @remarks
   * The name of the database to which the synchronization objects in the destination instance belong.
   * 
   * @example
   * dtstestdata
   */
  dataBaseName?: string;
  /**
   * @remarks
   * The IP address of the destination database.
   * > This parameter is available and required only when the **DestinationEndpoint.InstanceType** parameter is set to **Express**, **dg**, or **cen**.
   * 
   * @example
   * 172.16.88.***
   */
  IP?: string;
  /**
   * @remarks
   * The instance ID of the destination instance for synchronization.
   * > When the **DestinationEndpoint.InstanceType** parameter is set to **MaxCompute** or **DataHub**, set this parameter to the name of the MaxCompute project or DataHub project.
   * If the destination instance is an Alibaba Cloud AnalyticDB for MySQL database, set this parameter to the cluster ID of the AnalyticDB for MySQL database.
   * 
   * @example
   * rm-bp1r46452ai50****
   */
  instanceId?: string;
  /**
   * @remarks
   * The destination instance type. Valid values:
   * 
   * - **Redis**: Alibaba Cloud Redis instance.
   * - **RDS**: ApsaraDB RDS instance.
   * - **PolarDB**: PolarDB cluster (only MySQL or Oracle-compatible engines are supported).
   * - **ECS**: Self-managed database hosted on ECS.
   * - **Express**: Self-managed database connected over Express Connect.
   * - **DataHub**: DataHub instance.
   * - **MaxCompute**: MaxCompute instance.
   * - **AnalyticDB**: AnalyticDB for MySQL 3.0 and 2.0.
   * - **Greenplum**: AnalyticDB for PostgreSQL.
   * 
   * > Default value: **RDS**.
   * 
   * @example
   * RDS
   */
  instanceType?: string;
  /**
   * @remarks
   * The password of the database account for the destination database.
   * 
   * > - This parameter is required when the **DestinationEndpoint.InstanceType** parameter is set to **ECS**, **Express**, **dg**, or **cen**.
   * 
   * @example
   * Test654321
   */
  password?: string;
  /**
   * @remarks
   * The service port number of the destination database.
   * > This parameter is available and required only when the **DestinationEndpoint.InstanceType** parameter is set to **ECS**, **Express**, **dg**, or **cen**.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The database account of the destination database.
   * > - The permissions required for synchronizing different databases vary. For more information, see the corresponding configuration examples in [Overview of DTS data synchronization solutions](https://help.aliyun.com/document_detail/140954.html).
   * - This parameter is required when the **DestinationEndpoint.InstanceType** parameter is set to **ECS**, **Express**, **dg**, or **cen**.
   * - This parameter and the **DestinationEndpoint.Password** parameter are not required when the **DestinationEndpoint.InstanceType** parameter is set to **RDS** and the database engine version is MySQL 5.5 or MySQL 5.6.
   * - This parameter is not required when the **DestinationEndpoint.InstanceType** parameter is set to **Redis**.
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
   * Specifies whether the incremental log table contains partitions defined by the day of the incremental update time. Valid values: **true** and **false**.
   * > This parameter is available only when the **DestinationEndpoint.InstanceType** parameter is set to **MaxCompute**.
   * 
   * @example
   * true
   */
  modifyTimeDay?: boolean;
  /**
   * @remarks
   * Specifies whether the incremental log table contains partitions defined by the hour of the incremental update time. Valid values: **true** and **false**.
   * > This parameter is available only when the **DestinationEndpoint.InstanceType** parameter is set to **MaxCompute**.
   * 
   * @example
   * true
   */
  modifyTimeHour?: boolean;
  /**
   * @remarks
   * Specifies whether the incremental log table contains partitions defined by the minute of the incremental update time. Valid values: **true** and **false**.
   * 
   * > This parameter is available only when the **DestinationEndpoint.InstanceType** parameter is set to **MaxCompute**.
   * 
   * @example
   * true
   */
  modifyTimeMinute?: boolean;
  /**
   * @remarks
   * Specifies whether the incremental log table contains partitions defined by the month of the incremental update time. Valid values: **true** and **false**.
   * > This parameter is available only when the **DestinationEndpoint.InstanceType** parameter is set to **MaxCompute**.
   * 
   * @example
   * true
   */
  modifyTimeMonth?: boolean;
  /**
   * @remarks
   * Specifies whether the incremental log table contains partitions defined by the year of the incremental update time. Valid values: **true** and **false**.
   * > This parameter is available only when the **DestinationEndpoint.InstanceType** parameter is set to **MaxCompute**.
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
   * The name of the database to which the synchronization objects in the source instance belong.
   * 
   * @example
   * dtstestdata
   */
  databaseName?: string;
  /**
   * @remarks
   * The IP address of the source database.
   * > This parameter is available and required only when the **SourceEndpoint.InstanceType** parameter is set to **ECS**, **Express**, **dg**, or **cen**.
   * 
   * @example
   * 172.16.88.***
   */
  IP?: string;
  /**
   * @remarks
   * The instance ID of the source instance.
   * 
   * @example
   * rm-bp1i99e8l7913****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the source instance. Valid values:
   * 
   * - **RDS**: ApsaraDB RDS instance.
   * - **Redis**: Alibaba Cloud Redis instance.
   * - **PolarDB**: PolarDB cluster (only MySQL or Oracle-compatible engines are supported).
   * - **ECS**: Self-managed database hosted on Elastic Compute Service (ECS).
   * - **Express**: Self-managed database connected over Express Connect.
   * - **dg**: Self-managed database connected over Database Gateway.
   * - **cen**: Self-managed database connected over Cloud Enterprise Network (CEN).
   * 
   * > Default value: **RDS**.
   * 
   * @example
   * RDS
   */
  instanceType?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID to which the source ApsaraDB RDS instance belongs.
   * > Specifying this parameter indicates that cross-Alibaba Cloud account data synchronization is executed. You must also specify the **SourceEndpoint.Role** parameter.
   * 
   * @example
   * 140692647406****
   */
  ownerID?: string;
  /**
   * @remarks
   * The password of the database account for the source database.
   * > This parameter is required only when the **SourceEndpoint.InstanceType** parameter is set to **ECS**, **Express**, **dg**, or **cen**.
   * 
   * @example
   * Test123456
   */
  password?: string;
  /**
   * @remarks
   * The service port number of the source database.
   * > This parameter is available and required only when the **SourceEndpoint.InstanceType** parameter is set to **ECS**, **Express**, **dg**, or **cen**.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The name of the RAM role configured for the Alibaba Cloud account to which the source instance belongs.
   * > This parameter is required for cross-account data synchronization. For more information about the permissions required for the role and how to grant the permissions, see [Configure RAM authorization for cross-account data migration or synchronization](https://help.aliyun.com/document_detail/48468.html).
   * 
   * @example
   * ram-for-dts
   */
  role?: string;
  /**
   * @remarks
   * The database account of the source database.
   * > - This parameter is available and required only when the **SourceEndpoint.InstanceType** parameter is set to **ECS**, **Express**, **dg**, or **cen**.
   * - This parameter is not required when the **SourceEndpoint.InstanceType** parameter is set to **Redis**.
   * - The permissions required for synchronizing different databases vary. For more information, see the corresponding configuration examples in [Overview of DTS data synchronization solutions](https://help.aliyun.com/document_detail/140954.html).
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
   * The ID of the Alibaba Cloud account. You do not need to specify this parameter. This parameter will be deprecated soon.
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
   * - **true**: Yes.
   * - **false**: No.
   * 
   * > Default value: **true**.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  dataInitialization?: boolean;
  /**
   * @remarks
   * The reserved parameter for DTS. The value is a JSON string. You can specify this parameter to meet specific requirements, such as whether to automatically start a precheck. For more information, see [MigrationReserved parameter description](https://help.aliyun.com/document_detail/176470.html).
   * > For example, you can use this parameter for data synchronization between Redis Enterprise instances. For more information, see [Call OpenAPI operations to configure one-way or two-way data synchronization between Redis Enterprise instances](https://help.aliyun.com/document_detail/155967.html).
   * 
   * @example
   * {     "autoStartModulesAfterConfig": "none",     "targetTableMode": 2 }
   */
  migrationReserved?: string;
  ownerId?: string;
  /**
   * @remarks
   * The ID of the region where the data synchronization instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specifies whether to perform initial schema synchronization. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * > Default value: **true**.
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
   * - **Forward**: Forward synchronization.
   * - **Reverse**: Reverse synchronization.
   * 
   * > - Default value: **Forward**.
   * - This parameter takes effect only when the synchronization topology of the data synchronization instance is two-way synchronization and the value is set to **Reverse**.
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
   * The name of the synchronization task.
   * > Specify a descriptive name that is easy to identify. The name does not need to be unique.
   * 
   * @example
   * MySQL synchronization
   */
  synchronizationJobName?: string;
  /**
   * @remarks
   * The objects to be synchronized. The value is a JSON string and supports specific regular expressions. For more information, see [Configure synchronization objects](https://help.aliyun.com/document_detail/141901.html).
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

