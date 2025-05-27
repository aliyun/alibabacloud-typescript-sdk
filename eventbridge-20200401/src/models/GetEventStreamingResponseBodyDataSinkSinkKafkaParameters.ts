// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetEventStreamingResponseBodyDataSinkSinkKafkaParametersAcks } from "./GetEventStreamingResponseBodyDataSinkSinkKafkaParametersAcks";
import { GetEventStreamingResponseBodyDataSinkSinkKafkaParametersHeaders } from "./GetEventStreamingResponseBodyDataSinkSinkKafkaParametersHeaders";
import { GetEventStreamingResponseBodyDataSinkSinkKafkaParametersInstanceId } from "./GetEventStreamingResponseBodyDataSinkSinkKafkaParametersInstanceId";
import { GetEventStreamingResponseBodyDataSinkSinkKafkaParametersKey } from "./GetEventStreamingResponseBodyDataSinkSinkKafkaParametersKey";
import { GetEventStreamingResponseBodyDataSinkSinkKafkaParametersTopic } from "./GetEventStreamingResponseBodyDataSinkSinkKafkaParametersTopic";
import { GetEventStreamingResponseBodyDataSinkSinkKafkaParametersValue } from "./GetEventStreamingResponseBodyDataSinkSinkKafkaParametersValue";


export class GetEventStreamingResponseBodyDataSinkSinkKafkaParameters extends $dara.Model {
  /**
   * @remarks
   * The acknowledgment information.
   */
  acks?: GetEventStreamingResponseBodyDataSinkSinkKafkaParametersAcks;
  headers?: GetEventStreamingResponseBodyDataSinkSinkKafkaParametersHeaders;
  /**
   * @remarks
   * The target service type is Message Queue for Apache Kafka.
   */
  instanceId?: GetEventStreamingResponseBodyDataSinkSinkKafkaParametersInstanceId;
  /**
   * @remarks
   * The message key.
   */
  key?: GetEventStreamingResponseBodyDataSinkSinkKafkaParametersKey;
  /**
   * @remarks
   * The topic name.
   */
  topic?: GetEventStreamingResponseBodyDataSinkSinkKafkaParametersTopic;
  /**
   * @remarks
   * The message content.
   */
  value?: GetEventStreamingResponseBodyDataSinkSinkKafkaParametersValue;
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
      acks: GetEventStreamingResponseBodyDataSinkSinkKafkaParametersAcks,
      headers: GetEventStreamingResponseBodyDataSinkSinkKafkaParametersHeaders,
      instanceId: GetEventStreamingResponseBodyDataSinkSinkKafkaParametersInstanceId,
      key: GetEventStreamingResponseBodyDataSinkSinkKafkaParametersKey,
      topic: GetEventStreamingResponseBodyDataSinkSinkKafkaParametersTopic,
      value: GetEventStreamingResponseBodyDataSinkSinkKafkaParametersValue,
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

