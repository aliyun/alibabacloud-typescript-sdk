// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateEventStreamingRequestSinkSinkRocketMQCheckpointParametersConsumeTimestamp } from "./UpdateEventStreamingRequestSinkSinkRocketMqcheckpointParametersConsumeTimestamp";
import { UpdateEventStreamingRequestSinkSinkRocketMQCheckpointParametersGroup } from "./UpdateEventStreamingRequestSinkSinkRocketMqcheckpointParametersGroup";
import { UpdateEventStreamingRequestSinkSinkRocketMQCheckpointParametersTopic } from "./UpdateEventStreamingRequestSinkSinkRocketMqcheckpointParametersTopic";


export class UpdateEventStreamingRequestSinkSinkRocketMQCheckpointParameters extends $dara.Model {
  consumeTimestamp?: UpdateEventStreamingRequestSinkSinkRocketMQCheckpointParametersConsumeTimestamp;
  group?: UpdateEventStreamingRequestSinkSinkRocketMQCheckpointParametersGroup;
  instanceId?: string;
  instanceType?: string;
  topic?: UpdateEventStreamingRequestSinkSinkRocketMQCheckpointParametersTopic;
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
      consumeTimestamp: UpdateEventStreamingRequestSinkSinkRocketMQCheckpointParametersConsumeTimestamp,
      group: UpdateEventStreamingRequestSinkSinkRocketMQCheckpointParametersGroup,
      instanceId: 'string',
      instanceType: 'string',
      topic: UpdateEventStreamingRequestSinkSinkRocketMQCheckpointParametersTopic,
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

