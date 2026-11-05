// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUserUsageReportRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the app instance group, which is used to filter data for a specified app instance group. You can call the [ListAppInstanceGroup](~~ListAppInstanceGroup~~) operation to obtain the ID. If you do not specify this parameter, data is not filtered by app instance group.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The ID of the business region, which is used to filter report data. You can call the [ListRegions](~~ListRegions~~) operation to obtain the ID.
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
   * - Connected: At least one currently connected session exists.
   * - Disconnected: The session binding is retained, but no currently connected session exists.
   * - Unbound: No session binding exists.
   * 
   * @example
   * Connected
   */
  connectionStatus?: string;
  /**
   * @remarks
   * The end time of the statistics. **Required**. Format: `yyyy-MM-dd HH:mm:ss`. The value cannot be earlier than StartDate. The server converts the time to the `yyyyMMdd` format and calculates statistics based on a closed interval of natural days. The hours, minutes, and seconds are not involved in day-level filtering. The time span cannot exceed 60 months. The string itself does not carry a time zone and is interpreted as Asia/Shanghai (UTC+8).
   * 
   * @example
   * 2026-09-02 00:00:00
   */
  endDate?: string;
  /**
   * @remarks
   * The page number. We recommend that you explicitly specify a value starting from `1`. If you do not specify this parameter, the server processes the request as the first page, but the response may return `0`.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 200. If the value is greater than 1,500, it is processed as 1,500.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The product type. **Required**.
   * 
   * Valid values:
   * 
   * - CloudApp: WUYING Cloud App.
   * - CloudBrowser: Cloud Browser.
   * - WuyingServer: Enterprise Edition workstation.
   * - WuyingWorkstation: Personal Edition container workstation.
   * - WuyingWorkstationTeam: Team Edition container workstation.
   * - WuyingWorkstationBusiness: Dedicated Edition container workstation.
   * - AndroidCloud: Cloud Phone.
   * - AIAgent: AgentBay (AI agent).
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @remarks
   * The start time of the statistics. **Required**. Format: `yyyy-MM-dd HH:mm:ss`. The server converts the time to the `yyyyMMdd` format and calculates statistics based on a closed interval of natural days. The hours, minutes, and seconds are not involved in day-level filtering. The time span cannot exceed 60 months. The string itself does not carry a time zone and is interpreted as Asia/Shanghai (UTC+8).
   * 
   * @example
   * 2026-09-01 00:00:00
   */
  startDate?: string;
  /**
   * @remarks
   * The ID of the end user, which is used to precisely filter users. If you do not specify this parameter, data is not filtered by user.
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

