// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScanResultShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end time. Specify the time in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2023-08-24 10:01:55
   */
  endDate?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The search conditions.
   * 
   * @example
   * {"RequestId":"1E4A2F01-2B3C-4D5E-6F70-8192A3B4C5D6"}
   */
  queryShrink?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The resource type. Note: This parameter is required. If it is not specified, the API returns ScanResultQueryFailed (HTTP 400). Valid value: image.
   * 
   * @example
   * image
   */
  resourceType?: string;
  /**
   * @remarks
   * The sort field.
   * 
   * @example
   * {"RequestTime":"desc"}
   */
  sortShrink?: string;
  /**
   * @remarks
   * The start time. Specify the time in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2023-08-11 09:00:19
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      queryShrink: 'Query',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      sortShrink: 'Sort',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endDate: 'string',
      pageSize: 'number',
      queryShrink: 'string',
      regionId: 'string',
      resourceType: 'string',
      sortShrink: 'string',
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

