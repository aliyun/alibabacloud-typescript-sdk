// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetEventStreamingResponseBodyDataSinkSinkRocketMQCheckpointParametersConsumeTimestamp } from "./GetEventStreamingResponseBodyDataSinkSinkRocketMqcheckpointParametersConsumeTimestamp";
import { GetEventStreamingResponseBodyDataSinkSinkRocketMQCheckpointParametersGroup } from "./GetEventStreamingResponseBodyDataSinkSinkRocketMqcheckpointParametersGroup";
import { GetEventStreamingResponseBodyDataSinkSinkRocketMQCheckpointParametersTopic } from "./GetEventStreamingResponseBodyDataSinkSinkRocketMqcheckpointParametersTopic";


export class GetEventStreamingResponseBodyDataSinkSinkRocketMQCheckpointParameters extends $dara.Model {
  consumeTimestamp?: GetEventStreamingResponseBodyDataSinkSinkRocketMQCheckpointParametersConsumeTimestamp;
  group?: GetEventStreamingResponseBodyDataSinkSinkRocketMQCheckpointParametersGroup;
  /**
   * @example
   * MQ_INST_164901546557****_BAAN****
   */
  instanceId?: string;
  /**
   * @example
   * Cloud_4
   */
  instanceType?: string;
  topic?: GetEventStreamingResponseBodyDataSinkSinkRocketMQCheckpointParametersTopic;
  static names(): { [key: string]: string } {
    return {
      consumeTimestamp: 'ConsumeTimestamp',
      group: 'Group',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumeTimestamp: GetEventStreamingResponseBodyDataSinkSinkRocketMQCheckpointParametersConsumeTimestamp,
      group: GetEventStreamingResponseBodyDataSinkSinkRocketMQCheckpointParametersGroup,
      instanceId: 'string',
      instanceType: 'string',
      topic: GetEventStreamingResponseBodyDataSinkSinkRocketMQCheckpointParametersTopic,
    };
  }

  validate() {
    if(this.consumeTimestamp && typeof (this.consumeTimestamp as any).validate === 'function') {
      (this.consumeTimestamp as any).validate();
    }
    if(this.group && typeof (this.group as any).validate === 'function') {
      (this.group as any).validate();
    }
    if(this.topic && typeof (this.topic as any).validate === 'function') {
      (this.topic as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

