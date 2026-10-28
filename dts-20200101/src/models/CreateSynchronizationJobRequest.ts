// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSynchronizationJobRequestDestinationEndpoint extends $dara.Model {
  /**
   * @remarks
   * The instance type of the destination database. Valid values:
   * - **MySQL**: MySQL databases, including ApsaraDB RDS for MySQL instances and self-managed MySQL databases.
   * - **PolarDB**: PolarDB clusters (only MySQL or engines compatible with Oracle syntax are supported).
   * - **Redis**: Redis databases.
   * - **MaxCompute**: MaxCompute instances.
   * 
   * > - Default value: **MySQL**.
   * - For more information about the supported source and destination databases, see [Supported databases, initial synchronization types, and synchronization topology](https://help.aliyun.com/document_detail/130744.html).
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
   * The instance type of the source database. Valid values:
   * 
   * - **MySQL**: MySQL databases, including ApsaraDB RDS for MySQL instances and self-managed MySQL databases.
   * - **PolarDB**: PolarDB clusters (only MySQL or engines compatible with Oracle syntax are supported).
   * - **Redis**: Redis databases.
   * - **DRDS**: cloud-native distributed database PolarDB-X 1.0.
   * 
   * > - Default value: **MySQL**.
   * - For more information about the supported source and destination databases, see [Supported databases, initial synchronization types, and synchronization topology](https://help.aliyun.com/document_detail/130744.html).
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
   * The ID of the Alibaba Cloud account. You do not need to specify this parameter because it will be deprecated soon.
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe63****
   */
  clientToken?: string;
  /**
   * @remarks
   * The number of private custom ApsaraDB RDS instances attached to the source PolarDB-X instance. This parameter is required only when the **SourceEndpoint.InstanceType** parameter is set to **DRDS**. Default value: **1**.
   * 
   * @example
   * 1
   */
  DBInstanceCount?: number;
  /**
   * @remarks
   * The region ID of the destination database. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * > If the region specified by the **SourceRegion** parameter is Hong Kong (China) or outside China, you must specify the same region ID for this parameter.
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
   * - **PrePaid**: upfront.
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
   * The billing method of the upfront instance. Valid values:
   * 
   * - **Year**: yearly.
   * - **Month**: monthly.
   * 
   * > This parameter is valid and required only when the **PayType** parameter is set to **PrePaid**.
   * 
   * @example
   * Year
   */
  period?: string;
  /**
   * @remarks
   * The region ID of the data synchronization instance. The value must be the same as the value of the **DestRegion** parameter.
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
   * The region ID of the source database. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  sourceRegion?: string;
  /**
   * @remarks
   * The specifications of the data synchronization link. Valid values: **micro**, **small**, **medium**, and **large**.
   * > For more information about the specifications and performance tests of data synchronization links, see [Specifications of data synchronization links](https://help.aliyun.com/document_detail/26605.html).
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
   * - You can set this parameter to **bidirectional** only when the **SourceEndpoint.InstanceType** and **DestinationEndpoint.InstanceType** parameters are set to **MySQL**, **PolarDB**, or **Redis**.
   * 
   * @example
   * oneway
   */
  topology?: string;
  /**
   * @remarks
   * The subscription duration of the upfront instance.
   * 
   * - When the billing method is set to **Year** (yearly), valid values are **1** to **5**.
   * - When the billing method is set to **Month** (monthly), valid values are **1** to **60**.
   * 
   * > This parameter is valid and required only when the **PayType** parameter is set to **PrePaid**.
   * 
   * @example
   * 1
   */
  usedTime?: number;
  /**
   * @remarks
   * The network type of Data Transmission Service. The value is fixed to **Intranet** (Express Connect circuit).
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

