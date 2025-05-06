// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListConfigRuleEvaluationResultsResponseBodyEvaluationResults } from "./ListConfigRuleEvaluationResultsResponseBodyEvaluationResults";


export class ListConfigRuleEvaluationResultsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The compliance evaluation results returned.
   */
  evaluationResults?: ListConfigRuleEvaluationResultsResponseBodyEvaluationResults;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2A4A33BD-8186-4D60-91B9-42174EED75B5
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
      evaluationResults: ListConfigRuleEvaluationResultsResponseBodyEvaluationResults,
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

