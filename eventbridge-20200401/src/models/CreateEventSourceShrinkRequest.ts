// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEventSourceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the event source.
   * 
   * @example
   * RabbitMQ event source
   */
  description?: string;
  /**
   * @remarks
   * The name of the event bus associated with the event source.
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
   * The configuration of the external data source.
   */
  externalSourceConfigShrink?: string;
  /**
   * @remarks
   * The type of the external data source.
   * 
   * @example
   * RabbitMQ
   */
  externalSourceType?: Buffer;
  /**
   * @remarks
   * Specifies whether to connect to an external data source.
   * 
   * @example
   * true
   */
  linkedExternalSource?: boolean;
  /**
   * @remarks
   * Parameters for an HTTP endpoint event source.
   */
  sourceHttpEventParametersShrink?: string;
  /**
   * @remarks
   * Parameters for the Message Queue for Apache Kafka event source.
   */
  sourceKafkaParametersShrink?: string;
  /**
   * @remarks
   * Parameters for the Message Service (MNS) event source. The `RegionId`, `IsBase64Decode`, and `QueueName` parameters are required for this type.
   */
  sourceMNSParametersShrink?: string;
  /**
   * @remarks
   * Parameters for the Object Storage Service (OSS) event source.
   */
  sourceOSSEventParametersShrink?: string;
  /**
   * @remarks
   * Parameters for the Message Queue for RabbitMQ event source.
   */
  sourceRabbitMQParametersShrink?: string;
  /**
   * @remarks
   * Parameters for the Message Queue for Apache RocketMQ event source.
   */
  sourceRocketMQParametersShrink?: string;
  /**
   * @remarks
   * Parameters for the Simple Log Service (SLS) event source.
   */
  sourceSLSParametersShrink?: string;
  /**
   * @remarks
   * Parameters for a scheduled event source.
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
      sourceOSSEventParametersShrink: 'SourceOSSEventParameters',
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
      sourceOSSEventParametersShrink: 'string',
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

