// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOnlineEvalTaskResultsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Internal error code. Set only when the response has an error.
   * 
   * @example
   * InvalidInputParams
   */
  code?: string;
  /**
   * @remarks
   * List of evaluation results.
   */
  evaluationResults?: string[];
  /**
   * @remarks
   * Response error message. Set only when the response has an error.
   * 
   * @example
   * must provide trace_id(s) or eval_id
   */
  message?: string;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 22BA9A5A-E3D8-5B4C-90FC-F33F6E5853F8
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of evaluation results that meet the criteria.
   * 
   * @example
   * 123
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

