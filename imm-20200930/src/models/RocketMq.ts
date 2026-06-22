// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RocketMQ extends $dara.Model {
  /**
   * @remarks
   * The RocketMQ instance ID. Required for RocketMQ message notifications.
   * 
   * @example
   * MQ_INST_11111111111_BYcNy2Nc
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the RocketMQ topic. Required for RocketMQ message notifications.
   * 
   * @example
   * topic1
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      topicName: 'TopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      topicName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

