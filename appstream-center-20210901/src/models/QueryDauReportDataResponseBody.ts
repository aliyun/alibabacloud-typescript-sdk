// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDauReportDataResponseBodyDauReportDataModel extends $dara.Model {
  /**
   * @remarks
   * The number of active users within the statistical epoch. Unit: users.
   * 
   * @example
   * 128
   */
  dau?: number;
  /**
   * @remarks
   * The statistics date. Format: yyyy-MM-dd. The string does not contain a time zone and is interpreted as a natural date in the Asia/Shanghai (UTC+8) time zone.
   * 
   * @example
   * 2026-09-01
   */
  statDate?: string;
  /**
   * @remarks
   * The number of active users who generated sessions through streaming access within the statistical epoch. Unit: users.
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
   * The business status code. A value of 200 indicates that the request is processed successfully. Other values indicate that the processing failed.
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
   * The list of daily active user report data.
   */
  dauReportDataModel?: QueryDauReportDataResponseBodyDauReportDataModel[];
  /**
   * @remarks
   * The description of the request processing result. Typically, success is returned if the request is successful.
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
   * The number of records per page used in the current response.
   * 
   * @example
   * 200
   */
  pageSize?: number;
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

