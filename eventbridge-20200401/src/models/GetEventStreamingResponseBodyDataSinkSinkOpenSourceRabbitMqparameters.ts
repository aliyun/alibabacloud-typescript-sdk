// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMQParametersBody } from "./GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMqparametersBody";
import { GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMQParametersMessageId } from "./GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMqparametersMessageId";
import { GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMQParametersProperties } from "./GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMqparametersProperties";
import { GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMQParametersRoutingKey } from "./GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMqparametersRoutingKey";


export class GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMQParameters extends $dara.Model {
  /**
   * @example
   * ACL
   */
  authType?: string;
  body?: GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMQParametersBody;
  /**
   * @example
   * 192.168.1.1:9876
   */
  endpoint?: string;
  /**
   * @example
   * my-exchange
   */
  exchange?: string;
  messageId?: GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMQParametersMessageId;
  /**
   * @example
   * PublicNetwork
   */
  networkType?: string;
  /**
   * @example
   * ****
   */
  password?: string;
  properties?: GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMQParametersProperties;
  /**
   * @example
   * my-queue
   */
  queueName?: string;
  routingKey?: GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMQParametersRoutingKey;
  /**
   * @example
   * sg-uf6of9452b2pba82c ****
   */
  securityGroupId?: string;
  /**
   * @example
   * Exchange
   */
  targetType?: string;
  /**
   * @example
   * admin
   */
  username?: string;
  /**
   * @example
   * vsw-uf6of9452b2pba82c ****
   */
  vSwitchIds?: string;
  /**
   * @example
   * vhost1
   */
  virtualHostName?: string;
  /**
   * @example
   * vpc-uf6of9452b2pba82c ****
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

