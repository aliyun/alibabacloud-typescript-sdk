// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMessageAppRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the interactive messaging application.
   * 
   * @example
   * VKL3***
   */
  appId?: string;
  /**
   * @remarks
   * The name of the interactive messaging application.
   * 
   * @example
   * testApp
   */
  appName?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: 1. Valid values: 1 to 100000.
   * 
   * @example
   * 10
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of applications to return on each page. Default value: 20. Valid values: 1 to 50.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * *   0: ascending order by time
   * *   1: descending order by time
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

