// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOnlineEvalTaskResultsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the evaluation task. At least one of the trace ID or task ID must be set.
   * 
   * @example
   * 0bb05ae8888c11ef9757faaa2a1ec0c6
   */
  evaluationId?: string;
  /**
   * @remarks
   * The same trace data may have been evaluated by different tasks. If no task ID is specified and there are multiple evaluation results for the same trace ID, this parameter specifies whether to return only the most recent evaluation result.
   * 
   * @example
   * True
   */
  mostRecentResultsOnly?: boolean;
  /**
   * @remarks
   * The current page number. Value range: integers greater than 0. Default value: 1.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, default is 10.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * Specify a set of trace IDs, and only return the evaluation results for these traces. At least one of the trace ID or task ID must be set.
   */
  traceIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      evaluationId: 'EvaluationId',
      mostRecentResultsOnly: 'MostRecentResultsOnly',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      traceIdsShrink: 'TraceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluationId: 'string',
      mostRecentResultsOnly: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      traceIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

