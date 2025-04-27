// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class CreateAccountResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID that is used to create the password.
   * 
   * @example
   * LTAI****************
   */
  accessKey?: string;
  /**
   * @remarks
   * The timestamp that indicates when the password was created. Unit: milliseconds.
   * 
   * @example
   * 1671175303522
   */
  createTimeStamp?: number;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RabbitMQ instance.
   * 
   * @example
   * amqp-cn-*********
   */
  instanceId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID or RAM user to which the AccessKey pair that is used to create the static username and password belongs.
   * 
   * @example
   * 15657*********01
   */
  masterUId?: number;
  /**
   * @remarks
   * The created static password.
   * 
   * @example
   * NEMxQTYzNjdDRTVDNDI1NUU5NjE3**************1MzNGODoxNjcxMTc1MzEzNTIy
   */
  password?: string;
  /**
   * @remarks
   * The created static username.
   * 
   * @example
   * MjphbXFwLWNuLXVxbTJ6cjc2djAwMzpMVEFJNX*******ZNMWVSWnRFSjZ2Zm8=
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      createTimeStamp: 'CreateTimeStamp',
      instanceId: 'InstanceId',
      masterUId: 'MasterUId',
      password: 'Password',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      createTimeStamp: 'number',
      instanceId: 'string',
      masterUId: 'number',
      password: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyDataTags extends $dara.Model {
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

export class GetInstanceResponseBodyData extends $dara.Model {
  /**
   * @example
   * false
   */
  autoRenewInstance?: boolean;
  /**
   * @example
   * amqp-cn-st21x7kv****.not-support
   */
  classicEndpoint?: string;
  encryptedInstance?: boolean;
  /**
   * @example
   * 1651507200000
   */
  expireTime?: number;
  /**
   * @example
   * amqp-cn-*********
   */
  instanceId?: string;
  /**
   * @example
   * yunQi-instance
   */
  instanceName?: string;
  /**
   * @example
   * enterprise
   */
  instanceType?: string;
  kmsKeyId?: string;
  /**
   * @example
   * 1500
   */
  maxConnections?: number;
  /**
   * @example
   * 1000
   */
  maxEipTps?: number;
  /**
   * @example
   * 1000
   */
  maxQueue?: number;
  /**
   * @example
   * 1000
   */
  maxTps?: number;
  /**
   * @example
   * 50
   */
  maxVhost?: number;
  /**
   * @example
   * 1651507200000
   */
  orderCreateTime?: number;
  /**
   * @example
   * PRE_PAID
   */
  orderType?: string;
  /**
   * @example
   * amqp-cn-st21x7kv****.mq-amqp.cn-hangzhou-a.aliyuncs.com
   */
  privateEndpoint?: string;
  /**
   * @example
   * xxx.cn-hangzhou.xxx.net.mq.amqp.aliyuncs.com
   */
  publicEndpoint?: string;
  resourceGroupId?: string;
  /**
   * @example
   * SERVING
   */
  status?: string;
  /**
   * @example
   * 200
   */
  storageSize?: number;
  /**
   * @example
   * true
   */
  supportEIP?: boolean;
  /**
   * @example
   * True
   */
  supportTracing?: boolean;
  tags?: GetInstanceResponseBodyDataTags[];
  /**
   * @example
   * 15
   */
  tracingStorageTime?: number;
  static names(): { [key: string]: string } {
    return {
      autoRenewInstance: 'AutoRenewInstance',
      classicEndpoint: 'ClassicEndpoint',
      encryptedInstance: 'EncryptedInstance',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      kmsKeyId: 'KmsKeyId',
      maxConnections: 'MaxConnections',
      maxEipTps: 'MaxEipTps',
      maxQueue: 'MaxQueue',
      maxTps: 'MaxTps',
      maxVhost: 'MaxVhost',
      orderCreateTime: 'OrderCreateTime',
      orderType: 'OrderType',
      privateEndpoint: 'PrivateEndpoint',
      publicEndpoint: 'PublicEndpoint',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      storageSize: 'StorageSize',
      supportEIP: 'SupportEIP',
      supportTracing: 'SupportTracing',
      tags: 'Tags',
      tracingStorageTime: 'TracingStorageTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewInstance: 'boolean',
      classicEndpoint: 'string',
      encryptedInstance: 'boolean',
      expireTime: 'number',
      instanceId: 'string',
      instanceName: 'string',
      instanceType: 'string',
      kmsKeyId: 'string',
      maxConnections: 'number',
      maxEipTps: 'number',
      maxQueue: 'number',
      maxTps: 'number',
      maxVhost: 'number',
      orderCreateTime: 'number',
      orderType: 'string',
      privateEndpoint: 'string',
      publicEndpoint: 'string',
      resourceGroupId: 'string',
      status: 'string',
      storageSize: 'number',
      supportEIP: 'boolean',
      supportTracing: 'boolean',
      tags: { 'type': 'array', 'itemType': GetInstanceResponseBodyDataTags },
      tracingStorageTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetadataAmountResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of created exchanges on the ApsaraMQ for RabbitMQ instance.
   * 
   * @example
   * 7
   */
  currentExchanges?: number;
  /**
   * @remarks
   * The number of created queues on the ApsaraMQ for RabbitMQ instance.
   * 
   * @example
   * 1
   */
  currentQueues?: number;
  /**
   * @remarks
   * The number of created vhosts on the ApsaraMQ for RabbitMQ instance.
   * 
   * @example
   * 1
   */
  currentVirtualHosts?: number;
  /**
   * @remarks
   * The maximum number of exchanges that can be created on the ApsaraMQ for RabbitMQ instance.
   * 
   * @example
   * 20
   */
  maxExchanges?: number;
  /**
   * @remarks
   * The maximum number of queues that can be created on the ApsaraMQ for RabbitMQ instance.
   * 
   * @example
   * 20
   */
  maxQueues?: number;
  /**
   * @remarks
   * The maximum number of vhosts that can be created on the ApsaraMQ for RabbitMQ instance.
   * 
   * @example
   * 10
   */
  maxVirtualHosts?: number;
  static names(): { [key: string]: string } {
    return {
      currentExchanges: 'CurrentExchanges',
      currentQueues: 'CurrentQueues',
      currentVirtualHosts: 'CurrentVirtualHosts',
      maxExchanges: 'MaxExchanges',
      maxQueues: 'MaxQueues',
      maxVirtualHosts: 'MaxVirtualHosts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentExchanges: 'number',
      currentQueues: 'number',
      currentVirtualHosts: 'number',
      maxExchanges: 'number',
      maxQueues: 'number',
      maxVirtualHosts: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBindingsResponseBodyDataBindings extends $dara.Model {
  /**
   * @remarks
   * The x-match attribute. Valid values:
   * 
   * *   **all:** A headers exchange routes a message to a queue only if all binding attributes of the queue except for x-match match the headers attributes of the message. This value is the default value.
   * *   **any:** A headers exchange routes a message to a queue if one or more binding attributes of the queue except for x-match match the headers attributes of the message.
   * 
   * This parameter is available only for headers exchanges.
   * 
   * @example
   * all
   */
  argument?: string;
  /**
   * @remarks
   * The binding key.
   * 
   * *   If the source exchange is not a topic exchange, the binding key must meet the following conventions:
   * 
   *     *   The binding key can contain only letters, digits, hyphens (-), underscores (_), periods (.), forward slashes (/), and at signs (@).
   *     *   The binding key must be 1 to 255 characters in length.
   * 
   * *   If the source exchange is a topic exchange, the binding key must meet the following conventions:
   * 
   *     *   The binding key can contain letters, digits, hyphens (-), underscores (_), asterisks (\\*), periods (.), number signs (#), forward slashes (/), and at signs (@).
   *     *   The binding key cannot start or end with a period (.). If a binding key starts with a number sign (#) or an asterisk (\\*), the number sign (#) or asterisk (\\*) must be followed by a period (.). If the binding key ends with a number sign (#) or an asterisk (\\*), the number sign (#) or asterisk (\\*) must be preceded by a period (.). If a number sign (#) or an asterisk (\\*) is used in the middle of a binding key, the number sign (#) or asterisk (\\*) must be preceded and followed by a period (.).
   *     *   The binding key must be 1 to 255 characters in length.
   * 
   * @example
   * amq.test
   */
  bindingKey?: string;
  /**
   * @remarks
   * The type of the object to which the source exchange is bound. Valid values:
   * 
   * *   **QUEUE**
   * *   **EXCHANGE**
   * 
   * @example
   * QUEUE
   */
  bindingType?: string;
  /**
   * @remarks
   * The name of the object to which the source exchange is bound.
   * 
   * @example
   * QueueTest
   */
  destinationName?: string;
  /**
   * @remarks
   * The name of the source exchange.
   * 
   * @example
   * test
   */
  sourceExchange?: string;
  static names(): { [key: string]: string } {
    return {
      argument: 'Argument',
      bindingKey: 'BindingKey',
      bindingType: 'BindingType',
      destinationName: 'DestinationName',
      sourceExchange: 'SourceExchange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      argument: 'string',
      bindingKey: 'string',
      bindingType: 'string',
      destinationName: 'string',
      sourceExchange: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBindingsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The bindings.
   */
  bindings?: ListBindingsResponseBodyDataBindings[];
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the end of the current returned page. If this parameter is empty, all data is retrieved.
   * 
   * @example
   * caebacccb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      bindings: 'Bindings',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindings: { 'type': 'array', 'itemType': ListBindingsResponseBodyDataBindings },
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bindings)) {
      $dara.Model.validateArray(this.bindings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDownStreamBindingsResponseBodyDataBindings extends $dara.Model {
  /**
   * @remarks
   * The x-match attribute. Valid values:
   * 
   * *   **all:** A headers exchange routes a message to a queue only if all binding attributes of the queue except for x-match match the headers attributes of the message. This value is the default value.
   * *   **any:** A headers exchange routes a message to a queue if one or more binding attributes of the queue except for x-match match the headers attributes of the message.
   * 
   * This parameter is available only for headers exchanges.
   * 
   * @example
   * test
   */
  argument?: string;
  /**
   * @remarks
   * The binding key.
   * 
   * *   If the source exchange is not a topic exchange, the binding key must meet the following conventions:
   * 
   *     *   The binding key can contain only letters, digits, hyphens (-), underscores (_), periods (.), forward slashes (/), and at signs (@).
   *     *   The binding key must be 1 to 255 characters in length.
   * 
   * *   If the source exchange is a topic exchange, the binding key must meet the following conventions:
   * 
   *     *   The binding key can contain letters, digits, hyphens (-), underscores (_), periods (.), number signs (#), forward slashes (/), and at signs (@).
   *     *   The binding key cannot start or end with a period (.). If a binding key starts with a number sign (#) or an asterisk (\\*), the number sign (#) or asterisk (\\*) must be followed by a period (.). If the binding key ends with a number sign (#) or an asterisk (\\*), the number sign (#) or asterisk (\\*) must be preceded by a period (.). If a number sign (#) or an asterisk (\\*) is used in the middle of a binding key, the number sign (#) or asterisk (\\*) must be preceded and followed by a period (.).
   *     *   The binding key must be 1 to 255 characters in length.
   * 
   * @example
   * amq.test
   */
  bindingKey?: string;
  /**
   * @remarks
   * The type of the object to which the source exchange is bound. Valid values:
   * 
   * *   **QUEUE**
   * *   **EXCHANGE**
   * 
   * @example
   * QUEUE
   */
  bindingType?: string;
  /**
   * @remarks
   * The name of the object to which the source exchange is bound.
   * 
   * @example
   * QueueTest
   */
  destinationName?: string;
  /**
   * @remarks
   * The name of the source exchange.
   * 
   * @example
   * test
   */
  sourceExchange?: string;
  static names(): { [key: string]: string } {
    return {
      argument: 'Argument',
      bindingKey: 'BindingKey',
      bindingType: 'BindingType',
      destinationName: 'DestinationName',
      sourceExchange: 'SourceExchange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      argument: 'string',
      bindingKey: 'string',
      bindingType: 'string',
      destinationName: 'string',
      sourceExchange: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDownStreamBindingsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The bindings.
   */
  bindings?: ListDownStreamBindingsResponseBodyDataBindings[];
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the end of the current returned page. If this parameter is empty, all data is retrieved.
   * 
   * @example
   * caebacccb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      bindings: 'Bindings',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindings: { 'type': 'array', 'itemType': ListDownStreamBindingsResponseBodyDataBindings },
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bindings)) {
      $dara.Model.validateArray(this.bindings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExchangeUpStreamBindingsResponseBodyDataBindings extends $dara.Model {
  /**
   * @remarks
   * The x-match attribute. Valid values:
   * 
   * *   **all:** A headers exchange routes a message to a queue only if all binding attributes of the queue except for x-match match the headers attributes of the message. This value is the default value.
   * *   **any:** A headers exchange routes a message to a queue if one or more binding attributes of the queue except for x-match match the headers attributes of the message.
   * 
   * This parameter is available only for headers exchanges.
   * 
   * @example
   * all
   */
  argument?: string;
  /**
   * @remarks
   * The binding key.
   * 
   * *   If the source exchange is not a topic exchange, the binding key must meet the following conventions:
   * 
   *     *   The binding key can contain only letters, digits, hyphens (-), underscores (_), periods (.), forward slashes (/), and at signs (@).
   *     *   The binding key must be 1 to 255 characters in length.
   * 
   * *   If the source exchange is a topic exchange, the binding key must meet the following conventions:
   * 
   *     *   The binding key can contain letters, digits, hyphens (-), underscores (_), periods (.), number signs (#), forward slashes (/), and at signs (@).
   *     *   The binding key cannot start or end with a period (.). If a binding key starts with a number sign (#) or an asterisk (\\*), the number sign (#) or asterisk (\\*) must be followed by a period (.). If the binding key ends with a number sign (#) or an asterisk (\\*), the number sign (#) or asterisk (\\*) must be preceded by a period (.). If a number sign (#) or an asterisk (\\*) is used in the middle of a binding key, the number sign (#) or asterisk (\\*) must be preceded and followed by a period (.).
   *     *   The binding key must be 1 to 255 characters in length.
   * 
   * @example
   * amq.dle.test
   */
  bindingKey?: string;
  /**
   * @remarks
   * The type of the object to which the source exchange is bound. Valid values:
   * 
   * *   **QUEUE**
   * *   **EXCHANGE**
   * 
   * @example
   * EXCHANGE
   */
  bindingType?: string;
  /**
   * @remarks
   * The name of the object to which the source exchange is bound.
   * 
   * @example
   * test
   */
  destinationName?: string;
  /**
   * @remarks
   * The name of the source exchange.
   * 
   * @example
   * dle
   */
  sourceExchange?: string;
  static names(): { [key: string]: string } {
    return {
      argument: 'Argument',
      bindingKey: 'BindingKey',
      bindingType: 'BindingType',
      destinationName: 'DestinationName',
      sourceExchange: 'SourceExchange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      argument: 'string',
      bindingKey: 'string',
      bindingType: 'string',
      destinationName: 'string',
      sourceExchange: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExchangeUpStreamBindingsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The bindings.
   */
  bindings?: ListExchangeUpStreamBindingsResponseBodyDataBindings[];
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the end of the current returned page. If this parameter is empty, all data is retrieved.
   * 
   * @example
   * caebacccb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      bindings: 'Bindings',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindings: { 'type': 'array', 'itemType': ListExchangeUpStreamBindingsResponseBodyDataBindings },
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bindings)) {
      $dara.Model.validateArray(this.bindings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExchangesResponseBodyDataExchanges extends $dara.Model {
  /**
   * @remarks
   * The attributes. This parameter is unavailable in the current version.
   * 
   * @example
   * test
   */
  attributes?: { [key: string]: any };
  /**
   * @remarks
   * Indicates whether the exchange was automatically deleted.
   * 
   * @example
   * false
   */
  autoDeleteState?: boolean;
  /**
   * @remarks
   * The timestamp that indicates when the exchange was created. Unit: milliseconds.
   * 
   * @example
   * 1580886216000
   */
  createTime?: number;
  /**
   * @remarks
   * The exchange type.
   * 
   * @example
   * DIRECT
   */
  exchangeType?: string;
  /**
   * @remarks
   * The exchange name.
   * 
   * @example
   * amq.direct
   */
  name?: string;
  /**
   * @remarks
   * The vhost name.
   * 
   * @example
   * test
   */
  VHostName?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      autoDeleteState: 'AutoDeleteState',
      createTime: 'CreateTime',
      exchangeType: 'ExchangeType',
      name: 'Name',
      VHostName: 'VHostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      autoDeleteState: 'boolean',
      createTime: 'number',
      exchangeType: 'string',
      name: 'string',
      VHostName: 'string',
    };
  }

  validate() {
    if(this.attributes) {
      $dara.Model.validateMap(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExchangesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The exchanges.
   */
  exchanges?: ListExchangesResponseBodyDataExchanges[];
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the end of the current returned page.``
   * 
   * *   If the value of this parameter is empty, the next query is not required and the token used to start the next query is unavailable.``
   * *   If the value of this parameter is not empty, the next query is required, and the value is the token used to start the next query.``
   * 
   * @example
   * AAAANDQBYW1xcC1jbi03cHAybXdiY3AwMGEBdmhvc3QBAXNkZndhYWJhATE2NDkzMTM4OTU5NDIB4o3z1pPwWzk4aYuiRffi8R6-****
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      exchanges: 'Exchanges',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exchanges: { 'type': 'array', 'itemType': ListExchangesResponseBodyDataExchanges },
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.exchanges)) {
      $dara.Model.validateArray(this.exchanges);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyDataInstancesTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * region
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * hangzhou
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

export class ListInstancesResponseBodyDataInstances extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the instance is automatically renewed.
   * 
   * @example
   * false
   */
  autoRenewInstance?: boolean;
  /**
   * @remarks
   * The endpoint that is used to access the instance over the classic network. This parameter is no longer available.
   * 
   * @example
   * amqp-cn-st21x7kv****.not-support
   */
  classicEndpoint?: string;
  /**
   * @remarks
   * Indicates whether the encryption at rest feature is enabled for the instance.
   * 
   * @example
   * false
   */
  encryptedInstance?: boolean;
  /**
   * @remarks
   * The timestamp that indicates when the instance expires. Unit: milliseconds.
   * 
   * @example
   * 1651507200000
   */
  expireTime?: number;
  /**
   * @remarks
   * The instance ID
   * 
   * @example
   * amqp-cn-st21x7kv****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * amqp-cn-st21x7kv****
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * *   PROFESSIONAL: Professional Edition
   * *   ENTERPRISE: Enterprise Edition
   * *   VIP: Enterprise Platinum Edition
   * 
   * @example
   * professional
   */
  instanceType?: string;
  /**
   * @remarks
   * The ID of the Key Management Service (KMS) key used for the data disk.
   * 
   * @example
   * key-bjj66c2a893vmhawtq5fd
   */
  kmsKeyId?: string;
  /**
   * @remarks
   * The maximum number of Internet-based transactions per second (TPS) for the instance.
   * 
   * @example
   * 24832
   */
  maxEipTps?: number;
  /**
   * @remarks
   * The maximum number of queues on the instance.
   * 
   * @example
   * 50
   */
  maxQueue?: number;
  /**
   * @remarks
   * The maximum number of VPC-based TPS for the instance.
   * 
   * @example
   * 5000
   */
  maxTps?: number;
  /**
   * @remarks
   * The maximum number of vhosts on the instance.
   * 
   * @example
   * 50
   */
  maxVhost?: number;
  /**
   * @remarks
   * The timestamp that indicates when the order was created. Unit: milliseconds.
   * 
   * @example
   * 1572441939000
   */
  orderCreateTime?: number;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   PrePaid: the subscription billing method.
   * *   POST_PAID: the pay-as-you-go billing method.
   * 
   * @example
   * PRE_PAID
   */
  orderType?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) endpoint of the instance.
   * 
   * @example
   * amqp-cn-st21x7kv****.mq-amqp.cn-hangzhou-a.aliyuncs.com
   */
  privateEndpoint?: string;
  /**
   * @remarks
   * The public endpoint of the instance.
   * 
   * @example
   * amqp-cn-st21x7kv****.mq-amqp.cn-hangzhou-a.aliyuncs.com
   */
  publicEndpoint?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-aek3axfj2w4czrq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   * 
   * *   DEPLOYING: The instance is being deployed.
   * *   EXPIRED: The instance is expired.
   * *   SERVING: The instance is running.
   * *   RELEASED: The instance is released.
   * 
   * @example
   * SERVING
   */
  status?: string;
  /**
   * @remarks
   * The disk size. Unit: GB.
   * 
   * >  For Professional Edition instances and Enterprise Edition instances, this parameter is unavailable and \\*\\*-1\\*\\* is returned.
   * 
   * @example
   * 200
   */
  storageSize?: number;
  /**
   * @remarks
   * Indicates whether the instance supports elastic IP addresses (EIPs).
   * 
   * @example
   * true
   */
  supportEIP?: boolean;
  /**
   * @remarks
   * The tags that are added to the instance.
   */
  tags?: ListInstancesResponseBodyDataInstancesTags[];
  static names(): { [key: string]: string } {
    return {
      autoRenewInstance: 'AutoRenewInstance',
      classicEndpoint: 'ClassicEndpoint',
      encryptedInstance: 'EncryptedInstance',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      kmsKeyId: 'KmsKeyId',
      maxEipTps: 'MaxEipTps',
      maxQueue: 'MaxQueue',
      maxTps: 'MaxTps',
      maxVhost: 'MaxVhost',
      orderCreateTime: 'OrderCreateTime',
      orderType: 'OrderType',
      privateEndpoint: 'PrivateEndpoint',
      publicEndpoint: 'PublicEndpoint',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      storageSize: 'StorageSize',
      supportEIP: 'SupportEIP',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewInstance: 'boolean',
      classicEndpoint: 'string',
      encryptedInstance: 'boolean',
      expireTime: 'number',
      instanceId: 'string',
      instanceName: 'string',
      instanceType: 'string',
      kmsKeyId: 'string',
      maxEipTps: 'number',
      maxQueue: 'number',
      maxTps: 'number',
      maxVhost: 'number',
      orderCreateTime: 'number',
      orderType: 'string',
      privateEndpoint: 'string',
      publicEndpoint: 'string',
      resourceGroupId: 'string',
      status: 'string',
      storageSize: 'number',
      supportEIP: 'boolean',
      tags: { 'type': 'array', 'itemType': ListInstancesResponseBodyDataInstancesTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The instances.
   */
  instances?: ListInstancesResponseBodyDataInstances[];
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the end of the current returned page. If this parameter is empty, all data is retrieved.
   * 
   * @example
   * caebacccb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': ListInstancesResponseBodyDataInstances },
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueueConsumersResponseBodyDataConsumers extends $dara.Model {
  /**
   * @remarks
   * The consumer tag.
   * 
   * @example
   * sgen-1
   */
  consumerTag?: string;
  static names(): { [key: string]: string } {
    return {
      consumerTag: 'ConsumerTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerTag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueueConsumersResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The consumers.
   */
  consumers?: ListQueueConsumersResponseBodyDataConsumers[];
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the end of the current returned page. If this parameter is empty, all data is retrieved.
   * 
   * @example
   * caebacccb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      consumers: 'Consumers',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumers: { 'type': 'array', 'itemType': ListQueueConsumersResponseBodyDataConsumers },
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.consumers)) {
      $dara.Model.validateArray(this.consumers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueueUpStreamBindingsResponseBodyDataBindings extends $dara.Model {
  /**
   * @remarks
   * The x-match attribute. Valid values:
   * 
   * *   **all:** A headers exchange routes a message to a queue only if all binding attributes of the queue except for x-match match the headers attributes of the message. This value is the default value.
   * *   **any:** A headers exchange routes a message to a queue if one or more binding attributes of the queue except for x-match match the headers attributes of the message.
   * 
   * This parameter is available for only headers exchanges.
   * 
   * @example
   * all
   */
  argument?: string;
  /**
   * @remarks
   * The binding key.
   * 
   * *   If the source exchange is not a topic exchange, the binding key must meet the following conventions:
   * 
   *     *   The binding key can contain only letters, digits, hyphens (-), underscores (_), periods (.), forward slashes (/), and at signs (@).
   *     *   The binding key must be 1 to 255 characters in length.
   * 
   * *   If the source exchange is a topic exchange, the binding key must meet the following conventions:
   * 
   *     *   The binding key can contain letters, digits, hyphens (-), underscores (_), periods (.), number signs (#), forward slashes (/), and at signs (@).
   *     *   The binding key cannot start or end with a period (.). If a binding key starts with a number sign (#) or an asterisk (\\*), the number sign (#) or asterisk (\\*) must be followed by a period (.). If the binding key ends with a number sign (#) or an asterisk (\\*), the number sign (#) or asterisk (\\*) must be preceded by a period (.). If a number sign (#) or an asterisk (\\*) is used in the middle of a binding key, the number sign (#) or asterisk (\\*) must be preceded and followed by a period (.).
   *     *   The binding key must be 1 to 255 characters in length.
   * 
   * @example
   * amq.test
   */
  bindingKey?: string;
  /**
   * @remarks
   * The type of the object to which the source exchange is bound. Valid values:
   * 
   * *   **QUEUE**
   * *   **EXCHANGE**
   * 
   * @example
   * QUEUE
   */
  bindingType?: string;
  /**
   * @remarks
   * The name of the object to which the source exchange is bound.
   * 
   * @example
   * QueueTest
   */
  destinationName?: string;
  /**
   * @remarks
   * The name of the source exchange.
   * 
   * @example
   * test
   */
  sourceExchange?: string;
  static names(): { [key: string]: string } {
    return {
      argument: 'Argument',
      bindingKey: 'BindingKey',
      bindingType: 'BindingType',
      destinationName: 'DestinationName',
      sourceExchange: 'SourceExchange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      argument: 'string',
      bindingKey: 'string',
      bindingType: 'string',
      destinationName: 'string',
      sourceExchange: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueueUpStreamBindingsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The bindings.
   */
  bindings?: ListQueueUpStreamBindingsResponseBodyDataBindings[];
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 1
   */
  maxResults?: string;
  /**
   * @remarks
   * The token that marks the end of the current returned page. If this parameter is empty, all data is retrieved.
   * 
   * @example
   * caebacccb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      bindings: 'Bindings',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindings: { 'type': 'array', 'itemType': ListQueueUpStreamBindingsResponseBodyDataBindings },
      maxResults: 'string',
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bindings)) {
      $dara.Model.validateArray(this.bindings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueuesResponseBodyDataQueues extends $dara.Model {
  /**
   * @remarks
   * The attributes.
   * 
   * @example
   * test
   */
  attributes?: { [key: string]: any };
  /**
   * @remarks
   * Indicates whether the queue was automatically deleted.
   * 
   * @example
   * false
   */
  autoDeleteState?: boolean;
  /**
   * @remarks
   * The time when the queue was created.
   * 
   * @example
   * 1580887085240
   */
  createTime?: number;
  /**
   * @remarks
   * Indicates whether the queue is an exclusive queue.
   * 
   * @example
   * false
   */
  exclusiveState?: boolean;
  /**
   * @remarks
   * The time when messages in the queue were last consumed.
   * 
   * @example
   * 1680887085240
   */
  lastConsumeTime?: number;
  /**
   * @remarks
   * The queue name.
   * 
   * @example
   * QueueTest
   */
  name?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RabbitMQ instance to which the queue belongs.
   * 
   * @example
   * 1880770869023***
   */
  ownerId?: string;
  /**
   * @remarks
   * The vhost name.
   * 
   * @example
   * test
   */
  VHostName?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      autoDeleteState: 'AutoDeleteState',
      createTime: 'CreateTime',
      exclusiveState: 'ExclusiveState',
      lastConsumeTime: 'LastConsumeTime',
      name: 'Name',
      ownerId: 'OwnerId',
      VHostName: 'VHostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      autoDeleteState: 'boolean',
      createTime: 'number',
      exclusiveState: 'boolean',
      lastConsumeTime: 'number',
      name: 'string',
      ownerId: 'string',
      VHostName: 'string',
    };
  }

  validate() {
    if(this.attributes) {
      $dara.Model.validateMap(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueuesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the end of the current returned page. If this parameter is empty, all data is retrieved.
   * 
   * @example
   * caebacccb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The queues.
   */
  queues?: ListQueuesResponseBodyDataQueues[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      queues: 'Queues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      queues: { 'type': 'array', 'itemType': ListQueuesResponseBodyDataQueues },
    };
  }

  validate() {
    if(Array.isArray(this.queues)) {
      $dara.Model.validateArray(this.queues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVirtualHostsResponseBodyDataVirtualHosts extends $dara.Model {
  /**
   * @remarks
   * The vhost name.
   * 
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVirtualHostsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 2
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the end of the current returned page. If this parameter is empty, all data is retrieved.
   * 
   * @example
   * caebacccb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The vhosts.
   */
  virtualHosts?: ListVirtualHostsResponseBodyDataVirtualHosts[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      virtualHosts: 'VirtualHosts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      virtualHosts: { 'type': 'array', 'itemType': ListVirtualHostsResponseBodyDataVirtualHosts },
    };
  }

  validate() {
    if(Array.isArray(this.virtualHosts)) {
      $dara.Model.validateArray(this.virtualHosts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataValue extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID or Resource Access Management (RAM) user to which the AccessKey pair that is used to create the static username and password belongs.
   * 
   * @example
   * 1565************1
   */
  masterUid?: number;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RabbitMQ instance.
   * 
   * @example
   * amqp-cn-uqm******03
   */
  cInstanceId?: string;
  /**
   * @remarks
   * The AccessKey ID that is used to create the static username and password.
   * 
   * @example
   * LTAI****************
   */
  accessKey?: string;
  /**
   * @remarks
   * The static username.
   * 
   * @example
   * MjphbXFwLWNuLXVxbTJ6cjc2djAwMzpMVEFJNX*******ZNMWVSWnRFSjZ2Zm8=
   */
  userName?: string;
  /**
   * @remarks
   * The static password.
   * 
   * @example
   * OUYwQzM2QjZBRkUxNDRFM***************MzZCNzdDQzoxNjcxNDMwMzkyODI1
   */
  password?: string;
  /**
   * @remarks
   * The timestamp that indicates when the static username and password were deleted. Unit: milliseconds.
   * 
   * @example
   * 1671175303522
   */
  deleted?: number;
  /**
   * @remarks
   * The timestamp that indicates when the static username and password were created. Unit: milliseconds.
   * 
   * @example
   * 1671175303522
   */
  createTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      masterUid: 'masterUid',
      cInstanceId: 'cInstanceId',
      accessKey: 'accessKey',
      userName: 'userName',
      password: 'password',
      deleted: 'deleted',
      createTimestamp: 'createTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterUid: 'number',
      cInstanceId: 'string',
      accessKey: 'string',
      userName: 'string',
      password: 'string',
      deleted: 'number',
      createTimestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID of your Alibaba Cloud account or RAM user. For information about how to obtain an AccessKey pair, see [Create an AccessKey pair](https://help.aliyun.com/document_detail/116401.html).
   * 
   * >  If you use the pair of static username and password that is created by using the Accesskey pair of a RAM user to access ApsaraMQ for RabbitMQ to send and receive messages, make sure that the RAM user is granted the required permissions. For more information, see [RAM policies](https://help.aliyun.com/document_detail/146559.html).
   * 
   * This parameter is required.
   * 
   * @example
   * yourAccessKeyID
   */
  accountAccessKey?: string;
  /**
   * @remarks
   * The timestamp that indicates when the password is created. Unit: milliseconds.
   * 
   * >  This timestamp is specified by you and is used to generate a static password. The timestamp is not the timestamp that indicates when the system generates the password.
   * 
   * This parameter is required.
   * 
   * @example
   * 1671175303522
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The ID of the instance for which you want to create a pair of static username and password.
   * 
   * This parameter is required.
   * 
   * @example
   * amqp-cn-*********
   */
  instanceId?: string;
  /**
   * @remarks
   * The AccessKey secret signature. The system generates a static password based on the signature in the request, the AccessKey secret signature, and the username.
   * 
   * The system uses the HMAC-SHA1 algorithm to generate the AccessKey secret signature based on the timestamp that indicates when the username is created and the AccessKey ID. For more information, see the **"Sample code on how to generate a signature"** section of this topic.
   * 
   * This parameter is required.
   * 
   * @example
   * 4c1a6367ce4c4255e9617326f9133ac635******
   */
  secretSign?: string;
  /**
   * @remarks
   * The signature. The system generates a static password based on the signature in the request, the AccessKey secret signature, and the username.
   * 
   * The system uses the HMAC-SHA1 algorithm to generate the signature based on the timestamp that indicates when the username is created and the AccessKey ID. For more information, see the **"Sample code on how to generate a signature"** section of this topic.
   * 
   * This parameter is required.
   * 
   * @example
   * 22c2d7d1769cb53c5a6d9213248e2de524******
   */
  signature?: string;
  /**
   * @remarks
   * The static username that you want to create.
   * 
   * The value of this parameter is a Base64-encoded string that is generated based on the instance ID and AccessKey ID. For more information, see the "**Sample code on how to generate a username**" section of this topic.
   * 
   * This parameter is required.
   * 
   * @example
   * Mjo****************
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      accountAccessKey: 'accountAccessKey',
      createTimestamp: 'createTimestamp',
      instanceId: 'instanceId',
      secretSign: 'secretSign',
      signature: 'signature',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountAccessKey: 'string',
      createTimestamp: 'number',
      instanceId: 'string',
      secretSign: 'string',
      signature: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: CreateAccountResponseBodyData;
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
   * 92385FD2-624A-48C9-8FB5-753F2AFA***
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
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: CreateAccountResponseBodyData,
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

export class CreateAccountResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAccountResponseBody;
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
      body: CreateAccountResponseBody,
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

export class CreateBindingRequest extends $dara.Model {
  /**
   * @remarks
   * The key-value pairs that are configured for the headers attributes of a message. One or more key-value pairs can be concatenated to configure the headers attributes of a message. You must specify the x-match attribute as one of the valid values. You can specify custom values for other attributes. Valid values of the x-match attribute:
   * 
   * *   \\*\\*all: \\*\\*A headers exchange routes a message to a queue only if all binding attributes of the queue except for x-match match the headers attributes of the message. This value is the default value.
   * *   \\*\\*any: \\*\\*A headers exchange routes a message to a queue if one or more binding attributes of the queue except for x-match match the headers attributes of the message.
   * 
   * Separate the attributes with semicolons (;). Separate the key and value of an attribute with a colon (:). Example: x-match:all;type:report;format:pdf. This parameter is available for only headers exchanges. You can set this parameter to an arbitrary value for other types of exchanges.
   * 
   * @example
   * x-match:all;type:report;format:pdf
   */
  argument?: string;
  /**
   * @remarks
   * The binding key.
   * 
   * *   If the source exchange is not a topic exchange, the binding key must meet the following conventions:
   * 
   *     *   The binding key can contain only letters, digits, hyphens (-), underscores (_), periods (.), forward slashes (/), and at signs (@).
   *     *   The binding key must be 1 to 255 characters in length.
   * 
   * *   If the source exchange is a topic exchange, the binding key must meet the following conventions:
   * 
   *     *   The binding key can contain letters, digits, hyphens (-), underscores (_), asterisks (\\*), periods (.), number signs (#), forward slashes (/), and at signs (@).
   *     *   The binding key cannot start or end with a period (.). If a binding key starts with a number sign (#) or an asterisk (\\*), the number sign (#) or asterisk (\\*) must be followed by a period (.). If the binding key ends with a number sign (#) or an asterisk (\\*), the number sign (#) or asterisk (\\*) must be preceded by a period (.). If a number sign (#) or an asterisk (\\*) is used in the middle of a binding key, the number sign (#) or asterisk (\\*) must be preceded and followed by a period (.).
   *     *   The binding key must be 1 to 255 characters in length.
   * 
   * @example
   * .test
   */
  bindingKey?: string;
  /**
   * @remarks
   * The type of the object that you want to bind to the source exchange. Valid values:
   * 
   * *   \\*\\*0: \\*\\*Queue
   * *   \\*\\*1: \\*\\*Exchange
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  bindingType?: string;
  /**
   * @remarks
   * The name of the object that you want to bind to the source exchange. You must create the object in the ApsaraMQ for RabbitMQ console in advance. The vhost of the object is the same as the vhost to which the source exchange specified by **SourceExchange** belongs. The vhost of the source exchange is the one specified by **VirtualHost**.
   * 
   * This parameter is required.
   * 
   * @example
   * DemoQueue
   */
  destinationName?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RabbitMQ instance.
   * 
   * This parameter is required.
   * 
   * @example
   * amqp-cn-v0h1kb9nu***
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the source exchange. You must create the source exchange in the ApsaraMQ for RabbitMQ console in advance.
   * 
   * This parameter is required.
   * 
   * @example
   * NormalEX
   */
  sourceExchange?: string;
  /**
   * @remarks
   * The virtual host (vhost) name. You must create the vhost in the ApsaraMQ for RabbitMQ console in advance. The object specified by **DestinationName** and the source exchange specified by **SourceExchange** must belong to the vhost.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  virtualHost?: string;
  static names(): { [key: string]: string } {
    return {
      argument: 'Argument',
      bindingKey: 'BindingKey',
      bindingType: 'BindingType',
      destinationName: 'DestinationName',
      instanceId: 'InstanceId',
      sourceExchange: 'SourceExchange',
      virtualHost: 'VirtualHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      argument: 'string',
      bindingKey: 'string',
      bindingType: 'string',
      destinationName: 'string',
      instanceId: 'string',
      sourceExchange: 'string',
      virtualHost: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBindingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 09768C14-E51C-4F4A-8077-30810032C***
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

export class CreateBindingResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateBindingResponseBody;
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
      body: CreateBindingResponseBody,
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

export class CreateExchangeRequest extends $dara.Model {
  /**
   * @remarks
   * The alternate exchange. An alternate exchange is used to receive messages that fail to be routed to queues from the current exchange.
   * 
   * @example
   * DemoAE
   */
  alternateExchange?: string;
  /**
   * @remarks
   * Specifies whether to automatically delete the exchange. Valid values:
   * 
   * *   **true**: If the last queue that is bound to the exchange is unbound, the exchange is automatically deleted.
   * *   **false**: If the last queue that is bound to the exchange is unbound, the exchange is not automatically deleted.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  autoDeleteState?: boolean;
  /**
   * @remarks
   * The name of the exchange that you want to create. The exchange name must meet the following conventions:
   * 
   * *   The name must be 1 to 255 characters in length, and can contain only letters, digits, hyphens (-), underscores (_), periods (.), number signs (#), forward slashes (/), and at signs (@).
   * *   After the exchange is created, you cannot change its name. If you want to change its name, delete the exchange and create another exchange.
   * 
   * This parameter is required.
   * 
   * @example
   * DemoExchange
   */
  exchangeName?: string;
  /**
   * @remarks
   * The exchange type. Valid values:
   * 
   * *   **DIRECT**: An exchange of this type routes a message to the queue whose binding key is exactly the same as the routing key of the message.
   * *   **TOPIC**: This type of exchange is similar to direct exchanges. An exchange of this type routes a message to one or more queues based on the results of the fuzzy match or multi-condition match between the routing key of the message and the binding keys of the current exchange.
   * *   **FANOUT**: An exchange of this type routes all received messages to all queues bound to this exchange. You can use a fanout exchange to broadcast messages.
   * *   **HEADERS**: This type of exchange is similar to direct exchanges. The only difference is that a headers exchange routes messages based on the headers attributes instead of routing keys. When you bind a headers exchange to a queue, you must configure binding attributes in the key-value format for the binding. When you send a message to a headers exchange, you must configure the headers attributes in the key-value format for the message. After a headers exchange receives a message, the exchange routes the message based on the matching results between the headers attributes of the message and the binding attributes of the bound queues.
   * *   **X-CONSISTENT-HASH**: An exchange of this type allows you to perform hash calculations on routing keys or header values and use consistent hashing to route a message to different queues.
   * 
   * This parameter is required.
   * 
   * @example
   * DIRECT
   */
  exchangeType?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RabbitMQ for which you want to create an exchange.
   * 
   * This parameter is required.
   * 
   * @example
   * amqp-cn-v0h1kb9nu***
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether the exchange is an internal exchange. Valid values:
   * 
   * *   **false**
   * *   **true**
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  internal?: boolean;
  /**
   * @remarks
   * The name of the vhost to which the exchange that you want to create belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  virtualHost?: string;
  XDelayedType?: string;
  static names(): { [key: string]: string } {
    return {
      alternateExchange: 'AlternateExchange',
      autoDeleteState: 'AutoDeleteState',
      exchangeName: 'ExchangeName',
      exchangeType: 'ExchangeType',
      instanceId: 'InstanceId',
      internal: 'Internal',
      virtualHost: 'VirtualHost',
      XDelayedType: 'XDelayedType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alternateExchange: 'string',
      autoDeleteState: 'boolean',
      exchangeName: 'string',
      exchangeType: 'string',
      instanceId: 'string',
      internal: 'boolean',
      virtualHost: 'string',
      XDelayedType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExchangeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 021788F6-E50C-4BD6-9F80-66B0A19A6***
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

export class CreateExchangeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateExchangeResponseBody;
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
      body: CreateExchangeResponseBody,
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

export class CreateInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * 
   * *   true: enables auto-renewal.
   * *   false: disables auto-renewal. If you select this value, you must manually renew the instance.
   * 
   * @example
   * AutoRenewal
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal period. The unit of the auto-renewal period is specified by RenewalDurationUnit. Default value: Month.
   * 
   * >  This parameter takes effect only if you set AutoRenew to true. Default value: 1.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The client token.
   * 
   * @example
   * c2c5d1274axxxxxxxx
   */
  clientToken?: string;
  edition?: string;
  /**
   * @remarks
   * Specifies whether to enable storage encryption for the instance. This parameter is available only for exclusive instances.
   * 
   * @example
   * false
   */
  encryptedInstance?: boolean;
  /**
   * @remarks
   * The name of the instance. We recommend that you specify a name that does not exceed 64 characters in length.
   * 
   * @example
   * amqp-xxxxx
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance edition. Valid values if you create a subscription instance:
   * 
   * *   professional: Professional Edition.
   * *   enterprise: Enterprise Edition
   * *   vip: Enterprise Platinum Edition
   * 
   * If you create a serverless instance, you do not need to specify this parameter.
   * 
   * @example
   * professional
   */
  instanceType?: string;
  /**
   * @remarks
   * The ID of the Key Management Service (KMS)-managed key used for storage encryption. This parameter is available only for exclusive instances and required only if you set EncryptedInstance to true. The key must meet the following conditions:
   * 
   * *   The key cannot be a service key.
   * *   The key must be in the Enabled state.
   * *   The key must be a symmetric key.
   * *   The key must be used for encryption and decryption.
   * *   After the key is expired or deleted, you cannot read or write data and exceptions can occur in the ApsaraMQ for RabbitMQ instance.
   * 
   * @example
   * key-xxx
   */
  kmsKeyId?: string;
  /**
   * @remarks
   * The maximum number of connections that can be established to the instance.
   * 
   * Configure this parameter based on the values provided on the [ApsaraMQ for RocketMQ buy page](https://common-buy.aliyun.com/?commodityCode=ons_onsproxy_pre).
   * 
   * @example
   * 50000
   */
  maxConnections?: number;
  /**
   * @remarks
   * The maximum number of Internet-based TPS on the instance.
   * 
   * Configure this parameter based on the values provided on the [ApsaraMQ for RocketMQ buy page](https://common-buy.aliyun.com/?commodityCode=ons_onsproxy_pre).
   * 
   * @example
   * 128
   */
  maxEipTps?: number;
  /**
   * @remarks
   * The maximum number of virtual private cloud (VPC)-based transactions per second (TPS) on the instance.
   * 
   * Configure this parameter based on the values provided on the [ApsaraMQ for RocketMQ buy page](https://common-buy.aliyun.com/?commodityCode=ons_onsproxy_pre).
   * 
   * @example
   * 1000
   */
  maxPrivateTps?: number;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   Subscription: subscription instance
   * *   PayAsYouGo: serverless instance
   * 
   * This parameter is required.
   * 
   * @example
   * Subscription
   */
  paymentType?: string;
  /**
   * @remarks
   * The subscription period. The unit of the subscription period is specified by periodCycle.
   * 
   * >  This parameter takes effect only if you set PaymentType to Subscription. Default value: 1.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription period. Valid values:
   * 
   * *   Month
   * *   Year
   * 
   * This parameter is valid only if you set PaymentType to Subscription. Default value: Month.
   * 
   * @example
   * Month
   */
  periodCycle?: string;
  provisionedCapacity?: number;
  /**
   * @remarks
   * The number of queues on the instance.
   * 
   * Configure this parameter based on the values provided on the [ApsaraMQ for RocketMQ buy page](https://common-buy.aliyun.com/?commodityCode=ons_onsproxy_pre).
   * 
   * @example
   * 1000
   */
  queueCapacity?: number;
  /**
   * @remarks
   * The renewal status. This parameter is the same as AutoRenew. You can configure one of these parameters. Valid value:
   * 
   * *   AutoRenewal
   * 
   * >  If you configure both this parameter and AutoRenew, the value of this parameter is used.
   * 
   * @example
   * false
   */
  renewStatus?: string;
  /**
   * @remarks
   * The unit of the auto-renewal period. Valid values:
   * 
   * *   Month
   * *   Year
   * 
   * @example
   * Month
   */
  renewalDurationUnit?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-acfmvvajg5qkxhi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The billing method of the serverless instance. Valid value:
   * 
   * *   onDemand: You are charged based on your actual usage.
   * 
   * @example
   * onDemand
   */
  serverlessChargeType?: string;
  /**
   * @remarks
   * The storage capacity. Unit: GB. Valid values:
   * 
   * *   Professional Edition and Enterprise Edition instances: Set the value to 0.
   * 
   * >  The value 0 specifies that storage space is available for Professional Edition and Enterprise Edition instances, but no storage fees are generated.
   * 
   * *   Enterprise Platinum Edition instances: Set the value to m × 100, where m is an integer that ranges from 7 to 28.
   * 
   * @example
   * 7
   */
  storageSize?: number;
  /**
   * @remarks
   * Specifies whether elastic IP addresses (EIPs) are supported. Valid values:
   * 
   * *   True
   * *   False
   * 
   * @example
   * true
   */
  supportEip?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the message trace feature. Valid values:
   * 
   * *   true
   * *   false
   * 
   * > 
   * 
   * *   Enterprise Platinum Edition instances allow you to retain message traces for 15 days free of charge. If you create an Enterprise Platinum Edition instance, you can set this parameter only to true and TracingStorageTime only to 15.
   * 
   * *   For instances of other editions, you can set this parameter to true or false.
   * 
   * @example
   * true
   */
  supportTracing?: boolean;
  /**
   * @remarks
   * The retention period of messages. Unit: days. Valid values:
   * 
   * *   3
   * *   7
   * *   15
   * 
   * This parameter is valid only if you set SupportTracing to true.
   * 
   * @example
   * 3
   */
  tracingStorageTime?: number;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      clientToken: 'ClientToken',
      edition: 'Edition',
      encryptedInstance: 'EncryptedInstance',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      kmsKeyId: 'KmsKeyId',
      maxConnections: 'MaxConnections',
      maxEipTps: 'MaxEipTps',
      maxPrivateTps: 'MaxPrivateTps',
      paymentType: 'PaymentType',
      period: 'Period',
      periodCycle: 'PeriodCycle',
      provisionedCapacity: 'ProvisionedCapacity',
      queueCapacity: 'QueueCapacity',
      renewStatus: 'RenewStatus',
      renewalDurationUnit: 'RenewalDurationUnit',
      resourceGroupId: 'ResourceGroupId',
      serverlessChargeType: 'ServerlessChargeType',
      storageSize: 'StorageSize',
      supportEip: 'SupportEip',
      supportTracing: 'SupportTracing',
      tracingStorageTime: 'TracingStorageTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      clientToken: 'string',
      edition: 'string',
      encryptedInstance: 'boolean',
      instanceName: 'string',
      instanceType: 'string',
      kmsKeyId: 'string',
      maxConnections: 'number',
      maxEipTps: 'number',
      maxPrivateTps: 'number',
      paymentType: 'string',
      period: 'number',
      periodCycle: 'string',
      provisionedCapacity: 'number',
      queueCapacity: 'number',
      renewStatus: 'string',
      renewalDurationUnit: 'string',
      resourceGroupId: 'string',
      serverlessChargeType: 'string',
      storageSize: 'number',
      supportEip: 'boolean',
      supportTracing: 'boolean',
      tracingStorageTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBody extends $dara.Model {
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
   * The ID of the created instance.
   * 
   * @example
   * amqp-cn-xxxxx
   */
  data?: any;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * xxx failed,xxxx
   */
  message?: string;
  /**
   * @remarks
   * The request ID. You can use the ID to troubleshoot issues. This parameter is a common parameter.
   * 
   * @example
   * CCBB1225-C392-480E-8C7F-D09AB2CD2***
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
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'any',
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

export class CreateInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateInstanceResponseBody;
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
      body: CreateInstanceResponseBody,
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

export class CreateQueueRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically delete the queue. Valid values:
   * 
   * *   true: The queue is automatically deleted. After the last consumer unsubscribes from the queue, the queue is automatically deleted.
   * *   false: The queue is not automatically deleted.
   * 
   * @example
   * false
   */
  autoDeleteState?: boolean;
  /**
   * @remarks
   * The validity period after which the queue is automatically deleted. If the queue is not accessed within the specified period of time, the queue is automatically deleted.
   * 
   * Unit: milliseconds.
   * 
   * >  You can use the feature that corresponds to this parameter only after you enable the feature. To enable the feature, [submit a ticket](https://ticket-intl.console.aliyun.com/#/ticket/createIndex).
   * 
   * @example
   * 10000
   */
  autoExpireState?: number;
  /**
   * @remarks
   * The dead-letter exchange. A dead-letter exchange is used to receive rejected messages.
   * 
   * If a consumer rejects a message that cannot be redelivered, ApsaraMQ for RabbitMQ routes the message to the specified dead-letter exchange. Then, the dead-letter exchange routes the message to the queue that is bound to the dead-letter exchange for storage.
   * 
   * @example
   * DLExchange
   */
  deadLetterExchange?: string;
  /**
   * @remarks
   * The dead-letter routing key. The key must be 1 to 255 characters in length, and can contain only letters, digits, hyphens (-), underscores (_), periods (.), number signs (#), forward slashes (/), and at signs (@).
   * 
   * @example
   * test.dl
   */
  deadLetterRoutingKey?: string;
  /**
   * @remarks
   * Specifies whether the exchange is an exclusive exchange. Valid values:
   * 
   * *   true: The exchange is an exclusive exchange. Only the connection that declares the exclusive exchange can use the exclusive exchange. After the connection is closed, the exclusive exchange is automatically deleted.
   * *   false: The exchange is not an exclusive exchange.
   * 
   * @example
   * false
   */
  exclusiveState?: boolean;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RabbitMQ instance on which you want to create a queue.
   * 
   * This parameter is required.
   * 
   * @example
   * amqp-cn-v0h1kb9nu***
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is unavailable in the current version of ApsaraMQ for RabbitMQ.
   * 
   * The maximum number of messages that can be stored in the queue. If this threshold is exceeded, the earliest stored messages in the queue are deleted.
   * 
   * @example
   * 1000
   */
  maxLength?: number;
  /**
   * @remarks
   * Queue priorities are not supported. The value does not affect the call or return results.
   * 
   * @example
   * 10
   */
  maximumPriority?: number;
  /**
   * @remarks
   * The message time to live (TTL) of the queue.
   * 
   * *   If the retention period of a message in the queue exceeds the message TTL of the queue, the message expires.
   * *   The message TTL must be set to a non-negative integer. The maximum message TTL is one day. Unit: milliseconds. For example, if the message TTL is 1,000 milliseconds, the message can be retained for up to 1 second in the queue.
   * 
   * @example
   * 1000
   */
  messageTTL?: number;
  /**
   * @remarks
   * The name of the queue that you want to create.
   * 
   * *   The name must be 1 to 255 characters in length, and can contain only letters, digits, hyphens (-), underscores (_), periods (.), number signs (#), forward slashes (/), and at signs (@).
   * *   After the queue is created, you cannot change the name of the queue. If you want to change the name of the queue, delete the queue and create another queue.
   * 
   * This parameter is required.
   * 
   * @example
   * DemoQueue
   */
  queueName?: string;
  /**
   * @remarks
   * The name of the vhost to which the queue that you want to create belongs. The name must be 1 to 255 characters in length, and can contain only letters, digits, hyphens (-), underscores (_), periods (.), number signs (#), forward slashes (/), and at signs (@).
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  virtualHost?: string;
  static names(): { [key: string]: string } {
    return {
      autoDeleteState: 'AutoDeleteState',
      autoExpireState: 'AutoExpireState',
      deadLetterExchange: 'DeadLetterExchange',
      deadLetterRoutingKey: 'DeadLetterRoutingKey',
      exclusiveState: 'ExclusiveState',
      instanceId: 'InstanceId',
      maxLength: 'MaxLength',
      maximumPriority: 'MaximumPriority',
      messageTTL: 'MessageTTL',
      queueName: 'QueueName',
      virtualHost: 'VirtualHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoDeleteState: 'boolean',
      autoExpireState: 'number',
      deadLetterExchange: 'string',
      deadLetterRoutingKey: 'string',
      exclusiveState: 'boolean',
      instanceId: 'string',
      maxLength: 'number',
      maximumPriority: 'number',
      messageTTL: 'number',
      queueName: 'string',
      virtualHost: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQueueResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 59B52E2C-0B8E-44EC-A314-D0314A50***
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

export class CreateQueueResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateQueueResponseBody;
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
      body: CreateQueueResponseBody,
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

export class CreateVirtualHostRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraMQ for RabbitMQ instance.
   * 
   * This parameter is required.
   * 
   * @example
   * amqp-cn-v0h1kb9n***
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the vhost that you want to create. Valid values:
   * 
   * *   The name can contain letters, digits, hyphens (-), underscores (_), periods (.), number signs (#), forward slash (/), and at signs (@).
   * *   The name must be 1 to 255 characters in length.
   * *   After the vhost is created, you cannot change its name. If you want to change the name of a vhost, delete the vhost and create another vhost.
   * 
   * This parameter is required.
   * 
   * @example
   * Demo
   */
  virtualHost?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      virtualHost: 'VirtualHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      virtualHost: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVirtualHostResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 628705FD-03EE-4ABE-BB21-E1672960***
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

export class CreateVirtualHostResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateVirtualHostResponseBody;
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
      body: CreateVirtualHostResponseBody,
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

export class DeleteAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The timestamp that indicates when the pair of static username and password that you want to delete was created. Unit: milliseconds.
   * 
   * You can call the [ListAccounts](https://help.aliyun.com/document_detail/472730.html) operation to view the timestamp.
   * 
   * @example
   * 1671175303522
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The pair of username and password that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * MjphbXFwLWNuLXVxbTJ5cjc3djAwMzpMVEFJNXQ4YmVNbVZNMWVSWnRFSjZ2Zm1=
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      createTimestamp: 'CreateTimestamp',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimestamp: 'number',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccountResponseBody extends $dara.Model {
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
   * The returned data.
   * 
   * @example
   * true
   */
  data?: boolean;
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
   * 021788F6-E50C-4BD6-9F80-66B0A19A6***
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
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
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

export class DeleteAccountResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAccountResponseBody;
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
      body: DeleteAccountResponseBody,
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

export class DeleteBindingRequest extends $dara.Model {
  /**
   * @remarks
   * The binding key.
   * 
   * @example
   * .test.
   */
  bindingKey?: string;
  /**
   * @remarks
   * The type of the object that you want to unbind from the source exchange. Valid values:
   * 
   * *   **QUEUE**
   * *   **EXCHANGE**
   * 
   * This parameter is required.
   * 
   * @example
   * QUEUE
   */
  bindingType?: string;
  /**
   * @remarks
   * The name of the object that you want to unbind from the source exchange.
   * 
   * This parameter is required.
   * 
   * @example
   * DemoQueue
   */
  destinationName?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * amqp-cn-v0h1kb9nu***
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the source exchange.
   * 
   * This parameter is required.
   * 
   * @example
   * NormalEX
   */
  sourceExchange?: string;
  /**
   * @remarks
   * The vhost name.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  virtualHost?: string;
  static names(): { [key: string]: string } {
    return {
      bindingKey: 'BindingKey',
      bindingType: 'BindingType',
      destinationName: 'DestinationName',
      instanceId: 'InstanceId',
      sourceExchange: 'SourceExchange',
      virtualHost: 'VirtualHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindingKey: 'string',
      bindingType: 'string',
      destinationName: 'string',
      instanceId: 'string',
      sourceExchange: 'string',
      virtualHost: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBindingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 021788F6-E50C-4BD6-9F80-66B0A19A6***
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

export class DeleteBindingResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteBindingResponseBody;
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
      body: DeleteBindingResponseBody,
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

export class DeleteExchangeRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the exchange that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * DemoExchange
   */
  exchangeName?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RabbitMQ instance whose exchange you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * amqp-cn-v0h1kb9nu***
   */
  instanceId?: string;
  /**
   * @remarks
   * The vhost to which the exchange that you want to delete belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  virtualHost?: string;
  static names(): { [key: string]: string } {
    return {
      exchangeName: 'ExchangeName',
      instanceId: 'InstanceId',
      virtualHost: 'VirtualHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exchangeName: 'string',
      instanceId: 'string',
      virtualHost: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExchangeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6961FFB8-6358-4EDC-9E3C-4A0C56CE6***
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

export class DeleteExchangeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteExchangeResponseBody;
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
      body: DeleteExchangeResponseBody,
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

export class DeleteQueueRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1880770869023***
   */
  instanceId?: string;
  /**
   * @remarks
   * The queue name.
   * 
   * This parameter is required.
   * 
   * @example
   * DemoQueue
   */
  queueName?: string;
  /**
   * @remarks
   * The vhost name.
   * 
   * This parameter is required.
   * 
   * @example
   * Test
   */
  virtualHost?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      queueName: 'QueueName',
      virtualHost: 'VirtualHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      queueName: 'string',
      virtualHost: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQueueResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 92385FD2-624A-48C9-8FB5-753F2AFA***
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

export class DeleteQueueResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteQueueResponseBody;
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
      body: DeleteQueueResponseBody,
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

export class DeleteVirtualHostRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraMQ for RabbitMQ instance to which the vhost you want to delete belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * amqp-cn-v0h1kb9nu***
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the vhost that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  virtualHost?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      virtualHost: 'VirtualHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      virtualHost: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVirtualHostResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4311050D-BD63-48F9-822B-947A75A1***
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

export class DeleteVirtualHostResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteVirtualHostResponseBody;
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
      body: DeleteVirtualHostResponseBody,
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

export class GetInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * amqp-cn-v0h1kb9nu***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBody extends $dara.Model {
  data?: GetInstanceResponseBodyData;
  /**
   * @example
   * 92385FD2-624A-48C9-8FB5-753F2AFA***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetInstanceResponseBodyData,
      requestId: 'string',
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

export class GetInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInstanceResponseBody;
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
      body: GetInstanceResponseBody,
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

export class GetMetadataAmountRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraMQ for RabbitMQ instance.
   * 
   * @example
   * amqp-cn-v0h1kb9n***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetadataAmountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetMetadataAmountResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B75ACF23-2BEB-44AC-A0B6-AE14EDCA***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetMetadataAmountResponseBodyData,
      requestId: 'string',
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

export class GetMetadataAmountResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMetadataAmountResponseBody;
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
      body: GetMetadataAmountResponseBody,
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

export class ListAccountsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraMQ for RabbitMQ instance for which you want to query the static username and password.
   * 
   * @example
   * amqp-cn-20p****04
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountsResponseBody extends $dara.Model {
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
   * The returned data.
   */
  data?: { [key: string]: DataValue[] };
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
   * 549A5A97-FE61-5A23-8126-3A11929C1EC4
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful.
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
      data: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': DataValue } },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAccountsResponseBody;
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
      body: ListAccountsResponseBody,
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

export class ListBindingsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraMQ for RabbitMQ instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 1880770869023***
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum number of entries to return. Valid values:
   * 
   * **1 to 100**
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the end position of the previous returned page. To obtain the next batch of data, call the operation again by using the value of NextToken returned by the previous request. If you call this operation for the first time or want to query all results, set NextToken to an empty string.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The vhost name.
   * 
   * This parameter is required.
   * 
   * @example
   * Test
   */
  virtualHost?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      virtualHost: 'VirtualHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      virtualHost: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBindingsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListBindingsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E0A71208-3E87-4732-81CC-B18E0B4B1***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListBindingsResponseBodyData,
      requestId: 'string',
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

export class ListBindingsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListBindingsResponseBody;
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
      body: ListBindingsResponseBody,
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

export class ListDownStreamBindingsRequest extends $dara.Model {
  /**
   * @remarks
   * The exchange name.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  exchangeName?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RabbitMQ instance to which the exchange belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 1880770869023***
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum number of entries to return.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the end position of the previous returned page. To obtain the next batch of data, call the operation again by using the value of NextToken returned by the previous request. If you call this operation for the first time or want to query all results, set NextToken to an empty string.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The name of the vhost to which the exchange belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  virtualHost?: string;
  static names(): { [key: string]: string } {
    return {
      exchangeName: 'ExchangeName',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      virtualHost: 'VirtualHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exchangeName: 'string',
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      virtualHost: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDownStreamBindingsResponseBody extends $dara.Model {
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
   * The returned data.
   */
  data?: ListDownStreamBindingsResponseBodyData;
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
   * 9C1E0502-0790-4FDB-8C96-6D5C8D9B7***
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
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListDownStreamBindingsResponseBodyData,
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

export class ListDownStreamBindingsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDownStreamBindingsResponseBody;
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
      body: ListDownStreamBindingsResponseBody,
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

export class ListExchangeUpStreamBindingsRequest extends $dara.Model {
  /**
   * @remarks
   * The exchange name.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  exchangeName?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RabbitMQ instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 1880770869023***
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum number of entries to return.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the end position of the previous returned page. To obtain the next batch of data, call the operation again by using the value of NextToken returned by the previous request. If you call this operation for the first time or want to query all results, set NextToken to an empty string.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The virtual host (vhost) name.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  virtualHost?: string;
  static names(): { [key: string]: string } {
    return {
      exchangeName: 'ExchangeName',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      virtualHost: 'VirtualHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exchangeName: 'string',
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      virtualHost: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExchangeUpStreamBindingsResponseBody extends $dara.Model {
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
   * The returned data.
   */
  data?: ListExchangeUpStreamBindingsResponseBodyData;
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
   * 2DCCCE88-BC82-4A4F-AF5E-9A759672B***
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
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListExchangeUpStreamBindingsResponseBodyData,
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

export class ListExchangeUpStreamBindingsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListExchangeUpStreamBindingsResponseBody;
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
      body: ListExchangeUpStreamBindingsResponseBody,
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

export class ListExchangesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraMQ for RabbitMQ instance.
   * 
   * This parameter is required.
   * 
   * @example
   * amqp-cn-7pp2mwbc****
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum number of entries to return. Valid values: **1 to 100**
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If you call this operation for the first time or a next query is not required, leave this parameter empty.
   * *   If a next query is to be sent, set the value to the value of `NextToken` that is returned from the previous request.
   * 
   * @example
   * AAAANDQBYW1xcC1jbi03cHAybXdiY3AwMGEBdmhvc3QBAXNkZndhYWJhATE2NDkzMTM4OTU5NDIB4o3z1pPwWzk4aYuiRffi8R6-****
   */
  nextToken?: string;
  /**
   * @remarks
   * The vhost name.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  virtualHost?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      virtualHost: 'VirtualHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      virtualHost: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExchangesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListExchangesResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FEBA5E0C-50D0-4FA6-A794-4901E5465***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListExchangesResponseBodyData,
      requestId: 'string',
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

export class ListExchangesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListExchangesResponseBody;
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
      body: ListExchangesResponseBody,
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

export class ListInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return. Valid values: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the end position of the previous returned page. To obtain the next batch of data, call the operation again by using the value of NextToken returned by the previous request. If you call this operation for the first time or want to query all results, set NextToken to an empty string.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instances belong.
   * 
   * @example
   * rg-aekzu74zjgdu4mq
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ListInstancesResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CCBB1225-C392-480E-8C7F-D09AB2CD2***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListInstancesResponseBodyData,
      requestId: 'string',
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

export class ListInstancesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstancesResponseBody;
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
      body: ListInstancesResponseBody,
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

export class ListQueueConsumersRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraMQ for RabbitMQ instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 188077086902***
   */
  instanceId?: string;
  /**
   * @remarks
   * The token that marks the end position of the previous returned page. To obtain the next batch of data, call the operation again by using the value of NextToken returned by the previous request. If you call this operation for the first time or want to query all results, set NextToken to an empty string.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of data entries to return. If you do not configure this parameter, the default value 1 is used.
   * 
   * Valid values: 1 to 100.
   * 
   * @example
   * 1
   */
  queryCount?: number;
  /**
   * @remarks
   * The name of the queue for which you want to query online consumers.
   * 
   * This parameter is required.
   * 
   * @example
   * queue-rabbit-springboot-advance5
   */
  queue?: string;
  /**
   * @remarks
   * The virtual host (vhost) name.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  virtualHost?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nextToken: 'NextToken',
      queryCount: 'QueryCount',
      queue: 'Queue',
      virtualHost: 'VirtualHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      nextToken: 'string',
      queryCount: 'number',
      queue: 'string',
      virtualHost: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueueConsumersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListQueueConsumersResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4409B7D5-E4EC-4EB5-804A-385DCDFCD***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListQueueConsumersResponseBodyData,
      requestId: 'string',
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

export class ListQueueConsumersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListQueueConsumersResponseBody;
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
      body: ListQueueConsumersResponseBody,
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

export class ListQueueUpStreamBindingsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraMQ for RabbitMQ instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 1880770869023***
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum number of entries to return.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the end position of the previous returned page. To obtain the next batch of data, call the operation again by using the value of NextToken returned by the previous request. If you call this operation for the first time or want to query all results, set NextToken to an empty string.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The queue name.
   * 
   * This parameter is required.
   * 
   * @example
   * QueueTest
   */
  queueName?: string;
  /**
   * @remarks
   * The virtual host (vhost) name.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  virtualHost?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      queueName: 'QueueName',
      virtualHost: 'VirtualHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      queueName: 'string',
      virtualHost: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueueUpStreamBindingsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListQueueUpStreamBindingsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8BFB1C9D-08A2-4859-A47C-403C9EFA2***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListQueueUpStreamBindingsResponseBodyData,
      requestId: 'string',
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

export class ListQueueUpStreamBindingsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListQueueUpStreamBindingsResponseBody;
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
      body: ListQueueUpStreamBindingsResponseBody,
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

export class ListQueuesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraMQ for RabbitMQ instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 1880770869023***
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum number of entries to return.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the end position of the previous returned page. To obtain the next batch of data, call the operation again by using the value of NextToken returned by the previous request. If you call this operation for the first time or want to query all results, set NextToken to an empty string.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The virtual host (vhost) name.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  virtualHost?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      virtualHost: 'VirtualHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      virtualHost: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueuesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListQueuesResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CE811989-9F02-42CE-97A6-2239CB5C2***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListQueuesResponseBodyData,
      requestId: 'string',
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

export class ListQueuesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListQueuesResponseBody;
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
      body: ListQueuesResponseBody,
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

export class ListVirtualHostsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraMQ for RabbitMQ instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 1880770869023***
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum number of entries to return. Valid values: **1 to 100**
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the end position of the previous returned page. To obtain the next batch of data, call the operation again by using the value of NextToken returned by the previous request. If you call this operation for the first time or want to query all results, set NextToken to an empty string.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVirtualHostsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListVirtualHostsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EF4DB019-DA4A-4CE3-B220-223BBC93F***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListVirtualHostsResponseBodyData,
      requestId: 'string',
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

export class ListVirtualHostsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListVirtualHostsResponseBody;
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
      body: ListVirtualHostsResponseBody,
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

export class UpdateInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token.
   * 
   * @example
   * c2c5d1274axxxxxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * 实例是否开通数据存储加密功能
   * 
   * @example
   * false
   */
  encryptedInstance?: boolean;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RabbitMQ instance.
   * 
   * This parameter is required.
   * 
   * @example
   * amqp-cn-jtexxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance edition. Valid values for subscription instances:
   * 
   * *   professional: Professional Edition
   * *   enterprise: Enterprise Edition
   * *   vip: Enterprise Platinum Edition.
   * 
   * If your instance is a pay-as-you-go instance, you do not need to configure this parameter.
   * 
   * @example
   * professional
   */
  instanceType?: string;
  /**
   * @remarks
   * 使用同地域下KMS密钥ID
   * 
   * @example
   * key-bjj66c2a893vmhawtq5fd
   */
  kmsKeyId?: string;
  /**
   * @remarks
   * The maximum number of connections that can be created on the instance.
   * 
   * @example
   * 1000
   */
  maxConnections?: number;
  /**
   * @remarks
   * The peak TPS for accessing the instance over the Internet.
   * 
   * @example
   * 128
   */
  maxEipTps?: number;
  /**
   * @remarks
   * The peak transactions per second (TPS) for accessing the instance in a virtual private cloud (VPC).
   * 
   * @example
   * 1000
   */
  maxPrivateTps?: number;
  /**
   * @remarks
   * The type of the configuration change. Valid values:
   * 
   * *   UPGRADE
   * *   DOWNGRADE
   * 
   * This parameter is required.
   * 
   * @example
   * UPGRADE
   */
  modifyType?: string;
  /**
   * @remarks
   * The maximum number of queues that can be created on the instance.
   * 
   * @example
   * 1000
   */
  queueCapacity?: number;
  /**
   * @remarks
   * The billing method of the serverless instance. Valid values:
   * 
   * *   onDemand: You are charged based on your actual usage.
   * 
   * @example
   * onDemand
   */
  serverlessChargeType?: string;
  /**
   * @remarks
   * The size of the storage space that can be used to store messages.
   * 
   * @example
   * 7
   */
  storageSize?: number;
  /**
   * @remarks
   * Specifies whether elastic IP addresses (EIPs) are supported.
   * 
   * @example
   * false
   */
  supportEip?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the message trace feature.
   * 
   * @example
   * false
   */
  supportTracing?: boolean;
  /**
   * @remarks
   * The retention period of message traces.
   * 
   * Valid values:
   * 
   * *   3
   * *   7
   * *   15
   * 
   * @example
   * 3
   */
  tracingStorageTime?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      encryptedInstance: 'EncryptedInstance',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      kmsKeyId: 'KmsKeyId',
      maxConnections: 'MaxConnections',
      maxEipTps: 'MaxEipTps',
      maxPrivateTps: 'MaxPrivateTps',
      modifyType: 'ModifyType',
      queueCapacity: 'QueueCapacity',
      serverlessChargeType: 'ServerlessChargeType',
      storageSize: 'StorageSize',
      supportEip: 'SupportEip',
      supportTracing: 'SupportTracing',
      tracingStorageTime: 'TracingStorageTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      encryptedInstance: 'boolean',
      instanceId: 'string',
      instanceType: 'string',
      kmsKeyId: 'string',
      maxConnections: 'number',
      maxEipTps: 'number',
      maxPrivateTps: 'number',
      modifyType: 'string',
      queueCapacity: 'number',
      serverlessChargeType: 'string',
      storageSize: 'number',
      supportEip: 'boolean',
      supportTracing: 'boolean',
      tracingStorageTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data, which includes orderId and instanceId. Sample returned data:
   * 
   * ```json
   * "Data": {
   *     "instanceId": "amqp-cn-xxxxx",
   *     "orderId": 22222
   *   }
   * ```
   * 
   * @example
   * {“instanceId”: “amqp-cn-jtexxxxx”, “orderId”: 2222222}
   */
  data?: any;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * InstanceNotExist
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 628705FD-03EE-4ABE-BB21-E1672960***
   */
  requestId?: string;
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  statusCode?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      statusCode: 'StatusCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'any',
      message: 'string',
      requestId: 'string',
      statusCode: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateInstanceResponseBody;
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
      body: UpdateInstanceResponseBody,
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

export class UpdateInstanceNameRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraMQ for RabbitMQ instance for which you want to update the name.
   * 
   * This parameter is required.
   * 
   * @example
   * amqp-cn-zvp2ajsj****
   */
  instanceId?: string;
  /**
   * @remarks
   * The new name of the instance. No limits are imposed on the value. We recommend that you set this parameter to a maximum of 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * amqp-cn-ZVp2ajsj****
   */
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceNameResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned HTTP status code.
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
   * true
   */
  data?: string;
  /**
   * @remarks
   * The error message that is returned when an error occurs during the update of the instance name.
   * 
   * @example
   * InstanceNotExist
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6DC68EC9-0E76-5435-B8C0-FF9492B4****
   */
  requestId?: string;
  /**
   * @remarks
   * The returned message that indicates the request is successful.
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

export class UpdateInstanceNameResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateInstanceNameResponseBody;
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
      body: UpdateInstanceNameResponseBody,
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
    this._endpoint = this.getEndpoint("amqp-open", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Creates a pair of static username and password. If you access an ApsaraMQ for RabbitMQ broker from an open source RabbitMQ client, you must use a pair of username and password for authentication. You can access the ApsaraMQ for RabbitMQ broker only after the authentication is passed. ApsaraMQ for RabbitMQ allows you to generate usernames and passwords by using AccessKey pairs provided by Alibaba Cloud Resource Access Management (RAM).
   * 
   * @param request - CreateAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAccountResponse
   */
  async createAccountWithOptions(request: CreateAccountRequest, runtime: $dara.RuntimeOptions): Promise<CreateAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountAccessKey)) {
      query["accountAccessKey"] = request.accountAccessKey;
    }

    if (!$dara.isNull(request.createTimestamp)) {
      query["createTimestamp"] = request.createTimestamp;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["instanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.secretSign)) {
      query["secretSign"] = request.secretSign;
    }

    if (!$dara.isNull(request.signature)) {
      query["signature"] = request.signature;
    }

    if (!$dara.isNull(request.userName)) {
      query["userName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAccount",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateAccountResponse>(await this.callApi(params, req, runtime), new CreateAccountResponse({}));
  }

  /**
   * Creates a pair of static username and password. If you access an ApsaraMQ for RabbitMQ broker from an open source RabbitMQ client, you must use a pair of username and password for authentication. You can access the ApsaraMQ for RabbitMQ broker only after the authentication is passed. ApsaraMQ for RabbitMQ allows you to generate usernames and passwords by using AccessKey pairs provided by Alibaba Cloud Resource Access Management (RAM).
   * 
   * @param request - CreateAccountRequest
   * @returns CreateAccountResponse
   */
  async createAccount(request: CreateAccountRequest): Promise<CreateAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAccountWithOptions(request, runtime);
  }

  /**
   * Creates a binding. In ApsaraMQ for RabbitMQ, after a producer sends a message to an exchange, the exchange routes the message to a queue or another exchange based on the binding relationship and the routing rule.
   * 
   * @param request - CreateBindingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBindingResponse
   */
  async createBindingWithOptions(request: CreateBindingRequest, runtime: $dara.RuntimeOptions): Promise<CreateBindingResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.argument)) {
      body["Argument"] = request.argument;
    }

    if (!$dara.isNull(request.bindingKey)) {
      body["BindingKey"] = request.bindingKey;
    }

    if (!$dara.isNull(request.bindingType)) {
      body["BindingType"] = request.bindingType;
    }

    if (!$dara.isNull(request.destinationName)) {
      body["DestinationName"] = request.destinationName;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.sourceExchange)) {
      body["SourceExchange"] = request.sourceExchange;
    }

    if (!$dara.isNull(request.virtualHost)) {
      body["VirtualHost"] = request.virtualHost;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBinding",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateBindingResponse>(await this.callApi(params, req, runtime), new CreateBindingResponse({}));
  }

  /**
   * Creates a binding. In ApsaraMQ for RabbitMQ, after a producer sends a message to an exchange, the exchange routes the message to a queue or another exchange based on the binding relationship and the routing rule.
   * 
   * @param request - CreateBindingRequest
   * @returns CreateBindingResponse
   */
  async createBinding(request: CreateBindingRequest): Promise<CreateBindingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBindingWithOptions(request, runtime);
  }

  /**
   * Creates an exchange. In ApsaraMQ for RabbitMQ, an exchange is used to route a message that is received from a producer to one or more queues or to discard the message. An exchange routes a message to queues by using the routing key and binding keys.
   * 
   * @param request - CreateExchangeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateExchangeResponse
   */
  async createExchangeWithOptions(request: CreateExchangeRequest, runtime: $dara.RuntimeOptions): Promise<CreateExchangeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alternateExchange)) {
      body["AlternateExchange"] = request.alternateExchange;
    }

    if (!$dara.isNull(request.autoDeleteState)) {
      body["AutoDeleteState"] = request.autoDeleteState;
    }

    if (!$dara.isNull(request.exchangeName)) {
      body["ExchangeName"] = request.exchangeName;
    }

    if (!$dara.isNull(request.exchangeType)) {
      body["ExchangeType"] = request.exchangeType;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.internal)) {
      body["Internal"] = request.internal;
    }

    if (!$dara.isNull(request.virtualHost)) {
      body["VirtualHost"] = request.virtualHost;
    }

    if (!$dara.isNull(request.XDelayedType)) {
      body["XDelayedType"] = request.XDelayedType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateExchange",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateExchangeResponse>(await this.callApi(params, req, runtime), new CreateExchangeResponse({}));
  }

  /**
   * Creates an exchange. In ApsaraMQ for RabbitMQ, an exchange is used to route a message that is received from a producer to one or more queues or to discard the message. An exchange routes a message to queues by using the routing key and binding keys.
   * 
   * @param request - CreateExchangeRequest
   * @returns CreateExchangeResponse
   */
  async createExchange(request: CreateExchangeRequest): Promise<CreateExchangeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createExchangeWithOptions(request, runtime);
  }

  /**
   * Creates an ApsaraMQ for RabbitMQ instance.
   * 
   * @remarks
   * *Before you call this operation, make sure that you fully understand the [billing methods and pricing](https://help.aliyun.com/document_detail/606747.html) of ApsaraMQ for RabbitMQ.
   * 
   * @param request - CreateInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceResponse
   */
  async createInstanceWithOptions(request: CreateInstanceRequest, runtime: $dara.RuntimeOptions): Promise<CreateInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.autoRenewPeriod)) {
      query["AutoRenewPeriod"] = request.autoRenewPeriod;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.edition)) {
      query["Edition"] = request.edition;
    }

    if (!$dara.isNull(request.encryptedInstance)) {
      query["EncryptedInstance"] = request.encryptedInstance;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.kmsKeyId)) {
      query["KmsKeyId"] = request.kmsKeyId;
    }

    if (!$dara.isNull(request.maxConnections)) {
      query["MaxConnections"] = request.maxConnections;
    }

    if (!$dara.isNull(request.maxEipTps)) {
      query["MaxEipTps"] = request.maxEipTps;
    }

    if (!$dara.isNull(request.maxPrivateTps)) {
      query["MaxPrivateTps"] = request.maxPrivateTps;
    }

    if (!$dara.isNull(request.paymentType)) {
      query["PaymentType"] = request.paymentType;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodCycle)) {
      query["PeriodCycle"] = request.periodCycle;
    }

    if (!$dara.isNull(request.provisionedCapacity)) {
      query["ProvisionedCapacity"] = request.provisionedCapacity;
    }

    if (!$dara.isNull(request.queueCapacity)) {
      query["QueueCapacity"] = request.queueCapacity;
    }

    if (!$dara.isNull(request.renewStatus)) {
      query["RenewStatus"] = request.renewStatus;
    }

    if (!$dara.isNull(request.renewalDurationUnit)) {
      query["RenewalDurationUnit"] = request.renewalDurationUnit;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.serverlessChargeType)) {
      query["ServerlessChargeType"] = request.serverlessChargeType;
    }

    if (!$dara.isNull(request.storageSize)) {
      query["StorageSize"] = request.storageSize;
    }

    if (!$dara.isNull(request.supportEip)) {
      query["SupportEip"] = request.supportEip;
    }

    if (!$dara.isNull(request.supportTracing)) {
      query["SupportTracing"] = request.supportTracing;
    }

    if (!$dara.isNull(request.tracingStorageTime)) {
      query["TracingStorageTime"] = request.tracingStorageTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstance",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateInstanceResponse>(await this.callApi(params, req, runtime), new CreateInstanceResponse({}));
  }

  /**
   * Creates an ApsaraMQ for RabbitMQ instance.
   * 
   * @remarks
   * *Before you call this operation, make sure that you fully understand the [billing methods and pricing](https://help.aliyun.com/document_detail/606747.html) of ApsaraMQ for RabbitMQ.
   * 
   * @param request - CreateInstanceRequest
   * @returns CreateInstanceResponse
   */
  async createInstance(request: CreateInstanceRequest): Promise<CreateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  /**
   * Creates a queue. In ApsaraMQ for RabbitMQ, a queue is a message queue. All messages in ApsaraMQ for RabbitMQ are sent to a specific exchange and then routed to a bound queue by the exchange.
   * 
   * @param request - CreateQueueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateQueueResponse
   */
  async createQueueWithOptions(request: CreateQueueRequest, runtime: $dara.RuntimeOptions): Promise<CreateQueueResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoDeleteState)) {
      body["AutoDeleteState"] = request.autoDeleteState;
    }

    if (!$dara.isNull(request.autoExpireState)) {
      body["AutoExpireState"] = request.autoExpireState;
    }

    if (!$dara.isNull(request.deadLetterExchange)) {
      body["DeadLetterExchange"] = request.deadLetterExchange;
    }

    if (!$dara.isNull(request.deadLetterRoutingKey)) {
      body["DeadLetterRoutingKey"] = request.deadLetterRoutingKey;
    }

    if (!$dara.isNull(request.exclusiveState)) {
      body["ExclusiveState"] = request.exclusiveState;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxLength)) {
      body["MaxLength"] = request.maxLength;
    }

    if (!$dara.isNull(request.maximumPriority)) {
      body["MaximumPriority"] = request.maximumPriority;
    }

    if (!$dara.isNull(request.messageTTL)) {
      body["MessageTTL"] = request.messageTTL;
    }

    if (!$dara.isNull(request.queueName)) {
      body["QueueName"] = request.queueName;
    }

    if (!$dara.isNull(request.virtualHost)) {
      body["VirtualHost"] = request.virtualHost;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateQueue",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateQueueResponse>(await this.callApi(params, req, runtime), new CreateQueueResponse({}));
  }

  /**
   * Creates a queue. In ApsaraMQ for RabbitMQ, a queue is a message queue. All messages in ApsaraMQ for RabbitMQ are sent to a specific exchange and then routed to a bound queue by the exchange.
   * 
   * @param request - CreateQueueRequest
   * @returns CreateQueueResponse
   */
  async createQueue(request: CreateQueueRequest): Promise<CreateQueueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createQueueWithOptions(request, runtime);
  }

  /**
   * Creates a vhost. A vhost is used to logically isolate resources. Each vhost manages its own exchanges, queues, and bindings. Applications can run on independent vhosts in a secure manner. This way, the business of an application is not affected by other applications. Before you connect producers and consumers to an ApsaraMQ for RabbitMQ instance, you must specify vhosts for the producers and consumers.
   * 
   * @param request - CreateVirtualHostRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVirtualHostResponse
   */
  async createVirtualHostWithOptions(request: CreateVirtualHostRequest, runtime: $dara.RuntimeOptions): Promise<CreateVirtualHostResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.virtualHost)) {
      body["VirtualHost"] = request.virtualHost;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVirtualHost",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateVirtualHostResponse>(await this.callApi(params, req, runtime), new CreateVirtualHostResponse({}));
  }

  /**
   * Creates a vhost. A vhost is used to logically isolate resources. Each vhost manages its own exchanges, queues, and bindings. Applications can run on independent vhosts in a secure manner. This way, the business of an application is not affected by other applications. Before you connect producers and consumers to an ApsaraMQ for RabbitMQ instance, you must specify vhosts for the producers and consumers.
   * 
   * @param request - CreateVirtualHostRequest
   * @returns CreateVirtualHostResponse
   */
  async createVirtualHost(request: CreateVirtualHostRequest): Promise<CreateVirtualHostResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVirtualHostWithOptions(request, runtime);
  }

  /**
   * Deletes a pair of username and password.
   * 
   * @param request - DeleteAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAccountResponse
   */
  async deleteAccountWithOptions(request: DeleteAccountRequest, runtime: $dara.RuntimeOptions): Promise<DeleteAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.createTimestamp)) {
      query["CreateTimestamp"] = request.createTimestamp;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAccount",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteAccountResponse>(await this.callApi(params, req, runtime), new DeleteAccountResponse({}));
  }

  /**
   * Deletes a pair of username and password.
   * 
   * @param request - DeleteAccountRequest
   * @returns DeleteAccountResponse
   */
  async deleteAccount(request: DeleteAccountRequest): Promise<DeleteAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAccountWithOptions(request, runtime);
  }

  /**
   * Deletes a binding to unbind a queue or an exchange from a source exchange.
   * 
   * @param request - DeleteBindingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBindingResponse
   */
  async deleteBindingWithOptions(request: DeleteBindingRequest, runtime: $dara.RuntimeOptions): Promise<DeleteBindingResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bindingKey)) {
      body["BindingKey"] = request.bindingKey;
    }

    if (!$dara.isNull(request.bindingType)) {
      body["BindingType"] = request.bindingType;
    }

    if (!$dara.isNull(request.destinationName)) {
      body["DestinationName"] = request.destinationName;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.sourceExchange)) {
      body["SourceExchange"] = request.sourceExchange;
    }

    if (!$dara.isNull(request.virtualHost)) {
      body["VirtualHost"] = request.virtualHost;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBinding",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteBindingResponse>(await this.callApi(params, req, runtime), new DeleteBindingResponse({}));
  }

  /**
   * Deletes a binding to unbind a queue or an exchange from a source exchange.
   * 
   * @param request - DeleteBindingRequest
   * @returns DeleteBindingResponse
   */
  async deleteBinding(request: DeleteBindingRequest): Promise<DeleteBindingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBindingWithOptions(request, runtime);
  }

  /**
   * Deletes an exchange.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   You cannot delete exchanges of the **headers** and **x-jms-topic** types.
   * *   You cannot delete built-in exchanges in a vhost. These exchanges are amq.direct, amq.topic, and amq.fanout.
   * 
   * @param request - DeleteExchangeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteExchangeResponse
   */
  async deleteExchangeWithOptions(request: DeleteExchangeRequest, runtime: $dara.RuntimeOptions): Promise<DeleteExchangeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.exchangeName)) {
      body["ExchangeName"] = request.exchangeName;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.virtualHost)) {
      body["VirtualHost"] = request.virtualHost;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteExchange",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteExchangeResponse>(await this.callApi(params, req, runtime), new DeleteExchangeResponse({}));
  }

  /**
   * Deletes an exchange.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   You cannot delete exchanges of the **headers** and **x-jms-topic** types.
   * *   You cannot delete built-in exchanges in a vhost. These exchanges are amq.direct, amq.topic, and amq.fanout.
   * 
   * @param request - DeleteExchangeRequest
   * @returns DeleteExchangeResponse
   */
  async deleteExchange(request: DeleteExchangeRequest): Promise<DeleteExchangeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteExchangeWithOptions(request, runtime);
  }

  /**
   * Deletes a queue.
   * 
   * @param request - DeleteQueueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteQueueResponse
   */
  async deleteQueueWithOptions(request: DeleteQueueRequest, runtime: $dara.RuntimeOptions): Promise<DeleteQueueResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.queueName)) {
      body["QueueName"] = request.queueName;
    }

    if (!$dara.isNull(request.virtualHost)) {
      body["VirtualHost"] = request.virtualHost;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteQueue",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteQueueResponse>(await this.callApi(params, req, runtime), new DeleteQueueResponse({}));
  }

  /**
   * Deletes a queue.
   * 
   * @param request - DeleteQueueRequest
   * @returns DeleteQueueResponse
   */
  async deleteQueue(request: DeleteQueueRequest): Promise<DeleteQueueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteQueueWithOptions(request, runtime);
  }

  /**
   * Deletes a virtual host (vhost).
   * 
   * @remarks
   * Before you delete a vhost, make sure that all exchanges and queues in the vhost are deleted.
   * 
   * @param request - DeleteVirtualHostRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVirtualHostResponse
   */
  async deleteVirtualHostWithOptions(request: DeleteVirtualHostRequest, runtime: $dara.RuntimeOptions): Promise<DeleteVirtualHostResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.virtualHost)) {
      body["VirtualHost"] = request.virtualHost;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVirtualHost",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteVirtualHostResponse>(await this.callApi(params, req, runtime), new DeleteVirtualHostResponse({}));
  }

  /**
   * Deletes a virtual host (vhost).
   * 
   * @remarks
   * Before you delete a vhost, make sure that all exchanges and queues in the vhost are deleted.
   * 
   * @param request - DeleteVirtualHostRequest
   * @returns DeleteVirtualHostResponse
   */
  async deleteVirtualHost(request: DeleteVirtualHostRequest): Promise<DeleteVirtualHostResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVirtualHostWithOptions(request, runtime);
  }

  /**
   * 获取实例详情
   * 
   * @param request - GetInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceResponse
   */
  async getInstanceWithOptions(request: GetInstanceRequest, runtime: $dara.RuntimeOptions): Promise<GetInstanceResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstance",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetInstanceResponse>(await this.callApi(params, req, runtime), new GetInstanceResponse({}));
  }

  /**
   * 获取实例详情
   * 
   * @param request - GetInstanceRequest
   * @returns GetInstanceResponse
   */
  async getInstance(request: GetInstanceRequest): Promise<GetInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the maximum number of vhosts, exchanges, and queues that you can create and the number of created vhosts, exchanges, and queues on an ApsaraMQ for RabbitMQ instance.
   * 
   * @param request - GetMetadataAmountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMetadataAmountResponse
   */
  async getMetadataAmountWithOptions(request: GetMetadataAmountRequest, runtime: $dara.RuntimeOptions): Promise<GetMetadataAmountResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMetadataAmount",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetMetadataAmountResponse>(await this.callApi(params, req, runtime), new GetMetadataAmountResponse({}));
  }

  /**
   * Queries the maximum number of vhosts, exchanges, and queues that you can create and the number of created vhosts, exchanges, and queues on an ApsaraMQ for RabbitMQ instance.
   * 
   * @param request - GetMetadataAmountRequest
   * @returns GetMetadataAmountResponse
   */
  async getMetadataAmount(request: GetMetadataAmountRequest): Promise<GetMetadataAmountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMetadataAmountWithOptions(request, runtime);
  }

  /**
   * Queries the static username and password of an ApsaraMQ for RabbitMQ.
   * 
   * @param request - ListAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAccountsResponse
   */
  async listAccountsWithOptions(request: ListAccountsRequest, runtime: $dara.RuntimeOptions): Promise<ListAccountsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAccounts",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListAccountsResponse>(await this.callApi(params, req, runtime), new ListAccountsResponse({}));
  }

  /**
   * Queries the static username and password of an ApsaraMQ for RabbitMQ.
   * 
   * @param request - ListAccountsRequest
   * @returns ListAccountsResponse
   */
  async listAccounts(request: ListAccountsRequest): Promise<ListAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAccountsWithOptions(request, runtime);
  }

  /**
   * Queries all bindings of a virtual host (vhost) on an ApsaraMQ for RabbitMQ instance.
   * 
   * @param request - ListBindingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBindingsResponse
   */
  async listBindingsWithOptions(request: ListBindingsRequest, runtime: $dara.RuntimeOptions): Promise<ListBindingsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBindings",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListBindingsResponse>(await this.callApi(params, req, runtime), new ListBindingsResponse({}));
  }

  /**
   * Queries all bindings of a virtual host (vhost) on an ApsaraMQ for RabbitMQ instance.
   * 
   * @param request - ListBindingsRequest
   * @returns ListBindingsResponse
   */
  async listBindings(request: ListBindingsRequest): Promise<ListBindingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBindingsWithOptions(request, runtime);
  }

  /**
   * Queries all exchanges or queues to which an exchange is bound.
   * 
   * @param request - ListDownStreamBindingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDownStreamBindingsResponse
   */
  async listDownStreamBindingsWithOptions(request: ListDownStreamBindingsRequest, runtime: $dara.RuntimeOptions): Promise<ListDownStreamBindingsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDownStreamBindings",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListDownStreamBindingsResponse>(await this.callApi(params, req, runtime), new ListDownStreamBindingsResponse({}));
  }

  /**
   * Queries all exchanges or queues to which an exchange is bound.
   * 
   * @param request - ListDownStreamBindingsRequest
   * @returns ListDownStreamBindingsResponse
   */
  async listDownStreamBindings(request: ListDownStreamBindingsRequest): Promise<ListDownStreamBindingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDownStreamBindingsWithOptions(request, runtime);
  }

  /**
   * Queries all queues or exchanges that are bound to an exchange.
   * 
   * @param request - ListExchangeUpStreamBindingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExchangeUpStreamBindingsResponse
   */
  async listExchangeUpStreamBindingsWithOptions(request: ListExchangeUpStreamBindingsRequest, runtime: $dara.RuntimeOptions): Promise<ListExchangeUpStreamBindingsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListExchangeUpStreamBindings",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListExchangeUpStreamBindingsResponse>(await this.callApi(params, req, runtime), new ListExchangeUpStreamBindingsResponse({}));
  }

  /**
   * Queries all queues or exchanges that are bound to an exchange.
   * 
   * @param request - ListExchangeUpStreamBindingsRequest
   * @returns ListExchangeUpStreamBindingsResponse
   */
  async listExchangeUpStreamBindings(request: ListExchangeUpStreamBindingsRequest): Promise<ListExchangeUpStreamBindingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listExchangeUpStreamBindingsWithOptions(request, runtime);
  }

  /**
   * Queries all exchanges that are created in a virtual host (vhost).
   * 
   * @param request - ListExchangesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExchangesResponse
   */
  async listExchangesWithOptions(request: ListExchangesRequest, runtime: $dara.RuntimeOptions): Promise<ListExchangesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListExchanges",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListExchangesResponse>(await this.callApi(params, req, runtime), new ListExchangesResponse({}));
  }

  /**
   * Queries all exchanges that are created in a virtual host (vhost).
   * 
   * @param request - ListExchangesRequest
   * @returns ListExchangesResponse
   */
  async listExchanges(request: ListExchangesRequest): Promise<ListExchangesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listExchangesWithOptions(request, runtime);
  }

  /**
   * Queries all AparaMQ for RabbitMQ instances in a region. The returned data includes the basic information, endpoint, and specification limits of each instance.
   * 
   * @param request - ListInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesResponse
   */
  async listInstancesWithOptions(request: ListInstancesRequest, runtime: $dara.RuntimeOptions): Promise<ListInstancesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstances",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListInstancesResponse>(await this.callApi(params, req, runtime), new ListInstancesResponse({}));
  }

  /**
   * Queries all AparaMQ for RabbitMQ instances in a region. The returned data includes the basic information, endpoint, and specification limits of each instance.
   * 
   * @param request - ListInstancesRequest
   * @returns ListInstancesResponse
   */
  async listInstances(request: ListInstancesRequest): Promise<ListInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the online consumers of a queue.
   * 
   * @remarks
   * ApsaraMQ for RabbitMQ allows you to query only online consumers.
   * 
   * @param request - ListQueueConsumersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQueueConsumersResponse
   */
  async listQueueConsumersWithOptions(request: ListQueueConsumersRequest, runtime: $dara.RuntimeOptions): Promise<ListQueueConsumersResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListQueueConsumers",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListQueueConsumersResponse>(await this.callApi(params, req, runtime), new ListQueueConsumersResponse({}));
  }

  /**
   * Queries the online consumers of a queue.
   * 
   * @remarks
   * ApsaraMQ for RabbitMQ allows you to query only online consumers.
   * 
   * @param request - ListQueueConsumersRequest
   * @returns ListQueueConsumersResponse
   */
  async listQueueConsumers(request: ListQueueConsumersRequest): Promise<ListQueueConsumersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listQueueConsumersWithOptions(request, runtime);
  }

  /**
   * Queries the exchanges that are bound to a queue.
   * 
   * @param request - ListQueueUpStreamBindingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQueueUpStreamBindingsResponse
   */
  async listQueueUpStreamBindingsWithOptions(request: ListQueueUpStreamBindingsRequest, runtime: $dara.RuntimeOptions): Promise<ListQueueUpStreamBindingsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListQueueUpStreamBindings",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListQueueUpStreamBindingsResponse>(await this.callApi(params, req, runtime), new ListQueueUpStreamBindingsResponse({}));
  }

  /**
   * Queries the exchanges that are bound to a queue.
   * 
   * @param request - ListQueueUpStreamBindingsRequest
   * @returns ListQueueUpStreamBindingsResponse
   */
  async listQueueUpStreamBindings(request: ListQueueUpStreamBindingsRequest): Promise<ListQueueUpStreamBindingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listQueueUpStreamBindingsWithOptions(request, runtime);
  }

  /**
   * Queries all queues in a vhost of an ApsaraMQ for RabbitMQ instance.
   * 
   * @param request - ListQueuesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQueuesResponse
   */
  async listQueuesWithOptions(request: ListQueuesRequest, runtime: $dara.RuntimeOptions): Promise<ListQueuesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListQueues",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListQueuesResponse>(await this.callApi(params, req, runtime), new ListQueuesResponse({}));
  }

  /**
   * Queries all queues in a vhost of an ApsaraMQ for RabbitMQ instance.
   * 
   * @param request - ListQueuesRequest
   * @returns ListQueuesResponse
   */
  async listQueues(request: ListQueuesRequest): Promise<ListQueuesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listQueuesWithOptions(request, runtime);
  }

  /**
   * Queries all virtual hosts (vhosts) on an ApsaraMQ for RabbitMQ instance.
   * 
   * @param request - ListVirtualHostsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVirtualHostsResponse
   */
  async listVirtualHostsWithOptions(request: ListVirtualHostsRequest, runtime: $dara.RuntimeOptions): Promise<ListVirtualHostsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVirtualHosts",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListVirtualHostsResponse>(await this.callApi(params, req, runtime), new ListVirtualHostsResponse({}));
  }

  /**
   * Queries all virtual hosts (vhosts) on an ApsaraMQ for RabbitMQ instance.
   * 
   * @param request - ListVirtualHostsRequest
   * @returns ListVirtualHostsResponse
   */
  async listVirtualHosts(request: ListVirtualHostsRequest): Promise<ListVirtualHostsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVirtualHostsWithOptions(request, runtime);
  }

  /**
   * Upgrades or downgrades the configurations of an ApsaraMQ for RabbitMQ instance.
   * 
   * @param request - UpdateInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceResponse
   */
  async updateInstanceWithOptions(request: UpdateInstanceRequest, runtime: $dara.RuntimeOptions): Promise<UpdateInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.encryptedInstance)) {
      query["EncryptedInstance"] = request.encryptedInstance;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.kmsKeyId)) {
      query["KmsKeyId"] = request.kmsKeyId;
    }

    if (!$dara.isNull(request.maxConnections)) {
      query["MaxConnections"] = request.maxConnections;
    }

    if (!$dara.isNull(request.maxEipTps)) {
      query["MaxEipTps"] = request.maxEipTps;
    }

    if (!$dara.isNull(request.maxPrivateTps)) {
      query["MaxPrivateTps"] = request.maxPrivateTps;
    }

    if (!$dara.isNull(request.modifyType)) {
      query["ModifyType"] = request.modifyType;
    }

    if (!$dara.isNull(request.queueCapacity)) {
      query["QueueCapacity"] = request.queueCapacity;
    }

    if (!$dara.isNull(request.serverlessChargeType)) {
      query["ServerlessChargeType"] = request.serverlessChargeType;
    }

    if (!$dara.isNull(request.storageSize)) {
      query["StorageSize"] = request.storageSize;
    }

    if (!$dara.isNull(request.supportEip)) {
      query["SupportEip"] = request.supportEip;
    }

    if (!$dara.isNull(request.supportTracing)) {
      query["SupportTracing"] = request.supportTracing;
    }

    if (!$dara.isNull(request.tracingStorageTime)) {
      query["TracingStorageTime"] = request.tracingStorageTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstance",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UpdateInstanceResponse>(await this.callApi(params, req, runtime), new UpdateInstanceResponse({}));
  }

  /**
   * Upgrades or downgrades the configurations of an ApsaraMQ for RabbitMQ instance.
   * 
   * @param request - UpdateInstanceRequest
   * @returns UpdateInstanceResponse
   */
  async updateInstance(request: UpdateInstanceRequest): Promise<UpdateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateInstanceWithOptions(request, runtime);
  }

  /**
   * Updates the name of an ApsaraMQ for RabbitMQ instance. After an ApsaraMQ for RabbitMQ instance is created, the ID of the instance is used as its name by default. You can specify a custom name for an instance to facilitate instance identification.
   * 
   * @param request - UpdateInstanceNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceNameResponse
   */
  async updateInstanceNameWithOptions(request: UpdateInstanceNameRequest, runtime: $dara.RuntimeOptions): Promise<UpdateInstanceNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstanceName",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UpdateInstanceNameResponse>(await this.callApi(params, req, runtime), new UpdateInstanceNameResponse({}));
  }

  /**
   * Updates the name of an ApsaraMQ for RabbitMQ instance. After an ApsaraMQ for RabbitMQ instance is created, the ID of the instance is used as its name by default. You can specify a custom name for an instance to facilitate instance identification.
   * 
   * @param request - UpdateInstanceNameRequest
   * @returns UpdateInstanceNameResponse
   */
  async updateInstanceName(request: UpdateInstanceNameRequest): Promise<UpdateInstanceNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateInstanceNameWithOptions(request, runtime);
  }

}
