// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMinutesSummaryResponseBodySummaryActions extends $dara.Model {
  /**
   * @example
   * 7910000
   */
  end?: number;
  /**
   * @example
   * 2
   */
  id?: number;
  /**
   * @example
   * 2
   */
  sentenceId?: number;
  /**
   * @example
   * 7901100
   */
  start?: number;
  /**
   * @example
   * 内容
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      id: 'Id',
      sentenceId: 'SentenceId',
      start: 'Start',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'number',
      id: 'number',
      sentenceId: 'number',
      start: 'number',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMinutesSummaryResponseBodySummaryAutoChapters extends $dara.Model {
  /**
   * @example
   * 7910000
   */
  end?: number;
  /**
   * @example
   * 章节的一句话标题
   */
  headline?: string;
  /**
   * @example
   * 2
   */
  id?: number;
  /**
   * @example
   * 7901100
   */
  start?: number;
  /**
   * @example
   * 章节总结
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      headline: 'Headline',
      id: 'Id',
      start: 'Start',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'number',
      headline: 'string',
      id: 'number',
      start: 'number',
      summary: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMinutesSummaryResponseBodySummaryConversationalSummary extends $dara.Model {
  /**
   * @example
   * 012345
   */
  speakerId?: string;
  /**
   * @example
   * 发言人姓名
   */
  speakerName?: string;
  /**
   * @example
   * 发言人对应的总结
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      speakerId: 'SpeakerId',
      speakerName: 'SpeakerName',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      speakerId: 'string',
      speakerName: 'string',
      summary: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMinutesSummaryResponseBodySummaryKeySentences extends $dara.Model {
  /**
   * @example
   * 7910000
   */
  end?: number;
  /**
   * @example
   * 2
   */
  id?: number;
  /**
   * @example
   * 2
   */
  sentenceId?: number;
  /**
   * @example
   * 7901100
   */
  start?: number;
  /**
   * @example
   * 内容
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      id: 'Id',
      sentenceId: 'SentenceId',
      start: 'Start',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'number',
      id: 'number',
      sentenceId: 'number',
      start: 'number',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMinutesSummaryResponseBodySummaryQuestionsAnsweringSummary extends $dara.Model {
  /**
   * @example
   * 问题
   */
  answer?: string;
  /**
   * @example
   * 回答
   */
  question?: string;
  /**
   * @example
   * []
   */
  sentenceIdsOfAnswer?: number[];
  /**
   * @example
   * []
   */
  sentenceIdsOfQuestion?: number[];
  static names(): { [key: string]: string } {
    return {
      answer: 'Answer',
      question: 'Question',
      sentenceIdsOfAnswer: 'SentenceIdsOfAnswer',
      sentenceIdsOfQuestion: 'SentenceIdsOfQuestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: 'string',
      question: 'string',
      sentenceIdsOfAnswer: { 'type': 'array', 'itemType': 'number' },
      sentenceIdsOfQuestion: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.sentenceIdsOfAnswer)) {
      $dara.Model.validateArray(this.sentenceIdsOfAnswer);
    }
    if(Array.isArray(this.sentenceIdsOfQuestion)) {
      $dara.Model.validateArray(this.sentenceIdsOfQuestion);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMinutesSummaryResponseBodySummary extends $dara.Model {
  /**
   * @example
   * {}
   */
  actions?: QueryMinutesSummaryResponseBodySummaryActions;
  /**
   * @example
   * []
   */
  autoChapters?: QueryMinutesSummaryResponseBodySummaryAutoChapters[];
  /**
   * @example
   * []
   */
  conversationalSummary?: QueryMinutesSummaryResponseBodySummaryConversationalSummary[];
  /**
   * @example
   * {}
   */
  keySentences?: QueryMinutesSummaryResponseBodySummaryKeySentences;
  /**
   * @example
   * []
   */
  keywords?: string[];
  /**
   * @example
   * 全文摘要结果，全文摘要通过两三百字的篇幅将最重要的信息呈现出来，用于快速了解记录内容与主旨
   */
  paragraphSummary?: string;
  /**
   * @example
   * []
   */
  questionsAnsweringSummary?: QueryMinutesSummaryResponseBodySummaryQuestionsAnsweringSummary[];
  static names(): { [key: string]: string } {
    return {
      actions: 'Actions',
      autoChapters: 'AutoChapters',
      conversationalSummary: 'ConversationalSummary',
      keySentences: 'KeySentences',
      keywords: 'Keywords',
      paragraphSummary: 'ParagraphSummary',
      questionsAnsweringSummary: 'QuestionsAnsweringSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: QueryMinutesSummaryResponseBodySummaryActions,
      autoChapters: { 'type': 'array', 'itemType': QueryMinutesSummaryResponseBodySummaryAutoChapters },
      conversationalSummary: { 'type': 'array', 'itemType': QueryMinutesSummaryResponseBodySummaryConversationalSummary },
      keySentences: QueryMinutesSummaryResponseBodySummaryKeySentences,
      keywords: { 'type': 'array', 'itemType': 'string' },
      paragraphSummary: 'string',
      questionsAnsweringSummary: { 'type': 'array', 'itemType': QueryMinutesSummaryResponseBodySummaryQuestionsAnsweringSummary },
    };
  }

  validate() {
    if(this.actions && typeof (this.actions as any).validate === 'function') {
      (this.actions as any).validate();
    }
    if(Array.isArray(this.autoChapters)) {
      $dara.Model.validateArray(this.autoChapters);
    }
    if(Array.isArray(this.conversationalSummary)) {
      $dara.Model.validateArray(this.conversationalSummary);
    }
    if(this.keySentences && typeof (this.keySentences as any).validate === 'function') {
      (this.keySentences as any).validate();
    }
    if(Array.isArray(this.keywords)) {
      $dara.Model.validateArray(this.keywords);
    }
    if(Array.isArray(this.questionsAnsweringSummary)) {
      $dara.Model.validateArray(this.questionsAnsweringSummary);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMinutesSummaryResponseBody extends $dara.Model {
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  summary?: QueryMinutesSummaryResponseBodySummary;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      summary: 'summary',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      summary: QueryMinutesSummaryResponseBodySummary,
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(this.summary && typeof (this.summary as any).validate === 'function') {
      (this.summary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

