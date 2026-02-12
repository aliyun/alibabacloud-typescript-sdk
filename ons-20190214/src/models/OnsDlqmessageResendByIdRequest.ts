// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnsDLQMessageResendByIdRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the consumer group in which you want to query dead-letter messages.
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test_group_id
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the instance in which the dead-letter message you want to query resides.
   * 
   * @example
   * MQ_INST_188077086902****_BXSuW61e
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the dead-letter message that you want to send to a consumer group for consumption.
   * 
   * This parameter is required.
   * 
   * @example
   * 0BC16699343051CD9F1D798E7734****
   */
  msgId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      msgId: 'MsgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      instanceId: 'string',
      msgId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

