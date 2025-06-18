// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkOpenSourceRabbitMQParametersBody } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkOpenSourceRabbitMqparametersBody";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkOpenSourceRabbitMQParametersMessageId } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkOpenSourceRabbitMqparametersMessageId";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkOpenSourceRabbitMQParametersProperties } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkOpenSourceRabbitMqparametersProperties";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkOpenSourceRabbitMQParametersRoutingKey } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkOpenSourceRabbitMqparametersRoutingKey";


export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkOpenSourceRabbitMQParameters extends $dara.Model {
  /**
   * @example
   * ACL
   */
  authType?: string;
  body?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkOpenSourceRabbitMQParametersBody;
  /**
   * @example
   * 192.168.1.1:9876
   */
  endpoint?: string;
  /**
   * @example
   * my_exchange
   */
  exchange?: string;
  messageId?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkOpenSourceRabbitMQParametersMessageId;
  /**
   * @example
   * PrivateNetwork
   */
  networkType?: string;
  /**
   * @example
   * ****
   */
  password?: string;
  properties?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkOpenSourceRabbitMQParametersProperties;
  /**
   * @example
   * my_queue
   */
  queueName?: string;
  routingKey?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkOpenSourceRabbitMQParametersRoutingKey;
  /**
   * @example
   * sg-2vcgdxz7o1n9zapp****
   */
  securityGroupId?: string;
  /**
   * @example
   * exchange
   */
  targetType?: string;
  /**
   * @example
   * admin
   */
  username?: string;
  /**
   * @example
   * vsw-wz9qqeovkwjxlu9uc****
   */
  vSwitchIds?: string;
  /**
   * @example
   * Vhost1
   */
  virtualHostName?: string;
  /**
   * @remarks
   * VPC ID。
   * 
   * @example
   * vpc-2zehizpoendb3****
   */
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
      body: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkOpenSourceRabbitMQParametersBody,
      endpoint: 'string',
      exchange: 'string',
      messageId: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkOpenSourceRabbitMQParametersMessageId,
      networkType: 'string',
      password: 'string',
      properties: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkOpenSourceRabbitMQParametersProperties,
      queueName: 'string',
      routingKey: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkOpenSourceRabbitMQParametersRoutingKey,
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

