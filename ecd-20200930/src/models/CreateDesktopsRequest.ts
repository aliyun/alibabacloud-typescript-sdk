// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDesktopsRequestBundleModels extends $dara.Model {
  /**
   * @remarks
   * The number of cloud desktops to create. Valid values: 1 to 300. Default value: 0.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * The bundle ID.
   * 
   * @example
   * b-je9hani001wfn****
   */
  bundleId?: string;
  /**
   * @remarks
   * The name of the cloud desktop. The name must meet the following requirements:
   * 
   * - The name must be 1 to 64 characters in length.
   * 
   * - The name must start with a letter or a Chinese character. It cannot start with `http://` or `https://`.
   * 
   * - The name can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * DemoComputer02
   */
  desktopName?: string;
  /**
   * @remarks
   * The list of end user IDs to whom the cloud desktops are assigned.
   */
  endUserIds?: string[];
  /**
   * @remarks
   * The custom hostname of the cloud desktop. This parameter is supported only for Windows cloud desktops that are in an AD office network.
   * 
   * The hostname must meet the following requirements:
   * 
   * - The hostname must be 2 to 15 characters in length.
   * 
   * - The hostname can contain letters, digits, and hyphens (-). The hostname cannot start or end with a hyphen, contain consecutive hyphens, or consist of only digits.
   * 
   * If you create multiple cloud desktops, you can use the `name_prefix[begin_number,bits]name_suffix` format to specify sequential hostnames for the cloud desktops. For example, if you set the `Hostname` parameter to `ecd-[1,4]-test`, the hostname of the first cloud desktop is `ecd-0001-test`, the second is `ecd-0002-test`, and so on.
   * 
   * - `name_prefix`: the prefix of the hostname.
   * 
   * - `[begin_number,bits]`: The sequential part of the hostname.
   * 
   * - `name_suffix`: the suffix of the hostname.
   * 
   * @example
   * testhost
   */
  hostname?: string;
  /**
   * @remarks
   * Specifies whether to enable disk encryption.
   * 
   * @example
   * false
   */
  volumeEncryptionEnabled?: boolean;
  /**
   * @remarks
   * The ID of the KMS key to use for disk encryption. You can call the [ListKeys](https://help.aliyun.com/document_detail/28951.html) operation to obtain a list of key IDs.
   * 
   * @example
   * 08c33a6f-4e0a-4a1b-a3fa-7ddfa1d4****
   */
  volumeEncryptionKey?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      bundleId: 'BundleId',
      desktopName: 'DesktopName',
      endUserIds: 'EndUserIds',
      hostname: 'Hostname',
      volumeEncryptionEnabled: 'VolumeEncryptionEnabled',
      volumeEncryptionKey: 'VolumeEncryptionKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      bundleId: 'string',
      desktopName: 'string',
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      hostname: 'string',
      volumeEncryptionEnabled: 'boolean',
      volumeEncryptionKey: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endUserIds)) {
      $dara.Model.validateArray(this.endUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDesktopsRequestDesktopAttachment extends $dara.Model {
  /**
   * @remarks
   * The type of the data disk. The system disk and data disk must be of the same type. Valid values:
   * 
   * - cloud_auto: AutoPL SSD
   * 
   * - cloud_essd: enhanced SSD (ESSD)
   * 
   * @example
   * cloud_auto
   */
  dataDiskCategory?: string;
  /**
   * @remarks
   * The PL of the ESSD. This parameter is required only when `DataDiskCategory` is set to `cloud_essd`. Valid values:
   * 
   * - PL0
   * 
   * - PL1
   * 
   * @example
   * PL0
   */
  dataDiskPerLevel?: string;
  /**
   * @remarks
   * The capacity of the data disk, in GiB. Valid values: 40 to 2,040. The value must be a multiple of 10.
   * 
   * @example
   * 40
   */
  dataDiskSize?: number;
  /**
   * @remarks
   * The display language of the cloud desktop\\"s operating system. Valid values:
   * 
   * - zh-CN: Simplified Chinese
   * 
   * - zh-HK: Traditional Chinese (Hong Kong)
   * 
   * - en-US: American English
   * 
   * - ja-JP: Japanese
   * 
   * @example
   * zh-CN
   */
  defaultLanguage?: string;
  /**
   * @remarks
   * The desktop type. You can call the [DescribeDesktopTypes](https://help.aliyun.com/document_detail/188882.html) operation to query the supported desktop types.
   * 
   * @example
   * eds.enterprise_office.8c16g
   */
  desktopType?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * m-39ddhdb0ggzjx*****
   */
  imageId?: string;
  /**
   * @remarks
   * The type of the system disk. The system disk and data disk must be of the same type. Valid values:
   * 
   * - cloud_auto: AutoPL SSD
   * 
   * - cloud_essd: enhanced SSD (ESSD)
   * 
   * @example
   * cloud_auto
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The performance level (PL) of the ESSD. This parameter is required only when `SystemDiskCategory` is set to `cloud_essd`. Valid values:
   * 
   * - PL0
   * 
   * - PL1
   * 
   * @example
   * PL0
   */
  systemDiskPerLevel?: string;
  /**
   * @remarks
   * The capacity of the system disk, in GiB. Valid values: 60 to 500. The value must be a multiple of 10.
   * 
   * @example
   * 40
   */
  systemDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      dataDiskCategory: 'DataDiskCategory',
      dataDiskPerLevel: 'DataDiskPerLevel',
      dataDiskSize: 'DataDiskSize',
      defaultLanguage: 'DefaultLanguage',
      desktopType: 'DesktopType',
      imageId: 'ImageId',
      systemDiskCategory: 'SystemDiskCategory',
      systemDiskPerLevel: 'SystemDiskPerLevel',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDiskCategory: 'string',
      dataDiskPerLevel: 'string',
      dataDiskSize: 'number',
      defaultLanguage: 'string',
      desktopType: 'string',
      imageId: 'string',
      systemDiskCategory: 'string',
      systemDiskPerLevel: 'string',
      systemDiskSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDesktopsRequestDesktopTimers extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow end users to configure the scheduled task.
   * 
   * @example
   * true
   */
  allowClientSetting?: boolean;
  /**
   * @remarks
   * The cron expression for the scheduled task.
   * 
   * >Notice: 
   * 
   * The cron expression is evaluated in UTC. For example, to specify 00:00 (UTC+8) every day, set the value to `0 0 16 ? * 1,2,3,4,5,6,7`.
   * 
   * @example
   * 0 40 7 ? * 1,2,3,4,5,6,7
   */
  cronExpression?: string;
  /**
   * @remarks
   * Specifies whether to forcibly execute the scheduled task.
   * 
   * @example
   * true
   */
  enforce?: boolean;
  /**
   * @remarks
   * The interval in minutes.
   * 
   * @example
   * 10
   */
  interval?: number;
  /**
   * @remarks
   * The operation to perform for the scheduled task. This parameter is valid only for scheduled tasks that are triggered by user disconnection.
   * 
   * @example
   * Shutdown
   */
  operationType?: string;
  /**
   * @remarks
   * The disk reset type.
   * 
   * @example
   * RESET_TYPE_SYSTEM
   */
  resetType?: string;
  /**
   * @remarks
   * The type of the scheduled task.
   * 
   * @example
   * NoOperationReboot
   */
  timerType?: string;
  static names(): { [key: string]: string } {
    return {
      allowClientSetting: 'AllowClientSetting',
      cronExpression: 'CronExpression',
      enforce: 'Enforce',
      interval: 'Interval',
      operationType: 'OperationType',
      resetType: 'ResetType',
      timerType: 'TimerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowClientSetting: 'boolean',
      cronExpression: 'string',
      enforce: 'boolean',
      interval: 'number',
      operationType: 'string',
      resetType: 'string',
      timerType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDesktopsRequestMonthDesktopSetting extends $dara.Model {
  /**
   * @remarks
   * > This parameter is for internal use only.
   * 
   * @example
   * null
   */
  buyerId?: number;
  /**
   * @remarks
   * > This parameter is for internal use only.
   * 
   * @example
   * null
   */
  desktopId?: string;
  /**
   * @remarks
   * The duration in hours for the monthly usage package. Valid values: 120, 250, and 360.
   * 
   * @example
   * null
   */
  useDuration?: number;
  static names(): { [key: string]: string } {
    return {
      buyerId: 'BuyerId',
      desktopId: 'DesktopId',
      useDuration: 'UseDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyerId: 'number',
      desktopId: 'string',
      useDuration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDesktopsRequestPurchaseOptions extends $dara.Model {
  /**
   * @remarks
   * The monthly credit package. This parameter is used to select a credit package when you purchase agent resources. Valid values: 200, 1600, and 4000.
   * 
   * @example
   * 200
   */
  monthlyCredits?: number;
  static names(): { [key: string]: string } {
    return {
      monthlyCredits: 'MonthlyCredits',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monthlyCredits: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDesktopsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDesktopsRequestUserCommands extends $dara.Model {
  /**
   * @remarks
   * The content of the script.
   * 
   * @example
   * bmV3LWl0ZW0gZDpcdGVzdF91c2VyX2NvbW1hbmRzLnR4dCAtdHlwZSBm****
   */
  content?: string;
  /**
   * @remarks
   * The encoding format of the script content specified in the `Content` parameter.
   * 
   * @example
   * Base64
   */
  contentEncoding?: string;
  /**
   * @remarks
   * The script type.
   * 
   * @example
   * RunPowerShellScript
   */
  contentType?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentEncoding: 'ContentEncoding',
      contentType: 'ContentType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentEncoding: 'string',
      contentType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDesktopsRequest extends $dara.Model {
  /**
   * @remarks
   * The number of cloud desktops to create. Valid values: 1 to 300. Default value: 1.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * The ID of the application control policy.
   * 
   * @example
   * bwr-245d4e0e6b7d42f5afa97eb3fbc7e488
   */
  appRuleId?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic payment.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the cloud desktops. This parameter is valid only when `ChargeType` is set to `PrePaid`.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The bundle ID. If you do not specify this parameter, you must use the `DesktopAttachment` parameter to configure the cloud desktop.
   * 
   * @example
   * b-je9hani001wfn****
   */
  bundleId?: string;
  /**
   * @remarks
   * An array of bundle objects. Use this parameter to create cloud desktops from one or more bundles in a single call.
   * 
   * **if can be null:**
   * true
   */
  bundleModels?: CreateDesktopsRequestBundleModels[];
  /**
   * @remarks
   * > This parameter is for internal use only.
   * 
   * @example
   * PBKB1QbqEl2tslEuU6gRrLxvCFBU2M%2FVD0Eru6Oo%2FI9LTU3XQhvq3PGMWarE%2BPJdkNvCqT3blqlRSthNy4A%2BJQ%3D%3D
   */
  channelCookie?: string;
  /**
   * @remarks
   * The billing method of the cloud desktops.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The parameters for creating a cloud desktop without a bundle. This parameter is used only if `BundleId` is not specified.
   */
  desktopAttachment?: CreateDesktopsRequestDesktopAttachment;
  /**
   * @remarks
   * The private IP address of the cloud desktop.
   * 
   * @example
   * 10.0.0.1
   */
  desktopMemberIp?: string;
  /**
   * @remarks
   * The name of the cloud desktop. The name must meet the following requirements:
   * 
   * - The name must be 1 to 64 characters in length.
   * 
   * - The name must start with a letter or a Chinese character. It cannot start with `http://` or `https://`.
   * 
   * - The name can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * DemoComputer01
   */
  desktopName?: string;
  /**
   * @remarks
   * Specifies whether to automatically append a suffix to the value of `DesktopName` when you create multiple cloud desktops.
   * 
   * @example
   * false
   */
  desktopNameSuffix?: boolean;
  /**
   * @remarks
   * The details of the scheduled tasks for the cloud desktops. This parameter is being deprecated. We recommend that you use `TimerGroupId` instead.
   * 
   * **if can be null:**
   * true
   */
  desktopTimers?: CreateDesktopsRequestDesktopTimers[];
  /**
   * @remarks
   * > This parameter is for internal use only.
   * 
   * @example
   * cn-hangzhou+dir-300943****
   */
  directoryId?: string;
  /**
   * @remarks
   * The IDs of the end users to assign to the cloud desktops. You can specify up to 100 IDs.
   * 
   * @example
   * 123456789
   */
  endUserId?: string[];
  /**
   * @remarks
   * The extended information in a JSON string. This parameter is for internal use only.
   * 
   * @example
   * {}
   */
  extendInfo?: string;
  /**
   * @remarks
   * The ID of the desktop pool.
   * 
   * @example
   * dg-boyczi8enfyc5****
   */
  groupId?: string;
  /**
   * @remarks
   * The custom hostname of the cloud desktop. This parameter is supported only for Windows cloud desktops that are in an AD office network.
   * 
   * The hostname must meet the following requirements:
   * 
   * - The hostname must be 2 to 15 characters in length.
   * 
   * - The hostname can contain letters, digits, and hyphens (-). The hostname cannot start or end with a hyphen, contain consecutive hyphens, or consist of only digits.
   * 
   * If you create multiple cloud desktops, you can use the `name_prefix[begin_number,bits]name_suffix` format to specify sequential hostnames for the cloud desktops. For example, if you set the `Hostname` parameter to `ecd-[1,4]-test`, the hostname of the first cloud desktop is `ecd-0001-test`, the second is `ecd-0002-test`, and so on.
   * 
   * - `name_prefix`: the prefix of the hostname.
   * 
   * - `[begin_number,bits]`: The sequential part of the hostname.
   * 
   * - `name_suffix`: the suffix of the hostname.
   * 
   * @example
   * testhost
   */
  hostname?: string;
  /**
   * @remarks
   * The parameters for purchasing a monthly usage package.
   */
  monthDesktopSetting?: CreateDesktopsRequestMonthDesktopSetting;
  /**
   * @remarks
   * The ID of the office network.
   * 
   * @example
   * cn-hangzhou+dir-387822****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The subscription duration. The unit is specified by the `PeriodUnit` parameter. This parameter is required only when `ChargeType` is set to `PrePaid`.
   * 
   * - If `PeriodUnit` is set to `Month`, valid values are:
   * 
   *   - 1
   * 
   *   - 2
   * 
   *   - 3
   * 
   *   - 6
   * 
   * - If `PeriodUnit` is set to `Year`, valid values are:
   * 
   *   - 1
   * 
   *   - 2
   * 
   *   - 3
   * 
   *   - 4
   * 
   *   - 5
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * @example
   * system-all-enabled-policy
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The promotion ID.
   * 
   * @example
   * 23141
   */
  promotionId?: string;
  /**
   * @remarks
   * The additional parameters for a specific purchase type.
   */
  purchaseOptions?: CreateDesktopsRequestPurchaseOptions;
  /**
   * @remarks
   * The ID of the bandwidth QoS policy.
   * 
   * @example
   * qos-52fqmg6kvyro7zu4l
   */
  qosRuleId?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the regions that support Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The UID of the resource owner in reseller mode. This parameter is required only in reseller mode.
   * 
   * @example
   * 1828644634819902
   */
  resellerOwnerUid?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-3mtuc28rx95lx****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * > This parameter is for internal use only.
   * 
   * @example
   * spn-26c1b7bcrjcI****
   */
  savingPlanId?: string;
  /**
   * @remarks
   * The ID of the automatic snapshot policy.
   * 
   * @example
   * sp-28mp6my0l6zow****
   */
  snapshotPolicyId?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-bp1m*****
   */
  subnetId?: string;
  /**
   * @remarks
   * The tags to add to the cloud desktops. A resource can have up to 20 tags.
   */
  tag?: CreateDesktopsRequestTag[];
  /**
   * @remarks
   * The ID of the scheduled task group.
   * 
   * @example
   * ccg-0caoeogrk9m5****
   */
  timerGroupId?: string;
  /**
   * @remarks
   * The user assignment mode for the cloud desktops.
   * 
   * > If you do not specify the `EndUserId` parameter, the created cloud desktops are unassigned.
   * 
   * @example
   * ALL
   */
  userAssignMode?: string;
  /**
   * @remarks
   * The custom scripts to run on the cloud desktops after they start.
   */
  userCommands?: CreateDesktopsRequestUserCommands[];
  /**
   * @remarks
   * > This parameter is for internal use only.
   * 
   * @example
   * username
   */
  userName?: string;
  /**
   * @remarks
   * Specifies whether to enable disk encryption.
   * 
   * @example
   * false
   */
  volumeEncryptionEnabled?: boolean;
  /**
   * @remarks
   * The ID of the KMS key to use for disk encryption. You can call the [ListKeys](https://help.aliyun.com/document_detail/28951.html) operation to obtain a list of key IDs.
   * 
   * @example
   * 08c33a6f-4e0a-4a1b-a3fa-7ddfa1d4****
   */
  volumeEncryptionKey?: string;
  /**
   * @remarks
   * > This parameter is for internal use only.
   * 
   * @example
   * vpc-uf6w8u60n8xbkg5el****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      appRuleId: 'AppRuleId',
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      bundleId: 'BundleId',
      bundleModels: 'BundleModels',
      channelCookie: 'ChannelCookie',
      chargeType: 'ChargeType',
      desktopAttachment: 'DesktopAttachment',
      desktopMemberIp: 'DesktopMemberIp',
      desktopName: 'DesktopName',
      desktopNameSuffix: 'DesktopNameSuffix',
      desktopTimers: 'DesktopTimers',
      directoryId: 'DirectoryId',
      endUserId: 'EndUserId',
      extendInfo: 'ExtendInfo',
      groupId: 'GroupId',
      hostname: 'Hostname',
      monthDesktopSetting: 'MonthDesktopSetting',
      officeSiteId: 'OfficeSiteId',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      policyGroupId: 'PolicyGroupId',
      promotionId: 'PromotionId',
      purchaseOptions: 'PurchaseOptions',
      qosRuleId: 'QosRuleId',
      regionId: 'RegionId',
      resellerOwnerUid: 'ResellerOwnerUid',
      resourceGroupId: 'ResourceGroupId',
      savingPlanId: 'SavingPlanId',
      snapshotPolicyId: 'SnapshotPolicyId',
      subnetId: 'SubnetId',
      tag: 'Tag',
      timerGroupId: 'TimerGroupId',
      userAssignMode: 'UserAssignMode',
      userCommands: 'UserCommands',
      userName: 'UserName',
      volumeEncryptionEnabled: 'VolumeEncryptionEnabled',
      volumeEncryptionKey: 'VolumeEncryptionKey',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      appRuleId: 'string',
      autoPay: 'boolean',
      autoRenew: 'boolean',
      bundleId: 'string',
      bundleModels: { 'type': 'array', 'itemType': CreateDesktopsRequestBundleModels },
      channelCookie: 'string',
      chargeType: 'string',
      desktopAttachment: CreateDesktopsRequestDesktopAttachment,
      desktopMemberIp: 'string',
      desktopName: 'string',
      desktopNameSuffix: 'boolean',
      desktopTimers: { 'type': 'array', 'itemType': CreateDesktopsRequestDesktopTimers },
      directoryId: 'string',
      endUserId: { 'type': 'array', 'itemType': 'string' },
      extendInfo: 'string',
      groupId: 'string',
      hostname: 'string',
      monthDesktopSetting: CreateDesktopsRequestMonthDesktopSetting,
      officeSiteId: 'string',
      period: 'number',
      periodUnit: 'string',
      policyGroupId: 'string',
      promotionId: 'string',
      purchaseOptions: CreateDesktopsRequestPurchaseOptions,
      qosRuleId: 'string',
      regionId: 'string',
      resellerOwnerUid: 'number',
      resourceGroupId: 'string',
      savingPlanId: 'string',
      snapshotPolicyId: 'string',
      subnetId: 'string',
      tag: { 'type': 'array', 'itemType': CreateDesktopsRequestTag },
      timerGroupId: 'string',
      userAssignMode: 'string',
      userCommands: { 'type': 'array', 'itemType': CreateDesktopsRequestUserCommands },
      userName: 'string',
      volumeEncryptionEnabled: 'boolean',
      volumeEncryptionKey: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bundleModels)) {
      $dara.Model.validateArray(this.bundleModels);
    }
    if(this.desktopAttachment && typeof (this.desktopAttachment as any).validate === 'function') {
      (this.desktopAttachment as any).validate();
    }
    if(Array.isArray(this.desktopTimers)) {
      $dara.Model.validateArray(this.desktopTimers);
    }
    if(Array.isArray(this.endUserId)) {
      $dara.Model.validateArray(this.endUserId);
    }
    if(this.monthDesktopSetting && typeof (this.monthDesktopSetting as any).validate === 'function') {
      (this.monthDesktopSetting as any).validate();
    }
    if(this.purchaseOptions && typeof (this.purchaseOptions as any).validate === 'function') {
      (this.purchaseOptions as any).validate();
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(Array.isArray(this.userCommands)) {
      $dara.Model.validateArray(this.userCommands);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

