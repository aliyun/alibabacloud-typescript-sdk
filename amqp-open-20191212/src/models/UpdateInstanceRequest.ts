// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceRequest extends $dara.Model {
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
   * 实例是否开通数据存储加密功能
   * 
   * @example
   * false
   */
  encryptedInstance?: boolean;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RabbitMQ instance.
   * 
   * This parameter is required.
   * 
   * @example
   * amqp-cn-jtexxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance edition. Valid values for subscription instances:
   * 
   * *   professional: Professional Edition
   * *   enterprise: Enterprise Edition
   * *   vip: Enterprise Platinum Edition.
   * 
   * If your instance is a pay-as-you-go instance, you do not need to configure this parameter.
   * 
   * @example
   * professional
   */
  instanceType?: string;
  /**
   * @remarks
   * 使用同地域下KMS密钥ID
   * 
   * @example
   * key-bjj66c2a893vmhawtq5fd
   */
  kmsKeyId?: string;
  /**
   * @remarks
   * The maximum number of connections that can be created on the instance.
   * 
   * @example
   * 1000
   */
  maxConnections?: number;
  /**
   * @remarks
   * The peak TPS for accessing the instance over the Internet.
   * 
   * @example
   * 128
   */
  maxEipTps?: number;
  /**
   * @remarks
   * The peak transactions per second (TPS) for accessing the instance in a virtual private cloud (VPC).
   * 
   * @example
   * 1000
   */
  maxPrivateTps?: number;
  /**
   * @remarks
   * The type of the configuration change. Valid values:
   * 
   * *   UPGRADE
   * *   DOWNGRADE
   * 
   * This parameter is required.
   * 
   * @example
   * UPGRADE
   */
  modifyType?: string;
  provisionedCapacity?: number;
  /**
   * @remarks
   * The maximum number of queues that can be created on the instance.
   * 
   * @example
   * 1000
   */
  queueCapacity?: number;
  /**
   * @remarks
   * The billing method of the serverless instance. Valid values:
   * 
   * *   onDemand: You are charged based on your actual usage.
   * 
   * @example
   * onDemand
   */
  serverlessChargeType?: string;
  /**
   * @remarks
   * The size of the storage space that can be used to store messages.
   * 
   * @example
   * 7
   */
  storageSize?: number;
  /**
   * @remarks
   * Specifies whether elastic IP addresses (EIPs) are supported.
   * 
   * @example
   * false
   */
  supportEip?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the message trace feature.
   * 
   * @example
   * false
   */
  supportTracing?: boolean;
  /**
   * @remarks
   * The retention period of message traces.
   * 
   * Valid values:
   * 
   * *   3
   * *   7
   * *   15
   * 
   * @example
   * 3
   */
  tracingStorageTime?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      edition: 'Edition',
      encryptedInstance: 'EncryptedInstance',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      kmsKeyId: 'KmsKeyId',
      maxConnections: 'MaxConnections',
      maxEipTps: 'MaxEipTps',
      maxPrivateTps: 'MaxPrivateTps',
      modifyType: 'ModifyType',
      provisionedCapacity: 'ProvisionedCapacity',
      queueCapacity: 'QueueCapacity',
      serverlessChargeType: 'ServerlessChargeType',
      storageSize: 'StorageSize',
      supportEip: 'SupportEip',
      supportTracing: 'SupportTracing',
      tracingStorageTime: 'TracingStorageTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      edition: 'string',
      encryptedInstance: 'boolean',
      instanceId: 'string',
      instanceType: 'string',
      kmsKeyId: 'string',
      maxConnections: 'number',
      maxEipTps: 'number',
      maxPrivateTps: 'number',
      modifyType: 'string',
      provisionedCapacity: 'number',
      queueCapacity: 'number',
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

