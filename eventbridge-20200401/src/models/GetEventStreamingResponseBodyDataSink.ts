// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetEventStreamingResponseBodyDataSinkSinkApacheRocketMQCheckpointParameters } from "./GetEventStreamingResponseBodyDataSinkSinkApacheRocketMqcheckpointParameters";
import { SinkBaiLianParameters } from "./SinkBaiLianParameters";
import { GetEventStreamingResponseBodyDataSinkSinkCustomizedKafkaConnectorParameters } from "./GetEventStreamingResponseBodyDataSinkSinkCustomizedKafkaConnectorParameters";
import { GetEventStreamingResponseBodyDataSinkSinkCustomizedKafkaParameters } from "./GetEventStreamingResponseBodyDataSinkSinkCustomizedKafkaParameters";
import { GetEventStreamingResponseBodyDataSinkSinkDashVectorParameters } from "./GetEventStreamingResponseBodyDataSinkSinkDashVectorParameters";
import { GetEventStreamingResponseBodyDataSinkSinkDataHubParameters } from "./GetEventStreamingResponseBodyDataSinkSinkDataHubParameters";
import { GetEventStreamingResponseBodyDataSinkSinkFcParameters } from "./GetEventStreamingResponseBodyDataSinkSinkFcParameters";
import { GetEventStreamingResponseBodyDataSinkSinkFnfParameters } from "./GetEventStreamingResponseBodyDataSinkSinkFnfParameters";
import { GetEventStreamingResponseBodyDataSinkSinkKafkaParameters } from "./GetEventStreamingResponseBodyDataSinkSinkKafkaParameters";
import { GetEventStreamingResponseBodyDataSinkSinkMNSParameters } from "./GetEventStreamingResponseBodyDataSinkSinkMnsparameters";
import { GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMQParameters } from "./GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMqparameters";
import { GetEventStreamingResponseBodyDataSinkSinkRabbitMQParameters } from "./GetEventStreamingResponseBodyDataSinkSinkRabbitMqparameters";
import { GetEventStreamingResponseBodyDataSinkSinkRocketMQCheckpointParameters } from "./GetEventStreamingResponseBodyDataSinkSinkRocketMqcheckpointParameters";
import { GetEventStreamingResponseBodyDataSinkSinkRocketMQParameters } from "./GetEventStreamingResponseBodyDataSinkSinkRocketMqparameters";
import { GetEventStreamingResponseBodyDataSinkSinkSLSParameters } from "./GetEventStreamingResponseBodyDataSinkSinkSlsparameters";


export class GetEventStreamingResponseBodyDataSink extends $dara.Model {
  sinkApacheRocketMQCheckpointParameters?: GetEventStreamingResponseBodyDataSinkSinkApacheRocketMQCheckpointParameters;
  sinkBaiLianParameters?: SinkBaiLianParameters;
  sinkCustomizedKafkaConnectorParameters?: GetEventStreamingResponseBodyDataSinkSinkCustomizedKafkaConnectorParameters;
  sinkCustomizedKafkaParameters?: GetEventStreamingResponseBodyDataSinkSinkCustomizedKafkaParameters;
  sinkDashVectorParameters?: GetEventStreamingResponseBodyDataSinkSinkDashVectorParameters;
  sinkDataHubParameters?: GetEventStreamingResponseBodyDataSinkSinkDataHubParameters;
  /**
   * @remarks
   * The parameters that are returned if the event target is Function Compute.
   */
  sinkFcParameters?: GetEventStreamingResponseBodyDataSinkSinkFcParameters;
  /**
   * @remarks
   * The Sink Fnf parameters.
   */
  sinkFnfParameters?: GetEventStreamingResponseBodyDataSinkSinkFnfParameters;
  /**
   * @remarks
   * The parameters that are returned if the event target is Message Queue for Apache Kafka.
   */
  sinkKafkaParameters?: GetEventStreamingResponseBodyDataSinkSinkKafkaParameters;
  /**
   * @remarks
   * The parameters that are returned if the event target is Message Service (MNS).
   */
  sinkMNSParameters?: GetEventStreamingResponseBodyDataSinkSinkMNSParameters;
  sinkOpenSourceRabbitMQParameters?: GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMQParameters;
  /**
   * @remarks
   * The parameters that are returned if the event target is Message Queue for RabbitMQ.
   */
  sinkRabbitMQParameters?: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParameters;
  sinkRocketMQCheckpointParameters?: GetEventStreamingResponseBodyDataSinkSinkRocketMQCheckpointParameters;
  /**
   * @remarks
   * The parameters that are returned if ApsaraMQ for RocketMQ is specified as the event target.
   */
  sinkRocketMQParameters?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParameters;
  /**
   * @remarks
   * The parameters that are returned if Simple Log Service is specified as the event target.
   */
  sinkSLSParameters?: GetEventStreamingResponseBodyDataSinkSinkSLSParameters;
  static names(): { [key: string]: string } {
    return {
      sinkApacheRocketMQCheckpointParameters: 'SinkApacheRocketMQCheckpointParameters',
      sinkBaiLianParameters: 'SinkBaiLianParameters',
      sinkCustomizedKafkaConnectorParameters: 'SinkCustomizedKafkaConnectorParameters',
      sinkCustomizedKafkaParameters: 'SinkCustomizedKafkaParameters',
      sinkDashVectorParameters: 'SinkDashVectorParameters',
      sinkDataHubParameters: 'SinkDataHubParameters',
      sinkFcParameters: 'SinkFcParameters',
      sinkFnfParameters: 'SinkFnfParameters',
      sinkKafkaParameters: 'SinkKafkaParameters',
      sinkMNSParameters: 'SinkMNSParameters',
      sinkOpenSourceRabbitMQParameters: 'SinkOpenSourceRabbitMQParameters',
      sinkRabbitMQParameters: 'SinkRabbitMQParameters',
      sinkRocketMQCheckpointParameters: 'SinkRocketMQCheckpointParameters',
      sinkRocketMQParameters: 'SinkRocketMQParameters',
      sinkSLSParameters: 'SinkSLSParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sinkApacheRocketMQCheckpointParameters: GetEventStreamingResponseBodyDataSinkSinkApacheRocketMQCheckpointParameters,
      sinkBaiLianParameters: SinkBaiLianParameters,
      sinkCustomizedKafkaConnectorParameters: GetEventStreamingResponseBodyDataSinkSinkCustomizedKafkaConnectorParameters,
      sinkCustomizedKafkaParameters: GetEventStreamingResponseBodyDataSinkSinkCustomizedKafkaParameters,
      sinkDashVectorParameters: GetEventStreamingResponseBodyDataSinkSinkDashVectorParameters,
      sinkDataHubParameters: GetEventStreamingResponseBodyDataSinkSinkDataHubParameters,
      sinkFcParameters: GetEventStreamingResponseBodyDataSinkSinkFcParameters,
      sinkFnfParameters: GetEventStreamingResponseBodyDataSinkSinkFnfParameters,
      sinkKafkaParameters: GetEventStreamingResponseBodyDataSinkSinkKafkaParameters,
      sinkMNSParameters: GetEventStreamingResponseBodyDataSinkSinkMNSParameters,
      sinkOpenSourceRabbitMQParameters: GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMQParameters,
      sinkRabbitMQParameters: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParameters,
      sinkRocketMQCheckpointParameters: GetEventStreamingResponseBodyDataSinkSinkRocketMQCheckpointParameters,
      sinkRocketMQParameters: GetEventStreamingResponseBodyDataSinkSinkRocketMQParameters,
      sinkSLSParameters: GetEventStreamingResponseBodyDataSinkSinkSLSParameters,
    };
  }

