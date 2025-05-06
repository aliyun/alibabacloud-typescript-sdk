// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListConfigRuleEvaluationStatisticsResponseBodyEvaluationResults } from "./ListConfigRuleEvaluationStatisticsResponseBodyEvaluationResults";


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

