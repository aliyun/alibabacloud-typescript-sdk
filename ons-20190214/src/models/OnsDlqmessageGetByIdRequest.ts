// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnsDLQMessageGetByIdRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the consumer group whose dead-letter message you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test_group_id
   */
  groupId?: string;
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
   * The ID of the dead-letter message that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 0BC16699165C03B925DB8A404E2D****
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

