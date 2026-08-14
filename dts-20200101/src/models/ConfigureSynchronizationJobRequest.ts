// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigureSynchronizationJobRequestDestinationEndpoint extends $dara.Model {
  /**
   * @remarks
   * 目标实例中的同步对象所属数据库名称。
   * 
   * @example
   * dtstestdata
   */
  dataBaseName?: string;
  /**
   * @remarks
   * 目标库的IP地址。
   * > 当**DestinationEndpoint.InstanceType**取值为**Express**、**dg**或**cen**时，本参数必须传入本参数才可用且必须传入。
   * 
   * @example
   * 172.16.88.***
   */
  IP?: string;
  /**
   * @remarks
   * 同步目标实例的实例ID
   * > 当**DestinationEndpoint.InstanceType**取值为**MaxCompute**或**DataHub**时，本参数传入MaxCompute实例或DataHub的Project名称。
   * 当目标实例为阿里云分析型数据库MySQL版时，传入分析型数据库MySQL版的集群ID。
   * 
   * @example
   * rm-bp1r46452ai50****
   */
  instanceId?: string;
  /**
   * @remarks
   * 目标实例类型，取值为：
   * 
   * - **Redis**：阿里云Redis实例。
   * - **RDS**：阿里云RDS实例。
   * - **PolarDB**：阿里云PolarDB集群（仅支持MySQL或兼容Oracle语法的引擎）。
   * - **ECS**：ECS上的自建数据库。
   * - **Express**：通过专线接入的本地数据库。
   * - **DataHub**：阿里云DataHub实例。
   * - **MaxCompute**：阿里云MaxCompute实例。
   * - **AnalyticDB**：云原生数据仓库AnalyticDB MySQL  3.0和2.0版本。
   * - **Greenplum**：云原生数据仓库ADB PostgreSQL版（原分析型数据库PostgreSQL版）。
   * 
   * > 默认取值为**RDS**。
   * 
   * @example
   * RDS
   */
  instanceType?: string;
  /**
   * @remarks
   * 目标库数据库账号密码。
   * 
   * > - 当**DestinationEndpoint.InstanceType**取值为**ECS**、**Express**、**dg**或**cen**时，本参数必须传入。
   * 
   * @example
   * Test654321
   */
  password?: string;
  /**
   * @remarks
   * 目标库的数据库服务端口。
   * > 当**DestinationEndpoint.InstanceType**取值为**ECS**、**Express**、**dg**或**cen**时，本参数才可用且必须传入。
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * 目标库的数据库账号。
   * > - 同步不同的数据库所需的权限有所差异，详情请参见[DTS数据同步方案概览](https://help.aliyun.com/document_detail/140954.html)中对应的配置案例。
   * - 当**DestinationEndpoint.InstanceType**取值为**ECS**、**Express**、**dg**或**cen**时，本参数必须传入。
   * - 当**DestinationEndpoint.InstanceType**取值为RDS且数据库版本为MySQL 5.5或MySQL 5.6，无需传入本参数和**DestinationEndpoint.Password**参数。
   * - 当**DestinationEndpoint.InstanceType**取值为**Redis**时，无需传入本参数。
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
   * 设置增量日志表是否包含以增量更新时间对应日期信息定义的分区，取值：**true**或**false**。
   * > 当**DestinationEndpoint.InstanceType**参数取值为**Maxcompute**时，本参数才可用。
   * 
   * @example
   * true
   */
  modifyTimeDay?: boolean;
  /**
   * @remarks
   * 设置增量日志表是否包含以增量更新时间对应小时信息定义的分区，取值：**true**或**false**。
   * > 当**DestinationEndpoint.InstanceType**参数取值为**Maxcompute**时，本参数才可用。
   * 
   * @example
   * true
   */
  modifyTimeHour?: boolean;
  /**
   * @remarks
   * 设置增量日志表是否包含以增量更新时间对应分钟信息定义的分区，取值：**true**或**false**。
   * 
   * > 当**DestinationEndpoint.InstanceType**参数取值为**Maxcompute**时，本参数才可用。
   * 
   * @example
   * true
   */
  modifyTimeMinute?: boolean;
  /**
   * @remarks
   * 设置增量日志表是否包含以增量更新时间对应月份信息定义的分区，取值：**true**或**false**。
   * > 当**DestinationEndpoint.InstanceType**参数取值为**Maxcompute**时，本参数才可用。
   * 
   * @example
   * true
   */
  modifyTimeMonth?: boolean;
  /**
   * @remarks
   * 设置增量日志表是否包含以增量更新时间对应年份信息定义的分区，取值：**true**或**false**。
   * > 当**DestinationEndpoint.InstanceType**参数取值为**Maxcompute**时，本参数才可用。
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
   * 源实例中的同步对象所属数据库名称。
   * 
   * @example
   * dtstestdata
   */
  databaseName?: string;
  /**
   * @remarks
   * 源库的IP地址。
   * > 当**SourceEndpoint.InstanceType**取值为**ECS**、**Express**、**dg**或**cen**时，本参数才可用且必须传入。
   * 
   * @example
   * 172.16.88.***
   */
  IP?: string;
  /**
   * @remarks
   * 源实例ID。
   * 
   * @example
   * rm-bp1i99e8l7913****
   */
  instanceId?: string;
  /**
   * @remarks
   * 源实例类型，取值为：
   * 
   * - **RDS**：阿里云RDS实例。
   * - **Redis**：阿里云Redis实例。
   * - **PolarDB**：阿里云PolarDB集群（仅支持MySQL或兼容Oracle语法的引擎）。
   * - **ECS**：ECS上的自建数据库。
   * - **Express**：通过专线接入的自建数据库。
   * - **dg**：通过数据库网关DG接入的自建数据库。
   * - **cen**：通过云企业网CEN接入的自建数据库。
   * 
   * > 默认取值为**RDS**。
   * 
   * @example
   * RDS
   */
  instanceType?: string;
  /**
   * @remarks
   * 源RDS实例所属的阿里云账号ID。
   * > 传入本参数即代表执行跨阿里云账号的数据同步，同时您还需要传入**SourceEndpoint.Role**参数。
   * 
   * @example
   * 140692647406****
   */
  ownerID?: string;
  /**
   * @remarks
   * 源库数据库账号密码。
   * > 当**SourceEndpoint.InstanceType**取值为**ECS**、**Express**、**dg**或**cen**时，本参数必须传入。
   * 
   * @example
   * Test123456
   */
  password?: string;
  /**
   * @remarks
   * 源库的数据库服务端口。
   * > 当**SourceEndpoint.InstanceType**取值为**ECS**、**Express**、**dg**或**cen**时，本参数才可用且必须传入。
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * 源实例所属云账号配置的角色名称。
   * > 执行跨阿里云账号的数据同步时须传入本参数，该角色所需的权限及授权方式请参见[跨阿里云账号数据迁移或同步时如何配置RAM授权](https://help.aliyun.com/document_detail/48468.html)。
   * 
   * @example
   * ram-for-dts
   */
  role?: string;
  /**
   * @remarks
   * 源库的数据库账号。
   * > - 当**SourceEndpoint.InstanceType**取值为**ECS**、**Express**、**dg**或**cen**时，本参数才可用且必须传入。
   * - 当**SourceEndpoint.InstanceType**取值为**Redis**时，本参数无需传入。
   * - 同步不同的数据库所需的权限有所差异，详情请参见[DTS数据同步方案概览](https://help.aliyun.com/document_detail/140954.html)中对应的配置案例。
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
   * The ID of the Alibaba Cloud account. You do not need to specify this parameter because it will be discontinued.
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
   * - **true**: yes.
   * - **false**: no.
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
   * The reserved parameter of DTS. The value is a JSON string. You can specify this parameter to meet special requirements, such as specifying whether to automatically start the precheck. For more information, see [MigrationReserved parameter description](https://help.aliyun.com/document_detail/176470.html).
   * > For example, you can use this parameter for data synchronization between ApsaraDB for Redis Enhanced Edition (Tair) instances. For more information, see [Use OpenAPI to configure one-way or bidirectional data synchronization between ApsaraDB for Redis Enhanced Edition instances](https://help.aliyun.com/document_detail/155967.html).
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
   * The resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specifies whether to perform initial schema synchronization. Valid values:
   * - **true**: yes.
   * - **false**: no.
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
   * - **Forward**: forward.
   * - **Reverse**: reverse.
   * 
   * > - Default value: **Forward**.
   * - This parameter takes effect only if you set it to **Reverse** and the synchronization topology of the data synchronization instance is two-way synchronization.
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
   * > Specify a descriptive name that makes it easy to identify the task. It does not need to be unique.
   * 
   * @example
   * MySQL同步
   */
  synchronizationJobName?: string;
  /**
   * @remarks
   * The objects to be synchronized. The value is a JSON string and supports certain regular expressions. For more information, see [Synchronization object configuration](https://help.aliyun.com/document_detail/141901.html).
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

