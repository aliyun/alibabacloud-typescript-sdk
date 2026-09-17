// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataCheckReportStepByJobIdResponseBodyData extends $dara.Model {
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
   * The destination data volume. For single SQL verification, this indicates the data volume of the destination result set. For data volume verification and full verification, this indicates the total data volume on the destination.
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
   * The job end time.
   * 
   * @example
   * 2026-01-16T10:00:00Z
   */
  gmtEnd?: string;
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
   * Indicates whether the data is consistent. Valid values:
   * - 0: Inconsistent.
   * - 1: Consistent.
   * 
   * @example
   * 1
   */
  isConsistent?: number;
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
   * The source partition name.
   * 
   * @example
   * ds=20260116
   */
  sourcePtName?: string;
  /**
   * @remarks
   * The source data volume. For single SQL verification, this indicates the data volume of the source result set. For data volume verification and full verification, this indicates the total data volume on the source.
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
   * - 0: Created.
   * - 1: Running.
   * - 2: Completed.
   * - 3: Stopped.
   * - 4: Canceled.
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * The step ID, which uniquely identifies an execution step within the job.
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
      gmtEnd: 'gmtEnd',
      gmtStart: 'gmtStart',
      isConsistent: 'isConsistent',
      metricColumCount: 'metricColumCount',
      metricPassColumCount: 'metricPassColumCount',
      passColumCount: 'passColumCount',
      resultId: 'resultId',
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
      gmtEnd: 'string',
      gmtStart: 'string',
      isConsistent: 'number',
      metricColumCount: 'number',
      metricPassColumCount: 'number',
      passColumCount: 'number',
      resultId: 'string',
      sourcePtName: 'string',
      srcCount: 'string',
      srcSql: 'string',
      status: 'number',
      stepId: 'string',
      targetPtName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataCheckReportStepByJobIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data list returned by the operation. For the element structure, see the child field descriptions.
   */
  data?: ListDataCheckReportStepByJobIdResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListDataCheckReportStepByJobIdResponseBodyData },
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

