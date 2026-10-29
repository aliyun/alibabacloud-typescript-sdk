// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEventSourceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the event source.
   * 
   * @example
   * Event source of the RabbitMQ type
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
   * The external data source configuration.
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
   * The request parameter SourceHttpEventParameters.
   */
  sourceHttpEventParametersShrink?: string;
  /**
   * @remarks
   * The request parameter SourceKafkaParameters.
   */
  sourceKafkaParametersShrink?: string;
  /**
   * @remarks
   * The parameters for a Simple Message Queue (formerly MNS) event source. If you select Simple Message Queue (formerly MNS) as the event source, the RegionId, IsBase64Decode, and QueueName parameters are required.
   */
  sourceMNSParametersShrink?: string;
  /**
   * @remarks
   * The parameters for an OSS event source.
   */
  sourceOSSEventParametersShrink?: string;
  /**
   * @remarks
   * The request parameter SourceRabbitMQParameters.
   */
  sourceRabbitMQParametersShrink?: string;
  /**
   * @remarks
   * The request parameter SourceRocketMQParameters.
   */
  sourceRocketMQParametersShrink?: string;
  /**
   * @remarks
   * The parameters for a Simple Log Service event source.
   */
  sourceSLSParametersShrink?: string;
  /**
   * @remarks
   * The request parameter SourceScheduledEventParameters.
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

