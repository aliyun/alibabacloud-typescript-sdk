// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAppInstanceGroupReportListRequest extends $dara.Model {
  /**
   * @remarks
   * The filter condition for the delivery group ID, which matches the exact ID. If this parameter is not passed, the results are not filtered by ID. You can call [ListAppInstanceGroup](~~ListAppInstanceGroup~~) to obtain the ID.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The filter condition for the delivery group name, which supports inclusion matching. If this parameter is not passed, the results are not filtered by name.
   * 
   * @example
   * R&D workstation
   */
  appInstanceGroupName?: string;
  /**
   * @remarks
   * The business region ID of the delivery group. You can call [ListRegions](~~ListRegions~~) to obtain the ID. If this parameter is not passed, the results are not filtered by business region.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The end date of the statistical period, in the `yyyyMMdd` format. This parameter must be passed in pairs with `StartDate` and cannot be earlier than the start date. The string itself does not carry a time zone and is interpreted as a natural date in the Asia/Shanghai (UTC+8) time zone.
   * 
   * @example
   * 20260930
   */
  endDate?: string;
  /**
   * @remarks
   * The ID of the end user, which is used to filter delivery groups based on the current valid authorization relationship. Before calling this operation, make sure that the user has at least one valid authorization. If no valid authorization exists, the current version does not narrow down the results based on this parameter. If this parameter is not passed, the results are not filtered by user.
   * 
   * @example
   * user01
   */
  endUserId?: string;
  /**
   * @remarks
   * The page number to query. Explicitly pass a value starting from `1`. If this parameter is not passed, the service processes the request as the first page, but the response may return `0`.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. If this parameter is not passed, the default value is 200. The current operation does not have an additional upper limit per page.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID for OpenAPI access, which is used for request authentication and routing. To filter business data by region, use `BizRegionId`.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The start date of the statistical period, in the `yyyyMMdd` format. This parameter must be passed in pairs with `EndDate`, and the interval includes the start and end dates. The string itself does not carry a time zone and is interpreted as a natural date in the Asia/Shanghai (UTC+8) time zone.
   * 
   * @example
   * 20260901
   */
  startDate?: string;
  /**
   * @remarks
   * The statistical date for a single day, in the `yyyyMMdd` format. If this parameter is passed along with `StartDate` and `EndDate`, the results must meet both the single-day and interval conditions. The string itself does not carry a time zone and is interpreted as a natural date in the Asia/Shanghai (UTC+8) time zone.
   * 
   * @example
   * 20260901
   */
  statDate?: string;
  /**
   * @remarks
   * The list of delivery group statuses. Multiple values have an OR relationship. Unrecognized values do not participate in filtering. If all values are unrecognized, it is equivalent to not filtering by status.
   * 
   * Valid values:
   * 
   * - `DEPLOYING`: Deploying.
   * - `DEPLOYED`: Deployed but not published.
   * - `PUBLISHED`: Published and available for service based on the current configuration.
   * - `STOPPING`: Stopping.
   * - `STOPPED`: Stopped.
   * - `MAINTAINING`: Maintaining.
   * - `FAILED`: Deployment or operation failed.
   * - `MAINTAIN_FAILED`: Maintenance failed.
   * - `DELETING`: Deleting.
   * - `DELETED`: Deleted.
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

