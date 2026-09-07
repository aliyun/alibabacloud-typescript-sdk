// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDesktopsRequestBundleModels extends $dara.Model {
  /**
   * @remarks
   * The number of cloud computers to create. Valid values: 1 to 300. Default value: 0.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * The cloud computer template ID.
   * 
   * @example
   * b-je9hani001wfn****
   */
  bundleId?: string;
  /**
   * @remarks
   * The cloud computer name. The naming rules are as follows:
   * 
   * - The name can be up to 64 characters in length.
   * - The name must start with a letter or a Chinese character and cannot start with `http://` or `https://`.
   * - The name can contain Chinese characters, letters, digits, colons (:), underscores (_), periods (.), or hyphens (-).
   * 
   * @example
   * DemoComputer02
   */
  desktopName?: string;
  /**
   * @remarks
   * The list of users to whom the cloud computers are assigned.
   */
  endUserIds?: string[];
  /**
   * @remarks
   * The custom hostname of the cloud computer. Only cloud computers with a Windows operating system in an AD office network are supported.
   * 
   * The naming rules for the hostname are as follows:
   * 
   * - The hostname must be 2 to 15 characters in length.
   * - The hostname can contain letters, digits, or hyphens (-). It cannot start or end with a hyphen, cannot contain consecutive hyphens, and cannot consist of only digits.
   * 
   * When creating multiple cloud computers, you can use the `name_prefix[begin_number,bits]name_suffix` format to name them uniformly. For example, if Hostname is set to ecd-[1,4]-test, the hostname of the first cloud computer is ecd-0001-test, the hostname of the second cloud computer is ecd-0002-test, and so on.
   * 
   * - `name_prefix`: the prefix of the hostname.
   * - `[begin_number,bits]`: the sequential number in the hostname. `begin_number` specifies the start number. Valid values: 0 to 999999. Default value: 0. `bits` specifies the number of digits. Valid values: 1 to 6. Default value: 6.
   * - `name_suffix`: the suffix of the hostname.
   * 
   * @example
   * testhost
   */
  hostname?: string;
  /**
   * @remarks
   * Specifies whether to enable cloud disk encryption.
   * 
   * @example
   * false
   */
  volumeEncryptionEnabled?: boolean;
  /**
   * @remarks
   * The ID of the Key Management Service (KMS) key used for cloud disk encryption. Call [ListKeys](https://help.aliyun.com/document_detail/28951.html) to query available keys.
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
   * The type of the data cloud disk. The system cloud disk and data cloud disk must be of the same type. Valid values:
   * - cloud_auto: enhanced SSD (ESSD) AutoPL cloud disk
   * - cloud_essd: ESSD cloud disk
   * 
   * @example
   * cloud_auto
   */
  dataDiskCategory?: string;
  /**
   * @remarks
   * The performance level of the ESSD cloud disk. This parameter is required if you select an ESSD cloud disk. Valid values:
   * - PL0
   * - PL1
   * 
   * @example
   * PL0
   */
  dataDiskPerLevel?: string;
  /**
   * @remarks
   * The capacity of the user disk. Valid values: 40 to 2040. The value must be a multiple of 10. Unit: GiB.
   * 
   * @example
   * 40
   */
  dataDiskSize?: number;
  /**
   * @remarks
   * The language. Valid values:
   * - zh-CN
   * - zh-HK
   * - en-US
   * - ja-JP
   * 
   * @example
   * zh-CN
   */
  defaultLanguage?: string;
  /**
   * @remarks
   * The cloud computer specification. You can call [DescribeDesktopTypes](https://help.aliyun.com/document_detail/188882.html) to query the specification IDs supported by cloud computers.
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
   * The type of the system cloud disk. The system cloud disk and data cloud disk must be of the same type. Valid values:
   * - cloud_auto: enhanced SSD (ESSD) AutoPL cloud disk
   * - cloud_essd: ESSD cloud disk
   * 
   * @example
   * cloud_auto
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The performance level of the ESSD cloud disk. This parameter is required if you select an ESSD cloud disk. Valid values:
   * - PL0
   * - PL1
   * 
   * @example
   * PL0
   */
  systemDiskPerLevel?: string;
  /**
   * @remarks
   * The capacity of the system cloud disk. Valid values: 40 to 2040. The value must be a multiple of 10. Unit: GiB.
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

export class CreateDesktopsRequestDesktopNameModel extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically append a suffix to the cloud computer name when creating multiple cloud computers in a batch. Default value: true.
   */
  desktopNameIsSuffix?: boolean;
  static names(): { [key: string]: string } {
    return {
      desktopNameIsSuffix: 'DesktopNameIsSuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopNameIsSuffix: 'boolean',
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
   * Specifies whether to allow end users to configure scheduled tasks on their own.
   * 
   * @example
   * true
   */
  allowClientSetting?: boolean;
  /**
   * @remarks
   * The cron expression of the scheduled task.
   * 
   * >Notice: Specify the time in UTC. For example, to schedule a task at 00:00 (UTC+8) every day, set this parameter to 0 0 16 ? * 1,2,3,4,5,6,7.</notice>
   * 
   * @example
   * 0 40 7 ? * 1,2,3,4,5,6,7
   */
  cronExpression?: string;
  /**
   * @remarks
   * Specifies whether to forcefully execute the scheduled task.
   * 
   * @example
   * true
   */
  enforce?: boolean;
  /**
   * @remarks
   * The time interval. Unit: minutes.
   * 
   * @example
   * 10
   */
  interval?: number;
  /**
   * @remarks
   * The operation type of the scheduled task. Currently, only the disconnection scheduled task is supported.
   * 
   * @example
   * Shutdown
   */
  operationType?: string;
  /**
   * @remarks
   * The reset type of the cloud computer.
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
   * > This field is not publicly available.
   * 
   * @example
   * null
   */
  buyerId?: number;
  /**
   * @remarks
   * > This field is not publicly available.
   * 
   * @example
   * null
   */
  desktopId?: string;
  /**
   * @remarks
   * The plan selected when purchasing a monthly hours package. Valid values: 120, 250, and 360.
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
   * The EDS credit package quota.
   * 
   * @example
   * 10000
   */
  creditPackageAmountSpec?: number;
  /**
   * @remarks
   * The EDS credit package duration.
   * 
   * @example
   * 1
   */
  creditPackagePeriod?: number;
  /**
   * @remarks
   * The unit of the credit package duration.
   * 
   * @example
   * Month
   */
  creditPackagePeriodUnit?: string;
  /**
   * @remarks
   * The monthly credit package. This parameter specifies the credit plan when purchasing Agent resources. Valid values: 200, 1600, and 4000.
   * 
   * @example
   * 200
   */
  monthlyCredits?: number;
  static names(): { [key: string]: string } {
    return {
      creditPackageAmountSpec: 'CreditPackageAmountSpec',
      creditPackagePeriod: 'CreditPackagePeriod',
      creditPackagePeriodUnit: 'CreditPackagePeriodUnit',
      monthlyCredits: 'MonthlyCredits',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creditPackageAmountSpec: 'number',
      creditPackagePeriod: 'number',
      creditPackagePeriodUnit: 'string',
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
   * The tag key. You can specify 1 to 20 tag keys.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You can specify 1 to 20 tag values.
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
   * The command content.
   * 
   * @example
   * bmV3LWl0ZW0gZDpcdGVzdF91c2VyX2NvbW1hbmRzLnR4dCAtdHlwZSBm****
   */
  content?: string;
  /**
   * @remarks
   * The encoding method of the command content (CommandContent).
   * 
   * @example
   * Base64
   */
  contentEncoding?: string;
  /**
   * @remarks
   * The language type of the command.
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
   * The number of cloud computers to create. Valid values: 1 to 300. Default value: 1.
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
   * Specifies whether to enable auto-renewal. This parameter takes effect only when `ChargeType` is set to `PrePaid`.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The cloud computer template ID. If no template ID is specified, you can create a cloud computer by providing the required fields.
   * 
   * @example
   * b-je9hani001wfn****
   */
  bundleId?: string;
  /**
   * @remarks
   * The list of cloud computer templates.
   * 
   * **if can be null:**
   * true
   */
  bundleModels?: CreateDesktopsRequestBundleModels[];
  /**
   * @remarks
   * > This field is not publicly available.
   * 
   * @example
   * PBKB1QbqEl2tslEuU6gRrLxvCFBU2M%2FVD0Eru6Oo%2FI9LTU3XQhvq3PGMWarE%2BPJdkNvCqT3blqlRSthNy4A%2BJQ%3D%3D
   */
  channelCookie?: string;
  /**
   * @remarks
   * The billing method of the cloud computer.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The parameters for creating a cloud computer without a template. This parameter is invalid when the BundleId parameter is specified.
   */
  desktopAttachment?: CreateDesktopsRequestDesktopAttachment;
  /**
   * @remarks
   * The private IP address of the cloud computer.
   * 
   * @example
   * 10.0.0.1
   */
  desktopMemberIp?: string;
  /**
   * @remarks
   * The cloud computer name. The naming rules are as follows:
   * 
   * - The name can be up to 64 characters in length.
   * - The name must start with a letter or a Chinese character and cannot start with `http://` or `https://`.
   * - The name can contain Chinese characters, letters, digits, colons (:), underscores (_), periods (.), or hyphens (-).
   * 
   * @example
   * DemoComputer01
   */
  desktopName?: string;
  /**
   * @remarks
   * Controls the format of the cloud computer name.
   */
  desktopNameModel?: CreateDesktopsRequestDesktopNameModel;
  /**
   * @remarks
   * Specifies whether to automatically append a suffix to the cloud computer name when creating multiple cloud computers in a batch.
   * 
   * @example
   * false
   */
  desktopNameSuffix?: boolean;
  /**
   * @remarks
   * The details of the cloud computer scheduled tasks. This parameter is being deprecated. Use the TimerGroupId parameter instead.
   * 
   * **if can be null:**
   * true
   */
  desktopTimers?: CreateDesktopsRequestDesktopTimers[];
  /**
   * @remarks
   * > This parameter is not available for use.
   * 
   * @example
   * cn-hangzhou+dir-300943****
   */
  directoryId?: string;
  /**
   * @remarks
   * The list of authorized user IDs to add to the cloud computer. You can specify 1 to 100 user IDs.
   * 
   * @example
   * 123456789
   */
  endUserId?: string[];
  /**
   * @remarks
   * The extended information in JSON string format. This parameter is available only for internal customers.
   * 
   * @example
   * {}
   */
  extendInfo?: string;
  /**
   * @remarks
   * The cloud computer pool ID.
   * 
   * @example
   * dg-boyczi8enfyc5****
   */
  groupId?: string;
  /**
   * @remarks
   * The custom hostname of the cloud computer. Only cloud computers with a Windows operating system in an AD office network are supported.
   * 
   * The naming rules for the hostname are as follows:
   * 
   * - The hostname must be 2 to 15 characters in length.
   * - The hostname can contain letters, digits, or hyphens (-). It cannot start or end with a hyphen, cannot contain consecutive hyphens, and cannot consist of only digits.
   * 
   * When creating multiple cloud computers, you can use the `name_prefix[begin_number,bits]name_suffix` format to name them uniformly. For example, if Hostname is set to ecd-[1,4]-test, the hostname of the first cloud computer is ecd-0001-test, the hostname of the second cloud computer is ecd-0002-test, and so on.
   * 
   * - `name_prefix`: the prefix of the hostname.
   * - `[begin_number,bits]`: the sequential number in the hostname. `begin_number` specifies the start number. Valid values: 0 to 999999. Default value: 0. `bits` specifies the number of digits. Valid values: 1 to 6. Default value: 6.
   * - `name_suffix`: the suffix of the hostname.
   * 
   * @example
   * testhost
   */
  hostname?: string;
  /**
   * @remarks
   * The purchase parameters for the monthly hours package.
   */
  monthDesktopSetting?: CreateDesktopsRequestMonthDesktopSetting;
  /**
   * @remarks
   * The office network ID.
   * 
   * @example
   * cn-hangzhou+dir-387822****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The organizational unit (OU) path. After this parameter is specified, the cloud computer joins the corresponding OU in Active Directory (AD).
   * 
   * @example
   * test.com/wuyingtest/computers
   */
  ouPath?: string;
  /**
   * @remarks
   * The subscription duration of the resource. The unit is specified by `PeriodUnit`. This parameter takes effect and is required only when `ChargeType` is set to `PrePaid`.
   * 
   * - If `PeriodUnit` is set to `Month`, valid values of this parameter:
   * 
   *      - 1
   *     -  2
   *     - 3
   *     - 6
   * 
   * - If `PeriodUnit` is set to `Year`, valid values of this parameter:
   * 
   *     - 1
   *     - 2
   *     - 3
   *     - 4
   *     - 5
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
   * The policy ID.
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
   * The ID of the public network bandwidth throttling rule.
   * 
   * @example
   * qos-52fqmg6kvyro7zu4l
   */
  qosRuleId?: string;
  /**
   * @remarks
   * The region ID. Call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the regions supported by Elastic Desktop Service (EDS).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource owner in reseller mode. You do not need to specify this parameter if you are not in reseller mode.
   * 
   * @example
   * 1828644634819902
   */
  resellerOwnerUid?: number;
  /**
   * @remarks
   * The ID of the EDS resource group.
   * 
   * @example
   * rg-3mtuc28rx95lx****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * > This field is not publicly available.
   * 
   * @example
   * spn-26c1b7bcrjcI****
   */
  savingPlanId?: string;
  /**
   * @remarks
   * The ID of the Elastic Desktop Service (EDS) automatic snapshot policy.
   * 
   * @example
   * sp-28mp6my0l6zow****
   */
  snapshotPolicyId?: string;
  /**
   * @remarks
   * The purchase method of the cloud computer. Valid values:
   * 
   * - prePaid: monthly subscription with unlimited duration.
   * - postPaid: pay-as-you-go.
   * - monthPackage: monthly hours package.
   * - jvsAgentPackage: JVS Agent hours package.
   * 
   * @example
   * monthPackage
   */
  subPayType?: string;
  /**
   * @remarks
   * The subnet ID.
   * 
   * @example
   * vsw-bp1m*****
   */
  subnetId?: string;
  /**
   * @remarks
   * The tags.
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
   * The cloud computer assignment mode.
   * 
   * > If `EndUserId` is not specified, the created cloud computers are not assigned to any user.
   * 
   * @example
   * ALL
   */
  userAssignMode?: string;
  /**
   * @remarks
   * The custom command script data.
   */
  userCommands?: CreateDesktopsRequestUserCommands[];
  /**
   * @remarks
   * > This parameter is not available for use.
   * 
   * @example
   * username
   */
  userName?: string;
  /**
   * @remarks
   * Specifies whether to enable cloud disk encryption.
   * 
   * @example
   * false
   */
  volumeEncryptionEnabled?: boolean;
  /**
   * @remarks
   * The ID of the Key Management Service (KMS) key used for cloud disk encryption. Call [ListKeys](https://help.aliyun.com/document_detail/28951.html) to query available keys.
   * 
   * @example
   * 08c33a6f-4e0a-4a1b-a3fa-7ddfa1d4****
   */
  volumeEncryptionKey?: string;
  /**
   * @remarks
   * > This parameter is not available for use.
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
      desktopNameModel: 'DesktopNameModel',
      desktopNameSuffix: 'DesktopNameSuffix',
      desktopTimers: 'DesktopTimers',
      directoryId: 'DirectoryId',
      endUserId: 'EndUserId',
      extendInfo: 'ExtendInfo',
      groupId: 'GroupId',
      hostname: 'Hostname',
      monthDesktopSetting: 'MonthDesktopSetting',
      officeSiteId: 'OfficeSiteId',
      ouPath: 'OuPath',
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
      subPayType: 'SubPayType',
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
      desktopNameModel: CreateDesktopsRequestDesktopNameModel,
      desktopNameSuffix: 'boolean',
      desktopTimers: { 'type': 'array', 'itemType': CreateDesktopsRequestDesktopTimers },
      directoryId: 'string',
      endUserId: { 'type': 'array', 'itemType': 'string' },
      extendInfo: 'string',
      groupId: 'string',
      hostname: 'string',
      monthDesktopSetting: CreateDesktopsRequestMonthDesktopSetting,
      officeSiteId: 'string',
      ouPath: 'string',
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
      subPayType: 'string',
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
    if(this.desktopNameModel && typeof (this.desktopNameModel as any).validate === 'function') {
      (this.desktopNameModel as any).validate();
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

