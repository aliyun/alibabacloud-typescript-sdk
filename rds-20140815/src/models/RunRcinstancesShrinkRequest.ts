// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunRCInstancesShrinkRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. You can create up to N tag keys at the same time, where N ranges from **1 to 20**. Empty strings are not allowed.
   * 
   * @example
   * Testkey1
   */
  key?: string;
  /**
   * @remarks
   * The tag value corresponding to the tag key. You can create up to N tag values at the same time, where N ranges from **1 to 20**. Empty strings are allowed.
   * 
   * @example
   * Testvalue1
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

export class RunRCInstancesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * ACU type
   * 
   * @example
   * gn8is
   */
  acuType?: string;
  /**
   * @remarks
   * The number of RDS Custom instances that you want to create. The parameter is available if you want to create multiple RDS Custom instances at a time.
   * 
   * Valid values: **1** to **10**. Default value: **1**.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * Specifies whether to enable the automatic payment feature. Valid values:
   * 
   * *   **true** (default): enables the feature. Make sure that your account balance is sufficient.
   * *   **false**: disables the feature. An unpaid order is generated.
   * 
   * >  If your account balance is insufficient, you can set the AutoPay parameter to false. In this case, an unpaid order is generated. You can complete the payment in the Expenses and Costs console.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the instance. Valid values:
   * 
   * *   **true** (default)
   * *   **false**
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * Specifies whether to automatically use a coupon. Valid values:
   * * **true** (default): Yes.
   * * **false**: No.
   * 
   * > If you use a coupon and later decrease the quota, the amount offset by the coupon will not be refunded.
   * 
   * @example
   * true
   */
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * Information about the ACK Edge cluster.
   */
  createAckEdgeParamShrink?: string;
  /**
   * @remarks
   * Reserved parameter. Not supported currently.
   * 
   * @example
   * None
   */
  createExtraParam?: string;
  /**
   * @remarks
   * Specifies whether the instance can be added to an ACK cluster. When this parameter is set to **1**, the created instance can be added to an ACK cluster by invoking the **AttachRCInstances** API operation, enabling efficient management of container applications.
   * 
   * - **1**: Yes.
   * - **0** (default): No.
   * 
   * @example
   * 0
   */
  createMode?: string;
  /**
   * @remarks
   * The information about the data disks.
   */
  dataDiskShrink?: string;
  /**
   * @remarks
   * Specifies whether to enable release protection. Valid values:  
   * * **true**: Enabled  
   * * **false** (default): Disabled
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The deployment set ID.
   * 
   * @example
   * ds-uf6670sipmph********
   */
  deploymentSetId?: string;
  /**
   * @remarks
   * The instance description. The description must be 2 to 256 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * Instance_Description
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, service limits, and insufficient inventory errors.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, the instance is directly created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Hostname of the instance (2–64 characters).  
   * 
   * - Multiple segments separated by periods (.) are supported. Each segment can contain uppercase and lowercase English letters, digits, and hyphens (-).  
   * - A period (.) or hyphen (-) cannot appear at the beginning or end of a segment, nor can two periods or hyphens appear consecutively.
   * 
   * @example
   * testHost1
   */
  hostName?: string;
  /**
   * @remarks
   * The ID of the image used by the instance.
   * 
   * @example
   * image-dsvjzw2ii8n4******
   */
  imageId?: string;
  /**
   * @remarks
   * The billing method of the instance. Set the value to **Prepaid**, which indicates the subscription billing method.
   * 
   * @example
   * Prepaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * rc-node-[99,1]-rchost
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance type. For more information about the instance types that are supported by RDS Custom instances, see [Instance types for RDS Custom instances](https://help.aliyun.com/document_detail/2844823.html).
   * 
   * This parameter is required.
   * 
   * @example
   * mysql.i8.large.2cm
   */
  instanceType?: string;
  /**
   * @remarks
   * The reserved parameter. This parameter is not supported.
   * 
   * @example
   * null
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The reserved parameter. This parameter is not supported.
   * 
   * @example
   * 0
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * The reserved parameter. This parameter is not supported.
   * 
   * @example
   * null
   */
  ioOptimized?: string;
  /**
   * @remarks
   * The name of the AccessKey pair. You can specify only one name.
   * 
   * @example
   * dell5502
   */
  keyPairName?: string;
  networkOptionsShrink?: string;
  /**
   * @remarks
   * The password of the account that is used to log on to the instance.
   * 
   * @example
   * TestRDS123!
   */
  password?: string;
  /**
   * @remarks
   * Specifies whether to use the password preset in the image. When this parameter is used, the Password parameter must be empty, and you must ensure that the selected image has a password already configured. Default value: false.
   */
  passwordInherit?: boolean;
  /**
   * @remarks
   * The subscription duration of the instance. Default value: **1**.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration. Valid values:
   * 
   * *   **Year**
   * *   **Month** (default)
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @example
   * `10.1.**.**`
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The coupon code.
   * 
   * @example
   * 72329885****
   */
  promotionCode?: string;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
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
  /**
   * @remarks
   * Scheduled elasticity rule
   * 
   * @example
   * {"rule":[{"beginTime":"09:00","endTime":"17:00","acu":4}]}
   */
  scheduledRule?: string;
  /**
   * @remarks
   * The reserved parameter. This parameter is not supported.
   * 
   * @example
   * null
   */
  securityEnhancementStrategy?: string;
  /**
   * @remarks
   * The ID of the security group to which you want to add the new instance. Instances in the same security group can communicate with each other. The maximum number of instances allowed in a security group varies based on the type of the security group. For more information, see the "Security group limits" section in [Limits](https://help.aliyun.com/document_detail/25412.html).
   * 
   * >  The network type of the instance is determined by the security group specified by the SecurityGroupId parameter. For example, if the network type of the specified security group is VPC, the instance is a VPC-type instance. In this case, you must specify the VSwitchId parameter.
   * 
   * @example
   * sg-uf6av412xaxixu******
   */
  securityGroupId?: string;
  securityGroupIdsShrink?: string;
  /**
   * @remarks
   * The spot strategy for pay-as-you-go instances. This parameter takes effect only when the **InstanceChargeType** parameter is set to **PostPaid**. Valid values:  
   * 
   * - **NoSpot**: Normal pay-as-you-go instance.  
   * - **SpotAsPriceGo**: The system automatically bids based on the current market price.  
   * 
   * Default value: **NoSpot**.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The deployment type of RDS Custom. Valid values:
   * 
   * - **eni**: Dual network interface cards.
   * - **edge**: Point of presence (POP) node pool.
   * - **share**: VPC.
   * 
   * @example
   * share
   */
  supportCase?: string;
  /**
   * @remarks
   * The specification of the system disk.
   */
  systemDiskShrink?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: RunRCInstancesShrinkRequestTag[];
  /**
   * @remarks
   * The instance user data. The raw data can be up to 32 KB in size.  
   * 
   * Do not pass sensitive information, such as passwords and private keys, in plaintext. If you must pass such information, encrypt it first, encode it in Base64, and then transmit it. Decrypt and use it inside the instance. The following is an example of converting a script into a Base64-encoded string:  
   * 
   * ```
   * echo -n \\"#!/bin/sh
   * echo "Hello World"\\" | base64 -w 0
   * ```
   * 
   * @example
   * IyEvYmluL3NoCmVjaG8gIkhlbGxvIFdvcmxkLiBUaGUgdGltZSBpcyBub3cgJChkYXRlIC1SKSIhIHwgdGVlIC9yb290L3VzZXJkYXRhX3Rlc3QudHh0
   */
  userData?: string;
  /**
   * @remarks
   * Specifies whether custom data is Base64-encoded.  
   * 
   * - **true**: Yes.  
   * - **false** (default): No.
   * 
   * @example
   * true
   */
  userDataInBase64?: boolean;
  /**
   * @remarks
   * The vSwitch ID of the instance. You must specify this parameter when you create an instance of the virtual private cloud (VPC) type. The specified vSwitch and security group must belong to the same VPC.
   * 
   * >  If you specify the VSwitchId parameter, the zone specified by the ZoneId parameter must be the same as the zone in which the specified vSwitch resides. You can leave the ZoneId parameter empty. In this case, the system uses the zone in which the specified vSwitch resides.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-2vcd61ngm890sk****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID of the instance. You can call the DescribeZones operation to query the zone IDs.
   * 
   * >  If you specify the VSwitchId parameter, the zone specified by the ZoneId parameter must be the same as the zone in which the specified vSwitch resides. You can leave the ZoneId parameter empty. In this case, the system uses the zone in which the specified vSwitch resides.
   * 
   * @example
   * cn-beijing-f
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      acuType: 'AcuType',
      amount: 'Amount',
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      autoUseCoupon: 'AutoUseCoupon',
      clientToken: 'ClientToken',
      createAckEdgeParamShrink: 'CreateAckEdgeParam',
      createExtraParam: 'CreateExtraParam',
      createMode: 'CreateMode',
      dataDiskShrink: 'DataDisk',
      deletionProtection: 'DeletionProtection',
      deploymentSetId: 'DeploymentSetId',
      description: 'Description',
      dryRun: 'DryRun',
      hostName: 'HostName',
      imageId: 'ImageId',
      instanceChargeType: 'InstanceChargeType',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      internetChargeType: 'InternetChargeType',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      ioOptimized: 'IoOptimized',
      keyPairName: 'KeyPairName',
      networkOptionsShrink: 'NetworkOptions',
      password: 'Password',
      passwordInherit: 'PasswordInherit',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      privateIpAddress: 'PrivateIpAddress',
      promotionCode: 'PromotionCode',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      scheduledRule: 'ScheduledRule',
      securityEnhancementStrategy: 'SecurityEnhancementStrategy',
      securityGroupId: 'SecurityGroupId',
      securityGroupIdsShrink: 'SecurityGroupIds',
      spotStrategy: 'SpotStrategy',
      supportCase: 'SupportCase',
      systemDiskShrink: 'SystemDisk',
      tag: 'Tag',
      userData: 'UserData',
      userDataInBase64: 'UserDataInBase64',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acuType: 'string',
      amount: 'number',
      autoPay: 'boolean',
      autoRenew: 'boolean',
      autoUseCoupon: 'boolean',
      clientToken: 'string',
      createAckEdgeParamShrink: 'string',
      createExtraParam: 'string',
      createMode: 'string',
      dataDiskShrink: 'string',
      deletionProtection: 'boolean',
      deploymentSetId: 'string',
      description: 'string',
      dryRun: 'boolean',
      hostName: 'string',
      imageId: 'string',
      instanceChargeType: 'string',
      instanceName: 'string',
      instanceType: 'string',
      internetChargeType: 'string',
      internetMaxBandwidthOut: 'number',
      ioOptimized: 'string',
      keyPairName: 'string',
      networkOptionsShrink: 'string',
      password: 'string',
      passwordInherit: 'boolean',
      period: 'number',
      periodUnit: 'string',
      privateIpAddress: 'string',
      promotionCode: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      scheduledRule: 'string',
      securityEnhancementStrategy: 'string',
      securityGroupId: 'string',
      securityGroupIdsShrink: 'string',
      spotStrategy: 'string',
      supportCase: 'string',
      systemDiskShrink: 'string',
      tag: { 'type': 'array', 'itemType': RunRCInstancesShrinkRequestTag },
      userData: 'string',
      userDataInBase64: 'boolean',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

