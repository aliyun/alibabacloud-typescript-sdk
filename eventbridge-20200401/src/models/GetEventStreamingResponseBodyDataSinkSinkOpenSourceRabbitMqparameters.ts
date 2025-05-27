// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMQParametersBody } from "./GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMqparametersBody";
import { GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMQParametersMessageId } from "./GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMqparametersMessageId";
import { GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMQParametersProperties } from "./GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMqparametersProperties";
import { GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMQParametersRoutingKey } from "./GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMqparametersRoutingKey";


export class GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMQParameters extends $dara.Model {
  authType?: string;
  body?: GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMQParametersBody;
  endpoint?: string;
  exchange?: string;
  messageId?: GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMQParametersMessageId;
  networkType?: string;
  password?: string;
  properties?: GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMQParametersProperties;
  queueName?: string;
  routingKey?: GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMQParametersRoutingKey;
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
      body: GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMQParametersBody,
      endpoint: 'string',
      exchange: 'string',
      messageId: GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMQParametersMessageId,
      networkType: 'string',
      password: 'string',
      properties: GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMQParametersProperties,
      queueName: 'string',
      routingKey: GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMQParametersRoutingKey,
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

