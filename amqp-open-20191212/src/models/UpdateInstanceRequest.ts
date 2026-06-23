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
  /**
   * @remarks
   * The deployment architecture of the Serverless instance. Valid values:
   * 
   * - shared: A shared architecture. This applies to reserved plus elastic (shared) and pay-as-you-go instances.
   * 
   * - dedicated: A dedicated architecture. This applies to reserved plus elastic (dedicated) instances.
   * 
   * @example
   * shared
   */
  edition?: string;
  /**
   * @remarks
   * This feature is for dedicated instances only. Specifies whether to enable data encryption.
   * 
   * - You cannot change the EncryptedInstance and KmsKeyId properties of a dedicated instance. This includes changing its encryption status or downgrading it to a shared instance. Do not include the EncryptedInstance and KmsKeyId parameters when you call UpdateInstance to upgrade or downgrade a dedicated instance.
   * 
   * - The EncryptedInstance and KmsKeyId parameters are used only when you upgrade a shared instance to an encrypted dedicated instance.
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
   * The instance type. This parameter is required for subscription instances. Valid values:
   * 
   * - professional: Professional Edition
   * 
   * - enterprise: Enterprise Edition
   * 
   * - vip: Platinum Edition
   * 
   * You do not need to specify this parameter for pay-as-you-go instances.
   * 
   * @example
   * professional
   */
  instanceType?: string;
  /**
   * @remarks
   * This feature is for dedicated instances only. This parameter is required if EncryptedInstance is set to true.
   * It specifies the ID of the KMS key used for data encryption.
   * The key must meet the following requirements:
   * 
   * - The KMS key must be in the same region as the ApsaraMQ for RabbitMQ instance.
   * 
   * - The key cannot be a service key.
   * 
   * - The key must be active.
   * 
   * - The key must be a symmetric key.
   * 
   * - The key must be used for encryption and decryption.
   * 
   * - If the KMS key expires or is deleted, data reads and writes will fail, and the ApsaraMQ for RabbitMQ instance will become unavailable.
   * 
   * @example
   * key-bjj66c2a893vmhawtq5fd
   */
  kmsKeyId?: string;
  /**
   * @remarks
   * The maximum number of connections.
   * 
   * @example
   * 1000
   */
  maxConnections?: number;
  /**
   * @remarks
   * The peak TPS for public network traffic.
   * 
   * @example
   * 128
   */
  maxEipTps?: number;
  /**
   * @remarks
   * The peak transactions per second (TPS) for private network traffic.
   * 
   * @example
   * 1000
   */
  maxPrivateTps?: number;
  /**
   * @remarks
   * The type of specification change. Valid values:
   * 
   * - UPGRADE: Upgrade
   * 
   * - DOWNGRADE: Downgrade
   * 
   * This parameter is required.
   * 
   * @example
   * UPGRADE
   */
  modifyType?: string;
  /**
   * @remarks
   * The provisioned TPS capacity for a reserved plus elastic instance.
   * 
   * @example
   * 2000
   */
  provisionedCapacity?: number;
  /**
   * @remarks
   * The maximum number of queues.
   * 
   * @example
   * 1000
   */
  queueCapacity?: number;
  /**
   * @remarks
   * The billing method of the pay-as-you-go (Serverless) instance. Valid value:
   * 
   * - onDemand: Pay-as-you-go
   * 
   * @example
   * onDemand
   */
  serverlessChargeType?: string;
  /**
   * @remarks
   * The message storage capacity. Unit: GB.
   * 
   * @example
   * 7
   */
  storageSize?: number;
  /**
   * @remarks
   * Specifies whether to enable Internet access.
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
   * The retention period for message traces. Unit: days.
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

