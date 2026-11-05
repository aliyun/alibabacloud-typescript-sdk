// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySessionReportDataRequest extends $dara.Model {
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
   * The end time of the statistics. **Required**. Format: `yyyy-MM-dd HH:mm:ss`. The end time cannot be earlier than `StartDate`. The query span must meet the limits corresponding to `StatDateType`. The string itself does not carry a time zone and is interpreted in the Asia/Shanghai (UTC+8) time zone.
   * 
   * @example
   * 2026-09-02 00:00:00
   */
  endDate?: string;
  /**
   * @remarks
   * The page number of the page to return. We recommend that you explicitly specify a value starting from `1`. If you do not specify this parameter, the service processes the request as the first page, but the response may return `0`.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 200. If the specified value is greater than 1,500, the value is processed as 1,500.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The product type. Optional. If you do not specify this parameter, data is queried for Wuying Cloud App.
   * 
   * Specify the value in the exact case as follows. Data that cannot be matched is not returned.
   * 
   * Valid values:
   * 
   * - `CloudApp`: Wuying Cloud App.
   * - `CloudBrowser`: Cloud Browser.
   * - `WuyingServer`: Enterprise Edition workstation.
   * - `WuyingWorkstation`: Personal Edition Linggou container workstation.
   * - `WuyingWorkstationTeam`: Linggou Team Edition container workstation.
   * - `WuyingWorkstationBusiness`: Linggou Dedicated Edition container workstation.
   * - `AndroidCloud`: Cloud Phone.
   * - `AIAgent`: AgentBay (AI agent).
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @remarks
   * The start time of the statistics. **Required**. Format: `yyyy-MM-dd HH:mm:ss`. The `1d` granularity aggregates data by date, while other granularities are accurate to the minute. The query includes both the start and end boundaries. The string itself does not carry a time zone and is interpreted in the Asia/Shanghai (UTC+8) time zone.
   * 
   * @example
   * 2026-09-01 00:00:00
   */
  startDate?: string;
  /**
   * @remarks
   * The statistical granularity. **Required**.
   * 
   * Valid values:
   * 
   * - `1m`: Aggregates data by 1 minute. The maximum query span is 1 day.
   * - `30m`: Aggregates data by 30 minutes. The maximum query span is 1 day.
   * - `6h`: Aggregates data by 6 hours. The maximum query span is 15 days.
   * - `1d`: Aggregates data by day. The maximum query span is 180 days.
   * 
   * @example
   * 1d
   */
  statDateType?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      bizRegionId: 'BizRegionId',
      endDate: 'EndDate',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productType: 'ProductType',
      startDate: 'StartDate',
      statDateType: 'StatDateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      bizRegionId: 'string',
      endDate: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      productType: 'string',
      startDate: 'string',
      statDateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

