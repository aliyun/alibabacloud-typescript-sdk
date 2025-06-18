// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheRocketMQCheckpointParameters } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheRocketMqcheckpointParameters";
import { SinkBaiLianParameters } from "./SinkBaiLianParameters";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkCustomizedKafkaConnectorParameters } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkCustomizedKafkaConnectorParameters";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkCustomizedKafkaParameters } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkCustomizedKafkaParameters";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParameters } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParameters";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParameters } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParameters";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParameters } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParameters";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParameters } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParameters";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParameters } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParameters";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParameters } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParameters";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkMNSParameters } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkMnsparameters";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkOpenSourceRabbitMQParameters } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkOpenSourceRabbitMqparameters";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParameters } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMqparameters";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQCheckpointParameters } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMqcheckpointParameters";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParameters } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMqparameters";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParameters } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSlsparameters";


export class ListEventStreamingsResponseBodyDataEventStreamingsSink extends $dara.Model {
  sinkApacheRocketMQCheckpointParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheRocketMQCheckpointParameters;
  sinkBaiLianParameters?: SinkBaiLianParameters;
  sinkCustomizedKafkaConnectorParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkCustomizedKafkaConnectorParameters;
  sinkCustomizedKafkaParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkCustomizedKafkaParameters;
  sinkDashVectorParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParameters;
  sinkDataHubParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParameters;
  sinkDorisParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParameters;
  /**
   * @remarks
   * The parameters that are returned if Function Compute is specified as the event target.
   */
  sinkFcParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParameters;
  /**
   * @remarks
   * The parameters that are returned if CloudFlow is specified as the event target.
   */
  sinkFnfParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParameters;
  /**
   * @remarks
   * The parameters that are returned if ApsaraMQ for Kafka is specified as the event target.
   */
  sinkKafkaParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParameters;
  /**
   * @remarks
   * The parameters that are returned if MNS is specified as the event target.
   */
  sinkMNSParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkMNSParameters;
  sinkOpenSourceRabbitMQParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkOpenSourceRabbitMQParameters;
  /**
   * @remarks
   * The parameters that are returned if ApsaraMQ for RabbitMQ is specified as the event target.
   */
  sinkRabbitMQParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParameters;
  sinkRocketMQCheckpointParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQCheckpointParameters;
  /**
   * @remarks
   * The parameters that are returned if ApsaraMQ for RocketMQ is specified as the event target.
   */
  sinkRocketMQParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParameters;
  /**
   * @remarks
   * The parameters that are returned if Simple Log Service is specified as the event target.
   */
  sinkSLSParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParameters;
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
      sinkRabbitMQParameters: 'SinkRabbitMQParameters',
      sinkRocketMQCheckpointParameters: 'SinkRocketMQCheckpointParameters',
      sinkRocketMQParameters: 'SinkRocketMQParameters',
      sinkSLSParameters: 'SinkSLSParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sinkApacheRocketMQCheckpointParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheRocketMQCheckpointParameters,
      sinkBaiLianParameters: SinkBaiLianParameters,
      sinkCustomizedKafkaConnectorParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkCustomizedKafkaConnectorParameters,
      sinkCustomizedKafkaParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkCustomizedKafkaParameters,
      sinkDashVectorParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParameters,
      sinkDataHubParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParameters,
      sinkDorisParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParameters,
      sinkFcParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParameters,
      sinkFnfParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParameters,
      sinkKafkaParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParameters,
      sinkMNSParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkMNSParameters,
      sinkOpenSourceRabbitMQParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkOpenSourceRabbitMQParameters,
      sinkRabbitMQParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParameters,
      sinkRocketMQCheckpointParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQCheckpointParameters,
      sinkRocketMQParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParameters,
      sinkSLSParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParameters,
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

