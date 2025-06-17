// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRefreshTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name. You can specify only one accelerated domain name in each call. By default, this operation queries the status of tasks for all accelerated domain names.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end time. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * > The end time must be later than the start time.
   * 
   * @example
   * 2017-12-22T08:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The path of the object. The path is used as a condition for exact matching.
   * 
   * @example
   * http://example.com/1.txt
   */
  objectPath?: string;
  /**
   * @remarks
   * The type of the task. Valid values:
   * 
   * *   **file**: refreshes one or more files.
   * *   **directory**: refreshes files in specific directories.
   * *   **regex**: refreshes content based on a regular expression.
   * *   **preload**: prefetches one or more files.
   * 
   * > If you set the **DomainName** or **Status** parameter, you must also set the **ObjectType** parameter.
   * 
   * @example
   * file
   */
  objectType?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. Valid values: **1** to **100000**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **20**. Maximum value: **100**. Valid values: **1** to **100**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmyuji4b6r4**
   */
  resourceGroupId?: string;
  securityToken?: string;
  /**
   * @remarks
   * The start of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2017-12-21T08:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   **Complete**: The task is complete.
   * *   **Refreshing**: The task is in progress.
   * *   **Failed**: The task failed.
   * 
   * @example
   * Complete
   */
  status?: string;
  /**
   * @remarks
   * The ID of the task that you want to query.
   * 
   * @example
   * 1234321
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
      resourceGroupId: 'ResourceGroupId',
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
      resourceGroupId: 'string',
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

