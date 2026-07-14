// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChatQuestionRespResponseBodyDataQuestionList extends $dara.Model {
  /**
   * @remarks
   * Question content
   * 
   * @example
   * 今天天气怎么样
   */
  content?: string;
  /**
   * @remarks
   * Original question time
   * 
   * @example
   * 2024-11-17 10:05:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Original question
   * 
   * @example
   * 今天天气怎么样
   */
  oriContent?: string;
  /**
   * @remarks
   * Reply content
   * 
   * @example
   * 感谢您的支持！
   */
  reply?: string;
  /**
   * @remarks
   * Session ID
   * 
   * @example
   * 1732846760323001
   */
  sessionId?: string;
  /**
   * @remarks
   * Question type [PRODUCT_QA (Audio submission), GOSSIP (Operation submission), UNKNOWN (Unknown)]
   * 
   * @example
   * PRODUCT_QA
   */
  type?: string;
  /**
   * @remarks
   * Unique ID of the user who asked the question in the live channel.
   * 
   * @example
   * 39847834568436
   */
  userId?: string;
  /**
   * @remarks
   * Name of the user who asked the question in the live channel.
   * 
   * @example
   * 张*
   */
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
   * @remarks
   * Current state [INIT (Initialization), PROCESSING (Processing), COMPLETED (Completed)]
   * 
   * @example
   * PROCESSING
   */
  currentState?: string;
  /**
   * @remarks
   * Question list
   */
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
   * @remarks
   * Time consumed
   * 
   * @example
   * null
   */
  cost?: number;
  /**
   * @remarks
   * Response data
   */
  data?: GetChatQuestionRespResponseBodyData;
  /**
   * @remarks
   * Data type
   * 
   * @example
   * null
   */
  dataType?: string;
  /**
   * @remarks
   * Error code
   * 
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 44BD277A-87F9-5310-8D63-3E6645F1DA85
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Timestamp
   * 
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

