// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendMessageToGroupUsersShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Interactive Messages application
   * 
   * This parameter is required.
   * 
   * @example
   * VKL3***
   */
  appId?: string;
  /**
   * @remarks
   * Message body in JSONString format.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  data?: string;
  /**
   * @remarks
   * Message group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * AE35-****-T95F
   */
  groupId?: string;
  /**
   * @remarks
   * Operator user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * de1**a0
   */
  operatorUserId?: string;
  /**
   * @remarks
   * User list.
   */
  receiverIdListShrink?: string;
  /**
   * @remarks
   * Specifies whether the current message content requires Content Moderation by Alibaba Cloud. Valid values:
   * 
   * - **true**: Content Moderation is not required.
   * - **false** (default): Content Moderation is required.
   * 
   * @example
   * true
   */
  skipAudit?: boolean;
  /**
   * @remarks
   * Message type. When the type field value is less than or equal to 10000, it indicates a system message. When the value is greater than 10000, it indicates a custom message.
   * 
   * This parameter is required.
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
      receiverIdListShrink: 'ReceiverIdList',
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
      receiverIdListShrink: 'string',
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

