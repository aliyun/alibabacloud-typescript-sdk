// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParameters } from "./CreateEventStreamingRequestSinkSinkApacheRocketMqcheckpointParameters";
import { SinkBaiLianParameters } from "./SinkBaiLianParameters";
import { CreateEventStreamingRequestSinkSinkCustomizedKafkaConnectorParameters } from "./CreateEventStreamingRequestSinkSinkCustomizedKafkaConnectorParameters";
import { CreateEventStreamingRequestSinkSinkCustomizedKafkaParameters } from "./CreateEventStreamingRequestSinkSinkCustomizedKafkaParameters";
import { CreateEventStreamingRequestSinkSinkDashVectorParameters } from "./CreateEventStreamingRequestSinkSinkDashVectorParameters";
import { CreateEventStreamingRequestSinkSinkDataHubParameters } from "./CreateEventStreamingRequestSinkSinkDataHubParameters";
import { CreateEventStreamingRequestSinkSinkFcParameters } from "./CreateEventStreamingRequestSinkSinkFcParameters";
import { CreateEventStreamingRequestSinkSinkFnfParameters } from "./CreateEventStreamingRequestSinkSinkFnfParameters";
import { CreateEventStreamingRequestSinkSinkKafkaParameters } from "./CreateEventStreamingRequestSinkSinkKafkaParameters";
import { CreateEventStreamingRequestSinkSinkMNSParameters } from "./CreateEventStreamingRequestSinkSinkMnsparameters";
import { CreateEventStreamingRequestSinkSinkOpenSourceRabbitMQParameters } from "./CreateEventStreamingRequestSinkSinkOpenSourceRabbitMqparameters";
import { CreateEventStreamingRequestSinkSinkPrometheusParameters } from "./CreateEventStreamingRequestSinkSinkPrometheusParameters";
import { CreateEventStreamingRequestSinkSinkRabbitMQParameters } from "./CreateEventStreamingRequestSinkSinkRabbitMqparameters";
import { CreateEventStreamingRequestSinkSinkRocketMQCheckpointParameters } from "./CreateEventStreamingRequestSinkSinkRocketMqcheckpointParameters";
import { CreateEventStreamingRequestSinkSinkRocketMQParameters } from "./CreateEventStreamingRequestSinkSinkRocketMqparameters";
import { CreateEventStreamingRequestSinkSinkSLSParameters } from "./CreateEventStreamingRequestSinkSinkSlsparameters";


export class CreateEventStreamingRequestSink extends $dara.Model {
  sinkApacheRocketMQCheckpointParameters?: CreateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParameters;
  sinkBaiLianParameters?: SinkBaiLianParameters;
  sinkCustomizedKafkaConnectorParameters?: CreateEventStreamingRequestSinkSinkCustomizedKafkaConnectorParameters;
  sinkCustomizedKafkaParameters?: CreateEventStreamingRequestSinkSinkCustomizedKafkaParameters;
  sinkDashVectorParameters?: CreateEventStreamingRequestSinkSinkDashVectorParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify DataHub as the event target.
   */
  sinkDataHubParameters?: CreateEventStreamingRequestSinkSinkDataHubParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify Function Compute as the event target.
   */
  sinkFcParameters?: CreateEventStreamingRequestSinkSinkFcParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify CloudFlow as the event target.
   */
  sinkFnfParameters?: CreateEventStreamingRequestSinkSinkFnfParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify ApsaraMQ for Kafka as the event target.
   */
  sinkKafkaParameters?: CreateEventStreamingRequestSinkSinkKafkaParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify MNS as the event target.
   */
  sinkMNSParameters?: CreateEventStreamingRequestSinkSinkMNSParameters;
  sinkOpenSourceRabbitMQParameters?: CreateEventStreamingRequestSinkSinkOpenSourceRabbitMQParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify Managed Service for Prometheus as the event target.
   */
  sinkPrometheusParameters?: CreateEventStreamingRequestSinkSinkPrometheusParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify ApsaraMQ for RabbitMQ as the event target.
   */
  sinkRabbitMQParameters?: CreateEventStreamingRequestSinkSinkRabbitMQParameters;
  sinkRocketMQCheckpointParameters?: CreateEventStreamingRequestSinkSinkRocketMQCheckpointParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify ApsaraMQ for RocketMQ as the event target.
   */
  sinkRocketMQParameters?: CreateEventStreamingRequestSinkSinkRocketMQParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify Simple Log Service as the event target.
   */
  sinkSLSParameters?: CreateEventStreamingRequestSinkSinkSLSParameters;
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
      sinkPrometheusParameters: 'SinkPrometheusParameters',
      sinkRabbitMQParameters: 'SinkRabbitMQParameters',
      sinkRocketMQCheckpointParameters: 'SinkRocketMQCheckpointParameters',
      sinkRocketMQParameters: 'SinkRocketMQParameters',
      sinkSLSParameters: 'SinkSLSParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sinkApacheRocketMQCheckpointParameters: CreateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParameters,
      sinkBaiLianParameters: SinkBaiLianParameters,
      sinkCustomizedKafkaConnectorParameters: CreateEventStreamingRequestSinkSinkCustomizedKafkaConnectorParameters,
      sinkCustomizedKafkaParameters: CreateEventStreamingRequestSinkSinkCustomizedKafkaParameters,
      sinkDashVectorParameters: CreateEventStreamingRequestSinkSinkDashVectorParameters,
      sinkDataHubParameters: CreateEventStreamingRequestSinkSinkDataHubParameters,
      sinkFcParameters: CreateEventStreamingRequestSinkSinkFcParameters,
      sinkFnfParameters: CreateEventStreamingRequestSinkSinkFnfParameters,
      sinkKafkaParameters: CreateEventStreamingRequestSinkSinkKafkaParameters,
      sinkMNSParameters: CreateEventStreamingRequestSinkSinkMNSParameters,
      sinkOpenSourceRabbitMQParameters: CreateEventStreamingRequestSinkSinkOpenSourceRabbitMQParameters,
      sinkPrometheusParameters: CreateEventStreamingRequestSinkSinkPrometheusParameters,
      sinkRabbitMQParameters: CreateEventStreamingRequestSinkSinkRabbitMQParameters,
      sinkRocketMQCheckpointParameters: CreateEventStreamingRequestSinkSinkRocketMQCheckpointParameters,
      sinkRocketMQParameters: CreateEventStreamingRequestSinkSinkRocketMQParameters,
      sinkSLSParameters: CreateEventStreamingRequestSinkSinkSLSParameters,
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

