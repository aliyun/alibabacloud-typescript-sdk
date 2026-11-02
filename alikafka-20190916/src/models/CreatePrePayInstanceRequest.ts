// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePrePayInstanceRequestConfluentConfigKsqlList extends $dara.Model {
  /**
   * @remarks
   * The identifier of the additional ksqlDB instance. It is used to distinguish multiple ksqlDB instances under the same Confluent instance and generate the corresponding service name. Each instance must use a different non-empty identifier, and the original identifier must be retained for subsequent specification changes. Example: 0.
   * 
   * @example
   * 0
   */
  internalId?: string;
  /**
   * @remarks
   * The number of CPU cores per node in the ksqlDB instance. Valid values: 1 to 20.
   * 
   * @example
   * 1
   */
  cu?: number;
  /**
   * @remarks
   * The number of nodes in the ksqlDB instance. Valid values: 1 to 20.
   * 
   * @example
   * 1
   */
  replica?: number;
  /**
   * @remarks
   * The disk capacity per node in the ksqlDB instance. Unit: GB. Valid values: 100 to 30000. The value must be a multiple of 100.
   * 
   * @example
   * 100
   */
  storage?: number;
  /**
   * @remarks
   * The component type. Set the value to KSQLDB. Example: KSQLDB.
   * 
   * @example
   * KSQLDB
   */
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
   * The platform version of the Confluent instance. Valid values: 7.8.2 and 8.2.1. If you select 7.8.2, you must configure ZooKeeper. If you select 8.2.1, you must configure KRaft Controller. You can configure only one of the two metadata components in a single request.
   * 
   * @example
   * 7.8.2
   */
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
   * The disk capacity of the Control Center component. Unit: GB.
   * 
   * @example
   * 300
   */
  controlCenterStorage?: number;
  /**
   * @remarks
   * The number of CPU cores for Kafka brokers.
   * 
   * @example
   * 4
   */
  kafkaCU?: number;
  /**
   * @remarks
   * The number of replicas for Kafka brokers.
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
   * The disk capacity of Kafka brokers. Unit: GB.
   * 
   * @example
   * 800
   */
  kafkaStorage?: number;
  /**
   * @remarks
   * The number of CPU cores per node in the KRaft controller. Valid values: 2 to 20. When you create an instance in KRaft mode, you must configure this parameter together with KraftControllerStorage.
   * 
   * @example
   * 2
   */
  kraftControllerCU?: number;
  /**
   * @remarks
   * The number of nodes in the KRaft controller. The value is fixed to 3. If you configure the KRaft controller but do not specify this parameter, the default value 3 is used.
   * 
   * @example
   * 3
   */
  kraftControllerReplica?: number;
  /**
   * @remarks
   * The disk capacity per node in the KRaft controller. Unit: GB. Valid values: 100 to 30000. The value must be a multiple of 100. When you create an instance in KRaft mode, you must configure this parameter together with KraftControllerCU.
   * 
   * @example
   * 100
   */
  kraftControllerStorage?: number;
  /**
   * @remarks
   * The number of CPU cores for the ksqlDB component.
   * 
   * @example
   * 4
   */
  ksqlCU?: number;
  /**
   * @remarks
   * The list of additional ksqlDB instance configurations, excluding the default ksqlDB instance. Each element configures an independent ksqlDB instance. When you use this parameter, you must also configure KsqlCU, KsqlStorage, and KsqlReplica for the default instance. Each instance in the list is configured with node resources and the number of nodes separately.
   * 
   * Example (list content):
   * ```json
   */
  ksqlList?: CreatePrePayInstanceRequestConfluentConfigKsqlList[];
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
   * The disk capacity of the ksqlDB component. Unit: GB.
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
   * - The tag key can be up to 128 characters in length. It cannot start with aliyun or acs:, and cannot contain http:// or https://.
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
   * - The tag value can be empty.
   * 
   * - The tag value can be up to 128 characters in length. It cannot start with aliyun or acs:, and cannot contain http:// or https://.
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
   * The configurations of Confluent components.
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
   * > If you create a Confluent instance, you cannot select the deployment type. You can only set this parameter to 5. After the purchase, you can configure whether to expose each component to the Internet.
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
   * > If you create a Confluent instance, you do not need to specify this parameter.
   * 
   * @example
   * 500
   */
  diskSize?: number;
  /**
   * @remarks
   * The disk type. Valid values:
   * 
   * - **0**: Ultra disk
   * 
   * - **1**: SSD
   * 
   * > If you create a Confluent instance, you do not need to specify this parameter.
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
   * The Internet traffic bandwidth.
   * 
   * - If **DeployType** is set to **4**, this parameter is required.
   * 
   * - For the valid values, see [pay-as-you-go billing method](https://help.aliyun.com/document_detail/72142.html).
   * 
   * 
   * > If you create a Confluent instance, you do not need to specify this parameter.
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
   * - For the valid values, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * > If you create a Confluent instance, you do not need to specify this parameter.
   * 
   * @example
   * alikafka.hw.2xlarge
   */
  ioMaxSpec?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - **0**: Subscription
   * 
   * - **4**: Subscription for Confluent instances
   * 
   * @example
   * 1
   */
  paidType?: number;
  /**
   * @remarks
   * The number of partitions to purchase.
   * 
   * * For the valid values, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * > If the instance is a Confluent instance, you do not need to specify this parameter.
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
   * If you do not specify this parameter, the instance is added to the default resource group. You can view the resource group ID in the Resource Management console.
   * 
   * @example
   * rg-ac***********7q
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The edition.
   * 
   * Valid values for ApsaraMQ for Kafka instances:
   * 
   * - **normal**: Standard Edition (High Write)
   * 
   * - **professional**: Professional Edition (High Write)
   * 
   * - **professionalForHighRead**: Professional Edition (High Read)
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
   * The list of tags.
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

