// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePreloadDetailByIdResponseBodyUrlDetailsUrls } from "./DescribePreloadDetailByIdResponseBodyUrlDetailsUrls";


export class DescribePreloadDetailByIdResponseBodyUrlDetails extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created. The time is displayed in UTC.
   * 
   * @example
   * 2022-11-23T02:26:56Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The domain name for prefetching resources.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * The time when the task ended. The time is displayed in UTC.
   * 
   * @example
   * 2022-11-23T02:27:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The progress of the prefetch task, which indicates the number of points of presence (POPs) on which the prefetch task is completed.
   * 
   * @example
   * 100%
   */
  process?: string;
  /**
   * @remarks
   * The turned error code. A value of `0` indicates that the task succeeded.
   * 
   * @example
   * 0
   */
  retCode?: string;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   **Complete**
   * *   **Refreshing**
   * *   **Failed**
   * 
   * @example
   * Complete
   */
  status?: string;
  /**
   * @remarks
   * The ID of the task that you want to query.
   * 
   * You can call the PushObjectCache operation to query task IDs. Then, you can use the task IDs to query task status.
   * 
   * You can query one task ID at a time.
   * 
   * @example
   * 14286878547
   */
  taskId?: string;
  /**
   * @remarks
   * The completion details of all URL resources in the task.
   */
  urls?: DescribePreloadDetailByIdResponseBodyUrlDetailsUrls[];
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      domain: 'Domain',
      endTime: 'EndTime',
      process: 'Process',
      retCode: 'RetCode',
      status: 'Status',
      taskId: 'TaskId',
      urls: 'Urls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      domain: 'string',
      endTime: 'string',
      process: 'string',
      retCode: 'string',
      status: 'string',
      taskId: 'string',
      urls: { 'type': 'array', 'itemType': DescribePreloadDetailByIdResponseBodyUrlDetailsUrls },
    };
  }

  validate() {
    if(Array.isArray(this.urls)) {
      $dara.Model.validateArray(this.urls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

