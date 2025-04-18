// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class CreateConsumerGroupRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * *   You must specify this parameter.
   * *   The tag key can be up to 128 characters in length and cannot start with acs: or aliyun. It cannot contain `http://` or `https://`.
   * 
   * This parameter is required.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * *   You can leave this parameter empty.
   * *   The tag value can be up to 128 characters in length and cannot start with acs: or aliyun. It cannot contain `http://` or `https://`.
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

export class CreatePostPayInstanceRequestServerlessConfig extends $dara.Model {
  /**
   * @example
   * 60
   */
  reservedPublishCapacity?: number;
  /**
   * @example
   * 50
   */
  reservedSubscribeCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      reservedPublishCapacity: 'ReservedPublishCapacity',
      reservedSubscribeCapacity: 'ReservedSubscribeCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reservedPublishCapacity: 'number',
      reservedSubscribeCapacity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePostPayInstanceRequestTag extends $dara.Model {
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

export class CreatePostPayInstanceShrinkRequestTag extends $dara.Model {
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

export class CreatePostPayInstanceResponseBodyData extends $dara.Model {
  /**
   * @example
   * alikafka_pre-cn-pe333xxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * 236972661580636
   */
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      orderId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePostPayOrderRequestServerlessConfig extends $dara.Model {
  /**
   * @remarks
   * The reserved capacity for publishing messages. You can specify only an integer for this parameter. Minimum value: 60.
   * 
   * >  The actual maximum reserved capacity for publishing messages varies based on available resources in the region. The actual range displayed on the buy page shall prevail.
   * 
   * @example
   * 60
   */
  reservedPublishCapacity?: number;
  /**
   * @remarks
   * The reserved capacity for subscribing to messages. You can specify only an integer for this parameter. Minimum value: 20.
   * 
   * >  The actual maximum reserved capacity for subscribing to messages varies based on available resources in the region. The actual range displayed on the buy page shall prevail.
   * 
   * @example
   * 50
   */
  reservedSubscribeCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      reservedPublishCapacity: 'ReservedPublishCapacity',
      reservedSubscribeCapacity: 'ReservedSubscribeCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reservedPublishCapacity: 'number',
      reservedSubscribeCapacity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePostPayOrderRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N.
   * 
   * *   Valid values of N: 1 to 20.
   * *   If this parameter is left empty, the keys of all tags are matched.
   * *   The tag key must be up to 128 characters in length. It cannot start with acs: or aliyun or contain [http:// or https://.](http://https://。)
   * 
   * This parameter is required.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N.
   * 
   * *   Valid values of N: 1 to 20.
   * *   If you do not specify a tag key, you cannot specify a tag value. If this parameter is not configured, all tag values are matched.
   * *   The tag value must be 1 to 128 characters in length. It cannot start with acs: or aliyun or contain [http:// or https://.](http://https://。)
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

export class CreatePostPayOrderShrinkRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N.
   * 
   * *   Valid values of N: 1 to 20.
   * *   If this parameter is left empty, the keys of all tags are matched.
   * *   The tag key must be up to 128 characters in length. It cannot start with acs: or aliyun or contain [http:// or https://.](http://https://。)
   * 
   * This parameter is required.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N.
   * 
   * *   Valid values of N: 1 to 20.
   * *   If you do not specify a tag key, you cannot specify a tag value. If this parameter is not configured, all tag values are matched.
   * *   The tag value must be 1 to 128 characters in length. It cannot start with acs: or aliyun or contain [http:// or https://.](http://https://。)
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

export class CreatePrePayInstanceShrinkRequestTag extends $dara.Model {
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

export class CreatePrePayInstanceResponseBodyData extends $dara.Model {
  /**
   * @example
   * alikafka_post-cn-xxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * 236972661xxxx
   */
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      orderId: 'number',
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
   * The disk capacity of Control Center. Unit: GB
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
   * The disk capacity of the Kafka broker. Unit: GB
   * 
   * @example
   * 800
   */
  kafkaStorage?: number;
  /**
   * @remarks
   * The number of CPU cores of ksqIDB.
   * 
   * @example
   * 4
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
   * The disk capacity of ksqlDB. Unit: GB
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
   * 1
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
   * The disk capacity of ZooKeeper. Unit: GB
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

export class CreatePrePayOrderRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N.
   * 
   * *   Valid values of N: 1 to 20.
   * *   If this parameter is left empty, the keys of all tags are matched.
   * *   The tag key can be up to 128 characters in length and cannot start with acs: or aliyun or contain [http:// or https://.](http://https://。)
   * 
   * This parameter is required.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N.
   * 
   * *   Valid values of N: 1 to 20.
   * *   This parameter can be left empty.
   * *   The tag value can be 1 to 128 characters in length and cannot start with acs: or aliyun or contain [http:// or https://.](http://https://。)
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

export class CreatePrePayOrderShrinkRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N.
   * 
   * *   Valid values of N: 1 to 20.
   * *   If this parameter is left empty, the keys of all tags are matched.
   * *   The tag key can be up to 128 characters in length and cannot start with acs: or aliyun or contain [http:// or https://.](http://https://。)
   * 
   * This parameter is required.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N.
   * 
   * *   Valid values of N: 1 to 20.
   * *   This parameter can be left empty.
   * *   The tag value can be 1 to 128 characters in length and cannot start with acs: or aliyun or contain [http:// or https://.](http://https://。)
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

export class CreateTopicRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * *   If you do not specify this parameter, the keys of all tags are matched.
   * *   The tag key must be 1 to 128 characters in length and cannot contain `http://` or `https://`. The tag key cannot start with `aliyun` or `acs:`.
   * 
   * This parameter is required.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * *   You can leave this parameter empty.
   * *   The tag value must be 1 to 128 characters in length and cannot contain http:// or https://. The tag value cannot start with aliyun or acs:.
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

export class DescribeAclResourceNameResponseBodyData extends $dara.Model {
  data?: string[];
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAclsResponseBodyKafkaAclListKafkaAclVO extends $dara.Model {
  /**
   * @remarks
   * The types of operations allowed by the ACL. Separate multiple operation types with commas (,).
   * - Valid values:
   * - Write
   * - Read
   * - Describe: reads of transactional IDs.
   * - IdempotentWrite: idempotent data writes to clusters.
   * - IDEMPOTENT_WRITE: idempotent data writes to clusters. This value is available only for ApsaraMQ for Kafka V3 instances.
   * - DESCRIBE_CONFIGS: queries of configurations. This value is available only for ApsaraMQ for Kafka V3 instances.
   * > This parameter is available only for ApsaraMQ for Kafka V3 serverless instances.
   * 
   * @example
   * Write
   */
  aclOperationType?: string;
  /**
   * @remarks
   * The authorization method. Valid values:
   * - DENY
   * - ALLOW
   * > This parameter is available only for ApsaraMQ for Kafka V3 serverless instances.
   * 
   * @example
   * DENY
   */
  aclPermissionType?: string;
  /**
   * @remarks
   * The resource name.
   * 
   * *   The value can be the name of a topic or consumer group.
   * *   You can use the asterisk (\\*) wildcard character to specify the names of all topics or consumer groups.
   * 
   * @example
   * demo
   */
  aclResourceName?: string;
  /**
   * @remarks
   * The matching mode. Valid values:
   * 
   * *   **LITERAL:** full-name match
   * *   **PREFIXED**: prefix match
   * 
   * @example
   * LITERAL
   */
  aclResourcePatternType?: string;
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * *   **Topic**
   * *   **Group**
   * 
   * @example
   * Topic
   */
  aclResourceType?: string;
  /**
   * @remarks
   * The host.
   * 
   * @example
   * ****
   */
  host?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * test12***
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      aclOperationType: 'AclOperationType',
      aclPermissionType: 'AclPermissionType',
      aclResourceName: 'AclResourceName',
      aclResourcePatternType: 'AclResourcePatternType',
      aclResourceType: 'AclResourceType',
      host: 'Host',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclOperationType: 'string',
      aclPermissionType: 'string',
      aclResourceName: 'string',
      aclResourcePatternType: 'string',
      aclResourceType: 'string',
      host: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAclsResponseBodyKafkaAclList extends $dara.Model {
  kafkaAclVO?: DescribeAclsResponseBodyKafkaAclListKafkaAclVO[];
  static names(): { [key: string]: string } {
    return {
      kafkaAclVO: 'KafkaAclVO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kafkaAclVO: { 'type': 'array', 'itemType': DescribeAclsResponseBodyKafkaAclListKafkaAclVO },
    };
  }

  validate() {
    if(Array.isArray(this.kafkaAclVO)) {
      $dara.Model.validateArray(this.kafkaAclVO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSaslUsersResponseBodySaslUserListSaslUserVO extends $dara.Model {
  /**
   * @remarks
   * The encryption method.
   * 
   * >  This parameter is available only for serverless ApsaraMQ for Kafka instances.
   * 
   * @example
   * SCRAM-SHA-256
   */
  mechanism?: string;
  /**
   * @remarks
   * The password.
   * 
   * @example
   * ******
   */
  password?: string;
  /**
   * @remarks
   * The type of the SASL user. Valid values:
   * 
   * *   **plain**: a simple mechanism that uses usernames and passwords to verify user identities. ApsaraMQ for Kafka provides an improved PLAIN mechanism that allows you to dynamically add SASL users without the need to restart an instance.
   * *   **SCRAM**: a mechanism that uses usernames and passwords to verify user identities. Compared with the PLAIN mechanism, this mechanism provides better security protection. ApsaraMQ for Kafka uses the SCRAM-SHA-256 algorithm.
   * *   **LDAP**: This value is available only for the SASL users of ApsaraMQ for Confluent instances.
   * 
   * Default value: **plain**.
   * 
   * @example
   * scram
   */
  type?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * test12***
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      mechanism: 'Mechanism',
      password: 'Password',
      type: 'Type',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mechanism: 'string',
      password: 'string',
      type: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSaslUsersResponseBodySaslUserList extends $dara.Model {
  saslUserVO?: DescribeSaslUsersResponseBodySaslUserListSaslUserVO[];
  static names(): { [key: string]: string } {
    return {
      saslUserVO: 'SaslUserVO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      saslUserVO: { 'type': 'array', 'itemType': DescribeSaslUsersResponseBodySaslUserListSaslUserVO },
    };
  }

  validate() {
    if(Array.isArray(this.saslUserVO)) {
      $dara.Model.validateArray(this.saslUserVO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllowedIpListResponseBodyAllowedListInternetList extends $dara.Model {
  /**
   * @remarks
   * The group to which the IP address whitelist belongs.
   */
  allowedIpGroup?: { [key: string]: string };
  /**
   * @remarks
   * The information about the IP address whitelist.
   */
  allowedIpList?: string[];
  blackIPList?: string[];
  blackIPMap?: { [key: string]: string };
  /**
   * @remarks
   * The port range. Valid value:
   * 
   * **9093/9093**.
   * 
   * @example
   * 9093/9093
   */
  portRange?: string;
  securityGroupId?: string;
  userDefinedSharedSecurityGroup?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowedIpGroup: 'AllowedIpGroup',
      allowedIpList: 'AllowedIpList',
      blackIPList: 'BlackIPList',
      blackIPMap: 'BlackIPMap',
      portRange: 'PortRange',
      securityGroupId: 'SecurityGroupId',
      userDefinedSharedSecurityGroup: 'UserDefinedSharedSecurityGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedIpGroup: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      allowedIpList: { 'type': 'array', 'itemType': 'string' },
      blackIPList: { 'type': 'array', 'itemType': 'string' },
      blackIPMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      portRange: 'string',
      securityGroupId: 'string',
      userDefinedSharedSecurityGroup: 'boolean',
    };
  }

  validate() {
    if(this.allowedIpGroup) {
      $dara.Model.validateMap(this.allowedIpGroup);
    }
    if(Array.isArray(this.allowedIpList)) {
      $dara.Model.validateArray(this.allowedIpList);
    }
    if(Array.isArray(this.blackIPList)) {
      $dara.Model.validateArray(this.blackIPList);
    }
    if(this.blackIPMap) {
      $dara.Model.validateMap(this.blackIPMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllowedIpListResponseBodyAllowedListVpcList extends $dara.Model {
  /**
   * @remarks
   * The group to which the IP address whitelist belongs.
   */
  allowedIpGroup?: { [key: string]: string };
  /**
   * @remarks
   * The information about the IP address whitelist.
   */
  allowedIpList?: string[];
  blackIPList?: string[];
  blackIPMap?: { [key: string]: string };
  /**
   * @remarks
   * The port range. Valid value:
   * 
   * **9092/9092**.
   * 
   * @example
   * 9092/9092
   */
  portRange?: string;
  securityGroupId?: string;
  userDefinedSharedSecurityGroup?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowedIpGroup: 'AllowedIpGroup',
      allowedIpList: 'AllowedIpList',
      blackIPList: 'BlackIPList',
      blackIPMap: 'BlackIPMap',
      portRange: 'PortRange',
      securityGroupId: 'SecurityGroupId',
      userDefinedSharedSecurityGroup: 'UserDefinedSharedSecurityGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedIpGroup: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      allowedIpList: { 'type': 'array', 'itemType': 'string' },
      blackIPList: { 'type': 'array', 'itemType': 'string' },
      blackIPMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      portRange: 'string',
      securityGroupId: 'string',
      userDefinedSharedSecurityGroup: 'boolean',
    };
  }

  validate() {
    if(this.allowedIpGroup) {
      $dara.Model.validateMap(this.allowedIpGroup);
    }
    if(Array.isArray(this.allowedIpList)) {
      $dara.Model.validateArray(this.allowedIpList);
    }
    if(Array.isArray(this.blackIPList)) {
      $dara.Model.validateArray(this.blackIPList);
    }
    if(this.blackIPMap) {
      $dara.Model.validateMap(this.blackIPMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllowedIpListResponseBodyAllowedList extends $dara.Model {
  /**
   * @remarks
   * The deployment mode of the instance. Valid values:
   * 
   * *   **4**: allows access from the Internet and a virtual private cloud (VPC).
   * *   **5**: allows access from a VPC.
   * 
   * >  Only integrators need to concern themselves with the value of this parameter.
   * 
   * @example
   * 4
   */
  deployType?: number;
  /**
   * @remarks
   * The whitelist for access from the Internet.
   */
  internetList?: GetAllowedIpListResponseBodyAllowedListInternetList[];
  /**
   * @remarks
   * The whitelist for access from a virtual private cloud (VPC).
   */
  vpcList?: GetAllowedIpListResponseBodyAllowedListVpcList[];
  static names(): { [key: string]: string } {
    return {
      deployType: 'DeployType',
      internetList: 'InternetList',
      vpcList: 'VpcList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployType: 'number',
      internetList: { 'type': 'array', 'itemType': GetAllowedIpListResponseBodyAllowedListInternetList },
      vpcList: { 'type': 'array', 'itemType': GetAllowedIpListResponseBodyAllowedListVpcList },
    };
  }

  validate() {
    if(Array.isArray(this.internetList)) {
      $dara.Model.validateArray(this.internetList);
    }
    if(Array.isArray(this.vpcList)) {
      $dara.Model.validateArray(this.vpcList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoScalingConfigurationResponseBodyDataScheduledScalingRulesScheduledScalingRulesWeeklyTypes extends $dara.Model {
  weeklyTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      weeklyTypes: 'WeeklyTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      weeklyTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.weeklyTypes)) {
      $dara.Model.validateArray(this.weeklyTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoScalingConfigurationResponseBodyDataScheduledScalingRulesScheduledScalingRules extends $dara.Model {
  /**
   * @remarks
   * The duration of a scheduled scaling task. Unit: minutes.
   * 
   * @example
   * 60
   */
  durationMinutes?: number;
  /**
   * @remarks
   * Indicates whether the scheduled scaling rule is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The estimated scale-in duration. Unit: seconds.
   * 
   * @example
   * 780
   */
  estimatedElasticScalingDownTimeSecs?: number;
  /**
   * @remarks
   * The estimated scale-out duration. Unit: seconds.
   * 
   * @example
   * 780
   */
  estimatedElasticScalingUpTimeSecs?: number;
  /**
   * @remarks
   * The timestamp that indicates the start time of the scheduled scaling task.
   * 
   * @example
   * 1714467540000
   */
  firstScheduledTime?: number;
  /**
   * @remarks
   * The frequency at which the scheduled scaling task is executed. This parameter is returned only if ScheduleType is set to repeat. Valid values:
   * 
   * *   Daily: The scheduled scaling task is executed every day.
   * 
   * *   Weekly: The scheduled scaling task is executed every week.
   * 
   * @example
   * Weekly
   */
  repeatType?: string;
  /**
   * @remarks
   * The reserved production capacity for scheduled scaling. Unit: MB/s.
   * 
   * @example
   * 120
   */
  reservedPubFlow?: number;
  /**
   * @remarks
   * The reserved consumption capacity for scheduled scaling. Unit: MB/s.
   * 
   * @example
   * 120
   */
  reservedSubFlow?: number;
  /**
   * @remarks
   * The ID of the scheduled scaling rule.
   * 
   * @example
   * 64
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the scheduled scaling rule.
   * 
   * @example
   * test
   */
  ruleName?: string;
  /**
   * @remarks
   * The type of the scheduled scaling task. Valid values:
   * 
   * *   at: The scheduled scaling task is executed only once.
   * *   repeat: The scheduled scaling task is repeatedly executed.
   * 
   * @example
   * at
   */
  scheduleType?: string;
  /**
   * @remarks
   * The time zone in Coordinated Universal Time (UTC).
   * 
   * @example
   * GMT+8
   */
  timeZone?: string;
  /**
   * @remarks
   * The day on which the scheduled scaling task is repeatedly executed. You can specify multiple days for this parameter.
   */
  weeklyTypes?: GetAutoScalingConfigurationResponseBodyDataScheduledScalingRulesScheduledScalingRulesWeeklyTypes;
  static names(): { [key: string]: string } {
    return {
      durationMinutes: 'DurationMinutes',
      enable: 'Enable',
      estimatedElasticScalingDownTimeSecs: 'EstimatedElasticScalingDownTimeSecs',
      estimatedElasticScalingUpTimeSecs: 'EstimatedElasticScalingUpTimeSecs',
      firstScheduledTime: 'FirstScheduledTime',
      repeatType: 'RepeatType',
      reservedPubFlow: 'ReservedPubFlow',
      reservedSubFlow: 'ReservedSubFlow',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      scheduleType: 'ScheduleType',
      timeZone: 'TimeZone',
      weeklyTypes: 'WeeklyTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationMinutes: 'number',
      enable: 'boolean',
      estimatedElasticScalingDownTimeSecs: 'number',
      estimatedElasticScalingUpTimeSecs: 'number',
      firstScheduledTime: 'number',
      repeatType: 'string',
      reservedPubFlow: 'number',
      reservedSubFlow: 'number',
      ruleId: 'number',
      ruleName: 'string',
      scheduleType: 'string',
      timeZone: 'string',
      weeklyTypes: GetAutoScalingConfigurationResponseBodyDataScheduledScalingRulesScheduledScalingRulesWeeklyTypes,
    };
  }

  validate() {
    if(this.weeklyTypes && typeof (this.weeklyTypes as any).validate === 'function') {
      (this.weeklyTypes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoScalingConfigurationResponseBodyDataScheduledScalingRules extends $dara.Model {
  scheduledScalingRules?: GetAutoScalingConfigurationResponseBodyDataScheduledScalingRulesScheduledScalingRules[];
  static names(): { [key: string]: string } {
    return {
      scheduledScalingRules: 'ScheduledScalingRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheduledScalingRules: { 'type': 'array', 'itemType': GetAutoScalingConfigurationResponseBodyDataScheduledScalingRulesScheduledScalingRules },
    };
  }

  validate() {
    if(Array.isArray(this.scheduledScalingRules)) {
      $dara.Model.validateArray(this.scheduledScalingRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoScalingConfigurationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The scheduled scaling rules.
   */
  scheduledScalingRules?: GetAutoScalingConfigurationResponseBodyDataScheduledScalingRules;
  static names(): { [key: string]: string } {
    return {
      scheduledScalingRules: 'ScheduledScalingRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheduledScalingRules: GetAutoScalingConfigurationResponseBodyDataScheduledScalingRules,
    };
  }

  validate() {
    if(this.scheduledScalingRules && typeof (this.scheduledScalingRules as any).validate === 'function') {
      (this.scheduledScalingRules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerListResponseBodyConsumerListConsumerVOTagsTagVO extends $dara.Model {
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

export class GetConsumerListResponseBodyConsumerListConsumerVOTags extends $dara.Model {
  tagVO?: GetConsumerListResponseBodyConsumerListConsumerVOTagsTagVO[];
  static names(): { [key: string]: string } {
    return {
      tagVO: 'TagVO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagVO: { 'type': 'array', 'itemType': GetConsumerListResponseBodyConsumerListConsumerVOTagsTagVO },
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

export class GetConsumerListResponseBodyConsumerListConsumerVO extends $dara.Model {
  /**
   * @remarks
   * Indicates that the consumer group was automatically created by the system.
   * 
   * @example
   * false
   */
  automaticallyCreatedGroup?: boolean;
  /**
   * @remarks
   * The consumer group ID.
   * 
   * @example
   * kafka-test
   */
  consumerId?: string;
  /**
   * @remarks
   * The timestamp that indicates when the consumer group was created. Unit: milliseconds.
   * 
   * @example
   * 1729736584002
   */
  createTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * alikafka_post-cn-v0h18sav****
   */
  instanceId?: string;
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
   * The instance description.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: GetConsumerListResponseBodyConsumerListConsumerVOTags;
  static names(): { [key: string]: string } {
    return {
      automaticallyCreatedGroup: 'AutomaticallyCreatedGroup',
      consumerId: 'ConsumerId',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      remark: 'Remark',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      automaticallyCreatedGroup: 'boolean',
      consumerId: 'string',
      createTime: 'number',
      instanceId: 'string',
      regionId: 'string',
      remark: 'string',
      tags: GetConsumerListResponseBodyConsumerListConsumerVOTags,
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerListResponseBodyConsumerList extends $dara.Model {
  consumerVO?: GetConsumerListResponseBodyConsumerListConsumerVO[];
  static names(): { [key: string]: string } {
    return {
      consumerVO: 'ConsumerVO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerVO: { 'type': 'array', 'itemType': GetConsumerListResponseBodyConsumerListConsumerVO },
    };
  }

  validate() {
    if(Array.isArray(this.consumerVO)) {
      $dara.Model.validateArray(this.consumerVO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerProgressResponseBodyConsumerProgressRebalanceInfoListRebalanceInfoList extends $dara.Model {
  /**
   * @remarks
   * The number of rebalances.
   * 
   * @example
   * 100
   */
  generation?: number;
  /**
   * @remarks
   * The group ID of the subscriber.
   * 
   * @example
   * falcon-uat
   */
  groupId?: string;
  /**
   * @remarks
   * The time when the last rebalance occurred. Unit: milliseconds.
   * 
   * @example
   * 1709199270
   */
  lastRebalanceTimestamp?: number;
  /**
   * @remarks
   * The cause of the rebalance.
   * 
   * @example
   * removing member consumer-1-cd14eb9c-379b-4b8e-9bbd-76f147f8536f on LeaveGroup
   */
  reason?: string;
  /**
   * @remarks
   * Indicates whether new members are added to the consumer group in the rebalance.
   * 
   * @example
   * true
   */
  rebalanceSuccess?: boolean;
  /**
   * @remarks
   * The duration of the rebalance. Unit: milliseconds.
   * 
   * @example
   * 1
   */
  rebalanceTimeConsuming?: number;
  static names(): { [key: string]: string } {
    return {
      generation: 'Generation',
      groupId: 'GroupId',
      lastRebalanceTimestamp: 'LastRebalanceTimestamp',
      reason: 'Reason',
      rebalanceSuccess: 'RebalanceSuccess',
      rebalanceTimeConsuming: 'RebalanceTimeConsuming',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generation: 'number',
      groupId: 'string',
      lastRebalanceTimestamp: 'number',
      reason: 'string',
      rebalanceSuccess: 'boolean',
      rebalanceTimeConsuming: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerProgressResponseBodyConsumerProgressRebalanceInfoList extends $dara.Model {
  rebalanceInfoList?: GetConsumerProgressResponseBodyConsumerProgressRebalanceInfoListRebalanceInfoList[];
  static names(): { [key: string]: string } {
    return {
      rebalanceInfoList: 'RebalanceInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rebalanceInfoList: { 'type': 'array', 'itemType': GetConsumerProgressResponseBodyConsumerProgressRebalanceInfoListRebalanceInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.rebalanceInfoList)) {
      $dara.Model.validateArray(this.rebalanceInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerProgressResponseBodyConsumerProgressTopicListTopicListOffsetListOffsetList extends $dara.Model {
  /**
   * @remarks
   * The latest offset in the partition of the topic.
   * 
   * @example
   * 9
   */
  brokerOffset?: number;
  /**
   * @remarks
   * Client ID of the application.
   * 
   * @example
   * client-id-KafkaConsumerDemo
   */
  clientId?: string;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 172.16.11.3
   */
  clientIp?: string;
  /**
   * @remarks
   * The consumer offset in the partition of the topic.
   * 
   * @example
   * 9
   */
  consumerOffset?: number;
  /**
   * @remarks
   * The time when the last consumed message in the partition was generated.
   * 
   * @example
   * 1566874931649
   */
  lastTimestamp?: number;
  /**
   * @remarks
   * Member ID.
   * 
   * @example
   * client-id-KafkaConsumerDemo-70b64883-a911-4882-8084-598b958848b4
   */
  memberId?: string;
  /**
   * @remarks
   * The partition ID.
   * 
   * @example
   * 0
   */
  partition?: number;
  static names(): { [key: string]: string } {
    return {
      brokerOffset: 'BrokerOffset',
      clientId: 'ClientId',
      clientIp: 'ClientIp',
      consumerOffset: 'ConsumerOffset',
      lastTimestamp: 'LastTimestamp',
      memberId: 'MemberId',
      partition: 'Partition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brokerOffset: 'number',
      clientId: 'string',
      clientIp: 'string',
      consumerOffset: 'number',
      lastTimestamp: 'number',
      memberId: 'string',
      partition: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerProgressResponseBodyConsumerProgressTopicListTopicListOffsetList extends $dara.Model {
  offsetList?: GetConsumerProgressResponseBodyConsumerProgressTopicListTopicListOffsetListOffsetList[];
  static names(): { [key: string]: string } {
    return {
      offsetList: 'OffsetList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offsetList: { 'type': 'array', 'itemType': GetConsumerProgressResponseBodyConsumerProgressTopicListTopicListOffsetListOffsetList },
    };
  }

  validate() {
    if(Array.isArray(this.offsetList)) {
      $dara.Model.validateArray(this.offsetList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerProgressResponseBodyConsumerProgressTopicListTopicList extends $dara.Model {
  /**
   * @remarks
   * The time when the last consumed message in the topic was generated.
   * 
   * @example
   * 1566874931649
   */
  lastTimestamp?: number;
  /**
   * @remarks
   * The consumer offsets.
   */
  offsetList?: GetConsumerProgressResponseBodyConsumerProgressTopicListTopicListOffsetList;
  /**
   * @remarks
   * The topic name.
   * 
   * @example
   * kafka-test
   */
  topic?: string;
  /**
   * @remarks
   * The number of unconsumed messages in the topic to which the consumer group subscribes.
   * 
   * @example
   * 0
   */
  totalDiff?: number;
  static names(): { [key: string]: string } {
    return {
      lastTimestamp: 'LastTimestamp',
      offsetList: 'OffsetList',
      topic: 'Topic',
      totalDiff: 'TotalDiff',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastTimestamp: 'number',
      offsetList: GetConsumerProgressResponseBodyConsumerProgressTopicListTopicListOffsetList,
      topic: 'string',
      totalDiff: 'number',
    };
  }

  validate() {
    if(this.offsetList && typeof (this.offsetList as any).validate === 'function') {
      (this.offsetList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerProgressResponseBodyConsumerProgressTopicList extends $dara.Model {
  topicList?: GetConsumerProgressResponseBodyConsumerProgressTopicListTopicList[];
  static names(): { [key: string]: string } {
    return {
      topicList: 'TopicList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topicList: { 'type': 'array', 'itemType': GetConsumerProgressResponseBodyConsumerProgressTopicListTopicList },
    };
  }

  validate() {
    if(Array.isArray(this.topicList)) {
      $dara.Model.validateArray(this.topicList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerProgressResponseBodyConsumerProgress extends $dara.Model {
  /**
   * @remarks
   * The time when the last message consumed by the consumer group was generated.
   * 
   * @example
   * 1566874931671
   */
  lastTimestamp?: number;
  /**
   * @remarks
   * The details of rebalances in the consumer group.
   */
  rebalanceInfoList?: GetConsumerProgressResponseBodyConsumerProgressRebalanceInfoList;
  /**
   * @remarks
   * The consumer progress of each topic to which the consumer group subscribes.
   */
  topicList?: GetConsumerProgressResponseBodyConsumerProgressTopicList;
  /**
   * @remarks
   * The total number of unconsumed messages in all topics to which the consumer group subscribes.
   * 
   * @example
   * 0
   */
  totalDiff?: number;
  static names(): { [key: string]: string } {
    return {
      lastTimestamp: 'LastTimestamp',
      rebalanceInfoList: 'RebalanceInfoList',
      topicList: 'TopicList',
      totalDiff: 'TotalDiff',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastTimestamp: 'number',
      rebalanceInfoList: GetConsumerProgressResponseBodyConsumerProgressRebalanceInfoList,
      topicList: GetConsumerProgressResponseBodyConsumerProgressTopicList,
      totalDiff: 'number',
    };
  }

  validate() {
    if(this.rebalanceInfoList && typeof (this.rebalanceInfoList as any).validate === 'function') {
      (this.rebalanceInfoList as any).validate();
    }
    if(this.topicList && typeof (this.topicList as any).validate === 'function') {
      (this.topicList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceListRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * *   If you leave this parameter empty, the keys of all tags are matched.
   * *   The tag key can be up to 128 characters in length. It cannot start with aliyun or acs: and cannot contain `http://` or `https://`.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * *   If you leave Key empty, you must also leave this parameter empty. If you leave this parameter empty, the values of all tags are matched.
   * *   The tag value can be up to 128 characters in length. It cannot start with aliyun or acs: and cannot contain `http://` or `https://`.
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

export class GetKafkaClientIpResponseBodyDataDataDataDataData extends $dara.Model {
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 58.210.117.154
   */
  ip?: string;
  /**
   * @remarks
   * The statistics.
   * 
   * >  The value of this parameter indicates the number of connections on different ports of the IP address within the specified period of time.
   * 
   * @example
   * 3
   */
  num?: number;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      num: 'Num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      num: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKafkaClientIpResponseBodyDataDataDataData extends $dara.Model {
  data?: GetKafkaClientIpResponseBodyDataDataDataDataData[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetKafkaClientIpResponseBodyDataDataDataDataData },
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKafkaClientIpResponseBodyDataDataData extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: GetKafkaClientIpResponseBodyDataDataDataData;
  /**
   * @remarks
   * The request name.
   * 
   * >  The value of this parameter indicates the type of request that the client sends to the broker within the specified period of time.
   * 
   * @example
   * OFFSET_COMMIT
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetKafkaClientIpResponseBodyDataDataDataData,
      name: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKafkaClientIpResponseBodyDataData extends $dara.Model {
  data?: GetKafkaClientIpResponseBodyDataDataData[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetKafkaClientIpResponseBodyDataDataData },
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKafkaClientIpResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The value true indicates that the broker is not of the latest minor version.
   * 
   * >  If the broker is not of the latest minor version, the sampled logs may not be accurate. This may cause inaccurate IP information. Therefore, we recommend that you update your broker to the latest version at the earliest opportunity.
   * 
   * @example
   * true
   */
  alert?: boolean;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetKafkaClientIpResponseBodyDataData;
  /**
   * @remarks
   * The end of the date range within which data is queried.
   * 
   * @example
   * 1716343502000
   */
  endDate?: number;
  /**
   * @remarks
   * The time range within which the client IP addresses are queried.
   * 
   * >  The valid value is 1 hour. If the beginning of the time range to query and the end of the time range to query exceeds 1 hour, only data within 1 hour is returned.
   * 
   * @example
   * 1
   */
  searchTimeRange?: number;
  /**
   * @remarks
   * The beginning of the date range within which data is queried.
   * 
   * @example
   * 1716343501000
   */
  startDate?: number;
  /**
   * @remarks
   * The date range within which the client IP addresses are queried.
   * 
   * >  The valid value is 7 days. If the beginning of the date range to query and the end of the date range to query exceeds 7 days, only data within 7 days is returned.
   * 
   * @example
   * 7
   */
  timeLimitDay?: number;
  static names(): { [key: string]: string } {
    return {
      alert: 'Alert',
      data: 'Data',
      endDate: 'EndDate',
      searchTimeRange: 'SearchTimeRange',
      startDate: 'StartDate',
      timeLimitDay: 'TimeLimitDay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alert: 'boolean',
      data: GetKafkaClientIpResponseBodyDataData,
      endDate: 'number',
      searchTimeRange: 'number',
      startDate: 'number',
      timeLimitDay: 'number',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaTipResponseBodyQuotaData extends $dara.Model {
  /**
   * @remarks
   * The number of available groups.
   * 
   * @example
   * 50
   */
  groupLeft?: number;
  /**
   * @remarks
   * The number of used groups.
   * 
   * @example
   * 50
   */
  groupUsed?: number;
  /**
   * @remarks
   * The method that you use to purchase partitions. Valid values:
   * 
   * *   0: indicates that the instance is purchased based on topics.
   * *   1: indicates that the instance is purchased based on partitions.
   * 
   * @example
   * 1
   */
  isPartitionBuy?: number;
  /**
   * @remarks
   * The number of available partitions.
   * 
   * @example
   * 1050
   */
  partitionLeft?: number;
  /**
   * @remarks
   * The number of purchased partitions.
   * 
   * @example
   * 100
   */
  partitionNumOfBuy?: number;
  /**
   * @remarks
   * The quota of partitions.
   * 
   * @example
   * 1100
   */
  partitionQuota?: number;
  /**
   * @remarks
   * The number of used partitions.
   * 
   * @example
   * 50
   */
  partitionUsed?: number;
  /**
   * @remarks
   * The number of available topics.
   * 
   * @example
   * 20
   */
  topicLeft?: number;
  /**
   * @remarks
   * The number of purchased topics.
   * 
   * @example
   * 50
   */
  topicNumOfBuy?: number;
  /**
   * @remarks
   * The quota of topics.
   * 
   * @example
   * 50
   */
  topicQuota?: number;
  /**
   * @remarks
   * The number of used topics.
   * 
   * @example
   * 30
   */
  topicUsed?: number;
  static names(): { [key: string]: string } {
    return {
      groupLeft: 'GroupLeft',
      groupUsed: 'GroupUsed',
      isPartitionBuy: 'IsPartitionBuy',
      partitionLeft: 'PartitionLeft',
      partitionNumOfBuy: 'PartitionNumOfBuy',
      partitionQuota: 'PartitionQuota',
      partitionUsed: 'PartitionUsed',
      topicLeft: 'TopicLeft',
      topicNumOfBuy: 'TopicNumOfBuy',
      topicQuota: 'TopicQuota',
      topicUsed: 'TopicUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupLeft: 'number',
      groupUsed: 'number',
      isPartitionBuy: 'number',
      partitionLeft: 'number',
      partitionNumOfBuy: 'number',
      partitionQuota: 'number',
      partitionUsed: 'number',
      topicLeft: 'number',
      topicNumOfBuy: 'number',
      topicQuota: 'number',
      topicUsed: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicListResponseBodyTopicListTopicVOTagsTagVO extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * Test
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * Test
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

export class GetTopicListResponseBodyTopicListTopicVOTags extends $dara.Model {
  tagVO?: GetTopicListResponseBodyTopicListTopicVOTagsTagVO[];
  static names(): { [key: string]: string } {
    return {
      tagVO: 'TagVO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagVO: { 'type': 'array', 'itemType': GetTopicListResponseBodyTopicListTopicVOTagsTagVO },
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

export class GetTopicListResponseBodyTopicListTopicVO extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the topic was automatically created.
   * 
   * @example
   * false
   */
  autoCreate?: boolean;
  /**
   * @remarks
   * The log cleanup policy for the topic. This parameter is returned only if **LocalTopic** is set to **true**. Valid values:
   * 
   * *   false: the default log cleanup policy.
   * *   true: the Apache Kafka log compaction policy.
   * 
   * @example
   * false
   */
  compactTopic?: boolean;
  /**
   * @remarks
   * The timestamp that indicates when the topic was created. Unit: milliseconds.
   * 
   * @example
   * 1576563109000
   */
  createTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * alikafka_pre-cn-0pp1954n****
   */
  instanceId?: string;
  /**
   * @remarks
   * The storage type that is used for the topic. Valid values:
   * 
   * *   false: cloud storage
   * *   true: local storage
   * 
   * @example
   * false
   */
  localTopic?: boolean;
  /**
   * @remarks
   * The number of partitions in the topic.
   * 
   * @example
   * 6
   */
  partitionNum?: number;
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
   * The topic description. Valid values:
   * 
   * *   The description can contain only letters, digits, hyphens (-), and underscores (_).
   * *   The description must be 3 to 64 characters in length.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The topic status. Valid value:
   * 
   * **0**: running.
   * 
   * If the topic is deleted, this parameter is not returned.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The topic status. Valid value:
   * 
   * **Running**.
   * 
   * If the topic is deleted, this parameter is not returned.
   * 
   * @example
   * Running
   */
  statusName?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: GetTopicListResponseBodyTopicListTopicVOTags;
  /**
   * @remarks
   * The topic name. Valid values:
   * 
   * *   The name can contain only letters, digits, hyphens (-), and underscores (_).
   * *   The name must be 3 to 64 characters in length. If the name contains more than 64 characters, the system automatically truncates the name.
   * 
   * @example
   * topic_name
   */
  topic?: string;
  /**
   * @remarks
   * The topic configuration.
   * 
   * @example
   * {"replication-factor":3}
   */
  topicConfig?: string;
  static names(): { [key: string]: string } {
    return {
      autoCreate: 'AutoCreate',
      compactTopic: 'CompactTopic',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      localTopic: 'LocalTopic',
      partitionNum: 'PartitionNum',
      regionId: 'RegionId',
      remark: 'Remark',
      status: 'Status',
      statusName: 'StatusName',
      tags: 'Tags',
      topic: 'Topic',
      topicConfig: 'TopicConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCreate: 'boolean',
      compactTopic: 'boolean',
      createTime: 'number',
      instanceId: 'string',
      localTopic: 'boolean',
      partitionNum: 'number',
      regionId: 'string',
      remark: 'string',
      status: 'number',
      statusName: 'string',
      tags: GetTopicListResponseBodyTopicListTopicVOTags,
      topic: 'string',
      topicConfig: 'string',
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicListResponseBodyTopicList extends $dara.Model {
  topicVO?: GetTopicListResponseBodyTopicListTopicVO[];
  static names(): { [key: string]: string } {
    return {
      topicVO: 'TopicVO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topicVO: { 'type': 'array', 'itemType': GetTopicListResponseBodyTopicListTopicVO },
    };
  }

  validate() {
    if(Array.isArray(this.topicVO)) {
      $dara.Model.validateArray(this.topicVO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicStatusResponseBodyTopicStatusOffsetTableOffsetTable extends $dara.Model {
  /**
   * @remarks
   * The last time when the partition was modified.
   * 
   * @example
   * 1566470063547
   */
  lastUpdateTimestamp?: number;
  /**
   * @remarks
   * The latest offset in the partition of the topic.
   * 
   * @example
   * 76
   */
  maxOffset?: number;
  /**
   * @remarks
   * The earliest offset in the partition of the topic.
   * 
   * @example
   * 0
   */
  minOffset?: number;
  /**
   * @remarks
   * The ID of the partition.
   * 
   * @example
   * 0
   */
  partition?: number;
  /**
   * @remarks
   * The name of the topic.
   * 
   * @example
   * testkafka
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      lastUpdateTimestamp: 'LastUpdateTimestamp',
      maxOffset: 'MaxOffset',
      minOffset: 'MinOffset',
      partition: 'Partition',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastUpdateTimestamp: 'number',
      maxOffset: 'number',
      minOffset: 'number',
      partition: 'number',
      topic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicStatusResponseBodyTopicStatusOffsetTable extends $dara.Model {
  offsetTable?: GetTopicStatusResponseBodyTopicStatusOffsetTableOffsetTable[];
  static names(): { [key: string]: string } {
    return {
      offsetTable: 'OffsetTable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offsetTable: { 'type': 'array', 'itemType': GetTopicStatusResponseBodyTopicStatusOffsetTableOffsetTable },
    };
  }

  validate() {
    if(Array.isArray(this.offsetTable)) {
      $dara.Model.validateArray(this.offsetTable);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicStatusResponseBodyTopicStatus extends $dara.Model {
  /**
   * @remarks
   * The time when the last consumed message was generated.
   * 
   * @example
   * 1566470063575
   */
  lastTimeStamp?: number;
  /**
   * @remarks
   * The information about offsets in the topic.
   */
  offsetTable?: GetTopicStatusResponseBodyTopicStatusOffsetTable;
  /**
   * @remarks
   * The number of messages in the topic.
   * 
   * @example
   * 423
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      lastTimeStamp: 'LastTimeStamp',
      offsetTable: 'OffsetTable',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastTimeStamp: 'number',
      offsetTable: GetTopicStatusResponseBodyTopicStatusOffsetTable,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.offsetTable && typeof (this.offsetTable as any).validate === 'function') {
      (this.offsetTable as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicSubscribeStatusResponseBodyTopicSubscribeStatus extends $dara.Model {
  /**
   * @remarks
   * The groups that subscribe to the topic.
   */
  consumerGroups?: string[];
  /**
   * @remarks
   * The topic name.
   * 
   * @example
   * topic_api_1681624879908
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroups: 'ConsumerGroups',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroups: { 'type': 'array', 'itemType': 'string' },
      topic: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.consumerGroups)) {
      $dara.Model.validateArray(this.consumerGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the resource tag.
   * 
   * *   If you leave this parameter empty, the keys of all tags are matched.
   * *   The tag key can be up to 128 characters in length and cannot contain http:// or https://. The tag key cannot start with acs: or aliyun.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The value of the resource tag.
   * 
   * *   If you leave Key empty, you must also leave this parameter empty. If you leave this parameter empty, the values of all tags are matched.
   * *   The tag value can be up to 128 characters in length and cannot contain http:// or https://. The tag value cannot start with acs: or aliyun.
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

export class ListTagResourcesResponseBodyTagResourcesTagResource extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource. A resource ID complies with the following rules:
   * 
   * *   The resource ID of an instance is the value of the instanceId parameter.
   * *   The resource ID of a topic is the value of the Kafka_alikafka_instanceId_topic parameter.
   * *   The resource ID of a consumer group is the value of the Kafka_alikafka_instanceId_consumerGroup parameter.
   * 
   * For example, the resources whose tags you want to query include the alikafka_post-cn-v0h1fgs2xxxx instance, the test-topic topic, and the test-consumer-group consumer group. In this case, their resource IDs are alikafka_post-cn-v0h1fgs2xxxx, Kafka_alikafka_post-cn-v0h1fgs2xxxx_test-topic, and Kafka_alikafka_post-cn-v0h1fgs2xxxx_test-consumer-group.
   * 
   * @example
   * alikafka_post-cn-v0h1fgs2****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource. The value is an enumerated value. Valid values:
   * 
   * *   **Instance**
   * *   **Topic**
   * *   **Consumergroup**
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * FinanceDept
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * FinanceJoshua
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResources extends $dara.Model {
  tagResource?: ListTagResourcesResponseBodyTagResourcesTagResource[];
  static names(): { [key: string]: string } {
    return {
      tagResource: 'TagResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagResource: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResourcesTagResource },
    };
  }

  validate() {
    if(Array.isArray(this.tagResource)) {
      $dara.Model.validateArray(this.tagResource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMessageResponseBodyMessageList extends $dara.Model {
  /**
   * @remarks
   * The check value of the chaincode.
   * 
   * @example
   * 0
   */
  checksum?: number;
  /**
   * @remarks
   * The message key.
   * 
   * @example
   * this is key
   */
  key?: string;
  /**
   * @remarks
   * Indicates whether the key is truncated.
   * 
   * @example
   * false
   */
  keyTruncated?: boolean;
  /**
   * @remarks
   * The consumer offset of the partition.
   * 
   * @example
   * 1
   */
  offset?: number;
  /**
   * @remarks
   * The partition ID.
   * 
   * @example
   * 0
   */
  partition?: number;
  /**
   * @remarks
   * The size of the key after serialization. Unit: bytes.
   * 
   * @example
   * 11
   */
  serializedKeySize?: number;
  /**
   * @remarks
   * The size of the value after serialization. Unit: bytes.
   * 
   * @example
   * 20
   */
  serializedValueSize?: number;
  /**
   * @remarks
   * The time when the message was created. The value of this parameter is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1705482172640
   */
  timestamp?: number;
  /**
   * @remarks
   * The time type.
   * 
   * @example
   * CreateTime
   */
  timestampType?: string;
  /**
   * @remarks
   * The topic name.
   * 
   * @example
   * dqc_test2
   */
  topic?: string;
  /**
   * @remarks
   * The truncated size of the message key. Unit: bytes.
   * 
   * >  A maximum of 1 KB of content can be displayed for each message. Content that exceeds 1 KB is automatically truncated. For more information, see [Query messages](https://help.aliyun.com/document_detail/113172.html).
   * 
   * @example
   * 0
   */
  truncatedKeySize?: number;
  /**
   * @remarks
   * The truncated size of the message value. Unit: bytes.
   * 
   * >  A maximum of 1 KB of content can be displayed for each message. Content that exceeds 1 KB is automatically truncated. For more information, see [Query messages](https://help.aliyun.com/document_detail/113172.html).
   * 
   * @example
   * 0
   */
  truncatedValueSize?: number;
  /**
   * @remarks
   * The message value.
   * 
   * @example
   * Welcome to Ali kafka
   */
  value?: string;
  /**
   * @remarks
   * Indicates whether the value is truncated.
   * 
   * @example
   * false
   */
  valueTruncated?: boolean;
  static names(): { [key: string]: string } {
    return {
      checksum: 'Checksum',
      key: 'Key',
      keyTruncated: 'KeyTruncated',
      offset: 'Offset',
      partition: 'Partition',
      serializedKeySize: 'SerializedKeySize',
      serializedValueSize: 'SerializedValueSize',
      timestamp: 'Timestamp',
      timestampType: 'TimestampType',
      topic: 'Topic',
      truncatedKeySize: 'TruncatedKeySize',
      truncatedValueSize: 'TruncatedValueSize',
      value: 'Value',
      valueTruncated: 'ValueTruncated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checksum: 'number',
      key: 'string',
      keyTruncated: 'boolean',
      offset: 'number',
      partition: 'number',
      serializedKeySize: 'number',
      serializedValueSize: 'number',
      timestamp: 'number',
      timestampType: 'string',
      topic: 'string',
      truncatedKeySize: 'number',
      truncatedValueSize: 'number',
      value: 'string',
      valueTruncated: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * *   You must specify this parameter.
   * *   The tag key can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag key cannot start with `acs:` or `aliyun`.
   * 
   * This parameter is required.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * *   You can leave this parameter empty.
   * *   The tag value can be up to 128 characters in length and cannot contain http:// or https://. The tag value cannot start with acs: or aliyun.
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

export class UpdateConsumerOffsetRequestOffsets extends $dara.Model {
  /**
   * @remarks
   * The consumer offset of the partition.
   * 
   * @example
   * 1
   */
  offset?: number;
  /**
   * @remarks
   * The partition ID.
   * 
   * @example
   * 0
   */
  partition?: number;
  static names(): { [key: string]: string } {
    return {
      offset: 'Offset',
      partition: 'Partition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offset: 'number',
      partition: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradePostPayOrderRequestServerlessConfig extends $dara.Model {
  /**
   * @remarks
   * The reserved capacity for publishing messages. You can specify only an integer for this parameter. Minimum value: 60.
   * 
   * >  The maximum capacity that you can reserve for an instance varies based on available resources in a region. The reserved capacity range displayed on the buy page shall prevail.
   * 
   * @example
   * 50
   */
  reservedPublishCapacity?: number;
  /**
   * @remarks
   * The reserved capacity for subscribing to messages. You can specify only an integer for this parameter. Minimum value: 50.
   * 
   * >  The maximum capacity that you can reserve for an instance varies based on available resources in a region. The reserved capacity range displayed on the buy page shall prevail.
   * 
   * @example
   * 50
   */
  reservedSubscribeCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      reservedPublishCapacity: 'ReservedPublishCapacity',
      reservedSubscribeCapacity: 'ReservedSubscribeCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reservedPublishCapacity: 'number',
      reservedSubscribeCapacity: 'number',
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

export class ChangeResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource group to which you want to transfer the cloud resource.
   * 
   * >  You can use resource groups to manage resources owned by your Alibaba Cloud account. Resource groups simplify the resource and permission management of your Alibaba Cloud account. For more information, see [What is resource management?](https://help.aliyun.com/document_detail/94475.html)
   * 
   * This parameter is required.
   * 
   * @example
   * rg-ac***********7q
   */
  newResourceGroupId?: string;
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource to which you want to attach a tag. Only the ID of a Message Queue for Apache Kafka instance is supported.
   * 
   * For example, if the ID of the instance is alikafka_post-cn-v0h1fgs2xxxx, the resource ID is alikafka_post-cn-v0h1fgs2xxxx.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_post-cn-v0h1fgs2****
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      newResourceGroupId: 'NewResourceGroupId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newResourceGroupId: 'string',
      regionId: 'string',
      resourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned. The HTTP status code 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the new resource group. You can view the available resource groups in the Resource Management console.
   * 
   * @example
   * rg-ac***********7q
   */
  newResourceGroupId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C5CA600C-7D5A-45B5-B6DB-44FAC2C****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      newResourceGroupId: 'NewResourceGroupId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      newResourceGroupId: 'string',
      requestId: 'string',
      success: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ChangeResourceGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertPostPayOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The subscription duration. Unit: months. Valid values:
   * 
   * *   **1~12**
   * *   **24**
   * *   **36**
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_post-cn-v0h1fgs2****
   */
  instanceId?: string;
  paidType?: number;
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
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      instanceId: 'InstanceId',
      paidType: 'PaidType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      instanceId: 'string',
      paidType: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertPostPayOrderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned. The HTTP status code 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 20497346575****
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 06084011-E093-46F3-A51F-4B19A8AD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      orderId: 'OrderId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      orderId: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertPostPayOrderResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConvertPostPayOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ConvertPostPayOrderResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAclRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the operation allowed by the access control list (ACL). Valid values:
   * 
   * *   **Write**
   * *   **Read**
   * *   **Describe**: reads of transactional IDs.
   * *   **IdempotentWrite**: idempotent data writes to clusters.
   * *   **IDEMPOTENT_WRITE**: idempotent data writes to clusters. This value is available only for serverless ApsaraMQ for Kafka instances.
   * *   **DESCRIBE_CONFIGS**: configuration query. This value is available only for serverless ApsaraMQ for Kafka instances.
   * 
   * This parameter is required.
   * 
   * @example
   * Read
   */
  aclOperationType?: string;
  /**
   * @remarks
   * The types of operations allowed by the ACL. Separate multiple operation types with commas (,).
   * 
   * Valid values:
   * 
   * *   **Write**
   * *   **Read**
   * *   **Describe**: reads of transactional IDs.
   * *   **IdempotentWrite**: idempotent data writes to clusters.
   * *   **IDEMPOTENT_WRITE**: idempotent data writes to clusters. This value is available only for serverless ApsaraMQ for Kafka instances.
   * *   **DESCRIBE_CONFIGS**: configuration query. This value is available only for serverless ApsaraMQ for Kafka instances.
   * 
   * >  This parameter is available only for serverless ApsaraMQ for Kafka instances.
   * 
   * @example
   * Write,Read
   */
  aclOperationTypes?: string;
  /**
   * @remarks
   * The authorization method. Valid values:
   * 
   * *   **DENY**
   * *   **ALLOW**
   * 
   * >  This parameter is available only for serverless ApsaraMQ for Kafka instances.
   * 
   * @example
   * DENY
   */
  aclPermissionType?: string;
  /**
   * @remarks
   * The resource name.
   * 
   * *   The value can be a topic name, a group ID, a cluster name, or a transaction ID.
   * *   You can use an asterisk (\\*) to specify the names of all resources of the specified type.
   * 
   * > You can use an asterisk (\\*) to query the resources on which permissions are granted only after you grant the user the required permissions on all resources.
   * 
   * This parameter is required.
   * 
   * @example
   * X****
   */
  aclResourceName?: string;
  /**
   * @remarks
   * The matching mode. Valid values:
   * 
   * *   **LITERAL**: exact match
   * *   **PREFIXED**: prefix match
   * 
   * This parameter is required.
   * 
   * @example
   * LITERAL
   */
  aclResourcePatternType?: string;
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * *   **Topic**
   * *   **Group**
   * *   **Cluster**
   * *   **TransactionalId**: transactional ID
   * 
   * This parameter is required.
   * 
   * @example
   * Group
   */
  aclResourceType?: string;
  /**
   * @remarks
   * The IP address of the source.
   * 
   * > 
   * 
   * *   You can specify a specific IP address or use the asterisk (\\*) wildcard character to specify all IP addresses. CIDR blocks are not supported.
   * 
   * *   This parameter is available only for serverless ApsaraMQ for Kafka instances.
   * 
   * @example
   * *
   */
  host?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_pre-cn-v0h1cng0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The username.
   * 
   * *   You can use an asterisk (\\*) to specify all usernames.
   * 
   * > You can use an asterisk (\\*) to query the authorized users only after you grant the required permissions to all users.
   * 
   * This parameter is required.
   * 
   * @example
   * test***
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      aclOperationType: 'AclOperationType',
      aclOperationTypes: 'AclOperationTypes',
      aclPermissionType: 'AclPermissionType',
      aclResourceName: 'AclResourceName',
      aclResourcePatternType: 'AclResourcePatternType',
      aclResourceType: 'AclResourceType',
      host: 'Host',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclOperationType: 'string',
      aclOperationTypes: 'string',
      aclPermissionType: 'string',
      aclResourceName: 'string',
      aclResourcePatternType: 'string',
      aclResourceType: 'string',
      host: 'string',
      instanceId: 'string',
      regionId: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAclResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned. The HTTP status code 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * operation success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 56729737-C428-4E1B-AC68-7A8C2D5****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAclResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAclResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAclResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConsumerGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the consumer group.
   * 
   * *   The value can contain only letters, digits, hyphens (-), and underscores (_), and the value must contain at least one letter or digit.
   * *   The value must be 3 to 128 characters in length. If the value that you specify contains more than 128 characters, the system automatically truncates the value to 128 characters.
   * *   After a consumer group is created, you cannot change the name of the consumer group.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  consumerId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_post-cn-0pp1l9z8****
   */
  instanceId?: string;
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
   * The description of the consumer group.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateConsumerGroupRequestTag[];
  static names(): { [key: string]: string } {
    return {
      consumerId: 'ConsumerId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      remark: 'Remark',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerId: 'string',
      instanceId: 'string',
      regionId: 'string',
      remark: 'string',
      tag: { 'type': 'array', 'itemType': CreateConsumerGroupRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConsumerGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned. The HTTP status code 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * operation success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E57A8862-DF68-4055-8E55-B80CB4****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConsumerGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateConsumerGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateConsumerGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePostPayInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4
   */
  deployType?: number;
  /**
   * @example
   * 1500
   */
  diskSize?: number;
  /**
   * @example
   * 0
   */
  diskType?: string;
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
   * 0
   */
  paidType?: number;
  /**
   * @example
   * 100
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
  serverlessConfig?: CreatePostPayInstanceRequestServerlessConfig;
  /**
   * @example
   * professional
   */
  specType?: string;
  tag?: CreatePostPayInstanceRequestTag[];
  static names(): { [key: string]: string } {
    return {
      deployType: 'DeployType',
      diskSize: 'DiskSize',
      diskType: 'DiskType',
      eipMax: 'EipMax',
      ioMaxSpec: 'IoMaxSpec',
      paidType: 'PaidType',
      partitionNum: 'PartitionNum',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      serverlessConfig: 'ServerlessConfig',
      specType: 'SpecType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployType: 'number',
      diskSize: 'number',
      diskType: 'string',
      eipMax: 'number',
      ioMaxSpec: 'string',
      paidType: 'number',
      partitionNum: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      serverlessConfig: CreatePostPayInstanceRequestServerlessConfig,
      specType: 'string',
      tag: { 'type': 'array', 'itemType': CreatePostPayInstanceRequestTag },
    };
  }

  validate() {
    if(this.serverlessConfig && typeof (this.serverlessConfig as any).validate === 'function') {
      (this.serverlessConfig as any).validate();
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

export class CreatePostPayInstanceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4
   */
  deployType?: number;
  /**
   * @example
   * 1500
   */
  diskSize?: number;
  /**
   * @example
   * 0
   */
  diskType?: string;
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
   * 0
   */
  paidType?: number;
  /**
   * @example
   * 100
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
  serverlessConfigShrink?: string;
  /**
   * @example
   * professional
   */
  specType?: string;
  tag?: CreatePostPayInstanceShrinkRequestTag[];
  static names(): { [key: string]: string } {
    return {
      deployType: 'DeployType',
      diskSize: 'DiskSize',
      diskType: 'DiskType',
      eipMax: 'EipMax',
      ioMaxSpec: 'IoMaxSpec',
      paidType: 'PaidType',
      partitionNum: 'PartitionNum',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      serverlessConfigShrink: 'ServerlessConfig',
      specType: 'SpecType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployType: 'number',
      diskSize: 'number',
      diskType: 'string',
      eipMax: 'number',
      ioMaxSpec: 'string',
      paidType: 'number',
      partitionNum: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      serverlessConfigShrink: 'string',
      specType: 'string',
      tag: { 'type': 'array', 'itemType': CreatePostPayInstanceShrinkRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePostPayInstanceResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: CreatePostPayInstanceResponseBodyData;
  /**
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @example
   * ABA4A7FD-E10F-45C7-9774-A5236015A***
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: CreatePostPayInstanceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePostPayInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePostPayInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreatePostPayInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePostPayOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The deployment mode of the instance. Valid values:
   * 
   * *   **4**: deploys the instance that allows access from the Internet and a VPC.
   * *   **5**: deploys the instance that allows access only from a VPC.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  deployType?: number;
  /**
   * @remarks
   * The disk size.
   * 
   * For information about the valid values of this parameter, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * >  If you create a serverless ApsaraMQ for Kafka instance, you do not need to configure this parameter.
   * 
   * @example
   * 500
   */
  diskSize?: number;
  /**
   * @remarks
   * The disk type of the instance. Valid values:
   * 
   * *   **0**: ultra disk
   * *   **1**: standard SSD
   * 
   * >  If you create a serverless ApsaraMQ for Kafka instance, you do not need to configure this parameter.
   * 
   * @example
   * 0
   */
  diskType?: string;
  /**
   * @remarks
   * The Internet traffic.
   * 
   * *   If you set **DeployType** to **4**, you must configure this parameter.
   * *   For information about the valid values of this parameter, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * >  If you create a serverless ApsaraMQ for Kafka instance, you do not need to configure this parameter.
   * 
   * @example
   * 0
   */
  eipMax?: number;
  /**
   * @remarks
   * The maximum traffic in the instance. We recommend that you do not configure this parameter.
   * 
   * *   You must configure at least one of IoMax and IoMaxSpec. If you configure both parameters, the value of IoMaxSpec takes effect. We recommend that you configure only IoMaxSpec.
   * *   For information about the valid values of this parameter, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * >  If you create a serverless ApsaraMQ for Kafka instance, you do not need to configure this parameter.
   * 
   * @example
   * 20
   */
  ioMax?: number;
  /**
   * @remarks
   * The traffic specification of the instance. We recommend that you configure this parameter.
   * 
   * *   You must configure at least one of IoMax and IoMaxSpec. If you configure both parameters, the value of IoMaxSpec takes effect. We recommend that you configure only IoMaxSpec.
   * *   For information about the valid values of this parameter, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * >  If you create a serverless ApsaraMQ for Kafka instance, you do not need to configure this parameter.
   * 
   * @example
   * alikafka.hw.2xlarge
   */
  ioMaxSpec?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   1: pay-as-you-go (reserved capacity).
   * *   3: pay-as-you-go (reserved capacity) + pay-as-you-go (on-demand capacity)
   * 
   * @example
   * 1
   */
  paidType?: number;
  /**
   * @remarks
   * The number of partitions. We recommend that you configure this parameter.
   * 
   * *   You must configure one of PartitionNum and TopicQuota. We recommend that you configure only ParittionNum.
   * *   If you configure PartitionNum and TopicQuota at the same time, the system verifies whether the price of the partitions equals the price of the topics based on the previous topic-based selling mode. If the price of the partitions does not equal the price of the topics, an error is returned. If the price of the partitions equals the price of the topics, the instance is purchased based on the partition number.
   * *   For information about the valid values of this parameter, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * >  If you create a serverless ApsaraMQ for Kafka instance, you do not need to configure this parameter.
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
   * The ID of the resource group.
   * 
   * If this parameter is left empty, the default resource group is used. You can view the resource group ID on the Resource Group page in the Resource Management console.
   * 
   * @example
   * rg-ac***********7q
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The parameters configured for the serverless ApsaraMQ for Kafka instance. These parameters are required only when you create a serverless instance.
   */
  serverlessConfig?: CreatePostPayOrderRequestServerlessConfig;
  /**
   * @remarks
   * The instance edition.
   * 
   * Valid values if you set PaidType to 1:
   * 
   * *   normal: Standard Edition (High Write)
   * *   professional: Professional Edition (High Write)
   * *   professionalForHighRead: Professional Edition (High Read)
   * 
   * Valid values if you set PaidType to 3:
   * 
   * *   normal: Serverless Standard Edition
   * 
   * For more information about the instance editions, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * @example
   * normal
   */
  specType?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreatePostPayOrderRequestTag[];
  /**
   * @remarks
   * The number of topics. We recommend that you do not configure this parameter.
   * 
   * *   You must configure one of PartitionNum and TopicQuota. We recommend that you configure only ParittionNum.
   * *   If you configure PartitionNum and TopicQuota at the same time, the system verifies whether the price of the partitions equals the price of the topics based on the previous topic-based selling mode. If the price of the partitions does not equal the price of the topics, an error is returned. If the price of the partitions equals the price of the topics, the instance is purchased based on the partition number.
   * *   The default value of TopicQuota varies based on the value of IoMaxSpec. If the number of topics that you consume exceeds the default value, you are charged additional fees.
   * *   For information about the valid values of this parameter, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * >  If you create a serverless ApsaraMQ for Kafka instance, you do not need to configure this parameter.
   * 
   * @example
   * 50
   */
  topicQuota?: number;
  static names(): { [key: string]: string } {
    return {
      deployType: 'DeployType',
      diskSize: 'DiskSize',
      diskType: 'DiskType',
      eipMax: 'EipMax',
      ioMax: 'IoMax',
      ioMaxSpec: 'IoMaxSpec',
      paidType: 'PaidType',
      partitionNum: 'PartitionNum',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      serverlessConfig: 'ServerlessConfig',
      specType: 'SpecType',
      tag: 'Tag',
      topicQuota: 'TopicQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployType: 'number',
      diskSize: 'number',
      diskType: 'string',
      eipMax: 'number',
      ioMax: 'number',
      ioMaxSpec: 'string',
      paidType: 'number',
      partitionNum: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      serverlessConfig: CreatePostPayOrderRequestServerlessConfig,
      specType: 'string',
      tag: { 'type': 'array', 'itemType': CreatePostPayOrderRequestTag },
      topicQuota: 'number',
    };
  }

  validate() {
    if(this.serverlessConfig && typeof (this.serverlessConfig as any).validate === 'function') {
      (this.serverlessConfig as any).validate();
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

export class CreatePostPayOrderShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The deployment mode of the instance. Valid values:
   * 
   * *   **4**: deploys the instance that allows access from the Internet and a VPC.
   * *   **5**: deploys the instance that allows access only from a VPC.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  deployType?: number;
  /**
   * @remarks
   * The disk size.
   * 
   * For information about the valid values of this parameter, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * >  If you create a serverless ApsaraMQ for Kafka instance, you do not need to configure this parameter.
   * 
   * @example
   * 500
   */
  diskSize?: number;
  /**
   * @remarks
   * The disk type of the instance. Valid values:
   * 
   * *   **0**: ultra disk
   * *   **1**: standard SSD
   * 
   * >  If you create a serverless ApsaraMQ for Kafka instance, you do not need to configure this parameter.
   * 
   * @example
   * 0
   */
  diskType?: string;
  /**
   * @remarks
   * The Internet traffic.
   * 
   * *   If you set **DeployType** to **4**, you must configure this parameter.
   * *   For information about the valid values of this parameter, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * >  If you create a serverless ApsaraMQ for Kafka instance, you do not need to configure this parameter.
   * 
   * @example
   * 0
   */
  eipMax?: number;
  /**
   * @remarks
   * The maximum traffic in the instance. We recommend that you do not configure this parameter.
   * 
   * *   You must configure at least one of IoMax and IoMaxSpec. If you configure both parameters, the value of IoMaxSpec takes effect. We recommend that you configure only IoMaxSpec.
   * *   For information about the valid values of this parameter, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * >  If you create a serverless ApsaraMQ for Kafka instance, you do not need to configure this parameter.
   * 
   * @example
   * 20
   */
  ioMax?: number;
  /**
   * @remarks
   * The traffic specification of the instance. We recommend that you configure this parameter.
   * 
   * *   You must configure at least one of IoMax and IoMaxSpec. If you configure both parameters, the value of IoMaxSpec takes effect. We recommend that you configure only IoMaxSpec.
   * *   For information about the valid values of this parameter, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * >  If you create a serverless ApsaraMQ for Kafka instance, you do not need to configure this parameter.
   * 
   * @example
   * alikafka.hw.2xlarge
   */
  ioMaxSpec?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   1: pay-as-you-go (reserved capacity).
   * *   3: pay-as-you-go (reserved capacity) + pay-as-you-go (on-demand capacity)
   * 
   * @example
   * 1
   */
  paidType?: number;
  /**
   * @remarks
   * The number of partitions. We recommend that you configure this parameter.
   * 
   * *   You must configure one of PartitionNum and TopicQuota. We recommend that you configure only ParittionNum.
   * *   If you configure PartitionNum and TopicQuota at the same time, the system verifies whether the price of the partitions equals the price of the topics based on the previous topic-based selling mode. If the price of the partitions does not equal the price of the topics, an error is returned. If the price of the partitions equals the price of the topics, the instance is purchased based on the partition number.
   * *   For information about the valid values of this parameter, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * >  If you create a serverless ApsaraMQ for Kafka instance, you do not need to configure this parameter.
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
   * The ID of the resource group.
   * 
   * If this parameter is left empty, the default resource group is used. You can view the resource group ID on the Resource Group page in the Resource Management console.
   * 
   * @example
   * rg-ac***********7q
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The parameters configured for the serverless ApsaraMQ for Kafka instance. These parameters are required only when you create a serverless instance.
   */
  serverlessConfigShrink?: string;
  /**
   * @remarks
   * The instance edition.
   * 
   * Valid values if you set PaidType to 1:
   * 
   * *   normal: Standard Edition (High Write)
   * *   professional: Professional Edition (High Write)
   * *   professionalForHighRead: Professional Edition (High Read)
   * 
   * Valid values if you set PaidType to 3:
   * 
   * *   normal: Serverless Standard Edition
   * 
   * For more information about the instance editions, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * @example
   * normal
   */
  specType?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreatePostPayOrderShrinkRequestTag[];
  /**
   * @remarks
   * The number of topics. We recommend that you do not configure this parameter.
   * 
   * *   You must configure one of PartitionNum and TopicQuota. We recommend that you configure only ParittionNum.
   * *   If you configure PartitionNum and TopicQuota at the same time, the system verifies whether the price of the partitions equals the price of the topics based on the previous topic-based selling mode. If the price of the partitions does not equal the price of the topics, an error is returned. If the price of the partitions equals the price of the topics, the instance is purchased based on the partition number.
   * *   The default value of TopicQuota varies based on the value of IoMaxSpec. If the number of topics that you consume exceeds the default value, you are charged additional fees.
   * *   For information about the valid values of this parameter, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * >  If you create a serverless ApsaraMQ for Kafka instance, you do not need to configure this parameter.
   * 
   * @example
   * 50
   */
  topicQuota?: number;
  static names(): { [key: string]: string } {
    return {
      deployType: 'DeployType',
      diskSize: 'DiskSize',
      diskType: 'DiskType',
      eipMax: 'EipMax',
      ioMax: 'IoMax',
      ioMaxSpec: 'IoMaxSpec',
      paidType: 'PaidType',
      partitionNum: 'PartitionNum',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      serverlessConfigShrink: 'ServerlessConfig',
      specType: 'SpecType',
      tag: 'Tag',
      topicQuota: 'TopicQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployType: 'number',
      diskSize: 'number',
      diskType: 'string',
      eipMax: 'number',
      ioMax: 'number',
      ioMaxSpec: 'string',
      paidType: 'number',
      partitionNum: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      serverlessConfigShrink: 'string',
      specType: 'string',
      tag: { 'type': 'array', 'itemType': CreatePostPayOrderShrinkRequestTag },
      topicQuota: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePostPayOrderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned. The HTTP status code 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
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
   * The ID of the order.
   * 
   * @example
   * 20497346575****
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 06084011-E093-46F3-A51F-4B19A8AD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      orderId: 'OrderId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      orderId: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePostPayOrderResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePostPayOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreatePostPayOrderResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
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

export class CreatePrePayInstanceShrinkRequest extends $dara.Model {
  confluentConfigShrink?: string;
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
  tag?: CreatePrePayInstanceShrinkRequestTag[];
  static names(): { [key: string]: string } {
    return {
      confluentConfigShrink: 'ConfluentConfig',
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
      confluentConfigShrink: 'string',
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
      tag: { 'type': 'array', 'itemType': CreatePrePayInstanceShrinkRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrePayInstanceResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: CreatePrePayInstanceResponseBodyData;
  /**
   * @example
   * operation success
   */
  message?: string;
  /**
   * @example
   * E57A8862-DF68-4055-8E55-B80CB4****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: CreatePrePayInstanceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrePayInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePrePayInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreatePrePayInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrePayOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The configurations of Confluent.
   * 
   * >  When you create an ApsaraMQ for Confluent instance, you must configure this parameter.
   */
  confluentConfig?: CreatePrePayOrderRequestConfluentConfig;
  /**
   * @remarks
   * The type of the network in which the instance is deployed. Valid values:
   * 
   * *   **4**: Internet and virtual private cloud (VPC)
   * *   **5**: VPC
   * 
   * >  If you create an ApsaraMQ for Confluent instance, set the value to 5. After the instance is created, you can specify whether to enable each component.
   * 
   * @example
   * 5
   */
  deployType?: number;
  /**
   * @remarks
   * The disk size. Unit: GB
   * 
   * For information about the valid values of this parameter, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * >  If you create an ApsaraMQ for Confluent instance, you do not need to configure this parameter.
   * 
   * @example
   * 500
   */
  diskSize?: number;
  /**
   * @remarks
   * The disk type. Valid values:
   * 
   * *   **0**: ultra disk
   * *   **1**: standard SSD
   * 
   * >  If you create an ApsaraMQ for Confluent instance, you do not need to configure this parameter.
   * 
   * @example
   * 0
   */
  diskType?: string;
  /**
   * @remarks
   * The subscription duration. Unit: months. Default value: 1. Valid values:
   * 
   * *   **1 to 12**
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The maximum Internet traffic in the instance.
   * 
   * *   If you set **DeployType** to **4**, you must configure this parameter.
   * *   For information about the valid values, see [Pay-as-you-go](https://help.aliyun.com/document_detail/72142.html).
   * 
   * >  If you create an ApsaraMQ for Confluent instance, you do not need to configure this parameter.
   * 
   * @example
   * 0
   */
  eipMax?: number;
  /**
   * @remarks
   * The maximum traffic in the instance. We recommend that you do not configure this parameter.
   * 
   * *   You must set one of **IoMax** and **IoMaxSpec**. If both parameters are configured, the value of **IoMaxSpec** is used. We recommend that you configure only **IoMaxSpec**.
   * *   For information about the valid values of this parameter, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * >  If you create an ApsaraMQ for Confluent instance, you do not need to configure this parameter.
   * 
   * @example
   * 20
   */
  ioMax?: number;
  /**
   * @remarks
   * The traffic specification of the instance. We recommend that you configure this parameter.
   * 
   * *   You must configure one of **IoMax** and **IoMaxSpec**. If both parameters are configured, the value of **IoMaxSpec** is used. We recommend that you configure only **IoMaxSpec**.
   * *   For more information about the valid values of this parameter, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * >  If you create an ApsaraMQ for Confluent instance, you do not need to configure this parameter.
   * 
   * @example
   * alikafka.hw.2xlarge
   */
  ioMaxSpec?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   **0**: the subscription billing method
   * *   **4**: the subscription billing method for ApsaraMQ for Confluent instances
   * 
   * @example
   * 1
   */
  paidType?: number;
  /**
   * @remarks
   * The number of partitions. We recommend that you configure this parameter.
   * 
   * *   You must configure one of PartitionNum and TopicQuota. We recommend that you configure only PartitionNum.
   * *   If you configure PartitionNum and TopicQuota at the same time, the system verifies whether the price of the partitions equals the price of the topics based on the previous topic-based selling mode. If the price of the partitions does not equal the price of the topics, an error is returned. If the price of the partitions equals the price of the topics, the instance is purchased based on the partition number.
   * *   For information about the valid values of this parameter, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * >  If you create an ApsaraMQ for Confluent instance, you do not need to configure this parameter.
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
   * The ID of the resource group.
   * 
   * If this parameter is left empty, the default resource group is used. You can view the resource group ID on the Resource Group page in the Resource Management console.
   * 
   * @example
   * rg-ac***********7q
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The instance edition. Valid values:
   * 
   * *   **normal**: Standard Edition (High Write)
   * *   **professional**: Professional Edition (High Write)
   * *   **professionalForHighRead**: Professional Edition (High Read)
   * 
   * For more information, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * >  If you create an ApsaraMQ for Confluent instance, you do not need to configure this parameter.
   * 
   * @example
   * normal
   */
  specType?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreatePrePayOrderRequestTag[];
  /**
   * @remarks
   * The number of topics. We recommend that you do not configure this parameter.
   * 
   * *   You must configure one of PartitionNum and TopicQuota. We recommend that you configure only PartitionNum.
   * *   If you configure PartitionNum and TopicQuota at the same time, the system verifies whether the price of the partitions equals the price of the topics based on the previous topic-based selling mode. If the price of the partitions does not equal the price of the topics, an error is returned. If the price of the partitions equals the price of the topics, the instance is purchased based on the partition number.
   * *   The default value of TopicQuota varies based on the value of IoMaxSpec. If the number of topics that you use exceeds the default value, you are charged additional fees.
   * *   For information about the valid values of this parameter, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * >  If you create an ApsaraMQ for Confluent instance, you do not need to configure this parameter.
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

export class CreatePrePayOrderShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The configurations of Confluent.
   * 
   * >  When you create an ApsaraMQ for Confluent instance, you must configure this parameter.
   */
  confluentConfigShrink?: string;
  /**
   * @remarks
   * The type of the network in which the instance is deployed. Valid values:
   * 
   * *   **4**: Internet and virtual private cloud (VPC)
   * *   **5**: VPC
   * 
   * >  If you create an ApsaraMQ for Confluent instance, set the value to 5. After the instance is created, you can specify whether to enable each component.
   * 
   * @example
   * 5
   */
  deployType?: number;
  /**
   * @remarks
   * The disk size. Unit: GB
   * 
   * For information about the valid values of this parameter, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * >  If you create an ApsaraMQ for Confluent instance, you do not need to configure this parameter.
   * 
   * @example
   * 500
   */
  diskSize?: number;
  /**
   * @remarks
   * The disk type. Valid values:
   * 
   * *   **0**: ultra disk
   * *   **1**: standard SSD
   * 
   * >  If you create an ApsaraMQ for Confluent instance, you do not need to configure this parameter.
   * 
   * @example
   * 0
   */
  diskType?: string;
  /**
   * @remarks
   * The subscription duration. Unit: months. Default value: 1. Valid values:
   * 
   * *   **1 to 12**
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The maximum Internet traffic in the instance.
   * 
   * *   If you set **DeployType** to **4**, you must configure this parameter.
   * *   For information about the valid values, see [Pay-as-you-go](https://help.aliyun.com/document_detail/72142.html).
   * 
   * >  If you create an ApsaraMQ for Confluent instance, you do not need to configure this parameter.
   * 
   * @example
   * 0
   */
  eipMax?: number;
  /**
   * @remarks
   * The maximum traffic in the instance. We recommend that you do not configure this parameter.
   * 
   * *   You must set one of **IoMax** and **IoMaxSpec**. If both parameters are configured, the value of **IoMaxSpec** is used. We recommend that you configure only **IoMaxSpec**.
   * *   For information about the valid values of this parameter, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * >  If you create an ApsaraMQ for Confluent instance, you do not need to configure this parameter.
   * 
   * @example
   * 20
   */
  ioMax?: number;
  /**
   * @remarks
   * The traffic specification of the instance. We recommend that you configure this parameter.
   * 
   * *   You must configure one of **IoMax** and **IoMaxSpec**. If both parameters are configured, the value of **IoMaxSpec** is used. We recommend that you configure only **IoMaxSpec**.
   * *   For more information about the valid values of this parameter, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * >  If you create an ApsaraMQ for Confluent instance, you do not need to configure this parameter.
   * 
   * @example
   * alikafka.hw.2xlarge
   */
  ioMaxSpec?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   **0**: the subscription billing method
   * *   **4**: the subscription billing method for ApsaraMQ for Confluent instances
   * 
   * @example
   * 1
   */
  paidType?: number;
  /**
   * @remarks
   * The number of partitions. We recommend that you configure this parameter.
   * 
   * *   You must configure one of PartitionNum and TopicQuota. We recommend that you configure only PartitionNum.
   * *   If you configure PartitionNum and TopicQuota at the same time, the system verifies whether the price of the partitions equals the price of the topics based on the previous topic-based selling mode. If the price of the partitions does not equal the price of the topics, an error is returned. If the price of the partitions equals the price of the topics, the instance is purchased based on the partition number.
   * *   For information about the valid values of this parameter, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * >  If you create an ApsaraMQ for Confluent instance, you do not need to configure this parameter.
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
   * The ID of the resource group.
   * 
   * If this parameter is left empty, the default resource group is used. You can view the resource group ID on the Resource Group page in the Resource Management console.
   * 
   * @example
   * rg-ac***********7q
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The instance edition. Valid values:
   * 
   * *   **normal**: Standard Edition (High Write)
   * *   **professional**: Professional Edition (High Write)
   * *   **professionalForHighRead**: Professional Edition (High Read)
   * 
   * For more information, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * >  If you create an ApsaraMQ for Confluent instance, you do not need to configure this parameter.
   * 
   * @example
   * normal
   */
  specType?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreatePrePayOrderShrinkRequestTag[];
  /**
   * @remarks
   * The number of topics. We recommend that you do not configure this parameter.
   * 
   * *   You must configure one of PartitionNum and TopicQuota. We recommend that you configure only PartitionNum.
   * *   If you configure PartitionNum and TopicQuota at the same time, the system verifies whether the price of the partitions equals the price of the topics based on the previous topic-based selling mode. If the price of the partitions does not equal the price of the topics, an error is returned. If the price of the partitions equals the price of the topics, the instance is purchased based on the partition number.
   * *   The default value of TopicQuota varies based on the value of IoMaxSpec. If the number of topics that you use exceeds the default value, you are charged additional fees.
   * *   For information about the valid values of this parameter, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * >  If you create an ApsaraMQ for Confluent instance, you do not need to configure this parameter.
   * 
   * @example
   * 50
   */
  topicQuota?: number;
  static names(): { [key: string]: string } {
    return {
      confluentConfigShrink: 'ConfluentConfig',
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
      confluentConfigShrink: 'string',
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
      tag: { 'type': 'array', 'itemType': CreatePrePayOrderShrinkRequestTag },
      topicQuota: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrePayOrderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned. The HTTP status code 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
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
   * The ID of the order.
   * 
   * @example
   * 20497346575****
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 06084011-E093-46F3-A51F-4B19A8AD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      orderId: 'OrderId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      orderId: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrePayOrderResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePrePayOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreatePrePayOrderResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSaslUserRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_pre-cn-v0h1cng0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The encryption method. Valid values:
   * 
   * *   SCRAM-SHA-512 (default)
   * *   SCRAM-SHA-256
   * 
   * >  This parameter is available only for ApsaraMQ for Kafka serverless instances.
   * 
   * @example
   * SCRAM-SHA-256
   */
  mechanism?: string;
  /**
   * @remarks
   * The password of the SASL user.
   * 
   * This parameter is required.
   * 
   * @example
   * 12***
   */
  password?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the Simple Authentication and Security Layer (SASL) user. Valid values:
   * 
   * *   **plain**: a simple mechanism that uses usernames and passwords to verify user identities. ApsaraMQ for Kafka provides an improved PLAIN mechanism that allows you to dynamically add SASL users without the need to restart an instance.
   * *   **SCRAM**: a mechanism that uses usernames and passwords to verify user identities. Compared with the PLAIN mechanism, this mechanism provides better security protection. ApsaraMQ for Kafka uses the SCRAM-SHA-256 algorithm.
   * *   **LDAP**: This value is available only for the SASL users of ApsaraMQ for Confluent instances.
   * 
   * Default value: **plain**.
   * 
   * @example
   * plain
   */
  type?: string;
  /**
   * @remarks
   * The name of the SASL user.
   * 
   * This parameter is required.
   * 
   * @example
   * test***
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      mechanism: 'Mechanism',
      password: 'Password',
      regionId: 'RegionId',
      type: 'Type',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      mechanism: 'string',
      password: 'string',
      regionId: 'string',
      type: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSaslUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The HTTP status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C5CA600C-7D5A-45B5-B6DB-44FAC2C****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSaslUserResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSaslUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSaslUserResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduledScalingRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The duration of each scheduled scaling task. Unit: minutes.
   * 
   * >  The value of this parameter must be greater than or equal to 15.
   * 
   * This parameter is required.
   * 
   * @example
   * 60
   */
  durationMinutes?: number;
  /**
   * @remarks
   * Specifies whether to enable the scheduled scaling rule. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The time when the scheduled scaling task is executed.
   * 
   * If you set ScheduleType to at, make sure that the value of this parameter is at least 30 minutes later than the current point in time.
   * 
   * >Notice: To prevent the broker from repeatedly executing instance upgrade and downgrade tasks, make sure that the interval between two consecutive scheduled scaling tasks is at least 60 minutes.
   * 
   * This parameter is required.
   * 
   * @example
   * 1714467540000
   */
  firstScheduledTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_serverless-cn-vxxxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region where the instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The frequency to execute the scheduled scaling task. This parameter is required only if you set ScheduleType to repeat. Valid values:
   * 
   * *   Daily: The scheduled scaling task is executed every day.
   * 
   * *   Weekly: The scheduled scaling task is executed every week.
   * 
   * @example
   * Weekly
   */
  repeatType?: string;
  /**
   * @remarks
   * The reserved production capacity for scheduled scaling. Unit: MB/s.
   * 
   * >  You must specify a higher value than the instance specification for at least one of ReservedPubFlow and ReservedSubFlow.
   * 
   * This parameter is required.
   * 
   * @example
   * 120
   */
  reservedPubFlow?: number;
  /**
   * @remarks
   * The reserved consumption capacity for scheduled scaling. Unit: MB/s.
   * 
   * >  You must specify a higher value than the instance specification for at least one of ReservedPubFlow and ReservedSubFlow.
   * 
   * This parameter is required.
   * 
   * @example
   * 120
   */
  reservedSubFlow?: number;
  /**
   * @remarks
   * The name of the scheduled scaling rule.
   * 
   * >  The name of the scheduled scaling rule cannot be the same as the names of other rules for the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  ruleName?: string;
  /**
   * @remarks
   * The type of the scheduled scaling task. Valid values:
   * 
   * *   at: The scheduled scaling task is executed only once.
   * *   repeat: The scheduled scaling task is repeatedly executed.
   * 
   * This parameter is required.
   * 
   * @example
   * at
   */
  scheduleType?: string;
  /**
   * @remarks
   * The time zone in Coordinated Universal Time (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * GMT+8
   */
  timeZone?: string;
  /**
   * @remarks
   * The day on which the scheduled scaling task is executed every week. You can specify multiple days.
   */
  weeklyTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      durationMinutes: 'DurationMinutes',
      enable: 'Enable',
      firstScheduledTime: 'FirstScheduledTime',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      repeatType: 'RepeatType',
      reservedPubFlow: 'ReservedPubFlow',
      reservedSubFlow: 'ReservedSubFlow',
      ruleName: 'RuleName',
      scheduleType: 'ScheduleType',
      timeZone: 'TimeZone',
      weeklyTypes: 'WeeklyTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationMinutes: 'number',
      enable: 'boolean',
      firstScheduledTime: 'number',
      instanceId: 'string',
      regionId: 'string',
      repeatType: 'string',
      reservedPubFlow: 'number',
      reservedSubFlow: 'number',
      ruleName: 'string',
      scheduleType: 'string',
      timeZone: 'string',
      weeklyTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.weeklyTypes)) {
      $dara.Model.validateArray(this.weeklyTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduledScalingRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The duration of each scheduled scaling task. Unit: minutes.
   * 
   * >  The value of this parameter must be greater than or equal to 15.
   * 
   * This parameter is required.
   * 
   * @example
   * 60
   */
  durationMinutes?: number;
  /**
   * @remarks
   * Specifies whether to enable the scheduled scaling rule. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The time when the scheduled scaling task is executed.
   * 
   * If you set ScheduleType to at, make sure that the value of this parameter is at least 30 minutes later than the current point in time.
   * 
   * >Notice: To prevent the broker from repeatedly executing instance upgrade and downgrade tasks, make sure that the interval between two consecutive scheduled scaling tasks is at least 60 minutes.
   * 
   * This parameter is required.
   * 
   * @example
   * 1714467540000
   */
  firstScheduledTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_serverless-cn-vxxxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region where the instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The frequency to execute the scheduled scaling task. This parameter is required only if you set ScheduleType to repeat. Valid values:
   * 
   * *   Daily: The scheduled scaling task is executed every day.
   * 
   * *   Weekly: The scheduled scaling task is executed every week.
   * 
   * @example
   * Weekly
   */
  repeatType?: string;
  /**
   * @remarks
   * The reserved production capacity for scheduled scaling. Unit: MB/s.
   * 
   * >  You must specify a higher value than the instance specification for at least one of ReservedPubFlow and ReservedSubFlow.
   * 
   * This parameter is required.
   * 
   * @example
   * 120
   */
  reservedPubFlow?: number;
  /**
   * @remarks
   * The reserved consumption capacity for scheduled scaling. Unit: MB/s.
   * 
   * >  You must specify a higher value than the instance specification for at least one of ReservedPubFlow and ReservedSubFlow.
   * 
   * This parameter is required.
   * 
   * @example
   * 120
   */
  reservedSubFlow?: number;
  /**
   * @remarks
   * The name of the scheduled scaling rule.
   * 
   * >  The name of the scheduled scaling rule cannot be the same as the names of other rules for the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  ruleName?: string;
  /**
   * @remarks
   * The type of the scheduled scaling task. Valid values:
   * 
   * *   at: The scheduled scaling task is executed only once.
   * *   repeat: The scheduled scaling task is repeatedly executed.
   * 
   * This parameter is required.
   * 
   * @example
   * at
   */
  scheduleType?: string;
  /**
   * @remarks
   * The time zone in Coordinated Universal Time (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * GMT+8
   */
  timeZone?: string;
  /**
   * @remarks
   * The day on which the scheduled scaling task is executed every week. You can specify multiple days.
   */
  weeklyTypesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      durationMinutes: 'DurationMinutes',
      enable: 'Enable',
      firstScheduledTime: 'FirstScheduledTime',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      repeatType: 'RepeatType',
      reservedPubFlow: 'ReservedPubFlow',
      reservedSubFlow: 'ReservedSubFlow',
      ruleName: 'RuleName',
      scheduleType: 'ScheduleType',
      timeZone: 'TimeZone',
      weeklyTypesShrink: 'WeeklyTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationMinutes: 'number',
      enable: 'boolean',
      firstScheduledTime: 'number',
      instanceId: 'string',
      regionId: 'string',
      repeatType: 'string',
      reservedPubFlow: 'number',
      reservedSubFlow: 'number',
      ruleName: 'string',
      scheduleType: 'string',
      timeZone: 'string',
      weeklyTypesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduledScalingRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The value 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DB6F1BEA-903B-4FD8-8809-46E7E9CE***
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduledScalingRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateScheduledScalingRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateScheduledScalingRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTopicRequest extends $dara.Model {
  /**
   * @remarks
   * The log cleanup policy that is used for the topic. This parameter is available only when LocalTopic is set to true. Valid values:
   * 
   * *   false: The topic uses the default log cleanup policy.
   * *   true: The topic uses the log compaction policy.
   * 
   * @example
   * false
   */
  compactTopic?: boolean;
  /**
   * @remarks
   * The additional configuration.
   * 
   * *   The value must be in JSON format.
   * *   Set Key to **replications**. This value specifies the number of replicas of the topic. The value must be an integer that ranges from 1 to 3.
   * *   You can configure this parameter only if you set **LocalTopic** to **true** or specify **Open Source Edition (Local Disk)** as the instance edition.****
   * 
   * >  If you specify replications in this parameter, **ReplicationFactor** does not take effect.
   * 
   * @example
   * {"replications": 3}
   * 
   * **if can be null:**
   * true
   */
  config?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_pre-cn-mp919o4v****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of storage that the topic uses. Valid values:
   * 
   * *   false: The topic uses cloud storage.
   * *   true: The topic uses local storage.
   * 
   * @example
   * false
   */
  localTopic?: boolean;
  /**
   * @remarks
   * The minimum number of in-sync replicas (ISRs).
   * 
   * *   This parameter is available only when **LocalTopic** is set to **true**, or the instance is of the **Open Source Edition (Local Disk)**.****
   * *   The value of this parameter must be smaller than the value of ReplicationFactor.
   * *   Valid values: 1 to 3.
   * 
   * @example
   * 1
   * 
   * **if can be null:**
   * true
   */
  minInsyncReplicas?: number;
  /**
   * @remarks
   * The number of partitions in the topic.
   * 
   * *   Valid values: 1 to 360.
   * *   In the ApsaraMQ for Kafka console, you can view the number of partitions that the system recommends based on the specifications of the instance. We recommend that you specify the number that is recommended by the system as the value of this parameter to reduce the risk of data skew.
   * 
   * Default values:
   * 
   * *   ApsaraMQ for Kafka V2 instance: 12
   * *   ApsaraMQ for Kafka V3 instance: 3
   * 
   * @example
   * 12
   */
  partitionNum?: string;
  /**
   * @remarks
   * The region ID of the instance in which you want to create a topic.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The description of the topic.
   * 
   * *   The description can contain only letters, digits, hyphens (-), and underscores (_).
   * *   The description must be 3 to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_topic_test
   */
  remark?: string;
  /**
   * @remarks
   * The number of replicas for the topic.
   * 
   * *   This parameter is available only when **LocalTopic** is set to **true**, or the instance is of the **Open Source Edition (Local Disk)**.****
   * *   Valid values: 1 to 3.
   * 
   * > If you set this parameter to **1**, data loss may occur. Exercise caution when you configure this parameter.
   * 
   * @example
   * 3
   * 
   * **if can be null:**
   * true
   */
  replicationFactor?: number;
  /**
   * @remarks
   * The tags that you want to add to the topic.
   */
  tag?: CreateTopicRequestTag[];
  /**
   * @remarks
   * The topic name.
   * 
   * *   The name can contain only letters, digits, hyphens (-), and underscores (_).
   * *   The name must be 3 to 64 characters in length. If the name that you specify contains more than 64 characters, the system automatically truncates the name.
   * *   After a topic is created, you cannot change the name of the topic.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_topic_test
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      compactTopic: 'CompactTopic',
      config: 'Config',
      instanceId: 'InstanceId',
      localTopic: 'LocalTopic',
      minInsyncReplicas: 'MinInsyncReplicas',
      partitionNum: 'PartitionNum',
      regionId: 'RegionId',
      remark: 'Remark',
      replicationFactor: 'ReplicationFactor',
      tag: 'Tag',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compactTopic: 'boolean',
      config: 'string',
      instanceId: 'string',
      localTopic: 'boolean',
      minInsyncReplicas: 'number',
      partitionNum: 'string',
      regionId: 'string',
      remark: 'string',
      replicationFactor: 'number',
      tag: { 'type': 'array', 'itemType': CreateTopicRequestTag },
      topic: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTopicResponseBody extends $dara.Model {
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
   * The message returned.
   * 
   * @example
   * operation success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9C0F207C-77A6-43E5-991C-9D98510A****
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTopicResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTopicResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateTopicResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAclRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the operation allowed by the access control list (ACL). Valid values:
   * 
   * *   **Write**: data writes.
   * *   **Read**: data reads.
   * *   **Describe**: reads of transaction IDs.
   * *   **IdempotentWrite**: idempotent data writes to clusters.
   * *   **IDEMPOTENT_WRITE**: idempotent data writes to clusters. This value is available only for serverless ApsaraMQ for Kafka instances.
   * *   **DESCRIBE_CONFIGS**: configuration query. This value is available only for serverless ApsaraMQ for Kafka instances.
   * 
   * This parameter is required.
   * 
   * @example
   * Write
   */
  aclOperationType?: string;
  /**
   * @remarks
   * The types of operations allowed by the ACL. Separate multiple operations with commas (,).
   * 
   * Valid values:
   * 
   * *   **Write**: data writes.
   * *   **Read**: data reads.
   * *   **Describe**: reads of transaction IDs.
   * *   **IdempotentWrite**: idempotent data writes to clusters.
   * *   **IDEMPOTENT_WRITE**: idempotent data writes to clusters. This value is available only for serverless ApsaraMQ for Kafka instances.
   * *   **DESCRIBE_CONFIGS**: configuration query. This value is available only for serverless ApsaraMQ for Kafka instances.
   * 
   * >  This parameter is available only for serverless ApsaraMQ for Kafka instances.
   * 
   * @example
   * Write,Read
   */
  aclOperationTypes?: string;
  /**
   * @remarks
   * The authorization method. Valid values:
   * 
   * *   Deny
   * *   ALLOW
   * 
   * >  This parameter is available only for serverless ApsaraMQ for Kafka instances.
   * 
   * @example
   * DENY
   */
  aclPermissionType?: string;
  /**
   * @remarks
   * The name of the resource.
   * 
   * *   The value can be the name of a topic or consumer group.
   * *   You can use an asterisk (\\*) to indicate the names of all topics or consumer groups.
   * 
   * This parameter is required.
   * 
   * @example
   * demo
   */
  aclResourceName?: string;
  /**
   * @remarks
   * The mode that is used to match resources. Valid values:
   * 
   * *   **LITERAL:** full match
   * *   **PREFIXED**: prefix match
   * 
   * This parameter is required.
   * 
   * @example
   * LITERAL
   */
  aclResourcePatternType?: string;
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * *   **Topic**: topic
   * *   **Group**: consumer group
   * *   **Cluster**: cluster
   * *   **TransactionalId**: transactional ID
   * 
   * This parameter is required.
   * 
   * @example
   * Topic
   */
  aclResourceType?: string;
  /**
   * @remarks
   * The IP address of the source.
   * 
   * > 
   * 
   * *   You can specify only a specific IP address or use the asterisk (\\*) wildcard character to specify all IP addresses. CIDR blocks are not supported.
   * 
   * *   This parameter is available only for serverless ApsaraMQ for Kafka instances.
   * 
   * @example
   * *
   */
  host?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_pre-cn-v0h1cng0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the user.
   * 
   * This parameter is required.
   * 
   * @example
   * test12****
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      aclOperationType: 'AclOperationType',
      aclOperationTypes: 'AclOperationTypes',
      aclPermissionType: 'AclPermissionType',
      aclResourceName: 'AclResourceName',
      aclResourcePatternType: 'AclResourcePatternType',
      aclResourceType: 'AclResourceType',
      host: 'Host',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclOperationType: 'string',
      aclOperationTypes: 'string',
      aclPermissionType: 'string',
      aclResourceName: 'string',
      aclResourcePatternType: 'string',
      aclResourceType: 'string',
      host: 'string',
      instanceId: 'string',
      regionId: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAclResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned. The HTTP status code 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * operation success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B0740227-AA9A-4E14-8E9F-36ED665****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAclResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAclResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAclResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConsumerGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the consumer group.
   * 
   * This parameter is required.
   * 
   * @example
   * CID-test
   */
  consumerId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_post-cn-v0h1fgs2****
   */
  instanceId?: string;
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
  static names(): { [key: string]: string } {
    return {
      consumerId: 'ConsumerId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerId: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConsumerGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned. The HTTP status code 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 06084011-E093-46F3-A51F-4B19A8AD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConsumerGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteConsumerGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteConsumerGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceRequest extends $dara.Model {
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
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned. The HTTP status code 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ABA4A7FD-E10F-45C7-9774-A5236015****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSaslUserRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_pre-cn-v0h1cng0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The encryption method. Valid values:
   * 
   * *   SCRAM-SHA-512. This is the default value.
   * *   SCRAM-SHA-256
   * 
   * >  This parameter is available only for serverless ApsaraMQ for Kafka instances.
   * 
   * @example
   * SCRAM-SHA-256
   */
  mechanism?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the Simple Authentication and Security Layer (SASL) user. Valid values:
   * 
   * *   **plain**: a simple mechanism that uses usernames and passwords to verify user identities. ApsaraMQ for Kafka provides an improved PLAIN mechanism that allows you to dynamically add SASL users without the need to restart an instance.
   * *   **SCRAM**: a mechanism that uses usernames and passwords to verify user identities. Compared with the PLAIN mechanism, this mechanism provides better security protection. ApsaraMQ for Kafka uses the SCRAM-SHA-256 algorithm.
   * *   **LDAP**: This value is available only for the SASL users of ApsaraMQ for Confluent instances.
   * 
   * Default value: **plain**.
   * 
   * @example
   * scram
   */
  type?: string;
  /**
   * @remarks
   * The name of the user.
   * 
   * This parameter is required.
   * 
   * @example
   * test***
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      mechanism: 'Mechanism',
      regionId: 'RegionId',
      type: 'Type',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      mechanism: 'string',
      regionId: 'string',
      type: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSaslUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. If the request is successful, 200 is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3CB89F5C-CD97-4C1D-BC7C-FEDEC2F4****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSaslUserResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSaslUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSaslUserResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScheduledScalingRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_serverless-cn-vxxxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region where the instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the scheduled scaling rule.
   * 
   * >  You can delete only rules that are disabled and rules that are scheduled only once and have been executed.
   * 
   * This parameter is required.
   * 
   * @example
   * rule-name-test
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      ruleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScheduledScalingRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The responses code. The value 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABA4A7FD-E10F-45C7-9774-A5236015****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScheduledScalingRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteScheduledScalingRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteScheduledScalingRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTopicRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_post-cn-v0h1fgs2****
   */
  instanceId?: string;
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
   * The name of the topic.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      topic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTopicResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 06084011-E093-46F3-A51F-4B19A8AD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTopicResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTopicResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteTopicResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAclResourceNameRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * LITERAL
   */
  aclResourcePatternType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Topic
   */
  aclResourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * alikafka_post-cn-mp919o4v****
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      aclResourcePatternType: 'AclResourcePatternType',
      aclResourceType: 'AclResourceType',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclResourcePatternType: 'string',
      aclResourceType: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAclResourceNameResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: DescribeAclResourceNameResponseBodyData;
  /**
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @example
   * ABA4A7FD-E10F-45C7-9774-A5236015A***
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeAclResourceNameResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAclResourceNameResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAclResourceNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAclResourceNameResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAclsRequest extends $dara.Model {
  /**
   * @remarks
   * The types of operations allowed by the ACL. Separate multiple operation types with commas (,).
   * - Valid values:
   * - Write
   * - Read
   * - Describe: reads of transactional IDs.
   * - IdempotentWrite: idempotent data writes to clusters.
   * - IDEMPOTENT_WRITE: idempotent data writes to clusters. This value is available only for ApsaraMQ for Kafka V3 instances.
   * - DESCRIBE_CONFIGS: queries of configurations. This value is available only for ApsaraMQ for Kafka V3 instances.
   * > This parameter is available only for ApsaraMQ for Kafka V3 serverless instances.
   * 
   * @example
   * Write
   */
  aclOperationType?: string;
  /**
   * @remarks
   * The authorization method. Valid values:
   * - DENY
   * - ALLOW
   * > This parameter is available only for ApsaraMQ for Kafka V3 serverless instances.
   * 
   * @example
   * DENY
   */
  aclPermissionType?: string;
  /**
   * @remarks
   * The resource name.
   * 
   * *   The value can be the name of a topic or consumer group.
   * *   You can use an asterisk (\\*) to specify the names of all topics or consumer groups.
   * 
   * > You can query the resources on which permissions are granted only after you grant the user the required permissions on all resources.
   * 
   * This parameter is required.
   * 
   * @example
   * demo
   */
  aclResourceName?: string;
  /**
   * @remarks
   * The match mode. Valid values:
   * 
   * *   LITERAL: full-name match
   * *   PREFIXED: prefix match
   * 
   * @example
   * LITERAL
   */
  aclResourcePatternType?: string;
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * *   **Topic**
   * *   **Group**
   * 
   * This parameter is required.
   * 
   * @example
   * Topic
   */
  aclResourceType?: string;
  /**
   * @remarks
   * The source IP address.
   * >-  You can specify only a specific IP address or use the asterisk (*) wildcard character to specify all IP addresses. CIDR blocks are not supported.
   * > - This parameter is available only for ApsaraMQ for Kafka V3 serverless instances.
   * 
   * @example
   * *
   */
  host?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_pre-cn-v0h1cng****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The username.
   * 
   * *   You can use an asterisk (\\*) to specify all users.
   * 
   * > You can use an asterisk (\\*) to query the authorized users only after you grant the required permissions to all users.
   * 
   * This parameter is required.
   * 
   * @example
   * test12****
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      aclOperationType: 'AclOperationType',
      aclPermissionType: 'AclPermissionType',
      aclResourceName: 'AclResourceName',
      aclResourcePatternType: 'AclResourcePatternType',
      aclResourceType: 'AclResourceType',
      host: 'Host',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclOperationType: 'string',
      aclPermissionType: 'string',
      aclResourceName: 'string',
      aclResourcePatternType: 'string',
      aclResourceType: 'string',
      host: 'string',
      instanceId: 'string',
      regionId: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAclsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned. The HTTP status code 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The access control lists (ACLs).
   */
  kafkaAclList?: DescribeAclsResponseBodyKafkaAclList;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 46496E38-881E-4719-A2F3-F3DA6AE****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      kafkaAclList: 'KafkaAclList',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      kafkaAclList: DescribeAclsResponseBodyKafkaAclList,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.kafkaAclList && typeof (this.kafkaAclList as any).validate === 'function') {
      (this.kafkaAclList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAclsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAclsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAclsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSaslUsersRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_pre-cn-v0h1cng0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSaslUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned. The HTTP status code 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9E3B3592-5994-4F65-A61E-E62A77A****
   */
  requestId?: string;
  /**
   * @remarks
   * The Simple Authentication and Security Layer (SASL) users.
   */
  saslUserList?: DescribeSaslUsersResponseBodySaslUserList;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      saslUserList: 'SaslUserList',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      saslUserList: DescribeSaslUsersResponseBodySaslUserList,
      success: 'boolean',
    };
  }

  validate() {
    if(this.saslUserList && typeof (this.saslUserList as any).validate === 'function') {
      (this.saslUserList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSaslUsersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSaslUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSaslUsersResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableAutoGroupCreationRequest extends $dara.Model {
  /**
   * @remarks
   * Specify whether to enable the flexible group creation feature. Valid values:
   * 
   * *   **true**: enables the flexible group creation feature.
   * *   **false**: disabled the flexible group creation feature.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * You can call the [GetInstanceList](https://help.aliyun.com/document_detail/437663.html) operation to query instances.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_post-cn-mp919o4v****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableAutoGroupCreationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned HTTP status code.
   * 
   * If the value **200** is returned, the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A421CCD7-5BC5-4B32-8DD8-64668A8FCB56
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableAutoGroupCreationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableAutoGroupCreationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableAutoGroupCreationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableAutoTopicCreationRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_post-cn-v0h1fgs2****
   */
  instanceId?: string;
  /**
   * @remarks
   * The operation that you want to perform. Valid values:
   * 
   * *   enable: enables the automatic topic creation feature.
   * *   disable: disables the automatic topic creation feature.
   * *   updatePartition: changes the number of partitions in topics that are automatically created.
   * 
   * @example
   * enable
   */
  operate?: string;
  /**
   * @remarks
   * The changed number of partitions in topics that are automatically created.
   * 
   * This parameter takes effect only if you set Operate to updatePartition.
   * 
   * @example
   * 12
   */
  partitionNum?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  updatePartition?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      operate: 'Operate',
      partitionNum: 'PartitionNum',
      regionId: 'RegionId',
      updatePartition: 'UpdatePartition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      operate: 'string',
      partitionNum: 'number',
      regionId: 'string',
      updatePartition: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableAutoTopicCreationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned status code. If the request is successful, 200 is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9E3B3592-5994-4F65-A61E-E62A77A7***
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableAutoTopicCreationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableAutoTopicCreationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableAutoTopicCreationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllInstanceIdListRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the instance. This parameter is reserved.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllInstanceIdListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned. The HTTP status code 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The IDs of instances that are managed by the Alibaba Cloud account in all the regions.
   * 
   * @example
   * [{"cn-shenzhen": ["alikafka_post-cn-7pp2btvo****"],"us-west-1": ["alikafka_pre-cn-i7m2lxid****"],"cn-hangzhou": ["alikafka_pre-cn-i7m2hflj****","alikafka_pre-cn-zvp2hsje****","alikafka_pre-cn-zvp2kvc9****"]}]
   */
  instanceIds?: { [key: string]: any };
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ABA4A7FD-E10F-45C7-9774-A5236015****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceIds: 'InstanceIds',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      instanceIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.instanceIds) {
      $dara.Model.validateMap(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllInstanceIdListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAllInstanceIdListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAllInstanceIdListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllowedIpListRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_post-cn-mp91inkw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllowedIpListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IP address whitelist.
   */
  allowedList?: GetAllowedIpListResponseBodyAllowedList;
  /**
   * @remarks
   * The HTTP status code returned. The HTTP status code 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
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
   * The ID of the request.
   * 
   * @example
   * A421CCD7-5BC5-4B32-8DD8-64668A8FCB56
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowedList: 'AllowedList',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedList: GetAllowedIpListResponseBodyAllowedList,
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.allowedList && typeof (this.allowedList as any).validate === 'function') {
      (this.allowedList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllowedIpListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAllowedIpListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAllowedIpListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoScalingConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_serverless-cn-vxxxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region where the instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoScalingConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The value 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetAutoScalingConfigurationResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B7A39AE5-0B36-4442-A304-E0885265***
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetAutoScalingConfigurationResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoScalingConfigurationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAutoScalingConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAutoScalingConfigurationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerListRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the consumer group. If you do not configure this parameter, all consumer groups are queried.
   * 
   * @example
   * kafka-test
   */
  consumerId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The ID of the instance to which the consumer group belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_post-cn-v0h18sav****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of entries to be returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the instance to which the consumer group belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      consumerId: 'ConsumerId',
      currentPage: 'CurrentPage',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerId: 'string',
      currentPage: 'number',
      instanceId: 'string',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned. The HTTP status code 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The consumer groups.
   */
  consumerList?: GetConsumerListResponseBodyConsumerList;
  /**
   * @remarks
   * The number of the page to return. Pages start from page 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 808F042B-CB9A-4FBC-9009-00E7DDB6****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 12
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      consumerList: 'ConsumerList',
      currentPage: 'CurrentPage',
      message: 'Message',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      consumerList: GetConsumerListResponseBodyConsumerList,
      currentPage: 'number',
      message: 'string',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(this.consumerList && typeof (this.consumerList as any).validate === 'function') {
      (this.consumerList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetConsumerListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetConsumerListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerProgressRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the consumer group.
   * 
   * This parameter is required.
   * 
   * @example
   * kafka-test
   */
  consumerId?: string;
  /**
   * @remarks
   * Specifies whether to hide LastTimestamp. Default value: false. We recommend that you set this parameter to true.
   * 
   * > 
   * 
   * *   If you set this parameter to true, -1 is returned for LastTimestamp. If you set this parameter to false, a specific value is returned for LastTimestamp. This parameter is supported only by topics that use cloud storage on reserved instances.
   * 
   * *   A large amount of data is processed by this operation, which causes performance loss. We recommend that you set this parameter to true to accelerate processing.
   * 
   * @example
   * true
   */
  hideLastTimestamp?: boolean;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_pre-cn-mp919o4v****
   */
  instanceId?: string;
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
  static names(): { [key: string]: string } {
    return {
      consumerId: 'ConsumerId',
      hideLastTimestamp: 'HideLastTimestamp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerId: 'string',
      hideLastTimestamp: 'boolean',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerProgressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned HTTP status code. If the request is successful, 200 is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The consumer progress of the consumer group.
   */
  consumerProgress?: GetConsumerProgressResponseBodyConsumerProgress;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 252820E1-A2E6-45F2-B4C9-1056B8CE****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      consumerProgress: 'ConsumerProgress',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      consumerProgress: GetConsumerProgressResponseBodyConsumerProgress,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.consumerProgress && typeof (this.consumerProgress as any).validate === 'function') {
      (this.consumerProgress as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerProgressResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetConsumerProgressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetConsumerProgressResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceListRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of instances.
   * 
   * @example
   * alikafka_post-cn-mp91gnw0p***
   */
  instanceId?: string[];
  /**
   * @remarks
   * The ID of the order. You can obtain the order ID on the [Orders](https://usercenter2-intl.aliyun.com/order/list?pageIndex=1\\&pageSize=20\\&spm=5176.12818093.top-nav.ditem-ord.36f016d0OQFmJa) page in Alibaba Cloud User Center.
   * 
   * @example
   * 6072673****
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the region where the instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group. You can obtain this ID on the Resource Group page in the Resource Management console.
   * 
   * @example
   * rg-ac***********7q
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The instance version. You can use instance versions to filter different versions of instances. Valid values:
   * 
   * *   v2
   * *   v3
   * *   confluent
   * 
   * @example
   * v3
   */
  series?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: GetInstanceListRequestTag[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      orderId: 'OrderId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      series: 'Series',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: { 'type': 'array', 'itemType': 'string' },
      orderId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      series: 'string',
      tag: { 'type': 'array', 'itemType': GetInstanceListRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.instanceId)) {
      $dara.Model.validateArray(this.instanceId);
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

export class GetInstanceListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInstanceListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetInstanceListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKafkaClientIpRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1716343502000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the consumer group.
   * 
   * >  This parameter is required only if you set Type to byGroup.
   * 
   * @example
   * group_name
   */
  group?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_post-cn-v0h1fgs2****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region where the instance is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1716343501000
   */
  startTime?: number;
  /**
   * @remarks
   * The topic name.
   * 
   * > 
   * 
   * *   This parameter is required only if you set Type to byTopic.
   * 
   * @example
   * topic_name
   */
  topic?: string;
  /**
   * @remarks
   * The query method that you want to use to query the client IP addresses. Valid values:
   * 
   * *   byInstance: queries the IP addresses of the clients that are connected to the instance within a specific period of time.
   * *   byTopic: queries the IP addresses of the clients that are connected to a specific topic on the instance within a specific period of time.
   * *   byGroup: queries the IP addresses of the clients that are connected to a specific group on the instance within a specific period of time.
   * 
   * This parameter is required.
   * 
   * @example
   * byInstance
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      group: 'Group',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      startTime: 'StartTime',
      topic: 'Topic',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      group: 'string',
      instanceId: 'string',
      regionId: 'string',
      startTime: 'number',
      topic: 'string',
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

export class GetKafkaClientIpResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned status code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetKafkaClientIpResponseBodyData;
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
   * The request ID.
   * 
   * @example
   * E57A8862-DF68-4055-8E55-B80CB4****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetKafkaClientIpResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKafkaClientIpResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetKafkaClientIpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetKafkaClientIpResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaTipRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_pre-cn-i7m2wpm5****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region in which the instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaTipResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned. The HTTP status code 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The additional message. This message is typically used to describe API call failures for troubleshooting.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The quota.
   */
  quotaData?: GetQuotaTipResponseBodyQuotaData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0178A3A7-E87B-5E50-A16F-3E62F534****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      quotaData: 'QuotaData',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      quotaData: GetQuotaTipResponseBodyQuotaData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.quotaData && typeof (this.quotaData as any).validate === 'function') {
      (this.quotaData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaTipResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetQuotaTipResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetQuotaTipResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicListRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: 1
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_pre-cn-0pp1954n****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The region ID of the instance to which the topics that you want to query belong.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the topic that you want to query.
   * 
   * @example
   * topic_name
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      instanceId: 'string',
      pageSize: 'string',
      regionId: 'string',
      topic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned. The HTTP status code 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
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
   * The number of entries returned on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C0D3DC5B-5C37-47AD-9F22-1F559880****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The topics.
   */
  topicList?: GetTopicListResponseBodyTopicList;
  /**
   * @remarks
   * The number of topics.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      currentPage: 'CurrentPage',
      message: 'Message',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      topicList: 'TopicList',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      currentPage: 'number',
      message: 'string',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      topicList: GetTopicListResponseBodyTopicList,
      total: 'number',
    };
  }

  validate() {
    if(this.topicList && typeof (this.topicList as any).validate === 'function') {
      (this.topicList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTopicListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTopicListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_pre-cn-v0h15tjm****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the topic.
   * 
   * This parameter is required.
   * 
   * @example
   * normal_topic_9d034262835916103455551be06cc****
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      topic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned. The HTTP status code 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E475C7E2-8C35-46EF-BE7D-5D2A9F5D****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The status information about messages in the topic.
   */
  topicStatus?: GetTopicStatusResponseBodyTopicStatus;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      topicStatus: 'TopicStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      topicStatus: GetTopicStatusResponseBodyTopicStatus,
    };
  }

  validate() {
    if(this.topicStatus && typeof (this.topicStatus as any).validate === 'function') {
      (this.topicStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTopicStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTopicStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicSubscribeStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * You can call the [GetInstanceList](https://help.aliyun.com/document_detail/437663.html) operation to query the list of instances.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_pre-cn-v0h1cng0***
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The topic name.
   * 
   * You can call the [GetTopicList](https://help.aliyun.com/document_detail/437677.html) operation to query the list of topics.
   * 
   * This parameter is required.
   * 
   * @example
   * topic_name
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      topic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicSubscribeStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 06084011-E093-46F3-A51F-4B19A8AD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The subscription details.
   */
  topicSubscribeStatus?: GetTopicSubscribeStatusResponseBodyTopicSubscribeStatus;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      topicSubscribeStatus: 'TopicSubscribeStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      topicSubscribeStatus: GetTopicSubscribeStatusResponseBodyTopicSubscribeStatus,
    };
  }

  validate() {
    if(this.topicSubscribeStatus && typeof (this.topicSubscribeStatus as any).validate === 'function') {
      (this.topicSubscribeStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicSubscribeStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTopicSubscribeStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTopicSubscribeStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The token that determines the start point of the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region in which the resource is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource whose tags you want to query. The resource ID follows the following rules:
   * 
   * *   Instance ID: instanceId
   * *   Topic ID: Kafka_alikafka_instanceId_topic
   * *   Group ID: Kafka_alikafka_instanceId_consumerGroup
   * 
   * For example, if the instance ID is alikafka_post-cn-v0h1fgs2xxxx, the topic name is test-topic, and the group name is test-consumer-group, the resource IDs are alikafka_post-cn-v0h1fgs2xxxx, Kafka_alikafka_post-cn-v0h1fgs2xxxx_test-topic, and Kafka_alikafka_post-cn-v0h1fgs2xxxx_test-consumer-group, respectively.
   * 
   * >  You must configure one of **ResourceId** and **Tag** to query the tags that are bound to a resource. Otherwise, the request fails.
   * 
   * @example
   * alikafka_post-cn-v0h1fgs2****
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource whose tags you want to query. The value is an enumerated value. Valid values:
   * 
   * *   **INSTANCE**
   * *   **TOPIC**
   * *   **CONSUMERGROUP**
   * 
   * This parameter is required.
   * 
   * @example
   * INSTANCE
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
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

export class ListTagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The token that determines the start point of the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DE65F6B7-7566-4802-9007-96F2494A****
   */
  requestId?: string;
  /**
   * @remarks
   * Details of the resource and tags, such as the resource ID, the resource type, tag keys, and tag values.
   */
  tagResources?: ListTagResourcesResponseBodyTagResources;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: ListTagResourcesResponseBodyTagResources,
    };
  }

  validate() {
    if(this.tagResources && typeof (this.tagResources as any).validate === 'function') {
      (this.tagResources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceNameRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_post-cn-v0h1fgs2****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name. Valid values:
   * 
   * *   The name can contain only letters, digits, hyphens (-), and underscores (_).
   * *   The name must be 3 to 64 characters in length. A name that contains more than 64 characters is automatically truncated.
   * 
   * This parameter is required.
   * 
   * @example
   * dev-test
   */
  instanceName?: string;
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
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceNameResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the call is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 06084011-E093-46F3-A51F-4B19A8AD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceNameResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyInstanceNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyInstanceNameResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPartitionNumRequest extends $dara.Model {
  /**
   * @remarks
   * The number of partitions that you want to add to the topic.
   * 
   * *   The value must be an integer that is greater than 0.
   * *   To reduce the risk of data skew, we recommend that you set the value to a multiple of 6.
   * *   The number of total partitions ranges from 1 to 360.
   * 
   * This parameter is required.
   * 
   * @example
   * 6
   */
  addPartitionNum?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_post-cn-0pp1l9z****
   */
  instanceId?: string;
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
   * The topic name.
   * 
   * This parameter is required.
   * 
   * @example
   * TopicPartitionNum
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      addPartitionNum: 'AddPartitionNum',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addPartitionNum: 'number',
      instanceId: 'string',
      regionId: 'string',
      topic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPartitionNumResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned. The HTTP status code 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * operation success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B7A39AE5-0B36-4442-A304-E088526****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPartitionNumResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyPartitionNumResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyPartitionNumResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScheduledScalingRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the scheduled scaling rule. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  If the scaling task is scheduled to execute only once and you want to enable the scheduled scaling rule, make sure that the value of this parameter is at least 30 minutes later than the current point in time.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_serverless-cn-vxxxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region where the instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the scheduled scaling rule.
   * 
   * This parameter is required.
   * 
   * @example
   * contact-id
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      instanceId: 'string',
      regionId: 'string',
      ruleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScheduledScalingRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * The value **200** indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DB6F1BEA-903B-4FD8-8809-46E7E9CE***
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScheduledScalingRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyScheduledScalingRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyScheduledScalingRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTopicRemarkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_post-cn-0pp1l9z****
   */
  instanceId?: string;
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
   * The description of the topic.
   * 
   * @example
   * testremark
   */
  remark?: string;
  /**
   * @remarks
   * The name of the topic.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_post-cn-0pp1l9z8****
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      remark: 'Remark',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      remark: 'string',
      topic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTopicRemarkResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned. The HTTP status code 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DB6F1BEA-903B-4FD8-8809-46E7E9CE***
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTopicRemarkResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyTopicRemarkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyTopicRemarkResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMessageRequest extends $dara.Model {
  /**
   * @remarks
   * The beginning of the time range to query. The value of this parameter is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1672410180000
   */
  beginTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_pre-cn-mp919o4v****
   */
  instanceId?: string;
  /**
   * @remarks
   * The consumer offset of the partition.
   * 
   * @example
   * 100
   */
  offset?: string;
  /**
   * @remarks
   * The partition ID.
   * 
   * @example
   * 0
   */
  partition?: string;
  /**
   * @remarks
   * The query type. Valid values:
   * 
   * *   byOffset: queries messages by offset. If you select this value, you must configure Partition and Offset.
   * *   byTimestamp: queries messages by time. If you select this value, you must configure BeginTime.
   * 
   * This parameter is required.
   * 
   * @example
   * byTimestamp
   */
  queryType?: string;
  /**
   * @remarks
   * The ID of the region where the resource resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The topic name.
   * 
   * This parameter is required.
   * 
   * @example
   * testkafka
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      instanceId: 'InstanceId',
      offset: 'Offset',
      partition: 'Partition',
      queryType: 'QueryType',
      regionId: 'RegionId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      instanceId: 'string',
      offset: 'string',
      partition: 'string',
      queryType: 'string',
      regionId: 'string',
      topic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMessageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned HTTP status code. If the request is successful, 200 is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The messages.
   */
  messageList?: QueryMessageResponseBodyMessageList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABA4A7FD-E10F-45C7-9774-A5236015****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      messageList: 'MessageList',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      messageList: { 'type': 'array', 'itemType': QueryMessageResponseBodyMessageList },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.messageList)) {
      $dara.Model.validateArray(this.messageList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMessageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryMessageResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to immediately release the physical resources of the instance. Valid values:
   * 
   * *   **true**: The physical resources of the instance are immediately released.
   * *   **false**: The physical resources of the instance are retained for a period of time before they are released.
   * 
   * @example
   * false
   */
  forceDeleteInstance?: boolean;
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
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      forceDeleteInstance: 'ForceDeleteInstance',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forceDeleteInstance: 'boolean',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned. The HTTP status code 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ABA4A7FD-E10F-45C7-9774-A5236015A***
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReleaseInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReleaseInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReopenInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_post-cn-mp91inkw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region where the instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReopenInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned HTTP status code. If the request is successful, 200 is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 252820E1-A2E6-45F2-B4C9-1056B8CE****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReopenInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReopenInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReopenInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The initial configurations of the ApsaraMQ for Kafka instance. The values must be valid JSON strings. If you do not specify this parameter, it is left empty.
   * 
   * > - You cannot configure this parameter when you deploy an ApsaraMQ for Confluent instance.
   * > - You cannot configure enable.acl for instances whose versions are earlier than 2.2.0.
   * 
   * The **Config** parameter supports the following parameters:
   * 
   * *   **enable.vpc_sasl_ssl**: specifies whether to enable VPC transmission encryption. Valid values:
   * 
   *     *   **true**: enables VPC transmission encryption. If you enable VPC transmission encryption, you must also enable access control list (ACL).
   *     *   **false**: disables VPC transmission encryption. This is the default value.
   * 
   * *   **enable.acl**: specifies whether to enable ACL. Valid values:
   * 
   *     *   **true**: enables ACL.
   *     *   **false**: disables the ACL feature. This is the default value.
   * 
   * *   **kafka.log.retention.hours**: the maximum message retention period when the disk capacity is sufficient. Unit: hours. Valid values: 24 to 480. Default value: **72**. When the disk usage reaches 85%, the disk capacity is insufficient. In this case, the system deletes the earliest stored messages to ensure service availability.
   * 
   * *   **kafka.message.max.bytes**: the maximum size of a message that can be sent and received by ApsaraMQ for Kafka. Unit: bytes. Valid values: 1048576 to 10485760. Default value: **1048576**. Before you change the maximum message size to a new value, make sure that the new value matches the configurations of the producers and consumers.
   * 
   * @example
   * {"kafka.log.retention.hours":"33"}
   */
  config?: string;
  /**
   * @remarks
   * Specifies whether cross-zone deployment is required. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: true.
   * 
   * @example
   * false
   */
  crossZone?: boolean;
  /**
   * @remarks
   * The deployment mode. If the instance is an ApsaraMQ for Kafka V2 instance, this parameter is required. If the instance is an ApsaraMQ for Kafka V3 instance or an ApsaraMQ for Confluent instance, this parameter is optional. Valid values:
   * 
   * *   **vpc**: deploys the instance in a virtual private cloud (VPC).
   * *   **eip**: deploys the instance over the Internet and in the VPC.
   * 
   * The deployment mode of the ApsaraMQ for Kafka instance must be consistent with the instance type. If the instance is a VPC-connected instance, set this parameter to **vpc**. If the instance is an Internet- and VPC-connected instance, set this parameter to **eip**.
   * 
   * @example
   * vpc
   */
  deployModule?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_post-cn-v0h1fgs2****
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether the instance supports elastic IP addresses (EIPs). Valid values:
   * 
   * *   **true**: supports EIPs and allows access from the Internet and a VPC.
   * *   **false**: does not support EIPs and allows access only from a VPC.
   * 
   * The value of this parameter must match the type of the instance. For example, if the instance allows access only from a VPC, set this parameter to **false**.
   * 
   * @example
   * false
   */
  isEipInner?: boolean;
  /**
   * @remarks
   * Specifies whether to forcibly deploy the instance in the selected zones.
   * 
   * @example
   * false
   */
  isForceSelectedZones?: boolean;
  /**
   * @remarks
   * Specifies whether to set a new username and password. Valid values:
   * 
   * *   **true**: sets a new username and password.
   * *   **false**: does not set a new username or password.
   * 
   * This parameter is available only if you deploy an instance that allows access from the Internet and a VPC.
   * 
   * @example
   * false
   */
  isSetUserAndPassword?: boolean;
  /**
   * @remarks
   * The ID of the key that is used for disk encryption in the region where the instance is deployed. You can obtain the ID of the key in the [Key Management Service (KMS) console](https://kms.console.aliyun.com/?spm=a2c4g.11186623.2.5.336745b8hfiU21) or create a key. For more information, see [Manage CMKs](https://help.aliyun.com/document_detail/181610.html).
   * 
   * If this parameter is configured, disk encryption is enabled for the instance. You cannot disable disk encryption after disk encryption is enabled. When you call this operation, the system checks whether the AliyunServiceRoleForAlikafkaInstanceEncryption service-linked role is created. If the role is not created, the system automatically creates the role. For more information, see [Service-linked roles](https://help.aliyun.com/document_detail/190460.html).
   * 
   * > When you deploy a serverless ApsaraMQ for Kafka V3 instance, you cannot configure this parameter.
   * 
   * @example
   * 0d24xxxx-da7b-4786-b981-9a164dxxxxxx
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * >  If you specify a value for this parameter, make sure that the specified value is unique in the region of the instance.
   * 
   * @example
   * newInstanceName
   */
  name?: string;
  /**
   * @remarks
   * The alert contact.
   * 
   * @example
   * Mr. Wang
   */
  notifier?: string;
  /**
   * @remarks
   * The instance password.
   * 
   * *   This parameter is available only for Internet- and VPC- connected ApsaraMQ for Kafka V2 and V3 instances.
   * *   If the instance is an ApsaraMQ for Confluent instance, this parameter is required. The value of this parameter must be 8 to 32 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. The following special characters are supported: ! @ # $ % ^ & \\* () _ + - =
   * 
   * @example
   * password
   */
  password?: string;
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
   * The security group of the instance.
   * 
   * If you do not specify this parameter, ApsaraMQ for Kafka automatically configures a security group for your instance. If you specify this parameter, you must create a security group in advance. For more information, see [Create a security group](https://help.aliyun.com/document_detail/25468.html).
   * 
   * @example
   * sg-bp13wfx7kz9pko****
   */
  securityGroup?: string;
  /**
   * @remarks
   * The two-dimensional arrays that consist of the candidate set for primary zones and the candidate set for secondary zones. Custom code in the `zone {zone}` format and standard code in the `cn-RegionID-{zone}` format are supported.
   * 
   * *   If you set CrossZone to true and specify Zone H and Zone F as the candidate set for primary zones and Zone K as the candidate set for secondary zones, set this parameter to `[["zoneh","zonef"],["zonek"]]`.
   * 
   * > If you specify multiple zones as the primary or secondary zones, the system deploys the instance in one of the zones without prioritizing them. For example, if you set this parameter to `[["zoneh","zonef"],["zonek"]]`, the primary zone in which the instance is deployed can be Zone H or Zone F, and the secondary zone is Zone K.
   * 
   * *   If you set CrossZone to false and want to deploy the instance in Zone K, set this parameter to `[["zonek"],[]]`. In this case, the value of this parameter must still be two-dimensional arrays, but the array that specifies the candidate for secondary zones is left empty.
   * 
   * @example
   * [[\\"zonel\\"],[\\"zonek\\"]]
   */
  selectedZones?: string;
  /**
   * @remarks
   * The version of the ApsaraMQ for Kafka instance. Valid values:
   * 
   * *   ApsaraMQ for Kafka V2 instances: 2.2.0 and 2.6.2.
   * *   ApsaraMQ for Kafka V3 instances: 3.3.1.
   * *   ApsaraMQ for Confluent instances: 7.4.0.
   * 
   * Default value:
   * 
   * *   ApsaraMQ for Kafka V2 instances: 2.2.0.
   * *   ApsaraMQ for Kafka V3 instances: 3.3.1.
   * *   ApsaraMQ for Confluent instances: 7.4.0.
   * 
   * @example
   * ApsaraMQ for Kafka V2 instances: 2.2.0
   * ApsaraMQ for Kafka V3 instances: 3.3.1
   * ApsaraMQ for Confluent instances: 7.4.0
   */
  serviceVersion?: string;
  /**
   * @remarks
   * The mobile phone number of the alert contact.
   * 
   * @example
   * 1581234****
   */
  userPhoneNum?: string;
  /**
   * @remarks
   * The instance username.
   * 
   * *   This parameter is available only for Internet- and VPC- connected ApsaraMQ for Kafka V2 and V3 instances.
   * *   If the instance is an ApsaraMQ for Confluent instance, set this parameter to root or leave this parameter empty.
   * 
   * Default value for ApsaraMQ for Kafka V2 and V3 instances: username. Default value for ApsaraMQ for Confluent instances: root.
   * 
   * @example
   * username
   */
  username?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which you want to connect the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp1j3sg5979fstnpl****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The IDs of the vSwitches with which the instance is associated. If the instance is an ApsaraMQ for Kafka V2 or V3 instance, this parameter is required. If the instance is an ApsaraMQ for Confluent instance, you must configure one of VSwitchIds and VSwitchId. If you configure both of the parameters, the value of VSwitchIds takes effect.
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) in which you want to deploy the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1r4eg3yrxmygv****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the zone where you want to deploy the ApsaraMQ for Kafka instance.
   * 
   * *   The zone ID of the ApsaraMQ for Kafka instance must be the same as that of the vSwitch.
   * *   The value must be in the zoneX or Region ID-X format. Examples: zonea and cn-hangzhou-k.
   * 
   * >  If resources in the specified zone is insufficient, the instance may be deployed in another zone.
   * 
   * @example
   * cn-hangzhou-k
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      crossZone: 'CrossZone',
      deployModule: 'DeployModule',
      instanceId: 'InstanceId',
      isEipInner: 'IsEipInner',
      isForceSelectedZones: 'IsForceSelectedZones',
      isSetUserAndPassword: 'IsSetUserAndPassword',
      KMSKeyId: 'KMSKeyId',
      name: 'Name',
      notifier: 'Notifier',
      password: 'Password',
      regionId: 'RegionId',
      securityGroup: 'SecurityGroup',
      selectedZones: 'SelectedZones',
      serviceVersion: 'ServiceVersion',
      userPhoneNum: 'UserPhoneNum',
      username: 'Username',
      vSwitchId: 'VSwitchId',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      crossZone: 'boolean',
      deployModule: 'string',
      instanceId: 'string',
      isEipInner: 'boolean',
      isForceSelectedZones: 'boolean',
      isSetUserAndPassword: 'boolean',
      KMSKeyId: 'string',
      name: 'string',
      notifier: 'string',
      password: 'string',
      regionId: 'string',
      securityGroup: 'string',
      selectedZones: 'string',
      serviceVersion: 'string',
      userPhoneNum: 'string',
      username: 'string',
      vSwitchId: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
      zoneId: 'string',
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

export class StartInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned. The HTTP status code 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ABA4A7FD-E10F-45C7-9774-A5236015****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_post-cn-v0h1fgs2****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region where the instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned status code. If the request is successful, 200 is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 17D425C2-4EA3-4AB8-928D-E10511ECF***
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Message Queue for Apache RocketMQ instance which contains the resource to which you want to attach tags.
   * 
   * @example
   * alikafka_post-cn-v0h1fgs2****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region in which the resource is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_post-cn-v0h1fgs2****
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resources. The value is an enumerated value. Valid values:
   * 
   * *   **INSTANCE**
   * *   **TOPIC**
   * *   **CONSUMERGROUP**
   * 
   * >  The value of this parameter is not case-sensitive.
   * 
   * This parameter is required.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags.
   * 
   * This parameter is required.
   */
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
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

export class TagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C46FF5A8-C5F0-4024-8262-B16B6392****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TagResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to detach all tags from the resource. This parameter only takes effect when the TagKey.N parameter is not configured. Default value: **false**.
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * The ID of the region in which the resource is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IDs of the resources from which you want to detach tags.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_post-cn-v0h1fgs2****
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resources. Valid values:
   * 
   * *   **INSTANCE**
   * *   **TOPIC**
   * *   **CONSUMERGROUP**
   * 
   * >  The value of this parameter is not case-sensitive.
   * 
   * This parameter is required.
   * 
   * @example
   * INSTANCE
   */
  resourceType?: string;
  /**
   * @remarks
   * The key of the resource tag.
   * 
   * @example
   * FinanceDept
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tagKey)) {
      $dara.Model.validateArray(this.tagKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C46FF5A8-C5F0-4024-8262-B16B6392****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UntagResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAllowedIpRequest extends $dara.Model {
  /**
   * @remarks
   * The IP addresses that you want to manage. You can specify a CIDR block. Example: **192.168.0.0/16**.
   * 
   * *   If the **UpdateType** parameter is set to **add**, specify one or more IP addresses for this parameter. Separate multiple IP addresses with commas (,).
   * *   If the **UpdateType** parameter is set to **delete**, specify only one IP address.
   * *   Exercise caution when you delete IP addresses.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.0.0.0/0
   */
  allowedListIp?: string;
  /**
   * @remarks
   * The type of the whitelist. Valid values:
   * 
   * *   **vpc**: a whitelist for access from a VPC.
   * *   **internet**: a whitelist for access from the Internet.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc
   */
  allowedListType?: string;
  /**
   * @remarks
   * The description of the whitelist.
   * 
   * @example
   * tf-testAccEcsImageConfigBasic3549descriptionChange
   */
  description?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_pre-cn-0pp1cng20***
   */
  instanceId?: string;
  /**
   * @remarks
   * The port range. Valid values:
   * 
   * *   **9092/9092**: Messages are transmitted in a virtual private cloud (VPC) by using the PLAINTEXT protocol.
   * *   **9093/9093**: Messages are transmitted over the Internet by using the SASL_SSL protocol.
   * *   **9094/9094**: Messages are transmitted in a VPC by using the SASL_PLAINTEXT protocol.
   * *   **9095/9095**: Messages are transmitted in a VPC by using the SASL_SSL protocol.
   * 
   * This parameter must correspond to **AllowdedListType**.
   * 
   * This parameter is required.
   * 
   * @example
   * 9092/9092
   */
  portRange?: string;
  /**
   * @remarks
   * The ID of the region where the instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of configuration change. Valid values:
   * 
   * *   **add**
   * *   **delete**
   * 
   * This parameter is required.
   * 
   * @example
   * add
   */
  updateType?: string;
  static names(): { [key: string]: string } {
    return {
      allowedListIp: 'AllowedListIp',
      allowedListType: 'AllowedListType',
      description: 'Description',
      instanceId: 'InstanceId',
      portRange: 'PortRange',
      regionId: 'RegionId',
      updateType: 'UpdateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedListIp: 'string',
      allowedListType: 'string',
      description: 'string',
      instanceId: 'string',
      portRange: 'string',
      regionId: 'string',
      updateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAllowedIpResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code that is returned. The HTTP status code 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
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
   * The ID of the request.
   * 
   * @example
   * 17D425C2-4EA3-4AB8-928D-E10511ECF***
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAllowedIpResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAllowedIpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateAllowedIpResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConsumerOffsetRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the consumer group.
   * 
   * *   The name can contain letters, digits, hyphens (-), and underscores (_).
   * *   The name must be **3 to 64** characters in length. If a name contains more than **64** characters, the name is automatically truncated.
   * *   The name of a consumer group cannot be changed after the consumer group is created.
   * 
   * This parameter is required.
   * 
   * @example
   * kafka-test
   */
  consumerId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_post-cn-mp91inkw****
   */
  instanceId?: string;
  /**
   * @remarks
   * If you set resetType to offset, you can use this parameter to reset the consumer offset of each partition of a specific topic in the consumer group.
   * 
   * **if can be null:**
   * true
   */
  offsets?: UpdateConsumerOffsetRequestOffsets[];
  /**
   * @remarks
   * The region ID of the instance to which the consumer group belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The method that is used to reset the consumer offsets of the subscribed topics of a consumer group. Valid values:
   * 
   * *   **timestamp** (default)
   * *   **offset**
   * 
   * @example
   * timestamp
   */
  resetType?: string;
  /**
   * @remarks
   * The point in time when message consumption starts. The value of this parameter is a UNIX timestamp in milliseconds. The value of this parameter must be **less than 0** or **within the retention period of the consumer offset**. This parameter takes effect only if you set resetType to timestamp.
   * 
   * *   If you want to reset the consumer offset to the latest offset, set this parameter to -1.
   * *   If you want to reset the consumer offset to the earliest offset, set this parameter to -2.
   * 
   * @example
   * -1
   */
  time?: string;
  /**
   * @remarks
   * The topic name.
   * 
   * *   The name can contain letters, digits, underscores (_), and hyphens (-).
   * *   The name must be **3 to 64** characters in length. If a name contains more than **64** characters, the name is automatically truncated.
   * *   The name of a topic cannot be changed after the topic is created.
   * 
   * **If you want to reset the consumer offsets of all topics to which the consumer subscribes, specify an empty string.**
   * 
   * This parameter is required.
   * 
   * @example
   * topic_name
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      consumerId: 'ConsumerId',
      instanceId: 'InstanceId',
      offsets: 'Offsets',
      regionId: 'RegionId',
      resetType: 'ResetType',
      time: 'Time',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerId: 'string',
      instanceId: 'string',
      offsets: { 'type': 'array', 'itemType': UpdateConsumerOffsetRequestOffsets },
      regionId: 'string',
      resetType: 'string',
      time: 'string',
      topic: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.offsets)) {
      $dara.Model.validateArray(this.offsets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConsumerOffsetShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the consumer group.
   * 
   * *   The name can contain letters, digits, hyphens (-), and underscores (_).
   * *   The name must be **3 to 64** characters in length. If a name contains more than **64** characters, the name is automatically truncated.
   * *   The name of a consumer group cannot be changed after the consumer group is created.
   * 
   * This parameter is required.
   * 
   * @example
   * kafka-test
   */
  consumerId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_post-cn-mp91inkw****
   */
  instanceId?: string;
  /**
   * @remarks
   * If you set resetType to offset, you can use this parameter to reset the consumer offset of each partition of a specific topic in the consumer group.
   * 
   * **if can be null:**
   * true
   */
  offsetsShrink?: string;
  /**
   * @remarks
   * The region ID of the instance to which the consumer group belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The method that is used to reset the consumer offsets of the subscribed topics of a consumer group. Valid values:
   * 
   * *   **timestamp** (default)
   * *   **offset**
   * 
   * @example
   * timestamp
   */
  resetType?: string;
  /**
   * @remarks
   * The point in time when message consumption starts. The value of this parameter is a UNIX timestamp in milliseconds. The value of this parameter must be **less than 0** or **within the retention period of the consumer offset**. This parameter takes effect only if you set resetType to timestamp.
   * 
   * *   If you want to reset the consumer offset to the latest offset, set this parameter to -1.
   * *   If you want to reset the consumer offset to the earliest offset, set this parameter to -2.
   * 
   * @example
   * -1
   */
  time?: string;
  /**
   * @remarks
   * The topic name.
   * 
   * *   The name can contain letters, digits, underscores (_), and hyphens (-).
   * *   The name must be **3 to 64** characters in length. If a name contains more than **64** characters, the name is automatically truncated.
   * *   The name of a topic cannot be changed after the topic is created.
   * 
   * **If you want to reset the consumer offsets of all topics to which the consumer subscribes, specify an empty string.**
   * 
   * This parameter is required.
   * 
   * @example
   * topic_name
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      consumerId: 'ConsumerId',
      instanceId: 'InstanceId',
      offsetsShrink: 'Offsets',
      regionId: 'RegionId',
      resetType: 'ResetType',
      time: 'Time',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerId: 'string',
      instanceId: 'string',
      offsetsShrink: 'string',
      regionId: 'string',
      resetType: 'string',
      time: 'string',
      topic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConsumerOffsetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code that is returned. The status code **200** indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 56729737-C428-4E1B-AC68-7A8C2D5****
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConsumerOffsetResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateConsumerOffsetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateConsumerOffsetResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The configurations that you want to update for the ApsaraMQ for Kafka instance. The value must be a valid JSON string.
   * 
   * This parameter is required.
   * 
   * @example
   * {"kafka.log.retention.hours":"33"}
   */
  config?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_post-cn-v0h1fgs2****
   */
  instanceId?: string;
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
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the call is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4B6D821D-7F67-4CAA-9E13-A5A997C35***
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateInstanceConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateInstanceConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTopicConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The key of the topic configuration.
   * 
   * *   For reserved instances, you can modify only the configurations of the topics that use local storage.
   * *   For serverless instances, you can modify the configurations of all topics.
   * *   Reserved instances whose topics use local storage support the following keys: retention.ms, max.message.bytes, replications, message.timestamp.type, and message.timestamp.difference.max.ms.``
   * *   Serverless instances support the following keys: retention.hours, max.message.bytes, message.timestamp.type, message.timestamp.difference.max.ms.
   * 
   * This parameter is required.
   * 
   * @example
   * replications
   */
  config?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_post-cn-v0h1fgs2****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region where the instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The topic name.
   * 
   * This parameter is required.
   * 
   * @example
   * dqc_test2
   */
  topic?: string;
  /**
   * @remarks
   * The value of the topic configuration.
   * 
   * *   Serverless instances support the following values:
   * 
   *     *   `retention.hours`: the message retention period. Value type: string. Valid values: 24 to 8760.
   *     *   `max.message.bytes`: the maximum size of a sent message. Value type: string. Valid values: 1048576 to 10485760.
   *     *   `message.timestamp.type`: the timestamp type of a message. Valid values: CreateTime and LogAppendTime. The value CreateTime specifies the timestamp that is specified by the producer when the message is sent. The value LogAppendTime specifies the time when the broker appends the message to its log. If you do not specify this parameter, the time when the message is created on the client is used.
   *     *   `message.timestamp.difference.max.ms`: the maximum positive or negative difference allowed between the timestamp when the broker receives a message and the timestamp specified in the message. If you set message.timestamp.type to CreateTime, **a message is rejected** if the difference in timestamp exceeds the threshold. If you set message.timestamp.type to LogAppendTime, this configuration does not take effect.
   * 
   * *   Reserved instances support the following values:
   * 
   *     *   `retention.ms`: the message retention period. Value type: string. Valid values: 3600000 to 31536000000.
   *     *   `max.message.bytes`: the maximum size of a sent message. Value type: string. Valid values: 1048576 to 10485760.
   *     *   `replications`: the number of replicas. Value type: string. Valid values: 1 to 3.
   *     *   `message.timestamp.type`: the timestamp type of a message. Valid values: CreateTime and LogAppendTime. The value CreateTime specifies the timestamp that is specified by the producer when the message is sent. The value LogAppendTime specifies the time when the broker appends the message to its log. If you do not specify this parameter, the time when the message is created on the client is used.
   *     *   `message.timestamp.difference.max.ms`: the maximum positive or negative difference allowed between the timestamp when the broker receives a message and the timestamp specified in the message. If you set message.timestamp.type to CreateTime, **a message is rejected** if the difference in timestamp exceeds the threshold. If you set message.timestamp.type to LogAppendTime, this configuration does not take effect.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      topic: 'Topic',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      instanceId: 'string',
      regionId: 'string',
      topic: 'string',
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

export class UpdateTopicConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. If the request is successful, 200 is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * []
   */
  data?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0178A3A7-E87B-5E50-A16F-3E62F534****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTopicConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateTopicConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateTopicConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeInstanceVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_post-cn-v0h1fgs2****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region where the instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The major version to be upgraded to. Valid values:
   * 
   * *   **0.10.2**
   * *   **2.2.0**
   * 
   * If you set this parameter to the current major version, the system upgrades the instance to the latest minor version.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.10.2
   */
  targetVersion?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      targetVersion: 'TargetVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      targetVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeInstanceVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code that is returned. The HTTP status code 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ABA4A7FD-E10F-45C7-9774-A5236015***
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeInstanceVersionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpgradeInstanceVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpgradeInstanceVersionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradePostPayOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The disk size. Unit: GB.
   * 
   * *   The disk size that you specify must be greater than or equal to the current disk size of the instance.
   * *   For information about the valid values of this parameter, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * >  If the instance is a serverless ApsaraMQ for Kafka instance, you do not need to configure this parameter.
   * 
   * @example
   * 500
   */
  diskSize?: number;
  /**
   * @remarks
   * The maximum Internet traffic of the instance.
   * 
   * *   The Internet traffic that you specify must be greater than or equal to the current Internet traffic of the instance.
   * *   For information about the valid values of this parameter, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > 
   * 
   * *   If you set **EipModel** to **true**, set **EipMax** to a value that is greater than 0.
   * 
   * *   If you set **EipModel** to **false**, set **EipMax** to **0**.
   * 
   * *   If the instance is a serverless ApsaraMQ for Kafka instance, you do not need to configure this parameter.
   * 
   * @example
   * 0
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
   * false
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
   * The maximum traffic of the instance. We recommend that you do not configure this parameter.
   * 
   * *   The maximum traffic that you specify must be greater than or equal to the current maximum traffic of the instance.
   * *   You must configure at least one of IoMax and IoMaxSpec. If you configure both parameters, the value of IoMaxSpec takes effect. We recommend that you configure only IoMaxSpec.
   * *   For information about the valid values of this parameter, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * >  If the instance is a serverless ApsaraMQ for Kafka instance, you do not need to configure this parameter.
   * 
   * @example
   * 60
   */
  ioMax?: number;
  /**
   * @remarks
   * The traffic specification of the instance. We recommend that you configure this parameter.
   * 
   * *   The traffic specification that you specify must be greater than or equal to the current traffic specification of the instance.
   * *   You must configure at least one of IoMax and IoMaxSpec. If you configure both parameters, the value of IoMaxSpec takes effect. We recommend that you configure only IoMaxSpec.
   * *   For information about the valid values of this parameter, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * >  If the instance is a serverless ApsaraMQ for Kafka instance, you do not need to configure this parameter.
   * 
   * @example
   * alikafka.hw.6xlarge
   */
  ioMaxSpec?: string;
  /**
   * @remarks
   * The number of partitions. We recommend that you configure this parameter.
   * 
   * *   You must configure one of PartitionNum and TopicQuota. We recommend that you configure only PartitionNum.
   * *   If you configure PartitionNum and TopicQuota at the same time, the system verifies whether the price of the partitions equals the price of the topics based on the previous topic-based selling mode. If the price of the partitions does not equal the price of the topics, an error is returned. If the price of the partitions equals the price of the topics, the instance is purchased based on the partition number.
   * *   For information about the valid values of this parameter, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * >  If the instance is a serverless ApsaraMQ for Kafka instance, you do not need to configure this parameter.
   * 
   * @example
   * 80
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
   * The parameters that are configured for the serverless instance. These parameters are required only when you create a serverless instance.
   */
  serverlessConfig?: UpgradePostPayOrderRequestServerlessConfig;
  /**
   * @remarks
   * The instance edition.
   * 
   * Valid values for this parameter if you set PaidType to 1:
   * 
   * *   normal: Standard Edition (High Write)
   * *   professional: Professional Edition (High Write)
   * *   professionalForHighRead: Professional Edition (High Read)
   * 
   * Valid values for this parameter if you set PaidType to 3:
   * 
   * *   normal: Serverless Standard Edition
   * 
   * For more information, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * @example
   * professional
   */
  specType?: string;
  /**
   * @remarks
   * The number of topics. We recommend that you do not configure this parameter.
   * 
   * *   You must configure one of PartitionNum and TopicQuota. We recommend that you configure only PartitionNum.
   * *   If you configure PartitionNum and TopicQuota at the same time, the system verifies whether the price of the partitions equals the price of the topics based on the previous topic-based selling mode. If the price of the partitions does not equal the price of the topics, an error is returned. If the price of the partitions equals the price of the topics, the instance is purchased based on the partition number.
   * *   The default value of TopicQuota varies based on the value of IoMaxSpec. If the number of topics that you use exceeds the default value, you are charged additional fees.
   * *   For information about the valid values of this parameter, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * >  If the instance is a serverless ApsaraMQ for Kafka instance, you do not need to configure this parameter.
   * 
   * @example
   * 80
   */
  topicQuota?: number;
  static names(): { [key: string]: string } {
    return {
      diskSize: 'DiskSize',
      eipMax: 'EipMax',
      eipModel: 'EipModel',
      instanceId: 'InstanceId',
      ioMax: 'IoMax',
      ioMaxSpec: 'IoMaxSpec',
      partitionNum: 'PartitionNum',
      regionId: 'RegionId',
      serverlessConfig: 'ServerlessConfig',
      specType: 'SpecType',
      topicQuota: 'TopicQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskSize: 'number',
      eipMax: 'number',
      eipModel: 'boolean',
      instanceId: 'string',
      ioMax: 'number',
      ioMaxSpec: 'string',
      partitionNum: 'number',
      regionId: 'string',
      serverlessConfig: UpgradePostPayOrderRequestServerlessConfig,
      specType: 'string',
      topicQuota: 'number',
    };
  }

  validate() {
    if(this.serverlessConfig && typeof (this.serverlessConfig as any).validate === 'function') {
      (this.serverlessConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradePostPayOrderShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The disk size. Unit: GB.
   * 
   * *   The disk size that you specify must be greater than or equal to the current disk size of the instance.
   * *   For information about the valid values of this parameter, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * >  If the instance is a serverless ApsaraMQ for Kafka instance, you do not need to configure this parameter.
   * 
   * @example
   * 500
   */
  diskSize?: number;
  /**
   * @remarks
   * The maximum Internet traffic of the instance.
   * 
   * *   The Internet traffic that you specify must be greater than or equal to the current Internet traffic of the instance.
   * *   For information about the valid values of this parameter, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > 
   * 
   * *   If you set **EipModel** to **true**, set **EipMax** to a value that is greater than 0.
   * 
   * *   If you set **EipModel** to **false**, set **EipMax** to **0**.
   * 
   * *   If the instance is a serverless ApsaraMQ for Kafka instance, you do not need to configure this parameter.
   * 
   * @example
   * 0
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
   * false
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
   * The maximum traffic of the instance. We recommend that you do not configure this parameter.
   * 
   * *   The maximum traffic that you specify must be greater than or equal to the current maximum traffic of the instance.
   * *   You must configure at least one of IoMax and IoMaxSpec. If you configure both parameters, the value of IoMaxSpec takes effect. We recommend that you configure only IoMaxSpec.
   * *   For information about the valid values of this parameter, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * >  If the instance is a serverless ApsaraMQ for Kafka instance, you do not need to configure this parameter.
   * 
   * @example
   * 60
   */
  ioMax?: number;
  /**
   * @remarks
   * The traffic specification of the instance. We recommend that you configure this parameter.
   * 
   * *   The traffic specification that you specify must be greater than or equal to the current traffic specification of the instance.
   * *   You must configure at least one of IoMax and IoMaxSpec. If you configure both parameters, the value of IoMaxSpec takes effect. We recommend that you configure only IoMaxSpec.
   * *   For information about the valid values of this parameter, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * >  If the instance is a serverless ApsaraMQ for Kafka instance, you do not need to configure this parameter.
   * 
   * @example
   * alikafka.hw.6xlarge
   */
  ioMaxSpec?: string;
  /**
   * @remarks
   * The number of partitions. We recommend that you configure this parameter.
   * 
   * *   You must configure one of PartitionNum and TopicQuota. We recommend that you configure only PartitionNum.
   * *   If you configure PartitionNum and TopicQuota at the same time, the system verifies whether the price of the partitions equals the price of the topics based on the previous topic-based selling mode. If the price of the partitions does not equal the price of the topics, an error is returned. If the price of the partitions equals the price of the topics, the instance is purchased based on the partition number.
   * *   For information about the valid values of this parameter, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * >  If the instance is a serverless ApsaraMQ for Kafka instance, you do not need to configure this parameter.
   * 
   * @example
   * 80
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
   * The parameters that are configured for the serverless instance. These parameters are required only when you create a serverless instance.
   */
  serverlessConfigShrink?: string;
  /**
   * @remarks
   * The instance edition.
   * 
   * Valid values for this parameter if you set PaidType to 1:
   * 
   * *   normal: Standard Edition (High Write)
   * *   professional: Professional Edition (High Write)
   * *   professionalForHighRead: Professional Edition (High Read)
   * 
   * Valid values for this parameter if you set PaidType to 3:
   * 
   * *   normal: Serverless Standard Edition
   * 
   * For more information, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * @example
   * professional
   */
  specType?: string;
  /**
   * @remarks
   * The number of topics. We recommend that you do not configure this parameter.
   * 
   * *   You must configure one of PartitionNum and TopicQuota. We recommend that you configure only PartitionNum.
   * *   If you configure PartitionNum and TopicQuota at the same time, the system verifies whether the price of the partitions equals the price of the topics based on the previous topic-based selling mode. If the price of the partitions does not equal the price of the topics, an error is returned. If the price of the partitions equals the price of the topics, the instance is purchased based on the partition number.
   * *   The default value of TopicQuota varies based on the value of IoMaxSpec. If the number of topics that you use exceeds the default value, you are charged additional fees.
   * *   For information about the valid values of this parameter, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * >  If the instance is a serverless ApsaraMQ for Kafka instance, you do not need to configure this parameter.
   * 
   * @example
   * 80
   */
  topicQuota?: number;
  static names(): { [key: string]: string } {
    return {
      diskSize: 'DiskSize',
      eipMax: 'EipMax',
      eipModel: 'EipModel',
      instanceId: 'InstanceId',
      ioMax: 'IoMax',
      ioMaxSpec: 'IoMaxSpec',
      partitionNum: 'PartitionNum',
      regionId: 'RegionId',
      serverlessConfigShrink: 'ServerlessConfig',
      specType: 'SpecType',
      topicQuota: 'TopicQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskSize: 'number',
      eipMax: 'number',
      eipModel: 'boolean',
      instanceId: 'string',
      ioMax: 'number',
      ioMaxSpec: 'string',
      partitionNum: 'number',
      regionId: 'string',
      serverlessConfigShrink: 'string',
      specType: 'string',
      topicQuota: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradePostPayOrderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned. The HTTP status code 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
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
   * The ID of the request.
   * 
   * @example
   * ABA4A7FD-E10F-45C7-9774-A5236015A***
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradePostPayOrderResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpgradePostPayOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpgradePostPayOrderResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
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

export class UpgradePrePayOrderShrinkRequest extends $dara.Model {
  confluentConfigShrink?: string;
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
      confluentConfigShrink: 'ConfluentConfig',
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
      confluentConfigShrink: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradePrePayOrderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned. The HTTP status code 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * operation success.
   */
  message?: string;
  orderId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ABA4A7FD-E10F-45C7-9774-A5236015***
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      orderId: 'OrderId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      orderId: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradePrePayOrderResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpgradePrePayOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpgradePrePayOrderResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("alikafka", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * Changes the resource group of an ApsaraMQ for Kafka instance.
   * 
   * @param request - ChangeResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: ChangeResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<ChangeResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeResourceGroup",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new ChangeResourceGroupResponse({}));
    } else {
      return $dara.cast<ChangeResourceGroupResponse>(await this.execute(params, req, runtime), new ChangeResourceGroupResponse({}));
    }

  }

  /**
   * Changes the resource group of an ApsaraMQ for Kafka instance.
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * Changes the billing method of a Message Queue for Apache Kafka instance from pay-as-you-go to subscription.
   * 
   * @param request - ConvertPostPayOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConvertPostPayOrderResponse
   */
  async convertPostPayOrderWithOptions(request: ConvertPostPayOrderRequest, runtime: $dara.RuntimeOptions): Promise<ConvertPostPayOrderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.paidType)) {
      query["PaidType"] = request.paidType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConvertPostPayOrder",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ConvertPostPayOrderResponse>(await this.callApi(params, req, runtime), new ConvertPostPayOrderResponse({}));
    } else {
      return $dara.cast<ConvertPostPayOrderResponse>(await this.execute(params, req, runtime), new ConvertPostPayOrderResponse({}));
    }

  }

  /**
   * Changes the billing method of a Message Queue for Apache Kafka instance from pay-as-you-go to subscription.
   * 
   * @param request - ConvertPostPayOrderRequest
   * @returns ConvertPostPayOrderResponse
   */
  async convertPostPayOrder(request: ConvertPostPayOrderRequest): Promise<ConvertPostPayOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.convertPostPayOrderWithOptions(request, runtime);
  }

  /**
   * Creates an access control list (ACL).
   * 
   * @param request - CreateAclRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAclResponse
   */
  async createAclWithOptions(request: CreateAclRequest, runtime: $dara.RuntimeOptions): Promise<CreateAclResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclOperationType)) {
      query["AclOperationType"] = request.aclOperationType;
    }

    if (!$dara.isNull(request.aclOperationTypes)) {
      query["AclOperationTypes"] = request.aclOperationTypes;
    }

    if (!$dara.isNull(request.aclPermissionType)) {
      query["AclPermissionType"] = request.aclPermissionType;
    }

    if (!$dara.isNull(request.aclResourceName)) {
      query["AclResourceName"] = request.aclResourceName;
    }

    if (!$dara.isNull(request.aclResourcePatternType)) {
      query["AclResourcePatternType"] = request.aclResourcePatternType;
    }

    if (!$dara.isNull(request.aclResourceType)) {
      query["AclResourceType"] = request.aclResourceType;
    }

    if (!$dara.isNull(request.host)) {
      query["Host"] = request.host;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAcl",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateAclResponse>(await this.callApi(params, req, runtime), new CreateAclResponse({}));
    } else {
      return $dara.cast<CreateAclResponse>(await this.execute(params, req, runtime), new CreateAclResponse({}));
    }

  }

  /**
   * Creates an access control list (ACL).
   * 
   * @param request - CreateAclRequest
   * @returns CreateAclResponse
   */
  async createAcl(request: CreateAclRequest): Promise<CreateAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAclWithOptions(request, runtime);
  }

  /**
   * Creates a consumer group.
   * 
   * @param request - CreateConsumerGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateConsumerGroupResponse
   */
  async createConsumerGroupWithOptions(request: CreateConsumerGroupRequest, runtime: $dara.RuntimeOptions): Promise<CreateConsumerGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consumerId)) {
      query["ConsumerId"] = request.consumerId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateConsumerGroup",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateConsumerGroupResponse>(await this.callApi(params, req, runtime), new CreateConsumerGroupResponse({}));
    } else {
      return $dara.cast<CreateConsumerGroupResponse>(await this.execute(params, req, runtime), new CreateConsumerGroupResponse({}));
    }

  }

  /**
   * Creates a consumer group.
   * 
   * @param request - CreateConsumerGroupRequest
   * @returns CreateConsumerGroupResponse
   */
  async createConsumerGroup(request: CreateConsumerGroupRequest): Promise<CreateConsumerGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createConsumerGroupWithOptions(request, runtime);
  }

  /**
   * 创建后付费实例。
   * 
   * @param tmpReq - CreatePostPayInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePostPayInstanceResponse
   */
  async createPostPayInstanceWithOptions(tmpReq: CreatePostPayInstanceRequest, runtime: $dara.RuntimeOptions): Promise<CreatePostPayInstanceResponse> {
    tmpReq.validate();
    let request = new CreatePostPayInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.serverlessConfig)) {
      request.serverlessConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.serverlessConfig, "ServerlessConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.deployType)) {
      query["DeployType"] = request.deployType;
    }

    if (!$dara.isNull(request.diskSize)) {
      query["DiskSize"] = request.diskSize;
    }

    if (!$dara.isNull(request.diskType)) {
      query["DiskType"] = request.diskType;
    }

    if (!$dara.isNull(request.eipMax)) {
      query["EipMax"] = request.eipMax;
    }

    if (!$dara.isNull(request.ioMaxSpec)) {
      query["IoMaxSpec"] = request.ioMaxSpec;
    }

    if (!$dara.isNull(request.paidType)) {
      query["PaidType"] = request.paidType;
    }

    if (!$dara.isNull(request.partitionNum)) {
      query["PartitionNum"] = request.partitionNum;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.serverlessConfigShrink)) {
      query["ServerlessConfig"] = request.serverlessConfigShrink;
    }

    if (!$dara.isNull(request.specType)) {
      query["SpecType"] = request.specType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePostPayInstance",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreatePostPayInstanceResponse>(await this.callApi(params, req, runtime), new CreatePostPayInstanceResponse({}));
    } else {
      return $dara.cast<CreatePostPayInstanceResponse>(await this.execute(params, req, runtime), new CreatePostPayInstanceResponse({}));
    }

  }

  /**
   * 创建后付费实例。
   * 
   * @param request - CreatePostPayInstanceRequest
   * @returns CreatePostPayInstanceResponse
   */
  async createPostPayInstance(request: CreatePostPayInstanceRequest): Promise<CreatePostPayInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPostPayInstanceWithOptions(request, runtime);
  }

  /**
   * Creates a pay-as-you-go ApsaraMQ for Kafka instance. Pay-as-you-go instances allow you to pay after you use the resources. You are charged for pay-as-you-go instances based on the actual resource usage. You can use pay-as-you-go instances in test scenarios or scenarios in which the peak traffic is uncertain.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing method and pricing of pay-as-you-go Message Queue for Apache Kafka instances. For more information, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * @param tmpReq - CreatePostPayOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePostPayOrderResponse
   */
  async createPostPayOrderWithOptions(tmpReq: CreatePostPayOrderRequest, runtime: $dara.RuntimeOptions): Promise<CreatePostPayOrderResponse> {
    tmpReq.validate();
    let request = new CreatePostPayOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.serverlessConfig)) {
      request.serverlessConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.serverlessConfig, "ServerlessConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.deployType)) {
      query["DeployType"] = request.deployType;
    }

    if (!$dara.isNull(request.diskSize)) {
      query["DiskSize"] = request.diskSize;
    }

    if (!$dara.isNull(request.diskType)) {
      query["DiskType"] = request.diskType;
    }

    if (!$dara.isNull(request.eipMax)) {
      query["EipMax"] = request.eipMax;
    }

    if (!$dara.isNull(request.ioMax)) {
      query["IoMax"] = request.ioMax;
    }

    if (!$dara.isNull(request.ioMaxSpec)) {
      query["IoMaxSpec"] = request.ioMaxSpec;
    }

    if (!$dara.isNull(request.paidType)) {
      query["PaidType"] = request.paidType;
    }

    if (!$dara.isNull(request.partitionNum)) {
      query["PartitionNum"] = request.partitionNum;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.serverlessConfigShrink)) {
      query["ServerlessConfig"] = request.serverlessConfigShrink;
    }

    if (!$dara.isNull(request.specType)) {
      query["SpecType"] = request.specType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.topicQuota)) {
      query["TopicQuota"] = request.topicQuota;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePostPayOrder",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreatePostPayOrderResponse>(await this.callApi(params, req, runtime), new CreatePostPayOrderResponse({}));
    } else {
      return $dara.cast<CreatePostPayOrderResponse>(await this.execute(params, req, runtime), new CreatePostPayOrderResponse({}));
    }

  }

  /**
   * Creates a pay-as-you-go ApsaraMQ for Kafka instance. Pay-as-you-go instances allow you to pay after you use the resources. You are charged for pay-as-you-go instances based on the actual resource usage. You can use pay-as-you-go instances in test scenarios or scenarios in which the peak traffic is uncertain.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing method and pricing of pay-as-you-go Message Queue for Apache Kafka instances. For more information, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * @param request - CreatePostPayOrderRequest
   * @returns CreatePostPayOrderResponse
   */
  async createPostPayOrder(request: CreatePostPayOrderRequest): Promise<CreatePostPayOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPostPayOrderWithOptions(request, runtime);
  }

  /**
   * 创建预付费实例
   * 
   * @param tmpReq - CreatePrePayInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePrePayInstanceResponse
   */
  async createPrePayInstanceWithOptions(tmpReq: CreatePrePayInstanceRequest, runtime: $dara.RuntimeOptions): Promise<CreatePrePayInstanceResponse> {
    tmpReq.validate();
    let request = new CreatePrePayInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.confluentConfig)) {
      request.confluentConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.confluentConfig, "ConfluentConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.confluentConfigShrink)) {
      query["ConfluentConfig"] = request.confluentConfigShrink;
    }

    if (!$dara.isNull(request.deployType)) {
      query["DeployType"] = request.deployType;
    }

    if (!$dara.isNull(request.diskSize)) {
      query["DiskSize"] = request.diskSize;
    }

    if (!$dara.isNull(request.diskType)) {
      query["DiskType"] = request.diskType;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.eipMax)) {
      query["EipMax"] = request.eipMax;
    }

    if (!$dara.isNull(request.ioMaxSpec)) {
      query["IoMaxSpec"] = request.ioMaxSpec;
    }

    if (!$dara.isNull(request.paidType)) {
      query["PaidType"] = request.paidType;
    }

    if (!$dara.isNull(request.partitionNum)) {
      query["PartitionNum"] = request.partitionNum;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.specType)) {
      query["SpecType"] = request.specType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePrePayInstance",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreatePrePayInstanceResponse>(await this.callApi(params, req, runtime), new CreatePrePayInstanceResponse({}));
    } else {
      return $dara.cast<CreatePrePayInstanceResponse>(await this.execute(params, req, runtime), new CreatePrePayInstanceResponse({}));
    }

  }

  /**
   * 创建预付费实例
   * 
   * @param request - CreatePrePayInstanceRequest
   * @returns CreatePrePayInstanceResponse
   */
  async createPrePayInstance(request: CreatePrePayInstanceRequest): Promise<CreatePrePayInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPrePayInstanceWithOptions(request, runtime);
  }

  /**
   * Creates a subscription ApsaraMQ for Kafka instance. You can use subscription instances only after you pay for them. Subscription instances are suitable for long-term and stable business scenarios.
   * 
   * @remarks
   *   Before you call this operation, make sure that you understand the billing methods and pricing of subscription ApsaraMQ for Kafka instances. For more information, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * *   If you create an ApsaraMQ for Kafka instance by calling this operation, the subscription duration is one month and the auto-renewal feature is enabled by default. The auto-renewal cycle is also one month. If you want to change the auto-renewal cycle or disable the auto-renewal feature, you can go to the [Renewal](https://renew.console.aliyun.com/#/ecs) page in the Alibaba Cloud Management Console.
   * 
   * @param tmpReq - CreatePrePayOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePrePayOrderResponse
   */
  async createPrePayOrderWithOptions(tmpReq: CreatePrePayOrderRequest, runtime: $dara.RuntimeOptions): Promise<CreatePrePayOrderResponse> {
    tmpReq.validate();
    let request = new CreatePrePayOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.confluentConfig)) {
      request.confluentConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.confluentConfig, "ConfluentConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.confluentConfigShrink)) {
      query["ConfluentConfig"] = request.confluentConfigShrink;
    }

    if (!$dara.isNull(request.deployType)) {
      query["DeployType"] = request.deployType;
    }

    if (!$dara.isNull(request.diskSize)) {
      query["DiskSize"] = request.diskSize;
    }

    if (!$dara.isNull(request.diskType)) {
      query["DiskType"] = request.diskType;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.eipMax)) {
      query["EipMax"] = request.eipMax;
    }

    if (!$dara.isNull(request.ioMax)) {
      query["IoMax"] = request.ioMax;
    }

    if (!$dara.isNull(request.ioMaxSpec)) {
      query["IoMaxSpec"] = request.ioMaxSpec;
    }

    if (!$dara.isNull(request.paidType)) {
      query["PaidType"] = request.paidType;
    }

    if (!$dara.isNull(request.partitionNum)) {
      query["PartitionNum"] = request.partitionNum;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.specType)) {
      query["SpecType"] = request.specType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.topicQuota)) {
      query["TopicQuota"] = request.topicQuota;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePrePayOrder",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreatePrePayOrderResponse>(await this.callApi(params, req, runtime), new CreatePrePayOrderResponse({}));
    } else {
      return $dara.cast<CreatePrePayOrderResponse>(await this.execute(params, req, runtime), new CreatePrePayOrderResponse({}));
    }

  }

  /**
   * Creates a subscription ApsaraMQ for Kafka instance. You can use subscription instances only after you pay for them. Subscription instances are suitable for long-term and stable business scenarios.
   * 
   * @remarks
   *   Before you call this operation, make sure that you understand the billing methods and pricing of subscription ApsaraMQ for Kafka instances. For more information, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * *   If you create an ApsaraMQ for Kafka instance by calling this operation, the subscription duration is one month and the auto-renewal feature is enabled by default. The auto-renewal cycle is also one month. If you want to change the auto-renewal cycle or disable the auto-renewal feature, you can go to the [Renewal](https://renew.console.aliyun.com/#/ecs) page in the Alibaba Cloud Management Console.
   * 
   * @param request - CreatePrePayOrderRequest
   * @returns CreatePrePayOrderResponse
   */
  async createPrePayOrder(request: CreatePrePayOrderRequest): Promise<CreatePrePayOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPrePayOrderWithOptions(request, runtime);
  }

  /**
   * Creates a Simple Authentication and Security Layer (SASL) user.
   * 
   * @param request - CreateSaslUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSaslUserResponse
   */
  async createSaslUserWithOptions(request: CreateSaslUserRequest, runtime: $dara.RuntimeOptions): Promise<CreateSaslUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mechanism)) {
      query["Mechanism"] = request.mechanism;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSaslUser",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateSaslUserResponse>(await this.callApi(params, req, runtime), new CreateSaslUserResponse({}));
    } else {
      return $dara.cast<CreateSaslUserResponse>(await this.execute(params, req, runtime), new CreateSaslUserResponse({}));
    }

  }

  /**
   * Creates a Simple Authentication and Security Layer (SASL) user.
   * 
   * @param request - CreateSaslUserRequest
   * @returns CreateSaslUserResponse
   */
  async createSaslUser(request: CreateSaslUserRequest): Promise<CreateSaslUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSaslUserWithOptions(request, runtime);
  }

  /**
   * Creates a scheduled scaling rule for a serverless ApsaraMQ for Kafka V3 instance.
   * 
   * @remarks
   * ###### [](#-v3-serverless-)This operation is supported only by serverless ApsaraMQ for Kafka V3 instances.
   * 
   * @param tmpReq - CreateScheduledScalingRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateScheduledScalingRuleResponse
   */
  async createScheduledScalingRuleWithOptions(tmpReq: CreateScheduledScalingRuleRequest, runtime: $dara.RuntimeOptions): Promise<CreateScheduledScalingRuleResponse> {
    tmpReq.validate();
    let request = new CreateScheduledScalingRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.weeklyTypes)) {
      request.weeklyTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.weeklyTypes, "WeeklyTypes", "json");
    }

    let query = { };
    if (!$dara.isNull(request.durationMinutes)) {
      query["DurationMinutes"] = request.durationMinutes;
    }

    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.firstScheduledTime)) {
      query["FirstScheduledTime"] = request.firstScheduledTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.repeatType)) {
      query["RepeatType"] = request.repeatType;
    }

    if (!$dara.isNull(request.reservedPubFlow)) {
      query["ReservedPubFlow"] = request.reservedPubFlow;
    }

    if (!$dara.isNull(request.reservedSubFlow)) {
      query["ReservedSubFlow"] = request.reservedSubFlow;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.scheduleType)) {
      query["ScheduleType"] = request.scheduleType;
    }

    if (!$dara.isNull(request.timeZone)) {
      query["TimeZone"] = request.timeZone;
    }

    if (!$dara.isNull(request.weeklyTypesShrink)) {
      query["WeeklyTypes"] = request.weeklyTypesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateScheduledScalingRule",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateScheduledScalingRuleResponse>(await this.callApi(params, req, runtime), new CreateScheduledScalingRuleResponse({}));
    } else {
      return $dara.cast<CreateScheduledScalingRuleResponse>(await this.execute(params, req, runtime), new CreateScheduledScalingRuleResponse({}));
    }

  }

  /**
   * Creates a scheduled scaling rule for a serverless ApsaraMQ for Kafka V3 instance.
   * 
   * @remarks
   * ###### [](#-v3-serverless-)This operation is supported only by serverless ApsaraMQ for Kafka V3 instances.
   * 
   * @param request - CreateScheduledScalingRuleRequest
   * @returns CreateScheduledScalingRuleResponse
   */
  async createScheduledScalingRule(request: CreateScheduledScalingRuleRequest): Promise<CreateScheduledScalingRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createScheduledScalingRuleWithOptions(request, runtime);
  }

  /**
   * Creates a topic.
   * 
   * @remarks
   *   Each Alibaba Cloud account can call this operation up to once per second.
   * *   The maximum number of topics that you can create in an instance is determined by the specification of the instance.
   * 
   * @param request - CreateTopicRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTopicResponse
   */
  async createTopicWithOptions(request: CreateTopicRequest, runtime: $dara.RuntimeOptions): Promise<CreateTopicResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.compactTopic)) {
      query["CompactTopic"] = request.compactTopic;
    }

    if (!$dara.isNull(request.config)) {
      query["Config"] = request.config;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.localTopic)) {
      query["LocalTopic"] = request.localTopic;
    }

    if (!$dara.isNull(request.minInsyncReplicas)) {
      query["MinInsyncReplicas"] = request.minInsyncReplicas;
    }

    if (!$dara.isNull(request.partitionNum)) {
      query["PartitionNum"] = request.partitionNum;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.replicationFactor)) {
      query["ReplicationFactor"] = request.replicationFactor;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTopic",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateTopicResponse>(await this.callApi(params, req, runtime), new CreateTopicResponse({}));
    } else {
      return $dara.cast<CreateTopicResponse>(await this.execute(params, req, runtime), new CreateTopicResponse({}));
    }

  }

  /**
   * Creates a topic.
   * 
   * @remarks
   *   Each Alibaba Cloud account can call this operation up to once per second.
   * *   The maximum number of topics that you can create in an instance is determined by the specification of the instance.
   * 
   * @param request - CreateTopicRequest
   * @returns CreateTopicResponse
   */
  async createTopic(request: CreateTopicRequest): Promise<CreateTopicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTopicWithOptions(request, runtime);
  }

  /**
   * Deletes an access control list (ACL).
   * 
   * @param request - DeleteAclRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAclResponse
   */
  async deleteAclWithOptions(request: DeleteAclRequest, runtime: $dara.RuntimeOptions): Promise<DeleteAclResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclOperationType)) {
      query["AclOperationType"] = request.aclOperationType;
    }

    if (!$dara.isNull(request.aclOperationTypes)) {
      query["AclOperationTypes"] = request.aclOperationTypes;
    }

    if (!$dara.isNull(request.aclPermissionType)) {
      query["AclPermissionType"] = request.aclPermissionType;
    }

    if (!$dara.isNull(request.aclResourceName)) {
      query["AclResourceName"] = request.aclResourceName;
    }

    if (!$dara.isNull(request.aclResourcePatternType)) {
      query["AclResourcePatternType"] = request.aclResourcePatternType;
    }

    if (!$dara.isNull(request.aclResourceType)) {
      query["AclResourceType"] = request.aclResourceType;
    }

    if (!$dara.isNull(request.host)) {
      query["Host"] = request.host;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAcl",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteAclResponse>(await this.callApi(params, req, runtime), new DeleteAclResponse({}));
    } else {
      return $dara.cast<DeleteAclResponse>(await this.execute(params, req, runtime), new DeleteAclResponse({}));
    }

  }

  /**
   * Deletes an access control list (ACL).
   * 
   * @param request - DeleteAclRequest
   * @returns DeleteAclResponse
   */
  async deleteAcl(request: DeleteAclRequest): Promise<DeleteAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAclWithOptions(request, runtime);
  }

  /**
   * Deletes a consumer group from a specified Message Queue for Apache Kafka instance.
   * 
   * @param request - DeleteConsumerGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteConsumerGroupResponse
   */
  async deleteConsumerGroupWithOptions(request: DeleteConsumerGroupRequest, runtime: $dara.RuntimeOptions): Promise<DeleteConsumerGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consumerId)) {
      query["ConsumerId"] = request.consumerId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteConsumerGroup",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteConsumerGroupResponse>(await this.callApi(params, req, runtime), new DeleteConsumerGroupResponse({}));
    } else {
      return $dara.cast<DeleteConsumerGroupResponse>(await this.execute(params, req, runtime), new DeleteConsumerGroupResponse({}));
    }

  }

  /**
   * Deletes a consumer group from a specified Message Queue for Apache Kafka instance.
   * 
   * @param request - DeleteConsumerGroupRequest
   * @returns DeleteConsumerGroupResponse
   */
  async deleteConsumerGroup(request: DeleteConsumerGroupRequest): Promise<DeleteConsumerGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteConsumerGroupWithOptions(request, runtime);
  }

  /**
   * Deletes an instance. You can delete subscription and pay-as-you-go instances after you release them.
   * 
   * @param request - DeleteInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceResponse
   */
  async deleteInstanceWithOptions(request: DeleteInstanceRequest, runtime: $dara.RuntimeOptions): Promise<DeleteInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstance",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteInstanceResponse>(await this.callApi(params, req, runtime), new DeleteInstanceResponse({}));
    } else {
      return $dara.cast<DeleteInstanceResponse>(await this.execute(params, req, runtime), new DeleteInstanceResponse({}));
    }

  }

  /**
   * Deletes an instance. You can delete subscription and pay-as-you-go instances after you release them.
   * 
   * @param request - DeleteInstanceRequest
   * @returns DeleteInstanceResponse
   */
  async deleteInstance(request: DeleteInstanceRequest): Promise<DeleteInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteInstanceWithOptions(request, runtime);
  }

  /**
   * Deletes a Simple Authentication and Security Layer (SASL) user.
   * 
   * @param request - DeleteSaslUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSaslUserResponse
   */
  async deleteSaslUserWithOptions(request: DeleteSaslUserRequest, runtime: $dara.RuntimeOptions): Promise<DeleteSaslUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mechanism)) {
      query["Mechanism"] = request.mechanism;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSaslUser",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteSaslUserResponse>(await this.callApi(params, req, runtime), new DeleteSaslUserResponse({}));
    } else {
      return $dara.cast<DeleteSaslUserResponse>(await this.execute(params, req, runtime), new DeleteSaslUserResponse({}));
    }

  }

  /**
   * Deletes a Simple Authentication and Security Layer (SASL) user.
   * 
   * @param request - DeleteSaslUserRequest
   * @returns DeleteSaslUserResponse
   */
  async deleteSaslUser(request: DeleteSaslUserRequest): Promise<DeleteSaslUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSaslUserWithOptions(request, runtime);
  }

  /**
   * Deletes the scheduled scaling policy of a serverless ApsaraMQ for Kafka instance after you deploy the instance.
   * 
   * @remarks
   * ###### [](#-serverless-)This operation is available only for serverless ApsaraMQ for Kafka instances.
   * 
   * @param request - DeleteScheduledScalingRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteScheduledScalingRuleResponse
   */
  async deleteScheduledScalingRuleWithOptions(request: DeleteScheduledScalingRuleRequest, runtime: $dara.RuntimeOptions): Promise<DeleteScheduledScalingRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteScheduledScalingRule",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteScheduledScalingRuleResponse>(await this.callApi(params, req, runtime), new DeleteScheduledScalingRuleResponse({}));
    } else {
      return $dara.cast<DeleteScheduledScalingRuleResponse>(await this.execute(params, req, runtime), new DeleteScheduledScalingRuleResponse({}));
    }

  }

  /**
   * Deletes the scheduled scaling policy of a serverless ApsaraMQ for Kafka instance after you deploy the instance.
   * 
   * @remarks
   * ###### [](#-serverless-)This operation is available only for serverless ApsaraMQ for Kafka instances.
   * 
   * @param request - DeleteScheduledScalingRuleRequest
   * @returns DeleteScheduledScalingRuleResponse
   */
  async deleteScheduledScalingRule(request: DeleteScheduledScalingRuleRequest): Promise<DeleteScheduledScalingRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteScheduledScalingRuleWithOptions(request, runtime);
  }

  /**
   * Deletes a topic.
   * 
   * @param request - DeleteTopicRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTopicResponse
   */
  async deleteTopicWithOptions(request: DeleteTopicRequest, runtime: $dara.RuntimeOptions): Promise<DeleteTopicResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTopic",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteTopicResponse>(await this.callApi(params, req, runtime), new DeleteTopicResponse({}));
    } else {
      return $dara.cast<DeleteTopicResponse>(await this.execute(params, req, runtime), new DeleteTopicResponse({}));
    }

  }

  /**
   * Deletes a topic.
   * 
   * @param request - DeleteTopicRequest
   * @returns DeleteTopicResponse
   */
  async deleteTopic(request: DeleteTopicRequest): Promise<DeleteTopicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTopicWithOptions(request, runtime);
  }

  /**
   * 查询acl资源名
   * 
   * @param request - DescribeAclResourceNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAclResourceNameResponse
   */
  async describeAclResourceNameWithOptions(request: DescribeAclResourceNameRequest, runtime: $dara.RuntimeOptions): Promise<DescribeAclResourceNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclResourcePatternType)) {
      query["AclResourcePatternType"] = request.aclResourcePatternType;
    }

    if (!$dara.isNull(request.aclResourceType)) {
      query["AclResourceType"] = request.aclResourceType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAclResourceName",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeAclResourceNameResponse>(await this.callApi(params, req, runtime), new DescribeAclResourceNameResponse({}));
    } else {
      return $dara.cast<DescribeAclResourceNameResponse>(await this.execute(params, req, runtime), new DescribeAclResourceNameResponse({}));
    }

  }

  /**
   * 查询acl资源名
   * 
   * @param request - DescribeAclResourceNameRequest
   * @returns DescribeAclResourceNameResponse
   */
  async describeAclResourceName(request: DescribeAclResourceNameRequest): Promise<DescribeAclResourceNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAclResourceNameWithOptions(request, runtime);
  }

  /**
   * Queries access control lists (ACLs).
   * 
   * @param request - DescribeAclsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAclsResponse
   */
  async describeAclsWithOptions(request: DescribeAclsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeAclsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclOperationType)) {
      query["AclOperationType"] = request.aclOperationType;
    }

    if (!$dara.isNull(request.aclPermissionType)) {
      query["AclPermissionType"] = request.aclPermissionType;
    }

    if (!$dara.isNull(request.aclResourceName)) {
      query["AclResourceName"] = request.aclResourceName;
    }

    if (!$dara.isNull(request.aclResourcePatternType)) {
      query["AclResourcePatternType"] = request.aclResourcePatternType;
    }

    if (!$dara.isNull(request.aclResourceType)) {
      query["AclResourceType"] = request.aclResourceType;
    }

    if (!$dara.isNull(request.host)) {
      query["Host"] = request.host;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAcls",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeAclsResponse>(await this.callApi(params, req, runtime), new DescribeAclsResponse({}));
    } else {
      return $dara.cast<DescribeAclsResponse>(await this.execute(params, req, runtime), new DescribeAclsResponse({}));
    }

  }

  /**
   * Queries access control lists (ACLs).
   * 
   * @param request - DescribeAclsRequest
   * @returns DescribeAclsResponse
   */
  async describeAcls(request: DescribeAclsRequest): Promise<DescribeAclsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAclsWithOptions(request, runtime);
  }

  /**
   * Queries Simple Authentication and Security Layer (SASL) users.
   * 
   * @param request - DescribeSaslUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSaslUsersResponse
   */
  async describeSaslUsersWithOptions(request: DescribeSaslUsersRequest, runtime: $dara.RuntimeOptions): Promise<DescribeSaslUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSaslUsers",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeSaslUsersResponse>(await this.callApi(params, req, runtime), new DescribeSaslUsersResponse({}));
    } else {
      return $dara.cast<DescribeSaslUsersResponse>(await this.execute(params, req, runtime), new DescribeSaslUsersResponse({}));
    }

  }

  /**
   * Queries Simple Authentication and Security Layer (SASL) users.
   * 
   * @param request - DescribeSaslUsersRequest
   * @returns DescribeSaslUsersResponse
   */
  async describeSaslUsers(request: DescribeSaslUsersRequest): Promise<DescribeSaslUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSaslUsersWithOptions(request, runtime);
  }

  /**
   * Enables and disables the flexible group creation feature.
   * 
   * @param request - EnableAutoGroupCreationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableAutoGroupCreationResponse
   */
  async enableAutoGroupCreationWithOptions(request: EnableAutoGroupCreationRequest, runtime: $dara.RuntimeOptions): Promise<EnableAutoGroupCreationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableAutoGroupCreation",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<EnableAutoGroupCreationResponse>(await this.callApi(params, req, runtime), new EnableAutoGroupCreationResponse({}));
    } else {
      return $dara.cast<EnableAutoGroupCreationResponse>(await this.execute(params, req, runtime), new EnableAutoGroupCreationResponse({}));
    }

  }

  /**
   * Enables and disables the flexible group creation feature.
   * 
   * @param request - EnableAutoGroupCreationRequest
   * @returns EnableAutoGroupCreationResponse
   */
  async enableAutoGroupCreation(request: EnableAutoGroupCreationRequest): Promise<EnableAutoGroupCreationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableAutoGroupCreationWithOptions(request, runtime);
  }

  /**
   * Enables or disables the automatic topic creation feature, or changes the number of partitions in topics that are automatically created.
   * 
   * @param request - EnableAutoTopicCreationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableAutoTopicCreationResponse
   */
  async enableAutoTopicCreationWithOptions(request: EnableAutoTopicCreationRequest, runtime: $dara.RuntimeOptions): Promise<EnableAutoTopicCreationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.operate)) {
      query["Operate"] = request.operate;
    }

    if (!$dara.isNull(request.partitionNum)) {
      query["PartitionNum"] = request.partitionNum;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.updatePartition)) {
      query["UpdatePartition"] = request.updatePartition;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableAutoTopicCreation",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<EnableAutoTopicCreationResponse>(await this.callApi(params, req, runtime), new EnableAutoTopicCreationResponse({}));
    } else {
      return $dara.cast<EnableAutoTopicCreationResponse>(await this.execute(params, req, runtime), new EnableAutoTopicCreationResponse({}));
    }

  }

  /**
   * Enables or disables the automatic topic creation feature, or changes the number of partitions in topics that are automatically created.
   * 
   * @param request - EnableAutoTopicCreationRequest
   * @returns EnableAutoTopicCreationResponse
   */
  async enableAutoTopicCreation(request: EnableAutoTopicCreationRequest): Promise<EnableAutoTopicCreationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableAutoTopicCreationWithOptions(request, runtime);
  }

  /**
   * Queries the IDs of all instances in the current account.
   * 
   * @param request - GetAllInstanceIdListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAllInstanceIdListResponse
   */
  async getAllInstanceIdListWithOptions(request: GetAllInstanceIdListRequest, runtime: $dara.RuntimeOptions): Promise<GetAllInstanceIdListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAllInstanceIdList",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetAllInstanceIdListResponse>(await this.callApi(params, req, runtime), new GetAllInstanceIdListResponse({}));
    } else {
      return $dara.cast<GetAllInstanceIdListResponse>(await this.execute(params, req, runtime), new GetAllInstanceIdListResponse({}));
    }

  }

  /**
   * Queries the IDs of all instances in the current account.
   * 
   * @param request - GetAllInstanceIdListRequest
   * @returns GetAllInstanceIdListResponse
   */
  async getAllInstanceIdList(request: GetAllInstanceIdListRequest): Promise<GetAllInstanceIdListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAllInstanceIdListWithOptions(request, runtime);
  }

  /**
   * Queries the IP address whitelist.
   * 
   * @param request - GetAllowedIpListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAllowedIpListResponse
   */
  async getAllowedIpListWithOptions(request: GetAllowedIpListRequest, runtime: $dara.RuntimeOptions): Promise<GetAllowedIpListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAllowedIpList",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetAllowedIpListResponse>(await this.callApi(params, req, runtime), new GetAllowedIpListResponse({}));
    } else {
      return $dara.cast<GetAllowedIpListResponse>(await this.execute(params, req, runtime), new GetAllowedIpListResponse({}));
    }

  }

  /**
   * Queries the IP address whitelist.
   * 
   * @param request - GetAllowedIpListRequest
   * @returns GetAllowedIpListResponse
   */
  async getAllowedIpList(request: GetAllowedIpListRequest): Promise<GetAllowedIpListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAllowedIpListWithOptions(request, runtime);
  }

  /**
   * Queries the scheduled scaling policy of a serverless ApsaraMQ for Kafka instance after you deploy the instance.
   * 
   * @remarks
   * ###### [](#-serverless-)**This operation is available only for serverless ApsaraMQ for Kafka instances.
   * 
   * @param request - GetAutoScalingConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAutoScalingConfigurationResponse
   */
  async getAutoScalingConfigurationWithOptions(request: GetAutoScalingConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<GetAutoScalingConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAutoScalingConfiguration",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetAutoScalingConfigurationResponse>(await this.callApi(params, req, runtime), new GetAutoScalingConfigurationResponse({}));
    } else {
      return $dara.cast<GetAutoScalingConfigurationResponse>(await this.execute(params, req, runtime), new GetAutoScalingConfigurationResponse({}));
    }

  }

  /**
   * Queries the scheduled scaling policy of a serverless ApsaraMQ for Kafka instance after you deploy the instance.
   * 
   * @remarks
   * ###### [](#-serverless-)**This operation is available only for serverless ApsaraMQ for Kafka instances.
   * 
   * @param request - GetAutoScalingConfigurationRequest
   * @returns GetAutoScalingConfigurationResponse
   */
  async getAutoScalingConfiguration(request: GetAutoScalingConfigurationRequest): Promise<GetAutoScalingConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAutoScalingConfigurationWithOptions(request, runtime);
  }

  /**
   * Queries one or more consumer groups in a specified Message Queue for Apache Kafka instance.
   * 
   * @param request - GetConsumerListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConsumerListResponse
   */
  async getConsumerListWithOptions(request: GetConsumerListRequest, runtime: $dara.RuntimeOptions): Promise<GetConsumerListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consumerId)) {
      query["ConsumerId"] = request.consumerId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConsumerList",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetConsumerListResponse>(await this.callApi(params, req, runtime), new GetConsumerListResponse({}));
    } else {
      return $dara.cast<GetConsumerListResponse>(await this.execute(params, req, runtime), new GetConsumerListResponse({}));
    }

  }

  /**
   * Queries one or more consumer groups in a specified Message Queue for Apache Kafka instance.
   * 
   * @param request - GetConsumerListRequest
   * @returns GetConsumerListResponse
   */
  async getConsumerList(request: GetConsumerListRequest): Promise<GetConsumerListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getConsumerListWithOptions(request, runtime);
  }

  /**
   * Queries the consumer progress of a consumer group.
   * 
   * @param request - GetConsumerProgressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConsumerProgressResponse
   */
  async getConsumerProgressWithOptions(request: GetConsumerProgressRequest, runtime: $dara.RuntimeOptions): Promise<GetConsumerProgressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consumerId)) {
      query["ConsumerId"] = request.consumerId;
    }

    if (!$dara.isNull(request.hideLastTimestamp)) {
      query["HideLastTimestamp"] = request.hideLastTimestamp;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConsumerProgress",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetConsumerProgressResponse>(await this.callApi(params, req, runtime), new GetConsumerProgressResponse({}));
    } else {
      return $dara.cast<GetConsumerProgressResponse>(await this.execute(params, req, runtime), new GetConsumerProgressResponse({}));
    }

  }

  /**
   * Queries the consumer progress of a consumer group.
   * 
   * @param request - GetConsumerProgressRequest
   * @returns GetConsumerProgressResponse
   */
  async getConsumerProgress(request: GetConsumerProgressRequest): Promise<GetConsumerProgressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getConsumerProgressWithOptions(request, runtime);
  }

  /**
   * Queries the information about instances in a specified region.
   * 
   * @param request - GetInstanceListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceListResponse
   */
  async getInstanceListWithOptions(request: GetInstanceListRequest, runtime: $dara.RuntimeOptions): Promise<GetInstanceListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.series)) {
      query["Series"] = request.series;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceList",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetInstanceListResponse>(await this.callApi(params, req, runtime), new GetInstanceListResponse({}));
    } else {
      return $dara.cast<GetInstanceListResponse>(await this.execute(params, req, runtime), new GetInstanceListResponse({}));
    }

  }

  /**
   * Queries the information about instances in a specified region.
   * 
   * @param request - GetInstanceListRequest
   * @returns GetInstanceListResponse
   */
  async getInstanceList(request: GetInstanceListRequest): Promise<GetInstanceListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceListWithOptions(request, runtime);
  }

  /**
   * Queries the IP addresses of the clients that are connected to an ApsaraMQ for Kafka instance.
   * 
   * @remarks
   *   The IP information is obtained from the sampled logs generated for the requests that the client sends to the broker by calling the API operations of ApsaraMQ for Kafka.
   * *   Statistics refers to the number of connections on different ports of an IP address within a specific period of time.
   * *   If the broker is not of the latest minor version, the sampled logs may not be accurate. This may cause inaccurate IP information. Therefore, we recommend that you update your broker to the latest version at the earliest opportunity.
   * 
   * @param request - GetKafkaClientIpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetKafkaClientIpResponse
   */
  async getKafkaClientIpWithOptions(request: GetKafkaClientIpRequest, runtime: $dara.RuntimeOptions): Promise<GetKafkaClientIpResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.group)) {
      query["Group"] = request.group;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.topic)) {
      query["Topic"] = request.topic;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetKafkaClientIp",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetKafkaClientIpResponse>(await this.callApi(params, req, runtime), new GetKafkaClientIpResponse({}));
    } else {
      return $dara.cast<GetKafkaClientIpResponse>(await this.execute(params, req, runtime), new GetKafkaClientIpResponse({}));
    }

  }

  /**
   * Queries the IP addresses of the clients that are connected to an ApsaraMQ for Kafka instance.
   * 
   * @remarks
   *   The IP information is obtained from the sampled logs generated for the requests that the client sends to the broker by calling the API operations of ApsaraMQ for Kafka.
   * *   Statistics refers to the number of connections on different ports of an IP address within a specific period of time.
   * *   If the broker is not of the latest minor version, the sampled logs may not be accurate. This may cause inaccurate IP information. Therefore, we recommend that you update your broker to the latest version at the earliest opportunity.
   * 
   * @param request - GetKafkaClientIpRequest
   * @returns GetKafkaClientIpResponse
   */
  async getKafkaClientIp(request: GetKafkaClientIpRequest): Promise<GetKafkaClientIpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getKafkaClientIpWithOptions(request, runtime);
  }

  /**
   * Queries the used quota of topics and partitions.
   * 
   * @param request - GetQuotaTipRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQuotaTipResponse
   */
  async getQuotaTipWithOptions(request: GetQuotaTipRequest, runtime: $dara.RuntimeOptions): Promise<GetQuotaTipResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQuotaTip",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetQuotaTipResponse>(await this.callApi(params, req, runtime), new GetQuotaTipResponse({}));
    } else {
      return $dara.cast<GetQuotaTipResponse>(await this.execute(params, req, runtime), new GetQuotaTipResponse({}));
    }

  }

  /**
   * Queries the used quota of topics and partitions.
   * 
   * @param request - GetQuotaTipRequest
   * @returns GetQuotaTipResponse
   */
  async getQuotaTip(request: GetQuotaTipRequest): Promise<GetQuotaTipResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQuotaTipWithOptions(request, runtime);
  }

  /**
   * Queries the information about a topic.
   * 
   * @param request - GetTopicListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTopicListResponse
   */
  async getTopicListWithOptions(request: GetTopicListRequest, runtime: $dara.RuntimeOptions): Promise<GetTopicListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTopicList",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetTopicListResponse>(await this.callApi(params, req, runtime), new GetTopicListResponse({}));
    } else {
      return $dara.cast<GetTopicListResponse>(await this.execute(params, req, runtime), new GetTopicListResponse({}));
    }

  }

  /**
   * Queries the information about a topic.
   * 
   * @param request - GetTopicListRequest
   * @returns GetTopicListResponse
   */
  async getTopicList(request: GetTopicListRequest): Promise<GetTopicListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTopicListWithOptions(request, runtime);
  }

  /**
   * Queries the messaging status of a topic.
   * 
   * @param request - GetTopicStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTopicStatusResponse
   */
  async getTopicStatusWithOptions(request: GetTopicStatusRequest, runtime: $dara.RuntimeOptions): Promise<GetTopicStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTopicStatus",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetTopicStatusResponse>(await this.callApi(params, req, runtime), new GetTopicStatusResponse({}));
    } else {
      return $dara.cast<GetTopicStatusResponse>(await this.execute(params, req, runtime), new GetTopicStatusResponse({}));
    }

  }

  /**
   * Queries the messaging status of a topic.
   * 
   * @param request - GetTopicStatusRequest
   * @returns GetTopicStatusResponse
   */
  async getTopicStatus(request: GetTopicStatusRequest): Promise<GetTopicStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTopicStatusWithOptions(request, runtime);
  }

  /**
   * Queries the information about the groups that subscribe to a topic.
   * 
   * @param request - GetTopicSubscribeStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTopicSubscribeStatusResponse
   */
  async getTopicSubscribeStatusWithOptions(request: GetTopicSubscribeStatusRequest, runtime: $dara.RuntimeOptions): Promise<GetTopicSubscribeStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTopicSubscribeStatus",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetTopicSubscribeStatusResponse>(await this.callApi(params, req, runtime), new GetTopicSubscribeStatusResponse({}));
    } else {
      return $dara.cast<GetTopicSubscribeStatusResponse>(await this.execute(params, req, runtime), new GetTopicSubscribeStatusResponse({}));
    }

  }

  /**
   * Queries the information about the groups that subscribe to a topic.
   * 
   * @param request - GetTopicSubscribeStatusRequest
   * @returns GetTopicSubscribeStatusResponse
   */
  async getTopicSubscribeStatus(request: GetTopicSubscribeStatusRequest): Promise<GetTopicSubscribeStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTopicSubscribeStatusWithOptions(request, runtime);
  }

  /**
   * Queries the tags that are attached to a specified resource.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
    } else {
      return $dara.cast<ListTagResourcesResponse>(await this.execute(params, req, runtime), new ListTagResourcesResponse({}));
    }

  }

  /**
   * Queries the tags that are attached to a specified resource.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Changes the name of an ApsaraMQ for Kafka instance. After you deploy an instance, you can call this operation to change the name of the instance.
   * 
   * @param request - ModifyInstanceNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceNameResponse
   */
  async modifyInstanceNameWithOptions(request: ModifyInstanceNameRequest, runtime: $dara.RuntimeOptions): Promise<ModifyInstanceNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceName",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyInstanceNameResponse>(await this.callApi(params, req, runtime), new ModifyInstanceNameResponse({}));
    } else {
      return $dara.cast<ModifyInstanceNameResponse>(await this.execute(params, req, runtime), new ModifyInstanceNameResponse({}));
    }

  }

  /**
   * Changes the name of an ApsaraMQ for Kafka instance. After you deploy an instance, you can call this operation to change the name of the instance.
   * 
   * @param request - ModifyInstanceNameRequest
   * @returns ModifyInstanceNameResponse
   */
  async modifyInstanceName(request: ModifyInstanceNameRequest): Promise<ModifyInstanceNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceNameWithOptions(request, runtime);
  }

  /**
   * Changes the number of partitions in a topic.
   * 
   * @param request - ModifyPartitionNumRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPartitionNumResponse
   */
  async modifyPartitionNumWithOptions(request: ModifyPartitionNumRequest, runtime: $dara.RuntimeOptions): Promise<ModifyPartitionNumResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addPartitionNum)) {
      query["AddPartitionNum"] = request.addPartitionNum;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyPartitionNum",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyPartitionNumResponse>(await this.callApi(params, req, runtime), new ModifyPartitionNumResponse({}));
    } else {
      return $dara.cast<ModifyPartitionNumResponse>(await this.execute(params, req, runtime), new ModifyPartitionNumResponse({}));
    }

  }

  /**
   * Changes the number of partitions in a topic.
   * 
   * @param request - ModifyPartitionNumRequest
   * @returns ModifyPartitionNumResponse
   */
  async modifyPartitionNum(request: ModifyPartitionNumRequest): Promise<ModifyPartitionNumResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyPartitionNumWithOptions(request, runtime);
  }

  /**
   * Modifies the scheduled scaling policy of a serverless ApsaraMQ for Kafka instance after you deploy the instance.
   * 
   * @remarks
   * ###### [](#-serverless-)This operation is available only for serverless ApsaraMQ for Kafka instances.
   * 
   * @param request - ModifyScheduledScalingRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyScheduledScalingRuleResponse
   */
  async modifyScheduledScalingRuleWithOptions(request: ModifyScheduledScalingRuleRequest, runtime: $dara.RuntimeOptions): Promise<ModifyScheduledScalingRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyScheduledScalingRule",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyScheduledScalingRuleResponse>(await this.callApi(params, req, runtime), new ModifyScheduledScalingRuleResponse({}));
    } else {
      return $dara.cast<ModifyScheduledScalingRuleResponse>(await this.execute(params, req, runtime), new ModifyScheduledScalingRuleResponse({}));
    }

  }

  /**
   * Modifies the scheduled scaling policy of a serverless ApsaraMQ for Kafka instance after you deploy the instance.
   * 
   * @remarks
   * ###### [](#-serverless-)This operation is available only for serverless ApsaraMQ for Kafka instances.
   * 
   * @param request - ModifyScheduledScalingRuleRequest
   * @returns ModifyScheduledScalingRuleResponse
   */
  async modifyScheduledScalingRule(request: ModifyScheduledScalingRuleRequest): Promise<ModifyScheduledScalingRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyScheduledScalingRuleWithOptions(request, runtime);
  }

  /**
   * Modifies the description of a topic.
   * 
   * @param request - ModifyTopicRemarkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyTopicRemarkResponse
   */
  async modifyTopicRemarkWithOptions(request: ModifyTopicRemarkRequest, runtime: $dara.RuntimeOptions): Promise<ModifyTopicRemarkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyTopicRemark",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyTopicRemarkResponse>(await this.callApi(params, req, runtime), new ModifyTopicRemarkResponse({}));
    } else {
      return $dara.cast<ModifyTopicRemarkResponse>(await this.execute(params, req, runtime), new ModifyTopicRemarkResponse({}));
    }

  }

  /**
   * Modifies the description of a topic.
   * 
   * @param request - ModifyTopicRemarkRequest
   * @returns ModifyTopicRemarkResponse
   */
  async modifyTopicRemark(request: ModifyTopicRemarkRequest): Promise<ModifyTopicRemarkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyTopicRemarkWithOptions(request, runtime);
  }

  /**
   * Queries messages stored in a topic. You can query messages by creation time or offset.
   * 
   * @param request - QueryMessageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMessageResponse
   */
  async queryMessageWithOptions(request: QueryMessageRequest, runtime: $dara.RuntimeOptions): Promise<QueryMessageResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMessage",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryMessageResponse>(await this.callApi(params, req, runtime), new QueryMessageResponse({}));
    } else {
      return $dara.cast<QueryMessageResponse>(await this.execute(params, req, runtime), new QueryMessageResponse({}));
    }

  }

  /**
   * Queries messages stored in a topic. You can query messages by creation time or offset.
   * 
   * @param request - QueryMessageRequest
   * @returns QueryMessageResponse
   */
  async queryMessage(request: QueryMessageRequest): Promise<QueryMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMessageWithOptions(request, runtime);
  }

