// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceListResponseBodyInstanceListInstanceVOConfluentConfig extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores of Connect.
   * 
   * @example
   * 4
   */
  connectCU?: number;
  /**
   * @remarks
   * The number of replicas of Connect.
   * 
   * @example
   * 2
   */
  connectReplica?: number;
  /**
   * @remarks
   * The number of CPU cores of Control Center.
   * 
   * @example
   * 4
   */
  controlCenterCU?: number;
  /**
   * @remarks
   * The number of replicas of Control Center.
   * 
   * @example
   * 1
   */
  controlCenterReplica?: number;
  /**
   * @remarks
   * The disk capacity of Control Center. Unit: GB.
   * 
   * @example
   * 300
   */
  controlCenterStorage?: number;
  /**
   * @remarks
   * The number of CPU cores of the Kafka broker.
   * 
   * @example
   * 4
   */
  kafkaCU?: number;
  /**
   * @remarks
   * The number of replicas of the Kafka broker.
   * 
   * @example
   * 3
   */
  kafkaReplica?: number;
  /**
   * @remarks
   * The number of CPU cores of Kafka Rest Proxy.
   * 
   * @example
   * 4
   */
  kafkaRestProxyCU?: number;
  /**
   * @remarks
   * The number of replicas of Kafka Rest Proxy.
   * 
   * @example
   * 2
   */
  kafkaRestProxyReplica?: number;
  /**
   * @remarks
   * The disk capacity of the Kafka broker. Unit: GB.
   * 
   * @example
   * 800
   */
  kafkaStorage?: number;
  /**
   * @remarks
   * The number of CPU cores of ksqlDB.
   * 
   * @example
   * 2
   */
  ksqlCU?: number;
  /**
   * @remarks
   * The number of replicas of ksqlDB.
   * 
   * @example
   * 2
   */
  ksqlReplica?: number;
  /**
   * @remarks
   * The disk capacity of ksqlDB. Unit: GB.
   * 
   * @example
   * 100
   */
  ksqlStorage?: number;
  /**
   * @remarks
   * The number of CPU cores of Schema Registry.
   * 
   * @example
   * 4
   */
  schemaRegistryCU?: number;
  /**
   * @remarks
   * The number of replicas of Schema Registry.
   * 
   * @example
   * 2
   */
  schemaRegistryReplica?: number;
  /**
   * @remarks
   * The number of CPU cores of ZooKeeper.
   * 
   * @example
   * 2
   */
  zooKeeperCU?: number;
  /**
   * @remarks
   * The number of replicas of ZooKeeper.
   * 
   * @example
   * 3
   */
  zooKeeperReplica?: number;
  /**
   * @remarks
   * The disk capacity of ZooKeeper. Unit: GB.
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

export class GetInstanceListResponseBodyInstanceListInstanceVOTagsTagVO extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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

export class GetInstanceListResponseBodyInstanceListInstanceVOTags extends $dara.Model {
  tagVO?: GetInstanceListResponseBodyInstanceListInstanceVOTagsTagVO[];
  static names(): { [key: string]: string } {
    return {
      tagVO: 'TagVO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagVO: { 'type': 'array', 'itemType': GetInstanceListResponseBodyInstanceListInstanceVOTagsTagVO },
    };
  }

  validate() {
    if(Array.isArray(this.tagVO)) {
      $dara.Model.validateArray(this.tagVO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceListResponseBodyInstanceListInstanceVOUpgradeServiceDetailInfo extends $dara.Model {
  /**
   * @remarks
   * The open source Apache Kafka version that corresponds to the instance.
   * 
   * @example
   * 2.2.0
   */
  current2OpenSourceVersion?: string;
  static names(): { [key: string]: string } {
    return {
      current2OpenSourceVersion: 'Current2OpenSourceVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current2OpenSourceVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceListResponseBodyInstanceListInstanceVOVSwitchIds extends $dara.Model {
  vSwitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      vSwitchIds: 'VSwitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceListResponseBodyInstanceListInstanceVO extends $dara.Model {
  /**
   * @remarks
   * The configurations of the deployed ApsaraMQ for Kafka instance.
   * 
   * @example
   * {\\"enable.vpc_sasl_ssl\\":\\"false\\",\\"kafka.log.retention.hours\\":\\"66\\",\\"enable.acl\\":\\"false\\",\\"kafka.message.max.bytes\\":\\"6291456\\"}
   */
  allConfig?: string;
  /**
   * @remarks
   * Indicates whether the flexible group creation feature is enabled.
   * 
   * @example
   * true
   */
  autoCreateGroupEnable?: boolean;
  /**
   * @remarks
   * Indicates whether the automatic topic creation feature is enabled.
   * 
   * @example
   * true
   */
  autoCreateTopicEnable?: boolean;
  /**
   * @remarks
   * The ID of the secondary zone.
   * 
   * @example
   * cn-hangzhou-a
   */
  backupZoneId?: string;
  /**
   * @remarks
   * The parameters that are returned for the ApsaraMQ for Confluent instance.
   */
  confluentConfig?: GetInstanceListResponseBodyInstanceListInstanceVOConfluentConfig;
  /**
   * @remarks
   * The time when the instance was created. Unit: milliseconds.
   * 
   * @example
   * 1577961819000
   */
  createTime?: number;
  /**
   * @remarks
   * The number of partitions in a topic that is automatically created.
   * 
   * @example
   * 12
   */
  defaultPartitionNum?: number;
  /**
   * @remarks
   * The type of the network in which the instance is deployed. Valid values:
   * 
   * *   **4**: Internet and VPC
   * *   **5**: VPC
   * 
   * @example
   * 5
   */
  deployType?: number;
  /**
   * @remarks
   * The disk size. Unit: GB
   * 
   * @example
   * 3600
   */
  diskSize?: number;
  /**
   * @remarks
   * The disk type of the instance. Valid values:
   * 
   * *   **0**: ultra disk
   * *   **1**: standard SSD
   * 
   * @example
   * 1
   */
  diskType?: number;
  /**
   * @remarks
   * The default endpoint of the instance in domain name mode. ApsaraMQ for Kafka instances support endpoints in domain name mode and IP address mode.
   * 
   * *   Endpoints in domain name mode: An endpoint in this mode consists of the domain name of the instance and a port number. The format of an endpoint in this mode is `{Instance domain name}:{Port number}`.
   * *   Endpoints in IP address mode: An endpoint in this mode consists of the IP address of the broker and a port number. The format of an endpoint in this mode is `{Broker IP address}:{Port number}`.
   * 
   * @example
   * alikafka-pre-cn-zv**********-1-vpc.alikafka.aliyuncs.com:9092,alikafka-pre-cn-zv**********-2-vpc.alikafka.aliyuncs.com:9092,alikafka-pre-cn-zv**********-3-vpc.alikafka.aliyuncs.com:9092
   */
  domainEndpoint?: string;
  /**
   * @remarks
   * The maximum Internet traffic in the instance.
   * 
   * @example
   * 20
   */
  eipMax?: number;
  /**
   * @remarks
   * The default endpoint of the instance in IP address mode. ApsaraMQ for Kafka instances support endpoints in domain name mode and IP address mode.
   * 
   * *   Endpoints in domain name mode: An endpoint in this mode consists of the domain name of the instance and a port number. The format of an endpoint in this mode is `{Instance domain name}:{Port number}`.
   * *   Endpoints in IP address mode: An endpoint in this mode consists of the IP address of the broker and a port number. The format of an endpoint in this mode is `{Broker IP address}:{Port number}`.
   * 
   * @example
   * 192.168.XX.XX:9092,192.168.XX.XX:9092,192.168.XX.XX:9092
   */
  endPoint?: string;
  /**
   * @remarks
   * The time when the instance expires. Unit: milliseconds.
   * 
   * @example
   * 1893581018000
   */
  expiredTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * alikafka_pre-cn-mp919o4v****
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum traffic in the instance.
   * 
   * @example
   * 20
   */
  ioMax?: number;
  /**
   * @remarks
   * The maximum read traffic in the instance. Unit: Mbit/s.
   * 
   * @example
   * 1000
   */
  ioMaxRead?: number;
  /**
   * @remarks
   * The traffic specification.
   * 
   * @example
   * alikafka.hw.2xlarge
   */
  ioMaxSpec?: string;
  /**
   * @remarks
   * The maximum write traffic. Unit: Mbit/s.
   * 
   * @example
   * 1000
   */
  ioMaxWrite?: number;
  /**
   * @remarks
   * The ID of the key that is used for disk encryption in the region where the instance is deployed.
   * 
   * @example
   * 0d24xxxx-da7b-4786-b981-9a164dxxxxxx
   */
  kmsKeyId?: string;
  /**
   * @remarks
   * The retention period of messages in the instance. Unit: hours.
   * 
   * @example
   * 72
   */
  msgRetain?: number;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * alikafka_post-cn-mp91gnw0****
   */
  name?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   **0**: the subscription billing method
   * *   **1**: the pay-as-you-go billing method
   * *   **3**: the pay-as-you-go billing method for serverless ApsaraMQ for Kafka V3 instances
   * *   **4**: the pay-as-you-go billing method for ApsaraMQ for Confluent instances
   * 
   * @example
   * 1
   */
  paidType?: number;
  recommendedPartitionCount?: number;
  /**
   * @remarks
   * The ID of the region where the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The traffic reserved for message publishing. Unit: MB/s.
   * 
   * >  This parameter is returned only if the instance is a serverless ApsaraMQ for Kafka V3 instance.
   * 
   * @example
   * 60
   */
  reservedPublishCapacity?: number;
  /**
   * @remarks
   * The traffic reserved for message subscription. Unit: MB/s.
   * 
   * >  This parameter is returned only if the instance is a serverless ApsaraMQ for Kafka V3 instance.
   * 
   * @example
   * 60
   */
  reservedSubscribeCapacity?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-ac***********7q
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The Simple Authentication and Security Layer (SASL) endpoint of the instance in domain name mode. ApsaraMQ for Kafka instances support endpoints in domain name mode and IP address mode.
   * 
   * *   Endpoints in domain name mode: An endpoint in this mode consists of the domain name of the instance and a port number. The format of an endpoint in this mode is `{Instance domain name}:{Port number}`.
   * *   Endpoints in IP address mode: An endpoint in this mode consists of the IP address of the broker and a port number. The format of an endpoint in this mode is `{Broker IP address}:{Port number}`.
   * 
   * @example
   * alikafka-pre-cn-zv**********-1-vpc.alikafka.aliyuncs.com:9094,alikafka-pre-cn-zv**********-2-vpc.alikafka.aliyuncs.com:9094,alikafka-pre-cn-zv**********-3-vpc.alikafka.aliyuncs.com:9094
   */
  saslDomainEndpoint?: string;
  /**
   * @remarks
   * The Simple Authentication and Security Layer (SASL) endpoint of the instance in IP address mode. ApsaraMQ for Kafka instances support endpoints in domain name mode and IP address mode.
   * 
   * *   Endpoints in domain name mode: An endpoint in this mode consists of the domain name of the instance and a port number. The format of an endpoint in this mode is `{Instance domain name}:{Port number}`.
   * *   Endpoints in IP address mode: An endpoint in this mode consists of the IP address of the broker and a port number. The format of an endpoint in this mode is `{Broker IP address}:{Port number}`.
   * 
   * @example
   * 172.16.3.XX:9094,172.16.3.XX:9094,172.16.3.XX:9094
   */
  saslEndPoint?: string;
  /**
   * @remarks
   * The security group to which the instance belongs.
   * 
   * *   If the instance is deployed in the ApsaraMQ for Kafka console or by calling the [StartInstance](https://help.aliyun.com/document_detail/157786.html) operation without a security group configured, no value is returned.
   * *   If the instance is deployed by calling the [StartInstance](https://help.aliyun.com/document_detail/157786.html) operation with a security group configured, the returned value is the configured security group.
   * 
   * @example
   * sg-bp13wfx7kz9pkow****
   */
  securityGroup?: string;
  /**
   * @remarks
   * The instance version. Valid values: v2, v3, and confluent.
   * 
   * @example
   * v3
   */
  series?: string;
  /**
   * @remarks
   * >  This parameter is out of date. We recommend that you refer to the ViewInstanceStatusCode parameter.
   * 
   * The instance status. Valid values:
   * 
   * *   **0**: pending
   * *   **1**: preparing hardware resources
   * *   **2**: initializing
   * *   **3**: starting
   * *   **5**: running
   * *   **6**: migrating
   * *   **7**: ready for upgrade
   * *   **8**: upgrading
   * *   **9**: ready for change
   * *   **10**: released
   * *   **11**: changing
   * *   **15**: expired
   * *   **30**: scaling
   * 
   * @example
   * 5
   */
  serviceStatus?: number;
  /**
   * @remarks
   * The instance edition. Valid values:
   * 
   * *   **professional**: Professional Edition (High Write)
   * *   **professionalForHighRead**: Professional Edition (High Read)
   * *   **normal**: Standard Edition
   * 
   * @example
   * professional
   */
  specType?: string;
  /**
   * @remarks
   * The SSL endpoint of the instance in domain name mode. ApsaraMQ for Kafka instances support endpoints in domain name mode and IP address mode.
   * 
   * *   Endpoints in domain name mode: An endpoint in this mode consists of the domain name of the instance and a port number. The format of an endpoint in this mode is `{Instance domain name}:{Port number}`.
   * *   Endpoints in IP address mode: An endpoint in this mode consists of the IP address of the broker and a port number. The format of an endpoint in this mode is `{Broker IP address}:{Port number}`.
   * 
   * @example
   * alikafka-pre-cn-zv**********-1.alikafka.aliyuncs.com:9093,alikafka-pre-cn-zv**********-2.alikafka.aliyuncs.com:9093,alikafka-pre-cn-zv**********-3.alikafka.aliyuncs.com:9093
   */
  sslDomainEndpoint?: string;
  /**
   * @remarks
   * The Secure Sockets Layer (SSL) endpoint of the instance in IP address mode. ApsaraMQ for Kafka instances support endpoints in domain name mode and IP address mode.
   * 
   * *   Endpoints in domain name mode: An endpoint in this mode consists of the domain name of the instance and a port number. The format of an endpoint in this mode is `{Instance domain name}:{Port number}`.
   * *   Endpoints in IP address mode: An endpoint in this mode consists of the IP address of the broker and a port number. The format of an endpoint in this mode is `{Broker IP address}:{Port number}`.
   * 
   * @example
   * 192.0.XX.XX:9093,198.51.XX.XX:9093,203.0.XX.XX:9093
   */
  sslEndPoint?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-k
   */
  standardZoneId?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: GetInstanceListResponseBodyInstanceListInstanceVOTags;
  /**
   * @remarks
   * The maximum number of topics on the instance.
   * 
   * @example
   * 180
   */
  topicNumLimit?: number;
  /**
   * @remarks
   * The upgrade information about the instance.
   */
  upgradeServiceDetailInfo?: GetInstanceListResponseBodyInstanceListInstanceVOUpgradeServiceDetailInfo;
  /**
   * @remarks
   * The number of used groups.
   * 
   * @example
   * 10
   */
  usedGroupCount?: number;
  /**
   * @remarks
   * The number of used partitions.
   * 
   * @example
   * 25
   */
  usedPartitionCount?: number;
  /**
   * @remarks
   * The number of used topics.
   * 
   * @example
   * 3
   */
  usedTopicCount?: number;
  /**
   * @remarks
   * The ID of the vSwitch to which the instance belongs.
   * 
   * @example
   * vsw-bp1fvuw0ljd7vzmo3****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The vSwitch IDs.
   */
  vSwitchIds?: GetInstanceListResponseBodyInstanceListInstanceVOVSwitchIds;
  /**
   * @remarks
   * The instance status. The valid values are consistent with the values displayed in the ApsaraMQ for Kafka console. This parameter is used in the new version of ApsaraMQ for Kafka.
   * 
   * Valid values:
   * 
   * *   **0**: pending
   * *   **1**: deploying
   * *   **2**: running
   * *   **3**: stopped
   * *   **4**: expiring
   * *   **5**: expired
   * *   **6**: released
   * *   **7**: upgrading
   * *   **8**: migrating
   * *   **21**: stopping
   * *   **22**: starting
   * *   **23**: releasing
   * *   **30**: auto scaling
   * *   **101**: deployment failed
   * *   **102**: upgrade failed
   * *   **103**: migration failed
   * 
   * @example
   * 2
   */
  viewInstanceStatusCode?: number;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
   * @example
   * vpc-bp1ojac7bv448nifj****
   */
  vpcId?: string;
  /**
   * @remarks
   * The SSL endpoint of the instance in domain name mode. You can use the endpoint to access the instance only in virtual private clouds (VPCs). ApsaraMQ for Kafka instances support endpoints in domain name mode and IP address mode.
   * 
   * *   Endpoints in domain name mode: An endpoint in this mode consists of the domain name of the instance and a port number. The format of an endpoint in this mode is `{Instance domain name}:{Port number}`.
   * *   Endpoints in IP address mode: An endpoint in this mode consists of the IP address of the broker and a port number. The format of an endpoint in this mode is `{Broker IP address}:{Port number}`.
   * 
   * @example
   * alikafka-post-cn-******-1-vpc.alikafka.aliyuncs.com:9095,alikafka-post-cn-******-2-vpc.alikafka.aliyuncs.com:9095,alikafka-post-cn-******-3-vpc.alikafka.aliyuncs.com:9095
   */
  vpcSaslDomainEndpoint?: string;
  /**
   * @remarks
   * The Secure Sockets Layer (SSL) endpoint of the instance in IP address mode. You can use the endpoint to access the instance only in virtual private clouds (VPCs). ApsaraMQ for Kafka instances support endpoints in domain name mode and IP address mode.
   * 
   * *   Endpoints in domain name mode: An endpoint in this mode consists of the domain name of the instance and a port number. The format of an endpoint in this mode is `{Instance domain name}:{Port number}`.
   * *   Endpoints in IP address mode: An endpoint in this mode consists of the IP address of the broker and a port number. The format of an endpoint in this mode is `{Broker IP address}:{Port number}`.
   * 
   * @example
   * 172.16.3.XX:9095,172.16.3.XX:9095,172.16.3.XX:9095
   */
  vpcSaslEndPoint?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * zonei
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      allConfig: 'AllConfig',
      autoCreateGroupEnable: 'AutoCreateGroupEnable',
      autoCreateTopicEnable: 'AutoCreateTopicEnable',
      backupZoneId: 'BackupZoneId',
      confluentConfig: 'ConfluentConfig',
      createTime: 'CreateTime',
      defaultPartitionNum: 'DefaultPartitionNum',
      deployType: 'DeployType',
      diskSize: 'DiskSize',
      diskType: 'DiskType',
      domainEndpoint: 'DomainEndpoint',
      eipMax: 'EipMax',
      endPoint: 'EndPoint',
      expiredTime: 'ExpiredTime',
      instanceId: 'InstanceId',
      ioMax: 'IoMax',
      ioMaxRead: 'IoMaxRead',
      ioMaxSpec: 'IoMaxSpec',
      ioMaxWrite: 'IoMaxWrite',
      kmsKeyId: 'KmsKeyId',
      msgRetain: 'MsgRetain',
      name: 'Name',
      paidType: 'PaidType',
      recommendedPartitionCount: 'RecommendedPartitionCount',
      regionId: 'RegionId',
      reservedPublishCapacity: 'ReservedPublishCapacity',
      reservedSubscribeCapacity: 'ReservedSubscribeCapacity',
      resourceGroupId: 'ResourceGroupId',
      saslDomainEndpoint: 'SaslDomainEndpoint',
      saslEndPoint: 'SaslEndPoint',
      securityGroup: 'SecurityGroup',
      series: 'Series',
      serviceStatus: 'ServiceStatus',
      specType: 'SpecType',
      sslDomainEndpoint: 'SslDomainEndpoint',
      sslEndPoint: 'SslEndPoint',
      standardZoneId: 'StandardZoneId',
      tags: 'Tags',
      topicNumLimit: 'TopicNumLimit',
      upgradeServiceDetailInfo: 'UpgradeServiceDetailInfo',
      usedGroupCount: 'UsedGroupCount',
      usedPartitionCount: 'UsedPartitionCount',
      usedTopicCount: 'UsedTopicCount',
      vSwitchId: 'VSwitchId',
      vSwitchIds: 'VSwitchIds',
      viewInstanceStatusCode: 'ViewInstanceStatusCode',
      vpcId: 'VpcId',
      vpcSaslDomainEndpoint: 'VpcSaslDomainEndpoint',
      vpcSaslEndPoint: 'VpcSaslEndPoint',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allConfig: 'string',
      autoCreateGroupEnable: 'boolean',
      autoCreateTopicEnable: 'boolean',
      backupZoneId: 'string',
      confluentConfig: GetInstanceListResponseBodyInstanceListInstanceVOConfluentConfig,
      createTime: 'number',
      defaultPartitionNum: 'number',
      deployType: 'number',
      diskSize: 'number',
      diskType: 'number',
      domainEndpoint: 'string',
      eipMax: 'number',
      endPoint: 'string',
      expiredTime: 'number',
      instanceId: 'string',
      ioMax: 'number',
      ioMaxRead: 'number',
      ioMaxSpec: 'string',
      ioMaxWrite: 'number',
      kmsKeyId: 'string',
      msgRetain: 'number',
      name: 'string',
      paidType: 'number',
      recommendedPartitionCount: 'number',
      regionId: 'string',
      reservedPublishCapacity: 'number',
      reservedSubscribeCapacity: 'number',
      resourceGroupId: 'string',
      saslDomainEndpoint: 'string',
      saslEndPoint: 'string',
      securityGroup: 'string',
      series: 'string',
      serviceStatus: 'number',
      specType: 'string',
      sslDomainEndpoint: 'string',
      sslEndPoint: 'string',
      standardZoneId: 'string',
      tags: GetInstanceListResponseBodyInstanceListInstanceVOTags,
      topicNumLimit: 'number',
      upgradeServiceDetailInfo: GetInstanceListResponseBodyInstanceListInstanceVOUpgradeServiceDetailInfo,
      usedGroupCount: 'number',
      usedPartitionCount: 'number',
      usedTopicCount: 'number',
      vSwitchId: 'string',
      vSwitchIds: GetInstanceListResponseBodyInstanceListInstanceVOVSwitchIds,
      viewInstanceStatusCode: 'number',
      vpcId: 'string',
      vpcSaslDomainEndpoint: 'string',
      vpcSaslEndPoint: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.confluentConfig && typeof (this.confluentConfig as any).validate === 'function') {
      (this.confluentConfig as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    if(this.upgradeServiceDetailInfo && typeof (this.upgradeServiceDetailInfo as any).validate === 'function') {
      (this.upgradeServiceDetailInfo as any).validate();
    }
    if(this.vSwitchIds && typeof (this.vSwitchIds as any).validate === 'function') {
      (this.vSwitchIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceListResponseBodyInstanceList extends $dara.Model {
  instanceVO?: GetInstanceListResponseBodyInstanceListInstanceVO[];
  static names(): { [key: string]: string } {
    return {
      instanceVO: 'InstanceVO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceVO: { 'type': 'array', 'itemType': GetInstanceListResponseBodyInstanceListInstanceVO },
    };
  }

  validate() {
    if(Array.isArray(this.instanceVO)) {
      $dara.Model.validateArray(this.instanceVO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned. The HTTP status code 200 indicates that the call is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The instances.
   */
  instanceList?: GetInstanceListResponseBodyInstanceList;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * 4B6D821D-7F67-4CAA-9E13-A5A997C3****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceList: 'InstanceList',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      instanceList: GetInstanceListResponseBodyInstanceList,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.instanceList && typeof (this.instanceList as any).validate === 'function') {
      (this.instanceList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

