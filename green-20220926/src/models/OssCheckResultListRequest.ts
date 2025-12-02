// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OssCheckResultListRequest extends $dara.Model {
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Start date.
   * 
   * @example
   * 2023-10-21 16:08:38
   */
  endDate?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * 55
   */
  finishNum?: number;
  /**
   * @remarks
   * Query condition.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * End date.
   * 
   * @example
   * {}
   */
  query?: string;
  /**
   * @remarks
   * Sort field.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * Current page number.
   */
  sort?: { [key: string]: string };
  /**
   * @remarks
   * System-defined parameter. Value: **OssCheckResultList**.
   * 
   * @example
   * 2023-08-21 16:08:38
   */
  startDate?: string;
  /**
   * @remarks
   * Number of completed items.
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
      sort: 'Sort',
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
      sort: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      startDate: 'string',
      status: 'number',
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

