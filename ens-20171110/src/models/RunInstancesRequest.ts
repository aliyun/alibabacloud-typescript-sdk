// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunInstancesRequestDataDisk extends $dara.Model {
  /**
   * @remarks
   * The disk category. Valid values:
   * - **cloud_efficiency**: ultra cloud disk
   * - **cloud_ssd**: all-flash cloud disk
   * - **local_hdd**: local HDD
   * - **local_ssd**: local SSD
   * 
   * @example
   * cloud_efficiency
   */
  category?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the cloud disk. Valid values:
   * 
   * - true: encrypts the cloud disk.
   * 
   * - false (default): does not encrypt the cloud disk.
   * 
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The ID of the KMS key used by the cloud disk. Valid values:
   * 
   * - true: encrypts the cloud disk.
   * 
   * - false (default): does not encrypt the cloud disk.
   * 
   * > If Encrypted is set to true and KMSKeyId is empty, the default service key is used.
   * 
   * @example
   * false
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * The size of the data cloud disk. Unit: GiB.
   * 
   * @example
   * 20
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      encrypted: 'Encrypted',
      KMSKeyId: 'KMSKeyId',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      encrypted: 'boolean',
      KMSKeyId: 'string',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunInstancesRequestSystemDisk extends $dara.Model {
  /**
   * @remarks
   * The type of the system cloud disk.
   * 
   * @example
   * local_ssd
   */
  category?: string;
  /**
   * @remarks
   * The size of the system cloud disk. Unit: GiB.
   * 
   * @example
   * 50
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunInstancesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The custom tag key.
   * 
   * @example
   * team
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The tag value cannot exceed 128 characters in length, and cannot start with `aliyun` or `acs:`, or contain `http://` or `https://`.
   * 
   * @example
   * tagValue
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

export class RunInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The number of instances to create. Valid values: 1 to 100.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * Specifies whether to automatically install the Cloud Assistant client on the instance.
   */
  autoInstallCloudAssistant?: boolean;
  /**
   * @remarks
   * The automatic release time of the pay-as-you-go instance. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * - If the value of seconds (`ss`) is not `00`, the time is automatically set to the start of the current minute (`mm`).
   * 
   * - The earliest release time is one hour after the current time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2023-06-28T14:38:52Z
   */
  autoReleaseTime?: string;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * 
   * - **true**: enables auto-renewal.
   * - **false**: does not enable auto-renewal. (Default)
   * 
   * >This parameter is invalid for pay-as-you-go instances.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * Specifies whether to use coupons. Default value: true (AutoUseCoupon=true).
   * 
   * @example
   * true
   */
  autoUseCoupon?: string;
  /**
   * @remarks
   * The billing cycle for instance compute resources. Only instance-level pay-as-you-go is supported. Valid values:
   * 
   * - **Day**: daily billing.
   * 
   * - **Month**: monthly billing.
   * 
   * @example
   * Day
   */
  billingCycle?: string;
  /**
   * @remarks
   * The carrier.
   * >This parameter is required for region-level scheduling.</br>
   * >For node-level scheduling, if a node has multiple carriers and you do not specify a carrier, instances are created for each carrier on the node. For example, if a node has both China Mobile and China Unicom carriers, instances with two ISPs are created.</br>You can call [DescribeRegionIsps](https://help.aliyun.com/document_detail/2637461.html) to query the carrier information of a node.
   * 
   * @example
   * telecom
   */
  carrier?: string;
  /**
   * @remarks
   * The region for Cloud Assistant access. Valid values: cn-zhangjiakou (Zhangjiakou) and ap-southeast-1 (Singapore).
   * 
   * @example
   * cn-zhangjiakou
   */
  cloudAssistantRegion?: string;
  /**
   * @remarks
   * The data cloud disk specifications.
   */
  dataDisk?: RunInstancesRequestDataDisk[];
  /**
   * @remarks
   * The release protection property of the instance. Specifies whether the instance can be released from the console or by calling an API operation. Valid values: 
   * 
   * -  true: Enables instance release protection.
   * -  false: Disables instance release protection.
   * 
   * Default value: false.
   * 
   * > This property applies only to pay-as-you-go instances and can only restrict manual release operations. It does not take effect on system-initiated release operations.
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
   * ds-5s1p6x2l3r4b****
   */
  deploymentSetId?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * > This parameter is required for node-level scheduling and is invalid for region-level scheduling.
   * 
   * @example
   * cn-foshan-telecom
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The hostname.
   * 
   * @example
   * test-HostName
   */
  hostName?: string;
  /**
   * @remarks
   * The image ID. This parameter cannot be specified for ARM-based instances. This parameter is required for other instance types.
   * 
   * @example
   * m-5si16wo6simkt267p8b7h****
   */
  imageId?: string;
  /**
   * @remarks
   * The instance billing strategy. Valid values:
   * 
   * - **instance**: instance-level billing.
   * - If not specified, the default is user-level billing.
   * 
   * @example
   * instance
   */
  instanceChargeStrategy?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * - **PrePaid**: subscription.
   * - **PostPaid**: pay-as-you-go.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance name. The name must be 2 to 128 characters in length and must start with a letter or Chinese character. It cannot start with `http://` or `https://`. It can contain Chinese characters, letters, digits, colons (:), underscores (_), periods (.), or hyphens (-).
   * 
   * Default value: the InstanceId of the instance.
   * 
   * @example
   * TestName
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * ens.sn1.small
   */
  instanceType?: string;
  /**
   * @remarks
   * Billable methods for bandwidth. Valid values:
   * - **BandwidthByDay**: daily peak bandwidth
   * - **95BandwidthByMonth**: monthly 95th percentile bandwidth
   * 
   * > You can select a billing method only for the first purchase. Subsequent purchases use the billing method selected during the first purchase by default.
   * 
   * @example
   * BandwidthByDay
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum public bandwidth. If the value of this parameter is greater than 0, a public IP address is automatically assigned to the instance.
   * 
   * @example
   * 1
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * The IP type. Valid values:
   * 
   * - **ipv4** (default): IPv4.
   * 
   * - **ipv6**: IPv6.
   * 
   * - **ipv4Andipv6**: IPv4 and IPv6 (single stack).
   * - **ipv4Withipv6**: IPv4 and IPv6 (dual-stack).
   * 
   * @example
   * ipv4
   */
  ipType?: string;
  /**
   * @remarks
   * The number of randomly generated IPv6 addresses to assign to the primary ENI of the private network.
   * 
   * @example
   * 2
   */
  ipv6AddressCount?: number;
  /**
   * @remarks
   * The key pair name.
   * > Specify at least one of **Password**, **KeyPairName**, and **PasswordInherit**.
   * 
   * @example
   * wx2-jumpserver
   */
  keyPairName?: string;
  /**
   * @remarks
   * The ID of the instance launch template.
   * 
   * @example
   * lt-test
   */
  launchTemplateId?: string;
  /**
   * @remarks
   * The name of the instance launch template.
   * 
   * @example
   * lt-test
   */
  launchTemplateName?: string;
  /**
   * @remarks
   * The version of the instance launch template.
   * 
   * @example
   * 2
   */
  launchTemplateVersion?: number;
  /**
   * @remarks
   * The region code.
   * >This parameter is required for region-level scheduling and is invalid for node-level scheduling.
   * 
   * @example
   * 350000
   */
  netDistrictCode?: string;
  /**
   * @remarks
   * The network ID.
   * 
   * >This parameter can only be used for node-level scheduling. An error is returned if this parameter is specified for region-level scheduling. If you do not specify vSwitch information, only the validity of the network ID is verified. The actual resource creation does not use this network ID.
   * 
   * @example
   * net-id
   */
  netWorkId?: string;
  /**
   * @remarks
   * The instance password.
   * 
   * > Specify at least one of **Password**, **KeyPairName**, and **PasswordInherit**.
   * 
   * @example
   * testPassword
   */
  password?: string;
  /**
   * @remarks
   * Specifies whether to use the preset password of the image. Valid values:
   * 
   * - **true**: uses the preset password.
   * - **false**: does not use the preset password.
   * 
   * > Specify at least one of **Password**, **KeyPairName**, and **PasswordInherit**.
   * 
   * @example
   * false
   */
  passwordInherit?: boolean;
  /**
   * @remarks
   * The duration of the purchased resource.
   * 
   * - If **PeriodUnit** is set to **Day**, **Period** can only be set to **3**.
   * 
   * - If **PeriodUnit** is set to **Month**, **Period** can be set to **1-9** or **12**.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the purchase duration. Valid values:
   * - **Month** (default): monthly purchase.
   * - **Day**: daily purchase.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The private IP address.
   * >This parameter can only be used for node-level scheduling. An error is returned if this parameter is specified for region-level scheduling.
   * If a private IP address is specified, the number of instances can only be 1. The private IP address takes effect only when both the private IP address and vSwitch ID are specified.
   * 
   * @example
   * 10.0.XX.XX
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * Specifies whether to enable public IP identification. Valid values:
   * 
   * - true: enables public IP identification.
   * 
   * - false: does not enable public IP identification.
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  publicIpIdentification?: boolean;
  /**
   * @remarks
   * The scheduling level. Use this parameter to specify node-level or region-level scheduling. Valid values:
   * 
   * - **Big**: major area
   * - **Middle**: province
   * - **Small**: city
   * - **Region**: node
   * 
   * @example
   * Region
   */
  scheduleAreaLevel?: string;
  /**
   * @remarks
   * The scheduling price strategy. Valid values:
   * 
   * - **PriceHighPriority**: high price first
   * - **PriceLowPriority**: low price first
   * 
   * @example
   * PriceHighPriority
   */
  schedulingPriceStrategy?: string;
  /**
   * @remarks
   * The scheduling strategy. Valid values:
   * 
   * - **Concentrate**: concentrated
   * - **Disperse**: dispersed
   * 
   * > For node-level scheduling, the value is **Concentrate**. For region-level scheduling, select a value based on your requirements.
   * 
   * @example
   * Concentrate
   */
  schedulingStrategy?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-test
   */
  securityId?: string;
  /**
   * @remarks
   * The protection period of the spot instance.
   * 
   * Unit: hours.
   * 
   * @example
   * 1
   */
  spotDuration?: number;
  /**
   * @remarks
   * The bidding policy for the pay-as-you-go instance. This parameter takes effect when the `InstanceChargeType` parameter is set to `PostPaid`. Valid values:
   * 
   * - NoSpot: a regular pay-as-you-go instance.
   * - SpotAsPriceGo: the system automatically bids at the current market price.
   * 
   * Default value: NoSpot.
   * 
   * @example
   * SpotAsPriceGo
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The system cloud disk specifications.
   */
  systemDisk?: RunInstancesRequestSystemDisk;
  /**
   * @remarks
   * The tags that are bound to the instance.
   */
  tag?: RunInstancesRequestTag[];
  /**
   * @remarks
   * Specifies whether to add sequential suffixes to **HostName** and **InstanceName**. The sequential suffixes start from 001 and cannot exceed 999.
   * 
   * @example
   * True
   */
  uniqueSuffix?: boolean;
  /**
   * @remarks
   * The custom user data. Maximum size: 16 KB. You can pass in **UserData** information. **UserData** is Base64-encoded.
   * 
   * @example
   * ZWtest
   */
  userData?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * >This parameter can only be used for node-level scheduling. An error is returned if this parameter is specified for region-level scheduling.
   * 
   * @example
   * vsw-5sagnw7m613oulalkd10n****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPD network ID.
   * 
   * @example
   * vpd-5s7xxxxxxx
   */
  vpdId?: string;
  /**
   * @remarks
   * The list of VPD vSwitch IDs.
   */
  vpdVSwitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      autoInstallCloudAssistant: 'AutoInstallCloudAssistant',
      autoReleaseTime: 'AutoReleaseTime',
      autoRenew: 'AutoRenew',
      autoUseCoupon: 'AutoUseCoupon',
      billingCycle: 'BillingCycle',
      carrier: 'Carrier',
      cloudAssistantRegion: 'CloudAssistantRegion',
      dataDisk: 'DataDisk',
      deletionProtection: 'DeletionProtection',
      deploymentSetId: 'DeploymentSetId',
      ensRegionId: 'EnsRegionId',
      hostName: 'HostName',
      imageId: 'ImageId',
      instanceChargeStrategy: 'InstanceChargeStrategy',
      instanceChargeType: 'InstanceChargeType',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      internetChargeType: 'InternetChargeType',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      ipType: 'IpType',
      ipv6AddressCount: 'Ipv6AddressCount',
      keyPairName: 'KeyPairName',
      launchTemplateId: 'LaunchTemplateId',
      launchTemplateName: 'LaunchTemplateName',
      launchTemplateVersion: 'LaunchTemplateVersion',
      netDistrictCode: 'NetDistrictCode',
      netWorkId: 'NetWorkId',
      password: 'Password',
      passwordInherit: 'PasswordInherit',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      privateIpAddress: 'PrivateIpAddress',
      publicIpIdentification: 'PublicIpIdentification',
      scheduleAreaLevel: 'ScheduleAreaLevel',
      schedulingPriceStrategy: 'SchedulingPriceStrategy',
      schedulingStrategy: 'SchedulingStrategy',
      securityId: 'SecurityId',
      spotDuration: 'SpotDuration',
      spotStrategy: 'SpotStrategy',
      systemDisk: 'SystemDisk',
      tag: 'Tag',
      uniqueSuffix: 'UniqueSuffix',
      userData: 'UserData',
      vSwitchId: 'VSwitchId',
      vpdId: 'VpdId',
      vpdVSwitchIds: 'VpdVSwitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      autoInstallCloudAssistant: 'boolean',
      autoReleaseTime: 'string',
      autoRenew: 'boolean',
      autoUseCoupon: 'string',
      billingCycle: 'string',
      carrier: 'string',
      cloudAssistantRegion: 'string',
      dataDisk: { 'type': 'array', 'itemType': RunInstancesRequestDataDisk },
      deletionProtection: 'boolean',
      deploymentSetId: 'string',
      ensRegionId: 'string',
      hostName: 'string',
      imageId: 'string',
      instanceChargeStrategy: 'string',
      instanceChargeType: 'string',
      instanceName: 'string',
      instanceType: 'string',
      internetChargeType: 'string',
      internetMaxBandwidthOut: 'number',
      ipType: 'string',
      ipv6AddressCount: 'number',
      keyPairName: 'string',
      launchTemplateId: 'string',
      launchTemplateName: 'string',
      launchTemplateVersion: 'number',
      netDistrictCode: 'string',
      netWorkId: 'string',
      password: 'string',
      passwordInherit: 'boolean',
      period: 'number',
      periodUnit: 'string',
      privateIpAddress: 'string',
      publicIpIdentification: 'boolean',
      scheduleAreaLevel: 'string',
      schedulingPriceStrategy: 'string',
      schedulingStrategy: 'string',
      securityId: 'string',
      spotDuration: 'number',
      spotStrategy: 'string',
      systemDisk: RunInstancesRequestSystemDisk,
      tag: { 'type': 'array', 'itemType': RunInstancesRequestTag },
      uniqueSuffix: 'boolean',
      userData: 'string',
      vSwitchId: 'string',
      vpdId: 'string',
      vpdVSwitchIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dataDisk)) {
      $dara.Model.validateArray(this.dataDisk);
    }
    if(this.systemDisk && typeof (this.systemDisk as any).validate === 'function') {
      (this.systemDisk as any).validate();
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(Array.isArray(this.vpdVSwitchIds)) {
      $dara.Model.validateArray(this.vpdVSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

