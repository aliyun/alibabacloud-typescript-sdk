// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEvalResultsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The internal error code. This parameter is returned only when an error occurs.
   * 
   * @example
   * ExecutionFailure
   */
  code?: string;
  /**
   * @remarks
   * The evaluation results.
   */
  evaluationResults?: string[];
  /**
   * @remarks
   * The error message. This parameter is returned only when an error occurs.
   * 
   * @example
   * cannot get data back.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the POP request.
   * 
   * @example
   * 6A87228C-969A-1381-98CF-AE07AE630FA5
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of results that meet the condition.
   * 
   * @example
   * 22
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      evaluationResults: 'EvaluationResults',
      message: 'Message',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      evaluationResults: { 'type': 'array', 'itemType': 'string' },
      message: 'string',
      requestId: 'string',
      totalCount: 'number',
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

