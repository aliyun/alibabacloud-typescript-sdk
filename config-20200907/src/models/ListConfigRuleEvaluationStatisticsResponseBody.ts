// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConfigRuleEvaluationStatisticsResponseBodyEvaluationResults extends $dara.Model {
  /**
   * @remarks
   * The number of resources that are evaluated as non-compliant.
   * 
   * @example
   * 30
   */
  nonCompliantResourceCnt?: number;
  /**
   * @remarks
   * The number of rules based on which resources are evaluated as non-compliant.
   * 
   * @example
   * 5
   */
  nonCompliantRuleCnt?: number;
  /**
   * @remarks
   * The date on which the statistics are obtained.
   * 
   * @example
   * 2023-06-27
   */
  statisticDate?: string;
  /**
   * @remarks
   * The total number of resources.
   * 
   * @example
   * 91
   */
  totalResourceCnt?: number;
  /**
   * @remarks
   * The total number of rules.
   * 
   * @example
   * 13
   */
  totalRuleCnt?: number;
  static names(): { [key: string]: string } {
    return {
      nonCompliantResourceCnt: 'NonCompliantResourceCnt',
      nonCompliantRuleCnt: 'NonCompliantRuleCnt',
      statisticDate: 'StatisticDate',
      totalResourceCnt: 'TotalResourceCnt',
      totalRuleCnt: 'TotalRuleCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonCompliantResourceCnt: 'number',
      nonCompliantRuleCnt: 'number',
      statisticDate: 'string',
      totalResourceCnt: 'number',
      totalRuleCnt: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigRuleEvaluationStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The statistics of compliance evaluation results.
   */
  evaluationResults?: ListConfigRuleEvaluationStatisticsResponseBodyEvaluationResults[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4FF2B787-347E-5299-A196-2C0448DEA341
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      evaluationResults: 'EvaluationResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluationResults: { 'type': 'array', 'itemType': ListConfigRuleEvaluationStatisticsResponseBodyEvaluationResults },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.evaluationResults)) {
      $dara.Model.validateArray(this.evaluationResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

