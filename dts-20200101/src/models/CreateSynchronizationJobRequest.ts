// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSynchronizationJobRequestDestinationEndpoint extends $dara.Model {
  /**
   * @remarks
   * 目标库的实例类型，取值：
   * - **MySQL**：MySQL数据库（包括RDS MySQL和自建MySQL）。
   * - **PolarDB**：PolarDB集群（仅支持MySQL或兼容Oracle语法的引擎）。
   * - **Redis**：Redis数据库。
   * - **MaxCompute**：MaxCompute实例。
   * 
   * >- 默认取值为**MySQL**。
   * - 关于支持的源库和目标库对应情况，请参见支持的[数据库、同步初始化类型和同步拓扑](https://help.aliyun.com/document_detail/130744.html)。
   * 
   * @example
   * MySQL
   */
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSynchronizationJobRequestSourceEndpoint extends $dara.Model {
  /**
   * @remarks
   * 源库的实例类型，取值：
   * 
   * - **MySQL**：MySQL数据库（包括RDS MySQL和自建MySQL）。
   * - **PolarDB**：PolarDB集群（仅支持MySQL或兼容Oracle语法的引擎）。
   * - **Redis**：Redis数据库。
   * - **DRDS**：云原生分布式数据库PolarDB-X 1.0。
   * 
   * > - 默认取值为**MySQL**。
   * - 关于支持的源库和目标库对应情况，请参见支持的[数据库、同步初始化类型和同步拓扑](https://help.aliyun.com/document_detail/130744.html)。
   * 
   * @example
   * MySQL
   */
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSynchronizationJobRequest extends $dara.Model {
  destinationEndpoint?: CreateSynchronizationJobRequestDestinationEndpoint;
  sourceEndpoint?: CreateSynchronizationJobRequestSourceEndpoint;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account. You do not need to specify this parameter because it will be deprecated.
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Generate a value from your client to ensure uniqueness across different requests. **ClientToken** supports only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe63****
   */
  clientToken?: string;
  /**
   * @remarks
   * The number of private custom ApsaraDB RDS instances attached to the source PolarDB-X instance. This parameter is required when **SourceEndpoint.InstanceType** is set to **DRDS**. Default value: **1**.
   * 
   * @example
   * 1
   */
  DBInstanceCount?: number;
  /**
   * @remarks
   * The region ID of the destination database for data synchronization. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * > If the region specified by the **SourceRegion** parameter is Hong Kong (China) or a region outside China, set this parameter to the same region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  destRegion?: string;
  ownerId?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - **PrePaid**: subscription.
   * - **PostPaid**: pay-as-you-go. This is the default value.
   * 
   * This parameter is required.
   * 
   * @example
   * PostPaid
   */
  payType?: string;
  /**
   * @remarks
   * The billing method of the subscription instance. Valid values:
   * 
   * - **Year**: annual subscription.
   * - **Month**: monthly subscription.
   * 
   * > This parameter is valid and required only when **PayType** is set to **PrePaid** (subscription).
   * 
   * @example
   * Year
   */
  period?: string;
  /**
   * @remarks
   * The region ID of the data synchronization instance. Set this parameter to the same value as the **DestRegion** parameter.
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
   * The region ID of the source database for data synchronization. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  sourceRegion?: string;
  /**
   * @remarks
   * The specification of the data synchronization link. Valid values: **micro**, **small**, **medium**, **large**.
   * > For more information about the description and performance test results of each specification, see [Specifications of data synchronization links](https://help.aliyun.com/document_detail/26605.html).
   * 
   * This parameter is required.
   * 
   * @example
   * small
   */
  synchronizationJobClass?: string;
  /**
   * @remarks
   * The synchronization topology. Valid values:
   * 
   * - **oneway**: one-way synchronization.
   * - **bidirectional**: two-way synchronization.
   * 
   * > - Default value: **oneway**.
   * - You can set this parameter to **bidirectional** only when both **SourceEndpoint.InstanceType** and **DestinationEndpoint.InstanceType** are set to **MySQL**, **PolarDB**, or **Redis**.
   * 
   * @example
   * oneway
   */
  topology?: string;
  /**
   * @remarks
   * The subscription duration of the subscription instance.
   * 
   * - If the billing method is set to **Year**, valid values are **1 to 5**.
   * - If the billing method is set to **Month**, valid values are **1 to 60**.
   * 
   * > This parameter is valid and required only when **PayType** is set to **PrePaid** (subscription).
   * 
   * @example
   * 1
   */
  usedTime?: number;
  /**
   * @remarks
   * The network type for Data Transmission Service. Set the value to **Intranet** (Express Connect).
   * 
   * @example
   * Intranet
   */
  networkType?: string;
  static names(): { [key: string]: string } {
    return {
      destinationEndpoint: 'DestinationEndpoint',
      sourceEndpoint: 'SourceEndpoint',
      accountId: 'AccountId',
      clientToken: 'ClientToken',
      DBInstanceCount: 'DBInstanceCount',
      destRegion: 'DestRegion',
      ownerId: 'OwnerId',
      payType: 'PayType',
      period: 'Period',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      sourceRegion: 'SourceRegion',
      synchronizationJobClass: 'SynchronizationJobClass',
      topology: 'Topology',
      usedTime: 'UsedTime',
      networkType: 'networkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationEndpoint: CreateSynchronizationJobRequestDestinationEndpoint,
      sourceEndpoint: CreateSynchronizationJobRequestSourceEndpoint,
      accountId: 'string',
      clientToken: 'string',
      DBInstanceCount: 'number',
      destRegion: 'string',
      ownerId: 'string',
      payType: 'string',
      period: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      sourceRegion: 'string',
      synchronizationJobClass: 'string',
      topology: 'string',
      usedTime: 'number',
      networkType: 'string',
    };
  }

  validate() {
    if(this.destinationEndpoint && typeof (this.destinationEndpoint as any).validate === 'function') {
      (this.destinationEndpoint as any).validate();
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

