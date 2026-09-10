// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataCheckReportStepRequest extends $dara.Model {
  /**
   * @remarks
   * The verification result filter. Valid values:
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
   * The job database ID (integer) that identifies a verification sub-job. This parameter differs in format from the UUID-format sub-job ID (string) used in the operation that queries step details by UUID. The two are not interchangeable.
   * 
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  jobId?: number;
  /**
   * @remarks
   * The step status filter. Valid values:
   * 
   * - 0: INIT.
   * - 1: RUNNING.
   * - 2: FINISHED.
   * - 3: STOPPED.
   * - 4: FAIL.
   * - 6: READY.
   * - 7: SKIPPED.
   * 
   * @example
   * 0
   */
  jobStatus?: number;
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
  static names(): { [key: string]: string } {
    return {
      checkResult: 'checkResult',
      jobId: 'jobId',
      jobStatus: 'jobStatus',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkResult: 'number',
      jobId: 'number',
      jobStatus: 'number',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

