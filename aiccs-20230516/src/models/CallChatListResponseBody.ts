// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CallChatListResponseBodyModel extends $dara.Model {
  /**
   * @remarks
   * 聊天内容id
   * 
   * @example
   * 79
   */
  chatId?: number;
  /**
   * @remarks
   * 说话内容
   * 
   * @example
   * 1
   */
  content?: string;
  /**
   * @remarks
   * 说话时间
   * 
   * @example
   * 2019-01-09 14:14:19
   */
  createTime?: string;
  /**
   * @remarks
   * 说话号码，其中0为AI,1-用户,2-坐席
   * 
   * @example
   * 4
   */
  fromType?: number;
  static names(): { [key: string]: string } {
    return {
      chatId: 'ChatId',
      content: 'Content',
      createTime: 'CreateTime',
      fromType: 'FromType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatId: 'number',
      content: 'string',
      createTime: 'string',
      fromType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CallChatListResponseBody extends $dara.Model {
  /**
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * 0
   */
  code?: number;
  /**
   * @example
   * 示例值示例值示例值
   */
  message?: string;
  model?: CallChatListResponseBodyModel[];
  /**
   * @example
   * 示例值
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 81
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      message: 'string',
      model: { 'type': 'array', 'itemType': CallChatListResponseBodyModel },
      requestId: 'string',
      success: 'boolean',
      timestamp: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.model)) {
      $dara.Model.validateArray(this.model);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

