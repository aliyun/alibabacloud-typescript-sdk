// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateEventSourceRequestSourceHttpEventParameters } from "./UpdateEventSourceRequestSourceHttpEventParameters";
import { UpdateEventSourceRequestSourceKafkaParameters } from "./UpdateEventSourceRequestSourceKafkaParameters";
import { UpdateEventSourceRequestSourceMNSParameters } from "./UpdateEventSourceRequestSourceMnsparameters";
import { UpdateEventSourceRequestSourceRabbitMQParameters } from "./UpdateEventSourceRequestSourceRabbitMqparameters";
import { UpdateEventSourceRequestSourceRocketMQParameters } from "./UpdateEventSourceRequestSourceRocketMqparameters";
import { UpdateEventSourceRequestSourceSLSParameters } from "./UpdateEventSourceRequestSourceSlsparameters";
import { UpdateEventSourceRequestSourceScheduledEventParameters } from "./UpdateEventSourceRequestSourceScheduledEventParameters";


export class UpdateEventSourceRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the event source.
   */
  description?: string;
  /**
   * @remarks
   * The event bus with which the event source is associated.
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
   * myrabbitmq.source
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
  externalSourceType?: string;
  /**
   * @remarks
   * Specifies whether to connect to an external data source.
   */
  linkedExternalSource?: boolean;
  /**
   * @remarks
   * The parameters that are configured if the event source is HTTP events.
   */
  sourceHttpEventParameters?: UpdateEventSourceRequestSourceHttpEventParameters;
  /**
   * @remarks
   * The parameters that are configured if the event source is Message Queue for Apache Kafka.
   */
  sourceKafkaParameters?: UpdateEventSourceRequestSourceKafkaParameters;
  /**
   * @remarks
   * The parameters that are configured if the event source is Message Service (MNS).
   */
  sourceMNSParameters?: UpdateEventSourceRequestSourceMNSParameters;
  /**
   * @remarks
   * The parameters that are configured if the event source is Message Queue for RabbitMQ.
   */
  sourceRabbitMQParameters?: UpdateEventSourceRequestSourceRabbitMQParameters;
  /**
   * @remarks
   * The parameters that are configured if the event source is Message Queue for Apache RocketMQ.
   */
  sourceRocketMQParameters?: UpdateEventSourceRequestSourceRocketMQParameters;
  /**
   * @remarks
   * SourceSLSParameters
   */
  sourceSLSParameters?: UpdateEventSourceRequestSourceSLSParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify scheduled events as the event source.
   */
  sourceScheduledEventParameters?: UpdateEventSourceRequestSourceScheduledEventParameters;
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
      externalSourceType: 'string',
      linkedExternalSource: 'boolean',
      sourceHttpEventParameters: UpdateEventSourceRequestSourceHttpEventParameters,
      sourceKafkaParameters: UpdateEventSourceRequestSourceKafkaParameters,
      sourceMNSParameters: UpdateEventSourceRequestSourceMNSParameters,
      sourceRabbitMQParameters: UpdateEventSourceRequestSourceRabbitMQParameters,
      sourceRocketMQParameters: UpdateEventSourceRequestSourceRocketMQParameters,
      sourceSLSParameters: UpdateEventSourceRequestSourceSLSParameters,
      sourceScheduledEventParameters: UpdateEventSourceRequestSourceScheduledEventParameters,
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