  validate() {
    if(this.sinkApacheRocketMQCheckpointParameters && typeof (this.sinkApacheRocketMQCheckpointParameters as any).validate === 'function') {
      (this.sinkApacheRocketMQCheckpointParameters as any).validate();
    }
    if(this.sinkBaiLianParameters && typeof (this.sinkBaiLianParameters as any).validate === 'function') {
      (this.sinkBaiLianParameters as any).validate();
    }
    if(this.sinkCustomizedKafkaConnectorParameters && typeof (this.sinkCustomizedKafkaConnectorParameters as any).validate === 'function') {
      (this.sinkCustomizedKafkaConnectorParameters as any).validate();
    }
    if(this.sinkCustomizedKafkaParameters && typeof (this.sinkCustomizedKafkaParameters as any).validate === 'function') {
      (this.sinkCustomizedKafkaParameters as any).validate();
    }
    if(this.sinkDashVectorParameters && typeof (this.sinkDashVectorParameters as any).validate === 'function') {
      (this.sinkDashVectorParameters as any).validate();
    }
    if(this.sinkDataHubParameters && typeof (this.sinkDataHubParameters as any).validate === 'function') {
      (this.sinkDataHubParameters as any).validate();
    }
    if(this.sinkFcParameters && typeof (this.sinkFcParameters as any).validate === 'function') {
      (this.sinkFcParameters as any).validate();
    }
    if(this.sinkFnfParameters && typeof (this.sinkFnfParameters as any).validate === 'function') {
      (this.sinkFnfParameters as any).validate();
    }
    if(this.sinkKafkaParameters && typeof (this.sinkKafkaParameters as any).validate === 'function') {
      (this.sinkKafkaParameters as any).validate();
    }
    if(this.sinkMNSParameters && typeof (this.sinkMNSParameters as any).validate === 'function') {
      (this.sinkMNSParameters as any).validate();
    }
    if(this.sinkOpenSourceRabbitMQParameters && typeof (this.sinkOpenSourceRabbitMQParameters as any).validate === 'function') {
      (this.sinkOpenSourceRabbitMQParameters as any).validate();
    }
    if(this.sinkRabbitMQParameters && typeof (this.sinkRabbitMQParameters as any).validate === 'function') {
      (this.sinkRabbitMQParameters as any).validate();
    }
    if(this.sinkRocketMQCheckpointParameters && typeof (this.sinkRocketMQCheckpointParameters as any).validate === 'function') {
      (this.sinkRocketMQCheckpointParameters as any).validate();
    }
    if(this.sinkRocketMQParameters && typeof (this.sinkRocketMQParameters as any).validate === 'function') {
      (this.sinkRocketMQParameters as any).validate();
    }
    if(this.sinkSLSParameters && typeof (this.sinkSLSParameters as any).validate === 'function') {
      (this.sinkSLSParameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

