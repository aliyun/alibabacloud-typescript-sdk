// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheRocketMQCheckpointParametersConsumeTimestamp } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheRocketMqcheckpointParametersConsumeTimestamp";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheRocketMQCheckpointParametersGroup } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheRocketMqcheckpointParametersGroup";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheRocketMQCheckpointParametersTopic } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheRocketMqcheckpointParametersTopic";


export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheRocketMQCheckpointParameters extends $dara.Model {
  consumeTimestamp?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheRocketMQCheckpointParametersConsumeTimestamp;
  group?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheRocketMQCheckpointParametersGroup;
  /**
   * @example
   * 192.168.1.1:9876
   */
  instanceEndpoint?: string;
  /**
   * @example
   * ****
   */
  instancePassword?: string;
  /**
   * @example
   * admin
   */
  instanceUsername?: string;
  /**
   * @example
   * PrivateNetwork
   */
  networkType?: string;
  /**
   * @example
   * sg-2vcgdxz7o1n9zapp****
   */
  securityGroupId?: string;
  topic?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheRocketMQCheckpointParametersTopic;
  /**
   * @example
   * vsw-wz9qqeovkwjxlu9uc****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * VPC ID。
   * 
   * @example
   * vpc-2zehizpoendb3****
   */
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
      consumeTimestamp: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheRocketMQCheckpointParametersConsumeTimestamp,
      group: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheRocketMQCheckpointParametersGroup,
      instanceEndpoint: 'string',
      instancePassword: 'string',
      instanceUsername: 'string',
      networkType: 'string',
      securityGroupId: 'string',
      topic: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheRocketMQCheckpointParametersTopic,
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

