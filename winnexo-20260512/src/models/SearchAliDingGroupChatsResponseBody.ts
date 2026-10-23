// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchAliDingGroupChatsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The conversation ID. This ID is typically used for JSSDK.
   * 
   * @example
   * cid-example
   */
  chatId?: string;
  /**
   * @remarks
   * The conversation type. Valid values:
   * - **0**: one-on-one chat.
   * - **1**: group chat.
   * 
   * > For a one-on-one chat, you do not need to specify **openConversationId**. Specify the employee ID in **receiverUserIdList**. For a one-on-one chat between two users, specify the employee ID of either user. For a one-on-one chat between a user and a bot, specify the employee ID of the user.
   * 
   * @example
   * INTERNAL_GROUP
   */
  conversationType?: string;
  /**
   * @remarks
   * Indicates whether the current user has enabled the Do Not Disturb mode.
   * 
   * @example
   * false
   */
  muted?: boolean;
  /**
   * @remarks
   * The title of the scheduled meeting.
   * 
   * @example
   * Customer project group
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      chatId: 'chatId',
      conversationType: 'conversationType',
      muted: 'muted',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatId: 'string',
      conversationType: 'string',
      muted: 'boolean',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAliDingGroupChatsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether more pages are available.
   * 
   * @example
   * false
   */
  hasMore?: boolean;
  /**
   * @remarks
   * The user group tree node information.
   */
  items?: SearchAliDingGroupChatsResponseBodyItems[];
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The starting cursor for the next page.
   * 
   * @example
   * 1
   */
  nextCursor?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * request-id
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      hasMore: 'hasMore',
      items: 'items',
      message: 'message',
      nextCursor: 'nextCursor',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hasMore: 'boolean',
      items: { 'type': 'array', 'itemType': SearchAliDingGroupChatsResponseBodyItems },
      message: 'string',
      nextCursor: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

