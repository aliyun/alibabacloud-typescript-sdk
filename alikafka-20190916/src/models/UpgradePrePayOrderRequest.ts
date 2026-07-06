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
   * The number of CPU cores for the Control Center component.
   * 
   * @example
   * 4
   */
  controlCenterCU?: number;
  /**
   * @remarks
   * The number of replicas for the Control Center component.
   * 
   * @example
   * 1
   */
  controlCenterReplica?: number;
  /**
   * @remarks
   * The disk capacity of the Control Center component, in GB.
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
   * The number of CPU cores for the Kafka REST Proxy component.
   * 
   * @example
   * 4
   */
  kafkaRestProxyCU?: number;
  /**
   * @remarks
   * The number of replicas for the Kafka REST Proxy component.
   * 
   * @example
   * 2
   */
  kafkaRestProxyReplica?: number;
  /**
   * @remarks
   * The disk capacity of the Kafka broker, in GB.
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
   * The number of CPU cores for the ksqlDB component.
   * 
   * @example
   * 4
   */
  ksqlCU?: number;
  ksqlList?: UpgradePrePayOrderRequestConfluentConfigKsqlList[];
  /**
   * @remarks
   * The number of replicas for the ksqlDB component.
   * 
   * @example
   * 2
   */
  ksqlReplica?: number;
  /**
   * @remarks
   * The disk capacity of the ksqlDB component, in GB.
   * 
   * @example
   * 100
   */
  ksqlStorage?: number;
  /**
   * @remarks
   * The number of CPU cores for the Schema Registry component.
   * 
   * @example
   * 1
   */
  schemaRegistryCU?: number;
  /**
   * @remarks
   * The number of replicas for the Schema Registry component.
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
   * The disk capacity of the ZooKeeper component, in GB.
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
   * Configurations for the Confluent components.
   */
  confluentConfig?: UpgradePrePayOrderRequestConfluentConfig;
  /**
   * @remarks
   * The disk capacity.
   * 
   * - The specified disk capacity must be greater than or equal to the current disk capacity of the instance.
   * 
   * - For the valid values, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > This parameter is required for subscription instances but not for Confluent-series instances.
   * 
   * @example
   * 900
   */
  diskSize?: number;
  /**
   * @remarks
   * The maximum Internet traffic bandwidth.
   * 
   * - The specified Internet traffic bandwidth must be greater than or equal to the current Internet traffic bandwidth of the instance.
   * 
   * - For the valid values, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > * If **EipModel** is set to **true**, **EipMax** must be greater than 0.
   * >
   * > * If **EipModel** is set to **false**, **EipMax** must be set to **0**.
   * 
   * @example
   * 3
   */
  eipMax?: number;
  /**
   * @remarks
   * Specifies whether to enable Internet access. Valid values:
   * 
   * - `true`: enables Internet access.
   * 
   * - `false`: disables Internet access.
   * 
   * > This parameter is required for subscription instances but not for Confluent-series instances.
   * 
   * @example
   * true
   */
  eipModel?: boolean;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_post-cn-mp919o4v****
   */
  instanceId?: string;
  /**
   * @remarks
   * The traffic peak (not recommended).
   * 
   * - The specified traffic peak must be greater than or equal to the current traffic peak of the instance.
   * 
   * - You must specify either this parameter or `IoMaxSpec`. If you specify both, `IoMaxSpec` takes precedence. We recommend that you specify only `IoMaxSpec`.
   * 
   * - For the valid values, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * @example
   * 40
   */
  ioMax?: number;
  /**
   * @remarks
   * The traffic specification (recommended).
   * 
   * - The specified traffic specification must be greater than or equal to the current traffic specification of the instance.
   * 
   * - You must specify either this parameter or `IoMax`. If you specify both, this parameter takes precedence. We recommend that you specify only this parameter.
   * 
   * - For the valid values, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > This parameter is required for subscription instances but not for Confluent-series instances.
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
   * 4
   */
  paidType?: number;
  /**
   * @remarks
   * The number of partitions (recommended).
   * 
   * - You must specify either this parameter or `TopicQuota`. We recommend that you specify only this parameter.
   * 
   * - If you specify both `PartitionNum` and `TopicQuota`, the system checks if their values are equivalent under the previous topic pricing model. A mismatch causes the request to fail. If they match, the system uses `PartitionNum` to process the purchase.
   * 
   * - For the valid values, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > This parameter is required for subscription instances but not for Confluent-series instances.
   * 
   * @example
   * 50
   */
  partitionNum?: number;
  /**
   * @remarks
   * The ID of the region where the instance is located.
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
   * - **normal**: Standard Edition (high write)
   * 
   * - **professional**: Professional Edition (high write)
   * 
   * - **professionalForHighRead**: Professional Edition (high read)
   * 
   * Valid values for Confluent instances:
   * 
   * - **professional**: Professional Edition
   * 
   * - **enterprise**: Enterprise Edition
   * 
   * You cannot downgrade an instance from Professional Edition to Standard Edition. For more information about these specification types, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * @example
   * professional
   */
  specType?: string;
  /**
   * @remarks
   * The number of topics (not recommended).
   * 
   * - You must specify either this parameter or `PartitionNum`. We recommend that you specify only `PartitionNum`.
   * 
   * - If you specify both `TopicQuota` and `PartitionNum`, the system checks if their values are equivalent under the previous topic pricing model. A mismatch causes the request to fail. If they match, the system uses `PartitionNum` to process the purchase.
   * 
   * - The default value of this parameter varies based on the traffic specification. You are charged additional fees if the specified value exceeds the default value.
   * 
   * - For the valid values, see [Billing](https://help.aliyun.com/document_detail/84737.html).
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

