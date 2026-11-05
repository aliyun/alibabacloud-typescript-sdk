// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryConnectionReportResponseBodyConnectionReportDataModel extends $dara.Model {
  /**
   * @remarks
   * The ID of the app instance group.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The average duration of successful connections. In the current version, the return value is in milliseconds. Parse it as milliseconds. The `Seconds` in the field name is retained for compatibility and cannot be used as the unit basis. This value may not be returned when there are no successful connections.
   * 
   * @example
   * 1250
   */
  connectionAvgDurationSeconds?: number;
  /**
   * @remarks
   * The number of failed connections within the statistical window. Unit: count.
   * 
   * @example
   * 2
   */
  connectionFailureCount?: number;
  /**
   * @remarks
   * The number of successful connections within the statistical window. Unit: count.
   * 
   * @example
   * 98
   */
  connectionSuccessCount?: number;
  /**
   * @remarks
   * The connection success rate, which is calculated by dividing the number of successful connections by the sum of successful and failed connections. The value ranges from 0 to 1. Multiply by 100 to get the percentage. This value may not be returned when there are no connection records.
   * 
   * @example
   * 0.98
   */
  connectionSuccessRate?: number;
  /**
   * @remarks
   * The ID of the business region to which the report data belongs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The end time of the statistical window. Format: `yyyy-MM-dd HH:mm:ss`. The string itself does not carry a time zone and is interpreted as Asia/Shanghai (UTC+8).
   * 
   * @example
   * 2026-09-01 10:05:00
   */
  statEndDate?: string;
  /**
   * @remarks
   * The start time of the statistical window. Format: `yyyy-MM-dd HH:mm:ss`. The string itself does not carry a time zone and is interpreted as Asia/Shanghai (UTC+8).
   * 
   * @example
   * 2026-09-01 10:00:00
   */
  statStartDate?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      connectionAvgDurationSeconds: 'ConnectionAvgDurationSeconds',
      connectionFailureCount: 'ConnectionFailureCount',
      connectionSuccessCount: 'ConnectionSuccessCount',
      connectionSuccessRate: 'ConnectionSuccessRate',
      regionId: 'RegionId',
      statEndDate: 'StatEndDate',
      statStartDate: 'StatStartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      connectionAvgDurationSeconds: 'number',
      connectionFailureCount: 'number',
      connectionSuccessCount: 'number',
      connectionSuccessRate: 'number',
      regionId: 'string',
      statEndDate: 'string',
      statStartDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConnectionReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. A value of `200` indicates that the request is processed successfully. Other values indicate that the request fails to be processed.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The list of connection report data.
   */
  connectionReportDataModel?: QueryConnectionReportResponseBodyConnectionReportDataModel[];
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
   * The unique identifier of the current request, which can be used to troubleshoot the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      connectionReportDataModel: 'ConnectionReportDataModel',
      count: 'Count',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      connectionReportDataModel: { 'type': 'array', 'itemType': QueryConnectionReportResponseBodyConnectionReportDataModel },
      count: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.connectionReportDataModel)) {
      $dara.Model.validateArray(this.connectionReportDataModel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

