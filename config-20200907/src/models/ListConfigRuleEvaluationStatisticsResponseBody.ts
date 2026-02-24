// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConfigRuleEvaluationStatisticsResponseBodyEvaluationResults extends $dara.Model {
  nonCompliantResourceCnt?: number;
  nonCompliantRuleCnt?: number;
  statisticDate?: string;
  totalResourceCnt?: number;
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
  evaluationResults?: ListConfigRuleEvaluationStatisticsResponseBodyEvaluationResults[];
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

