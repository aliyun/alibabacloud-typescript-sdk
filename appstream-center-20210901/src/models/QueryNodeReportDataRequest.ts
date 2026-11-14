// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryNodeReportDataRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the app instance group, which is used to filter data for a specific app instance group. You can call the [ListAppInstanceGroup](~~ListAppInstanceGroup~~) operation to obtain the ID. If you do not specify this parameter, data is not filtered by app instance group.
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
   * The end time of the statistics. This parameter is **required**. Format: `yyyy-MM-dd HH:mm:ss`. The end time cannot be earlier than StartDate. The query span must meet the limits corresponding to StatDateType. The string itself does not carry a time zone and is interpreted as Asia/Shanghai (UTC+8).
   * 
   * @example
   * 2026-09-02 00:00:00
   */
  endDate?: string;
  /**
   * @remarks
   * The number of the page to return. Specify a value starting from 1. If you do not specify this parameter, the service returns the first page, but the response may echo 0.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. If you do not specify this parameter, the default value 200 is used. If the specified value is greater than 1,500, the value 1,500 is used.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The product type. This parameter is optional. If you do not specify this parameter, data is queried for Wuying Cloud App.
   * 
   * Specify the value in the exact case shown below. Data that cannot be matched is not returned.
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
   * The start time of the statistics. This parameter is **required**. Format: `yyyy-MM-dd HH:mm:ss`. The `1d` granularity calculates statistics by date, while other granularities are accurate to the minute. The query includes both the start and end boundaries. The string itself does not carry a time zone and is interpreted as Asia/Shanghai (UTC+8).
   * 
   * @example
   * 2026-09-01 00:00:00
   */
  startDate?: string;
  /**
   * @remarks
   * The statistical granularity. This parameter is **required**.
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

