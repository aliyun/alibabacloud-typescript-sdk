// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEventSourceShrinkRequest extends $dara.Model {
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
  externalSourceConfigShrink?: string;
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
  sourceHttpEventParametersShrink?: string;
  /**
   * @remarks
   * The parameters that are configured if the event source is Message Queue for Apache Kafka.
   */
  sourceKafkaParametersShrink?: string;
  /**
   * @remarks
   * The parameters that are configured if the event source is Message Service (MNS). If you specify MNS as the event source, you must configure RegionId, IsBase64Decode, and QueueName.
   */
  sourceMNSParametersShrink?: string;
  /**
   * @remarks
   * The parameters that are configured if the event source is Message Queue for RabbitMQ.
   */
  sourceRabbitMQParametersShrink?: string;
  /**
   * @remarks
   * The parameters that are configured if the event source is Message Queue for Apache RocketMQ.
   */
  sourceRocketMQParametersShrink?: string;
  /**
   * @remarks
   * The parameters that are configured if the event source is Log Service.
   */
  sourceSLSParametersShrink?: string;
  /**
   * @remarks
   * The parameters that are configured if you specify scheduled events as the event source.
   */
  sourceScheduledEventParametersShrink?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      eventBusName: 'EventBusName',
      eventSourceName: 'EventSourceName',
      externalSourceConfigShrink: 'ExternalSourceConfig',
      externalSourceType: 'ExternalSourceType',
      linkedExternalSource: 'LinkedExternalSource',
      sourceHttpEventParametersShrink: 'SourceHttpEventParameters',
      sourceKafkaParametersShrink: 'SourceKafkaParameters',
      sourceMNSParametersShrink: 'SourceMNSParameters',
      sourceRabbitMQParametersShrink: 'SourceRabbitMQParameters',
      sourceRocketMQParametersShrink: 'SourceRocketMQParameters',
      sourceSLSParametersShrink: 'SourceSLSParameters',
      sourceScheduledEventParametersShrink: 'SourceScheduledEventParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      eventBusName: 'string',
      eventSourceName: 'string',
      externalSourceConfigShrink: 'string',
      externalSourceType: 'Buffer',
      linkedExternalSource: 'boolean',
      sourceHttpEventParametersShrink: 'string',
      sourceKafkaParametersShrink: 'string',
      sourceMNSParametersShrink: 'string',
      sourceRabbitMQParametersShrink: 'string',
      sourceRocketMQParametersShrink: 'string',
      sourceSLSParametersShrink: 'string',
      sourceScheduledEventParametersShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

