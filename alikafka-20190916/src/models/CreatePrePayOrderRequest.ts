// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePrePayOrderRequestConfluentConfigKsqlList extends $dara.Model {
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

export class CreatePrePayOrderRequestConfluentConfig extends $dara.Model {
  confluentVersion?: string;
  /**
   * @remarks
   * The number of CPU cores for Connect component.
   * 
   * @example
   * 4
   */
  connectCU?: number;
  /**
   * @remarks
   * The number of replicas for Connect component.
   * 
   * @example
   * 2
   */
  connectReplica?: number;
  /**
   * @remarks
   * The number of CPU cores for ControlCenter component.
   * 
   * @example
   * 4
   */
  controlCenterCU?: number;
  /**
   * @remarks
   * The number of replicas for ControlCenter component.
   * 
   * @example
   * 1
   */
  controlCenterReplica?: number;
  /**
   * @remarks
   * The disk capacity of ControlCenter component. Unit: GB.
   * 
   * @example
   * 300
   */
  controlCenterStorage?: number;
  /**
   * @remarks
   * The number of CPU cores for Kafka broker.
   * 
   * @example
   * 4
   */
  kafkaCU?: number;
  /**
   * @remarks
   * The number of replicas for Kafka broker.
   * 
   * @example
   * 3
   */
  kafkaReplica?: number;
  /**
   * @remarks
   * The number of CPU cores for KafkaRestProxy component.
   * 
   * @example
   * 4
   */
  kafkaRestProxyCU?: number;
  /**
   * @remarks
   * The number of replicas for KafkaRestProxy component.
   * 
   * @example
   * 2
   */
  kafkaRestProxyReplica?: number;
  /**
   * @remarks
   * The disk capacity of Kafka broker. Unit: GB.
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
   * The number of CPU cores for KsqlDB component.
   * 
   * @example
   * 4
   */
  ksqlCU?: number;
  ksqlList?: CreatePrePayOrderRequestConfluentConfigKsqlList[];
  /**
   * @remarks
   * The number of replicas for KsqlDB component.
   * 
   * @example
   * 2
   */
  ksqlReplica?: number;
  /**
   * @remarks
   * The disk capacity of KsqlDB component. Unit: GB.
   * 
   * @example
   * 100
   */
  ksqlStorage?: number;
  /**
   * @remarks
   * The number of CPU cores for SchemaRegistry component.
   * 
   * @example
   * 1
   */
  schemaRegistryCU?: number;
  /**
   * @remarks
   * The number of replicas for SchemaRegistry component.
   * 
   * @example
   * 2
   */
  schemaRegistryReplica?: number;
  /**
   * @remarks
   * The number of CPU cores for ZooKeeper component.
   * 
   * @example
   * 2
   */
  zooKeeperCU?: number;
  /**
   * @remarks
   * The number of replicas for ZooKeeper component.
   * 
   * @example
   * 3
   */
  zooKeeperReplica?: number;
  /**
   * @remarks
   * The disk capacity of ZooKeeper component. Unit: GB.
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
      ksqlList: { 'type': 'array', 'itemType': CreatePrePayOrderRequestConfluentConfigKsqlList },
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

export class CreatePrePayOrderRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * - N ranges from 1 to 20.
   * 
   * - If this parameter is empty, all tag keys are matched.
   * 
   * - The tag key can be up to 128 characters in length and cannot start with aliyun or acs:. It cannot contain http\\:// or https\\://.
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
   * - This parameter can be empty.
   * 
   * - The tag value can be up to 128 characters in length and cannot start with aliyun or acs:. It cannot contain http\\:// or https\\://.
   * 
   * @example
   * FinanceJoshua
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

export class CreatePrePayOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration of Confluent components.
   * 
   * > This parameter is required when you create a Confluent series instance.
   */
  confluentConfig?: CreatePrePayOrderRequestConfluentConfig;
  /**
   * @remarks
   * The deployment type. Valid values:
   * 
   * - **4**: Internet/VPC instance
   * 
   * - **5**: VPC instance
   * 
   * > If you are creating a Confluent series instance, you cannot select the deployment type. You can only set the value to 5. After the purchase, you can adjust whether each component is open to the Internet.
   * 
   * @example
   * 5
   */
  deployType?: number;
  /**
   * @remarks
   * The disk capacity. Unit: GB.
   * 
   * For the valid values, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > If you are creating a Confluent series instance, you do not need to pass this parameter.
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
   * > If you are creating a Confluent series instance, you do not need to pass this parameter.
   * 
   * @example
   * 0
   */
  diskType?: string;
  /**
   * @remarks
   * The subscription duration. Unit: month. Default value: 1. Valid values:
   * 
   * - **Confluent instances: 1 or 12**
   * 
   * - **Kafka instances: 1**
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The Internet traffic.
   * 
   * - If **DeployType** is set to **4**, you must specify this parameter.
   * 
   * - For the valid values, see [pay-as-you-go](https://help.aliyun.com/document_detail/72142.html).
   * 
   * > If you are creating a Confluent series instance, you do not need to pass this parameter.
   * 
   * @example
   * 0
   */
  eipMax?: number;
  /**
   * @remarks
   * The traffic peak (not recommended).
   * 
   * - You must specify either **IoMax** or **IoMaxSpec**. If you specify both parameters, **IoMaxSpec** takes precedence. We recommend that you specify only **IoMaxSpec**.
   * 
   * - For the valid values, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > If you are creating a Confluent series instance, you do not need to pass this parameter.
   * 
   * @example
   * 20
   */
  ioMax?: number;
  /**
   * @remarks
   * The traffic specification (recommended).
   * 
   * - You must specify either **IoMax** or **IoMaxSpec**. If you specify both parameters, **IoMaxSpec** takes precedence. We recommend that you specify only **IoMaxSpec**.
   * 
   * - For the valid values, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > If you are creating a Confluent series instance, you do not need to pass this parameter.
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
   * - **4**: Confluent series subscription
   * 
   * @example
   * 0
   */
  paidType?: number;
  /**
   * @remarks
   * The number of partitions (recommended).
   * 
   * - You must specify either the number of partitions or the topic specification. We recommend that you specify only the number of partitions.
   * 
   * - If you specify both the number of partitions and the topic specification, the system verifies whether the number of partitions is equivalent to the topic specification based on the old topic sales model. If they are not equivalent, the system returns a failure. If they are equivalent, the system makes the purchase based on the number of partitions.
   * 
   * - For the valid values, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > If you are creating a Confluent series instance, you do not need to pass this parameter.
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
   * The resource group ID.
   * 
   * If you do not specify this parameter, the instance is added to the default resource group. You can view the resource group ID in the Resource Group console.
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
   * For more information, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * @example
   * normal
   */
  specType?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: CreatePrePayOrderRequestTag[];
  /**
   * @remarks
   * The number of topics (not recommended).
   * 
   * - You must specify either the number of partitions or the topic specification. We recommend that you specify only the number of partitions.
   * 
   * - If you specify both the number of partitions and the topic specification, the system verifies whether the number of partitions is equivalent to the topic specification based on the old topic sales model. If they are not equivalent, the system returns a failure. If they are equivalent, the system makes the purchase based on the number of partitions.
   * 
   * - The default value varies based on the traffic specification. Additional fees are charged if the value exceeds the default value.
   * 
   * - For the valid values, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > If you are creating a Confluent series instance, you do not need to pass this parameter.
   * 
   * @example
   * 50
   */
  topicQuota?: number;
  static names(): { [key: string]: string } {
    return {
      confluentConfig: 'ConfluentConfig',
      deployType: 'DeployType',
      diskSize: 'DiskSize',
      diskType: 'DiskType',
      duration: 'Duration',
      eipMax: 'EipMax',
      ioMax: 'IoMax',
      ioMaxSpec: 'IoMaxSpec',
      paidType: 'PaidType',
      partitionNum: 'PartitionNum',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      specType: 'SpecType',
      tag: 'Tag',
      topicQuota: 'TopicQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confluentConfig: CreatePrePayOrderRequestConfluentConfig,
      deployType: 'number',
      diskSize: 'number',
      diskType: 'string',
      duration: 'number',
      eipMax: 'number',
      ioMax: 'number',
      ioMaxSpec: 'string',
      paidType: 'number',
      partitionNum: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      specType: 'string',
      tag: { 'type': 'array', 'itemType': CreatePrePayOrderRequestTag },
      topicQuota: 'number',
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

