// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUserUsageReportRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the app instance group, which is used to filter data for a specified app instance group. You can call the [ListAppInstanceGroup](~~ListAppInstanceGroup~~) operation to obtain the ID. If you do not specify this parameter, data is not filtered by app instance group. To skip this filter, omit the parameter. An empty string is different from an omitted parameter and is used as a filter value in the query.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The ID of the business region, which is used to filter report data. You can call the [ListRegions](~~ListRegions~~) operation to obtain the ID. To skip this filter, omit the parameter. An empty string is different from an omitted parameter and is used as a filter value in the query.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The filter condition for the user connection status. The value is not case-sensitive. An unrecognized value is equivalent to not filtering by connection status.
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
   * The end time of the statistics. **This parameter is required. You must specify both `StartDate` and `EndDate`**. Format: `yyyy-MM-dd HH:mm:ss`. The time is in Beijing time (UTC+8). Specify the time in Beijing time without appending `Z` or a time zone offset. The operation filters calendar day data based on the provided calendar dates without time zone conversion. The hour, minute, and second parts are not involved in day-level filtering.
   * 
   * The interval between the start and end times calculated by full months must not exceed 60 months. Make sure that `EndDate` is not earlier than `StartDate`. The current operation does not independently verify the chronological order of the times. A reversed date range may return empty data. Do not rely on parameter errors to identify this situation.
   * 
   * If either time parameter is missing, the format is incorrect, or the range exceeds the limit, `InvalidParameter.StartDate/EndDate` (HTTP status code: 400) is returned.
   * 
   * @example
   * 2026-09-02 00:00:00
   */
  endDate?: string;
  /**
   * @remarks
   * The page number to query. Specify a value starting from `1`. If you do not specify this parameter, the service processes the request as the first page, but the response may echo `0`.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page. Default value: `200`. If the value is greater than `1500`, the actual query processes it as `1500`. Specify a value from 1 to 1,500. The `PageSize` field in the response returns the echo request value, which does not necessarily mean that this value is adopted or that this number of records is actually returned.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The product type. **This parameter must be explicitly specified**. The value is not case-sensitive. If this parameter is not provided or an unrecognized type is specified, `InvalidParameter.ProductType` (HTTP status code: 400) is returned.
   * 
   * Valid values:
   * 
   * - `CloudGame`: Cloud gaming.
   * - `CloudApp`: Wuying Cloud App.
   * - `CloudBrowser`: Cloud browser.
   * - `CloudDesktop`: Cloud desktop.
   * - `ImageBuilder`: Image builder.
   * - `ImageValidate`: Image validation.
   * - `AndroidCloud`: Cloud phone.
   * - `GpuRender`: GPU rendering.
   * - `AndroidGpuRender`: Cloud phone GPU rendering.
   * - `WuyingServer`: Enterprise workstation.
   * - `GpuProxy`: GPU remote rendering proxy.
   * - `GpuCache`: GPU remote rendering cache.
   * - `AIAgent`: AI agent service.
   * - `HostedDesktop`: Hosted computer.
   * - `WuyingWorkstation`: Personal Edition container workstation.
   * - `WuyingWorkstationBusiness`: Business Edition container workstation.
   * - `WuyingWorkstationTeam`: Team Edition container workstation.
   * 
   * The query returns only existing statistical records for the current account within the specified product and time range. Specifying a recognized type does not necessarily mean that report data is available.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @remarks
   * The start time of the statistics. **This parameter is required. You must specify both `StartDate` and `EndDate`**. Format: `yyyy-MM-dd HH:mm:ss`. The time is in Beijing time (UTC+8). Specify the time in Beijing time without appending `Z` or a time zone offset. The operation filters calendar day data based on the provided calendar dates without time zone conversion. The hour, minute, and second parts are not involved in day-level filtering.
   * 
   * The interval between the start and end times calculated by full months must not exceed 60 months. Make sure that `EndDate` is not earlier than `StartDate`. The current operation does not independently verify the chronological order of the times. A reversed date range may return empty data. Do not rely on parameter errors to identify this situation.
   * 
   * If either time parameter is missing, the format is incorrect, or the range exceeds the limit, `InvalidParameter.StartDate/EndDate` (HTTP status code: 400) is returned.
   * 
   * @example
   * 2026-09-01 00:00:00
   */
  startDate?: string;
  /**
   * @remarks
   * The ID of the end user, which is used to precisely filter users. If you do not specify this parameter, data is not filtered by user. To skip this filter, omit the parameter. An empty string is different from an omitted parameter and is used as a filter value in the query.
   * 
   * @example
   * user01
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      bizRegionId: 'BizRegionId',
      connectionStatus: 'ConnectionStatus',
      endDate: 'EndDate',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productType: 'ProductType',
      startDate: 'StartDate',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      bizRegionId: 'string',
      connectionStatus: 'string',
      endDate: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      productType: 'string',
      startDate: 'string',
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

