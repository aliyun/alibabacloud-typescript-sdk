// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParameters } from "./UpdateEventStreamingRequestSinkSinkApacheRocketMqcheckpointParameters";
import { SinkBaiLianParameters } from "./SinkBaiLianParameters";
import { UpdateEventStreamingRequestSinkSinkCustomizedKafkaConnectorParameters } from "./UpdateEventStreamingRequestSinkSinkCustomizedKafkaConnectorParameters";
import { UpdateEventStreamingRequestSinkSinkCustomizedKafkaParameters } from "./UpdateEventStreamingRequestSinkSinkCustomizedKafkaParameters";
import { UpdateEventStreamingRequestSinkSinkDashVectorParameters } from "./UpdateEventStreamingRequestSinkSinkDashVectorParameters";
import { UpdateEventStreamingRequestSinkSinkDataHubParameters } from "./UpdateEventStreamingRequestSinkSinkDataHubParameters";
import { UpdateEventStreamingRequestSinkSinkDorisParameters } from "./UpdateEventStreamingRequestSinkSinkDorisParameters";
import { UpdateEventStreamingRequestSinkSinkFcParameters } from "./UpdateEventStreamingRequestSinkSinkFcParameters";
import { UpdateEventStreamingRequestSinkSinkFnfParameters } from "./UpdateEventStreamingRequestSinkSinkFnfParameters";
import { UpdateEventStreamingRequestSinkSinkKafkaParameters } from "./UpdateEventStreamingRequestSinkSinkKafkaParameters";
import { UpdateEventStreamingRequestSinkSinkMNSParameters } from "./UpdateEventStreamingRequestSinkSinkMnsparameters";
import { UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParameters } from "./UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMqparameters";
import { UpdateEventStreamingRequestSinkSinkPrometheusParameters } from "./UpdateEventStreamingRequestSinkSinkPrometheusParameters";
import { UpdateEventStreamingRequestSinkSinkRabbitMQParameters } from "./UpdateEventStreamingRequestSinkSinkRabbitMqparameters";
import { UpdateEventStreamingRequestSinkSinkRocketMQCheckpointParameters } from "./UpdateEventStreamingRequestSinkSinkRocketMqcheckpointParameters";
import { UpdateEventStreamingRequestSinkSinkRocketMQParameters } from "./UpdateEventStreamingRequestSinkSinkRocketMqparameters";
import { UpdateEventStreamingRequestSinkSinkSLSParameters } from "./UpdateEventStreamingRequestSinkSinkSlsparameters";


