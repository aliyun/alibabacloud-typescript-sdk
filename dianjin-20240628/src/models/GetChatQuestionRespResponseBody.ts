// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChatQuestionRespResponseBodyDataQuestionList extends $dara.Model {
  content?: string;
  /**
   * @example
   * 2024-11-17 10:05:00
   */
  gmtCreate?: string;
  oriContent?: string;
  reply?: string;
  /**
   * @example
   * 1732846760323001
   */
  sessionId?: string;
  /**
   * @example
   * PRODUCT_QA
   */
  type?: string;
  /**
   * @example
   * 39847834568436
   */
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      gmtCreate: 'gmtCreate',
      oriContent: 'oriContent',
      reply: 'reply',
      sessionId: 'sessionId',
      type: 'type',
      userId: 'userId',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      gmtCreate: 'string',
      oriContent: 'string',
      reply: 'string',
      sessionId: 'string',
      type: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChatQuestionRespResponseBodyData extends $dara.Model {
  /**
   * @example
   * PROCESSING
   */
  currentState?: string;
  questionList?: GetChatQuestionRespResponseBodyDataQuestionList[];
  static names(): { [key: string]: string } {
    return {
      currentState: 'currentState',
      questionList: 'questionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentState: 'string',
      questionList: { 'type': 'array', 'itemType': GetChatQuestionRespResponseBodyDataQuestionList },
    };
  }

  validate() {
    if(Array.isArray(this.questionList)) {
      $dara.Model.validateArray(this.questionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChatQuestionRespResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  data?: GetChatQuestionRespResponseBodyData;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 44BD277A-87F9-5310-8D63-3E6645F1DA85
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: GetChatQuestionRespResponseBodyData,
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

