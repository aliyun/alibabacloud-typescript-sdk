// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataCheckReportStepByJobIdResponseBodyData extends $dara.Model {
  /**
   * @example
   * R[1->1000)
   */
  boundary?: string;
  /**
   * @example
   * 10
   */
  checkColumCount?: number;
  /**
   * @example
   * 1000
   */
  dstCount?: string;
  /**
   * @example
   * SELECT * FROM dst_table;
   */
  dstSql?: string;
  /**
   * @example
   * success
   */
  errMessage?: string;
  /**
   * @example
   * {}
   */
  extra?: string;
  /**
   * @example
   * 2026-01-16T10:00:00Z
   */
  gmtEnd?: string;
  /**
   * @example
   * 2026-01-16T10:00:00Z
   */
  gmtStart?: string;
  /**
   * @example
   * 1
   */
  isConsistent?: number;
  /**
   * @example
   * 10
   */
  metricColumCount?: number;
  /**
   * @example
   * 8
   */
  metricPassColumCount?: number;
  /**
   * @example
   * 8
   */
  passColumCount?: number;
  /**
   * @example
   * 30001
   */
  resultId?: string;
  /**
   * @example
   * ds=20260116
   */
  sourcePtName?: string;
  /**
   * @example
   * 1000
   */
  srcCount?: string;
  /**
   * @example
   * SELECT * FROM src_table;
   */
  srcSql?: string;
  /**
   * @example
   * 2
   */
  status?: number;
  /**
   * @example
   * 1
   */
  stepId?: string;
  /**
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
  data?: ListDataCheckReportStepByJobIdResponseBodyData[];
  /**
   * @example
   * Success
   */
  errCode?: string;
  /**
   * @example
   * success
   */
  errMessage?: string;
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 4C467B38-3910-4477-9B0B-6963D83B4E72
   */
  requestId?: string;
  success?: boolean;
  /**
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

