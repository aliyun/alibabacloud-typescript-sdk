// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnsMessageTraceRequest extends $dara.Model {
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
   * 1E05791C117818B4AAC23B1BB0CE****
   */
  msgId?: string;
  /**
   * @remarks
   * The topic to which the message belongs.
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

