// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUserUsageReportResponseBodyUserUsageReportDataModel extends $dara.Model {
  /**
   * @remarks
   * The ID of the app instance group to which the user usage record belongs.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The name of the app instance group to which the user usage record belongs.
   * 
   * @example
   * R&D workstation group
   */
  appInstanceGroupName?: string;
  /**
   * @remarks
   * The current connection status of the user.
   * 
   * Valid values:
   * 
   * - `Connected`: At least one currently connected session exists.
   * - `Disconnected`: The session binding is retained, but no currently connected session exists.
   * - `Unbound`: No session binding exists.
   * 
   * @example
   * Connected
   */
  connectionStatus?: string;
  /**
   * @remarks
   * The last connection time. Format: `yyyy-MM-dd HH:mm:ss`. If a current session binding record exists, the connection time of this record is used. Otherwise, the historical connection record is used. If no available connection time exists, `-` is returned. This time is not limited by the statistical date range in the request.
   * 
   * The time is in Beijing time (UTC+8). The returned string does not carry `Z` or a time zone offset. For example, `2026-09-01 10:00:00` indicates 10:00:00 on September 1, 2026, Beijing time. Do not parse it as UTC time.
   * 
   * @example
   * 2026-09-01 10:00:00
   */
  lastConnectedTime?: string;
  /**
   * @remarks
   * The current version does not return a valid region ID. Callers should not rely on this field. To filter by business region, use the `BizRegionId` request parameter.
   * 
   * @example
   * null
   */
  regionId?: string;
  /**
   * @remarks
   * The cumulative session persistence duration within the query range, which is the duration that the user occupies the session from attach to session release. Multiple sessions under the same app instance group are accumulated. Unit: hours.
   * 
   * @example
   * 3.5
   */
  sessionsHoldDuration?: number;
  /**
   * @remarks
   * The cumulative user usage duration within the query range. The usage duration of the same user under the same app instance group is aggregated by day. Unit: hours.
   * 
   * @example
   * 2
   */
  usageDuration?: number;
  /**
   * @remarks
   * The ID of the end user.
   * 
   * @example
   * user01
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceGroupName: 'AppInstanceGroupName',
      connectionStatus: 'ConnectionStatus',
      lastConnectedTime: 'LastConnectedTime',
      regionId: 'RegionId',
      sessionsHoldDuration: 'SessionsHoldDuration',
      usageDuration: 'UsageDuration',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      appInstanceGroupName: 'string',
      connectionStatus: 'string',
      lastConnectedTime: 'string',
      regionId: 'string',
      sessionsHoldDuration: 'number',
      usageDuration: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserUsageReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business processing status code. **A successful response may not contain this field. Do not use `Code=200` as a necessary condition for success.** This field is not equivalent to the HTTP status code. If the request fails, handle it based on the HTTP status code, error code, and error message.
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
   * The description of the business processing result. **A successful response may not contain this field. Do not rely on the fixed `success` text.** If the request fails, read the specific error message based on the error code.
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
   * The number of records per page in the request. If this parameter is not specified, the default value `200` is returned. If the requested value exceeds `1500`, this field still returns the echo request value, but the actual query uses a maximum of `1500`. Refer to the length of the data list for the actual number of returned records.
   * 
   * @example
   * 200
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique identifier of the request, which can be used to troubleshoot the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of user usage data, sorted in descending order of cumulative usage duration.
   */
  userUsageReportDataModel?: QueryUserUsageReportResponseBodyUserUsageReportDataModel[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      userUsageReportDataModel: 'UserUsageReportDataModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      userUsageReportDataModel: { 'type': 'array', 'itemType': QueryUserUsageReportResponseBodyUserUsageReportDataModel },
    };
  }

  validate() {
    if(Array.isArray(this.userUsageReportDataModel)) {
      $dara.Model.validateArray(this.userUsageReportDataModel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

