// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAggregateConfigRuleEvaluationResultsResponseBodyEvaluationResults } from "./ListAggregateConfigRuleEvaluationResultsResponseBodyEvaluationResults";


export class ListAggregateConfigRuleEvaluationResultsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the compliance evaluation results returned.
   */
  evaluationResults?: ListAggregateConfigRuleEvaluationResultsResponseBodyEvaluationResults;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A6662516-D056-4325-B6A7-CD3E89C97C39
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
      evaluationResults: ListAggregateConfigRuleEvaluationResultsResponseBodyEvaluationResults,
      requestId: 'string',
    };
  }

  validate() {
    if(this.evaluationResults && typeof (this.evaluationResults as any).validate === 'function') {
      (this.evaluationResults as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

