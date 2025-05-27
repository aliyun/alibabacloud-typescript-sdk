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

