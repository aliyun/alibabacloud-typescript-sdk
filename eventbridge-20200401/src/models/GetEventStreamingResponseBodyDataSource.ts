// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetEventStreamingResponseBodyDataSourceSourceApacheRocketMQCheckpointParameters } from "./GetEventStreamingResponseBodyDataSourceSourceApacheRocketMqcheckpointParameters";
import { GetEventStreamingResponseBodyDataSourceSourceCustomizedKafkaConnectorParameters } from "./GetEventStreamingResponseBodyDataSourceSourceCustomizedKafkaConnectorParameters";
import { GetEventStreamingResponseBodyDataSourceSourceCustomizedKafkaParameters } from "./GetEventStreamingResponseBodyDataSourceSourceCustomizedKafkaParameters";
import { GetEventStreamingResponseBodyDataSourceSourceDTSParameters } from "./GetEventStreamingResponseBodyDataSourceSourceDtsparameters";
import { GetEventStreamingResponseBodyDataSourceSourceEventBusParameters } from "./GetEventStreamingResponseBodyDataSourceSourceEventBusParameters";
import { GetEventStreamingResponseBodyDataSourceSourceKafkaParameters } from "./GetEventStreamingResponseBodyDataSourceSourceKafkaParameters";
import { GetEventStreamingResponseBodyDataSourceSourceMNSParameters } from "./GetEventStreamingResponseBodyDataSourceSourceMnsparameters";
import { GetEventStreamingResponseBodyDataSourceSourceMQTTParameters } from "./GetEventStreamingResponseBodyDataSourceSourceMqttparameters";
import { SourceMySQLParameters } from "./SourceMySqlparameters";
import { GetEventStreamingResponseBodyDataSourceSourceOSSParameters } from "./GetEventStreamingResponseBodyDataSourceSourceOssparameters";
import { GetEventStreamingResponseBodyDataSourceSourceOpenSourceRabbitMQParameters } from "./GetEventStreamingResponseBodyDataSourceSourceOpenSourceRabbitMqparameters";
import { GetEventStreamingResponseBodyDataSourceSourcePrometheusParameters } from "./GetEventStreamingResponseBodyDataSourceSourcePrometheusParameters";
import { GetEventStreamingResponseBodyDataSourceSourceRabbitMQParameters } from "./GetEventStreamingResponseBodyDataSourceSourceRabbitMqparameters";
import { GetEventStreamingResponseBodyDataSourceSourceRocketMQCheckpointParameters } from "./GetEventStreamingResponseBodyDataSourceSourceRocketMqcheckpointParameters";
import { GetEventStreamingResponseBodyDataSourceSourceRocketMQParameters } from "./GetEventStreamingResponseBodyDataSourceSourceRocketMqparameters";
import { GetEventStreamingResponseBodyDataSourceSourceSLSParameters } from "./GetEventStreamingResponseBodyDataSourceSourceSlsparameters";


