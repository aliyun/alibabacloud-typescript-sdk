// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAggregateResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultList } from "./ListAggregateResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultList";


export class ListAggregateResourceEvaluationResultsResponseBodyEvaluationResults extends $dara.Model {
  /**
   * @remarks
   * The details of the compliance evaluation result.
   */
  evaluationResultList?: ListAggregateResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultList[];
  /**
   * @remarks
   * The maximum number of entries returned on each page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that was used to initiate the next request.
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
      evaluationResultList: { 'type': 'array', 'itemType': ListAggregateResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultList },
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

