// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRCNodePoolShrinkRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. You can create up to N tag keys at a time. Valid values of N: **1** to **20**. The tag key cannot be an empty string.
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

export class CreateRCNodePoolShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the number of RDS Custom instances to create. This parameter is applicable only when you create multiple RDS Custom instances at a time.
   * 
   * Valid values: **1** to **5**. Default value: **1**.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * - **true**: Automatic payment is enabled. Make sure that your account balance is sufficient.
   * - **false**: Only an order is generated and no payment is made.
   * 
   * 
   * > Default value: **true**. If the balance of your payment method is insufficient, you can set the AutoPay parameter to false. In this case, an unpaid order is generated, and you can log on to the ApsaraDB RDS console to complete the payment.
   * >
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the instance. This parameter is valid only when you create a subscription instance. Valid values:
   * * **true**: yes.
   * * **false**: no.
   * 
   * > * If the subscription duration is one month, the auto-renewal cycle is 1 month.
   * > * If the subscription duration is one year, the auto-renewal cycle is 1 year.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request and prevent duplicate submissions. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * The RDS Custom container cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c463aaa89e2b84cacacfbf23c4867****
   */
  clusterId?: string;
  /**
   * @remarks
   * Specifies whether the instance is allowed to join an ACK cluster. When this parameter is set to **1**, the created instance can be added to an ACK cluster for efficient management of containerized applications.
   * 
   * - **1**: yes.
   * - **0** (default): no.
   * 
   * @example
   * 1
   */
  createMode?: string;
  /**
   * @remarks
   * The data cloud disks.
   */
  dataDiskShrink?: string;
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
   * The instance description. The description must be 2 to 256 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run before creating the instance. Valid values:
   * * **true**: A dry run is performed and no instance is created. The system checks the request parameters, request format, service limits, and available resources.
   * * **false** (default): A normal request is sent and the instance is created if the request passes the dry run.
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
   * The image ID of the instance.
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
   * The instance type. For the instance types supported by RDS Custom, see [RDS Custom instance types](https://help.aliyun.com/document_detail/2844823.html).
   * 
   * This parameter is required.
   * 
   * @example
   * mysql.i8.large.2cm
   */
  instanceType?: string;
  /**
   * @remarks
   * Reserved parameter. Not supported.
   * 
   * @example
   * None
   */
  internetChargeType?: string;
  /**
   * @remarks
   * Reserved parameter. Not supported.
   * 
   * @example
   * None
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * Reserved parameter. Not supported.
   * 
   * @example
   * None
   */
  ioOptimized?: string;
  /**
   * @remarks
   * The key pair name. Only one key pair name is supported.
   * 
   * @example
   * dell5502
   */
  keyPairName?: string;
  /**
   * @remarks
   * The node pool name.
   * 
   * @example
   * testNodePool
   */
  nodePoolName?: string;
  /**
   * @remarks
   * The password of the root account for the instance.
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
   * The time unit of the subscription billing method. Valid values:
   * - **Year**: year.
   * - **Month** (default): month.
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
   * Reserved parameter. Not supported.
   * 
   * @example
   * None
   */
  securityEnhancementStrategy?: string;
  /**
   * @remarks
   * The security group ID. You can specify an existing security group ID. If the specified security group does not exist, a security group is automatically created.
   * 
   * @example
   * sg-m5e9abdu1rtxa12b****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * Reserved parameter. Not supported.
   * 
   * @example
   * None
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The supported scenario. This parameter is required when the **createMode** parameter is set to **1**. Only **edge** is supported.
   * 
   * @example
   * edge
   */
  supportCase?: string;
  /**
   * @remarks
   * The system cloud disk.
   */
  systemDiskShrink?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateRCNodePoolShrinkRequestTag[];
  /**
   * @remarks
   * Reserved parameter. Not supported.
   * 
   * @example
   * None
   */
  userData?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * > The vSwitch must be in the same zone as the RDS instance.
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
   * > If you specify the VSwitchId parameter, the ZoneId parameter must be set to the zone where the vSwitch resides. You can also leave the ZoneId parameter empty, and the system automatically selects the zone where the specified vSwitch resides.
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
      dataDiskShrink: 'DataDisk',
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
      systemDiskShrink: 'SystemDisk',
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
      dataDiskShrink: 'string',
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
      systemDiskShrink: 'string',
      tag: { 'type': 'array', 'itemType': CreateRCNodePoolShrinkRequestTag },
      userData: 'string',
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

