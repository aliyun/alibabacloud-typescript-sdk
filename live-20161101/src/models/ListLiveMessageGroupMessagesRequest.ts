// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLiveMessageGroupMessagesRequest extends $dara.Model {
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
   * The beginning of the time range to query. The value is a UNIX timestamp. Unit: seconds. If you leave this parameter empty, the earliest available time is used.
   * 
   * @example
   * 1697783235
   */
  beginTime?: number;
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
   * The end of the time range to query. The value is a UNIX timestamp. Unit: seconds. If you leave this parameter empty, the latest available time is used.
   * 
   * @example
   * 1698301635
   */
  endTime?: number;
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
   * The type of messages that you want to query. If you leave this parameter empty, all types of messages are queried.
   * 
   * @example
   * 1
   */
  msgType?: number;
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
   * The sort order based on the time when the messages were sent. Valid values:
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

