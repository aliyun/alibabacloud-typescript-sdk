// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLiveMessageGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
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
   * The starting page number for the query. If you leave this parameter empty, the query starts from the first page.
   * 
   * @example
   * 1001
   */
  nextPageToken?: number;
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
      nextPageToken: 'NextPageToken',
      sortType: 'SortType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      dataCenter: 'string',
      groupStatus: 'number',
      nextPageToken: 'number',
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

