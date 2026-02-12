// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnsMessageGetByMsgIdRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance to which the message you want to query belongs.
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the message that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1E0578FE110F18B4AAC235C05F2*****
   */
  msgId?: string;
  /**
   * @remarks
   * The topic that contains the message you want to query.
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

