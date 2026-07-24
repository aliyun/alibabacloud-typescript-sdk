// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTextScanResultRequest extends $dara.Model {
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
   * The search condition.
   */
  query?: { [key: string]: string };
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
  sort?: { [key: string]: string };
  /**
   * @remarks
   * The start time. Format: YYYY-MM-DD HH:mm:ss.
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
      query: 'Query',
      regionId: 'RegionId',
      sort: 'Sort',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endDate: 'string',
      pageSize: 'number',
      query: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      regionId: 'string',
      sort: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      startDate: 'string',
    };
  }

  validate() {
    if(this.query) {
      $dara.Model.validateMap(this.query);
    }
    if(this.sort) {
      $dara.Model.validateMap(this.sort);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

