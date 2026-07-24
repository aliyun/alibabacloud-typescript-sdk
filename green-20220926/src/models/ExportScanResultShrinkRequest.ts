// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportScanResultShrinkRequest extends $dara.Model {
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
   * The end time of the query. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2024-03-11 10:00:00
   */
  endDate?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The query content.
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
   * The resource type.
   * 
   * @example
   * text
   */
  resourceType?: string;
  /**
   * @remarks
   * The sort field.
   */
  sortShrink?: string;
  /**
   * @remarks
   * The start time of the query. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2024-03-10 10:00:00
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

