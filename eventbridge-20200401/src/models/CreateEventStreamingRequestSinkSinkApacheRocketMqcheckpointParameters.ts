// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParametersConsumeTimestamp } from "./CreateEventStreamingRequestSinkSinkApacheRocketMqcheckpointParametersConsumeTimestamp";
import { CreateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParametersGroup } from "./CreateEventStreamingRequestSinkSinkApacheRocketMqcheckpointParametersGroup";
import { CreateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParametersTopic } from "./CreateEventStreamingRequestSinkSinkApacheRocketMqcheckpointParametersTopic";


export class CreateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParameters extends $dara.Model {
  consumeTimestamp?: CreateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParametersConsumeTimestamp;
  group?: CreateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParametersGroup;
  instanceEndpoint?: string;
  instancePassword?: string;
  instanceUsername?: string;
  networkType?: string;
  securityGroupId?: string;
  topic?: CreateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParametersTopic;
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
      consumeTimestamp: CreateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParametersConsumeTimestamp,
      group: CreateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParametersGroup,
      instanceEndpoint: 'string',
      instancePassword: 'string',
      instanceUsername: 'string',
      networkType: 'string',
      securityGroupId: 'string',
      topic: CreateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParametersTopic,
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

