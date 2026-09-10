// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataCheckTaskHistoryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the validation job.
   * 
   * This parameter is required.
   * 
   * @example
   * 20001
   */
  batchId?: number;
  /**
   * @remarks
   * Filters by validation result. Valid values:
   * 
   * - 0: No records.
   * - 1: Passed.
   * - 2: Failed.
   * 
   * @example
   * 0
   */
  checkResult?: number;
  /**
   * @remarks
   * The end of the job creation time filter range. Format: YYYY-MM-DD HH:MM:SS.
   * 
   * @example
   * 2026-01-16 10:00:00
   */
  createEndTime?: string;
  /**
   * @remarks
   * The start of the job creation time filter range. Format: YYYY-MM-DD HH:MM:SS.
   * 
   * @example
   * 2026-01-16 00:00:00
   */
  createStartTime?: string;
  /**
   * @remarks
   * The end of the execution start time filter range. Format: YYYY-MM-DD HH:MM:SS.
   * 
   * @example
   * 2026-01-16 12:00:00
   */
  execEndTime?: string;
  /**
   * @remarks
   * The start of the execution start time filter range. Format: YYYY-MM-DD HH:MM:SS.
   * 
   * @example
   * 2026-01-16 10:00:00
   */
  execStartTime?: string;
  /**
   * @remarks
   * Filters by execution status. Valid values:
   * 
   * - 0: Pending.
   * - 1: Running.
   * - 2: Stopped.
   * - 3: Failed.
   * - 4: Completed.
   * 
   * @example
   * 0
   */
  execStatus?: number;
  /**
   * @remarks
   * The end of the execution end time filter range. Format: YYYY-MM-DD HH:MM:SS.
   * 
   * @example
   * 2026-01-16 12:30:00
   */
  finishEndTime?: string;
  /**
   * @remarks
   * The start of the execution end time filter range. Format: YYYY-MM-DD HH:MM:SS.
   * 
   * @example
   * 2026-01-16 10:30:00
   */
  finishStartTime?: string;
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The maximum number of entries to return per page.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the data validation task.
   * 
   * @example
   * 1001
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      batchId: 'batchId',
      checkResult: 'checkResult',
      createEndTime: 'createEndTime',
      createStartTime: 'createStartTime',
      execEndTime: 'execEndTime',
      execStartTime: 'execStartTime',
      execStatus: 'execStatus',
      finishEndTime: 'finishEndTime',
      finishStartTime: 'finishStartTime',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'number',
      checkResult: 'number',
      createEndTime: 'string',
      createStartTime: 'string',
      execEndTime: 'string',
      execStartTime: 'string',
      execStatus: 'number',
      finishEndTime: 'string',
      finishStartTime: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

