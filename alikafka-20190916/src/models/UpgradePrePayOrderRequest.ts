// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradePrePayOrderRequestConfluentConfig extends $dara.Model {
  connectCU?: number;
  connectReplica?: number;
  controlCenterCU?: number;
  controlCenterReplica?: number;
  controlCenterStorage?: number;
  kafkaCU?: number;
  kafkaReplica?: number;
  kafkaRestProxyCU?: number;
  kafkaRestProxyReplica?: number;
  kafkaStorage?: number;
  ksqlCU?: number;
  ksqlReplica?: number;
  ksqlStorage?: number;
  schemaRegistryCU?: number;
  schemaRegistryReplica?: number;
  zooKeeperCU?: number;
  zooKeeperReplica?: number;
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

export class UpgradePrePayOrderRequest extends $dara.Model {
  confluentConfig?: UpgradePrePayOrderRequestConfluentConfig;
  /**
   * @remarks
   * The size of the disk.
   * 
   * *   The disk size that you specify must be greater than or equal to the current disk size of the instance.
   * *   For more information about the valid values, see [Billing overview](https://help.aliyun.com/document_detail/84737.html).
   * 
   * @example
   * 900
   */
  diskSize?: number;
  /**
   * @remarks
   * The Internet traffic for the instance.
   * 
   * *   The Internet traffic volume that you specify must be greater than or equal to the current Internet traffic volume of the instance.
   * *   For more information about the valid values, see [Billing overview](https://help.aliyun.com/document_detail/84737.html).
   * > - If the **EipModel** parameter is set to **true**, set the **EipMax** parameter to a value that is greater than 0.
   * > - If the **EipModel** parameter is set to **false**, set the **EipMax** parameter to **0**.
   * 
   * @example
   * 3
   */
  eipMax?: number;
  /**
   * @remarks
   * Specifies whether to enable Internet access for the instance. Valid values:
   * 
   * *   true: enables Internet access.
   * *   false: disables Internet access.
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
   * The maximum traffic for the instance. We recommend that you do not configure this parameter.
   * 
   * *   The maximum traffic volume that you specify must be greater than or equal to the current maximum traffic volume of the instance.
   * *   You must configure at least one of the IoMax and IoMaxSpec parameters. If you configure both parameters, the value of the IoMaxSpec parameter takes effect. We recommend that you configure only the IoMaxSpec parameter.
   * *   For more information about the valid values, see [Billing overview](https://help.aliyun.com/document_detail/84737.html).
   * 
   * @example
   * 40
   */
  ioMax?: number;
  /**
   * @remarks
   * The traffic specification of the instance. We recommend that you configure this parameter.
   * 
   * *   The traffic specification that you specify must be greater than or equal to the current traffic specification of the instance.
   * *   You must configure at least one of the IoMax and IoMaxSpec parameters. If you configure both parameters, the value of the IoMaxSpec parameter takes effect. We recommend that you configure only the IoMaxSpec parameter.
   * *   For more information about the valid values, see [Billing overview](https://help.aliyun.com/document_detail/84737.html).
   * 
   * @example
   * alikafka.hw.2xlarge
   */
  ioMaxSpec?: string;
  paidType?: number;
  /**
   * @remarks
   * The number of partitions. We recommend that you configure this parameter.
   * 
   * *   You must specify at least one of the PartitionNum and TopicQuota parameters. We recommend that you configure only the PartitionNum parameter.
   * *   If you specify both parameters, the topic-based sales model is used to check whether the PartitionNum value and the TopicQuota value are the same. If they are not the same, a failure response is returned. If they are the same, the order is placed based on the PartitionNum value.
   * *   For more information about the valid values, see [Billing overview](https://help.aliyun.com/document_detail/84737.html).
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
   * The edition of the instance. Valid values:
   * 
   * *   **normal**: Standard Edition (High Write)
   * *   **professional**: Professional Edition (High Write)
   * *   **professionalForHighRead**: Professional Edition (High Read)
   * 
   * You cannot downgrade an instance from the Professional Edition to the Standard Edition. For more information about these instance editions, see [Billing overview](https://help.aliyun.com/document_detail/84737.html).
   * 
   * @example
   * professional
   */
  specType?: string;
  /**
   * @remarks
   * The number of topics. We recommend that you do not configure this parameter.
   * 
   * *   You must specify at least one of the PartitionNum and TopicQuota parameters. We recommend that you configure only the PartitionNum parameter.
   * *   If you specify both parameters, the topic-based sales model is used to check whether the PartitionNum value and the TopicQuota value are the same. If they are not the same, a failure response is returned. If they are the same, the order is placed based on the PartitionNum value.
   * *   The default value of the TopicQuota parameter varies based on the value of the IoMaxSpec parameter. If the number of topics that you consume exceeds the default value, you are charged additional fees.
   * *   For more information about the valid values, see [Billing overview](https://help.aliyun.com/document_detail/84737.html).
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

