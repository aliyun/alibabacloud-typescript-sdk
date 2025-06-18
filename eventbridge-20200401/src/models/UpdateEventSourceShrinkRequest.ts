// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEventSourceShrinkRequest extends $dara.Model {
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
   * 
   * @example
   * {\\"ConsumePosition\\":\\"end\\",\\"LogStore\\":\\"oss_log\\",\\"Project\\":\\"slsaudit-center-5795350335281001-cn-beijing\\",\\"RoleName\\":\\"sls-beijing-tf\\"}
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
   * The parameters that are configured if the event source is Message Service (MNS).
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
   * SourceSLSParameters
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
      externalSourceType: 'string',
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

