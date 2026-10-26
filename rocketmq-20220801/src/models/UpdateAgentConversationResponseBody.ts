// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAgentConversationResponseBody extends $dara.Model {
  /**
   * @example
   * 0198c8a91f4d7f01a3c21e97
   */
  conversationId?: string;
  /**
   * @example
   * 0198c8a91f4d7f01a3c21e97
   */
  id?: string;
  /**
   * @example
   * private
   */
  shareScope?: string;
  /**
   * @example
   * 消息堆积排查
   */
  title?: string;
  /**
   * @example
   * 2026-08-26T12:00:00.000Z
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      conversationId: 'conversationId',
      id: 'id',
      shareScope: 'shareScope',
      title: 'title',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationId: 'string',
      id: 'string',
      shareScope: 'string',
      title: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

