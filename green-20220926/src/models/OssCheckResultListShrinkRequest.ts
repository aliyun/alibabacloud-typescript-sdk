// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OssCheckResultListShrinkRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 2023-10-21 16:08:38
   */
  endDate?: string;
  /**
   * @example
   * 55
   */
  finishNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * {}
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
   * 2023-08-21 16:08:38
   */
  startDate?: string;
  /**
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

