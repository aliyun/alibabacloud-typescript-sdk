// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateReadOnlyDBInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically create a database proxy. Valid values:
   * 
   * - **true**: enables automatic creation. By default, a general-purpose database proxy is created.
   * 
   * - **false**: does not enable automatic creation of a database proxy.
   * 
   * @example
   * false
   */
  autoCreateProxy?: boolean;
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * - **true**: enables automatic payment. Make sure that your account balance is sufficient.
   * - **false**: generates an order without charging your account.
   * 
   * 
   * 
   * 
   * > The default value is true. If your payment method has an insufficient balance, set AutoPay to false. In this case, an unpaid order is generated. You can log on to the ApsaraDB RDS console to complete the payment.
   * >
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. This parameter is required only for subscription instances. Valid values:
   * * **true**: enables auto-renewal.
   * * **false**: disables auto-renewal.
   * 
   * > * If you purchase the instance on a monthly basis, the auto-renewal cycle is one month.
   * > * If you purchase the instance on a yearly basis, the auto-renewal cycle is one year.
   * 
   * @example
   * true
   */
  autoRenew?: string;
  /**
   * @remarks
   * Specifies whether to use coupons. Valid values:
   * * **true**: uses coupons.
   * * **false** (default): does not use coupons.
   * 
   * @example
   * true
   */
  autoUseCoupon?: boolean;
  bpeEnabled?: string;
  /**
   * @remarks
   * Specifies whether to enable the I/O performance burst feature for [Premium ESSDs](https://help.aliyun.com/document_detail/2340501.html). Valid values:
   * * **true**: enables the feature.
   * * **false**: disables the feature.
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The instance edition. Valid values:
   * 
   * * **Basic**: Basic Edition
   * * **HighAvailability**: High-availability Edition (default)
   * * **AlwaysOn**: Cluster Edition
   * 
   * <props="china">* **Finance**: Finance Edition
   * 
   * > The read-only instances of ApsaraDB RDS for PostgreSQL cloud disk instances use the Basic Edition. You must set this parameter to **Basic**.
   * 
   * @example
   * HighAvailability
   */
  category?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOC****
   */
  clientToken?: string;
  /**
   * @remarks
   * A reserved parameter. You do not need to specify this parameter.
   * 
   * @example
   * None
   */
  customExtraInfo?: string;
  /**
   * @remarks
   * The instance type. For more information, see [Read-only instance types](https://help.aliyun.com/document_detail/145759.html). We recommend that the specifications of the read-only instance be equal to or higher than those of the primary instance. Otherwise, the read-only instance may experience high latency and heavy loads.
   * 
   * This parameter is required.
   * 
   * @example
   * mysqlro.n2.small.1c
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The instance description. The description must be 2 to 256 characters in length and can contain letters, digits, underscores (_), and hyphens (-). It must start with a letter or a Chinese character.
   * > The description cannot start with http:// or https://.
   * 
   * @example
   * testReadOnly
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The primary instance ID. You can call [DescribeDBInstances](https://help.aliyun.com/document_detail/26232.html) to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Instance storage capacity. Instance storage capacity of the read-only instance must be greater than or equal to that of the primary instance. For more information, see the **Storage capacity** column in [Read-only instance types](https://help.aliyun.com/document_detail/145759.html). The value is incremented in units of 5 GB. Unit: GB.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  DBInstanceStorage?: number;
  /**
   * @remarks
   * The storage type of the instance. Valid values:
   * * **local_ssd**: Premium Local SSDs
   * * **cloud_ssd**: standard SSDs
   * * **cloud_essd**: PL1 ESSDs
   * * **cloud_essd2**: PL2 ESSDs
   * * **cloud_essd3**: PL3 ESSDs
   * * **general_essd**: Premium ESSDs
   * 
   * 
   * > * If the primary ApsaraDB RDS for MySQL instance uses Premium Local SSDs, only **local_ssd** is supported. If the primary ApsaraDB RDS for MySQL instance uses cloud disks, premium performance disk storage types are supported.
   * > * ApsaraDB RDS for SQL Server supports premium performance disk storage types.
   * 
   * @example
   * local_ssd
   */
  DBInstanceStorageType?: string;
  /**
   * @remarks
   * The dedicated cluster ID. This parameter is required when you create a read-only instance in a dedicated cluster.
   * 
   * @example
   * dhg-4n****
   */
  dedicatedHostGroupId?: string;
  /**
   * @remarks
   * Specifies whether to enable the release protection feature for the instance. Valid values:
   * * **true**: enables release protection.
   * * **false**: disables release protection. (default)
   * 
   * > This feature is supported only when the **billing method** is **pay-as-you-go**.
   * 
   * @example
   * true
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The database engine version. The version must be the same as that of the primary instance.
   * 
   * * Valid values for MySQL: **5.6**, **5.7**, and **8.0**.
   * * Valid values for SQL Server: **2017_ent, 2019_ent, and 2022_ent**.
   * * Valid values for PostgreSQL: **10.0, 11.0, 12.0, 13.0, 14.0, and 15.0**.
   * 
   * This parameter is required.
   * 
   * @example
   * 5.6
   */
  engineVersion?: string;
  /**
   * @remarks
   * A reserved parameter. You do not need to specify this parameter.
   * 
   * @example
   * test
   */
  gdnInstanceName?: string;
  /**
   * @remarks
   * The network type of the read-only instance. Valid values:
   * 
   * * **VPC**: virtual private cloud (VPC)
   * * **Classic**: classic network
   * 
   * By default, a VPC-connected instance is created. You must also specify **VPCId** and **VSwitchId**.
   * > The network type of the read-only instance can be different from that of the primary instance.
   * 
   * @example
   * Classic
   */
  instanceNetworkType?: string;
  /**
   * @remarks
   * A reserved parameter. You do not need to specify this parameter.
   * 
   * @example
   * test
   */
  instructionSetArch?: string;
  /**
   * @remarks
   * Specifies whether to enable the [Buffer Pool Extension (BPE)](https://help.aliyun.com/document_detail/2527067.html) feature for Premium ESSDs. Valid values:
   * 
   *  - **1**: enables the feature.
   *  - **0**: does not enable the feature.
   * 
   * @example
   * 0
   */
  ioAccelerationEnabled?: string;
  /**
   * @remarks
   * Specifies whether to create a DuckDB-based analytical instance. Valid values:
   * 
   * - **true**: creates a DuckDB-based analytical instance.
   * - **false**: does not create a DuckDB-based analytical instance.
   * 
   * > Only ApsaraDB RDS for MySQL and ApsaraDB RDS for PostgreSQL support DuckDB-based analytical instances.
   */
  isAnalyticReadOnlyIns?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The billing method. Valid values:
   * * **Postpaid**: pay-as-you-go
   * * **Prepaid**: subscription
   * 
   * This parameter is required.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The subscription type of the instance. Valid values:
   * * **Year**: yearly subscription
   * * **Month**: monthly subscription
   * 
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * The port that is initialized when you create a read-only instance for an ApsaraDB RDS for MySQL primary instance.
   * 
   * Valid values: 1000 to 65534.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The internal IP address of the read-only instance. The IP address must be within the address range of the specified vSwitch. The system automatically allocates an internal IP address based on the values of **VPCId** and **VSwitchId** by default.
   * 
   * @example
   * 172.16.XX.XX
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The coupon code.
   * 
   * @example
   * 71744626****
   */
  promotionCode?: string;
  /**
   * @remarks
   * The region ID. The read-only instance must reside in the same region as the primary instance. You can call [DescribeRegions](https://help.aliyun.com/document_detail/26243.html) to query the most recent region list.
   * 
   * This parameter is required.
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
   * rg-acfmy****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The host ID of the primary instance in the dedicated cluster. This parameter is required when you create a read-only instance in a dedicated cluster.
   * 
   * @example
   * i-bp****
   */
  targetDedicatedHostIdForMaster?: string;
  /**
   * @remarks
   * A reserved parameter. You do not need to specify this parameter.
   * 
   * @example
   * test
   */
  tddlBizType?: string;
  /**
   * @remarks
   * A reserved parameter. You do not need to specify this parameter.
   * 
   * @example
   * test
   */
  tddlRegionConfig?: string;
  /**
   * @remarks
   * The subscription duration. Valid values:
   * * If **Period** is set to **Year**, the valid values of **UsedTime** are **1** to **5**.
   * * If **Period** is set to **Month**, the valid values of **UsedTime** are **1** to **9**.
   * 
   * > This parameter is required when **PayType** is set to **Prepaid**.
   * 
   * @example
   * 1
   */
  usedTime?: string;
  /**
   * @remarks
   * The VPC ID of the read-only instance. This parameter is required when **InstanceNetworkType** is left empty or set to **VPC**.
   * 
   * > * If the storage type of the primary instance is Premium Local SSDs, the read-only instance can use any VPC.
   * > * If the storage type of the primary instance is cloud disks, the VPC of the read-only instance must be the same as that of the primary instance.
   * 
   * @example
   * vpc-uf6f7l4fg90****
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID of the read-only instance. This parameter is required when **InstanceNetworkType** is left empty or set to **VPC**.
   * 
   * @example
   * vsw-uf6adz52c2p****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/26243.html) to query the most recent zone list.
   * 
   * - For single-zone deployment, specify one zone ID, such as `cn-hangzhou-b`.
   * - For multi-zone deployment, specify multiple zone IDs separated by colons (:), such as `cn-hangzhou-b:cn-hangzhou-c`.
   * - The number of specified zones must be less than or equal to the number of nodes in the read-only instance. A Basic Edition read-only instance contains only one node. A High-availability Edition read-only instance contains two nodes (one primary node and one secondary node).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoCreateProxy: 'AutoCreateProxy',
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      autoUseCoupon: 'AutoUseCoupon',
      bpeEnabled: 'BpeEnabled',
      burstingEnabled: 'BurstingEnabled',
      category: 'Category',
      clientToken: 'ClientToken',
      customExtraInfo: 'CustomExtraInfo',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceId: 'DBInstanceId',
      DBInstanceStorage: 'DBInstanceStorage',
      DBInstanceStorageType: 'DBInstanceStorageType',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      deletionProtection: 'DeletionProtection',
      engineVersion: 'EngineVersion',
      gdnInstanceName: 'GdnInstanceName',
      instanceNetworkType: 'InstanceNetworkType',
      instructionSetArch: 'InstructionSetArch',
      ioAccelerationEnabled: 'IoAccelerationEnabled',
      isAnalyticReadOnlyIns: 'IsAnalyticReadOnlyIns',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      payType: 'PayType',
      period: 'Period',
      port: 'Port',
      privateIpAddress: 'PrivateIpAddress',
      promotionCode: 'PromotionCode',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      targetDedicatedHostIdForMaster: 'TargetDedicatedHostIdForMaster',
      tddlBizType: 'TddlBizType',
      tddlRegionConfig: 'TddlRegionConfig',
      usedTime: 'UsedTime',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCreateProxy: 'boolean',
      autoPay: 'boolean',
      autoRenew: 'string',
      autoUseCoupon: 'boolean',
      bpeEnabled: 'string',
      burstingEnabled: 'boolean',
      category: 'string',
      clientToken: 'string',
      customExtraInfo: 'string',
      DBInstanceClass: 'string',
      DBInstanceDescription: 'string',
      DBInstanceId: 'string',
      DBInstanceStorage: 'number',
      DBInstanceStorageType: 'string',
      dedicatedHostGroupId: 'string',
      deletionProtection: 'boolean',
      engineVersion: 'string',
      gdnInstanceName: 'string',
      instanceNetworkType: 'string',
      instructionSetArch: 'string',
      ioAccelerationEnabled: 'string',
      isAnalyticReadOnlyIns: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      payType: 'string',
      period: 'string',
      port: 'string',
      privateIpAddress: 'string',
      promotionCode: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      targetDedicatedHostIdForMaster: 'string',
      tddlBizType: 'string',
      tddlRegionConfig: 'string',
      usedTime: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

