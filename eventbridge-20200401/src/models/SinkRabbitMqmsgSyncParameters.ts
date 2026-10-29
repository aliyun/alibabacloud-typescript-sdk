// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SinkRabbitMQMsgSyncParametersBody extends $dara.Model {
  /**
   * @remarks
   * The method used to generate the message body.
   * 
   * @example
   * JSONPATH
   */
  form?: string;
  /**
   * @remarks
   * The template string used to format parameter values. This parameter is used only when Form is set to TEMPLATE.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The value expression of the message body.
   * 
   * @example
   * $.data.body
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class SinkRabbitMQMsgSyncParametersExchange extends $dara.Model {
  /**
   * @remarks
   * The method used to generate the target exchange.
   * 
   * @example
   * JSONPATH
   */
  form?: string;
  /**
   * @remarks
   * The template string used to format parameter values. This parameter is used only when Form is set to TEMPLATE.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The value expression of the target exchange.
   * 
   * @example
   * $.data.exchange
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class SinkRabbitMQMsgSyncParametersMessageId extends $dara.Model {
  /**
   * @remarks
   * The method used to generate the message ID.
   * 
   * @example
   * JSONPATH
   */
  form?: string;
  /**
   * @remarks
   * The template string used to format parameter values. This parameter is used only when Form is set to TEMPLATE.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The value expression of the message ID.
   * 
   * @example
   * $.data.messageId
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class SinkRabbitMQMsgSyncParametersProperties extends $dara.Model {
  /**
   * @remarks
   * The method used to generate the message properties.
   * 
   * @example
   * JSONPATH
   */
  form?: string;
  /**
   * @remarks
   * The template string used to format parameter values. This parameter is used only when Form is set to TEMPLATE.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The value expression of the message properties.
   * 
   * @example
   * $.data.properties
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class SinkRabbitMQMsgSyncParametersRoutingKey extends $dara.Model {
  /**
   * @remarks
   * The method used to generate the routing key.
   * 
   * @example
   * JSONPATH
   */
  form?: string;
  /**
   * @remarks
   * The template string used to format parameter values. This parameter is used only when Form is set to TEMPLATE.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The value expression of the routing key.
   * 
   * @example
   * $.data.routingKey
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class SinkRabbitMQMsgSyncParameters extends $dara.Model {
  /**
   * @remarks
   * The message body.
   */
  body?: SinkRabbitMQMsgSyncParametersBody;
  /**
   * @remarks
   * The endpoint of the ApsaraMQ for RabbitMQ cluster.
   * 
   * @example
   * rabbitmq-cn-hangzhou-2x***.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The exchange. This parameter is required only when the TargetType parameter is set to Exchange.
   */
  exchange?: SinkRabbitMQMsgSyncParametersExchange;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RabbitMQ instance.
   * 
   * @example
   * rabbitmq-cn-a1b2c3d4e5f
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the ApsaraMQ for RabbitMQ instance.
   * 
   * @example
   * Cloud
   */
  instanceType?: string;
  /**
   * @remarks
   * The maximum number of hops allowed for message forwarding in a federation task. Messages that exceed this limit are dropped.
   * 
   * @example
   * 1
   */
  maxHops?: string;
  /**
   * @remarks
   * The message ID.
   */
  messageId?: SinkRabbitMQMsgSyncParametersMessageId;
  /**
   * @remarks
   * The network type used to connect to the ApsaraMQ for RabbitMQ instance.
   * 
   * @example
   * PrivateNetwork
   */
  networkType?: string;
  /**
   * @remarks
   * The password used to connect to the ApsaraMQ for RabbitMQ cluster.
   * 
   * @example
   * yourPassword
   */
  password?: string;
  /**
   * @remarks
   * The message properties.
   */
  properties?: SinkRabbitMQMsgSyncParametersProperties;
  /**
   * @remarks
   * The routing key of the message. This parameter is required only when the TargetType parameter is set to Exchange.
   */
  routingKey?: SinkRabbitMQMsgSyncParametersRoutingKey;
  /**
   * @remarks
   * The ID of the security group to which the nodes of the ApsaraMQ for RabbitMQ cluster belong.
   * 
   * @example
   * sg-a1b2c3d4e5f6g7h8i9j0
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The username used to connect to the ApsaraMQ for RabbitMQ cluster.
   * 
   * @example
   * admin
   */
  username?: string;
  /**
   * @remarks
   * The IDs of the vSwitches in the VPC where the ApsaraMQ for RabbitMQ cluster resides.
   * 
   * @example
   * vsw-a1b2c3d4e5f6g7h8i9j0k
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The name of the virtual host (vhost) in the ApsaraMQ for RabbitMQ cluster.
   * 
   * @example
   * test-001
   */
  virtualHostName?: string;
  /**
   * @remarks
   * The ID of the VPC where the ApsaraMQ for RabbitMQ cluster resides.
   * 
   * @example
   * vpc-a1b2c3d4e5f6g7h8i9j0k
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      endpoint: 'Endpoint',
      exchange: 'Exchange',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      maxHops: 'MaxHops',
      messageId: 'MessageId',
      networkType: 'NetworkType',
      password: 'Password',
      properties: 'Properties',
      routingKey: 'RoutingKey',
      securityGroupId: 'SecurityGroupId',
      username: 'Username',
      vSwitchIds: 'VSwitchIds',
      virtualHostName: 'VirtualHostName',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: SinkRabbitMQMsgSyncParametersBody,
      endpoint: 'string',
      exchange: SinkRabbitMQMsgSyncParametersExchange,
      instanceId: 'string',
      instanceType: 'string',
      maxHops: 'string',
      messageId: SinkRabbitMQMsgSyncParametersMessageId,
      networkType: 'string',
      password: 'string',
      properties: SinkRabbitMQMsgSyncParametersProperties,
      routingKey: SinkRabbitMQMsgSyncParametersRoutingKey,
      securityGroupId: 'string',
      username: 'string',
      vSwitchIds: 'string',
      virtualHostName: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    if(this.exchange && typeof (this.exchange as any).validate === 'function') {
      (this.exchange as any).validate();
    }
    if(this.messageId && typeof (this.messageId as any).validate === 'function') {
      (this.messageId as any).validate();
    }
    if(this.properties && typeof (this.properties as any).validate === 'function') {
      (this.properties as any).validate();
    }
    if(this.routingKey && typeof (this.routingKey as any).validate === 'function') {
      (this.routingKey as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

