// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TongyiChatDebugInfoResponseBodyAnswerInfoAnswerReferenceInfoItemList extends $dara.Model {
  /**
   * @remarks
   * The type of the referenced text.
   * 
   * @example
   * PLAIN_TEXT/RICH_TEXT
   */
  contentType?: string;
  /**
   * @remarks
   * The source of the referenced knowledge.
   * 
   * @example
   * FLOW/DOC/FAQ/FAQ_DIRECT
   */
  dataSource?: string;
  /**
   * @remarks
   * The ID of the referenced knowledge.
   * 
   * @example
   * 611926
   */
  id?: string;
  /**
   * @remarks
   * The number that corresponds one-to-one with the ReferNumber in AnswerInfo.MessageBody.DirectMessageBody.SentenceList.
   * 
   * @example
   * 1
   */
  number?: number;
  /**
   * @remarks
   * The extension information specific to the knowledge type.
   * 
   * @example
   * {
   *             "CollectedParams": {
   *               "ReturnMaster": "true"
   *             },
   *             "Edges": [],
   *             "Nodes": [
   *               {
   *                 "InvokedApis": [
   *                   {
   *                     "ApiName": "intentionRepeatCallQry"
   *                   }
   *                 ],
   *                 "OptionalParams": [
   *                   "mobile",
   *                   "intention"
   *                 ],
   *                 "Id": "22874cb7-c253-4832-a38d-7113b15ef7fc",
   *                 "RequiredParams": [],
   *                 "Name": "Check for repeated contacts"
   *               },
   *               {
   *                 "InvokedApis": [
   *                   {
   *                     "ApiName": "complaintAllChannelLatest"
   *                   }
   *                 ],
   *                 "OptionalParams": [
   *                   "mobile",
   *                   "billCode"
   *                 ],
   *                 "Id": "071b082e-ce76-47f9-8b8d-f29e0dd1015c",
   *                 "RequiredParams": [],
   *                 "Name": "Query ticket information"
   *               },
   *               {
   *                 "Id": "db02f361-61ee-4e30-bda0-2fd62cf4ca46",
   *                 "Name": "Logical judgment_35a6"
   *               },
   *               {
   *                 "OptionalParams": [],
   *                 "Id": "97f68b60-2973-4d10-8e42-1cbfcbb15cf6",
   *                 "RequiredParams": [
   *                   "returnMaster"
   *                 ],
   *                 "Name": "Whether to return to the main flow"
   *               },
   *               {
   *                 "Id": "8167e4ec-a589-42de-97c2-271672b26ffe",
   *                 "Name": "Return to the main flow"
   *               }
   *             ]
   *           }
   */
  referenceExt?: any;
  /**
   * @remarks
   * The title of the referenced knowledge.
   * 
   * @example
   * Is it possible to make the payment when the contract entity and the paying entity are different?
   */
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
  /**
   * @remarks
   * The list of referenced knowledge entries.
   */
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

