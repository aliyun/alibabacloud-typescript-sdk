// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceListResponseBodyInstanceListInstanceVOConfluentConfigKsqlListConfluentInstanceComponentResourceVO extends $dara.Model {
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

export class GetInstanceListResponseBodyInstanceListInstanceVOConfluentConfigKsqlList extends $dara.Model {
  confluentInstanceComponentResourceVO?: GetInstanceListResponseBodyInstanceListInstanceVOConfluentConfigKsqlListConfluentInstanceComponentResourceVO[];
  static names(): { [key: string]: string } {
    return {
      confluentInstanceComponentResourceVO: 'ConfluentInstanceComponentResourceVO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confluentInstanceComponentResourceVO: { 'type': 'array', 'itemType': GetInstanceListResponseBodyInstanceListInstanceVOConfluentConfigKsqlListConfluentInstanceComponentResourceVO },
    };
  }

  validate() {
    if(Array.isArray(this.confluentInstanceComponentResourceVO)) {
      $dara.Model.validateArray(this.confluentInstanceComponentResourceVO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceListResponseBodyInstanceListInstanceVOConfluentConfig extends $dara.Model {
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
  ksqlList?: GetInstanceListResponseBodyInstanceListInstanceVOConfluentConfigKsqlList;
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
      ksqlList: GetInstanceListResponseBodyInstanceListInstanceVOConfluentConfigKsqlList,
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
    if(this.ksqlList && typeof (this.ksqlList as any).validate === 'function') {
      (this.ksqlList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceListResponseBodyInstanceListInstanceVOConfluentInstanceComponentsConfluentInstanceComponentVO extends $dara.Model {
  componentType?: string;
  deployModule?: string;
  pubEndpoint?: string;
  vpcEndpoint?: string;
  internalId?: string;
  static names(): { [key: string]: string } {
    return {
      componentType: 'ComponentType',
      deployModule: 'DeployModule',
      pubEndpoint: 'PubEndpoint',
      vpcEndpoint: 'VpcEndpoint',
      internalId: 'internalId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentType: 'string',
      deployModule: 'string',
      pubEndpoint: 'string',
      vpcEndpoint: 'string',
      internalId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceListResponseBodyInstanceListInstanceVOConfluentInstanceComponents extends $dara.Model {
  confluentInstanceComponentVO?: GetInstanceListResponseBodyInstanceListInstanceVOConfluentInstanceComponentsConfluentInstanceComponentVO[];
  static names(): { [key: string]: string } {
    return {
      confluentInstanceComponentVO: 'ConfluentInstanceComponentVO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confluentInstanceComponentVO: { 'type': 'array', 'itemType': GetInstanceListResponseBodyInstanceListInstanceVOConfluentInstanceComponentsConfluentInstanceComponentVO },
    };
  }

  validate() {
    if(Array.isArray(this.confluentInstanceComponentVO)) {
      $dara.Model.validateArray(this.confluentInstanceComponentVO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceListResponseBodyInstanceListInstanceVOTagsTagVO extends $dara.Model {
  key?: string;
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
  allConfig?: string;
  autoCreateGroupEnable?: boolean;
  autoCreateTopicEnable?: boolean;
  backupZoneId?: string;
  confluentConfig?: GetInstanceListResponseBodyInstanceListInstanceVOConfluentConfig;
  confluentInstanceComponents?: GetInstanceListResponseBodyInstanceListInstanceVOConfluentInstanceComponents;
  createTime?: number;
  defaultPartitionNum?: number;
  deployType?: number;
  diskSize?: number;
  diskType?: number;
  domainEndpoint?: string;
  eipMax?: number;
  endPoint?: string;
  expiredTime?: number;
  instanceId?: string;
  ioMax?: number;
  ioMaxRead?: number;
  ioMaxSpec?: string;
  ioMaxWrite?: number;
  kmsKeyId?: string;
  msgRetain?: number;
  name?: string;
  paidType?: number;
  recommendedPartitionCount?: number;
  regionId?: string;
  reservedPublishCapacity?: number;
  reservedSubscribeCapacity?: number;
  resourceGroupId?: string;
  saslDomainEndpoint?: string;
  saslEndPoint?: string;
  scheduledRetirement?: boolean;
  securityGroup?: string;
  series?: string;
  serviceStatus?: number;
  specType?: string;
  sslDomainEndpoint?: string;
  sslEndPoint?: string;
  standardZoneId?: string;
  tags?: GetInstanceListResponseBodyInstanceListInstanceVOTags;
  topicNumLimit?: number;
  upgradeServiceDetailInfo?: GetInstanceListResponseBodyInstanceListInstanceVOUpgradeServiceDetailInfo;
  usedGroupCount?: number;
  usedPartitionCount?: number;
  usedTopicCount?: number;
  vSwitchId?: string;
  vSwitchIds?: GetInstanceListResponseBodyInstanceListInstanceVOVSwitchIds;
  viewInstanceStatusCode?: number;
  vpcId?: string;
  vpcSaslDomainEndpoint?: string;
  vpcSaslEndPoint?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      allConfig: 'AllConfig',
      autoCreateGroupEnable: 'AutoCreateGroupEnable',
      autoCreateTopicEnable: 'AutoCreateTopicEnable',
      backupZoneId: 'BackupZoneId',
      confluentConfig: 'ConfluentConfig',
      confluentInstanceComponents: 'ConfluentInstanceComponents',
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
      scheduledRetirement: 'ScheduledRetirement',
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
      confluentInstanceComponents: GetInstanceListResponseBodyInstanceListInstanceVOConfluentInstanceComponents,
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
      scheduledRetirement: 'boolean',
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
    if(this.confluentInstanceComponents && typeof (this.confluentInstanceComponents as any).validate === 'function') {
      (this.confluentInstanceComponents as any).validate();
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

