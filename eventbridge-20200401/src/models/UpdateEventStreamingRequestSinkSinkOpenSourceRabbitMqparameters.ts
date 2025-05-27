// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersBody } from "./UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMqparametersBody";
import { UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersMessageId } from "./UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMqparametersMessageId";
import { UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersProperties } from "./UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMqparametersProperties";
import { UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersRoutingKey } from "./UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMqparametersRoutingKey";


export class UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParameters extends $dara.Model {
  authType?: string;
  body?: UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersBody;
  endpoint?: string;
  exchange?: string;
  messageId?: UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersMessageId;
  networkType?: string;
  password?: string;
  properties?: UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersProperties;
  queueName?: string;
  routingKey?: UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersRoutingKey;
  securityGroupId?: string;
  targetType?: string;
  username?: string;
  vSwitchIds?: string;
  virtualHostName?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
      body: 'Body',
      endpoint: 'Endpoint',
      exchange: 'Exchange',
      messageId: 'MessageId',
      networkType: 'NetworkType',
      password: 'Password',
      properties: 'Properties',
      queueName: 'QueueName',
      routingKey: 'RoutingKey',
      securityGroupId: 'SecurityGroupId',
      targetType: 'TargetType',
      username: 'Username',
      vSwitchIds: 'VSwitchIds',
      virtualHostName: 'VirtualHostName',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      body: UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersBody,
      endpoint: 'string',
      exchange: 'string',
      messageId: UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersMessageId,
      networkType: 'string',
      password: 'string',
      properties: UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersProperties,
      queueName: 'string',
      routingKey: UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersRoutingKey,
      securityGroupId: 'string',
      targetType: 'string',
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

