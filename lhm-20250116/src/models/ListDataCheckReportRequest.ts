// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataCheckReportRequest extends $dara.Model {
  /**
   * @remarks
   * The validation job (batch) ID.
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
   * Filters by job status. Valid values:
   * 
   * - 0: INIT (pending).
   * - 1: RUNNING (running).
   * - 2: FINISHED (completed).
   * - 3: STOPPED (stopped).
   * - 4: FAIL (failed).
   * - 6: READY (ready).
   * - 7: SKIPPED (skipped).
   * 
   * @example
   * 0
   */
  jobStatus?: number;
  /**
   * @remarks
   * The page number. Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The table name to filter by.
   * 
   * @example
   * dim_func_with_diff_area_data_d
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      batchId: 'batchId',
      checkResult: 'checkResult',
      jobStatus: 'jobStatus',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
      tableName: 'tableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'number',
      checkResult: 'number',
      jobStatus: 'number',
      pageIndex: 'number',
      pageSize: 'number',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

