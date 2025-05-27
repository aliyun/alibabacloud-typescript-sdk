// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateEventStreamingRequestSinkSinkRabbitMQParametersBody } from "./CreateEventStreamingRequestSinkSinkRabbitMqparametersBody";
import { CreateEventStreamingRequestSinkSinkRabbitMQParametersExchange } from "./CreateEventStreamingRequestSinkSinkRabbitMqparametersExchange";
import { CreateEventStreamingRequestSinkSinkRabbitMQParametersInstanceId } from "./CreateEventStreamingRequestSinkSinkRabbitMqparametersInstanceId";
import { CreateEventStreamingRequestSinkSinkRabbitMQParametersMessageId } from "./CreateEventStreamingRequestSinkSinkRabbitMqparametersMessageId";
import { CreateEventStreamingRequestSinkSinkRabbitMQParametersProperties } from "./CreateEventStreamingRequestSinkSinkRabbitMqparametersProperties";
import { CreateEventStreamingRequestSinkSinkRabbitMQParametersQueueName } from "./CreateEventStreamingRequestSinkSinkRabbitMqparametersQueueName";
import { CreateEventStreamingRequestSinkSinkRabbitMQParametersRoutingKey } from "./CreateEventStreamingRequestSinkSinkRabbitMqparametersRoutingKey";
import { CreateEventStreamingRequestSinkSinkRabbitMQParametersTargetType } from "./CreateEventStreamingRequestSinkSinkRabbitMqparametersTargetType";
import { CreateEventStreamingRequestSinkSinkRabbitMQParametersVirtualHostName } from "./CreateEventStreamingRequestSinkSinkRabbitMqparametersVirtualHostName";


export class CreateEventStreamingRequestSinkSinkRabbitMQParameters extends $dara.Model {
  /**
   * @remarks
   * The message content.
   */
  body?: CreateEventStreamingRequestSinkSinkRabbitMQParametersBody;
  /**
   * @remarks
   * The exchange mode. This parameter is required only if you set TargetType to Exchange.
   */
  exchange?: CreateEventStreamingRequestSinkSinkRabbitMQParametersExchange;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RabbitMQ instance.
   */
  instanceId?: CreateEventStreamingRequestSinkSinkRabbitMQParametersInstanceId;
  /**
   * @remarks
   * The message ID.
   */
  messageId?: CreateEventStreamingRequestSinkSinkRabbitMQParametersMessageId;
  /**
   * @remarks
   * The properties that you want to use to filter messages.
   */
  properties?: CreateEventStreamingRequestSinkSinkRabbitMQParametersProperties;
  /**
   * @remarks
   * The queue mode. This parameter is required only if you set TargetType to Queue.
   */
  queueName?: CreateEventStreamingRequestSinkSinkRabbitMQParametersQueueName;
  /**
   * @remarks
   * The rule that you want to use to route messages. This parameter is required only if you set TargetType to Exchange.
   */
  routingKey?: CreateEventStreamingRequestSinkSinkRabbitMQParametersRoutingKey;
  /**
   * @remarks
   * The type of the resource to which you want to deliver events.
   */
  targetType?: CreateEventStreamingRequestSinkSinkRabbitMQParametersTargetType;
  /**
   * @remarks
   * The name of the vhost to which the ApsaraMQ for RabbitMQ instance belongs.
   */
  virtualHostName?: CreateEventStreamingRequestSinkSinkRabbitMQParametersVirtualHostName;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      exchange: 'Exchange',
      instanceId: 'InstanceId',
      messageId: 'MessageId',
      properties: 'Properties',
      queueName: 'QueueName',
      routingKey: 'RoutingKey',
      targetType: 'TargetType',
      virtualHostName: 'VirtualHostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateEventStreamingRequestSinkSinkRabbitMQParametersBody,
      exchange: CreateEventStreamingRequestSinkSinkRabbitMQParametersExchange,
      instanceId: CreateEventStreamingRequestSinkSinkRabbitMQParametersInstanceId,
      messageId: CreateEventStreamingRequestSinkSinkRabbitMQParametersMessageId,
      properties: CreateEventStreamingRequestSinkSinkRabbitMQParametersProperties,
      queueName: CreateEventStreamingRequestSinkSinkRabbitMQParametersQueueName,
      routingKey: CreateEventStreamingRequestSinkSinkRabbitMQParametersRoutingKey,
      targetType: CreateEventStreamingRequestSinkSinkRabbitMQParametersTargetType,
      virtualHostName: CreateEventStreamingRequestSinkSinkRabbitMQParametersVirtualHostName,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    if(this.exchange && typeof (this.exchange as any).validate === 'function') {
      (this.exchange as any).validate();
    }
    if(this.instanceId && typeof (this.instanceId as any).validate === 'function') {
      (this.instanceId as any).validate();
    }
    if(this.messageId && typeof (this.messageId as any).validate === 'function') {
      (this.messageId as any).validate();
    }
    if(this.properties && typeof (this.properties as any).validate === 'function') {
      (this.properties as any).validate();
    }
    if(this.queueName && typeof (this.queueName as any).validate === 'function') {
      (this.queueName as any).validate();
    }
    if(this.routingKey && typeof (this.routingKey as any).validate === 'function') {
      (this.routingKey as any).validate();
    }
    if(this.targetType && typeof (this.targetType as any).validate === 'function') {
      (this.targetType as any).validate();
    }
    if(this.virtualHostName && typeof (this.virtualHostName as any).validate === 'function') {
      (this.virtualHostName as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

