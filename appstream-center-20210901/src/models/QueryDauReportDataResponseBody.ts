// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDauReportDataResponseBodyDauReportDataModel extends $dara.Model {
  /**
   * @remarks
   * The number of active users within the statistical period. Unit: users.
   * 
   * @example
   * 128
   */
  dau?: number;
  /**
   * @remarks
   * The statistical date. Format: `yyyy-MM-dd`. The string does not contain time zone information and is interpreted as a calendar date in the Asia/Shanghai (UTC+8) time zone.
   * 
   * @example
   * 2026-09-01
   */
  statDate?: string;
  /**
   * @remarks
   * The number of active users who initiated sessions through streaming access within the statistical period. Unit: users.
   * 
   * @example
   * 96
   */
  streamingDau?: number;
  static names(): { [key: string]: string } {
    return {
      dau: 'Dau',
      statDate: 'StatDate',
      streamingDau: 'StreamingDau',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dau: 'number',
      statDate: 'string',
      streamingDau: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDauReportDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. A value of `200` indicates that the request was processed. Other values indicate that the request failed.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The total number of entries that meet the query conditions.
   * 
   * @example
   * 3
   */
  count?: number;
  /**
   * @remarks
   * The list of daily active user report data.
   */
  dauReportDataModel?: QueryDauReportDataResponseBodyDauReportDataModel[];
  /**
   * @remarks
   * The message about the request processing result. If the request is successful, `success` is returned.
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
   * The number of entries per page in the current response.
   * 
   * @example
   * 200
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique identifier of the request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      dauReportDataModel: 'DauReportDataModel',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      dauReportDataModel: { 'type': 'array', 'itemType': QueryDauReportDataResponseBodyDauReportDataModel },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dauReportDataModel)) {
      $dara.Model.validateArray(this.dauReportDataModel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

