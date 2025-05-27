// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersBody } from "./GetEventStreamingResponseBodyDataSinkSinkRabbitMqparametersBody";
import { GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersExchange } from "./GetEventStreamingResponseBodyDataSinkSinkRabbitMqparametersExchange";
import { GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersInstanceId } from "./GetEventStreamingResponseBodyDataSinkSinkRabbitMqparametersInstanceId";
import { GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersMessageId } from "./GetEventStreamingResponseBodyDataSinkSinkRabbitMqparametersMessageId";
import { GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersProperties } from "./GetEventStreamingResponseBodyDataSinkSinkRabbitMqparametersProperties";
import { GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersQueueName } from "./GetEventStreamingResponseBodyDataSinkSinkRabbitMqparametersQueueName";
import { GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersRoutingKey } from "./GetEventStreamingResponseBodyDataSinkSinkRabbitMqparametersRoutingKey";
import { GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersTargetType } from "./GetEventStreamingResponseBodyDataSinkSinkRabbitMqparametersTargetType";
import { GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersVirtualHostName } from "./GetEventStreamingResponseBodyDataSinkSinkRabbitMqparametersVirtualHostName";


export class GetEventStreamingResponseBodyDataSinkSinkRabbitMQParameters extends $dara.Model {
  /**
   * @remarks
   * The message content.
   */
  body?: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersBody;
  /**
   * @remarks
   * The exchange mode. This parameter is available only if TargetType is set to Exchange.
   */
  exchange?: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersExchange;
  /**
   * @remarks
   * The target service type is Message Queue for RabbitMQ instance.
   */
  instanceId?: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersInstanceId;
  /**
   * @remarks
   * The message ID.
   */
  messageId?: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersMessageId;
  /**
   * @remarks
   * The tags that are used to filter messages.
   */
  properties?: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersProperties;
  /**
   * @remarks
   * The queue mode. This parameter is available only if TargetType is set to Queue.
   */
  queueName?: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersQueueName;
  /**
   * @remarks
   * The routing rule for the message. This parameter is available only if TargetType is set to Exchange.
   */
  routingKey?: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersRoutingKey;
  /**
   * @remarks
   * The target type.
   */
  targetType?: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersTargetType;
  /**
   * @remarks
   * The name of the vhost of the Message Queue for RabbitMQ instance.
   */
  virtualHostName?: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersVirtualHostName;
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
      body: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersBody,
      exchange: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersExchange,
      instanceId: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersInstanceId,
      messageId: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersMessageId,
      properties: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersProperties,
      queueName: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersQueueName,
      routingKey: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersRoutingKey,
      targetType: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersTargetType,
      virtualHostName: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersVirtualHostName,
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

