// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePreloadDetailByIdResponseBodyUrlDetailsUrls extends $dara.Model {
  /**
   * @remarks
   * The details of resource prefetch.
   * 
   * *   If the resource is prefetched on all POPs, "Successfully preloaded" is returned.
   * *   If the resource fails to be prefetched on some POPs, the failure details separated by vertical bars (|) are returned.
   * 
   * @example
   * Successfully preloaded
   */
  description?: string;
  /**
   * @remarks
   * The success percentage, which indicates the number of POPs on which the resource is prefetched.
   * 
   * @example
   * 47%
   */
  success?: string;
  /**
   * @remarks
   * The URL of the prefetched resource.
   * 
   * @example
   * /abc.jpg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      success: 'Success',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      success: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribePreloadDetailByIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request. You can use the ID to query logs and troubleshoot issues.
   * 
   * @example
   * E9D3257A-1B7C-414C-90C1-8D07AC47BCAC
   */
  requestId?: string;
  /**
   * @remarks
   * The number of queried tasks.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The details of the task, including the task ID, start time, end time, domain name, success rate, status, returned error code, and completion details of all URL resources.
   */
  urlDetails?: DescribePreloadDetailByIdResponseBodyUrlDetails[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      urlDetails: 'UrlDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      urlDetails: { 'type': 'array', 'itemType': DescribePreloadDetailByIdResponseBodyUrlDetails },
    };
  }

  validate() {
    if(Array.isArray(this.urlDetails)) {
      $dara.Model.validateArray(this.urlDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

