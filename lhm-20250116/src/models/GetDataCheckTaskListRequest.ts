// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataCheckTaskListRequest extends $dara.Model {
  /**
   * @remarks
   * The validation result filter. Valid values:
   * 
   * - 0: no record.
   * - 1: passed.
   * - 2: failed.
   * 
   * @example
   * 0
   */
  checkResult?: number;
  /**
   * @remarks
   * The validation type filter. Valid values:
   * 
   * - 0: row count comparison.
   * - 1: metric comparison.
   * - 2: weak content comparison.
   * 
   * @example
   * 0
   */
  checkType?: number;
  /**
   * @remarks
   * The end of the creation time range. Format: YYYY-MM-DD HH:MM:SS.
   * 
   * @example
   * 2026-01-16 10:00:00
   */
  createEndTime?: string;
  /**
   * @remarks
   * The start of the creation time range. Format: YYYY-MM-DD HH:MM:SS.
   * 
   * @example
   * 2026-01-16 00:00:00
   */
  createStartTime?: string;
  /**
   * @remarks
   * The execution status filter. Valid values:
   * 
   * - 0: pending.
   * - 1: running.
   * - 2: stopped.
   * - 3: failed.
   * - 4: completed.
   * 
   * @example
   * 0
   */
  execStatus?: number;
  /**
   * @remarks
   * Specifies whether scheduling is enabled. Valid values:
   * 
   * - 0: disabled.
   * - 1: enabled.
   * 
   * @example
   * 0
   */
  isScheduled?: number;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The task name. Fuzzy match is supported.
   * 
   * @example
   * data_check_task_demo
   */
  taskName?: string;
  /**
   * @remarks
   * The validation template name. Fuzzy match is supported. The server automatically converts the name into a list of template IDs for filtering.
   * 
   * @example
   * Row Count Validation Template
   */
  templateName?: string;
  /**
   * @remarks
   * The end of the update time range. Format: YYYY-MM-DD HH:MM:SS.
   * 
   * @example
   * 2026-01-14 13:59:03
   */
  updateEndTime?: string;
  /**
   * @remarks
   * The start of the update time range. Format: YYYY-MM-DD HH:MM:SS.
   * 
   * @example
   * 2026-01-14 11:21:53
   */
  updateStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      checkResult: 'checkResult',
      checkType: 'checkType',
      createEndTime: 'createEndTime',
      createStartTime: 'createStartTime',
      execStatus: 'execStatus',
      isScheduled: 'isScheduled',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
      taskName: 'taskName',
      templateName: 'templateName',
      updateEndTime: 'updateEndTime',
      updateStartTime: 'updateStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkResult: 'number',
      checkType: 'number',
      createEndTime: 'string',
      createStartTime: 'string',
      execStatus: 'number',
      isScheduled: 'number',
      pageIndex: 'number',
      pageSize: 'number',
      taskName: 'string',
      templateName: 'string',
      updateEndTime: 'string',
      updateStartTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

