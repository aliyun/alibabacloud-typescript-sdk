// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SinkRabbitMQMsgSyncParametersBody extends $dara.Model {
  form?: string;
  template?: string;
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
  form?: string;
  template?: string;
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
  form?: string;
  template?: string;
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
  form?: string;
  template?: string;
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
  form?: string;
  template?: string;
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
  body?: SinkRabbitMQMsgSyncParametersBody;
  endpoint?: string;
  exchange?: SinkRabbitMQMsgSyncParametersExchange;
  instanceId?: string;
  instanceType?: string;
  maxHops?: string;
  messageId?: SinkRabbitMQMsgSyncParametersMessageId;
  networkType?: string;
  password?: string;
  properties?: SinkRabbitMQMsgSyncParametersProperties;
  routingKey?: SinkRabbitMQMsgSyncParametersRoutingKey;
  securityGroupId?: string;
  username?: string;
  vSwitchIds?: string;
  virtualHostName?: string;
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

