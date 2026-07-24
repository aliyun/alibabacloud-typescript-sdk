// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OssCheckResultListShrinkRequest extends $dara.Model {
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
   * The end time. Format: YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2023-10-21 16:08:38
   */
  endDate?: string;
  /**
   * @remarks
   * The number of completed items.
   * 
   * @example
   * 55
   */
  finishNum?: number;
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
   * The query condition.
   * 
   * @example
   * {}
   */
  query?: string;
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
   * The sort field.
   */
  sortShrink?: string;
  /**
   * @remarks
   * The start time. Format: YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2023-08-21 16:08:38
   */
  startDate?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endDate: 'EndDate',
      finishNum: 'FinishNum',
      pageSize: 'PageSize',
      query: 'Query',
      regionId: 'RegionId',
      sortShrink: 'Sort',
      startDate: 'StartDate',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endDate: 'string',
      finishNum: 'number',
      pageSize: 'number',
      query: 'string',
      regionId: 'string',
      sortShrink: 'string',
      startDate: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

