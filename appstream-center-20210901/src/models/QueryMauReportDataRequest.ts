// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMauReportDataRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the app instance group, which is used to filter data for a specified app instance group. You can call the [ListAppInstanceGroup](~~ListAppInstanceGroup~~) operation to obtain the ID. If this parameter is not specified, data is not filtered by app instance group.
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
   * The end time of the statistical period. **Required**. Format: `yyyy-MM-dd HH:mm:ss`. The value cannot be earlier than `StartDate`. The statistical interval includes the start and end boundaries. The time span cannot exceed 60 months. The string itself does not carry a time zone and is interpreted as Asia/Shanghai (UTC+8).
   * 
   * @example
   * 2026-09-02 00:00:00
   */
  endDate?: string;
  /**
   * @remarks
   * The page number to query. Specify a value starting from `1`. If this parameter is not specified, the service processes the request as the first page, but the response may return `0`.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. If this parameter is not specified, the default value is 200. If the specified value is greater than 1500, it is processed as 1500.
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
   * - `CloudApp`: WUYING Cloud App.
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
   * The start time of the statistical period. **Required**. Format: `yyyy-MM-dd HH:mm:ss`. The statistical interval includes the start and end boundaries. The time span cannot exceed 60 months. The string itself does not carry a time zone and is interpreted as Asia/Shanghai (UTC+8).
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

