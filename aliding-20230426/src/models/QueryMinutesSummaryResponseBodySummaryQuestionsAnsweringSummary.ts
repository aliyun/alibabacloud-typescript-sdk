// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

