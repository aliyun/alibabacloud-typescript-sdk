// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateReadOnlyDBInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically create database proxies. Valid values:
   * 
   * *   **true**: automatically creates database proxies. By default, general-purpose database proxies are created.
   * *   **false**: does not automatically create database proxies.
   * 
   * @example
   * false
   */
  autoCreateProxy?: boolean;
  /**
   * @remarks
   * Specifies whether to automatically complete the payment. Valid values:
   * 
   * 1.  **true**: automatically completes the payment. Make sure that your account balance is sufficient.
   * 2.  **false**: does not automatically complete the payment. An unpaid order is generated.
   * 
   * >  Default value: true. If your account balance is insufficient, you can set the AutoPay parameter to false to generate an unpaid order. Then, you can log on to the ApsaraDB RDS console to complete the payment.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the auto-renewal feature for the read-only instance. If you set the PayType parameter to Prepaid, you must also specify this parameter. Valid values:
   * 
   * *   **true**: enables the feature.
   * *   **false**: disables the feature.
   * 
   * > * If you set the Period parameter to Month, the auto-renewal cycle is one month.
   * > * If you set the Period parameter to Year, the auto-renewal cycle is one year.
   * 
   * @example
   * true
   */
  autoRenew?: string;
  /**
   * @remarks
   * Specifies whether to use a coupon. Valid values:
   * 
   * *   **true**: uses a coupon.
   * *   **false** (default): does not use a coupon.
   * 
   * @example
   * true
   */
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * A reserved parameter. You do not need to specify this parameter.
   * 
   * @example
   * false
   */
  bpeEnabled?: string;
  /**
   * @remarks
   * An invalid parameter. You do not need to specify this parameter.
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The RDS edition of the instance. Valid values:
   * 
   * *   **Basic**: RDS Basic Edition
   * *   **HighAvailability** (default): RDS High-availability Edition
   * *   **AlwaysOn**: RDS Cluster Edition
   * 
   * >  The read-only instances of the primary instance that run PostgreSQL and use cloud disks run RDS Basic Edition. Therefore, set this parameter to **Basic**.
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
   * The instance type of the read-only instance. For more information, see [Read-only instance types](https://help.aliyun.com/document_detail/145759.html). We recommend that you specify an instance type whose specifications are higher than or equal to the specifications of the instance type of the primary instance. If the specifications of the read-only instance are lower than the specifications of the primary instance, the read-only instance may encounter issues such as high latency and heavy load.
   * 
   * This parameter is required.
   * 
   * @example
   * rds.mys2.small
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The description of the read-only instance. The description must be 2 to 256 characters in length and can contain letters, digits, underscores (_), and hyphens (-). The value must start with a letter
   * 
   * > The value cannot start with [http:// or https://.](http://https://。)
   * 
   * @example
   * Test read-only instance
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The primary instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The storage capacity of the read-only instance. The storage capacity of the read-only instance must be greater than or equal to that of the primary instance. For more information, see the **Storage capacity** column in [Read-only instance types](https://help.aliyun.com/document_detail/145759.html). This value must be a multiple of 5. Unit: GB.
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
   * 
   * *   **local_ssd**: local SSDs
   * *   **cloud_ssd**: standard SSDs
   * *   **cloud_essd**: enhanced SSDs (ESSDs) of performance level 1 (PL1)
   * *   **cloud_essd2**: ESSDs of PL2
   * *   **cloud_essd3**: ESSDs of PL3
   * 
   * > *   If the primary instance runs MySQL with local disks, you must set this parameter to **local_ssd**. If the primary instance runs MySQL with cloud disks, you must set this parameter to cloud_ssd, cloud_essd, cloud_essd2, or cloud_essd3.
   * > *   If the primary instance runs SQL Server, you must set this parameter to cloud_ssd, cloud_essd, cloud_essd2, or cloud_essd3.
   * 
   * @example
   * local_ssd
   */
  DBInstanceStorageType?: string;
  /**
   * @remarks
   * The ID of the dedicated cluster to which the read-only instance belongs. This parameter is valid when you create the read-only instance in a dedicated cluster.
   * 
   * @example
   * dhg-4n****
   */
  dedicatedHostGroupId?: string;
  /**
   * @remarks
   * Specifies whether to enable the release protection feature for the read-only instance. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * >  You can enable the release protection feature for the read-only instance only when you set the **PayType** parameter to **Postpaid**.
   * 
   * @example
   * true
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The version of the database engine. The read-only instance and the primary instance must run the same major engine version.
   * 
   * *   If the read-only instance runs MySQL, set this parameter to **5.6**, **5.7**, or **8.0**.
   * *   If the read-only instance runs MySQL, set this parameter to **2017_ent, 2019_ent, or 2022_ent**.
   * *   If the read-only instance runs PostgreSQL, set this parameter to **10.0, 11.0, 12.0, 13.0, 14.0, or 15.0**.
   * 
   * This parameter is required.
   * 
   * @example
   * 5.6
   */
  engineVersion?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * None
   */
  gdnInstanceName?: string;
  /**
   * @remarks
   * The network type of the read-only instance. Valid values:
   * 
   * *   **VPC**
   * *   **Classic**
   * 
   * Default value: VPC. If you set this parameter to VPC, you must also specify the **VPCId** and **VSwitchId** parameters.
   * 
   * >  The network type of the read-only instance can be different from the network type of the primary instance.
   * 
   * @example
   * Classic
   */
  instanceNetworkType?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * None
   */
  instructionSetArch?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * None
   */
  ioAccelerationEnabled?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The billing method of the read-only instance. Valid values:
   * 
   * *   **Postpaid**: pay-as-you-go
   * *   **Prepaid**: subscription
   * 
   * This parameter is required.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The renewal cycle of the read-only instance. Valid values:
   * 
   * *   **Year**
   * *   **Month**
   * 
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * The port that can be initialized when you create a read-only ApsaraDB RDS for MySQL instance.
   * 
   * Valid values: 1000 to 65534.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The private IP address of the read-only instance. The private IP address must be within the CIDR block that is supported by the specified vSwitch. The system assigns a private IP address to the read-only instance based on the values of the **VPCId** and **VSwitchId** parameters.
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
   * 717446260784
   */
  promotionCode?: string;
  /**
   * @remarks
   * The region ID. The read-only instance and the primary instance must reside in the same region. You can call the DescribeRegions operation to query the most recent region list.
   * 
   * This parameter is required.
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
   * rg-acfmy****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the host on which the primary instance resides. This parameter is valid when you create the read-only instance in a dedicated cluster.
   * 
   * @example
   * i-bp****
   */
  targetDedicatedHostIdForMaster?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * None
   */
  tddlBizType?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * None
   */
  tddlRegionConfig?: string;
  /**
   * @remarks
   * The subscription duration of the read-only instance. Valid values:
   * 
   * *   If you set the **Period** parameter to **Year**, the value of the **UsedTime** parameter ranges from **1** to **5**.
   * *   If you set the **Period** parameter to **Month**, the value of the **UsedTime** parameter ranges from **1** to **9**.
   * 
   * > If you set the **PayType** parameter to **Prepaid**, you must specify the UsedTime parameter.
   * 
   * @example
   * 1
   */
  usedTime?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID of the read-only instance. If you leave the **InstanceNetworkType** parameter empty or set it to **VPC**, you must also specify this parameter.
   * 
   * > * If the primary instance uses local disks, the read-only instance and the primary instance can belong to the same VPC or different VPCs.
   * > * If the primary instance uses cloud disks, the read-only instance and the primary instance must belong to the same VPC.
   * 
   * @example
   * vpc-uf6f7l4fg90****
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID of the read-only instance. If you leave the **InstanceNetworkType** parameter empty or set it to **VPC**, you must specify the VSwitchId parameter.
   * 
   * @example
   * vsw-uf6adz52c2p****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID. You can call the DescribeRegions operation to query the zone ID.
   * 
   * *   If you use the single-zone deployment method, set this parameter to the ID of one zone. Example: `cn-hangzhou-b`.
   * *   If you use the multi-zone deployment method, set this parameter to the IDs of multiple zones and separate the IDs with colons (:). Example: `cn-hangzhou-b:cn-hangzhou-c`.
   * *   The number of zone IDs that you specify must be less than or equal to the number of nodes created for the read-only instance. If you create a read-only instance that runs RDS Basic Edition, only one node is provisioned. If you create a read-only instance that runs RDS High-availability Edition, one primary node and one secondary node are provisioned.
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

