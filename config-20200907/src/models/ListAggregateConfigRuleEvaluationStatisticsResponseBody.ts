// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAggregateConfigRuleEvaluationStatisticsResponseBodyEvaluationResults } from "./ListAggregateConfigRuleEvaluationStatisticsResponseBodyEvaluationResults";


export class ListAggregateConfigRuleEvaluationStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The statistics of compliance evaluation results.
   */
  evaluationResults?: ListAggregateConfigRuleEvaluationStatisticsResponseBodyEvaluationResults[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9EFA436B-FC6F-513B-9DB8-C96E6CEBE5E0
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
      evaluationResults: { 'type': 'array', 'itemType': ListAggregateConfigRuleEvaluationStatisticsResponseBodyEvaluationResults },
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

