// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportResultShrinkRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 2023-08-24 10:01:55
   */
  endDate?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * {"TaskId":"P_11TL5T"}
   */
  query?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  sortShrink?: string;
  /**
   * @example
   * 2023-08-11 09:00:19
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      query: 'Query',
      regionId: 'RegionId',
      sortShrink: 'Sort',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endDate: 'string',
      pageSize: 'number',
      query: 'string',
      regionId: 'string',
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

