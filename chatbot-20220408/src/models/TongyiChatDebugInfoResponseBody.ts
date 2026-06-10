// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TongyiChatDebugInfoResponseBodyAnswerInfoAnswerReferenceInfoItemList extends $dara.Model {
  contentType?: string;
  dataSource?: string;
  id?: string;
  number?: number;
  referenceExt?: any;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      contentType: 'ContentType',
      dataSource: 'DataSource',
      id: 'Id',
      number: 'Number',
      referenceExt: 'ReferenceExt',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      dataSource: 'string',
      id: 'string',
      number: 'number',
      referenceExt: 'any',
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

export class TongyiChatDebugInfoResponseBodyAnswerInfoAnswerReferenceInfo extends $dara.Model {
  itemList?: TongyiChatDebugInfoResponseBodyAnswerInfoAnswerReferenceInfoItemList[];
  static names(): { [key: string]: string } {
    return {
      itemList: 'ItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemList: { 'type': 'array', 'itemType': TongyiChatDebugInfoResponseBodyAnswerInfoAnswerReferenceInfoItemList },
    };
  }

  validate() {
    if(Array.isArray(this.itemList)) {
      $dara.Model.validateArray(this.itemList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TongyiChatDebugInfoResponseBodyAnswerInfoMessageBodyDirectMessageBodySentenceList extends $dara.Model {
  content?: string;
  referNumber?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      referNumber: 'ReferNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      referNumber: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TongyiChatDebugInfoResponseBodyAnswerInfoMessageBodyDirectMessageBody extends $dara.Model {
  contentType?: string;
  transitionList?: string[];
  relatedQuestionList?: string[];
  sentenceList?: TongyiChatDebugInfoResponseBodyAnswerInfoMessageBodyDirectMessageBodySentenceList[];
  static names(): { [key: string]: string } {
    return {
      contentType: 'ContentType',
      transitionList: 'TransitionList',
      relatedQuestionList: 'relatedQuestionList',
      sentenceList: 'sentenceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      transitionList: { 'type': 'array', 'itemType': 'string' },
      relatedQuestionList: { 'type': 'array', 'itemType': 'string' },
      sentenceList: { 'type': 'array', 'itemType': TongyiChatDebugInfoResponseBodyAnswerInfoMessageBodyDirectMessageBodySentenceList },
    };
  }

  validate() {
    if(Array.isArray(this.transitionList)) {
      $dara.Model.validateArray(this.transitionList);
    }
    if(Array.isArray(this.relatedQuestionList)) {
      $dara.Model.validateArray(this.relatedQuestionList);
    }
    if(Array.isArray(this.sentenceList)) {
      $dara.Model.validateArray(this.sentenceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TongyiChatDebugInfoResponseBodyAnswerInfoMessageBody extends $dara.Model {
  commands?: any;
  directMessageBody?: TongyiChatDebugInfoResponseBodyAnswerInfoMessageBodyDirectMessageBody;
  static names(): { [key: string]: string } {
    return {
      commands: 'Commands',
      directMessageBody: 'DirectMessageBody',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commands: 'any',
      directMessageBody: TongyiChatDebugInfoResponseBodyAnswerInfoMessageBodyDirectMessageBody,
    };
  }

  validate() {
    if(this.directMessageBody && typeof (this.directMessageBody as any).validate === 'function') {
      (this.directMessageBody as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TongyiChatDebugInfoResponseBodyAnswerInfo extends $dara.Model {
  answerReferenceInfo?: TongyiChatDebugInfoResponseBodyAnswerInfoAnswerReferenceInfo;
  messageBody?: TongyiChatDebugInfoResponseBodyAnswerInfoMessageBody;
  static names(): { [key: string]: string } {
    return {
      answerReferenceInfo: 'AnswerReferenceInfo',
      messageBody: 'MessageBody',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerReferenceInfo: TongyiChatDebugInfoResponseBodyAnswerInfoAnswerReferenceInfo,
      messageBody: TongyiChatDebugInfoResponseBodyAnswerInfoMessageBody,
    };
  }

  validate() {
    if(this.answerReferenceInfo && typeof (this.answerReferenceInfo as any).validate === 'function') {
      (this.answerReferenceInfo as any).validate();
    }
    if(this.messageBody && typeof (this.messageBody as any).validate === 'function') {
      (this.messageBody as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TongyiChatDebugInfoResponseBodyPipeline extends $dara.Model {
  /**
   * @remarks
   * The input data for the node.
   * 
   * @example
   * 用户问句：转人工\\n命中规则：[转]人工[客服|服务|坐席]
   */
  input?: any;
  /**
   * @remarks
   * The name of the strategy. Possible values include:
   * 
   * - FAQ
   * 
   * - Hit Keywords
   * 
   * - Global Sensitive Words
   * 
   * This parameter is returned only when `NodeType` is set to `system_strategy`.
   * 
   * @example
   * 关键词转人工
   */
  name?: string;
  /**
   * @remarks
   * The node type. Valid values:
   * 
   * - **system_strategy**: system strategy.
   * 
   * - **rewrite_query**: retrieval query.
   * 
   * - **invoke_llm**: LLM invocation.
   * 
   * - **invoke_tools**: tool invocation.
   * 
   * @example
   * system_strategy
   */
  nodeType?: string;
  /**
   * @remarks
   * The output data from the node.
   * 
   * @example
   * commands:{\\"sysToAgent\\":\\"{\\\\\\"skillGroup\\\\\\":\\\\\\"\\\\\\",\\\\\\"ext\\\\\\":\\\\\\"\\\\\\",\\\\\\"toAgentReason\\\\\\":\\\\\\"HitKeywords\\\\\\"}\\"}\\nresponse:正在为您转接人工客服
   */
  output?: any;
  static names(): { [key: string]: string } {
    return {
      input: 'Input',
      name: 'Name',
      nodeType: 'NodeType',
      output: 'Output',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: 'any',
      name: 'string',
      nodeType: 'string',
      output: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TongyiChatDebugInfoResponseBody extends $dara.Model {
  answerInfo?: TongyiChatDebugInfoResponseBodyAnswerInfo;
  /**
   * @remarks
   * The ID of the response message in the current session.
   * 
   * @example
   * 2828708A-2C7A-1BAE-B810-87DB9DA9C661
   */
  messageId?: string;
  /**
   * @remarks
   * The array of nodes that constitute the Q\\&A workflow.
   */
  pipeline?: TongyiChatDebugInfoResponseBodyPipeline[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E3E5C779-A630-45AC-B0F2-A4506A4212F1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      answerInfo: 'AnswerInfo',
      messageId: 'MessageId',
      pipeline: 'Pipeline',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerInfo: TongyiChatDebugInfoResponseBodyAnswerInfo,
      messageId: 'string',
      pipeline: { 'type': 'array', 'itemType': TongyiChatDebugInfoResponseBodyPipeline },
      requestId: 'string',
    };
  }

  validate() {
    if(this.answerInfo && typeof (this.answerInfo as any).validate === 'function') {
      (this.answerInfo as any).validate();
    }
    if(Array.isArray(this.pipeline)) {
      $dara.Model.validateArray(this.pipeline);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

