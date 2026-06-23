// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceShrinkRequest extends $dara.Model {
  /**
   * @example
   * ram openSource
   */
  authModel?: string;
  /**
   * @remarks
   * The renewal method. Valid values:
   * 
   * - `true`: Enables auto-renewal.
   * 
   * - `false`: Disables auto-renewal.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal duration. The `RenewalDurationUnit` parameter specifies the unit, which defaults to month.
   * 
   * > This parameter is required if you set `AutoRenew` to `true`. The default value is 1.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The client token used to ensure request idempotence.
   * 
   * @example
   * c2c5d1274axxxxxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The deployment architecture for the serverless instance. Valid values:
   * 
   * - `shared`: The shared architecture, which is applicable to reserved and elastic (shared) instances and pay-as-you-go instances.
   * 
   * - `dedicated`: The dedicated architecture, which is applicable to reserved and elastic (dedicated) instances.
   * 
   * @example
   * shared
   */
  edition?: string;
  /**
   * @remarks
   * This parameter is applicable only to dedicated instances. Specifies whether to enable data-at-rest encryption for the instance.
   * 
   * @example
   * false
   */
  encryptedInstance?: boolean;
  /**
   * @remarks
   * The name of the instance. The name can be up to 64 characters long.
   * 
   * @example
   * amqp-xxxxx
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance type.
   * This parameter is required for subscription instances. Valid values:
   * 
   * - `professional`: Professional Edition
   * 
   * - `enterprise`: Enterprise Edition
   * 
   * - `vip`: Platinum Edition
   * 
   * You do not need to specify this parameter for serverless instances.
   * 
   * @example
   * professional
   */
  instanceType?: string;
  /**
   * @remarks
   * This parameter applies only to dedicated instances and is required if `EncryptedInstance` is set to `true`. It specifies the ID of the KMS key used for data-at-rest encryption. The key must meet the following requirements:
   * 
   * - The key cannot be a service key.
   * 
   * - The key must be in the Enabled state.
   * 
   * - The key must be a symmetric key, not an asymmetric key.
   * 
   * - The key usage must be for encryption and decryption.
   * 
   * - If the KMS key expires or is deleted, data reads and writes will become unavailable, and the ApsaraMQ for RabbitMQ instance may become inoperable.
   * 
   * @example
   * key-xxx
   */
  kmsKeyId?: string;
  /**
   * @remarks
   * Specifies whether to enable only the TLS-encrypted port. This parameter applies only to reserved and elastic (dedicated) instances, and Platinum Edition instances.
   * 
   * @example
   * tcp_and_ssl
   */
  listenerMode?: string;
  /**
   * @remarks
   * The maximum number of connections.
   * 
   * For information about the valid values, see the instance specifications on the [ApsaraMQ for RabbitMQ](https://common-buy.aliyun.com/?commodityCode=ons_onsproxy_pre) product page.
   * 
   * @example
   * 50000
   */
  maxConnections?: number;
  /**
   * @remarks
   * The peak transactions per second (TPS) of the instance over the public network.
   * 
   * For information about the valid values, see the instance specifications on the [ApsaraMQ for RabbitMQ](https://common-buy.aliyun.com/?commodityCode=ons_onsproxy_pre) product page.
   * 
   * @example
   * 128
   */
  maxEipTps?: number;
  /**
   * @remarks
   * The peak transactions per second (TPS) of the instance over a private network.
   * 
   * For information about the valid values, see the instance specifications on the [ApsaraMQ for RabbitMQ](https://common-buy.aliyun.com/?commodityCode=ons_onsproxy_pre) product page.
   * 
   * @example
   * 1000
   */
  maxPrivateTps?: number;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * - `Subscription`: The subscription-based billing method.
   * 
   * - `PayAsYouGo`: The pay-as-you-go method for serverless instances.
   * 
   * This parameter is required.
   * 
   * @example
   * Subscription
   */
  paymentType?: string;
  /**
   * @remarks
   * The subscription duration. The `PeriodCycle` parameter specifies the unit.
   * 
   * > This parameter is required if you set `PaymentType` to `Subscription`. The default value is 1.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration. Valid values:
   * 
   * - `Month`: month
   * 
   * - `Year`: year
   * 
   * This parameter is required if you set `PaymentType` to `Subscription`. The default value is `Month`.
   * 
   * @example
   * Month
   */
  periodCycle?: string;
  /**
   * @remarks
   * The provisioned TPS capacity for a reserved and elastic instance.
   * 
   * @example
   * 2000
   */
  provisionedCapacity?: number;
  /**
   * @remarks
   * The queue capacity of the instance.
   * 
   * For information about the valid values, see the instance specifications on the [ApsaraMQ for RabbitMQ](https://common-buy.aliyun.com/?commodityCode=ons_onsproxy_pre) product page.
   * 
   * @example
   * 1000
   */
  queueCapacity?: number;
  /**
   * @remarks
   * The renewal status. This parameter is equivalent to `AutoRenew`. Valid value:
   * 
   * - `AutoRenewal`: Enables auto-renewal.
   * 
   * > Both `AutoRenew` and `RenewStatus` specify the renewal method. If you specify both parameters, the value of `RenewStatus` takes precedence.
   * 
   * @example
   * false
   */
  renewStatus?: string;
  /**
   * @remarks
   * The unit of the auto-renewal duration. Valid values:
   * 
   * - `Month`: month
   * 
   * - `Year`: year
   * 
   * @example
   * Month
   */
  renewalDurationUnit?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-acfmvvajg5qkxhi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the security group. This security group is used for the PrivateLink-based endpoint. The security group must meet the following requirements:
   * 
   * 1. Add an inbound rule to allow traffic on TCP ports 5672 and 5671.
   * 
   * 2. Managed security groups are not supported.
   * 
   * 3. The security group must belong to the specified VPC.
   * 
   * This parameter is required.
   * 
   * @example
   * sg-xxx
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The billing type of the serverless instance. Valid value:
   * 
   * - `onDemand`: pay-as-you-go
   * 
   * @example
   * onDemand
   */
  serverlessChargeType?: string;
  serverlessSwitch?: boolean;
  /**
   * @remarks
   * The message storage space. Unit: GB. Valid values:
   * 
   * - Professional Edition and Enterprise Edition instances: The value is fixed at 0.
   * 
   * > A value of 0 means storage is not charged for Professional Edition and Enterprise Edition instances; it does not mean the instances lack storage space.
   * 
   * - Platinum Edition instances: m × 100, where m is an integer from 7 to 28.
   * 
   * @example
   * 7
   */
  storageSize?: number;
  /**
   * @remarks
   * Specifies whether to enable access over the public network. Valid values:
   * 
   * - `true`: Enables access over the public network.
   * 
   * - `false`: Disables access over the public network.
   * 
   * @example
   * true
   */
  supportEip?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the message trace feature. Valid values:
   * 
   * - `true`: Enables the message trace feature.
   * 
   * - `false`: Disables the message trace feature.
   * 
   * > * The message trace feature is included for 15 days at no charge on Platinum Edition instances. For these instances, you must enable this feature and set the retention period to 15 days.
   * 
   * - For other instance types, you can enable or disable this feature.
   * 
   * @example
   * true
   */
  supportTracing?: boolean;
  /**
   * @remarks
   * The resource tags.
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The retention period of message traces. Unit: days. Valid values:
   * 
   * - `3`
   * 
   * - `7`
   * 
   * - `15`
   * 
   * This parameter is required if you set `SupportTracing` to `true`.
   * 
   * @example
   * 3
   */
  tracingStorageTime?: number;
  /**
   * @remarks
   * The ID of the VPC. This parameter is used to create a PrivateLink-based endpoint.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-xxx
   */
  vpcId?: string;
  /**
   * @remarks
   * The vSwitch IDs used to create a PrivateLink-based endpoint when you create the instance. The vSwitches must meet the following requirements:
   * 
   * 1. You must specify two vSwitches that reside in different availability zones, except for regions that have only a single availability zone.
   * 
   * 2. The vSwitches must belong to the specified VPC.
   * 
   * 3. The vSwitches must be in the Available state.
   * 
   * 4. Each vSwitch must have at least 20 available IP addresses.
   * 
   * 5. The availability zones for the specified vSwitches must support NLB instance creation.
   * 
   * This parameter is required.
   */
  vswitchIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      authModel: 'AuthModel',
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      clientToken: 'ClientToken',
      edition: 'Edition',
      encryptedInstance: 'EncryptedInstance',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      kmsKeyId: 'KmsKeyId',
      listenerMode: 'ListenerMode',
      maxConnections: 'MaxConnections',
      maxEipTps: 'MaxEipTps',
      maxPrivateTps: 'MaxPrivateTps',
      paymentType: 'PaymentType',
      period: 'Period',
      periodCycle: 'PeriodCycle',
      provisionedCapacity: 'ProvisionedCapacity',
      queueCapacity: 'QueueCapacity',
      renewStatus: 'RenewStatus',
      renewalDurationUnit: 'RenewalDurationUnit',
      resourceGroupId: 'ResourceGroupId',
      securityGroupId: 'SecurityGroupId',
      serverlessChargeType: 'ServerlessChargeType',
      serverlessSwitch: 'ServerlessSwitch',
      storageSize: 'StorageSize',
      supportEip: 'SupportEip',
      supportTracing: 'SupportTracing',
      tagsShrink: 'Tags',
      tracingStorageTime: 'TracingStorageTime',
      vpcId: 'VpcId',
      vswitchIdsShrink: 'VswitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authModel: 'string',
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      clientToken: 'string',
      edition: 'string',
      encryptedInstance: 'boolean',
      instanceName: 'string',
      instanceType: 'string',
      kmsKeyId: 'string',
      listenerMode: 'string',
      maxConnections: 'number',
      maxEipTps: 'number',
      maxPrivateTps: 'number',
      paymentType: 'string',
      period: 'number',
      periodCycle: 'string',
      provisionedCapacity: 'number',
      queueCapacity: 'number',
      renewStatus: 'string',
      renewalDurationUnit: 'string',
      resourceGroupId: 'string',
      securityGroupId: 'string',
      serverlessChargeType: 'string',
      serverlessSwitch: 'boolean',
      storageSize: 'number',
      supportEip: 'boolean',
      supportTracing: 'boolean',
      tagsShrink: 'string',
      tracingStorageTime: 'number',
      vpcId: 'string',
      vswitchIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

