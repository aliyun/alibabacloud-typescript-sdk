// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchAliDingGroupChatsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * 阿里钉群聊 ID
   * 
   * @example
   * cid-example
   */
  chatId?: string;
  /**
   * @remarks
   * 会话类型
   * 
   * @example
   * INTERNAL_GROUP
   */
  conversationType?: string;
  /**
   * @remarks
   * 当前用户是否开启免打扰
   * 
   * @example
   * false
   */
  muted?: boolean;
  /**
   * @remarks
   * 群聊标题
   * 
   * @example
   * 客户项目群
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
   * 业务状态码
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 是否还有下一页
   * 
   * @example
   * false
   */
  hasMore?: boolean;
  items?: SearchAliDingGroupChatsResponseBodyItems[];
  /**
   * @remarks
   * 错误描述，成功时为空
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * 下一页分页游标，末页为空
   * 
   * @example
   * 1
   */
  nextCursor?: string;
  /**
   * @remarks
   * 请求追踪 ID
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

