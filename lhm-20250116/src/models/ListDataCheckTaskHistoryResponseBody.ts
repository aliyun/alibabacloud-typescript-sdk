// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataCheckTaskHistoryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The batch ID.
   * 
   * @example
   * 20001
   */
  batchId?: number;
  /**
   * @remarks
   * The business field.
   * 
   * @example
   * lhm
   */
  biz?: string;
  /**
   * @remarks
   * The execution result. Valid values: no record, passed, or not passed.
   * 
   * @example
   * 1
   */
  checkResult?: number;
  /**
   * @remarks
   * The number of checked tables.
   * 
   * @example
   * 100
   */
  checkTableNum?: number;
  /**
   * @remarks
   * The concurrency of the batch.
   * 
   * @example
   * 5
   */
  concurrency?: number;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * user001
   */
  creator?: string;
  /**
   * @remarks
   * The scheduling cycle expression.
   * 
   * @example
   * 0 0 2 * * ?
   */
  cronExp?: string;
  /**
   * @remarks
   * The end time, in the format of YYYY-MM-DD HH:MM:SS.
   * 
   * @example
   * 2026-01-16 12:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * connection timeout
   */
  errorMsg?: string;
  /**
   * @remarks
   * The number of error tables.
   * 
   * @example
   * 5
   */
  errorTableNum?: number;
  /**
   * @remarks
   * The execution status. Valid values: pending, running, stopped, failed, or completed.
   * 
   * @example
   * 1
   */
  execStatus?: number;
  /**
   * @remarks
   * The execution duration, in the format of HH:MM:SS.
   * 
   * @example
   * 2026-01-16 10:00:00
   */
  execTime?: string;
  /**
   * @remarks
   * The reserved field.
   * 
   * @example
   * {}
   */
  extra?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-01-16 10:00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The last modification time.
   * 
   * @example
   * 2026-01-16 10:00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The updater.
   * 
   * @example
   * user001
   */
  operator?: string;
  /**
   * @remarks
   * The original batch ID.
   * 
   * @example
   * 1001
   */
  originBatchId?: number;
  /**
   * @remarks
   * The check pass rate.
   * 
   * @example
   * 0.95
   */
  passProcess?: number;
  /**
   * @remarks
   * The pass rate (export report field), calculated by dividing the number of passed tables by the total number of checked tables. The value is returned as a string with a percent sign and two decimal places (for example, 100.00%). If no checked table data exists, the value is -.
   * 
   * @example
   * 100.00%
   */
  passProcessExport?: string;
  /**
   * @remarks
   * The task progress.
   * 
   * @example
   * 0.95
   */
  progress?: number;
  /**
   * @remarks
   * The check report time, which is the completion time of the last job.
   * 
   * @example
   * 2024-01-01 12:00:00
   */
  reportTime?: string;
  /**
   * @remarks
   * The check report title.
   * 
   * @example
   * Data Validation Report
   */
  reportTitle?: string;
  /**
   * @remarks
   * The scheduled task ID.
   * 
   * @example
   * 1001
   */
  scheduleId?: number;
  /**
   * @remarks
   * The task number.
   * 
   * @example
   * SEQ20260116001
   */
  seqId?: string;
  /**
   * @remarks
   * The number of skipped tables.
   * 
   * @example
   * 3
   */
  skipTableNum?: number;
  /**
   * @remarks
   * The start time, in the format of YYYY-MM-DD HH:MM:SS.
   * 
   * @example
   * 2026-01-16 10:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The number of successful tables.
   * 
   * @example
   * 95
   */
  successfulTableNum?: number;
  static names(): { [key: string]: string } {
    return {
      batchId: 'batchId',
      biz: 'biz',
      checkResult: 'checkResult',
      checkTableNum: 'checkTableNum',
      concurrency: 'concurrency',
      creator: 'creator',
      cronExp: 'cronExp',
      endTime: 'endTime',
      errorMsg: 'errorMsg',
      errorTableNum: 'errorTableNum',
      execStatus: 'execStatus',
      execTime: 'execTime',
      extra: 'extra',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      operator: 'operator',
      originBatchId: 'originBatchId',
      passProcess: 'passProcess',
      passProcessExport: 'passProcessExport',
      progress: 'progress',
      reportTime: 'reportTime',
      reportTitle: 'reportTitle',
      scheduleId: 'scheduleId',
      seqId: 'seqId',
      skipTableNum: 'skipTableNum',
      startTime: 'startTime',
      successfulTableNum: 'successfulTableNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'number',
      biz: 'string',
      checkResult: 'number',
      checkTableNum: 'number',
      concurrency: 'number',
      creator: 'string',
      cronExp: 'string',
      endTime: 'string',
      errorMsg: 'string',
      errorTableNum: 'number',
      execStatus: 'number',
      execTime: 'string',
      extra: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      operator: 'string',
      originBatchId: 'number',
      passProcess: 'number',
      passProcessExport: 'string',
      progress: 'number',
      reportTime: 'string',
      reportTitle: 'string',
      scheduleId: 'number',
      seqId: 'string',
      skipTableNum: 'number',
      startTime: 'string',
      successfulTableNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataCheckTaskHistoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data list returned by the operation. For the element structure, see the child field descriptions.
   */
  data?: ListDataCheckTaskHistoryResponseBodyData[];
  /**
   * @remarks
   * The error code. An empty string is returned if the call is successful.
   * 
   * @example
   * Success
   */
  errCode?: string;
  /**
   * @remarks
   * The error message. An empty string is returned if the call is successful.
   * 
   * @example
   * success
   */
  errMessage?: string;
  /**
   * @remarks
   * The page number, starting from 1.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The page size, which is the number of records returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 4C467B38-3910-4477-9B0B-6963D83B4E72
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. A value of true indicates success. A value of false indicates failure. If the call fails, check errCode and errMessage for troubleshooting.
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of records that match the query conditions. This value is used for pagination.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
      requestId: 'requestId',
      success: 'success',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListDataCheckTaskHistoryResponseBodyData },
      errCode: 'string',
      errMessage: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

