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
   * The end time of the statistics. This parameter is required. Format: `yyyy-MM-dd HH:mm:ss`. The end time cannot be earlier than `StartDate`. The query span must meet the limit corresponding to `StatDateType`. The string itself does not carry a time zone and is interpreted in the Asia/Shanghai (UTC+8) time zone.
   * 
   * @example
   * 2026-09-02 00:00:00
   */
  endDate?: string;
  /**
   * @remarks
   * The page number of the page to query. Specify this parameter starting from `1`. If you do not specify this parameter, the first page is queried, but the response may return `0`.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 200. If the specified value is greater than 1500, 1500 is used.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The product type. This parameter is optional. If you do not specify this parameter, data is queried based on the Wuying Cloud App caliber.
   * 
   * Specify the value in the exact case shown below. Data that does not match the specified value is not returned.
   * 
   * Valid values:
   * 
   * - `CloudApp`: Wuying Cloud App.
   * - `CloudBrowser`: Cloud Browser.
   * - `WuyingServer`: Enterprise Edition workstation.
   * - `WuyingWorkstation`: Personal Edition Linggou container workstation.
   * - `WuyingWorkstationTeam`: Team Edition Linggou container workstation.
   * - `WuyingWorkstationBusiness`: Dedicated Edition Linggou container workstation.
   * - `AndroidCloud`: Cloud Phone.
   * - `AIAgent`: AgentBay (AI agent).
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @remarks
   * The start time of the statistics. This parameter is required. Format: `yyyy-MM-dd HH:mm:ss`. The `1d` granularity aggregates data by date, while other granularities aggregate data down to the minute. The query includes both the start and end boundaries. The string itself does not carry a time zone and is interpreted in the Asia/Shanghai (UTC+8) time zone.
   * 
   * @example
   * 2026-09-01 00:00:00
   */
  startDate?: string;
  /**
   * @remarks
   * The statistical granularity. This parameter is required.
   * 
   * Valid values:
   * 
   * - `1m`: aggregates data by 1 minute. The maximum query span is 1 day.
   * - `30m`: aggregates data by 30 minutes. The maximum query span is 1 day.
   * - `6h`: aggregates data by 6 hours. The maximum query span is 15 days.
   * - `1d`: aggregates data by day. The maximum query span is 180 days.
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

