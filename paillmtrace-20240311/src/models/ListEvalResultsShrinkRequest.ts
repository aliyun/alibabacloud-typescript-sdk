// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEvalResultsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The task ID of the evaluation task to which the trace belongs.
   * 
   * @example
   * 0bb05ae2a2dc11ef9757faaa2a1ec0c6
   */
  evaluationId?: string;
  /**
   * @remarks
   * The keyword to query from the evaluation inputs.
   * 
   * @example
   * foo
   */
  keyword?: string;
  /**
   * @remarks
   * The page number. Page starts from page 1. Default value: 1
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: 50. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The trace data IDs.
   */
  recordIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      evaluationId: 'EvaluationId',
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      recordIdsShrink: 'RecordIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluationId: 'string',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      recordIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

