// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceHttpEventParameters } from "./ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceHttpEventParameters";
import { ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceKafkaParameters } from "./ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceKafkaParameters";
import { ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceMNSParameters } from "./ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceMnsparameters";
import { ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceRabbitMQParameters } from "./ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceRabbitMqparameters";
import { ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceRocketMQParameters } from "./ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceRocketMqparameters";
import { ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceSLSParameters } from "./ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceSlsparameters";
import { ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceScheduledEventParameters } from "./ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceScheduledEventParameters";


export class ListUserDefinedEventSourcesResponseBodyDataEventSourceList extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the queried event source.
   * 
   * @example
   * acs:eventbridge:cn-hangzhou:164901546557****:eventbus/my-event-bus/eventsource/myRocketMQ.source
   */
  arn?: string;
  /**
   * @remarks
   * The timestamp that indicates when the event source was created.
   * 
   * @example
   * 1607071602000
   */
  ctime?: number;
  /**
   * @remarks
   * The name of the event bus.
   * 
   * @example
   * test-custom-bus
   */
  eventBusName?: string;
  /**
   * @remarks
   * The type of the event source.
   * 
   * @example
   * RabbitMQ
   */
  externalSourceType?: string;
  /**
   * @remarks
   * The name of the queried event source.
   * 
   * @example
   * rocketmq.source
   */
  name?: string;
  /**
   * @remarks
   * The parameters that are returned if HTTP events are specified as the event source.
   */
  sourceHttpEventParameters?: ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceHttpEventParameters;
  /**
   * @remarks
   * The parameters that are returned if Message Queue for Apache Kafka is specified as the event source.
   */
  sourceKafkaParameters?: ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceKafkaParameters;
  /**
   * @remarks
   * The parameters that are returned if Message Service (MNS) is specified as the event source.
   */
  sourceMNSParameters?: ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceMNSParameters;
  /**
   * @remarks
   * The parameters that are returned if Message Queue for RabbitMQ is specified as the event source.
   */
  sourceRabbitMQParameters?: ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceRabbitMQParameters;
  /**
   * @remarks
   * The parameters that are returned if Message Queue for Apache RocketMQ is specified as the event source.
   */
  sourceRocketMQParameters?: ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceRocketMQParameters;
  /**
   * @remarks
   * The parameters that are returned if Simple Log Service is specified as the event source.
   */
  sourceSLSParameters?: ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceSLSParameters;
  /**
   * @remarks
   * The parameters that are returned if scheduled events are specified as the event source.
   */
  sourceScheduledEventParameters?: ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceScheduledEventParameters;
  /**
   * @remarks
   * The status of the queried event source. The returned value Activated indicates that the event source is activated.
   * 
   * @example
   * Activated
   */
  status?: string;
  /**
   * @remarks
   * The type of the queried event source. The returned value UserDefined indicates that the event source is a custom event source.
   * 
   * @example
   * UserDefined
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      ctime: 'Ctime',
      eventBusName: 'EventBusName',
      externalSourceType: 'ExternalSourceType',
      name: 'Name',
      sourceHttpEventParameters: 'SourceHttpEventParameters',
      sourceKafkaParameters: 'SourceKafkaParameters',
      sourceMNSParameters: 'SourceMNSParameters',
      sourceRabbitMQParameters: 'SourceRabbitMQParameters',
      sourceRocketMQParameters: 'SourceRocketMQParameters',
      sourceSLSParameters: 'SourceSLSParameters',
      sourceScheduledEventParameters: 'SourceScheduledEventParameters',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      ctime: 'number',
      eventBusName: 'string',
      externalSourceType: 'string',
      name: 'string',
      sourceHttpEventParameters: ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceHttpEventParameters,
      sourceKafkaParameters: ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceKafkaParameters,
      sourceMNSParameters: ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceMNSParameters,
      sourceRabbitMQParameters: ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceRabbitMQParameters,
      sourceRocketMQParameters: ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceRocketMQParameters,
      sourceSLSParameters: ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceSLSParameters,
      sourceScheduledEventParameters: ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceScheduledEventParameters,
      status: 'string',
      type: 'string',
    };
  }

  validate() {
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

