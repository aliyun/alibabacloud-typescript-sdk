// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMauReportDataRequest extends $dara.Model {
  /**
   * @remarks
   * The app instance group ID, which is used to filter data for a specified app instance group. You can call the [ListAppInstanceGroup](~~ListAppInstanceGroup~~) operation to obtain the ID. If this parameter is not specified, data is not filtered by app instance group.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The business region ID, which is used to filter report data. You can call the [ListRegions](~~ListRegions~~) operation to obtain the ID.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The end time of the statistical period. **Required**. Format: `yyyy-MM-dd HH:mm:ss`. The value cannot be earlier than `StartDate`. The statistical interval includes the start and end boundaries. The time span cannot exceed 60 months. The string itself does not carry a time zone and is interpreted in the Asia/Shanghai (UTC+8) time zone.
   * 
   * @example
   * 2026-09-02 00:00:00
   */
  endDate?: string;
  /**
   * @remarks
   * The page number to query. We recommend that you explicitly specify a value starting from `1`. If this parameter is not specified, the service processes the request as the first page, but the response may return `0`.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 200. If the specified value is greater than 1,500, it is processed as 1,500.
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
   * The start time of the statistical period. **Required**. Format: `yyyy-MM-dd HH:mm:ss`. The statistical interval includes the start and end boundaries. The time span cannot exceed 60 months. The string itself does not carry a time zone and is interpreted in the Asia/Shanghai (UTC+8) time zone.
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

