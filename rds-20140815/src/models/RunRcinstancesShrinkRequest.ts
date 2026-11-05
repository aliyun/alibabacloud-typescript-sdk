// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunRCInstancesShrinkRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. You can create up to N tag keys at a time. Valid values of N: **1** to **20**. Empty strings are not allowed.
   * 
   * @example
   * Testkey1
   */
  key?: string;
  /**
   * @remarks
   * The tag value that corresponds to the tag key. You can create up to N tag values at a time. Valid values of N: **1** to **20**. Empty strings are allowed.
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
   * The ACU type.
   * 
   * @example
   * gn8is
   */
  acuType?: string;
  /**
   * @remarks
   * The number of RDS Custom instances to create. This parameter is applicable only when you create multiple RDS Custom instances at a time.
   * 
   * Valid values: **1** to **30**. Default value: **1**.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * - **true** (default): Automatic payment is enabled. You must ensure that your account balance is sufficient.
   * - **false**: Only an order is generated and no payment is deducted.
   * > If the balance of your payment method is insufficient, you can set the AutoPay parameter to false. In this case, an unpaid order is generated, and you can log on to the ApsaraDB RDS console to complete the payment.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the instance. Valid values:
   * - **true** (default): yes
   * - **false**: no
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * Specifies whether to automatically use a coupon. Valid values:
   * - **true** (default): yes
   * - **false**: no
   * 
   * > If you use a coupon and then downgrade the instance configuration, the amount deducted by the voucher is not refunded.
   * 
   * @example
   * true
   */
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * The business information.
   * 
   * @example
   * {"rds_ai_app":"true"}
   */
  businessInfo?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request and prevent duplicate submissions. You can use the client to generate the token, but you must ensure that the token is unique among different requests. The token can contain a maximum of 64 ASCII characters and cannot contain non-ASCII characters.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ACK Edge cluster information.
   */
  createAckEdgeParamShrink?: string;
  /**
   * @remarks
   * A reserved parameter. This parameter is not supported.
   * 
   * @example
   * None
   */
  createExtraParam?: string;
  /**
   * @remarks
   * Specifies whether the instance is allowed to join an ACK cluster. When this parameter is set to **1**, the created instance can be added to an ACK cluster by calling the **AttachRCInstances** API operation, which enables efficient management of containerized applications.
   * 
   * - **1**: yes
   * - **0** (default): no
   * 
   * @example
   * 0
   */
  createMode?: string;
  /**
   * @remarks
   * The data cloud disks.
   */
  dataDiskShrink?: string;
  /**
   * @remarks
   * Specifies whether to enable release protection. Valid values:
   * - **true**: enabled
   * - **false** (default): disabled
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
   * Specifies whether to perform a dry run before creating the instance. Valid values:
   * - **true**: performs a dry run without creating the instance. The dry run checks items such as request parameters, request format, service limits, and inventory.
   * - **false** (default): sends a normal request and creates the instance directly after the check passes.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The hostname of the instance. The hostname must be 2 to 64 characters in length.
   * 
   * - The hostname can be segmented by periods (.). Each segment can contain letters, digits, and hyphens (-).
   * - A period (.) or hyphen (-) cannot be used as the first or last character, and cannot be used consecutively.
   * 
   * @example
   * testHost1
   */
  hostName?: string;
  /**
   * @remarks
   * The image ID of the instance.
   * 
   * @example
   * image-dsvjzw2ii8n4******
   */
  imageId?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * - **Prepaid**: subscription
   * - **Postpaid**: pay-as-you-go
   * 
   * @example
   * Prepaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The name must be 2 to 128 characters in length. It must start with a letter or a Chinese character and can contain letters, Chinese characters, digits, periods (.), underscores (_), colons (:), and hyphens (-). The default value is the instance ID. When you create multiple RDS Custom instances, you can specify sequential instance names in batches. The names can contain square brackets ([]) and commas (,). For more information, see [Create an RDS Custom instance](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/create-an-rds-custom-instance#00481f9ba381u).
   * 
   * @example
   * rc-node-[99,1]-rchost
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance type. For the instance types supported by RDS Custom instances, see [RDS Custom instance types](https://help.aliyun.com/document_detail/2844823.html).
   * 
   * This parameter is required.
   * 
   * @example
   * mysql.i8.large.2cm
   */
  instanceType?: string;
  /**
   * @remarks
   * A reserved parameter. This parameter is not supported.
   * 
   * @example
   * null
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum outbound public bandwidth for Custom for SQL Server. Unit: Mbit/s.
   * 
   * Valid values: 0 to 1024. Default value: 0.
   * 
   * @example
   * 0
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * A reserved parameter. This parameter is not supported.
   * 
   * @example
   * null
   */
  ioOptimized?: string;
  /**
   * @remarks
   * The name of the key pair. Only a single name is supported.
   * 
   * @example
   * dell5502
   */
  keyPairName?: string;
  /**
   * @remarks
   * The network-related attribute parameters.
   */
  networkOptionsShrink?: string;
  /**
   * @remarks
   * The password of the instance account. The password must be 8 to 30 characters in length and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. Special characters include: `()~!@#$%^&*-_+=|{}[]:;\\"<>,.?/`.
   * 
   * @example
   * TestRDS123!
   */
  password?: string;
  /**
   * @remarks
   * Specifies whether to use the password preset in the image. If you specify this parameter, you must leave the Password parameter empty and ensure that a password is preset in the image. Default value: false.
   */
  passwordInherit?: boolean;
  /**
   * @remarks
   * The subscription duration of the resource. Default value: **1**.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the billing duration for the subscription billing method. Valid values:
   * - **Year**
   * - **Month** (default)
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The private IP address of the instance. When you assign a private IP address to a VPC-connected ECS instance, you must select an available IP address from the CIDR block of the vSwitch specified by VSwitchId.
   * 
   * @example
   * ``10.1.**.**``
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
   * The region ID. You can call the DescribeRegions operation to query available regions.
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
   * The time-based elastic rule.
   * 
   * @example
   * {"rule":[{"beginTime":"09:00","endTime":"17:00","acu":4}]}
   */
  scheduledRule?: string;
  /**
   * @remarks
   * A reserved parameter. This parameter is not supported.
   * 
   * @example
   * null
   */
  securityEnhancementStrategy?: string;
  /**
   * @remarks
   * The ID of the security group to which the instance belongs. Instances in the same security group can access each other. The maximum number of instances that a security group can contain depends on the security group type. For more information, see the "Security groups" section in [Limits](https://help.aliyun.com/document_detail/25412.html).
   * > The SecurityGroupId parameter determines the network type of the instance. For example, if the network type of the specified security group is VPC, the instance is a VPC-connected instance and the VSwitchId parameter is required.
   * 
   * @example
   * sg-uf6av412xaxixu******
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The security groups to which the instance is added. You can add the instance to up to 10 security groups. Note: You cannot specify both SecurityGroupId and SecurityGroupIds.N at the same time.
   */
  securityGroupIdsShrink?: string;
  /**
   * @remarks
   * The bidding policy for the pay-as-you-go instance. This parameter takes effect only when the **InstanceChargeType** parameter is set to **PostPaid**. Valid values:
   * 
   * - **NoSpot**: regular pay-as-you-go instance
   * - **SpotAsPriceGo**: system automatically bids based on the current market price
   * 
   * Default value: **NoSpot**.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The form of RDS Custom. Valid values:
   * 
   * - **eni**: dual ENI
   * - **edge**: edge node pool
   * - **share**: VPC
   * 
   * @example
   * share
   */
  supportCase?: string;
  /**
   * @remarks
   * The system cloud disk.
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
   * Do not pass confidential information such as passwords and private keys in plaintext. If you must pass such information, encrypt and use Base64 encoding before transmission, and then perform decryption and use it inside the instance. The following example shows how to transform a script to a Base64 character string:
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
   * Specifies whether the custom data is encoded in Base64.
   * 
   * - **true**: yes
   * - **false** (default): no
   * 
   * @example
   * true
   */
  userDataInBase64?: boolean;
  /**
   * @remarks
   * The vSwitch ID of the target instance. If you create a VPC-connected RDS Custom instance, you must specify a vSwitch ID, and the security group and the vSwitch must belong to the same VPC.
   * > If you configure the VSwitchId parameter, the ZoneId parameter must be set to the zone where the vSwitch resides. You can also leave the ZoneId parameter empty, and the system automatically selects the zone where the specified vSwitch resides.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-2vcd61ngm890sk****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID of the instance. You can call the DescribeZones operation to query the zone list.
   * > If you specify the VSwitchId parameter, the ZoneId parameter must be set to the zone where the vSwitch resides. You can also leave the ZoneId parameter empty, and the system automatically selects the zone where the specified vSwitch resides.
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
      businessInfo: 'BusinessInfo',
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
      businessInfo: 'string',
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