export class GetEventStreamingResponseBodyDataSource extends $dara.Model {
  /**
   * @remarks
   * The parameters that are returned if Apache RocketMQ (Offset Data) is specified as the event source.
   */
  sourceApacheRocketMQCheckpointParameters?: GetEventStreamingResponseBodyDataSourceSourceApacheRocketMQCheckpointParameters;
  sourceCustomizedKafkaConnectorParameters?: GetEventStreamingResponseBodyDataSourceSourceCustomizedKafkaConnectorParameters;
  sourceCustomizedKafkaParameters?: GetEventStreamingResponseBodyDataSourceSourceCustomizedKafkaParameters;
  /**
   * @remarks
   * The parameters that are returned if the event source is Data Transmission Service (DTS).
   */
  sourceDTSParameters?: GetEventStreamingResponseBodyDataSourceSourceDTSParameters;
  sourceEventBusParameters?: GetEventStreamingResponseBodyDataSourceSourceEventBusParameters;
  /**
   * @remarks
   * The parameters that are returned if ApsaraMQ for Kafka is specified as the event source.
   */
  sourceKafkaParameters?: GetEventStreamingResponseBodyDataSourceSourceKafkaParameters;
  /**
   * @remarks
   * Source MNS Parameters
   */
  sourceMNSParameters?: GetEventStreamingResponseBodyDataSourceSourceMNSParameters;
  /**
   * @remarks
   * The parameters that are returned if ApsaraMQ for MQTT is specified as the event source.
   */
  sourceMQTTParameters?: GetEventStreamingResponseBodyDataSourceSourceMQTTParameters;
  sourceMySQLParameters?: SourceMySQLParameters;
  sourceOSSParameters?: GetEventStreamingResponseBodyDataSourceSourceOSSParameters;
  sourceOpenSourceRabbitMQParameters?: GetEventStreamingResponseBodyDataSourceSourceOpenSourceRabbitMQParameters;
  sourcePrometheusParameters?: GetEventStreamingResponseBodyDataSourceSourcePrometheusParameters;
  /**
   * @remarks
   * Source RabbitMQ Parameters
   */
  sourceRabbitMQParameters?: GetEventStreamingResponseBodyDataSourceSourceRabbitMQParameters;
  sourceRocketMQCheckpointParameters?: GetEventStreamingResponseBodyDataSourceSourceRocketMQCheckpointParameters;
  /**
   * @remarks
   * The parameters that are returned if ApsaraMQ for RocketMQ is specified as the event source.
   */
  sourceRocketMQParameters?: GetEventStreamingResponseBodyDataSourceSourceRocketMQParameters;
  /**
   * @remarks
   * The parameters that are returned if the event provider is Simple Log Service.
   */
  sourceSLSParameters?: GetEventStreamingResponseBodyDataSourceSourceSLSParameters;
  static names(): { [key: string]: string } {
    return {
      sourceApacheRocketMQCheckpointParameters: 'SourceApacheRocketMQCheckpointParameters',
      sourceCustomizedKafkaConnectorParameters: 'SourceCustomizedKafkaConnectorParameters',
      sourceCustomizedKafkaParameters: 'SourceCustomizedKafkaParameters',
      sourceDTSParameters: 'SourceDTSParameters',
      sourceEventBusParameters: 'SourceEventBusParameters',
      sourceKafkaParameters: 'SourceKafkaParameters',
      sourceMNSParameters: 'SourceMNSParameters',
      sourceMQTTParameters: 'SourceMQTTParameters',
      sourceMySQLParameters: 'SourceMySQLParameters',
      sourceOSSParameters: 'SourceOSSParameters',
      sourceOpenSourceRabbitMQParameters: 'SourceOpenSourceRabbitMQParameters',
      sourcePrometheusParameters: 'SourcePrometheusParameters',
      sourceRabbitMQParameters: 'SourceRabbitMQParameters',
      sourceRocketMQCheckpointParameters: 'SourceRocketMQCheckpointParameters',
      sourceRocketMQParameters: 'SourceRocketMQParameters',
      sourceSLSParameters: 'SourceSLSParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceApacheRocketMQCheckpointParameters: GetEventStreamingResponseBodyDataSourceSourceApacheRocketMQCheckpointParameters,
      sourceCustomizedKafkaConnectorParameters: GetEventStreamingResponseBodyDataSourceSourceCustomizedKafkaConnectorParameters,
      sourceCustomizedKafkaParameters: GetEventStreamingResponseBodyDataSourceSourceCustomizedKafkaParameters,
      sourceDTSParameters: GetEventStreamingResponseBodyDataSourceSourceDTSParameters,
      sourceEventBusParameters: GetEventStreamingResponseBodyDataSourceSourceEventBusParameters,
      sourceKafkaParameters: GetEventStreamingResponseBodyDataSourceSourceKafkaParameters,
      sourceMNSParameters: GetEventStreamingResponseBodyDataSourceSourceMNSParameters,
      sourceMQTTParameters: GetEventStreamingResponseBodyDataSourceSourceMQTTParameters,
      sourceMySQLParameters: SourceMySQLParameters,
      sourceOSSParameters: GetEventStreamingResponseBodyDataSourceSourceOSSParameters,
      sourceOpenSourceRabbitMQParameters: GetEventStreamingResponseBodyDataSourceSourceOpenSourceRabbitMQParameters,
      sourcePrometheusParameters: GetEventStreamingResponseBodyDataSourceSourcePrometheusParameters,
      sourceRabbitMQParameters: GetEventStreamingResponseBodyDataSourceSourceRabbitMQParameters,
      sourceRocketMQCheckpointParameters: GetEventStreamingResponseBodyDataSourceSourceRocketMQCheckpointParameters,
      sourceRocketMQParameters: GetEventStreamingResponseBodyDataSourceSourceRocketMQParameters,
      sourceSLSParameters: GetEventStreamingResponseBodyDataSourceSourceSLSParameters,
    };
  }