export class TongyiChatDebugInfoResponseBodyAnswerInfoMessageBodyDirectMessageBodyRtDetail extends $dara.Model {
  /**
   * @remarks
   * The list of RTs for each segment from the time the user question is received on the text side to the sequential generation of the formal answer.
   * 
   * @example
   * [200, 256, 300, 430]
   */
  sentenceRtList?: any;
  /**
   * @remarks
   * The list of RTs for each segment from the time the user question is received on the text side to the sequential generation of the transition phrases.
   * 
   * @example
   * [130]
   */
  transitionRtList?: any;
  static names(): { [key: string]: string } {
    return {
      sentenceRtList: 'SentenceRtList',
      transitionRtList: 'TransitionRtList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sentenceRtList: 'any',
      transitionRtList: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TongyiChatDebugInfoResponseBodyAnswerInfoMessageBodyDirectMessageBodySentenceList extends $dara.Model {
  /**
   * @remarks
   * The formal answer entry.
   * 
   * @example
   * The weather is sunny today
   */
  content?: string;
  /**
   * @remarks
   * The number that corresponds one-to-one with the Number in AnswerReferenceInfo.ItemList for generating this answer.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The answer type.
   * 
   * @example
   * RICH_TEXT/PLAIN_TEXT
   */
  contentType?: string;
  /**
   * @remarks
   * The matched system Q&A policy.
   * 
   * @example
   * SENSITIVE_WORD/NO_ANSWER/COMMANDS
   */
  hitSystemAskConfig?: string;
  /**
   * @remarks
   * The response time (RT) debugging information for the current Q&A.
   */
  rtDetail?: TongyiChatDebugInfoResponseBodyAnswerInfoMessageBodyDirectMessageBodyRtDetail;
  /**
   * @remarks
   * The list of transition phrases.
   */
  transitionList?: string[];
  /**
   * @remarks
   * The list of similar questions.
   */
  relatedQuestionList?: string[];
  /**
   * @remarks
   * The list of formal answers.
   */
  sentenceList?: TongyiChatDebugInfoResponseBodyAnswerInfoMessageBodyDirectMessageBodySentenceList[];
  static names(): { [key: string]: string } {
    return {
      contentType: 'ContentType',
      hitSystemAskConfig: 'HitSystemAskConfig',
      rtDetail: 'RtDetail',
      transitionList: 'TransitionList',
      relatedQuestionList: 'relatedQuestionList',
      sentenceList: 'sentenceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      hitSystemAskConfig: 'string',
      rtDetail: TongyiChatDebugInfoResponseBodyAnswerInfoMessageBodyDirectMessageBodyRtDetail,
      transitionList: { 'type': 'array', 'itemType': 'string' },
      relatedQuestionList: { 'type': 'array', 'itemType': 'string' },
      sentenceList: { 'type': 'array', 'itemType': TongyiChatDebugInfoResponseBodyAnswerInfoMessageBodyDirectMessageBodySentenceList },
    };
  }

  validate() {
    if(this.rtDetail && typeof (this.rtDetail as any).validate === 'function') {
      (this.rtDetail as any).validate();
    }
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
  /**
   * @remarks
   * The command parameters, such as the skill group for the transfer-to-agent command.
   * 
   * @example
   * {
   *         "SysToAgent": "{\\"skillGroup\\":\\"\\",\\"ext\\":\\"\\",\\"toAgentReason\\":\\"HitKeywords\\"}"
   *       }
   */
  commands?: any;
  /**
   * @remarks
   * The message body that contains the Q&A results, including the answer, text type, recommended questions, and matched system type.
   */
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
  /**
   * @remarks
   * The referenced knowledge information of the matched answer.
   */
  answerReferenceInfo?: TongyiChatDebugInfoResponseBodyAnswerInfoAnswerReferenceInfo;
  /**
   * @remarks
   * The message body.
   */
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
   * The debugging input information.
   * 
   * @example
   * User question: Transfer to agent
   * Rule hits: [transfer] agent [customer service|service|representative]
   */
  input?: any;
  /**
   * @remarks
   * The policy name. Valid values:
   * - High-frequency Q&A direct output
   * - Keyword-based transfer to agent
   * - Global sensitive words
   * 
   * This field is available only when NodeType is system_strategy.
   * 
   * @example
   * Keyword-based transfer to agent
   */
  name?: string;
  /**
   * @remarks
   * The node type. Valid values:
   * * **system_strategy**: system policy.
   * * **rewrite_query**: retrieved question.
   * * **invoke_llm**: LLM invocation.
   * * **invoke_tools**: tool calling.
   * 
   * @example
   * system_strategy
   */
  nodeType?: string;
  /**
   * @remarks
   * The output information.
   * 
   * @example
   * commands:{"sysToAgent":"{\\"skillGroup\\":\\"\\",\\"ext\\":\\"\\",\\"toAgentReason\\":\\"HitKeywords\\"}"}
   * response:Transferring you to a human agent
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
  /**
   * @remarks
   * The answer information corresponding to the conversation.
   */
  answerInfo?: TongyiChatDebugInfoResponseBodyAnswerInfo;
  /**
   * @remarks
   * The ID of the response message for the current session.
   * 
   * @example
   * 2828708A-2C7A-1BAE-B810-87DB9DA9C661
   */
  messageId?: string;
  /**
   * @remarks
   * The information about the entire Q&A process.
   * 
   * @example
   * For examples, see the child elements
   */
  pipeline?: TongyiChatDebugInfoResponseBodyPipeline[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * E3E5C779-A630-45AC-B0F2-A4506A4212F1
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the session to which the current response message belongs.
   * 
   * @example
   * 19856284-0ba1-4da3-9a5a-05db2bdf296e
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      answerInfo: 'AnswerInfo',
      messageId: 'MessageId',
      pipeline: 'Pipeline',
      requestId: 'RequestId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerInfo: TongyiChatDebugInfoResponseBodyAnswerInfo,
      messageId: 'string',
      pipeline: { 'type': 'array', 'itemType': TongyiChatDebugInfoResponseBodyPipeline },
      requestId: 'string',
      sessionId: 'string',
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

