// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataCheckReportStepResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The shard boundary information.
   * 
   * @example
   * R[1->1000)
   */
  boundary?: string;
  /**
   * @remarks
   * The number of verified fields.
   * 
   * @example
   * 10
   */
  checkColumCount?: number;
  /**
   * @remarks
   * The destination data volume. For single-SQL verification, this indicates the data volume of the destination result set. For data volume verification and full verification, this indicates the total data volume on the destination.
   * 
   * @example
   * 1000
   */
  dstCount?: string;
  /**
   * @remarks
   * The SQL statement executed on the destination.
   * 
   * @example
   * SELECT * FROM dst_table;
   */
  dstSql?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * success
   */
  errMessage?: string;
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
   * 2026-01-16T10:00:00Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The job end time.
   * 
   * @example
   * 2026-01-16T10:00:00Z
   */
  gmtEnd?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2026-01-16T10:00:00Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The job start time.
   * 
   * @example
   * 2026-01-16T10:00:00Z
   */
  gmtStart?: string;
  /**
   * @remarks
   * The primary key ID that uniquely identifies a record.
   * 
   * @example
   * 10001
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether the data is consistent. Valid values:
   * 
   * - 0: inconsistent.
   * - 1: consistent.
   * 
   * @example
   * 1
   */
  isConsistent?: number;
  /**
   * @remarks
   * The unique job ID.
   * 
   * @example
   * 10001
   */
  jobId?: number;
  /**
   * @remarks
   * The number of verified metrics.
   * 
   * @example
   * 10
   */
  metricColumCount?: number;
  /**
   * @remarks
   * The number of metrics that passed verification.
   * 
   * @example
   * 8
   */
  metricPassColumCount?: number;
  /**
   * @remarks
   * The number of fields that passed verification.
   * 
   * @example
   * 8
   */
  passColumCount?: number;
  /**
   * @remarks
   * The unique ID of the verification result.
   * 
   * @example
   * 30001
   */
  resultId?: string;
  /**
   * @remarks
   * The list of label names.
   */
  signNameList?: string[];
  /**
   * @remarks
   * The source partition name.
   * 
   * @example
   * ds=20260116
   */
  sourcePtName?: string;
  /**
   * @remarks
   * The source data volume. For single-SQL verification, this indicates the data volume of the source result set. For data volume verification and full verification, this indicates the total data volume on the source.
   * 
   * @example
   * 1000
   */
  srcCount?: string;
  /**
   * @remarks
   * The SQL statement executed on the source.
   * 
   * @example
   * SELECT * FROM src_table;
   */
  srcSql?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - 0: created.
   * - 1: running.
   * - 2: completed.
   * - 3: stopped.
   * - 4: canceled.
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * The step ID that uniquely identifies an execution step within the job.
   * 
   * @example
   * 1
   */
  stepId?: string;
  /**
   * @remarks
   * The destination partition name.
   * 
   * @example
   * ds=20260116
   */
  targetPtName?: string;
  static names(): { [key: string]: string } {
    return {
      boundary: 'boundary',
      checkColumCount: 'checkColumCount',
      dstCount: 'dstCount',
      dstSql: 'dstSql',
      errMessage: 'errMessage',
      extra: 'extra',
      gmtCreate: 'gmtCreate',
      gmtEnd: 'gmtEnd',
      gmtModified: 'gmtModified',
      gmtStart: 'gmtStart',
      id: 'id',
      isConsistent: 'isConsistent',
      jobId: 'jobId',
      metricColumCount: 'metricColumCount',
      metricPassColumCount: 'metricPassColumCount',
      passColumCount: 'passColumCount',
      resultId: 'resultId',
      signNameList: 'signNameList',
      sourcePtName: 'sourcePtName',
      srcCount: 'srcCount',
      srcSql: 'srcSql',
      status: 'status',
      stepId: 'stepId',
      targetPtName: 'targetPtName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundary: 'string',
      checkColumCount: 'number',
      dstCount: 'string',
      dstSql: 'string',
      errMessage: 'string',
      extra: 'string',
      gmtCreate: 'string',
      gmtEnd: 'string',
      gmtModified: 'string',
      gmtStart: 'string',
      id: 'number',
      isConsistent: 'number',
      jobId: 'number',
      metricColumCount: 'number',
      metricPassColumCount: 'number',
      passColumCount: 'number',
      resultId: 'string',
      signNameList: { 'type': 'array', 'itemType': 'string' },
      sourcePtName: 'string',
      srcCount: 'string',
      srcSql: 'string',
      status: 'number',
      stepId: 'string',
      targetPtName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.signNameList)) {
      $dara.Model.validateArray(this.signNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataCheckReportStepResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data list returned by the operation. For the structure of each element, see the child field descriptions.
   */
  data?: ListDataCheckReportStepResponseBodyData[];
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
   * The request ID, which is used to locate and troubleshoot issues with this call.
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
   * The total number of records that meet the query conditions. This value is used for pagination.
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
      data: { 'type': 'array', 'itemType': ListDataCheckReportStepResponseBodyData },
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

