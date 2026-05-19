// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAIStaffChatMessagesRequest extends $dara.Model {
  /**
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @example
   * 81bc5a34-1d8d-4ef7-a208-7401c51b054b
   */
  conversationId?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * null
   */
  startCreateTime?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      conversationId: 'ConversationId',
      pageSize: 'PageSize',
      startCreateTime: 'StartCreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      conversationId: 'string',
      pageSize: 'number',
      startCreateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

