// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFailoverTestJobsResponseBodyFailoverTestJobList extends $dara.Model {
  /**
   * @remarks
   * The description of the failover test.
   * 
   * The description must be 0 to 256 characters in length and cannot start with \\*\\*http:// **or** https://\\*\\*.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The duration of the failover test. Unit: minutes. Valid values: **1 to 4320**.
   * 
   * @example
   * 60
   */
  jobDuration?: string;
  /**
   * @remarks
   * The ID of the failover test.
   * 
   * @example
   * ftj-xxxxxxxxx
   */
  jobId?: string;
  /**
   * @remarks
   * Indicates whether the failover test is performed immediately. Valid values:
   * 
   * *   **StartNow**
   * *   **StartLater**
   * 
   * @example
   * StartNow
   */
  jobType?: string;
  /**
   * @remarks
   * The name of the failover test.
   * 
   * The name must be 0 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The IDs of the failover test resources.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the failover test resource. Only **PHYSICALCONNECTION** is returned.
   * 
   * @example
   * PHYSICALCONNECTION
   */
  resourceType?: string;
  /**
   * @remarks
   * The beginning of the fault drill task. The time must be in UTC. Specify the time in the ISO 8601 standard in `YYYY-MM-DDThh:mm:ssZ` format.
   * 
   * @example
   * 2023-11-21T14:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the failover test. Valid values:
   * 
   * *   **Init**
   * *   **Starting**
   * *   **Testing**
   * *   **Stopping**
   * *   **Stopped**
   * 
   * @example
   * Init
   */
  status?: string;
  /**
   * @remarks
   * The end of the fault drill task. The time must be in UTC. Specify the time in the ISO 8601 standard in `YYYY-MM-DDThh:mm:ssZ` format.
   * 
   * @example
   * 2023-11-21T15:00:00Z
   */
  stopTime?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      jobDuration: 'JobDuration',
      jobId: 'JobId',
      jobType: 'JobType',
      name: 'Name',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      startTime: 'StartTime',
      status: 'Status',
      stopTime: 'StopTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      jobDuration: 'string',
      jobId: 'string',
      jobType: 'string',
      name: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      startTime: 'string',
      status: 'string',
      stopTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFailoverTestJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries on the current page.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The list of failover tests.
   */
  failoverTestJobList?: DescribeFailoverTestJobsResponseBodyFailoverTestJobList[];
  /**
   * @remarks
   * The number of entries per page. Valid values: **1 to 100**. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If no value is returned for **NextToken**, no next queries are sent.
   * *   If a value is returned for **NextToken**, the value is used to retrieve a new page of results.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      failoverTestJobList: 'FailoverTestJobList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      failoverTestJobList: { 'type': 'array', 'itemType': DescribeFailoverTestJobsResponseBodyFailoverTestJobList },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.failoverTestJobList)) {
      $dara.Model.validateArray(this.failoverTestJobList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

