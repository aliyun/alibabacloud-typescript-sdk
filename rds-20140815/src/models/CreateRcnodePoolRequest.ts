// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRCNodePoolRequestDataDisk extends $dara.Model {
  /**
   * @remarks
   * The type of the data cloud disk. Only **cloud_essd** (ESSD cloud disk) is supported. For more information about standard SSDs and other cloud disk types, see the related documentation.
   * 
   * @example
   * cloud_essd
   */
  category?: string;
  /**
   * @remarks
   * A reserved parameter. This parameter is not supported.
   * 
   * @example
   * None
   */
  deleteWithInstance?: boolean;
  /**
   * @remarks
   * Specifies whether to encrypt the data cloud disk. Valid values:
   * 
   * - **true**
   * - **false** (default)
   * 
   * @example
   * false
   */
  encrypted?: string;
  /**
   * @remarks
   * The performance level (PL) of the ESSD cloud disk. For standard SSDs and other cloud disk types, this parameter is not applicable. Valid values:
   * 
   * - **PL0**: A single cloud disk can deliver up to 10,000 random read/write IOPS.
   * - **PL1**: A single cloud disk can deliver up to 50,000 random read/write IOPS.
   * - **PL2**: A single cloud disk can deliver up to 100,000 random read/write IOPS.
   * - **PL3**: A single cloud disk can deliver up to 1,000,000 random read/write IOPS.
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The size of the data cloud disk. Unit: GiB. Valid values: 20 to 65536.
   * 
   * @example
   * 20
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      deleteWithInstance: 'DeleteWithInstance',
      encrypted: 'Encrypted',
      performanceLevel: 'PerformanceLevel',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      deleteWithInstance: 'boolean',
      encrypted: 'string',
      performanceLevel: 'string',
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

export class CreateRCNodePoolRequestSystemDisk extends $dara.Model {
  /**
   * @remarks
   * The category of the system cloud disk. Only **cloud_essd** (Enterprise SSD) is supported.
   * 
   * @example
   * cloud_essd
   */
  category?: string;
  /**
   * @remarks
   * The performance level (PL) of the ESSD cloud disk. For standard SSDs and other cloud disk types, this parameter is not applicable. Valid values:
   * 
   * - **PL0**: A single cloud disk can deliver up to 10,000 random read/write IOPS.
   * - **PL1**: A single cloud disk can deliver up to 50,000 random read/write IOPS.
   * - **PL2**: A single cloud disk can deliver up to 100,000 random read/write IOPS.
   * - **PL3**: A single cloud disk can deliver up to 1,000,000 random read/write IOPS.
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The size of the system cloud disk. Unit: GiB. Valid values: 20 to 2048.
   * 
   * @example
   * 40
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      performanceLevel: 'PerformanceLevel',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      performanceLevel: 'string',
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

export class CreateRCNodePoolRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. You can create up to N tag keys at a time. Valid values of N: **1 to 20**. The tag key cannot be an empty string.
   * 
   * @example
   * testkey1
   */
  key?: string;
  /**
   * @remarks
   * The tag value that corresponds to the tag key. You can create up to N tag values at a time. Valid values of N: **1** to **20**. The tag value can be an empty string.
   * 
   * @example
   * testvalue1
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

export class CreateRCNodePoolRequest extends $dara.Model {
  /**
   * @remarks
   * The number of RDS Custom instances to create. This parameter is applicable only to batch creation of RDS Custom instances.
   * 
   * Valid values: **1** to **5**. Default value: **1**.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * Specifies whether to enable automatic payment.
   * Valid values:
   * 
   * - **true**: Automatic payment is enabled. Make sure that your account balance is sufficient.
   * - **false**: Only an order is generated. No payment is made.
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
   * Specifies whether to enable auto-renewal. This parameter is valid only when you create subscription instances. Valid values:
   * * **true**
   * * **false**
   * 
   * > * If you purchase on a monthly basis, the auto-renewal epoch is 1 month.
   * > * If you purchase on a yearly basis, the auto-renewal epoch is 1 year.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
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
   * The ID of the RDS Custom container cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * c463aaa89e2b84cacacfbf23c4867****
   */
  clusterId?: string;
  /**
   * @remarks
   * Specifies whether to allow the instance to join an ACK cluster. If this parameter settings is set to **1**, the created instance can be added to an ACK cluster for efficient container application management.
   * 
   * - **1**: Yes.
   * - **0** (default): No.
   * 
   * @example
   * 1
   */
  createMode?: string;
  /**
   * @remarks
   * The list of data cloud disks.
   */
  dataDisk?: CreateRCNodePoolRequestDataDisk[];
  /**
   * @remarks
   * The deployment set ID.
   * 
   * @example
   * ds-uf6c8qerk019bj1l****
   */
  deploymentSetId?: string;
  /**
   * @remarks
   * The instance description. The description must be 2 to 256 characters in length and can contain letters and Chinese characters. The description cannot start with http:// or https://.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run for this request. Valid values:
   * * **true**: performs a dry run without creating the instance. The system checks the request parameters, request format, service limits, and available stock.
   * * **false** (default): sends the request. If the request passes the check, the instance is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The hostname of the instance.
   * 
   * @example
   * testHost1
   */
  hostName?: string;
  /**
   * @remarks
   * The image ID used by the instance.
   * 
   * @example
   * image-dsvjzw2ii8n4fvr6de
   */
  imageId?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * * **Prepaid**: subscription.
   * * **Postpaid**: pay-as-you-go.
   * 
   * @example
   * PrePaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * test
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
   * None
   */
  internetChargeType?: string;
  /**
   * @remarks
   * A reserved parameter. This parameter is not supported.
   * 
   * @example
   * None
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * A reserved parameter. This parameter is not supported.
   * 
   * @example
   * None
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
   * The name of the node pool.
   * 
   * @example
   * testNodePool
   */
  nodePoolName?: string;
  /**
   * @remarks
   * The password of the root account of the instance.
   * 
   * @example
   * testPassword
   */
  password?: string;
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
   * The unit of the subscription duration for the subscription billable methods. Valid values:
   * - **Year**
   * - **Month** (default)
   * 
   * @example
   * Year
   */
  periodUnit?: string;
  /**
   * @remarks
   * The region ID.
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
  /**
   * @remarks
   * A reserved parameter. This parameter is not supported.
   * 
   * @example
   * None
   */
  securityEnhancementStrategy?: string;
  /**
   * @remarks
   * The security group ID. You can specify an existing security group ID. If the security group does not exist, automatic creation of a security group is performed.
   * 
   * @example
   * sg-m5e9abdu1rtxa12b****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * A reserved parameter. This parameter is not supported.
   * 
   * @example
   * None
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The supported scenario. This parameter is required when **createMode** is set to **1**. Currently, only **edge** is supported.
   * 
   * @example
   * edge
   */
  supportCase?: string;
  /**
   * @remarks
   * The system cloud disk specifications.
   */
  systemDisk?: CreateRCNodePoolRequestSystemDisk;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: CreateRCNodePoolRequestTag[];
  /**
   * @remarks
   * A reserved parameter. This parameter is not supported.
   * 
   * @example
   * None
   */
  userData?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * > The vSwitch must be in the same zone as the ApsaraDB RDS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-uf6adz52c2p****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID of the instance.
   * > If you specify the VSwitchId parameter, the ZoneId parameter must match the zone of the specified vSwitch. You can also leave this parameter empty, and the system automatically selects the zone of the specified vSwitch.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      clientToken: 'ClientToken',
      clusterId: 'ClusterId',
      createMode: 'CreateMode',
      dataDisk: 'DataDisk',
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
      nodePoolName: 'NodePoolName',
      password: 'Password',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityEnhancementStrategy: 'SecurityEnhancementStrategy',
      securityGroupId: 'SecurityGroupId',
      spotStrategy: 'SpotStrategy',
      supportCase: 'SupportCase',
      systemDisk: 'SystemDisk',
      tag: 'Tag',
      userData: 'UserData',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      autoPay: 'boolean',
      autoRenew: 'boolean',
      clientToken: 'string',
      clusterId: 'string',
      createMode: 'string',
      dataDisk: { 'type': 'array', 'itemType': CreateRCNodePoolRequestDataDisk },
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
      nodePoolName: 'string',
      password: 'string',
      period: 'number',
      periodUnit: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityEnhancementStrategy: 'string',
      securityGroupId: 'string',
      spotStrategy: 'string',
      supportCase: 'string',
      systemDisk: CreateRCNodePoolRequestSystemDisk,
      tag: { 'type': 'array', 'itemType': CreateRCNodePoolRequestTag },
      userData: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

