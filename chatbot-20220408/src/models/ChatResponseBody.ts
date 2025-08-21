// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatResponseBodyMessagesKnowledgeRelatedKnowledges extends $dara.Model {
  /**
   * @example
   * 735899
   */
  knowledgeId?: string;
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
   * @example
   * KnowledgeBase
   */
  answerSource?: string;
  category?: string;
  content?: string;
  /**
   * @example
   * PLAIN_TEXT
   */
  contentType?: string;
  hitStatement?: string;
  /**
   * @example
   * 735898
   */
  id?: string;
  relatedKnowledges?: ChatResponseBodyMessagesKnowledgeRelatedKnowledges[];
  /**
   * @example
   * 0.998
   */
  score?: number;
  summary?: string;
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
   * @example
   * KNOWLEDGE
   */
  answerSource?: string;
  /**
   * @example
   * 4548
   */
  knowledgeId?: string;
  /**
   * @example
   * 0.46
   */
  score?: number;
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
   * @example
   * false
   */
  hit?: boolean;
  name?: string;
  origin?: string;
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
   * @example
   * BotFramework
   */
  answerSource?: string;
  articleTitle?: string;
  /**
   * @example
   * {
   * 	"sysToAgent": "{\\"skillGroup\\":\\"12\\"}"
   * }
   */
  commands?: { [key: string]: any };
  content?: string;
  /**
   * @example
   * PLAIN_TEXT
   */
  contentType?: string;
  dialogName?: string;
  ext?: { [key: string]: any };
  externalFlags?: { [key: string]: any };
  hitStatement?: string;
  intentName?: string;
  metaData?: string;
  /**
   * @example
   * 1410-c7a72a78.__city
   */
  nodeId?: string;
  nodeName?: string;
  /**
   * @example
   * SSML
   */
  responseType?: string;
  /**
   * @example
   * 100.0
   */
  score?: number;
  slots?: ChatResponseBodyMessagesTextSlots[];
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
   * @example
   * KNOWLEDGE
   */
  answerSource?: string;
  /**
   * @example
   * Text
   */
  answerType?: string;
  knowledge?: ChatResponseBodyMessagesKnowledge;
  recommends?: ChatResponseBodyMessagesRecommends[];
  text?: ChatResponseBodyMessagesText;
  title?: string;
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
   * @example
   * A2315C4B-A872-5DEE-9DAD-D73B194A4AEC
   */
  messageId?: string;
  messages?: ChatResponseBodyMessages[];
  querySegList?: string[];
  /**
   * @example
   * A2315C4B-A872-5DEE-9DAD-D73B194A4AEC
   */
  requestId?: string;
  /**
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

