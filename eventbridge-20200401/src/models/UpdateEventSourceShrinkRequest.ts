// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEventSourceShrinkRequest extends $dara.Model {
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
   * The name of the associated event bus.
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
   * The external datasource config.
   * 
   * @example
   * {"IsBase64Decode":true,"QueueName":"queue-1"}
   */
  externalSourceConfigShrink?: string;
  /**
   * @remarks
   * The type of the external data source.
   * 
   * @example
   * SLS
   */
  externalSourceType?: string;
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
   * The parameters for the Simple Message Queue (formerly MNS) event source.
   */
  sourceMNSParametersShrink?: string;
  /**
   * @remarks
   * The parameters for the OSS event source.
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
   * The parameters for the Simple Log Service event source.
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
      externalSourceType: 'string',
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

