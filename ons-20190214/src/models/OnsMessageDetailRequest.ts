// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnsMessageDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraMQ for RocketMQ Instance.
   * 
   * This parameter is required.
   * 
   * @example
   * MQ_INST_184681981******_BXig0x6A
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the message that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1E0578FE110F18B4AAC235C0******
   */
  msgId?: string;
  /**
   * @remarks
   * The name of the topic in which the message you want to query is stored.
   * 
   * This parameter is required.
   * 
   * @example
   * test-mq_topic
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      msgId: 'MsgId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      msgId: 'string',
      topic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

