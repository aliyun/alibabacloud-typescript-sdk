// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMessageAppRequest extends $dara.Model {
  /**
   * @remarks
   * Interactive message application ID.
   * 
   * @example
   * VKL3***
   */
  appId?: string;
  /**
   * @remarks
   * Interactive message application name.
   * 
   * @example
   * testApp
   */
  appName?: string;
  /**
   * @remarks
   * Page number. Default value: 1. Valid values: 1 to 100000.
   * 
   * @example
   * 10
   */
  pageNum?: number;
  /**
   * @remarks
   * Number of applications displayed per page. Default value: 20. Valid values: 1 to 50.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Sorting method. Valid values:
   * 
   * - 0: Ascending order by time.
   * - 1: Descending order by time.
   * 
   * @example
   * 1
   */
  sortType?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      sortType: 'SortType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      pageNum: 'number',
      pageSize: 'number',
      sortType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

