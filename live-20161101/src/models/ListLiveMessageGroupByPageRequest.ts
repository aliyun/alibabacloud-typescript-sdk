// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLiveMessageGroupByPageRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the interactive messaging application.
   * 
   * This parameter is required.
   * 
   * @example
   * demo
   */
  appId?: string;
  /**
   * @remarks
   * The data center. It must be the same as the data center that was specified when you called the [CreateLiveMessageApp](https://help.aliyun.com/document_detail/2848162.html) operation to create the interactive messaging application. Valid values: cn-shanghai and ap-southeast-1 (Singapore).
   * 
   * @example
   * cn-shanghai
   */
  dataCenter?: string;
  /**
   * @remarks
   * The status of the groups to query. Default value: 0. Valid values:
   * 
   * *   0: all groups
   * *   1: existing groups
   * *   2: deleted groups
   * 
   * @example
   * 1
   */
  groupStatus?: number;
  /**
   * @remarks
   * The page number. Valid values: [1,10000].
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:[1,50].
   * 
   * Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The sort order based on the time when the groups were created. Valid values:
   * 
   * *   1: ascending order
   * *   2: descending order
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  sortType?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      dataCenter: 'DataCenter',
      groupStatus: 'GroupStatus',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortType: 'SortType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      dataCenter: 'string',
      groupStatus: 'number',
      pageNumber: 'number',
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

