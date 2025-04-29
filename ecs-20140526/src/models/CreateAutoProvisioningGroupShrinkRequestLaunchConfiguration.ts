// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationArn } from "./CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationArn";
import { CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationDataDisk } from "./CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationDataDisk";
import { CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationSystemDisk } from "./CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationSystemDisk";
import { CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationTag } from "./CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationTag";
import { CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationImageOptions } from "./CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationImageOptions";


export class CreateAutoProvisioningGroupShrinkRequestLaunchConfiguration extends $dara.Model {
  /**
   * @remarks
   * >  This parameter is in invitational preview and is not publicly available.
   */
  arn?: CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationArn[];
  /**
   * @remarks
   * The automatic release time of the pay-as-you-go instance. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in Coordinated Universal Time (UTC).
   * 
   * *   If the value of `ss` is not `00`, the start time is automatically rounded down to the nearest minute based on the value of `mm`.
   * *   The specified time must be at least 30 minutes later than the current time.
   * *   The specified time can be at most three years later than the current time.
   * 
   * @example
   * 2018-01-01T12:05:00Z
   */
  autoReleaseTime?: string;
  /**
   * @remarks
   * The performance mode of the burstable instance. Valid values:
   * 
   * *   Standard: the standard mode. For more information, see the "Standard mode" section in the [Overview of burstable instances](https://help.aliyun.com/document_detail/59977.html) topic.
   * *   Unlimited: the unlimited mode. For more information, see the "Unlimited mode" section in the [Overview of burstable instances](https://help.aliyun.com/document_detail/59977.html) topic.
   * 
   * This parameter is empty by default.
   * 
   * When both LaunchTemplateId and LaunchConfiguration.\\* parameters are specified, LaunchTemplateId takes precedence.
   * 
   * @example
   * Standard
   */
  creditSpecification?: string;
  /**
   * @remarks
   * The cloud disks in the extended configurations of the launch template.
   */
  dataDisk?: CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationDataDisk[];
  /**
   * @remarks
   * The ID of the deployment set.
   * 
   * @example
   * ds-bp1frxuzdg87zh4p****
   */
  deploymentSetId?: string;
  /**
   * @remarks
   * The instance hostname. Take note of the following items:
   * 
   * *   The hostname cannot start or end with a period (.) or hyphen (-). The hostname cannot contain consecutive periods (.) or hyphens (-).
   * *   For Windows instances, the hostname must be 2 to 15 characters in length and cannot contain periods (.) or contain only digits. It can contain letters, digits, and hyphens (-).
   * *   For instances that run other operating systems such as Linux, the hostname must be 2 to 64 characters in length. You can use periods (.) to separate a hostname into multiple segments. Each segment can contain letters, digits, and hyphens (-).
   * *   You cannot specify both `LaunchConfiguration.HostName` and `LaunchConfiguration.HostNames.N`. Otherwise, an error is returned.
   * *   When both LaunchTemplateId and LaunchConfiguration.\\* parameters are specified, LaunchTemplateId takes precedence.
   * 
   * @example
   * k8s-node-[1,4]-ecshost
   */
  hostName?: string;
  /**
   * @remarks
   * The hostname of instance N. You can use this parameter to specify different hostnames for multiple instances. Take note of the following items:
   * 
   * - This parameter takes effect only when `AutoProvisioningGroupType` is set to instant. 
   * - The value of N indicates the number of instances. Valid values of N: 1 to 1000. The value of N must be the same as the TotalTargetCapacity value. 
   * - The hostname cannot start or end with a period (.) or hyphen (-). The hostname cannot contain consecutive periods (.) or hyphens (-). 
   * - For Windows instances, the hostname must be 2 to 15 characters in length and cannot contain periods (.) or contain only digits. The hostname can contain letters, digits, and hyphens (-). 
   * - For instances that run other operating systems such as Linux, the hostname must be 2 to 64 characters in length. You can use periods (.) to separate the hostname into multiple segments. Each segment can contain letters, digits, and hyphens (-). 
   * - You cannot specify both `LaunchConfiguration.HostName` and `LaunchConfiguration.HostNames.N`. Otherwise, an error is returned. 
   * - When both LaunchTemplateId and LaunchConfiguration.* parameters are specified, LaunchTemplateId takes precedence.
   * 
   * @example
   * ecs-host-01
   */
  hostNames?: string[];
  /**
   * @remarks
   * The name of the image family. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with `aliyun` or `acs:`. The name cannot contain `http://` or `https://`. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * hangzhou-daily-update
   */
  imageFamily?: string;
  /**
   * @remarks
   * The ID of the image to be used to create the instance. You can call the [DescribeImages](https://help.aliyun.com/document_detail/25534.html) operation to query available image resources. When both LaunchTemplateId and LaunchConfiguration.\\* parameters are specified, LaunchTemplateId takes precedence.
   * 
   * @example
   * m-bp1g7004ksh0oeuc****
   */
  imageId?: string;
  /**
   * @remarks
   * The instance description. The description must be 2 to 256 characters in length. The description can contain letters and cannot start with `http://` or `https://`. When both LaunchTemplateId and LaunchConfiguration.\\* parameters are specified, LaunchTemplateId takes precedence.
   * 
   * @example
   * Instance_Description
   */
  instanceDescription?: string;
  /**
   * @remarks
   * The instance name. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with `http://` or `https://`. The name can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * The default value of this parameter is the `InstanceId` value.
   * 
   * When you batch create instances, you can batch configure sequential names for the instances. For more information, see [Batch configure sequential names or hostnames for multiple instances](https://help.aliyun.com/document_detail/196048.html).
   * 
   * When both LaunchTemplateId and LaunchConfiguration.\\* parameters are specified, LaunchTemplateId takes precedence.
   * 
   * @example
   * k8s-node-[1,4]-alibabacloud
   */
  instanceName?: string;
  /**
   * @remarks
   * The billing method for network usage. Valid values:
   * 
   * *   PayByBandwidth: pay-by-bandwidth
   * *   PayByTraffic: pay-by-traffic
   * 
   * >  When the pay-by-traffic billing method for network usage is used, the maximum inbound and outbound bandwidth values are used as the upper limits of bandwidth instead of guaranteed performance specifications. When demands outstrip resource supplies, the maximum bandwidths may be limited. If you want guaranteed bandwidth for your instance, use the pay-by-bandwidth billing method.
   * 
   * When both LaunchTemplateId and LaunchConfiguration.\\* parameters are specified, LaunchTemplateId takes precedence.
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum inbound public bandwidth. Unit: Mbit/s. Valid values:
   * 
   * *   When the maximum outbound public bandwidth is less than or equal to 10 Mbit/s, the valid values of this parameter are 1 to 10 and the default value is 10.
   * *   When the maximum outbound public bandwidth is greater than 10 Mbit/s, the valid values of this parameter are 1 to the value of `LaunchConfiguration.InternetMaxBandwidthOut`, and the default value is the value of `LaunchConfiguration.InternetMaxBandwidthOut`.
   * 
   * When both LaunchTemplateId and LaunchConfiguration.\\* parameters are specified, LaunchTemplateId takes precedence.
   * 
   * @example
   * 10
   */
  internetMaxBandwidthIn?: number;
  /**
   * @remarks
   * The maximum outbound public bandwidth. Unit: Mbit/s. Valid values: 0 to 100.
   * 
   * Default value: 0.
   * 
   * When both LaunchTemplateId and LaunchConfiguration.\\* parameters are specified, LaunchTemplateId takes precedence.
   * 
   * @example
   * 10
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * Specifies whether the instance is I/O optimized. Valid values:
   * 
   * *   none: The instance is not I/O optimized.
   * *   optimized: The instance is I/O optimized.
   * 
   * For instances of retired instance types, the default value is none. For instances of other instance types, the default value is optimized.
   * 
   * When both LaunchTemplateId and LaunchConfiguration.\\* parameters are specified, LaunchTemplateId takes precedence.
   * 
   * @example
   * optimized
   */
  ioOptimized?: string;
  /**
   * @remarks
   * The key pair name.
   * 
   * *   For Windows instances, this parameter is ignored. This parameter is empty by default.
   * *   By default, password-based logon is disabled for Linux instances.
   * 
   * When both LaunchTemplateId and LaunchConfiguration.\\* parameters are specified, LaunchTemplateId takes precedence.
   * 
   * @example
   * KeyPair_Name
   */
  keyPairName?: string;
  /**
   * @remarks
   * The instance password. The password must be 8 to 30 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. The password can contain the following special characters:
   * 
   * ``( ) ` ~ ! @ # $ % ^ & * - _ + = | { }  ``: ; \\" < > , . ? /``  For Windows instances, the password cannot start with a forward slash (/). When both LaunchTemplateId and LaunchConfiguration.* parameters are specified, LaunchTemplateId takes precedence. `
   * 
   * @example
   * EcsV587!
   */
  password?: string;
  /**
   * @remarks
   * Specifies whether to use the password preset in the image. Valid values:
   * 
   * *   true: uses the password preset in the image.
   * *   false: does not use the password preset in the image.
   * 
   * When both LaunchTemplateId and LaunchConfiguration.\\* parameters are specified, LaunchTemplateId takes precedence.
   * 
   * @example
   * true
   */
  passwordInherit?: boolean;
  /**
   * @remarks
   * The name of the instance Resource Access Management (RAM) role. You can call the [ListRoles](https://help.aliyun.com/document_detail/28713.html) operation provided by RAM to query the instance RAM roles that you created. When both LaunchTemplateId and LaunchConfiguration.\\* parameters are specified, LaunchTemplateId takes precedence.
   * 
   * @example
   * RAM_Name
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The ID of the resource group to which to assign the instance. When both LaunchTemplateId and LaunchConfiguration.\\* parameters are specified, LaunchTemplateId takes precedence.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specifies whether to enable security hardening. Valid values:
   * 
   * *   Active: enables security hardening. This value is applicable only to public images.
   * *   Deactive: disables security hardening. This value is applicable to all image types.
   * 
   * When both LaunchTemplateId and LaunchConfiguration.\\* parameters are specified, LaunchTemplateId takes precedence.
   * 
   * @example
   * Active
   */
  securityEnhancementStrategy?: string;
  /**
   * @remarks
   * The ID of the security group to which to assign the instance. When both LaunchTemplateId and LaunchConfiguration.\\* parameters are specified, LaunchTemplateId takes precedence.
   * 
   * @example
   * sg-bp15ed6xe1yxeycg****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The IDs of the security groups to which the new ECS instances belong.
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * The system disk information of instances. When both LaunchTemplateId and LaunchConfiguration.\\* parameters are specified, LaunchTemplateId takes precedence.
   */
  systemDisk?: CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationSystemDisk;
  /**
   * @remarks
   * The category of the system disk. Valid values:
   * 
   * *   cloud_efficiency: ultra disk
   * *   cloud_ssd: standard SSD
   * *   cloud_essd: enhanced SSD (ESSD)
   * *   cloud: basic disk
   * 
   * For non-I/O optimized instances of retired instance types, the default value is cloud. For other instances, the default value is cloud_efficiency.
   * 
   * When both LaunchTemplateId and LaunchConfiguration.\\* parameters are specified, LaunchTemplateId takes precedence.
   * 
   * @example
   * cloud_ssd
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The description of the system disk. The description must be 2 to 256 characters in length. The description can contain letters and cannot start with `http://` or `https://`.
   * 
   * When both LaunchTemplateId and LaunchConfiguration.\\* parameters are specified, LaunchTemplateId takes precedence.
   * 
   * @example
   * SystemDisk_Description
   */
  systemDiskDescription?: string;
  /**
   * @remarks
   * The name of the system disk. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with `http://` or `https://`. The name can contain letters, digits, periods (.), colons (:), underscores (_), and hyphens (-).
   * 
   * This parameter is empty by default.
   * 
   * When both LaunchTemplateId and LaunchConfiguration.\\* parameters are specified, LaunchTemplateId takes precedence.
   * 
   * @example
   * cloud_ssdSystem
   */
  systemDiskName?: string;
  /**
   * @remarks
   * The performance level of the ESSD to be used as the system disk. Valid values:
   * 
   * *   PL0 (default): A single ESSD can deliver up to 10,000 random read/write IOPS.
   * *   PL1: A single ESSD can deliver up to 50,000 random read/write IOPS.
   * *   PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
   * *   PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.
   * 
   * For more information about ESSD performance levels, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * When both LaunchTemplateId and LaunchConfiguration.\\* parameters are specified, LaunchTemplateId takes precedence.
   * 
   * @example
   * PL0
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The size of the system disk. Valid values: 20 to 500. Unit: GiB. The value must be at least 20 and greater than or equal to the size of the image specified by LaunchConfiguration.ImageId.
   * 
   * Default value: 40 or the size of the image specified by LaunchConfiguration.ImageId, whichever is greater.
   * 
   * When both LaunchTemplateId and LaunchConfiguration.\\* parameters are specified, LaunchTemplateId takes precedence.
   * 
   * @example
   * 40
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The tag in the extended configurations of the launch template.
   */
  tag?: CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationTag[];
  /**
   * @remarks
   * The instance user data. The user data must be encoded in Base64. The raw data can be up to 32 KB in size. When both LaunchTemplateId and LaunchConfiguration.\\* parameters are specified, LaunchTemplateId takes precedence.
   * 
   * @example
   * ZWNobyBoZWxsbyBlY3Mh
   */
  userData?: string;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the reserved instance. This parameter is required only when the instance uses the subscription billing method. Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal period of the instance. Valid values:
   * 
   * Valid values when PeriodUnit is set to Month: 1, 2, 3, 6, 12, 24, 36, 48, and 60.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  imageOptions?: CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationImageOptions;
  /**
   * @remarks
   * The subscription period of the instance. The unit is specified by `PeriodUnit`. This parameter takes effect and is required only if the subscription billing method is selected. Valid values:
   * 
   * Valid values if PeriodUnit is set to Month: 1, 2, 3, 6, and 12.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription period. Default value: Month. Valid values:
   * 
   * Month
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @example
   * 1
   */
  spotDuration?: number;
  /**
   * @example
   * Terminate
   */
  spotInterruptionBehavior?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      autoReleaseTime: 'AutoReleaseTime',
      creditSpecification: 'CreditSpecification',
      dataDisk: 'DataDisk',
      deploymentSetId: 'DeploymentSetId',
      hostName: 'HostName',
      hostNames: 'HostNames',
      imageFamily: 'ImageFamily',
      imageId: 'ImageId',
      instanceDescription: 'InstanceDescription',
      instanceName: 'InstanceName',
      internetChargeType: 'InternetChargeType',
      internetMaxBandwidthIn: 'InternetMaxBandwidthIn',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      ioOptimized: 'IoOptimized',
      keyPairName: 'KeyPairName',
      password: 'Password',
      passwordInherit: 'PasswordInherit',
      ramRoleName: 'RamRoleName',
      resourceGroupId: 'ResourceGroupId',
      securityEnhancementStrategy: 'SecurityEnhancementStrategy',
      securityGroupId: 'SecurityGroupId',
      securityGroupIds: 'SecurityGroupIds',
      systemDisk: 'SystemDisk',
      systemDiskCategory: 'SystemDiskCategory',
      systemDiskDescription: 'SystemDiskDescription',
      systemDiskName: 'SystemDiskName',
      systemDiskPerformanceLevel: 'SystemDiskPerformanceLevel',
      systemDiskSize: 'SystemDiskSize',
      tag: 'Tag',
      userData: 'UserData',
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      imageOptions: 'ImageOptions',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      spotDuration: 'SpotDuration',
      spotInterruptionBehavior: 'SpotInterruptionBehavior',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: { 'type': 'array', 'itemType': CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationArn },
      autoReleaseTime: 'string',
      creditSpecification: 'string',
      dataDisk: { 'type': 'array', 'itemType': CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationDataDisk },
      deploymentSetId: 'string',
      hostName: 'string',
      hostNames: { 'type': 'array', 'itemType': 'string' },
      imageFamily: 'string',
      imageId: 'string',
      instanceDescription: 'string',
      instanceName: 'string',
      internetChargeType: 'string',
      internetMaxBandwidthIn: 'number',
      internetMaxBandwidthOut: 'number',
      ioOptimized: 'string',
      keyPairName: 'string',
      password: 'string',
      passwordInherit: 'boolean',
      ramRoleName: 'string',
      resourceGroupId: 'string',
      securityEnhancementStrategy: 'string',
      securityGroupId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      systemDisk: CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationSystemDisk,
      systemDiskCategory: 'string',
      systemDiskDescription: 'string',
      systemDiskName: 'string',
      systemDiskPerformanceLevel: 'string',
      systemDiskSize: 'number',
      tag: { 'type': 'array', 'itemType': CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationTag },
      userData: 'string',
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      imageOptions: CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationImageOptions,
      period: 'number',
      periodUnit: 'string',
      spotDuration: 'number',
      spotInterruptionBehavior: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.arn)) {
      $dara.Model.validateArray(this.arn);
    }
    if(Array.isArray(this.dataDisk)) {
      $dara.Model.validateArray(this.dataDisk);
    }
    if(Array.isArray(this.hostNames)) {
      $dara.Model.validateArray(this.hostNames);
    }
    if(Array.isArray(this.securityGroupIds)) {
      $dara.Model.validateArray(this.securityGroupIds);
    }
    if(this.systemDisk && typeof (this.systemDisk as any).validate === 'function') {
      (this.systemDisk as any).validate();
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(this.imageOptions && typeof (this.imageOptions as any).validate === 'function') {
      (this.imageOptions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

