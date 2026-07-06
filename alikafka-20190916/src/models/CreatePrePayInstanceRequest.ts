// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePrePayInstanceRequestConfluentConfigKsqlList extends $dara.Model {
  internalId?: string;
  cu?: number;
  replica?: number;
  storage?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      internalId: 'InternalId',
      cu: 'cu',
      replica: 'replica',
      storage: 'storage',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internalId: 'string',
      cu: 'number',
      replica: 'number',
      storage: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrePayInstanceRequestConfluentConfig extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores for Connect.
   * 
   * @example
   * 4
   */
  connectCU?: number;
  /**
   * @remarks
   * The number of replicas for Connect.
   * 
   * @example
   * 2
   */
  connectReplica?: number;
  /**
   * @remarks
   * The number of CPU cores for Control Center.
   * 
   * @example
   * 4
   */
  controlCenterCU?: number;
  /**
   * @remarks
   * The number of replicas for Control Center.
   * 
   * @example
   * 1
   */
  controlCenterReplica?: number;
  /**
   * @remarks
   * The disk capacity for Control Center, in GB.
   * 
   * @example
   * 300
   */
  controlCenterStorage?: number;
  /**
   * @remarks
   * The number of CPU cores for the Kafka broker.
   * 
   * @example
   * 4
   */
  kafkaCU?: number;
  /**
   * @remarks
   * The number of replicas for the Kafka broker.
   * 
   * @example
   * 3
   */
  kafkaReplica?: number;
  /**
   * @remarks
   * The number of CPU cores for Kafka REST Proxy.
   * 
   * @example
   * 4
   */
  kafkaRestProxyCU?: number;
  /**
   * @remarks
   * The number of replicas for Kafka REST Proxy.
   * 
   * @example
   * 2
   */
  kafkaRestProxyReplica?: number;
  /**
   * @remarks
   * The disk capacity for the Kafka broker, in GB.
   * 
   * @example
   * 800
   */
  kafkaStorage?: number;
  /**
   * @remarks
   * The number of CPU cores for ksqlDB.
   * 
   * @example
   * 4
   */
  ksqlCU?: number;
  ksqlList?: CreatePrePayInstanceRequestConfluentConfigKsqlList[];
  /**
   * @remarks
   * The number of replicas for ksqlDB.
   * 
   * @example
   * 2
   */
  ksqlReplica?: number;
  /**
   * @remarks
   * The disk capacity for ksqlDB, in GB.
   * 
   * @example
   * 100
   */
  ksqlStorage?: number;
  /**
   * @remarks
   * The number of CPU cores for Schema Registry.
   * 
   * @example
   * 1
   */
  schemaRegistryCU?: number;
  /**
   * @remarks
   * The number of replicas for Schema Registry.
   * 
   * @example
   * 2
   */
  schemaRegistryReplica?: number;
  /**
   * @remarks
   * The number of CPU cores for ZooKeeper.
   * 
   * @example
   * 2
   */
  zooKeeperCU?: number;
  /**
   * @remarks
   * The number of replicas for ZooKeeper.
   * 
   * @example
   * 3
   */
  zooKeeperReplica?: number;
  /**
   * @remarks
   * The disk capacity for ZooKeeper, in GB.
   * 
   * @example
   * 100
   */
  zooKeeperStorage?: number;
  static names(): { [key: string]: string } {
    return {
      connectCU: 'ConnectCU',
      connectReplica: 'ConnectReplica',
      controlCenterCU: 'ControlCenterCU',
      controlCenterReplica: 'ControlCenterReplica',
      controlCenterStorage: 'ControlCenterStorage',
      kafkaCU: 'KafkaCU',
      kafkaReplica: 'KafkaReplica',
      kafkaRestProxyCU: 'KafkaRestProxyCU',
      kafkaRestProxyReplica: 'KafkaRestProxyReplica',
      kafkaStorage: 'KafkaStorage',
      ksqlCU: 'KsqlCU',
      ksqlList: 'KsqlList',
      ksqlReplica: 'KsqlReplica',
      ksqlStorage: 'KsqlStorage',
      schemaRegistryCU: 'SchemaRegistryCU',
      schemaRegistryReplica: 'SchemaRegistryReplica',
      zooKeeperCU: 'ZooKeeperCU',
      zooKeeperReplica: 'ZooKeeperReplica',
      zooKeeperStorage: 'ZooKeeperStorage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectCU: 'number',
      connectReplica: 'number',
      controlCenterCU: 'number',
      controlCenterReplica: 'number',
      controlCenterStorage: 'number',
      kafkaCU: 'number',
      kafkaReplica: 'number',
      kafkaRestProxyCU: 'number',
      kafkaRestProxyReplica: 'number',
      kafkaStorage: 'number',
      ksqlCU: 'number',
      ksqlList: { 'type': 'array', 'itemType': CreatePrePayInstanceRequestConfluentConfigKsqlList },
      ksqlReplica: 'number',
      ksqlStorage: 'number',
      schemaRegistryCU: 'number',
      schemaRegistryReplica: 'number',
      zooKeeperCU: 'number',
      zooKeeperReplica: 'number',
      zooKeeperStorage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ksqlList)) {
      $dara.Model.validateArray(this.ksqlList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrePayInstanceRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * -
   * 
   * -
   * 
   * - The key must be 1 to 128 characters long. It cannot start with aliyun or acs:, nor can it contain http\\:// or https\\://.
   * 
   * This parameter is required.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * -
   * 
   * -
   * 
   * - The value can be 0 to 128 characters long. It cannot start with aliyun or acs:, nor can it contain http\\:// or https\\://.
   * 
   * @example
   * test
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

export class CreatePrePayInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The configurations of the Confluent components.
   * 
   * > This parameter is required if you create a Confluent instance.
   */
  confluentConfig?: CreatePrePayInstanceRequestConfluentConfig;
  /**
   * @remarks
   * The deployment type. Valid values:
   * 
   * - **4**: an instance accessible from the internet and a VPC
   * 
   * - **5**: an instance accessible from a VPC only
   * 
   * > If you create a Confluent instance, you cannot specify the deployment type and must set this parameter to 5. After the instance is created, you can configure internet access for each component.
   * 
   * @example
   * 5
   */
  deployType?: number;
  /**
   * @remarks
   * The disk capacity, in GB.
   * 
   * For the value range, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > This parameter is not required if you create a Confluent instance.
   * 
   * @example
   * 500
   */
  diskSize?: number;
  /**
   * @remarks
   * The disk type. Valid values:
   * 
   * - **0**: ultra disk
   * 
   * - **1**: SSD
   * 
   * > This parameter is not required if you create a Confluent instance.
   * 
   * @example
   * 1
   */
  diskType?: string;
  /**
   * @remarks
   * The subscription duration, in months. Default value: 1. Valid values:
   * 
   * - Confluent instances: **1** and **12**
   * 
   * - Kafka instances: **1**
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The peak internet bandwidth.
   * 
   * - This parameter is required if you set **DeployType** to **4**.
   * 
   * - For the value range, see [pay-as-you-go](https://help.aliyun.com/document_detail/72142.html).
   * 
   * > This parameter is not required if you create a Confluent instance.
   * 
   * @example
   * 3
   */
  eipMax?: number;
  /**
   * @remarks
   * The I/O specification.
   * 
   * - For the value range, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > This parameter is not required if you create a Confluent instance.
   * 
   * @example
   * alikafka.hw.2xlarge
   */
  ioMaxSpec?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - **0**: subscription
   * 
   * - **4**: subscription for Confluent instances
   * 
   * @example
   * 1
   */
  paidType?: number;
  /**
   * @remarks
   * The number of partitions.
   * 
   * - For the value range, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > This parameter is not required if you create a Confluent instance.
   * 
   * @example
   * 1000
   */
  partitionNum?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * If you do not specify this parameter, the instance is placed in the default resource group. You can find the resource group ID in the Resource Group console.
   * 
   * @example
   * rg-ac***********7q
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The specification type.
   * 
   * Valid values for Kafka instances:
   * 
   * - **normal**: Standard Edition (High-write)
   * 
   * - **professional**: Professional Edition (High-write)
   * 
   * - **professionalForHighRead**: Professional Edition (High-read)
   * 
   * Valid values for Confluent instances:
   * 
   * - **professional**: Professional Edition
   * 
   * - **enterprise**: Enterprise Edition
   * 
   * For more information, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * @example
   * professional
   */
  specType?: string;
  /**
   * @remarks
   * The tags to attach to the instance. You can specify up to 20 tags.
   */
  tag?: CreatePrePayInstanceRequestTag[];
  static names(): { [key: string]: string } {
    return {
      confluentConfig: 'ConfluentConfig',
      deployType: 'DeployType',
      diskSize: 'DiskSize',
      diskType: 'DiskType',
      duration: 'Duration',
      eipMax: 'EipMax',
      ioMaxSpec: 'IoMaxSpec',
      paidType: 'PaidType',
      partitionNum: 'PartitionNum',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      specType: 'SpecType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confluentConfig: CreatePrePayInstanceRequestConfluentConfig,
      deployType: 'number',
      diskSize: 'number',
      diskType: 'string',
      duration: 'number',
      eipMax: 'number',
      ioMaxSpec: 'string',
      paidType: 'number',
      partitionNum: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      specType: 'string',
      tag: { 'type': 'array', 'itemType': CreatePrePayInstanceRequestTag },
    };
  }

  validate() {
    if(this.confluentConfig && typeof (this.confluentConfig as any).validate === 'function') {
      (this.confluentConfig as any).validate();
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

