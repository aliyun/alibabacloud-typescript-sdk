// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOssCheckFreezeResultShrinkRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 2025-05-19 10:05:11
   */
  endDate?: string;
  /**
   * @example
   * 0
   */
  finishNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * {\\"TaskId\\":\\"P_O3SI0I\\"}
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
   * 2025-01-09 10:28:54
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

