// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodRefreshTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end time. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2017-01-01T12:30:20Z
   */
  endTime?: string;
  /**
   * @remarks
   * The path used to query. Exact match is used.
   * 
   * @example
   * http://example.com/***.txt
   */
  objectPath?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * - **file**: file purge.
   * - **directory**: directory purge.
   * - **preload**: file prefetch.
   * 
   * > When DomainName or Status is specified, ObjectType is required.
   * 
   * @example
   * file
   */
  objectType?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **20**. Maximum value: **50**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  securityToken?: string;
  /**
   * @remarks
   * The start time. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * > Only data within the last 3 days can be queried.
   * 
   * @example
   * 2017-01-01T12:12:20Z
   */
  startTime?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - **Complete**: completed.
   * - **Refreshing**: in progress.
   * - **Failed**: failed.
   * 
   * @example
   * Complete
   */
  status?: string;
  /**
   * @remarks
   * The task ID used to query the purge status.
   * 
   * @example
   * 70422****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      objectPath: 'ObjectPath',
      objectType: 'ObjectType',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
      startTime: 'StartTime',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      objectPath: 'string',
      objectType: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
      startTime: 'string',
      status: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

