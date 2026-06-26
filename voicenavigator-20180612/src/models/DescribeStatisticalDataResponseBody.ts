// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStatisticalDataResponseBodyStatisticalDataReports extends $dara.Model {
  /**
   * @remarks
   * The pass rate of multi-turn dialogues.
   * 
   * @example
   * 80.00%
   */
  dialoguePassRate?: string;
  /**
   * @remarks
   * The knowledge base hit rate.
   * 
   * @example
   * 80.00%
   */
  knowledgeHitRate?: string;
  /**
   * @remarks
   * The resolution rate.
   * 
   * @example
   * 80.00%
   */
  resolutionRate?: string;
  /**
   * @remarks
   * The number of resolved questions.
   * 
   * @example
   * 80
   */
  resolvedQuestionNum?: number;
  /**
   * @remarks
   * The date of the statistics.
   * 
   * @example
   * 19:00:00
   */
  statisticalDate?: string;
  /**
   * @remarks
   * The total number of conversations.
   * 
   * @example
   * 100
   */
  totalConversationNum?: number;
  /**
   * @remarks
   * The valid answer rate.
   * 
   * @example
   * 80.0
   */
  validAnswerRate?: string;
  static names(): { [key: string]: string } {
    return {
      dialoguePassRate: 'DialoguePassRate',
      knowledgeHitRate: 'KnowledgeHitRate',
      resolutionRate: 'ResolutionRate',
      resolvedQuestionNum: 'ResolvedQuestionNum',
      statisticalDate: 'StatisticalDate',
      totalConversationNum: 'TotalConversationNum',
      validAnswerRate: 'ValidAnswerRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialoguePassRate: 'string',
      knowledgeHitRate: 'string',
      resolutionRate: 'string',
      resolvedQuestionNum: 'number',
      statisticalDate: 'string',
      totalConversationNum: 'number',
      validAnswerRate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStatisticalDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of conversations.
   * 
   * @example
   * 100
   */
  conversationTotalNum?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 14C39896-AE6D-4643-9C9A-E0566B2C2DDD
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of resolved questions.
   * 
   * @example
   * 80
   */
  resolvedQuestionTotalNum?: number;
  /**
   * @remarks
   * The array of statistical data over time.
   */
  statisticalDataReports?: DescribeStatisticalDataResponseBodyStatisticalDataReports[];
  /**
   * @remarks
   * The total pass rate of multi-turn dialogues.
   * 
   * @example
   * 80.00%
   */
  totalDialoguePassRate?: string;
  /**
   * @remarks
   * The total knowledge base hit rate.
   * 
   * @example
   * 80.00%
   */
  totalKnowledgeHitRate?: string;
  /**
   * @remarks
   * The total resolution rate.
   * 
   * @example
   * 80.00%
   */
  totalResolutionRate?: string;
  /**
   * @remarks
   * The total valid answer rate.
   * 
   * @example
   * 80.00%
   */
  totalValidAnswerRate?: string;
  static names(): { [key: string]: string } {
    return {
      conversationTotalNum: 'ConversationTotalNum',
      requestId: 'RequestId',
      resolvedQuestionTotalNum: 'ResolvedQuestionTotalNum',
      statisticalDataReports: 'StatisticalDataReports',
      totalDialoguePassRate: 'TotalDialoguePassRate',
      totalKnowledgeHitRate: 'TotalKnowledgeHitRate',
      totalResolutionRate: 'TotalResolutionRate',
      totalValidAnswerRate: 'TotalValidAnswerRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationTotalNum: 'number',
      requestId: 'string',
      resolvedQuestionTotalNum: 'number',
      statisticalDataReports: { 'type': 'array', 'itemType': DescribeStatisticalDataResponseBodyStatisticalDataReports },
      totalDialoguePassRate: 'string',
      totalKnowledgeHitRate: 'string',
      totalResolutionRate: 'string',
      totalValidAnswerRate: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.statisticalDataReports)) {
      $dara.Model.validateArray(this.statisticalDataReports);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

