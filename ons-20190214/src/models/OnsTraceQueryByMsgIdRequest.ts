// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnsTraceQueryByMsgIdRequest extends $dara.Model {
  /**
   * @remarks
   * The beginning of the time range to query. The value of this parameter is a UNIX timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1570852800000
   */
  beginTime?: number;
  /**
   * @remarks
   * The end of the time range to query. The value of this parameter is a UNIX timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1570968000000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RocketMQ instance that contains the specified topic.
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
   * The topic that contains the message you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      msgId: 'MsgId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      endTime: 'number',
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

