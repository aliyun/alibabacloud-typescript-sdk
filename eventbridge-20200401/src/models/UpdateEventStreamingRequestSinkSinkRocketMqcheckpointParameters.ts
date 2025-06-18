// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateEventStreamingRequestSinkSinkRocketMQCheckpointParametersConsumeTimestamp } from "./UpdateEventStreamingRequestSinkSinkRocketMqcheckpointParametersConsumeTimestamp";
import { UpdateEventStreamingRequestSinkSinkRocketMQCheckpointParametersGroup } from "./UpdateEventStreamingRequestSinkSinkRocketMqcheckpointParametersGroup";
import { UpdateEventStreamingRequestSinkSinkRocketMQCheckpointParametersTopic } from "./UpdateEventStreamingRequestSinkSinkRocketMqcheckpointParametersTopic";


export class UpdateEventStreamingRequestSinkSinkRocketMQCheckpointParameters extends $dara.Model {
  /**
   * @remarks
   * The timestamp that specifies the time from which messages are consumed.
   */
  consumeTimestamp?: UpdateEventStreamingRequestSinkSinkRocketMQCheckpointParametersConsumeTimestamp;
  /**
   * @remarks
   * The ID of the consumer group.
   */
  group?: UpdateEventStreamingRequestSinkSinkRocketMQCheckpointParametersGroup;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RocketMQ instance.
   * 
   * @example
   * MQ_INST_164901546557****_BAAN****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   * 
   * *   Cloud_4: ApsaraMQ for RocketMQ 4.0 instance
   * *   Cloud_5: ApsaraMQ for RocketMQ 5.0 instance
   * 
   * @example
   * Cloud_4
   */
  instanceType?: string;
  /**
   * @remarks
   * The name of the topic on the ApsaraMQ for RocketMQ instance.
   */
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

