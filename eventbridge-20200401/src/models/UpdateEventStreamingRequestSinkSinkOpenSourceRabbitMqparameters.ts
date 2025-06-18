// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersBody } from "./UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMqparametersBody";
import { UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersMessageId } from "./UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMqparametersMessageId";
import { UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersProperties } from "./UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMqparametersProperties";
import { UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersRoutingKey } from "./UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMqparametersRoutingKey";


export class UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParameters extends $dara.Model {
  /**
   * @remarks
   * The authentication type. Valid values:
   * 
   * *   ACL
   * *   N/A
   * 
   * @example
   * ACL
   */
  authType?: string;
  /**
   * @remarks
   * The message body.
   */
  body?: UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersBody;
  /**
   * @remarks
   * The endpoint used to access the open source RabbitMQ instance.
   * 
   * @example
   * 192.168.1.1:9876
   */
  endpoint?: string;
  /**
   * @remarks
   * The name of the exchange on the open source RabbitMQ instance. This parameter is valid only if you set TargetType to Exchange.
   * 
   * @example
   * my-exchange
   */
  exchange?: string;
  /**
   * @remarks
   * The message ID.
   */
  messageId?: UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersMessageId;
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * *   PrivateNetwork
   * *   PublicNetwork
   * 
   * @example
   * PublicNetwork
   */
  networkType?: string;
  /**
   * @remarks
   * The password that is used to access the open source RabbitMQ instance.
   * 
   * @example
   * ****
   */
  password?: string;
  /**
   * @remarks
   * The attributes of the message.
   */
  properties?: UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersProperties;
  /**
   * @remarks
   * The name of the queue on the open source RabbitMQ instance. This parameter is valid only if you set TargetType to Queue.
   * 
   * @example
   * my-queue
   */
  queueName?: string;
  /**
   * @remarks
   * The routing key.
   */
  routingKey?: UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersRoutingKey;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-uf6of9452b2pba82c ****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The type of the resource to which you want to deliver messages. Valid values:
   * 
   * *   **Exchange**: Messages are routed to the event target using an exchange.
   * *   **Queue**: Messages are delivered to a specific queue.
   * 
   * @example
   * Exchange
   */
  targetType?: string;
  /**
   * @remarks
   * The username that is used to access the open source RabbitMQ instance.
   * 
   * @example
   * admin
   */
  username?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-uf6of9452b2pba82c ****
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The name of the virtual host of the open source RabbitMQ instance.
   * 
   * @example
   * Vhost1
   */
  virtualHostName?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
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

