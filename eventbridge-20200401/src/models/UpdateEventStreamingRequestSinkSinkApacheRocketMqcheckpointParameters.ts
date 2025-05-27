// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParametersConsumeTimestamp } from "./UpdateEventStreamingRequestSinkSinkApacheRocketMqcheckpointParametersConsumeTimestamp";
import { UpdateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParametersGroup } from "./UpdateEventStreamingRequestSinkSinkApacheRocketMqcheckpointParametersGroup";
import { UpdateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParametersTopic } from "./UpdateEventStreamingRequestSinkSinkApacheRocketMqcheckpointParametersTopic";


export class UpdateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParameters extends $dara.Model {
  consumeTimestamp?: UpdateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParametersConsumeTimestamp;
  group?: UpdateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParametersGroup;
  instanceEndpoint?: string;
  instancePassword?: string;
  instanceUsername?: string;
  networkType?: string;
  securityGroupId?: string;
  topic?: UpdateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParametersTopic;
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      consumeTimestamp: 'ConsumeTimestamp',
      group: 'Group',
      instanceEndpoint: 'InstanceEndpoint',
      instancePassword: 'InstancePassword',
      instanceUsername: 'InstanceUsername',
      networkType: 'NetworkType',
      securityGroupId: 'SecurityGroupId',
      topic: 'Topic',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumeTimestamp: UpdateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParametersConsumeTimestamp,
      group: UpdateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParametersGroup,
      instanceEndpoint: 'string',
      instancePassword: 'string',
      instanceUsername: 'string',
      networkType: 'string',
      securityGroupId: 'string',
      topic: UpdateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParametersTopic,
      vSwitchId: 'string',
      vpcId: 'string',
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

