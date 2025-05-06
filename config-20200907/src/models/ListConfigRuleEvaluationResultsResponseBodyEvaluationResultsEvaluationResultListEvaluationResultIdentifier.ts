// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifierEvaluationResultQualifier } from "./ListConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifierEvaluationResultQualifier";


export class ListConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifier extends $dara.Model {
  /**
   * @remarks
   * The information about the evaluated resource in the compliance evaluation result.
   */
  evaluationResultQualifier?: ListConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifierEvaluationResultQualifier;
  /**
   * @remarks
   * The timestamp when the compliance evaluation was performed. Unit: milliseconds.
   * 
   * @example
   * 1622802307081
   */
  orderingTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      evaluationResultQualifier: 'EvaluationResultQualifier',
      orderingTimestamp: 'OrderingTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluationResultQualifier: ListConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifierEvaluationResultQualifier,
      orderingTimestamp: 'number',
    };
  }

  validate() {
    if(this.evaluationResultQualifier && typeof (this.evaluationResultQualifier as any).validate === 'function') {
      (this.evaluationResultQualifier as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

