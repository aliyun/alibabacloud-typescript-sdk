// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAppInstanceGroupReportListRequest extends $dara.Model {
  /**
   * @remarks
   * The filter condition for the delivery group ID, which matches the exact ID. If this parameter is not specified, the results are not filtered by ID. You can call [ListAppInstanceGroup](~~ListAppInstanceGroup~~) to obtain the ID.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The filter condition for the delivery group name, which supports inclusion matching. If this parameter is not specified, the results are not filtered by name.
   * 
   * @example
   * R&D workstation
   */
  appInstanceGroupName?: string;
  /**
   * @remarks
   * The business region ID of the delivery group. You can call [ListRegions](~~ListRegions~~) to obtain the ID. If this parameter is not specified, the results are not filtered by business region.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The end date of the statistics. Format: `yyyyMMdd`. This parameter must be specified in pairs with StartDate and cannot be earlier than the start date. The string itself does not carry a time zone and is interpreted as a natural date in the Asia/Shanghai (UTC+8) time zone.
   * 
   * @example
   * 20260930
   */
  endDate?: string;
  /**
   * @remarks
   * The ID of the end user, which is used to filter delivery groups based on the current valid authorization relationship. Before calling this operation, make sure that the user has at least one valid authorization. If the user does not have a valid authorization, the current version does not narrow down the results based on this parameter. If this parameter is not specified, the results are not filtered by user.
   * 
   * @example
   * user01
   */
  endUserId?: string;
  /**
   * @remarks
   * The page number to query. Specify this parameter starting from `1`. If this parameter is not specified, the service processes the request as the first page, but the response may return `0`.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 200. The current operation does not have an additional upper limit for a single page.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID for OpenAPI access, which is used for request authentication and routing. To filter business data by region, use BizRegionId.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The start date of the statistics. Format: `yyyyMMdd`. This parameter must be specified in pairs with EndDate, and the interval includes the start and end dates. The string itself does not carry a time zone and is interpreted as a natural date in the Asia/Shanghai (UTC+8) time zone.
   * 
   * @example
   * 20260901
   */
  startDate?: string;
  /**
   * @remarks
   * The statistical date for a single day. Format: `yyyyMMdd`. If this parameter is specified together with StartDate and EndDate, the results must meet both the single-day and interval conditions. The string itself does not carry a time zone and is interpreted as a natural date in the Asia/Shanghai (UTC+8) time zone.
   * 
   * @example
   * 20260901
   */
  statDate?: string;
  /**
   * @remarks
   * The list of delivery group statuses. Multiple values have an OR relationship. Unrecognized values do not participate in filtering. If all values are unrecognized, it is equivalent to not filtering by status. Valid values:
   * - `DEPLOYING`: deploying
   * - `DEPLOYED`: deployed but not published
   * - `PUBLISHED`: published and available to provide services based on the current configuration
   * - `STOPPING`: stopping
   * - `STOPPED`: stopped
   * - `MAINTAINING`: maintaining
   * - `FAILED`: deployment or execution failed
   * - `MAINTAIN_FAILED`: maintenance failed
   * - `DELETING`: deleting
   * - `DELETED`: deleted
   */
  status?: string[];
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceGroupName: 'AppInstanceGroupName',
      bizRegionId: 'BizRegionId',
      endDate: 'EndDate',
      endUserId: 'EndUserId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      startDate: 'StartDate',
      statDate: 'StatDate',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      appInstanceGroupName: 'string',
      bizRegionId: 'string',
      endDate: 'string',
      endUserId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      startDate: 'string',
      statDate: 'string',
      status: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.status)) {
      $dara.Model.validateArray(this.status);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

