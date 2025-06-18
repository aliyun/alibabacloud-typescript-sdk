// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateEventStreamingRequestSinkSinkRabbitMQParametersBody } from "./UpdateEventStreamingRequestSinkSinkRabbitMqparametersBody";
import { UpdateEventStreamingRequestSinkSinkRabbitMQParametersExchange } from "./UpdateEventStreamingRequestSinkSinkRabbitMqparametersExchange";
import { UpdateEventStreamingRequestSinkSinkRabbitMQParametersInstanceId } from "./UpdateEventStreamingRequestSinkSinkRabbitMqparametersInstanceId";
import { UpdateEventStreamingRequestSinkSinkRabbitMQParametersMessageId } from "./UpdateEventStreamingRequestSinkSinkRabbitMqparametersMessageId";
import { UpdateEventStreamingRequestSinkSinkRabbitMQParametersProperties } from "./UpdateEventStreamingRequestSinkSinkRabbitMqparametersProperties";
import { UpdateEventStreamingRequestSinkSinkRabbitMQParametersQueueName } from "./UpdateEventStreamingRequestSinkSinkRabbitMqparametersQueueName";
import { UpdateEventStreamingRequestSinkSinkRabbitMQParametersRoutingKey } from "./UpdateEventStreamingRequestSinkSinkRabbitMqparametersRoutingKey";
import { UpdateEventStreamingRequestSinkSinkRabbitMQParametersTargetType } from "./UpdateEventStreamingRequestSinkSinkRabbitMqparametersTargetType";
import { UpdateEventStreamingRequestSinkSinkRabbitMQParametersVirtualHostName } from "./UpdateEventStreamingRequestSinkSinkRabbitMqparametersVirtualHostName";


export class UpdateEventStreamingRequestSinkSinkRabbitMQParameters extends $dara.Model {
  /**
   * @remarks
   * The message body.
   */
  body?: UpdateEventStreamingRequestSinkSinkRabbitMQParametersBody;
  /**
   * @remarks
   * The exchange mode. This parameter is required only if you set TargetType to Exchange.
   */
  exchange?: UpdateEventStreamingRequestSinkSinkRabbitMQParametersExchange;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RabbitMQ instance.
   */
  instanceId?: UpdateEventStreamingRequestSinkSinkRabbitMQParametersInstanceId;
  /**
   * @remarks
   * The message ID.
   */
  messageId?: UpdateEventStreamingRequestSinkSinkRabbitMQParametersMessageId;
  /**
   * @remarks
   * The attributes that you want to use to filter messages.
   */
  properties?: UpdateEventStreamingRequestSinkSinkRabbitMQParametersProperties;
  /**
   * @remarks
   * The queue mode. This parameter is required only if you set TargetType to Queue.
   */
  queueName?: UpdateEventStreamingRequestSinkSinkRabbitMQParametersQueueName;
  /**
   * @remarks
   * The rule that you want to use to route messages. This parameter is required only if you set TargetType to Exchange.
   */
  routingKey?: UpdateEventStreamingRequestSinkSinkRabbitMQParametersRoutingKey;
  /**
   * @remarks
   * The type of the resource to which you want to deliver events.
   */
  targetType?: UpdateEventStreamingRequestSinkSinkRabbitMQParametersTargetType;
  /**
   * @remarks
   * The name of the vhost of the ApsaraMQ for RabbitMQ instance.
   */
  virtualHostName?: UpdateEventStreamingRequestSinkSinkRabbitMQParametersVirtualHostName;
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
      body: UpdateEventStreamingRequestSinkSinkRabbitMQParametersBody,
      exchange: UpdateEventStreamingRequestSinkSinkRabbitMQParametersExchange,
      instanceId: UpdateEventStreamingRequestSinkSinkRabbitMQParametersInstanceId,
      messageId: UpdateEventStreamingRequestSinkSinkRabbitMQParametersMessageId,
      properties: UpdateEventStreamingRequestSinkSinkRabbitMQParametersProperties,
      queueName: UpdateEventStreamingRequestSinkSinkRabbitMQParametersQueueName,
      routingKey: UpdateEventStreamingRequestSinkSinkRabbitMQParametersRoutingKey,
      targetType: UpdateEventStreamingRequestSinkSinkRabbitMQParametersTargetType,
      virtualHostName: UpdateEventStreamingRequestSinkSinkRabbitMQParametersVirtualHostName,
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

