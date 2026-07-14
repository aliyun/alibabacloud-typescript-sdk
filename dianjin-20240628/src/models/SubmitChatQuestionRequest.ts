// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitChatQuestionRequestQuestionList extends $dara.Model {
  /**
   * @remarks
   * Question content
   * 
   * This parameter is required.
   * 
   * @example
   * 这是多大的体积
   */
  content?: string;
  /**
   * @remarks
   * Original question time
   * 
   * This parameter is required.
   * 
   * @example
   * 2024-11-17 10:05:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Reply content
   * 
   * @example
   * 这是三升的。
   */
  reply?: string;
  /**
   * @remarks
   * Session ID
   * 
   * This parameter is required.
   * 
   * @example
   * 1869300950603128834
   */
  sessionId?: string;
  /**
   * @remarks
   * Question type: PRODUCT_QA (audio submission), GOSSIP (operation submission), UNKNOWN (unknown)
   * 
   * @example
   * PRODUCT_QA
   */
  type?: string;
  /**
   * @remarks
   * Unique ID of the user asking questions in the live channel
   * 
   * This parameter is required.
   * 
   * @example
   * 39485783475638465
   */
  userId?: string;
  /**
   * @remarks
   * Name of the user asking questions in the live channel
   * 
   * This parameter is required.
   * 
   * @example
   * 张**
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      gmtCreate: 'gmtCreate',
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

export class SubmitChatQuestionRequest extends $dara.Model {
  /**
   * @remarks
   * Current time
   * 
   * This parameter is required.
   * 
   * @example
   * 2024-09-27 11:23:20
   */
  gmtService?: string;
  /**
   * @remarks
   * Live channel script
   * 
   * This parameter is required.
   * 
   * @example
   * 我们家的酒全都是老酒，酒厂直售【当前用户问句】，保证正儿八经的自家酿造，地址都能告诉大家，品质实实在在的有保障。我们家这款酒入口非常绵柔顺滑，酱香、粮食香、花果香层层递进，空杯留香能持续48小时，不会有上头的感觉。今天我们是厂家直销，大家平时买酒在烟酒店要经过好几个环节的中间商，每个环节都要加价，今天在这里拍下，只会让你省不少冤枉钱。如果说你拿去存酒的话， 拍蓝瓶的云端系列也可以，越存的话会越香，你拿去托人办事、请人吃饭、商务宴请、搞接待送礼，直接带白瓶云悠系列。
   */
  liveScriptContent?: string;
  /**
   * @remarks
   * Enable small talk. Default is true.
   * 
   * @example
   * true
   */
  openSmallTalk?: boolean;
  /**
   * @remarks
   * Question list
   * 
   * This parameter is required.
   */
  questionList?: SubmitChatQuestionRequestQuestionList[];
  /**
   * @remarks
   * Request ID
   * 
   * This parameter is required.
   * 
   * @example
   * 0FC6636E-380A-5369-AE01-D1C15BB9B254
   */
  requestId?: string;
  /**
   * @remarks
   * Session ID
   * 
   * This parameter is required.
   * 
   * @example
   * 237645726354
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      gmtService: 'gmtService',
      liveScriptContent: 'liveScriptContent',
      openSmallTalk: 'openSmallTalk',
      questionList: 'questionList',
      requestId: 'requestId',
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtService: 'string',
      liveScriptContent: 'string',
      openSmallTalk: 'boolean',
      questionList: { 'type': 'array', 'itemType': SubmitChatQuestionRequestQuestionList },
      requestId: 'string',
      sessionId: 'string',
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

