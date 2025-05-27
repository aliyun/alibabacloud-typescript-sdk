// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceApacheRocketMQCheckpointParameters } from "./ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceApacheRocketMqcheckpointParameters";
import { ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceCustomizedKafkaConnectorParameters } from "./ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceCustomizedKafkaConnectorParameters";
import { ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceCustomizedKafkaParameters } from "./ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceCustomizedKafkaParameters";
import { ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceDTSParameters } from "./ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceDtsparameters";
import { ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceEventBusParameters } from "./ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceEventBusParameters";
import { ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceKafkaParameters } from "./ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceKafkaParameters";
import { ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceMNSParameters } from "./ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceMnsparameters";
import { ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceMQTTParameters } from "./ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceMqttparameters";
import { SourceMySQLParameters } from "./SourceMySqlparameters";
import { ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceOSSParameters } from "./ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceOssparameters";
import { ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceOpenSourceRabbitMQParameters } from "./ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceOpenSourceRabbitMqparameters";
import { ListEventStreamingsResponseBodyDataEventStreamingsSourceSourcePrometheusParameters } from "./ListEventStreamingsResponseBodyDataEventStreamingsSourceSourcePrometheusParameters";
import { ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceRabbitMQParameters } from "./ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceRabbitMqparameters";
import { ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceRocketMQCheckpointParameters } from "./ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceRocketMqcheckpointParameters";
import { ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceRocketMQParameters } from "./ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceRocketMqparameters";
import { ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceSLSParameters } from "./ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceSlsparameters";


export class ListEventStreamingsResponseBodyDataEventStreamingsSource extends $dara.Model {
  sourceApacheRocketMQCheckpointParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceApacheRocketMQCheckpointParameters;
  sourceCustomizedKafkaConnectorParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceCustomizedKafkaConnectorParameters;
  sourceCustomizedKafkaParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceCustomizedKafkaParameters;
  /**
   * @remarks
   * The parameters that are returned if Data Transmission Service (DTS) is specified as the event source.
   */
  sourceDTSParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceDTSParameters;
  sourceEventBusParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceEventBusParameters;
  /**
   * @remarks
   * The parameters that are returned if ApsaraMQ for Kafka is specified as the event source.
   */
  sourceKafkaParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceKafkaParameters;
  /**
   * @remarks
   * The parameters that are returned if Message Queue (MNS) is specified as the event source.
   */
  sourceMNSParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceMNSParameters;
  /**
   * @remarks
   * The parameters that are returned if ApsaraMQ for MQTT is specified as the event source.
   */
  sourceMQTTParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceMQTTParameters;
  sourceMySQLParameters?: SourceMySQLParameters;
  sourceOSSParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceOSSParameters;
  sourceOpenSourceRabbitMQParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceOpenSourceRabbitMQParameters;
  sourcePrometheusParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourcePrometheusParameters;
  /**
   * @remarks
   * The parameters that are returned if ApsaraMQ for RabbitMQ is specified as the event source.
   */
  sourceRabbitMQParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceRabbitMQParameters;
  sourceRocketMQCheckpointParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceRocketMQCheckpointParameters;
  /**
   * @remarks
   * The parameters that are returned if ApsaraMQ for RocketMQ is specified as the event source.
   */
  sourceRocketMQParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceRocketMQParameters;
  /**
   * @remarks
   * The parameters that are returned if Simple Log Service is specified as the event source.
   */
  sourceSLSParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceSLSParameters;
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
      sourceApacheRocketMQCheckpointParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceApacheRocketMQCheckpointParameters,
      sourceCustomizedKafkaConnectorParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceCustomizedKafkaConnectorParameters,
      sourceCustomizedKafkaParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceCustomizedKafkaParameters,
      sourceDTSParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceDTSParameters,
      sourceEventBusParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceEventBusParameters,
      sourceKafkaParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceKafkaParameters,
      sourceMNSParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceMNSParameters,
      sourceMQTTParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceMQTTParameters,
      sourceMySQLParameters: SourceMySQLParameters,
      sourceOSSParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceOSSParameters,
      sourceOpenSourceRabbitMQParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceOpenSourceRabbitMQParameters,
      sourcePrometheusParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourcePrometheusParameters,
      sourceRabbitMQParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceRabbitMQParameters,
      sourceRocketMQCheckpointParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceRocketMQCheckpointParameters,
      sourceRocketMQParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceRocketMQParameters,
      sourceSLSParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceSLSParameters,
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

