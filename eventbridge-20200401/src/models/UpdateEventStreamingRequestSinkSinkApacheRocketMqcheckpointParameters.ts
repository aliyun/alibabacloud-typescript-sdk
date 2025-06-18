// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParametersConsumeTimestamp } from "./UpdateEventStreamingRequestSinkSinkApacheRocketMqcheckpointParametersConsumeTimestamp";
import { UpdateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParametersGroup } from "./UpdateEventStreamingRequestSinkSinkApacheRocketMqcheckpointParametersGroup";
import { UpdateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParametersTopic } from "./UpdateEventStreamingRequestSinkSinkApacheRocketMqcheckpointParametersTopic";


export class UpdateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParameters extends $dara.Model {
  /**
   * @remarks
   * The timestamp that specifies the time from which messages are consumed.
   */
  consumeTimestamp?: UpdateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParametersConsumeTimestamp;
  /**
   * @remarks
   * The ID of the consumer group.
   */
  group?: UpdateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParametersGroup;
  /**
   * @remarks
   * The endpoint that is used to access the Apache RocketMQ instance.
   * 
   * @example
   * 192.168.1.1:9876
   */
  instanceEndpoint?: string;
  /**
   * @remarks
   * The password that is used to access the Apache RocketMQ instance.
   * 
   * @example
   * ****
   */
  instancePassword?: string;
  /**
   * @remarks
   * The username that is used to access the Apache RocketMQ instance.
   * 
   * @example
   * admin
   */
  instanceUsername?: string;
  /**
   * @remarks
   * The network type.
   * 
   * *   PublicNetwork
   * *   PrivateNetwork
   * 
   * @example
   * PrivateNetwork
   */
  networkType?: string;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-2ze5bmpw6adn0q******
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The name of the topic on the Apache RocketMQ instance.
   */
  topic?: UpdateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParametersTopic;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-uf62oqt1twuevrt******
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
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

