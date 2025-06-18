// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetEventStreamingResponseBodyDataSinkSinkApacheRocketMQCheckpointParametersConsumeTimestamp } from "./GetEventStreamingResponseBodyDataSinkSinkApacheRocketMqcheckpointParametersConsumeTimestamp";
import { GetEventStreamingResponseBodyDataSinkSinkApacheRocketMQCheckpointParametersGroup } from "./GetEventStreamingResponseBodyDataSinkSinkApacheRocketMqcheckpointParametersGroup";
import { GetEventStreamingResponseBodyDataSinkSinkApacheRocketMQCheckpointParametersTopic } from "./GetEventStreamingResponseBodyDataSinkSinkApacheRocketMqcheckpointParametersTopic";


export class GetEventStreamingResponseBodyDataSinkSinkApacheRocketMQCheckpointParameters extends $dara.Model {
  consumeTimestamp?: GetEventStreamingResponseBodyDataSinkSinkApacheRocketMQCheckpointParametersConsumeTimestamp;
  group?: GetEventStreamingResponseBodyDataSinkSinkApacheRocketMQCheckpointParametersGroup;
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
   * sg-2ze5bmpw6adn0q******
   */
  securityGroupId?: string;
  topic?: GetEventStreamingResponseBodyDataSinkSinkApacheRocketMQCheckpointParametersTopic;
  /**
   * @example
   * vsw-uf62oqt1twuevrt******
   */
  vSwitchId?: string;
  /**
   * @example
   * vpc-2zeccak5pb0j3ay******
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
      consumeTimestamp: GetEventStreamingResponseBodyDataSinkSinkApacheRocketMQCheckpointParametersConsumeTimestamp,
      group: GetEventStreamingResponseBodyDataSinkSinkApacheRocketMQCheckpointParametersGroup,
      instanceEndpoint: 'string',
      instancePassword: 'string',
      instanceUsername: 'string',
      networkType: 'string',
      securityGroupId: 'string',
      topic: GetEventStreamingResponseBodyDataSinkSinkApacheRocketMQCheckpointParametersTopic,
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

