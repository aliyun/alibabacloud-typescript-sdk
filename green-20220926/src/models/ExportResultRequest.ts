// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportResultRequest extends $dara.Model {
  /**
   * @remarks
   * Page number of the query result. Default is 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * End date.
   * 
   * @example
   * 2023-08-24 10:01:55
   */
  endDate?: string;
  /**
   * @remarks
   * Number of items per page in the query result.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Query condition.
   * 
   * @example
   * {"TaskId":"P_11TL5T"}
   */
  query?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * Sort field.
   */
  sort?: { [key: string]: string };
  /**
   * @remarks
   * Operation source.
   * 
   * @example
   * disposal
   */
  source?: string;
  /**
   * @remarks
   * Start date.
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
      source: 'Source',
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
      sort: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      source: 'string',
      startDate: 'string',
    };
  }

  validate() {
    if(this.sort) {
      $dara.Model.validateMap(this.sort);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

