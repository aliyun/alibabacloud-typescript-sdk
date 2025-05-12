// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDesktopsShrinkRequestBundleModels } from "./CreateDesktopsShrinkRequestBundleModels";
import { CreateDesktopsShrinkRequestDesktopTimers } from "./CreateDesktopsShrinkRequestDesktopTimers";
import { CreateDesktopsShrinkRequestMonthDesktopSetting } from "./CreateDesktopsShrinkRequestMonthDesktopSetting";
import { CreateDesktopsShrinkRequestTag } from "./CreateDesktopsShrinkRequestTag";
import { CreateDesktopsShrinkRequestUserCommands } from "./CreateDesktopsShrinkRequestUserCommands";


export class CreateDesktopsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The number of cloud computers that you want to create. Valid values: 1 to 300. Default value: 1.
   * 
   * @example
   * 1
   */
  amount?: number;
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
   * Specifies whether to enable auto-renewal. This parameter takes effect only when the ChargeType parameter is set to PrePaid.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The ID of the cloud computer template.
   * 
   * @example
   * b-je9hani001wfn****
   */
  bundleId?: string;
  /**
   * @remarks
   * The cloud computer templates.
   * 
   * **if can be null:**
   * true
   */
  bundleModels?: CreateDesktopsShrinkRequestBundleModels[];
  /**
   * @remarks
   * The billing method of the cloud computers.
   * 
   * Default value: PostPaid. Valid values:
   * 
   * *   Postpaid: pay-as-you-go
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   PrePaid: subscription
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The input parameters used when no templates are used.
   */
  desktopAttachmentShrink?: string;
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
   * The name of the cloud computer. The name must meet the following requirements:
   * 
   * *   The name must be 1 to 64 characters in length.
   * *   The name must start with a letter but cannot start with `http://` or `https://`.
   * *   The name can only contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * testDesktopName
   */
  desktopName?: string;
  /**
   * @remarks
   * Specifies whether to automatically add suffixes to the names of cloud computers when you create multiple cloud computers at the same time.
   * 
   * Default value: true. Valid values:
   * 
   * *   true
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   False
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * false
   */
  desktopNameSuffix?: boolean;
  /**
   * @remarks
   * The details of the scheduled task on cloud computers.
   * 
   * **if can be null:**
   * true
   */
  desktopTimers?: CreateDesktopsShrinkRequestDesktopTimers[];
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * To be hidden.
   */
  directoryId?: string;
  /**
   * @remarks
   * The IDs of the end users to which you want to assign the cloud computers. You can specify 1 to 100 IDs.
   * 
   * @example
   * 123456789
   */
  endUserId?: string[];
  extendInfo?: string;
  /**
   * @remarks
   * The ID of the cloud computer pool.
   * 
   * @example
   * dg-boyczi8enfyc5****
   */
  groupId?: string;
  /**
   * @remarks
   * The custom hostnames of the cloud computers. This parameter is valid only if the office network is an AD office network and the operating system type of the cloud computers is Windows.
   * 
   * The hostnames must meet the following requirements:
   * 
   * *   The hostnames must be 2 to 15 characters in length.
   * *   The hostnames can contain only letters, digits, and hyphens (-). The hostnames cannot start or end with a hyphen (-), contain consecutive hyphens (-), or contain only digits.
   * 
   * When you create multiple cloud computers, you can use the `name_prefix[begin_number,bits]name_suffix` naming format to name the cloud computers. For example, if you set the value of the Hostname parameter to ecd-[1,4]-test, the hostname of the first cloud computer is ecd-0001-test, the hostname of the second cloud computer is ecd-0002-test, and so on.
   * 
   * *   `name_prefix`: the prefix of the hostname.
   * *   `[begin_number,bits]`: the sequential number in the hostname. The `begin_number` value is the starting digit. Valid values of begin_number: 0 to 999999. Default value: 0. The `bits` value is the number of digits. Valid values: 1 to 6. Default value: 6.
   * *   `name_suffix`: the suffix of the hostname.
   * 
   * @example
   * testhost
   */
  hostname?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
   */
  monthDesktopSetting?: CreateDesktopsShrinkRequestMonthDesktopSetting;
  /**
   * @remarks
   * The office network ID.
   * 
   * @example
   * cn-hangzhou+os-c5cy7q578s8jc****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The subscription duration of the cloud desktop that you want to create. The unit is specified by the `PeriodUnit` parameter. This parameter takes effect and is required only when the `ChargeType` parameter is set to `PrePaid`.
   * 
   * *   Valid values if the `PeriodUnit` parameter is set to `Month`:
   * 
   *     *   1
   *     *   2
   *     *   3
   *     *   6
   * 
   * *   Valid values if the `PeriodUnit` parameter is set to `Year`:
   * 
   *     *   1
   *     *   2
   *     *   3
   *     *   4
   *     *   5
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
   * The ID of the sales promotion.
   * 
   * @example
   * 23141
   */
  promotionId?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
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
   * The ID of the saving plan.
   * 
   * @example
   * spn-4b945dc4Wktd****
   */
  savingPlanId?: string;
  /**
   * @remarks
   * The ID of the auto-snapshot policy.
   * 
   * @example
   * sp-28mp6my0l6zow****
   */
  snapshotPolicyId?: string;
  /**
   * @remarks
   * The tags that you want to add to the cloud desktop.
   */
  tag?: CreateDesktopsShrinkRequestTag[];
  /**
   * @remarks
   * The ID of the timer group.
   * 
   * @example
   * ccg-0caoeogrk9m5****
   */
  timerGroupId?: string;
  /**
   * @remarks
   * How the cloud computers are assigned.
   * 
   * >  If you do not specify the `EndUserId` parameter, the cloud computers are not assigned to end users after the cloud computers are created.
   * 
   * Default value: ALL. Valid values:
   * 
   * *   ALL: If you specify the EndUserId parameter, the cloud computers are assigned to all specified end users after the cloud computers are created.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   PER_USER: If you specify the EndUserId parameter, the cloud computers are evenly assigned to the specified end users after the cloud computers are created.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     In this case, you must make sure that the value of the Amount parameter can be divided by the N value of the EndUserId.N parameter that you specify.
   * 
   *     <!-- -->
   * 
   * @example
   * ALL
   */
  userAssignMode?: string;
  /**
   * @remarks
   * Details about the custom command scripts.
   */
  userCommands?: CreateDesktopsShrinkRequestUserCommands[];
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * To be hidden.
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
   * The ID of the Key Management Service (KMS) key that you want to use when disk encryption is enabled. You can call the [ListKeys](https://help.aliyun.com/document_detail/28951.html) operation to obtain a list of KMS keys.
   * 
   * @example
   * 08c33a6f-4e0a-4a1b-a3fa-7ddfa1d4****
   */
  volumeEncryptionKey?: string;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * To be hidden.
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      bundleId: 'BundleId',
      bundleModels: 'BundleModels',
      chargeType: 'ChargeType',
      desktopAttachmentShrink: 'DesktopAttachment',
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
      regionId: 'RegionId',
      resellerOwnerUid: 'ResellerOwnerUid',
      resourceGroupId: 'ResourceGroupId',
      savingPlanId: 'SavingPlanId',
      snapshotPolicyId: 'SnapshotPolicyId',
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
      autoPay: 'boolean',
      autoRenew: 'boolean',
      bundleId: 'string',
      bundleModels: { 'type': 'array', 'itemType': CreateDesktopsShrinkRequestBundleModels },
      chargeType: 'string',
      desktopAttachmentShrink: 'string',
      desktopMemberIp: 'string',
      desktopName: 'string',
      desktopNameSuffix: 'boolean',
      desktopTimers: { 'type': 'array', 'itemType': CreateDesktopsShrinkRequestDesktopTimers },
      directoryId: 'string',
      endUserId: { 'type': 'array', 'itemType': 'string' },
      extendInfo: 'string',
      groupId: 'string',
      hostname: 'string',
      monthDesktopSetting: CreateDesktopsShrinkRequestMonthDesktopSetting,
      officeSiteId: 'string',
      period: 'number',
      periodUnit: 'string',
      policyGroupId: 'string',
      promotionId: 'string',
      regionId: 'string',
      resellerOwnerUid: 'number',
      resourceGroupId: 'string',
      savingPlanId: 'string',
      snapshotPolicyId: 'string',
      tag: { 'type': 'array', 'itemType': CreateDesktopsShrinkRequestTag },
      timerGroupId: 'string',
      userAssignMode: 'string',
      userCommands: { 'type': 'array', 'itemType': CreateDesktopsShrinkRequestUserCommands },
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
    if(Array.isArray(this.desktopTimers)) {
      $dara.Model.validateArray(this.desktopTimers);
    }
    if(Array.isArray(this.endUserId)) {
      $dara.Model.validateArray(this.endUserId);
    }
    if(this.monthDesktopSetting && typeof (this.monthDesktopSetting as any).validate === 'function') {
      (this.monthDesktopSetting as any).validate();
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

