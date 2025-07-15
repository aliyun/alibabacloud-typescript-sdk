// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePrePayInstanceRequestConfluentConfig extends $dara.Model {
  /**
   * @example
   * 4
   */
  connectCU?: number;
  /**
   * @example
   * 2
   */
  connectReplica?: number;
  /**
   * @example
   * 4
   */
  controlCenterCU?: number;
  /**
   * @example
   * 1
   */
  controlCenterReplica?: number;
  /**
   * @example
   * 300
   */
  controlCenterStorage?: number;
  /**
   * @example
   * 4
   */
  kafkaCU?: number;
  /**
   * @example
   * 3
   */
  kafkaReplica?: number;
  /**
   * @example
   * 4
   */
  kafkaRestProxyCU?: number;
  /**
   * @example
   * 2
   */
  kafkaRestProxyReplica?: number;
  /**
   * @example
   * 800
   */
  kafkaStorage?: number;
  /**
   * @example
   * 4
   */
  ksqlCU?: number;
  /**
   * @example
   * 2
   */
  ksqlReplica?: number;
  /**
   * @example
   * 100
   */
  ksqlStorage?: number;
  /**
   * @example
   * 1
   */
  schemaRegistryCU?: number;
  /**
   * @example
   * 2
   */
  schemaRegistryReplica?: number;
  /**
   * @example
   * 2
   */
  zooKeeperCU?: number;
  /**
   * @example
   * 3
   */
  zooKeeperReplica?: number;
  /**
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrePayInstanceRequestTag extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
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
  confluentConfig?: CreatePrePayInstanceRequestConfluentConfig;
  /**
   * @example
   * 5
   */
  deployType?: number;
  /**
   * @example
   * 500
   */
  diskSize?: number;
  /**
   * @example
   * 1
   */
  diskType?: string;
  /**
   * @example
   * 1
   */
  duration?: number;
  /**
   * @example
   * 3
   */
  eipMax?: number;
  /**
   * @example
   * alikafka.hw.2xlarge
   */
  ioMaxSpec?: string;
  /**
   * @example
   * 1
   */
  paidType?: number;
  /**
   * @example
   * 1000
   */
  partitionNum?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-ac***********7q
   */
  resourceGroupId?: string;
  /**
   * @example
   * professional
   */
  specType?: string;
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

