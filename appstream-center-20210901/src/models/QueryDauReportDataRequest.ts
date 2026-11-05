// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDauReportDataRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the app instance group. This parameter is used to filter data for a specific app instance group. You can call the [ListAppInstanceGroup](~~ListAppInstanceGroup~~) operation to obtain the ID. If this parameter is not specified, data is not filtered by app instance group.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The ID of the business region. This parameter is used to filter report data. You can call the [ListRegions](~~ListRegions~~) operation to obtain the ID.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The end time of the statistical period. This parameter is **required**. Format: `yyyy-MM-dd HH:mm:ss`. The value cannot be earlier than StartDate. The service extracts the calendar day in the `yyyy-MM-dd` format. The string does not contain time zone information and is interpreted in the Asia/Shanghai (UTC+8) time zone.
   * 
   * @example
   * 2026-09-30 23:59:59
   */
  endDate?: string;
  /**
   * @remarks
   * The page number. Explicitly specify a value starting from `1`. If this parameter is not specified, the service returns the first page, but the response may return `0` for the page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 200. If the specified value is greater than 1,500, the value 1,500 is used.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The product type. This parameter is optional. If this parameter is not specified or is unrecognized, the query defaults to `CloudApp`. Valid values:
   * 
   * - `CloudApp`: Wuying cloud application.
   * - `CloudBrowser`: Cloud browser.
   * - `WuyingServer`: Enterprise edition workstation.
   * - `WuyingWorkstation`: Personal edition Linggou container workstation.
   * - `WuyingWorkstationTeam`: Team edition Linggou container workstation.
   * - `WuyingWorkstationBusiness`: Dedicated edition Linggou container workstation.
   * - `AndroidCloud`: Cloud phone.
   * - `AIAgent`: AgentBay (AI agent).
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @remarks
   * The start time of the statistical period. This parameter is **required**. Format: `yyyy-MM-dd HH:mm:ss`. The service extracts the calendar day in the `yyyy-MM-dd` format. The date range is inclusive and cannot exceed 180 days. The string does not contain time zone information and is interpreted in the Asia/Shanghai (UTC+8) time zone.
   * 
   * @example
   * 2026-09-01 00:00:00
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      bizRegionId: 'BizRegionId',
      endDate: 'EndDate',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productType: 'ProductType',
      startDate: 'StartDate',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

