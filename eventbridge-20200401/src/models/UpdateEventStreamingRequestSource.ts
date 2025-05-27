// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateEventStreamingRequestSourceSourceApacheRocketMQCheckpointParameters } from "./UpdateEventStreamingRequestSourceSourceApacheRocketMqcheckpointParameters";
import { UpdateEventStreamingRequestSourceSourceCustomizedKafkaConnectorParameters } from "./UpdateEventStreamingRequestSourceSourceCustomizedKafkaConnectorParameters";
import { UpdateEventStreamingRequestSourceSourceCustomizedKafkaParameters } from "./UpdateEventStreamingRequestSourceSourceCustomizedKafkaParameters";
import { UpdateEventStreamingRequestSourceSourceDTSParameters } from "./UpdateEventStreamingRequestSourceSourceDtsparameters";
import { UpdateEventStreamingRequestSourceSourceEventBusParameters } from "./UpdateEventStreamingRequestSourceSourceEventBusParameters";
import { UpdateEventStreamingRequestSourceSourceKafkaParameters } from "./UpdateEventStreamingRequestSourceSourceKafkaParameters";
import { UpdateEventStreamingRequestSourceSourceMNSParameters } from "./UpdateEventStreamingRequestSourceSourceMnsparameters";
import { UpdateEventStreamingRequestSourceSourceMQTTParameters } from "./UpdateEventStreamingRequestSourceSourceMqttparameters";
import { SourceMySQLParameters } from "./SourceMySqlparameters";
import { UpdateEventStreamingRequestSourceSourceOSSParameters } from "./UpdateEventStreamingRequestSourceSourceOssparameters";
import { UpdateEventStreamingRequestSourceSourceOpenSourceRabbitMQParameters } from "./UpdateEventStreamingRequestSourceSourceOpenSourceRabbitMqparameters";
import { UpdateEventStreamingRequestSourceSourcePrometheusParameters } from "./UpdateEventStreamingRequestSourceSourcePrometheusParameters";
import { UpdateEventStreamingRequestSourceSourceRabbitMQParameters } from "./UpdateEventStreamingRequestSourceSourceRabbitMqparameters";
import { UpdateEventStreamingRequestSourceSourceRocketMQCheckpointParameters } from "./UpdateEventStreamingRequestSourceSourceRocketMqcheckpointParameters";
import { UpdateEventStreamingRequestSourceSourceRocketMQParameters } from "./UpdateEventStreamingRequestSourceSourceRocketMqparameters";
import { UpdateEventStreamingRequestSourceSourceSLSParameters } from "./UpdateEventStreamingRequestSourceSourceSlsparameters";


export class UpdateEventStreamingRequestSource extends $dara.Model {
  sourceApacheRocketMQCheckpointParameters?: UpdateEventStreamingRequestSourceSourceApacheRocketMQCheckpointParameters;
  sourceCustomizedKafkaConnectorParameters?: UpdateEventStreamingRequestSourceSourceCustomizedKafkaConnectorParameters;
  sourceCustomizedKafkaParameters?: UpdateEventStreamingRequestSourceSourceCustomizedKafkaParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify Data Transmission Service (DTS) as the event source.
   */
  sourceDTSParameters?: UpdateEventStreamingRequestSourceSourceDTSParameters;
  sourceEventBusParameters?: UpdateEventStreamingRequestSourceSourceEventBusParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify ApsaraMQ for Kafka as the event source.
   */
  sourceKafkaParameters?: UpdateEventStreamingRequestSourceSourceKafkaParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify Message Service (MNS) as the event source.
   */
  sourceMNSParameters?: UpdateEventStreamingRequestSourceSourceMNSParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify ApsaraMQ for MQTT as the event source.
   */
  sourceMQTTParameters?: UpdateEventStreamingRequestSourceSourceMQTTParameters;
  sourceMySQLParameters?: SourceMySQLParameters;
  sourceOSSParameters?: UpdateEventStreamingRequestSourceSourceOSSParameters;
  sourceOpenSourceRabbitMQParameters?: UpdateEventStreamingRequestSourceSourceOpenSourceRabbitMQParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify Managed Service for Prometheus as the event source.
   */
  sourcePrometheusParameters?: UpdateEventStreamingRequestSourceSourcePrometheusParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify ApsaraMQ for RabbitMQ as the event source.
   */
  sourceRabbitMQParameters?: UpdateEventStreamingRequestSourceSourceRabbitMQParameters;
  sourceRocketMQCheckpointParameters?: UpdateEventStreamingRequestSourceSourceRocketMQCheckpointParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify ApsaraMQ for RocketMQ as the event source.
   */
  sourceRocketMQParameters?: UpdateEventStreamingRequestSourceSourceRocketMQParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify Simple Log Service as the event source.
   */
  sourceSLSParameters?: UpdateEventStreamingRequestSourceSourceSLSParameters;
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
      sourceApacheRocketMQCheckpointParameters: UpdateEventStreamingRequestSourceSourceApacheRocketMQCheckpointParameters,
      sourceCustomizedKafkaConnectorParameters: UpdateEventStreamingRequestSourceSourceCustomizedKafkaConnectorParameters,
      sourceCustomizedKafkaParameters: UpdateEventStreamingRequestSourceSourceCustomizedKafkaParameters,
      sourceDTSParameters: UpdateEventStreamingRequestSourceSourceDTSParameters,
      sourceEventBusParameters: UpdateEventStreamingRequestSourceSourceEventBusParameters,
      sourceKafkaParameters: UpdateEventStreamingRequestSourceSourceKafkaParameters,
      sourceMNSParameters: UpdateEventStreamingRequestSourceSourceMNSParameters,
      sourceMQTTParameters: UpdateEventStreamingRequestSourceSourceMQTTParameters,
      sourceMySQLParameters: SourceMySQLParameters,
      sourceOSSParameters: UpdateEventStreamingRequestSourceSourceOSSParameters,
      sourceOpenSourceRabbitMQParameters: UpdateEventStreamingRequestSourceSourceOpenSourceRabbitMQParameters,
      sourcePrometheusParameters: UpdateEventStreamingRequestSourceSourcePrometheusParameters,
      sourceRabbitMQParameters: UpdateEventStreamingRequestSourceSourceRabbitMQParameters,
      sourceRocketMQCheckpointParameters: UpdateEventStreamingRequestSourceSourceRocketMQCheckpointParameters,
      sourceRocketMQParameters: UpdateEventStreamingRequestSourceSourceRocketMQParameters,
      sourceSLSParameters: UpdateEventStreamingRequestSourceSourceSLSParameters,
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

