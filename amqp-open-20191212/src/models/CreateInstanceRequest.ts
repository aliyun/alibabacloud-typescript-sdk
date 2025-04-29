// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * 
   * *   true: enables auto-renewal.
   * *   false: disables auto-renewal. If you select this value, you must manually renew the instance.
   * 
   * @example
   * AutoRenewal
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal period. The unit of the auto-renewal period is specified by RenewalDurationUnit. Default value: Month.
   * 
   * >  This parameter takes effect only if you set AutoRenew to true. Default value: 1.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The client token.
   * 
   * @example
   * c2c5d1274axxxxxxxx
   */
  clientToken?: string;
  edition?: string;
  /**
   * @remarks
   * Specifies whether to enable storage encryption for the instance. This parameter is available only for exclusive instances.
   * 
   * @example
   * false
   */
  encryptedInstance?: boolean;
  /**
   * @remarks
   * The name of the instance. We recommend that you specify a name that does not exceed 64 characters in length.
   * 
   * @example
   * amqp-xxxxx
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance edition. Valid values if you create a subscription instance:
   * 
   * *   professional: Professional Edition.
   * *   enterprise: Enterprise Edition
   * *   vip: Enterprise Platinum Edition
   * 
   * If you create a serverless instance, you do not need to specify this parameter.
   * 
   * @example
   * professional
   */
  instanceType?: string;
  /**
   * @remarks
   * The ID of the Key Management Service (KMS)-managed key used for storage encryption. This parameter is available only for exclusive instances and required only if you set EncryptedInstance to true. The key must meet the following conditions:
   * 
   * *   The key cannot be a service key.
   * *   The key must be in the Enabled state.
   * *   The key must be a symmetric key.
   * *   The key must be used for encryption and decryption.
   * *   After the key is expired or deleted, you cannot read or write data and exceptions can occur in the ApsaraMQ for RabbitMQ instance.
   * 
   * @example
   * key-xxx
   */
  kmsKeyId?: string;
  /**
   * @remarks
   * The maximum number of connections that can be established to the instance.
   * 
   * Configure this parameter based on the values provided on the [ApsaraMQ for RocketMQ buy page](https://common-buy.aliyun.com/?commodityCode=ons_onsproxy_pre).
   * 
   * @example
   * 50000
   */
  maxConnections?: number;
  /**
   * @remarks
   * The maximum number of Internet-based TPS on the instance.
   * 
   * Configure this parameter based on the values provided on the [ApsaraMQ for RocketMQ buy page](https://common-buy.aliyun.com/?commodityCode=ons_onsproxy_pre).
   * 
   * @example
   * 128
   */
  maxEipTps?: number;
  /**
   * @remarks
   * The maximum number of virtual private cloud (VPC)-based transactions per second (TPS) on the instance.
   * 
   * Configure this parameter based on the values provided on the [ApsaraMQ for RocketMQ buy page](https://common-buy.aliyun.com/?commodityCode=ons_onsproxy_pre).
   * 
   * @example
   * 1000
   */
  maxPrivateTps?: number;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   Subscription: subscription instance
   * *   PayAsYouGo: serverless instance
   * 
   * This parameter is required.
   * 
   * @example
   * Subscription
   */
  paymentType?: string;
  /**
   * @remarks
   * The subscription period. The unit of the subscription period is specified by periodCycle.
   * 
   * >  This parameter takes effect only if you set PaymentType to Subscription. Default value: 1.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription period. Valid values:
   * 
   * *   Month
   * *   Year
   * 
   * This parameter is valid only if you set PaymentType to Subscription. Default value: Month.
   * 
   * @example
   * Month
   */
  periodCycle?: string;
  provisionedCapacity?: number;
  /**
   * @remarks
   * The number of queues on the instance.
   * 
   * Configure this parameter based on the values provided on the [ApsaraMQ for RocketMQ buy page](https://common-buy.aliyun.com/?commodityCode=ons_onsproxy_pre).
   * 
   * @example
   * 1000
   */
  queueCapacity?: number;
  /**
   * @remarks
   * The renewal status. This parameter is the same as AutoRenew. You can configure one of these parameters. Valid value:
   * 
   * *   AutoRenewal
   * 
   * >  If you configure both this parameter and AutoRenew, the value of this parameter is used.
   * 
   * @example
   * false
   */
  renewStatus?: string;
  /**
   * @remarks
   * The unit of the auto-renewal period. Valid values:
   * 
   * *   Month
   * *   Year
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
   * The billing method of the serverless instance. Valid value:
   * 
   * *   onDemand: You are charged based on your actual usage.
   * 
   * @example
   * onDemand
   */
  serverlessChargeType?: string;
  /**
   * @remarks
   * The storage capacity. Unit: GB. Valid values:
   * 
   * *   Professional Edition and Enterprise Edition instances: Set the value to 0.
   * 
   * >  The value 0 specifies that storage space is available for Professional Edition and Enterprise Edition instances, but no storage fees are generated.
   * 
   * *   Enterprise Platinum Edition instances: Set the value to m × 100, where m is an integer that ranges from 7 to 28.
   * 
   * @example
   * 7
   */
  storageSize?: number;
  /**
   * @remarks
   * Specifies whether elastic IP addresses (EIPs) are supported. Valid values:
   * 
   * *   True
   * *   False
   * 
   * @example
   * true
   */
  supportEip?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the message trace feature. Valid values:
   * 
   * *   true
   * *   false
   * 
   * > 
   * 
   * *   Enterprise Platinum Edition instances allow you to retain message traces for 15 days free of charge. If you create an Enterprise Platinum Edition instance, you can set this parameter only to true and TracingStorageTime only to 15.
   * 
   * *   For instances of other editions, you can set this parameter to true or false.
   * 
   * @example
   * true
   */
  supportTracing?: boolean;
  /**
   * @remarks
   * The retention period of messages. Unit: days. Valid values:
   * 
   * *   3
   * *   7
   * *   15
   * 
   * This parameter is valid only if you set SupportTracing to true.
   * 
   * @example
   * 3
   */
  tracingStorageTime?: number;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      clientToken: 'ClientToken',
      edition: 'Edition',
      encryptedInstance: 'EncryptedInstance',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      kmsKeyId: 'KmsKeyId',
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
      serverlessChargeType: 'ServerlessChargeType',
      storageSize: 'StorageSize',
      supportEip: 'SupportEip',
      supportTracing: 'SupportTracing',
      tracingStorageTime: 'TracingStorageTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      clientToken: 'string',
      edition: 'string',
      encryptedInstance: 'boolean',
      instanceName: 'string',
      instanceType: 'string',
      kmsKeyId: 'string',
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
      serverlessChargeType: 'string',
      storageSize: 'number',
      supportEip: 'boolean',
      supportTracing: 'boolean',
      tracingStorageTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

