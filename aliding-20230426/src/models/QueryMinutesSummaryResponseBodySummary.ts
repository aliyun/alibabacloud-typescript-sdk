// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMinutesSummaryResponseBodySummaryActions } from "./QueryMinutesSummaryResponseBodySummaryActions";
import { QueryMinutesSummaryResponseBodySummaryAutoChapters } from "./QueryMinutesSummaryResponseBodySummaryAutoChapters";
import { QueryMinutesSummaryResponseBodySummaryConversationalSummary } from "./QueryMinutesSummaryResponseBodySummaryConversationalSummary";
import { QueryMinutesSummaryResponseBodySummaryKeySentences } from "./QueryMinutesSummaryResponseBodySummaryKeySentences";
import { QueryMinutesSummaryResponseBodySummaryQuestionsAnsweringSummary } from "./QueryMinutesSummaryResponseBodySummaryQuestionsAnsweringSummary";


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

