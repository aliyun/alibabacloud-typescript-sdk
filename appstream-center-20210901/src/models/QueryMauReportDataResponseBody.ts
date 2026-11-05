// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMauReportDataResponseBodyMauReportDataModel extends $dara.Model {
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
   * The number of monthly active users in the statistical month. Unit: users.
   * 
   * @example
   * 286
   */
  mau?: number;
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
   * The statistical cutoff date used for the month. Format: `yyyy-MM-dd`. For the last month, the date is usually the day before the requested `EndDate`. The date is interpreted as a natural date in the Asia/Shanghai (UTC+8) time zone.
   * 
   * @example
   * 2026-09-29
   */
  statDate?: string;
  /**
   * @remarks
   * The statistical month. Format: `yyyy-MM`. The month is interpreted as a natural month in the Asia/Shanghai (UTC+8) time zone.
   * 
   * @example
   * 2026-09
   */
  statMonth?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      mau: 'Mau',
      regionId: 'RegionId',
      statDate: 'StatDate',
      statMonth: 'StatMonth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      mau: 'number',
      regionId: 'string',
      statDate: 'string',
      statMonth: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMauReportDataResponseBody extends $dara.Model {
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
   * The total number of entries that meet the query conditions.
   * 
   * @example
   * 3
   */
  count?: number;
  /**
   * @remarks
   * The list of monthly active user report data.
   */
  mauReportDataModel?: QueryMauReportDataResponseBodyMauReportDataModel[];
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
      mauReportDataModel: 'MauReportDataModel',
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
      mauReportDataModel: { 'type': 'array', 'itemType': QueryMauReportDataResponseBodyMauReportDataModel },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.mauReportDataModel)) {
      $dara.Model.validateArray(this.mauReportDataModel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

