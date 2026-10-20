// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AnalysisTask extends $dara.Model {
  /**
   * @remarks
   * The task completion time as a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1789747260000
   */
  completedAt?: number;
  /**
   * @remarks
   * The task creation time as a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1789747200000
   */
  createdAt?: number;
  /**
   * @remarks
   * The error code for the task failure.
   * 
   * @example
   * NO_VALID_ATTRIBUTION_LABEL
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message for the task failure.
   * 
   * @example
   * No valid attribution label was found
   */
  errorMessage?: string;
  /**
   * @remarks
   * The generated analysis report. This field is typically not returned by list operations.
   */
  report?: { [key: string]: any };
  /**
   * @remarks
   * The number of evaluation details selected by the user.
   * 
   * @example
   * 20
   */
  selectedCount?: number;
  /**
   * @remarks
   * The task status. Valid values: PENDING, RUNNING, SUCCEEDED, PARTIAL_SUCCEEDED, and FAILED.
   * 
   * @example
   * SUCCEEDED
   */
  status?: string;
  /**
   * @remarks
   * The analysis task ID.
   * 
   * @example
   * analysis-task-8b36f2e2b1f94f9c91ce7a4b0f6d9c25
   */
  taskId?: string;
  /**
   * @remarks
   * The analysis task name.
   * 
   * @example
   * Low-score sample attribution analysis
   */
  taskName?: string;
  /**
   * @remarks
   * The analysis task type.
   * 
   * @example
   * ATTRIBUTION_SUMMARY
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      completedAt: 'completedAt',
      createdAt: 'createdAt',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      report: 'report',
      selectedCount: 'selectedCount',
      status: 'status',
      taskId: 'taskId',
      taskName: 'taskName',
      taskType: 'taskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedAt: 'number',
      createdAt: 'number',
      errorCode: 'string',
      errorMessage: 'string',
      report: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      selectedCount: 'number',
      status: 'string',
      taskId: 'string',
      taskName: 'string',
      taskType: 'string',
    };
  }

  validate() {
    if(this.report) {
      $dara.Model.validateMap(this.report);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

