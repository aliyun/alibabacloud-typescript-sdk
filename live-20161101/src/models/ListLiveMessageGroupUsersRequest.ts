// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLiveMessageGroupUsersRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the interactive messaging application to query.
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
   * The ID of the group to query.
   * 
   * This parameter is required.
   * 
   * @example
   * grouptest
   */
  groupId?: string;
  /**
   * @remarks
   * The starting page number for the query. If you leave this parameter empty, the query starts from the first page.
   * 
   * @example
   * 1
   */
  nextPageToken?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: **10 to 50**.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The sort order based on the time when the users joined the group. Valid values:
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
      groupId: 'GroupId',
      nextPageToken: 'NextPageToken',
      pageSize: 'PageSize',
      sortType: 'SortType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      dataCenter: 'string',
      groupId: 'string',
      nextPageToken: 'number',
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

