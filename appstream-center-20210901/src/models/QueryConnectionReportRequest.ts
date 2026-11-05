// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryConnectionReportRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the app instance group, which is used to filter data for a specified app instance group. You can call [ListAppInstanceGroup](~~ListAppInstanceGroup~~) to obtain the ID. If you do not specify this parameter, data is not filtered by app instance group.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The ID of the business region, which is used to filter report data. You can call [ListRegions](~~ListRegions~~) to obtain the ID.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The end time of the statistics. **Required**. Format: `yyyy-MM-dd HH:mm:ss`. The value cannot be earlier than `StartDate`. The statistical interval includes the start time but excludes the end time. The time span cannot exceed 60 months. The string itself does not carry a time zone and is interpreted in the Asia/Shanghai (UTC+8) time zone.
   * 
   * @example
   * 2026-09-02 00:00:00
   */
  endDate?: string;
  /**
   * @remarks
   * The page number to query. We recommend that you explicitly specify a value starting from `1`. If you do not specify this parameter, the service processes the request as the first page, but the response may echo `0`.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 200. If the value exceeds 1,500, it is processed as 1,500.
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
   * - `CloudApp`: Wuying cloud app.
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
   * The start time of the statistics. **Required**. Format: `yyyy-MM-dd HH:mm:ss`. The statistical interval includes the start time but excludes the end time. The time span cannot exceed 60 months. The string itself does not carry a time zone and is interpreted in the Asia/Shanghai (UTC+8) time zone.
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

