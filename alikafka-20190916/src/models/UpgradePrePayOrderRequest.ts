// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradePrePayOrderRequestConfluentConfigKsqlList extends $dara.Model {
  cu?: number;
  internalId?: string;
  replica?: number;
  storage?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cu: 'Cu',
      internalId: 'InternalId',
      replica: 'Replica',
      storage: 'Storage',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cu: 'number',
      internalId: 'string',
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

export class UpgradePrePayOrderRequestConfluentConfig extends $dara.Model {
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
   * The number of replicas for the Connect component.
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
   * The number of replicas for the ControlCenter component.
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
   * The number of CPU cores for the Kafka Broker.
   * 
   * @example
   * 4
   */
  kafkaCU?: number;
  /**
   * @remarks
   * The number of replicas for the Kafka Broker.
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
   * The number of replicas for the KafkaRestProxy component.
   * 
   * @example
   * 2
   */
  kafkaRestProxyReplica?: number;
  /**
   * @remarks
   * The disk capacity of the Kafka Broker. Unit: GB.
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
  ksqlList?: UpgradePrePayOrderRequestConfluentConfigKsqlList[];
  /**
   * @remarks
   * The number of replicas for the KsqlDB component.
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
   * The number of replicas for the SchemaRegistry component.
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
   * The number of replicas for the ZooKeeper component.
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
      ksqlList: { 'type': 'array', 'itemType': UpgradePrePayOrderRequestConfluentConfigKsqlList },
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

export class UpgradePrePayOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The Confluent component configurations.
   */
  confluentConfig?: UpgradePrePayOrderRequestConfluentConfig;
  /**
   * @remarks
   * The disk capacity.
   * 
   * - The disk capacity that you specify must be greater than or equal to the current disk capacity of the instance.
   * 
   * - For valid values, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > If you upgrade a Confluent instance, you do not need to specify this parameter. This parameter is required for subscription instances.
   * 
   * @example
   * 900
   */
  diskSize?: number;
  /**
   * @remarks
   * The public network traffic.
   * 
   * - The public network traffic that you specify must be greater than or equal to the current public network traffic of the instance.
   * 
   * - For valid values, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > - If **EipModel** is set to **true**, the value of **EipMax** must be greater than 0.
   * > - If **EipModel** is set to **false**, the value of **EipMax** must be **0**.
   * 
   * @example
   * 3
   */
  eipMax?: number;
  /**
   * @remarks
   * Specifies whether public network access is required. Valid values:
   * 
   * - true: Public network access is required.
   * 
   * - false: Public network access is not required.
   * 
   * > If you upgrade a Confluent instance, you do not need to specify this parameter. This parameter is required for subscription instances.
   * 
   * @example
   * true
   */
  eipModel?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_post-cn-mp919o4v****
   */
  instanceId?: string;
  /**
   * @remarks
   * The peak traffic (not recommended).
   * 
   * - The peak traffic that you specify must be greater than or equal to the current peak traffic of the instance.
   * 
   * - You must specify one of peak traffic and traffic specification. If you specify both, the traffic specification takes precedence. Specify only the traffic specification.
   * 
   * - For valid values, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * @example
   * 40
   */
  ioMax?: number;
  /**
   * @remarks
   * The traffic specification (recommended).
   * 
   * - The traffic specification that you specify must be greater than or equal to the current traffic specification of the instance.
   * 
   * - You must specify one of peak traffic and traffic specification. If you specify both, the traffic specification takes precedence. Specify only the traffic specification.
   * 
   * - For valid values, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > If you upgrade a Confluent instance, you do not need to specify this parameter. This parameter is required for subscription instances.
   * 
   * @example
   * alikafka.hw.2xlarge
   */
  ioMaxSpec?: string;
  /**
   * @remarks
   * The billing type. Valid values:
   * 
   * - **0**: subscription.
   * 
   * - **4**: Confluent series subscription.
   * 
   * @example
   * 4
   */
  paidType?: number;
  /**
   * @remarks
   * The number of partitions (recommended).
   * 
   * * You must specify one of the number of partitions and the topic specification. Specify only the number of partitions.
   * 
   * * If you specify both the number of partitions and the topic specification, the system validates whether the number of partitions and the topic specification are equivalent based on the legacy topic sales model. If they are not equivalent, the request fails. If they are equivalent, the purchase is made based on the number of partitions.
   * 
   * * For valid values, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > If you upgrade a Confluent instance, you do not need to specify this parameter. This parameter is required for subscription instances.
   * 
   * @example
   * 50
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
   * The specification type.
   * 
   * Valid values for ApsaraMQ for Kafka instances:
   * 
   * - **normal**: Standard Edition (shared throughput)
   * 
   * - **professional**: Professional Edition (shared throughput)
   * 
   * - **professionalForHighRead**: Professional Edition (shared read)
   * 
   * Valid values for Confluent instances:
   * 
   * - **professional**: Professional Edition.
   * 
   * - **enterprise**: Enterprise Edition.
   * 
   * Downgrading an instance from Professional Edition to Standard Edition is not supported. For more information about the specification types, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * @example
   * professional
   */
  specType?: string;
  /**
   * @remarks
   * The number of topics (not recommended).
   * 
   * - You must specify one of the number of partitions and the topic specification. Specify only the number of partitions.
   * 
   * - If you specify both the number of partitions and the topic specification, the system validates whether the number of partitions and the topic specification are equivalent based on the legacy topic sales model. If they are not equivalent, the request fails. If they are equivalent, the purchase is made based on the number of partitions.
   * 
   * - The default value varies based on the traffic specification. Additional fees are charged if the value exceeds the default value.
   * 
   * - For valid values, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * @example
   * 50
   */
  topicQuota?: number;
  static names(): { [key: string]: string } {
    return {
      confluentConfig: 'ConfluentConfig',
      diskSize: 'DiskSize',
      eipMax: 'EipMax',
      eipModel: 'EipModel',
      instanceId: 'InstanceId',
      ioMax: 'IoMax',
      ioMaxSpec: 'IoMaxSpec',
      paidType: 'PaidType',
      partitionNum: 'PartitionNum',
      regionId: 'RegionId',
      specType: 'SpecType',
      topicQuota: 'TopicQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confluentConfig: UpgradePrePayOrderRequestConfluentConfig,
      diskSize: 'number',
      eipMax: 'number',
      eipModel: 'boolean',
      instanceId: 'string',
      ioMax: 'number',
      ioMaxSpec: 'string',
      paidType: 'number',
      partitionNum: 'number',
      regionId: 'string',
      specType: 'string',
      topicQuota: 'number',
    };
  }

  validate() {
    if(this.confluentConfig && typeof (this.confluentConfig as any).validate === 'function') {
      (this.confluentConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

