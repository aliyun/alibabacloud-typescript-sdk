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
   * Distinguishes the answer type.
   * KnowledgeBase: knowledge base.
   * 
   * @example
   * KnowledgeBase
   */
  answerSource?: string;
  /**
   * @remarks
   * The knowledge category.
   * 
   * @example
   * 公积金
   */
  category?: string;
  /**
   * @remarks
   * The content of the hit question.
   * 
   * @example
   * 公积金提取，请在首页搜索公积金提取，提交办事的表单
   */
  content?: string;
  /**
   * @remarks
   * The indicator of whether the answer is plain text or rich text.
   * 
   * @example
   * PLAIN_TEXT
   */
  contentType?: string;
  /**
   * @remarks
   * The hit statement.
   * 
   * @example
   * 公积金
   */
  hitStatement?: string;
  /**
   * @remarks
   * The ID of the hit question in the knowledge base.
   * 
   * @example
   * 735898
   */
  id?: string;
  /**
   * @remarks
   * The list of related knowledge entries.
   */
  relatedKnowledges?: ChatResponseBodyMessagesKnowledgeRelatedKnowledges[];
  /**
   * @remarks
   * The score.
   * 
   * @example
   * 0.998
   */
  score?: number;
  /**
   * @remarks
   * The summary of the hit question.
   * 
   * @example
   * 公积金提取
   */
  summary?: string;
  /**
   * @remarks
   * The title of the hit question.
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
   * The identifier of the clarification source.
   * 
   * @example
   * KNOWLEDGE
   */
  answerSource?: string;
  /**
   * @remarks
   * The knowledge ID for clarification.
   * 
   * @example
   * 4548
   */
  knowledgeId?: string;
  /**
   * @remarks
   * The score of the recommended content. This field has a value when AnswerSource is KNOWLEDGE.
   * 
   * @example
   * 0.46
   */
  score?: number;
  /**
   * @remarks
   * The clarification content, which can be an entity from knowledge graph Q&A, a knowledge title from knowledge-based Q&A, or a column value from table-based Q&A.
   * 
   * @example
   * Test plain text
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
   * Indicates whether the slot is hit.
   * 
   * @example
   * false
   */
  hit?: boolean;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * CheckWeatherIntent.city
   */
  name?: string;
  /**
   * @remarks
   * The original value.
   * 
   * @example
   * Beijing
   */
  origin?: string;
  /**
   * @remarks
   * The specific value.
   * 
   * @example
   * Beijing
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
   * Distinguishes the answer type.
   * 
   * @example
   * BotFramework
   */
  answerSource?: string;
  /**
   * @remarks
   * When AnswerSource is MACHINE_READ, this field returns the title of the hit article.
   * 
   * @example
   * ICP Filing 11
   * [responses.200.schema.properties.Messages.items.properties.AnswerSource.enumValueTitles. INTENT_FAQ_CLARIFY]FAQ and dialog flow mixed clarification
   */
  articleTitle?: string;
  /**
   * @remarks
   * The instruction parameters, such as the skill group for a transfer-to-agent instruction.
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
   * Which location do you want to check the weather for?
   */
  content?: string;
  /**
   * @remarks
   * The indicator of whether the answer is plain text or rich text.
   * 
   * @example
   * PLAIN_TEXT
   */
  contentType?: string;
  /**
   * @remarks
   * When AnswerSource is BotFramework, this field returns the dialog flow unit name.
   * 
   * @example
   * Sample_CheckWeather
   */
  dialogName?: string;
  /**
   * @remarks
   * The pass-through parameters returned in this field.
   * 
   * @example
   * {
   * 	"MATCHED_INTENT_SOURCE": "",
   * 	"INTENT_ID": 724414,
   * 	"IntentName": "CheckWeatherIntent",
   * 	"INTENT_DETAIL": "[I want|I need to] check the weather",
   * 	"LGF_EXPRESSION": "[I want|I need to] check the weather",
   * 	"IS_SESSION_FINISHED": false,
   * 	"DsScore": 100.0,
   * 	"DIALOG_ID": "299034",
   * 	"FINISH_LABEL": false,
   * 	"MODULE_START": false,
   * 	"INTENT_NAME": "CheckWeatherIntent",
   * 	"INTENT_SOURCE": "Lgf",
   * 	"DIALOG_NAME": "Sample_CheckWeather"
   * }
   */
  ext?: { [key: string]: any };
  /**
   * @remarks
   * The pass-through parameters returned when AnswerSource is BotFramework.
   */
  externalFlags?: { [key: string]: any };
  /**
   * @remarks
   * The hit statement.
   * 
   * @example
   * CheckWeather
   */
  hitStatement?: string;
  /**
   * @remarks
   * When AnswerSource is BotFramework, this field returns the intent name.
   * 
   * @example
   * CheckWeatherIntent
   */
  intentName?: string;
  /**
   * @remarks
   * The metadata.
   * 
   * @example
   * [[{"columnName":"Name","stringValue":"Wang Shanshan"}]]
   */
  metaData?: string;
  /**
   * @remarks
   * The node ID returned when AnswerSource is BotFramework.
   * 
   * @example
   * 1410-c7a72a78.__city
   */
  nodeId?: string;
  /**
   * @remarks
   * When AnswerSource is BotFramework, this field returns the node name.
   * 
   * @example
   * Sample_CheckWeather.CheckWeatherSlotFilling.__city
   */
  nodeName?: string;
  /**
   * @remarks
   * When AnswerSource is BotFramework and ResponseType is SSML, this field indicates that a dialog flow interactive slot filling is hit. Otherwise, this field does not exist.
   * 
   * @example
   * SSML
   */
  responseType?: string;
  /**
   * @remarks
   * The score.
   * 
   * @example
   * 100.0
   */
  score?: number;
  /**
   * @remarks
   * When AnswerSource is BotFramework, this field returns the list of named entities.
   */
  slots?: ChatResponseBodyMessagesTextSlots[];
  /**
   * @remarks
   * The title of the custom chitchat topic.
   * 
   * @example
   * Greeting
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
   * The source of the recommended answer when AnswerType is Recommend.
   * [_single.resp.200.props.Messages.items.AnswerSource.enum. INTENT_FAQ_CLARIFY]mixed clarification from FAQ and dialog flow
   * 
   * @example
   * KNOWLEDGE
   */
  answerSource?: string;
  /**
   * @remarks
   * The type of this message.
   * 
   * @example
   * Text
   */
  answerType?: string;
  /**
   * @remarks
   * When AnswerType is Knowledge, this field contains the Knowledge object returned by the chatbot.
   */
  knowledge?: ChatResponseBodyMessagesKnowledge;
  /**
   * @remarks
   * The list of recommendations returned by the bot when AnswerType is Recommend.
   */
  recommends?: ChatResponseBodyMessagesRecommends[];
  /**
   * @remarks
   * When AnswerType is Text, this field contains the Text object returned by the chatbot.
   */
  text?: ChatResponseBodyMessagesText;
  /**
   * @remarks
   * The counter-question title in online scenarios.
   * 
   * @example
   * Which insurance age range are you inquiring about?
   */
  title?: string;
  /**
   * @remarks
   * The clarification content in voice scenarios.
   * 
   * @example
   * Are you asking about provident fund inquiry or provident fund withdrawal?
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
   * The ID of the response message in the current session.
   * 
   * @example
   * A2315C4B-A872-5DEE-9DAD-D73B194A4AEC
   */
  messageId?: string;
  /**
   * @remarks
   * The list of messages.
   */
  messages?: ChatResponseBodyMessages[];
  /**
   * @remarks
   * The tokenization results of the query, which may be empty.
   */
  querySegList?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A2315C4B-A872-5DEE-9DAD-D73B194A4AEC
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the current session.
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

