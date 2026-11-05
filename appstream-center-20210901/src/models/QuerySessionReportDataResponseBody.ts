// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySessionReportDataResponseBodyReportDataModel extends $dara.Model {
  /**
   * @remarks
   * The number of sessions in the connected state in this record.
   * 
   * @example
   * 30
   */
  connectSessionCount?: number;
  /**
   * @remarks
   * The total number of sessions corresponding to this record.
   * 
   * @example
   * 36
   */
  sessionCount?: number;
  /**
   * @remarks
   * The statistical time. The `1d` granularity returns `yyyy-MM-dd`. The `1m`, `30m`, and `6h` granularities return `yyyy-MM-dd HH:mm`. The string itself does not carry a time zone and is interpreted in the Asia/Shanghai (UTC+8) time zone.
   * 
   * @example
   * 2026-09-01
   */
  statDate?: string;
  /**
   * @remarks
   * The number of sessions established through streaming access in this record.
   * 
   * @example
   * 24
   */
  streamingSessionCount?: number;
  static names(): { [key: string]: string } {
    return {
      connectSessionCount: 'ConnectSessionCount',
      sessionCount: 'SessionCount',
      statDate: 'StatDate',
      streamingSessionCount: 'StreamingSessionCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectSessionCount: 'number',
      sessionCount: 'number',
      statDate: 'string',
      streamingSessionCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySessionReportDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. A value of `200` indicates that the request is successful. Other values indicate that the request failed.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The total number of records that meet the query conditions.
   * 
   * @example
   * 3
   */
  count?: number;
  /**
   * @remarks
   * The description of the request processing result. If the request is successful, `success` is usually returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The page number of the current response.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page in the current response.
   * 
   * @example
   * 200
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of session report data.
   */
  reportDataModel?: QuerySessionReportDataResponseBodyReportDataModel[];
  /**
   * @remarks
   * The unique identifier of the request, which can be used to troubleshoot request issues.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      reportDataModel: 'ReportDataModel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      reportDataModel: { 'type': 'array', 'itemType': QuerySessionReportDataResponseBodyReportDataModel },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.reportDataModel)) {
      $dara.Model.validateArray(this.reportDataModel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

