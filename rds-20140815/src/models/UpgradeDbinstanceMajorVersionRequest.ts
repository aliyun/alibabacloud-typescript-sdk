// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeDBInstanceMajorVersionRequest extends $dara.Model {
  allowDDL?: boolean;
  /**
   * @remarks
   * Specifies when to execute statistics collection for the database.
   * Valid values:
   * - **Before**: collects statistics before the cutover. This ensures business stability. If the data volume of the instance is too large, the upgrade may take a long time.
   * - **After**: collects statistics after the cutover. This accelerates the instance upgrade. Accessing tables for which no statistics are generated after the upgrade may lead to inaccurate execution plans and even database breakdown during peak hours.
   * 
   * > For scenarios where no cutover is performed, collecting statistics before the cutover means collecting statistics before the new instance enables read and write operations, and collecting statistics after the cutover means collecting statistics after the new instance enables read and write operations.
   * 
   * @example
   * After
   */
  collectStatMode?: string;
  /**
   * @remarks
   * An internal reserved field. You do not need to specify this parameter.
   * 
   * @example
   * An internal reserved field. You do not need to specify this parameter
   */
  customExtraInfo?: string;
  /**
   * @remarks
   * The instance type after the upgrade. The CPU and memory configurations must be greater than or equal to those of the original instance. When **UpgradeMode** is set to **inPlaceUpgrade** or **zeroDownTimeUpgrade**, you **do not need to configure** this parameter.
   * 
   * For example, if the original instance type is `pg.n2.small.2c` with 1 core and 2 GB of memory, you can upgrade it to `pg.n2.medium.2c` with 2 cores and 4 GB of memory.
   * 
   * > For more information about ApsaraDB RDS for PostgreSQL instance types, see [Primary ApsaraDB RDS for PostgreSQL instance types](https://help.aliyun.com/document_detail/276990.html).
   * 
   * @example
   * pg.n2.medium.2c
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The ID of the original instance.
   * 
   * @example
   * pgm-bp1gm3yh0ht1****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The instance storage after the upgrade. Unit: GB. When **UpgradeMode** (upgrade mode) is set to **inPlaceUpgrade** or **zeroDownTimeUpgrade**, you **do not need to configure** this parameter.
   * 
   * Valid values:
   * - **ESSD PL1 cloud disk**: 20 GB to 3,200 GB
   * - **ESSD PL2 cloud disk**: 500 GB to 3,200 GB
   * - **ESSD PL3 cloud disk**: 1,500 GB to 3,200 GB
   * - **premium cloud disk**: 40 GB to 2,000 GB
   * 
   * > When you upgrade the major database version of an instance with premium local SSDs, storage capacity reduction is supported. For more information about the minimum storage capacity, see [Upgrade the major engine version](https://help.aliyun.com/document_detail/203309.html).
   * 
   * @example
   * 20
   */
  DBInstanceStorage?: number;
  /**
   * @remarks
   * The storage type of the instance after the upgrade.
   * 
   * Valid values:
   * - **cloud_ssd**: standard SSD cloud disk
   * - **cloud_essd**: ESSD PL1 cloud disk
   * - **cloud_essd2**: ESSD PL2 cloud disk
   * - **cloud_essd3**: ESSD PL3 cloud disk
   * - **general_essd**: premium cloud disk
   * 
   * The major engine version upgrade feature is based on cloud disk snapshots. The following storage types are supported after the upgrade:
   * - When the original instance uses standard SSD cloud disks, you can select standard SSD cloud disks.
   * - When the original instance uses ESSD cloud disks, you can select ESSD PL1 cloud disks, ESSD PL2 cloud disks, ESSD PL3 cloud disks, or premium cloud disks.
   * - When the original instance uses premium local SSDs, you can select ESSD PL1 cloud disks, ESSD PL2 cloud disks, ESSD PL3 cloud disks, or premium cloud disks.
   * 
   * @example
   * cloud_essd
   */
  DBInstanceStorageType?: string;
  /**
   * @remarks
   * The network type of the instance after the upgrade. Set the value to VPC. Only VPC-connected instances support major engine version upgrades.
   * 
   * If the instance is connected to the classic network, switch the network type to VPC first. For more information about how to view or switch the network type, see [Switch the network type](https://help.aliyun.com/document_detail/96761.html).
   * 
   * @example
   * VPC
   */
  instanceNetworkType?: string;
  /**
   * @remarks
   * The billing method. Set the value to Postpaid, which indicates the pay-as-you-go billing method.
   * 
   * > If you want to change the billing method of the instance after the upgrade, see [Switch the billing method from pay-as-you-go to subscription](https://help.aliyun.com/document_detail/96743.html).
   * 
   * This parameter is required.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * A reserved parameter. You do not need to configure this parameter.
   * 
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * You do not need to configure this parameter. It specifies the internal IP address of the target instance. By default, the system automatically allocates an IP address based on the VPCId and vSwitchId parameters.
   * 
   * @example
   * 172.16.XX.XX
   */
  privateIpAddress?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The cutover configuration. Specifies whether to switch traffic to the new-version instance based on your business requirements.
   * 
   * Valid values:
   * - **true**: performs the cutover and automatic switchover. This option is generally used to execute a formal upgrade after you confirm that your business can run stably on the new version.
   * - **false**: does not perform the cutover and does not perform automatic switchover. This option is generally used to test the compatibility of your current business with the new version before a formal upgrade.
   * 
   * > - If you choose to perform the cutover:
   * >     - Backoff is not supported after the cutover. Proceed with caution.
   * >     - During the switchover procedure, the original instance becomes read-only and your business cannot write data to the instance. Make sure that you execute the cutover during off-peak hours.
   * >     - If read-only instances are attached to the original instance, you cannot perform the cutover. You can only upgrade the instance without performing the cutover, and the original read-only instances are not cloned. After the upgrade is complete, you must create PostgreSQL read-only instances for the new-version instance.
   * > - If you choose not to perform the cutover:
   * >     - Your business on the original instance is not affected during the migration.
   * >     - If you upgrade the instance without performing the cutover, you must change the database endpoint in your application to the endpoint of the new instance after the migration is complete. For more information about how to view the endpoint, see [View or change the internal and public endpoints and port numbers](https://help.aliyun.com/document_detail/96788.html).
   * 
   * @example
   * false
   */
  switchOver?: string;
  /**
   * @remarks
   * A reserved parameter. You do not need to configure this parameter.
   * 
   * @example
   * 2021-07-10T13:15:12Z
   */
  switchTime?: string;
  /**
   * @remarks
   * The cutover time. This parameter is used together with SwitchOver and takes effect only when **SwitchOver** is set to **true**.
   * 
   * Valid values:
   * - **Immediate**: The cutover takes effect immediately.
   * - **MaintainTime**: The cutover takes effect within the maintenance window. You can call the ModifyDBInstanceMaintainTime operation to modify the maintenance window.
   * 
   * @example
   * Immediate
   */
  switchTimeMode?: string;
  /**
   * @remarks
   * The target major engine version after the upgrade. The value must be the same as the target version specified when you perform the pre-upgrade check.
   * 
   * > You can call the UpgradeDBInstanceMajorVersionPrecheck operation to perform a pre-upgrade check for a major engine version upgrade.
   * 
   * @example
   * 13.0
   */
  targetMajorVersion?: string;
  /**
   * @remarks
   * The upgrade mode. When **SwitchOver** is set to **true**, you must configure this parameter. Valid values:
   * 
   * - **inPlaceUpgrade**: in-place upgrade. The major engine version upgrade task is executed on the original instance, and no new-version instance is created. The major engine version of the original instance is upgraded, and the original instance inherits the existing orders, instance name, tags, CloudMonitor alert rules, and backup rules.
   * - **blueGreenDeployment**: blue-green deployment. The major engine version upgrade retains the original instance and creates a new-version instance. You are not charged for the new instance while it is being created, but you are charged after it is created, and the billing method may change. After the upgrade is complete, both the original instance and the new instance incur fees, and the new instance does not enjoy the discounts of the original instance.
   * - **zeroDownTimeUpgrade**: zero-downtime upgrade. The system uses pg_upgrade to upgrade the original instance to the target version and implements incremental updates through native logical replication. Manual switchover is supported during the upgrade procedure, and you can verify the higher-version instance before the switchover. From the start of the upgrade to the manual switchover, the instance can maintain normal read and write operations. During the switchover, the read-only duration of the instance is measured in seconds.
   * 
   * @example
   * inPlaceUpgrade
   */
  upgradeMode?: string;
  /**
   * @remarks
   * A reserved parameter. You do not need to configure this parameter.
   * 
   * @example
   * 1
   */
  usedTime?: string;
  /**
   * @remarks
   * The VPC ID. When **UpgradeMode** is set to **inPlaceUpgrade** or **zeroDownTimeUpgrade**, you **do not need to configure** this parameter.
   * 
   * You can call the DescribeDBInstanceAttribute operation to view the VPC ID of the original instance.
   * 
   * @example
   * vpc-bp1opxu1zkhn00gzv****
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID of the target instance. When **UpgradeMode** (upgrade mode) is set to **inPlaceUpgrade** or **zeroDownTimeUpgrade**, you **do not need to configure** this parameter.
   * - When the original instance is a Basic Edition instance, configure the vSwitch ID of the target instance.
   * - When the original instance is a high availability instance, you can configure the vSwitch IDs of the target primary and secondary instances, separated by commas (,).
   * 
   * > The configured vSwitch of the target instance must be in the same zone as the original instance. You can call the DescribeVSwitches operation to query the vSwitch ID.
   * 
   * @example
   * vsw-bp10aqj6o4lclxdrm****,vsw-bp10aqj6o4lclxdrm****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the destination primary zone. When **UpgradeMode** is set to **inPlaceUpgrade** or **zeroDownTimeUpgrade**, you **do not need to configure** this parameter.
   * 
   * You can call the DescribeRegions operation to view the zone ID.
   * 
   * ApsaraDB RDS for PostgreSQL allows you to configure the new instance in a different zone within the same region as the original instance after the upgrade.
   * 
   * @example
   * cn-hangzhou-j
   */
  zoneId?: string;
  /**
   * @remarks
   * The ID of the secondary zone of the target instance. This parameter is available only when the original instance is a high availability instance. When **UpgradeMode** (upgrade mode) is set to **inPlaceUpgrade** or **zeroDownTimeUpgrade**, you **do not need to configure** this parameter.
   * 
   * ApsaraDB RDS for PostgreSQL allows you to configure the new secondary instance in a different zone within the same region as the original instance after the upgrade.
   * 
   * You can call the DescribeRegions operation to view the zone ID.
   * 
   * @example
   * cn-hangzhou-j
   */
  zoneIdSlave1?: string;
  /**
   * @remarks
   * A reserved parameter. You do not need to configure this parameter.
   * 
   * @example
   * cn-hangzhou-j
   */
  zoneIdSlave2?: string;
  static names(): { [key: string]: string } {
    return {
      allowDDL: 'AllowDDL',
      collectStatMode: 'CollectStatMode',
      customExtraInfo: 'CustomExtraInfo',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceId: 'DBInstanceId',
      DBInstanceStorage: 'DBInstanceStorage',
      DBInstanceStorageType: 'DBInstanceStorageType',
      instanceNetworkType: 'InstanceNetworkType',
      payType: 'PayType',
      period: 'Period',
      privateIpAddress: 'PrivateIpAddress',
      resourceOwnerId: 'ResourceOwnerId',
      switchOver: 'SwitchOver',
      switchTime: 'SwitchTime',
      switchTimeMode: 'SwitchTimeMode',
      targetMajorVersion: 'TargetMajorVersion',
      upgradeMode: 'UpgradeMode',
      usedTime: 'UsedTime',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
      zoneIdSlave1: 'ZoneIdSlave1',
      zoneIdSlave2: 'ZoneIdSlave2',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowDDL: 'boolean',
      collectStatMode: 'string',
      customExtraInfo: 'string',
      DBInstanceClass: 'string',
      DBInstanceId: 'string',
      DBInstanceStorage: 'number',
      DBInstanceStorageType: 'string',
      instanceNetworkType: 'string',
      payType: 'string',
      period: 'string',
      privateIpAddress: 'string',
      resourceOwnerId: 'number',
      switchOver: 'string',
      switchTime: 'string',
      switchTimeMode: 'string',
      targetMajorVersion: 'string',
      upgradeMode: 'string',
      usedTime: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
      zoneIdSlave1: 'string',
      zoneIdSlave2: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