  /**
   * Releases a pay-as-you-go instance.
   * 
   * @remarks
   * You cannot call this operation to release a subscription Message Queue for Apache Kafka instance.
   * 
   * @param request - ReleaseInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseInstanceResponse
   */
  async releaseInstanceWithOptions(request: ReleaseInstanceRequest, runtime: $dara.RuntimeOptions): Promise<ReleaseInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.forceDeleteInstance)) {
      query["ForceDeleteInstance"] = request.forceDeleteInstance;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseInstance",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ReleaseInstanceResponse>(await this.callApi(params, req, runtime), new ReleaseInstanceResponse({}));
    } else {
      return $dara.cast<ReleaseInstanceResponse>(await this.execute(params, req, runtime), new ReleaseInstanceResponse({}));
    }

  }

  /**
   * Releases a pay-as-you-go instance.
   * 
   * @remarks
   * You cannot call this operation to release a subscription Message Queue for Apache Kafka instance.
   * 
   * @param request - ReleaseInstanceRequest
   * @returns ReleaseInstanceResponse
   */
  async releaseInstance(request: ReleaseInstanceRequest): Promise<ReleaseInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseInstanceWithOptions(request, runtime);
  }

  /**
   * Enables an ApsaraMQ for Kafka instance.
   * 
   * @remarks
   * You can call this operation only if your instance is in the Stopped state.
   * 
   * @param request - ReopenInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReopenInstanceResponse
   */
  async reopenInstanceWithOptions(request: ReopenInstanceRequest, runtime: $dara.RuntimeOptions): Promise<ReopenInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReopenInstance",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ReopenInstanceResponse>(await this.callApi(params, req, runtime), new ReopenInstanceResponse({}));
    } else {
      return $dara.cast<ReopenInstanceResponse>(await this.execute(params, req, runtime), new ReopenInstanceResponse({}));
    }

  }

  /**
   * Enables an ApsaraMQ for Kafka instance.
   * 
   * @remarks
   * You can call this operation only if your instance is in the Stopped state.
   * 
   * @param request - ReopenInstanceRequest
   * @returns ReopenInstanceResponse
   */
  async reopenInstance(request: ReopenInstanceRequest): Promise<ReopenInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.reopenInstanceWithOptions(request, runtime);
  }

  /**
   * Deploys an ApsaraMQ for Kafka instance. You must purchase and deploy an ApsaraMQ for Kafka instance before you can use the instance to send and receive messages.
   * 
   * @remarks
   * >  You can call this operation up to twice per second.
   * 
   * @param request - StartInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartInstanceResponse
   */
  async startInstanceWithOptions(request: StartInstanceRequest, runtime: $dara.RuntimeOptions): Promise<StartInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.config)) {
      query["Config"] = request.config;
    }

    if (!$dara.isNull(request.crossZone)) {
      query["CrossZone"] = request.crossZone;
    }

    if (!$dara.isNull(request.deployModule)) {
      query["DeployModule"] = request.deployModule;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.isEipInner)) {
      query["IsEipInner"] = request.isEipInner;
    }

    if (!$dara.isNull(request.isForceSelectedZones)) {
      query["IsForceSelectedZones"] = request.isForceSelectedZones;
    }

    if (!$dara.isNull(request.isSetUserAndPassword)) {
      query["IsSetUserAndPassword"] = request.isSetUserAndPassword;
    }

    if (!$dara.isNull(request.KMSKeyId)) {
      query["KMSKeyId"] = request.KMSKeyId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.notifier)) {
      query["Notifier"] = request.notifier;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.securityGroup)) {
      query["SecurityGroup"] = request.securityGroup;
    }

    if (!$dara.isNull(request.selectedZones)) {
      query["SelectedZones"] = request.selectedZones;
    }

    if (!$dara.isNull(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    if (!$dara.isNull(request.userPhoneNum)) {
      query["UserPhoneNum"] = request.userPhoneNum;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.vSwitchIds)) {
      query["VSwitchIds"] = request.vSwitchIds;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartInstance",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StartInstanceResponse>(await this.callApi(params, req, runtime), new StartInstanceResponse({}));
    } else {
      return $dara.cast<StartInstanceResponse>(await this.execute(params, req, runtime), new StartInstanceResponse({}));
    }

  }

  /**
   * Deploys an ApsaraMQ for Kafka instance. You must purchase and deploy an ApsaraMQ for Kafka instance before you can use the instance to send and receive messages.
   * 
   * @remarks
   * >  You can call this operation up to twice per second.
   * 
   * @param request - StartInstanceRequest
   * @returns StartInstanceResponse
   */
  async startInstance(request: StartInstanceRequest): Promise<StartInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startInstanceWithOptions(request, runtime);
  }

  /**
   * Stops an ApsaraMQ for Kafka instance.
   * 
   * @remarks
   * You cannot stop a subscription ApsaraMQ for Kafka instance. If you want to stop a subscription ApsaraMQ for Kafka instance, submit a ticket.
   * 
   * @param request - StopInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopInstanceResponse
   */
  async stopInstanceWithOptions(request: StopInstanceRequest, runtime: $dara.RuntimeOptions): Promise<StopInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopInstance",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StopInstanceResponse>(await this.callApi(params, req, runtime), new StopInstanceResponse({}));
    } else {
      return $dara.cast<StopInstanceResponse>(await this.execute(params, req, runtime), new StopInstanceResponse({}));
    }

  }

  /**
   * Stops an ApsaraMQ for Kafka instance.
   * 
   * @remarks
   * You cannot stop a subscription ApsaraMQ for Kafka instance. If you want to stop a subscription ApsaraMQ for Kafka instance, submit a ticket.
   * 
   * @param request - StopInstanceRequest
   * @returns StopInstanceResponse
   */
  async stopInstance(request: StopInstanceRequest): Promise<StopInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopInstanceWithOptions(request, runtime);
  }

  /**
   * Attaches a tag to a resource.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
    } else {
      return $dara.cast<TagResourcesResponse>(await this.execute(params, req, runtime), new TagResourcesResponse({}));
    }

  }

  /**
   * Attaches a tag to a resource.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Detaches tags from a specified resource.
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<UntagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
    } else {
      return $dara.cast<UntagResourcesResponse>(await this.execute(params, req, runtime), new UntagResourcesResponse({}));
    }

  }

  /**
   * Detaches tags from a specified resource.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Updates the IP address whitelist of an ApsaraMQ for Kafka instance. Only IP addresses and ports that are configured in the IP address whitelist of an instance can access the instance.
   * 
   * @param request - UpdateAllowedIpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAllowedIpResponse
   */
  async updateAllowedIpWithOptions(request: UpdateAllowedIpRequest, runtime: $dara.RuntimeOptions): Promise<UpdateAllowedIpResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.allowedListIp)) {
      query["AllowedListIp"] = request.allowedListIp;
    }

    if (!$dara.isNull(request.allowedListType)) {
      query["AllowedListType"] = request.allowedListType;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.portRange)) {
      query["PortRange"] = request.portRange;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.updateType)) {
      query["UpdateType"] = request.updateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAllowedIp",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateAllowedIpResponse>(await this.callApi(params, req, runtime), new UpdateAllowedIpResponse({}));
    } else {
      return $dara.cast<UpdateAllowedIpResponse>(await this.execute(params, req, runtime), new UpdateAllowedIpResponse({}));
    }

  }

  /**
   * Updates the IP address whitelist of an ApsaraMQ for Kafka instance. Only IP addresses and ports that are configured in the IP address whitelist of an instance can access the instance.
   * 
   * @param request - UpdateAllowedIpRequest
   * @returns UpdateAllowedIpResponse
   */
  async updateAllowedIp(request: UpdateAllowedIpRequest): Promise<UpdateAllowedIpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAllowedIpWithOptions(request, runtime);
  }

  /**
   * Resets the consumer offsets of the subscribed topics of a consumer group.
   * 
   * @remarks
   * You can call this operation to reset the consumer offset of a specific consumer group. You can use the timestamp or offset parameter to reset the consumer offset of a consumer group. You can implement the following features by configuring a combination of different parameters:
   * *   Reset the consumer offsets of one or all subscribed topics of a consumer group to the latest offset. This way, you can consume messages in the topics from the latest offset.
   * *   Reset the consumer offsets of one or all subscribed topics of a consumer group to a specific point in time. This way, you can consume messages in the topics from the specified point in time.
   * *   Reset the consumer offset of one subscribed topic of a consumer group to a specific offset in a specific partition. This way, you can consume messages from the specified offset in the specified partition.
   * 
   * @param tmpReq - UpdateConsumerOffsetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateConsumerOffsetResponse
   */
  async updateConsumerOffsetWithOptions(tmpReq: UpdateConsumerOffsetRequest, runtime: $dara.RuntimeOptions): Promise<UpdateConsumerOffsetResponse> {
    tmpReq.validate();
    let request = new UpdateConsumerOffsetShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.offsets)) {
      request.offsetsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.offsets, "Offsets", "json");
    }

    let query = { };
    if (!$dara.isNull(request.consumerId)) {
      query["ConsumerId"] = request.consumerId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.offsetsShrink)) {
      query["Offsets"] = request.offsetsShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resetType)) {
      query["ResetType"] = request.resetType;
    }

    if (!$dara.isNull(request.time)) {
      query["Time"] = request.time;
    }

    if (!$dara.isNull(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateConsumerOffset",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateConsumerOffsetResponse>(await this.callApi(params, req, runtime), new UpdateConsumerOffsetResponse({}));
    } else {
      return $dara.cast<UpdateConsumerOffsetResponse>(await this.execute(params, req, runtime), new UpdateConsumerOffsetResponse({}));
    }

  }

  /**
   * Resets the consumer offsets of the subscribed topics of a consumer group.
   * 
   * @remarks
   * You can call this operation to reset the consumer offset of a specific consumer group. You can use the timestamp or offset parameter to reset the consumer offset of a consumer group. You can implement the following features by configuring a combination of different parameters:
   * *   Reset the consumer offsets of one or all subscribed topics of a consumer group to the latest offset. This way, you can consume messages in the topics from the latest offset.
   * *   Reset the consumer offsets of one or all subscribed topics of a consumer group to a specific point in time. This way, you can consume messages in the topics from the specified point in time.
   * *   Reset the consumer offset of one subscribed topic of a consumer group to a specific offset in a specific partition. This way, you can consume messages from the specified offset in the specified partition.
   * 
   * @param request - UpdateConsumerOffsetRequest
   * @returns UpdateConsumerOffsetResponse
   */
  async updateConsumerOffset(request: UpdateConsumerOffsetRequest): Promise<UpdateConsumerOffsetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateConsumerOffsetWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of an ApsaraMQ for Kafka instance. ApsaraMQ for Kafka allows you to modify the configurations of an instance, including the access control list (ACL) feature, the Secure Sockets Layer (SSL) feature, the message retention period, and the maximum message size.
   * 
   * @remarks
   * ## **Permissions**
   * If a RAM user wants to call the **UpdateInstanceConfig** operation, the RAM user must be granted the required permissions. For more information about how to grant permissions, see [RAM policies](https://help.aliyun.com/document_detail/185815.html).
   * |API|Action|Resource|
   * |---|---|---|
   * |UpdateInstanceConfig|alikafka: UpdateInstance|acs:alikafka:*:*:{instanceId}|
   * 
   * @param request - UpdateInstanceConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceConfigResponse
   */
  async updateInstanceConfigWithOptions(request: UpdateInstanceConfigRequest, runtime: $dara.RuntimeOptions): Promise<UpdateInstanceConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.config)) {
      query["Config"] = request.config;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstanceConfig",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateInstanceConfigResponse>(await this.callApi(params, req, runtime), new UpdateInstanceConfigResponse({}));
    } else {
      return $dara.cast<UpdateInstanceConfigResponse>(await this.execute(params, req, runtime), new UpdateInstanceConfigResponse({}));
    }

  }

  /**
   * Modifies the configurations of an ApsaraMQ for Kafka instance. ApsaraMQ for Kafka allows you to modify the configurations of an instance, including the access control list (ACL) feature, the Secure Sockets Layer (SSL) feature, the message retention period, and the maximum message size.
   * 
   * @remarks
   * ## **Permissions**
   * If a RAM user wants to call the **UpdateInstanceConfig** operation, the RAM user must be granted the required permissions. For more information about how to grant permissions, see [RAM policies](https://help.aliyun.com/document_detail/185815.html).
   * |API|Action|Resource|
   * |---|---|---|
   * |UpdateInstanceConfig|alikafka: UpdateInstance|acs:alikafka:*:*:{instanceId}|
   * 
   * @param request - UpdateInstanceConfigRequest
   * @returns UpdateInstanceConfigResponse
   */
  async updateInstanceConfig(request: UpdateInstanceConfigRequest): Promise<UpdateInstanceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateInstanceConfigWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of a topic. After you create a topic, you can modify the message retention period and maximum message size of the topic.
   * 
   * @param request - UpdateTopicConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTopicConfigResponse
   */
  async updateTopicConfigWithOptions(request: UpdateTopicConfigRequest, runtime: $dara.RuntimeOptions): Promise<UpdateTopicConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.config)) {
      query["Config"] = request.config;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.topic)) {
      query["Topic"] = request.topic;
    }

    if (!$dara.isNull(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTopicConfig",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateTopicConfigResponse>(await this.callApi(params, req, runtime), new UpdateTopicConfigResponse({}));
    } else {
      return $dara.cast<UpdateTopicConfigResponse>(await this.execute(params, req, runtime), new UpdateTopicConfigResponse({}));
    }

  }

  /**
   * Modifies the configurations of a topic. After you create a topic, you can modify the message retention period and maximum message size of the topic.
   * 
   * @param request - UpdateTopicConfigRequest
   * @returns UpdateTopicConfigResponse
   */
  async updateTopicConfig(request: UpdateTopicConfigRequest): Promise<UpdateTopicConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTopicConfigWithOptions(request, runtime);
  }

  /**
   * Updates the version of an instance.
   * 
   * @remarks
   * ## **Permissions**
   * A RAM user must be granted the required permissions before the RAM user calls the **UpgradeInstanceVersion** operation. For information about how to grant permissions, see [RAM policies](https://help.aliyun.com/document_detail/185815.html).
   * |API|Action|Resource|
   * |---|---|---|
   * |UpgradeInstanceVersion|UpdateInstance|acs:alikafka:*:*:{instanceId}|
   * ## **QPS limits**
   * You can send a maximum of two queries per second (QPS).
   * 
   * @param request - UpgradeInstanceVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeInstanceVersionResponse
   */
  async upgradeInstanceVersionWithOptions(request: UpgradeInstanceVersionRequest, runtime: $dara.RuntimeOptions): Promise<UpgradeInstanceVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.targetVersion)) {
      query["TargetVersion"] = request.targetVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeInstanceVersion",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpgradeInstanceVersionResponse>(await this.callApi(params, req, runtime), new UpgradeInstanceVersionResponse({}));
    } else {
      return $dara.cast<UpgradeInstanceVersionResponse>(await this.execute(params, req, runtime), new UpgradeInstanceVersionResponse({}));
    }

  }

  /**
   * Updates the version of an instance.
   * 
   * @remarks
   * ## **Permissions**
   * A RAM user must be granted the required permissions before the RAM user calls the **UpgradeInstanceVersion** operation. For information about how to grant permissions, see [RAM policies](https://help.aliyun.com/document_detail/185815.html).
   * |API|Action|Resource|
   * |---|---|---|
   * |UpgradeInstanceVersion|UpdateInstance|acs:alikafka:*:*:{instanceId}|
   * ## **QPS limits**
   * You can send a maximum of two queries per second (QPS).
   * 
   * @param request - UpgradeInstanceVersionRequest
   * @returns UpgradeInstanceVersionResponse
   */
  async upgradeInstanceVersion(request: UpgradeInstanceVersionRequest): Promise<UpgradeInstanceVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeInstanceVersionWithOptions(request, runtime);
  }

  /**
   * Upgrades a pay-as-you-go ApsaraMQ for Kafka instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing method and pricing of pay-as-you-go Message Queue for Apache Kafka instances. For more information, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * @param tmpReq - UpgradePostPayOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradePostPayOrderResponse
   */
  async upgradePostPayOrderWithOptions(tmpReq: UpgradePostPayOrderRequest, runtime: $dara.RuntimeOptions): Promise<UpgradePostPayOrderResponse> {
    tmpReq.validate();
    let request = new UpgradePostPayOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.serverlessConfig)) {
      request.serverlessConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.serverlessConfig, "ServerlessConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.diskSize)) {
      query["DiskSize"] = request.diskSize;
    }

    if (!$dara.isNull(request.eipMax)) {
      query["EipMax"] = request.eipMax;
    }

    if (!$dara.isNull(request.eipModel)) {
      query["EipModel"] = request.eipModel;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ioMax)) {
      query["IoMax"] = request.ioMax;
    }

    if (!$dara.isNull(request.ioMaxSpec)) {
      query["IoMaxSpec"] = request.ioMaxSpec;
    }

    if (!$dara.isNull(request.partitionNum)) {
      query["PartitionNum"] = request.partitionNum;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serverlessConfigShrink)) {
      query["ServerlessConfig"] = request.serverlessConfigShrink;
    }

    if (!$dara.isNull(request.specType)) {
      query["SpecType"] = request.specType;
    }

    if (!$dara.isNull(request.topicQuota)) {
      query["TopicQuota"] = request.topicQuota;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradePostPayOrder",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpgradePostPayOrderResponse>(await this.callApi(params, req, runtime), new UpgradePostPayOrderResponse({}));
    } else {
      return $dara.cast<UpgradePostPayOrderResponse>(await this.execute(params, req, runtime), new UpgradePostPayOrderResponse({}));
    }

  }

  /**
   * Upgrades a pay-as-you-go ApsaraMQ for Kafka instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing method and pricing of pay-as-you-go Message Queue for Apache Kafka instances. For more information, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * @param request - UpgradePostPayOrderRequest
   * @returns UpgradePostPayOrderResponse
   */
  async upgradePostPayOrder(request: UpgradePostPayOrderRequest): Promise<UpgradePostPayOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradePostPayOrderWithOptions(request, runtime);
  }

  /**
   * Upgrades a Message Queue for Apache Kafka instance that uses the subscription billing method.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing method and pricing of subscription Message Queue for Apache Kafka instances. For more information, see [Billing overview](https://help.aliyun.com/document_detail/84737.html).
   * 
   * @param tmpReq - UpgradePrePayOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradePrePayOrderResponse
   */
  async upgradePrePayOrderWithOptions(tmpReq: UpgradePrePayOrderRequest, runtime: $dara.RuntimeOptions): Promise<UpgradePrePayOrderResponse> {
    tmpReq.validate();
    let request = new UpgradePrePayOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.confluentConfig)) {
      request.confluentConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.confluentConfig, "ConfluentConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.confluentConfigShrink)) {
      query["ConfluentConfig"] = request.confluentConfigShrink;
    }

    if (!$dara.isNull(request.diskSize)) {
      query["DiskSize"] = request.diskSize;
    }

    if (!$dara.isNull(request.eipMax)) {
      query["EipMax"] = request.eipMax;
    }

    if (!$dara.isNull(request.eipModel)) {
      query["EipModel"] = request.eipModel;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ioMax)) {
      query["IoMax"] = request.ioMax;
    }

    if (!$dara.isNull(request.ioMaxSpec)) {
      query["IoMaxSpec"] = request.ioMaxSpec;
    }

    if (!$dara.isNull(request.paidType)) {
      query["PaidType"] = request.paidType;
    }

    if (!$dara.isNull(request.partitionNum)) {
      query["PartitionNum"] = request.partitionNum;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.specType)) {
      query["SpecType"] = request.specType;
    }

    if (!$dara.isNull(request.topicQuota)) {
      query["TopicQuota"] = request.topicQuota;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradePrePayOrder",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpgradePrePayOrderResponse>(await this.callApi(params, req, runtime), new UpgradePrePayOrderResponse({}));
    } else {
      return $dara.cast<UpgradePrePayOrderResponse>(await this.execute(params, req, runtime), new UpgradePrePayOrderResponse({}));
    }

  }

  /**
   * Upgrades a Message Queue for Apache Kafka instance that uses the subscription billing method.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing method and pricing of subscription Message Queue for Apache Kafka instances. For more information, see [Billing overview](https://help.aliyun.com/document_detail/84737.html).
   * 
   * @param request - UpgradePrePayOrderRequest
   * @returns UpgradePrePayOrderResponse
   */
  async upgradePrePayOrder(request: UpgradePrePayOrderRequest): Promise<UpgradePrePayOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradePrePayOrderWithOptions(request, runtime);
  }

}