  validate() {
    if(this.sourceApacheRocketMQCheckpointParameters && typeof (this.sourceApacheRocketMQCheckpointParameters as any).validate === 'function') {
      (this.sourceApacheRocketMQCheckpointParameters as any).validate();
    }
    if(this.sourceCustomizedKafkaConnectorParameters && typeof (this.sourceCustomizedKafkaConnectorParameters as any).validate === 'function') {
      (this.sourceCustomizedKafkaConnectorParameters as any).validate();
    }
    if(this.sourceCustomizedKafkaParameters && typeof (this.sourceCustomizedKafkaParameters as any).validate === 'function') {
      (this.sourceCustomizedKafkaParameters as any).validate();
    }
    if(this.sourceDTSParameters && typeof (this.sourceDTSParameters as any).validate === 'function') {
      (this.sourceDTSParameters as any).validate();
    }
    if(this.sourceEventBusParameters && typeof (this.sourceEventBusParameters as any).validate === 'function') {
      (this.sourceEventBusParameters as any).validate();
    }
    if(this.sourceKafkaParameters && typeof (this.sourceKafkaParameters as any).validate === 'function') {
      (this.sourceKafkaParameters as any).validate();
    }
    if(this.sourceMNSParameters && typeof (this.sourceMNSParameters as any).validate === 'function') {
      (this.sourceMNSParameters as any).validate();
    }
    if(this.sourceMQTTParameters && typeof (this.sourceMQTTParameters as any).validate === 'function') {
      (this.sourceMQTTParameters as any).validate();
    }
    if(this.sourceMySQLParameters && typeof (this.sourceMySQLParameters as any).validate === 'function') {
      (this.sourceMySQLParameters as any).validate();
    }
    if(this.sourceOSSParameters && typeof (this.sourceOSSParameters as any).validate === 'function') {
      (this.sourceOSSParameters as any).validate();
    }
    if(this.sourceOpenSourceRabbitMQParameters && typeof (this.sourceOpenSourceRabbitMQParameters as any).validate === 'function') {
      (this.sourceOpenSourceRabbitMQParameters as any).validate();
    }
    if(this.sourcePrometheusParameters && typeof (this.sourcePrometheusParameters as any).validate === 'function') {
      (this.sourcePrometheusParameters as any).validate();
    }
    if(this.sourceRabbitMQParameters && typeof (this.sourceRabbitMQParameters as any).validate === 'function') {
      (this.sourceRabbitMQParameters as any).validate();
    }
    if(this.sourceRocketMQCheckpointParameters && typeof (this.sourceRocketMQCheckpointParameters as any).validate === 'function') {
      (this.sourceRocketMQCheckpointParameters as any).validate();
    }
    if(this.sourceRocketMQParameters && typeof (this.sourceRocketMQParameters as any).validate === 'function') {
      (this.sourceRocketMQParameters as any).validate();
    }
    if(this.sourceSLSParameters && typeof (this.sourceSLSParameters as any).validate === 'function') {
      (this.sourceSLSParameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

