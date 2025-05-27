// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersBody } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMqparametersBody";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersExchange } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMqparametersExchange";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersInstanceId } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMqparametersInstanceId";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersMessageId } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMqparametersMessageId";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersProperties } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMqparametersProperties";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersQueueName } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMqparametersQueueName";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersRoutingKey } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMqparametersRoutingKey";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersTargetType } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMqparametersTargetType";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersVirtualHostName } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMqparametersVirtualHostName";


export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParameters extends $dara.Model {
  /**
   * @remarks
   * The message content.
   */
  body?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersBody;
  /**
   * @remarks
   * The exchange mode. This parameter is required only if TargetType is set to Exchange.
   */
  exchange?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersExchange;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RabbitMQ instance.
   */
  instanceId?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersInstanceId;
  /**
   * @remarks
   * The message ID.
   */
  messageId?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersMessageId;
  /**
   * @remarks
   * The properties that are used to filter messages.
   */
  properties?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersProperties;
  /**
   * @remarks
   * The queue mode. This parameter is required only if TargetType is set to Queue.
   */
  queueName?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersQueueName;
  /**
   * @remarks
   * The rule that is used to route messages. This parameter is required only if TargetType is set to Exchange.
   */
  routingKey?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersRoutingKey;
  /**
   * @remarks
   * The type of the resource to which events are delivered.
   */
  targetType?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersTargetType;
  /**
   * @remarks
   * The name of the vhost to which the ApsaraMQ for RabbitMQ instance belongs.
   */
  virtualHostName?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersVirtualHostName;
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
      body: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersBody,
      exchange: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersExchange,
      instanceId: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersInstanceId,
      messageId: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersMessageId,
      properties: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersProperties,
      queueName: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersQueueName,
      routingKey: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersRoutingKey,
      targetType: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersTargetType,
      virtualHostName: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersVirtualHostName,
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

