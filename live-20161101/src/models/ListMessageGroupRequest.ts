// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMessageGroupRequest extends $dara.Model {
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
   * The number of the page to return. Default value: 1. Valid values: 1 to 100000.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of message groups to return on each page. Default value: 20.
   * 
   * Valid values: 1 to 50.
   * 
   * This parameter is required.
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
  /**
   * @remarks
   * The ID of the user. Each user has a unique ID in the application. You can specify multiple user IDs.
   * 
   * @example
   * de1**a0
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      sortType: 'SortType',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      sortType: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

