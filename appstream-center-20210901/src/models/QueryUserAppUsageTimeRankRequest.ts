// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUserAppUsageTimeRankRequest extends $dara.Model {
  /**
   * @remarks
   * The app instance group ID, which is used to filter data for a specified app instance group. If this parameter is not provided, data is not filtered by app instance group.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The business region ID, which is used to filter application usage data. If this parameter is not provided, data is not filtered by business region. You can call the [ListRegions](~~ListRegions~~) operation to obtain the ID.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The end date of the statistical period, in `yyyyMMdd` format. If this parameter is not provided, it defaults to yesterday. The date cannot be earlier than `StartDate`, and cannot be earlier than 90 days before the call date. The query range includes this date. The date is interpreted as a calendar date in the Asia/Shanghai (UTC+8) time zone.
   * 
   * @example
   * 20260907
   */
  endDate?: string;
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
   * The start date of the statistical period, in `yyyyMMdd` format. If this parameter is not provided, it defaults to yesterday. The date cannot be earlier than 90 days before the call date. The query range includes this date. The date is interpreted as a calendar date in the Asia/Shanghai (UTC+8) time zone.
   * 
   * @example
   * 20260901
   */
  startDate?: string;
  /**
   * @remarks
   * The ID of the end user to be queried. This parameter must be explicitly provided. If it is not provided, no matching records are usually returned.
   * 
   * @example
   * user01
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      bizRegionId: 'BizRegionId',
      endDate: 'EndDate',
      regionId: 'RegionId',
      startDate: 'StartDate',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      bizRegionId: 'string',
      endDate: 'string',
      regionId: 'string',
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

