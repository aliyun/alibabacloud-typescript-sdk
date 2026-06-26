// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SourceDTSParameters } from "./SourceDtsparameters";
import { SourceKafkaParameters } from "./SourceKafkaParameters";
import { SourceMNSParameters } from "./SourceMnsparameters";
import { SourceMQTTParameters } from "./SourceMqttparameters";
import { SourceRabbitMQParameters } from "./SourceRabbitMqparameters";
import { SourceRocketMQParameters } from "./SourceRocketMqparameters";


export class EventSourceParameters extends $dara.Model {
  /**
   * @remarks
   * Custom parameter settings when the event source is Data Transmission Service DTS.
   */
  sourceDTSParameters?: SourceDTSParameters;
  /**
   * @remarks
   * Custom parameter settings when the event source is Kafka.
   */
  sourceKafkaParameters?: SourceKafkaParameters;
  /**
   * @remarks
   * Custom parameter settings when the event source is Simple Message Queue (formerly MNS).
   */
  sourceMNSParameters?: SourceMNSParameters;
  /**
   * @remarks
   * Custom parameter settings when the event source is ApsaraMQ for MQTT.
   */
  sourceMQTTParameters?: SourceMQTTParameters;
  /**
   * @remarks
   * Custom parameter settings when the event source is Message Queue for RabbitMQ.
   */
  sourceRabbitMQParameters?: SourceRabbitMQParameters;
  /**
   * @remarks
   * Custom parameter settings when the event source is Message Queue for RocketMQ.
   */
  sourceRocketMQParameters?: SourceRocketMQParameters;
  static names(): { [key: string]: string } {
    return {
      sourceDTSParameters: 'sourceDTSParameters',
      sourceKafkaParameters: 'sourceKafkaParameters',
      sourceMNSParameters: 'sourceMNSParameters',
      sourceMQTTParameters: 'sourceMQTTParameters',
      sourceRabbitMQParameters: 'sourceRabbitMQParameters',
      sourceRocketMQParameters: 'sourceRocketMQParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceDTSParameters: SourceDTSParameters,
      sourceKafkaParameters: SourceKafkaParameters,
      sourceMNSParameters: SourceMNSParameters,
      sourceMQTTParameters: SourceMQTTParameters,
      sourceRabbitMQParameters: SourceRabbitMQParameters,
      sourceRocketMQParameters: SourceRocketMQParameters,
    };
  }

  validate() {
    if(this.sourceDTSParameters && typeof (this.sourceDTSParameters as any).validate === 'function') {
      (this.sourceDTSParameters as any).validate();
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
    if(this.sourceRabbitMQParameters && typeof (this.sourceRabbitMQParameters as any).validate === 'function') {
      (this.sourceRabbitMQParameters as any).validate();
    }
    if(this.sourceRocketMQParameters && typeof (this.sourceRocketMQParameters as any).validate === 'function') {
      (this.sourceRocketMQParameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

