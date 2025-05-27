// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateEventStreamingRequestSinkSinkKafkaParametersAcks } from "./UpdateEventStreamingRequestSinkSinkKafkaParametersAcks";
import { UpdateEventStreamingRequestSinkSinkKafkaParametersHeaders } from "./UpdateEventStreamingRequestSinkSinkKafkaParametersHeaders";
import { UpdateEventStreamingRequestSinkSinkKafkaParametersInstanceId } from "./UpdateEventStreamingRequestSinkSinkKafkaParametersInstanceId";
import { UpdateEventStreamingRequestSinkSinkKafkaParametersKey } from "./UpdateEventStreamingRequestSinkSinkKafkaParametersKey";
import { UpdateEventStreamingRequestSinkSinkKafkaParametersTopic } from "./UpdateEventStreamingRequestSinkSinkKafkaParametersTopic";
import { UpdateEventStreamingRequestSinkSinkKafkaParametersValue } from "./UpdateEventStreamingRequestSinkSinkKafkaParametersValue";


export class UpdateEventStreamingRequestSinkSinkKafkaParameters extends $dara.Model {
  /**
   * @remarks
   * The acknowledgment (ACK) mode.
   * 
   * *   If you set this parameter to 0, no response is returned from the broker. In this mode, the performance is high, but the risk of data loss is also high.
   * *   If you set this parameter to 1, a response is returned when data is written to the leader. In this mode, the performance and the risk of data loss are moderate. Data loss may occur if a failure occurs on the leader.
   * *   If you set this parameter to all, a response is returned when data is written to the leader and synchronized to the followers. In this mode, the performance is low, but the risk of data loss is also low. Data loss occurs if the leader and the followers fail at the same time.
   */
  acks?: UpdateEventStreamingRequestSinkSinkKafkaParametersAcks;
  headers?: UpdateEventStreamingRequestSinkSinkKafkaParametersHeaders;
  /**
   * @remarks
   * The ID of the ApsaraMQ for Kafka instance.
   */
  instanceId?: UpdateEventStreamingRequestSinkSinkKafkaParametersInstanceId;
  /**
   * @remarks
   * The message key.
   */
  key?: UpdateEventStreamingRequestSinkSinkKafkaParametersKey;
  /**
   * @remarks
   * The name of the topic on the ApsaraMQ for Kafka instance.
   */
  topic?: UpdateEventStreamingRequestSinkSinkKafkaParametersTopic;
  /**
   * @remarks
   * The message body.
   */
  value?: UpdateEventStreamingRequestSinkSinkKafkaParametersValue;
  static names(): { [key: string]: string } {
    return {
      acks: 'Acks',
      headers: 'Headers',
      instanceId: 'InstanceId',
      key: 'Key',
      topic: 'Topic',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acks: UpdateEventStreamingRequestSinkSinkKafkaParametersAcks,
      headers: UpdateEventStreamingRequestSinkSinkKafkaParametersHeaders,
      instanceId: UpdateEventStreamingRequestSinkSinkKafkaParametersInstanceId,
      key: UpdateEventStreamingRequestSinkSinkKafkaParametersKey,
      topic: UpdateEventStreamingRequestSinkSinkKafkaParametersTopic,
      value: UpdateEventStreamingRequestSinkSinkKafkaParametersValue,
    };
  }

  validate() {
    if(this.acks && typeof (this.acks as any).validate === 'function') {
      (this.acks as any).validate();
    }
    if(this.headers && typeof (this.headers as any).validate === 'function') {
      (this.headers as any).validate();
    }
    if(this.instanceId && typeof (this.instanceId as any).validate === 'function') {
      (this.instanceId as any).validate();
    }
    if(this.key && typeof (this.key as any).validate === 'function') {
      (this.key as any).validate();
    }
    if(this.topic && typeof (this.topic as any).validate === 'function') {
      (this.topic as any).validate();
    }
    if(this.value && typeof (this.value as any).validate === 'function') {
      (this.value as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

