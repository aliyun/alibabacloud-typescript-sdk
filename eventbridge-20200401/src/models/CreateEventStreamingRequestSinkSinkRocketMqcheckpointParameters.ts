// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateEventStreamingRequestSinkSinkRocketMQCheckpointParametersConsumeTimestamp } from "./CreateEventStreamingRequestSinkSinkRocketMqcheckpointParametersConsumeTimestamp";
import { CreateEventStreamingRequestSinkSinkRocketMQCheckpointParametersGroup } from "./CreateEventStreamingRequestSinkSinkRocketMqcheckpointParametersGroup";
import { CreateEventStreamingRequestSinkSinkRocketMQCheckpointParametersTopic } from "./CreateEventStreamingRequestSinkSinkRocketMqcheckpointParametersTopic";


export class CreateEventStreamingRequestSinkSinkRocketMQCheckpointParameters extends $dara.Model {
  consumeTimestamp?: CreateEventStreamingRequestSinkSinkRocketMQCheckpointParametersConsumeTimestamp;
  group?: CreateEventStreamingRequestSinkSinkRocketMQCheckpointParametersGroup;
  instanceId?: string;
  instanceType?: string;
  topic?: CreateEventStreamingRequestSinkSinkRocketMQCheckpointParametersTopic;
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
      consumeTimestamp: CreateEventStreamingRequestSinkSinkRocketMQCheckpointParametersConsumeTimestamp,
      group: CreateEventStreamingRequestSinkSinkRocketMQCheckpointParametersGroup,
      instanceId: 'string',
      instanceType: 'string',
      topic: CreateEventStreamingRequestSinkSinkRocketMQCheckpointParametersTopic,
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

