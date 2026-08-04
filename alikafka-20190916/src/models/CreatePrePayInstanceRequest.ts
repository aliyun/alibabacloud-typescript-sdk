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
  confluentVersion?: string;
  /**
   * @remarks
   * The number of CPU cores for the Connect component.
   * 
   * @example
   * 4
   */
  connectCU?: number;
  /**
   * @remarks
   * The number of Connect component replicas.
   * 
   * @example
   * 2
   */
  connectReplica?: number;
  /**
   * @remarks
   * The number of CPU cores for the ControlCenter component.
   * 
   * @example
   * 4
   */
  controlCenterCU?: number;
  /**
   * @remarks
   * The number of ControlCenter component replicas.
   * 
   * @example
   * 1
   */
  controlCenterReplica?: number;
  /**
   * @remarks
   * The disk capacity of the ControlCenter component. Unit: GB.
   * 
   * @example
   * 300
   */
  controlCenterStorage?: number;
  /**
   * @remarks
   * The number of CPU cores for Kafka Broker.
   * 
   * @example
   * 4
   */
  kafkaCU?: number;
  /**
   * @remarks
   * The number of Kafka Broker replicas.
   * 
   * @example
   * 3
   */
  kafkaReplica?: number;
  /**
   * @remarks
   * The number of CPU cores for the KafkaRestProxy component.
   * 
   * @example
   * 4
   */
  kafkaRestProxyCU?: number;
  /**
   * @remarks
   * The number of KafkaRestProxy component replicas.
   * 
   * @example
   * 2
   */
  kafkaRestProxyReplica?: number;
  /**
   * @remarks
   * The disk capacity of Kafka Broker. Unit: GB.
   * 
   * @example
   * 800
   */
  kafkaStorage?: number;
  kraftControllerCU?: number;
  kraftControllerReplica?: number;
  kraftControllerStorage?: number;
  /**
   * @remarks
   * The number of CPU cores for the KsqlDB component.
   * 
   * @example
   * 4
   */
  ksqlCU?: number;
  ksqlList?: CreatePrePayInstanceRequestConfluentConfigKsqlList[];
  /**
   * @remarks
   * The number of KsqlDB component replicas.
   * 
   * @example
   * 2
   */
  ksqlReplica?: number;
  /**
   * @remarks
   * The disk capacity of the KsqlDB component. Unit: GB.
   * 
   * @example
   * 100
   */
  ksqlStorage?: number;
  /**
   * @remarks
   * The number of CPU cores for the SchemaRegistry component.
   * 
   * @example
   * 1
   */
  schemaRegistryCU?: number;
  /**
   * @remarks
   * The number of SchemaRegistry component replicas.
   * 
   * @example
   * 2
   */
  schemaRegistryReplica?: number;
  /**
   * @remarks
   * The number of CPU cores for the ZooKeeper component.
   * 
   * @example
   * 2
   */
  zooKeeperCU?: number;
  /**
   * @remarks
   * The number of ZooKeeper component replicas.
   * 
   * @example
   * 3
   */
  zooKeeperReplica?: number;
  /**
   * @remarks
   * The disk capacity of the ZooKeeper component. Unit: GB.
   * 
   * @example
   * 100
   */
  zooKeeperStorage?: number;
  static names(): { [key: string]: string } {
    return {
      confluentVersion: 'ConfluentVersion',
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
      kraftControllerCU: 'KraftControllerCU',
      kraftControllerReplica: 'KraftControllerReplica',
      kraftControllerStorage: 'KraftControllerStorage',
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
      confluentVersion: 'string',
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
      kraftControllerCU: 'number',
      kraftControllerReplica: 'number',
      kraftControllerStorage: 'number',
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
   * The tag key of the resource.
   * 
   * - N ranges from 1 to 20.
   * 
   * - If this parameter is left empty, all tag keys are matched.
   * 
   * - The tag key can be up to 128 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
   * 
   * This parameter is required.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource.
   * 
   * - N ranges from 1 to 20.
   * 
   * - This parameter can be left empty.
   * 
   * - The tag value can be up to 128 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
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
   * The Confluent component configurations.
   * 
   * 
   * > This parameter is required when you create a Confluent instance.
   */
  confluentConfig?: CreatePrePayInstanceRequestConfluentConfig;
  /**
   * @remarks
   * The deployment type. Valid values:
   * 
   * - **4**: Internet- and VPC-connected instance
   * 
   * - **5**: VPC-connected instance
   * 
   * 
   * > When you create a Confluent instance, you cannot select the deployment type. Only the value 5 is allowed. After the purchase, you can configure whether to enable public access for each component.
   * 
   * @example
   * 5
   */
  deployType?: number;
  /**
   * @remarks
   * The disk capacity. Unit: GB.
   * 
   * For the value range, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > This parameter is not required when you create a Confluent instance.
   * 
   * @example
   * 500
   */
  diskSize?: number;
  /**
   * @remarks
   * The disk type. Valid values:
   * 
   * - **0**: ultra cloud disk
   * 
   * - **1**: SSD
   * 
   * > This parameter is not required when you create a Confluent instance.
   * 
   * @example
   * 1
   */
  diskType?: string;
  /**
   * @remarks
   * The subscription duration. Unit: months. Default value: 1. Valid values:
   * 
   * - **Confluent instances: 1 or 12**
   * - **ApsaraMQ for Kafka instances: 1**
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The Internet traffic.
   * 
   * - This parameter is required if **DeployType** is set to **4**.
   * 
   * - For the value range, see [Pay-as-you-go billing method](https://help.aliyun.com/document_detail/72142.html).
   * 
   * 
   * > This parameter is not required when you create a Confluent instance.
   * 
   * @example
   * 3
   */
  eipMax?: number;
  /**
   * @remarks
   * The traffic specification.
   *  
   * 
   * - For the value range, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * > This parameter is not required when you create a Confluent instance.
   * 
   * @example
   * alikafka.hw.2xlarge
   */
  ioMaxSpec?: string;
  /**
   * @remarks
   * The billing type. Valid values:
   * 
   * - **0**: subscription
   * 
   * - **4**: Confluent subscription
   * 
   * @example
   * 1
   */
  paidType?: number;
  /**
   * @remarks
   * The number of partitions to purchase.
   * 
   * * For the value range, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * > This parameter is not required when you create a Confluent instance.
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
   * The resource group ID.
   * 
   * If you do not specify this parameter, the instance is placed in the default resource group. You can view the resource group ID in the Resource Management console.
   * 
   * @example
   * rg-ac***********7q
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The edition type.
   * 
   * Valid values for ApsaraMQ for Kafka instances:
   * 
   * - **normal**: Standard Edition (shared throughput for writes)
   * 
   * - **professional**: Professional Edition (shared throughput for writes)
   * 
   * - **professionalForHighRead**: Professional Edition (shared throughput for reads)
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
   * The tags.
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

