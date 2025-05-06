// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListResourceEvaluationResultsResponseBodyEvaluationResults } from "./ListResourceEvaluationResultsResponseBodyEvaluationResults";


export class ListResourceEvaluationResultsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the compliance evaluation results returned.
   */
  evaluationResults?: ListResourceEvaluationResultsResponseBodyEvaluationResults;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 25C89DDB-BB79-487D-88C3-4A561F21EFC4
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
      evaluationResults: ListResourceEvaluationResultsResponseBodyEvaluationResults,
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

