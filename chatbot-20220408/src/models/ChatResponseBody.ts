// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatResponseBodyMessagesKnowledgeRelatedKnowledges extends $dara.Model {
  /**
   * @remarks
   * The ID of the related knowledge entry.
   * 
   * @example
   * 735899
   */
  knowledgeId?: string;
  /**
   * @remarks
   * The title of the related knowledge entry.
   * 
   * @example
   * 公积金查询
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      knowledgeId: 'KnowledgeId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeId: 'string',
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

export class ChatResponseBodyMessagesKnowledge extends $dara.Model {
  /**
   * @remarks
   * The source of the answer.
   * `KnowledgeBase`: The answer is from the knowledge base.
   * 
   * @example
   * KnowledgeBase
   */
  answerSource?: string;
  /**
   * @remarks
   * The category of the knowledge entry.
   * 
   * @example
   * 公积金
   */
  category?: string;
  /**
   * @remarks
   * The content of the matched knowledge entry.
   * 
   * @example
   * 公积金提取，请在首页搜索公积金提取，提交办事的表单
   */
  content?: string;
  /**
   * @remarks
   * Content format of the answer.
   * 
   * @example
   * PLAIN_TEXT
   */
  contentType?: string;
  /**
   * @remarks
   * The hit statement matching the query.
   * 
   * @example
   * 公积金
   */
  hitStatement?: string;
  /**
   * @remarks
   * ID of the matched knowledge entry in the knowledge base.
   * 
   * @example
   * 735898
   */
  id?: string;
  /**
   * @remarks
   * A list of related knowledge objects.
   */
  relatedKnowledges?: ChatResponseBodyMessagesKnowledgeRelatedKnowledges[];
  /**
   * @remarks
   * The confidence score.
   * 
   * @example
   * 0.998
   */
  score?: number;
  /**
   * @remarks
   * Summary of the matched knowledge entry.
   * 
   * @example
   * 公积金提取
   */
  summary?: string;
  /**
   * @remarks
   * The title of the matched knowledge entry.
   * 
   * @example
   * 公积金提取
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      answerSource: 'AnswerSource',
      category: 'Category',
      content: 'Content',
      contentType: 'ContentType',
      hitStatement: 'HitStatement',
      id: 'Id',
      relatedKnowledges: 'RelatedKnowledges',
      score: 'Score',
      summary: 'Summary',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerSource: 'string',
      category: 'string',
      content: 'string',
      contentType: 'string',
      hitStatement: 'string',
      id: 'string',
      relatedKnowledges: { 'type': 'array', 'itemType': ChatResponseBodyMessagesKnowledgeRelatedKnowledges },
      score: 'number',
      summary: 'string',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.relatedKnowledges)) {
      $dara.Model.validateArray(this.relatedKnowledges);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatResponseBodyMessagesRecommends extends $dara.Model {
  /**
   * @remarks
   * Source of the clarification.
   * 
   * @example
   * KNOWLEDGE
   */
  answerSource?: string;
  /**
   * @remarks
   * The knowledge ID for the clarification.
   * 
   * @example
   * 4548
   */
  knowledgeId?: string;
  /**
   * @remarks
   * The score of the recommended content. Returned only if `AnswerSource` is `KNOWLEDGE`.
   * 
   * @example
   * 0.46
   */
  score?: number;
  /**
   * @remarks
   * Clarification content. This can be an entity from knowledge graph QA, a knowledge title from FAQ-based QA, or a column value from table QA.
   * 
   * @example
   * 测试纯文本
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      answerSource: 'AnswerSource',
      knowledgeId: 'KnowledgeId',
      score: 'Score',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerSource: 'string',
      knowledgeId: 'string',
      score: 'number',
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

export class ChatResponseBodyMessagesTextSlots extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the slot was filled.
   * 
   * @example
   * false
   */
  hit?: boolean;
  /**
   * @remarks
   * The name of the slot.
   * 
   * @example
   * 查天气意图.city
   */
  name?: string;
  /**
   * @remarks
   * The original value from the user\\"s input.
   * 
   * @example
   * 北京
   */
  origin?: string;
  /**
   * @remarks
   * Extracted value of the slot.
   * 
   * @example
   * 北京
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      hit: 'Hit',
      name: 'Name',
      origin: 'Origin',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hit: 'boolean',
      name: 'string',
      origin: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatResponseBodyMessagesText extends $dara.Model {
  /**
   * @remarks
   * The source of the answer.
   * 
   * @example
   * BotFramework
   */
  answerSource?: string;
  /**
   * @remarks
   * Title of the matched article. Returned only if `AnswerSource` is `MACHINE_READ`.
   * 
   * @example
   * 备案十一
   */
  articleTitle?: string;
  /**
   * @remarks
   * Command parameters, such as the skill group for transferring to a human agent.
   * 
   * @example
   * {
   * 	"sysToAgent": "{\\"skillGroup\\":\\"12\\"}"
   * }
   */
  commands?: { [key: string]: any };
  /**
   * @remarks
   * The content of the text message.
   * 
   * @example
   * 请问您要查哪里的天气？
   */
  content?: string;
  /**
   * @remarks
   * The content format of the answer.
   * 
   * @example
   * PLAIN_TEXT
   */
  contentType?: string;
  /**
   * @remarks
   * Name of the dialog. Returned only if `AnswerSource` is `BotFramework`.
   * 
   * @example
   * 示例_查天气
   */
  dialogName?: string;
  /**
   * @remarks
   * Contains passthrough parameters.
   * 
   * @example
   * {
   * 	"MATCHED_INTENT_SOURCE": "",
   * 	"INTENT_ID": 724414,
   * 	"IntentName": "查天气意图",
   * 	"INTENT_DETAIL": "[我想|我要]查天气",
   * 	"LGF_EXPRESSION": "[我想|我要]查天气",
   * 	"IS_SESSION_FINISHED": false,
   * 	"DsScore": 100.0,
   * 	"DIALOG_ID": "299034",
   * 	"FINISH_LABEL": false,
   * 	"MODULE_START": false,
   * 	"INTENT_NAME": "查天气意图",
   * 	"INTENT_SOURCE": "Lgf",
   * 	"DIALOG_NAME": "示例_查天气"
   * }
   */
  ext?: { [key: string]: any };
  /**
   * @remarks
   * Passthrough parameters. Returned only if `AnswerSource` is `BotFramework`.
   */
  externalFlags?: { [key: string]: any };
  /**
   * @remarks
   * The hit statement.
   * 
   * @example
   * 查天气
   */
  hitStatement?: string;
  /**
   * @remarks
   * The name of the intent. This field is returned when `AnswerSource` is `BotFramework`.
   * 
   * @example
   * 查天气意图
   */
  intentName?: string;
  /**
   * @remarks
   * Metadata.
   * 
   * @example
   * [[{\\"columnName\\":\\"姓名\\",\\"stringValue\\":\\"王珊珊\\"}]]
   */
  metaData?: string;
  /**
   * @remarks
   * The node ID. Returned only if `AnswerSource` is `BotFramework`.
   * 
   * @example
   * 1410-c7a72a78.__city
   */
  nodeId?: string;
  /**
   * @remarks
   * The name of the node. This field is returned when `AnswerSource` is `BotFramework`.
   * 
   * @example
   * 示例_查天气.查天气填槽.__city
   */
  nodeName?: string;
  /**
   * @remarks
   * A value of `SSML` indicates that an interactive slot-filling process has started in the dialog factory. This field is returned only if `AnswerSource` is `BotFramework`.
   * 
   * @example
   * SSML
   */
  responseType?: string;
  /**
   * @remarks
   * The confidence score.
   * 
   * @example
   * 100.0
   */
  score?: number;
  /**
   * @remarks
   * A list of slot objects. Returned only if `AnswerSource` is `BotFramework`.
   */
  slots?: ChatResponseBodyMessagesTextSlots[];
  /**
   * @remarks
   * The title of a custom chit-chat topic.
   * 
   * @example
   * 问候
   */
  userDefinedChatTitle?: string;
  static names(): { [key: string]: string } {
    return {
      answerSource: 'AnswerSource',
      articleTitle: 'ArticleTitle',
      commands: 'Commands',
      content: 'Content',
      contentType: 'ContentType',
      dialogName: 'DialogName',
      ext: 'Ext',
      externalFlags: 'ExternalFlags',
      hitStatement: 'HitStatement',
      intentName: 'IntentName',
      metaData: 'MetaData',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      responseType: 'ResponseType',
      score: 'Score',
      slots: 'Slots',
      userDefinedChatTitle: 'UserDefinedChatTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerSource: 'string',
      articleTitle: 'string',
      commands: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      content: 'string',
      contentType: 'string',
      dialogName: 'string',
      ext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      externalFlags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      hitStatement: 'string',
      intentName: 'string',
      metaData: 'string',
      nodeId: 'string',
      nodeName: 'string',
      responseType: 'string',
      score: 'number',
      slots: { 'type': 'array', 'itemType': ChatResponseBodyMessagesTextSlots },
      userDefinedChatTitle: 'string',
    };
  }

  validate() {
    if(this.commands) {
      $dara.Model.validateMap(this.commands);
    }
    if(this.ext) {
      $dara.Model.validateMap(this.ext);
    }
    if(this.externalFlags) {
      $dara.Model.validateMap(this.externalFlags);
    }
    if(Array.isArray(this.slots)) {
      $dara.Model.validateArray(this.slots);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatResponseBodyMessages extends $dara.Model {
  /**
   * @remarks
   * Indicates the source of the recommended answer if `AnswerType` is `Recommend`.
   * 
   * @example
   * KNOWLEDGE
   */
  answerSource?: string;
  /**
   * @remarks
   * Type of the message.
   * 
   * @example
   * Text
   */
  answerType?: string;
  /**
   * @remarks
   * Contains the `Knowledge` object if `AnswerType` is `Knowledge`.
   */
  knowledge?: ChatResponseBodyMessagesKnowledge;
  /**
   * @remarks
   * Contains a list of `Recommend` objects if `AnswerType` is `Recommend`.
   */
  recommends?: ChatResponseBodyMessagesRecommends[];
  /**
   * @remarks
   * Contains the `Text` object if `AnswerType` is `Text`.
   */
  text?: ChatResponseBodyMessagesText;
  /**
   * @remarks
   * The title of the clarification question for text-based chat scenarios.
   * 
   * @example
   * 请问您想咨询的是哪个投保年龄区间呢？
   */
  title?: string;
  /**
   * @remarks
   * The clarification content for voice-based scenarios.
   * 
   * @example
   * 请问你说的是公积金查询，还是公积金提取
   */
  voiceTitle?: string;
  static names(): { [key: string]: string } {
    return {
      answerSource: 'AnswerSource',
      answerType: 'AnswerType',
      knowledge: 'Knowledge',
      recommends: 'Recommends',
      text: 'Text',
      title: 'Title',
      voiceTitle: 'VoiceTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerSource: 'string',
      answerType: 'string',
      knowledge: ChatResponseBodyMessagesKnowledge,
      recommends: { 'type': 'array', 'itemType': ChatResponseBodyMessagesRecommends },
      text: ChatResponseBodyMessagesText,
      title: 'string',
      voiceTitle: 'string',
    };
  }

  validate() {
    if(this.knowledge && typeof (this.knowledge as any).validate === 'function') {
      (this.knowledge as any).validate();
    }
    if(Array.isArray(this.recommends)) {
      $dara.Model.validateArray(this.recommends);
    }
    if(this.text && typeof (this.text as any).validate === 'function') {
      (this.text as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique message ID.
   * 
   * @example
   * A2315C4B-A872-5DEE-9DAD-D73B194A4AEC
   */
  messageId?: string;
  /**
   * @remarks
   * A list of message objects.
   */
  messages?: ChatResponseBodyMessages[];
  /**
   * @remarks
   * The words segmented from the query. This field may be empty.
   */
  querySegList?: string[];
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * A2315C4B-A872-5DEE-9DAD-D73B194A4AEC
   */
  requestId?: string;
  /**
   * @remarks
   * The unique session ID.
   * 
   * @example
   * a6f216a0685c4c8baa0e8beb6d5ec6db
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      messageId: 'MessageId',
      messages: 'Messages',
      querySegList: 'QuerySegList',
      requestId: 'RequestId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'string',
      messages: { 'type': 'array', 'itemType': ChatResponseBodyMessages },
      querySegList: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    if(Array.isArray(this.querySegList)) {
      $dara.Model.validateArray(this.querySegList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

