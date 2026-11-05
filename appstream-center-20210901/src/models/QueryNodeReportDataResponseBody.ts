// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryNodeReportDataResponseBodyReportDataModel extends $dara.Model {
  /**
   * @remarks
   * The total number of nodes corresponding to the record. Unit: nodes.
   * 
   * @example
   * 20
   */
  nodeCount?: number;
  /**
   * @remarks
   * The number of pay-as-you-go nodes in the record. Unit: nodes.
   * 
   * @example
   * 8
   */
  postpaidNodeCount?: number;
  /**
   * @remarks
   * The number of subscription nodes in the record. Unit: nodes.
   * 
   * @example
   * 12
   */
  prepaidNodeCount?: number;
  /**
   * @remarks
   * The statistical time. The `1d` granularity returns `yyyy-MM-dd`. The `1m`, `30m`, and `6h` granularities return `yyyy-MM-dd HH:mm`. The string itself does not carry a time zone and is interpreted as Asia/Shanghai (UTC+8).
   * 
   * @example
   * 2026-09-01
   */
  statDate?: string;
  static names(): { [key: string]: string } {
    return {
      nodeCount: 'NodeCount',
      postpaidNodeCount: 'PostpaidNodeCount',
      prepaidNodeCount: 'PrepaidNodeCount',
      statDate: 'StatDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeCount: 'number',
      postpaidNodeCount: 'number',
      prepaidNodeCount: 'number',
      statDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryNodeReportDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. `200` indicates that the request is successful. Other values indicate that the request failed.
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
   * The description of the request processing result. `success` is usually returned when the request is successful.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The page number corresponding to the current response.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page used in the current response.
   * 
   * @example
   * 200
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of node report data.
   */
  reportDataModel?: QueryNodeReportDataResponseBodyReportDataModel[];
  /**
   * @remarks
   * The unique identifier of the request, which can be used to troubleshoot the request.
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
      reportDataModel: { 'type': 'array', 'itemType': QueryNodeReportDataResponseBodyReportDataModel },
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

