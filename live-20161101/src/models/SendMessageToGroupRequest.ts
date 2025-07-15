// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendMessageToGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the interactive messaging application.
   * 
   * This parameter is required.
   * 
   * @example
   * VKL3***
   */
  appId?: string;
  /**
   * @remarks
   * The message body. The value is a JSON string.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  data?: string;
  /**
   * @remarks
   * The ID of the message group.
   * 
   * This parameter is required.
   * 
   * @example
   * AE35-****-T95F
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the user who performed the operation.
   * 
   * This parameter is required.
   * 
   * @example
   * de1**a0
   */
  operatorUserId?: string;
  /**
   * @remarks
   * Specifies whether the message requires Alibaba Cloud content moderation. Valid values:
   * 
   * - **true**: does not require content moderation.
   * - **false**: requires content moderation. This is the default value.
   * 
   * @example
   * true
   */
  skipAudit?: boolean;
  /**
   * @remarks
   * The type of the message. A value that is less than or equal to 10000 specifies a system message. A value that is greater than 10000 specifies a custom message.
   * 
   * @example
   * 12000
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      data: 'Data',
      groupId: 'GroupId',
      operatorUserId: 'OperatorUserId',
      skipAudit: 'SkipAudit',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      data: 'string',
      groupId: 'string',
      operatorUserId: 'string',
      skipAudit: 'boolean',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

