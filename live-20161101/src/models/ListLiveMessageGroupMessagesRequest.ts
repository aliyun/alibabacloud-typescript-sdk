// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLiveMessageGroupMessagesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the interactive message application to query.
   * 
   * This parameter is required.
   * 
   * @example
   * demo
   */
  appId?: string;
  /**
   * @remarks
   * The query start time, expressed as a UNIX timestamp. Unit: seconds. If this parameter is left empty, the earliest time is used by default.
   * 
   * @example
   * 1697783235
   */
  beginTime?: number;
  /**
   * @remarks
   * The data center. This value must be consistent with the data center specified in [CreateLiveMessageApp](https://help.aliyun.com/document_detail/2848162.html). Currently supported data centers are Shanghai (cn-shanghai) and Singapore (ap-southeast-1).
   * 
   * @example
   * cn-shanghai
   */
  dataCenter?: string;
  /**
   * @remarks
   * The query end time, expressed as a UNIX timestamp. Unit: seconds. If this parameter is left empty, the latest time is used by default.
   * 
   * @example
   * 1698301635
   */
  endTime?: number;
  /**
   * @remarks
   * The group ID of the group to query.
   * 
   * This parameter is required.
   * 
   * @example
   * grouptest
   */
  groupId?: string;
  /**
   * @remarks
   * The message type to query. If this parameter is left empty, all message types are returned by default.
   * 
   * @example
   * 1
   */
  msgType?: number;
  /**
   * @remarks
   * The start position of the query page. If this parameter is left empty, the first page is returned by default.
   * 
   * @example
   * 1
   */
  nextPageToken?: number;
  /**
   * @remarks
   * The number of messages to display at a time. Valid values: **[10,50]**.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The sort type. Messages are sorted by the time they were sent. Valid values:
   * 
   * - 1: ascending order
   * 
   * - 2: descending order
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
      beginTime: 'BeginTime',
      dataCenter: 'DataCenter',
      endTime: 'EndTime',
      groupId: 'GroupId',
      msgType: 'MsgType',
      nextPageToken: 'NextPageToken',
      pageSize: 'PageSize',
      sortType: 'SortType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      beginTime: 'number',
      dataCenter: 'string',
      endTime: 'number',
      groupId: 'string',
      msgType: 'number',
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