export class UpdateEventStreamingRequestSink extends $dara.Model {
  /**
   * @remarks
   * The parameters that are configured if you specify Apache RocketMQ (Offset Data) as the event target.
   */
  sinkApacheRocketMQCheckpointParameters?: UpdateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify BaiLian as the event target.
   */
  sinkBaiLianParameters?: SinkBaiLianParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify Kafka Sink Connect as the event target.
   */
  sinkCustomizedKafkaConnectorParameters?: UpdateEventStreamingRequestSinkSinkCustomizedKafkaConnectorParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify Kafka Source Connect as the event target.
   */
  sinkCustomizedKafkaParameters?: UpdateEventStreamingRequestSinkSinkCustomizedKafkaParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify DashVector as the event target.
   */
  sinkDashVectorParameters?: UpdateEventStreamingRequestSinkSinkDashVectorParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify DataHub as the event target.
   */
  sinkDataHubParameters?: UpdateEventStreamingRequestSinkSinkDataHubParameters;
  /**
   * @remarks
   * The type of the event source.
   */
  sinkDorisParameters?: UpdateEventStreamingRequestSinkSinkDorisParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify Function Compute as the event target.
   */
  sinkFcParameters?: UpdateEventStreamingRequestSinkSinkFcParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify CloudFlow as the event target.
   */
  sinkFnfParameters?: UpdateEventStreamingRequestSinkSinkFnfParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify ApsaraMQ for Kafka as the event target.
   */
  sinkKafkaParameters?: UpdateEventStreamingRequestSinkSinkKafkaParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify Simple Message Queue (SMQ, formerly MNS) as the event target.
   */
  sinkMNSParameters?: UpdateEventStreamingRequestSinkSinkMNSParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify open source RabbitMQ as the event target.
   */
  sinkOpenSourceRabbitMQParameters?: UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify Managed Service for Prometheus as the event target.
   */
  sinkPrometheusParameters?: UpdateEventStreamingRequestSinkSinkPrometheusParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify ApsaraMQ for RabbitMQ as the event target.
   */
  sinkRabbitMQParameters?: UpdateEventStreamingRequestSinkSinkRabbitMQParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify ApsaraMQ for RocketMQ (Offset Data) as the event target.
   */
  sinkRocketMQCheckpointParameters?: UpdateEventStreamingRequestSinkSinkRocketMQCheckpointParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify ApsaraMQ for RocketMQ as the event target.
   */
  sinkRocketMQParameters?: UpdateEventStreamingRequestSinkSinkRocketMQParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify Simple Log Service as the event target.
   */
  sinkSLSParameters?: UpdateEventStreamingRequestSinkSinkSLSParameters;
  static names(): { [key: string]: string } {
    return {
      sinkApacheRocketMQCheckpointParameters: 'SinkApacheRocketMQCheckpointParameters',
      sinkBaiLianParameters: 'SinkBaiLianParameters',
      sinkCustomizedKafkaConnectorParameters: 'SinkCustomizedKafkaConnectorParameters',
      sinkCustomizedKafkaParameters: 'SinkCustomizedKafkaParameters',
      sinkDashVectorParameters: 'SinkDashVectorParameters',
      sinkDataHubParameters: 'SinkDataHubParameters',
      sinkDorisParameters: 'SinkDorisParameters',
      sinkFcParameters: 'SinkFcParameters',
      sinkFnfParameters: 'SinkFnfParameters',
      sinkKafkaParameters: 'SinkKafkaParameters',
      sinkMNSParameters: 'SinkMNSParameters',
      sinkOpenSourceRabbitMQParameters: 'SinkOpenSourceRabbitMQParameters',
      sinkPrometheusParameters: 'SinkPrometheusParameters',
      sinkRabbitMQParameters: 'SinkRabbitMQParameters',
      sinkRocketMQCheckpointParameters: 'SinkRocketMQCheckpointParameters',
      sinkRocketMQParameters: 'SinkRocketMQParameters',
      sinkSLSParameters: 'SinkSLSParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sinkApacheRocketMQCheckpointParameters: UpdateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParameters,
      sinkBaiLianParameters: SinkBaiLianParameters,
      sinkCustomizedKafkaConnectorParameters: UpdateEventStreamingRequestSinkSinkCustomizedKafkaConnectorParameters,
      sinkCustomizedKafkaParameters: UpdateEventStreamingRequestSinkSinkCustomizedKafkaParameters,
      sinkDashVectorParameters: UpdateEventStreamingRequestSinkSinkDashVectorParameters,
      sinkDataHubParameters: UpdateEventStreamingRequestSinkSinkDataHubParameters,
      sinkDorisParameters: UpdateEventStreamingRequestSinkSinkDorisParameters,
      sinkFcParameters: UpdateEventStreamingRequestSinkSinkFcParameters,
      sinkFnfParameters: UpdateEventStreamingRequestSinkSinkFnfParameters,
      sinkKafkaParameters: UpdateEventStreamingRequestSinkSinkKafkaParameters,
      sinkMNSParameters: UpdateEventStreamingRequestSinkSinkMNSParameters,
      sinkOpenSourceRabbitMQParameters: UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParameters,
      sinkPrometheusParameters: UpdateEventStreamingRequestSinkSinkPrometheusParameters,
      sinkRabbitMQParameters: UpdateEventStreamingRequestSinkSinkRabbitMQParameters,
      sinkRocketMQCheckpointParameters: UpdateEventStreamingRequestSinkSinkRocketMQCheckpointParameters,
      sinkRocketMQParameters: UpdateEventStreamingRequestSinkSinkRocketMQParameters,
      sinkSLSParameters: UpdateEventStreamingRequestSinkSinkSLSParameters,
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
    if(this.sinkDorisParameters && typeof (this.sinkDorisParameters as any).validate === 'function') {
      (this.sinkDorisParameters as any).validate();
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
    if(this.sinkPrometheusParameters && typeof (this.sinkPrometheusParameters as any).validate === 'function') {
      (this.sinkPrometheusParameters as any).validate();
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

