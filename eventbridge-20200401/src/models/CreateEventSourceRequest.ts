// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateEventSourceRequestSourceHttpEventParameters } from "./CreateEventSourceRequestSourceHttpEventParameters";
import { CreateEventSourceRequestSourceKafkaParameters } from "./CreateEventSourceRequestSourceKafkaParameters";
import { CreateEventSourceRequestSourceMNSParameters } from "./CreateEventSourceRequestSourceMnsparameters";
import { CreateEventSourceRequestSourceRabbitMQParameters } from "./CreateEventSourceRequestSourceRabbitMqparameters";
import { CreateEventSourceRequestSourceRocketMQParameters } from "./CreateEventSourceRequestSourceRocketMqparameters";
import { CreateEventSourceRequestSourceSLSParameters } from "./CreateEventSourceRequestSourceSlsparameters";
import { CreateEventSourceRequestSourceScheduledEventParameters } from "./CreateEventSourceRequestSourceScheduledEventParameters";


export class CreateEventSourceRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the event source.
   */
  description?: string;
  /**
   * @remarks
   * The name of the event bus with which the event source is associated.
   * 
   * This parameter is required.
   * 
   * @example
   * my-event-bus
   */
  eventBusName?: string;
  /**
   * @remarks
   * The name of the event source.
   * 
   * This parameter is required.
   * 
   * @example
   * myrabbitmq.sourc
   */
  eventSourceName?: string;
  /**
   * @remarks
   * The configurations of the external data source.
   */
  externalSourceConfig?: { [key: string]: any };
  /**
   * @remarks
   * The type of the external data source.
   */
  externalSourceType?: Buffer;
  /**
   * @remarks
   * Specifies whether to connect to an external data source.
   */
  linkedExternalSource?: boolean;
  /**
   * @remarks
   * The parameters that are configured if the event source is HTTP events.
   */
  sourceHttpEventParameters?: CreateEventSourceRequestSourceHttpEventParameters;
  /**
   * @remarks
   * The parameters that are configured if the event source is Message Queue for Apache Kafka.
   */
  sourceKafkaParameters?: CreateEventSourceRequestSourceKafkaParameters;
  /**
   * @remarks
   * The parameters that are configured if the event source is Message Service (MNS). If you specify MNS as the event source, you must configure RegionId, IsBase64Decode, and QueueName.
   */
  sourceMNSParameters?: CreateEventSourceRequestSourceMNSParameters;
  /**
   * @remarks
   * The parameters that are configured if the event source is Message Queue for RabbitMQ.
   */
  sourceRabbitMQParameters?: CreateEventSourceRequestSourceRabbitMQParameters;
  /**
   * @remarks
   * The parameters that are configured if the event source is Message Queue for Apache RocketMQ.
   */
  sourceRocketMQParameters?: CreateEventSourceRequestSourceRocketMQParameters;
  /**
   * @remarks
   * The parameters that are configured if the event source is Log Service.
   */
  sourceSLSParameters?: CreateEventSourceRequestSourceSLSParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify scheduled events as the event source.
   */
  sourceScheduledEventParameters?: CreateEventSourceRequestSourceScheduledEventParameters;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      eventBusName: 'EventBusName',
      eventSourceName: 'EventSourceName',
      externalSourceConfig: 'ExternalSourceConfig',
      externalSourceType: 'ExternalSourceType',
      linkedExternalSource: 'LinkedExternalSource',
      sourceHttpEventParameters: 'SourceHttpEventParameters',
      sourceKafkaParameters: 'SourceKafkaParameters',
      sourceMNSParameters: 'SourceMNSParameters',
      sourceRabbitMQParameters: 'SourceRabbitMQParameters',
      sourceRocketMQParameters: 'SourceRocketMQParameters',
      sourceSLSParameters: 'SourceSLSParameters',
      sourceScheduledEventParameters: 'SourceScheduledEventParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      eventBusName: 'string',
      eventSourceName: 'string',
      externalSourceConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      externalSourceType: 'Buffer',
      linkedExternalSource: 'boolean',
      sourceHttpEventParameters: CreateEventSourceRequestSourceHttpEventParameters,
      sourceKafkaParameters: CreateEventSourceRequestSourceKafkaParameters,
      sourceMNSParameters: CreateEventSourceRequestSourceMNSParameters,
      sourceRabbitMQParameters: CreateEventSourceRequestSourceRabbitMQParameters,
      sourceRocketMQParameters: CreateEventSourceRequestSourceRocketMQParameters,
      sourceSLSParameters: CreateEventSourceRequestSourceSLSParameters,
      sourceScheduledEventParameters: CreateEventSourceRequestSourceScheduledEventParameters,
    };
  }

  validate() {
    if(this.externalSourceConfig) {
      $dara.Model.validateMap(this.externalSourceConfig);
    }
    if(this.sourceHttpEventParameters && typeof (this.sourceHttpEventParameters as any).validate === 'function') {
      (this.sourceHttpEventParameters as any).validate();
    }
    if(this.sourceKafkaParameters && typeof (this.sourceKafkaParameters as any).validate === 'function') {
      (this.sourceKafkaParameters as any).validate();
    }
    if(this.sourceMNSParameters && typeof (this.sourceMNSParameters as any).validate === 'function') {
      (this.sourceMNSParameters as any).validate();
    }
    if(this.sourceRabbitMQParameters && typeof (this.sourceRabbitMQParameters as any).validate === 'function') {
      (this.sourceRabbitMQParameters as any).validate();
    }
    if(this.sourceRocketMQParameters && typeof (this.sourceRocketMQParameters as any).validate === 'function') {
      (this.sourceRocketMQParameters as any).validate();
    }
    if(this.sourceSLSParameters && typeof (this.sourceSLSParameters as any).validate === 'function') {
      (this.sourceSLSParameters as any).validate();
    }
    if(this.sourceScheduledEventParameters && typeof (this.sourceScheduledEventParameters as any).validate === 'function') {
      (this.sourceScheduledEventParameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

