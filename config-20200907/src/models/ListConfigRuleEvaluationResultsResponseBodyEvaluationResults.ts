// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultList } from "./ListConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultList";


export class ListConfigRuleEvaluationResultsResponseBodyEvaluationResults extends $dara.Model {
  /**
   * @remarks
   * The details of the compliance evaluation result.
   */
  evaluationResultList?: ListConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultList[];
  /**
   * @remarks
   * The maximum number of entries returned per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * IWBjqMYSy0is7zSMGu16****
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      evaluationResultList: 'EvaluationResultList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluationResultList: { 'type': 'array', 'itemType': ListConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultList },
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.evaluationResultList)) {
      $dara.Model.validateArray(this.evaluationResultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

