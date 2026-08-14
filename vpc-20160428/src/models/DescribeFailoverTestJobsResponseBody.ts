// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFailoverTestJobsResponseBodyFailoverTestJobList extends $dara.Model {
  /**
   * @remarks
   * The description of the failover test job.
   * 
   * The description is 0 to 256 characters in length and cannot start with **http://** or **https://**.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The test duration. Unit: minutes. Valid values: **1** to **4320**.
   * 
   * @example
   * 60
   */
  jobDuration?: string;
  /**
   * @remarks
   * The failover test job ID.
   * 
   * @example
   * ftj-bp1yh6mvi13aq3g8w****
   */
  jobId?: string;
  /**
   * @remarks
   * The failover test type. Valid values:
   * 
   * - **StartNow**: starts the test immediately after the failover test job is created.
   * 
   * - **StartLater**: creates the failover test job without starting the test.
   * 
   * @example
   * StartNow
   */
  jobType?: string;
  /**
   * @remarks
   * The name of the failover test job.
   * 
   * The name is 0 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The list of failover test resource IDs.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The failover test resource type. Valid values: **PHYSICALCONNECTION**: Express Connect circuit.
   * 
   * @example
   * PHYSICALCONNECTION
   */
  resourceType?: string;
  /**
   * @remarks
   * The start time of the failover test job. The time is displayed in UTC in the YYYY-MM-DDThh:mm:ssZ format based on the ISO 8601 standard.
   * 
   * @example
   * 2023-11-21T14:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the failover test job. Valid values:
   * 
   * - **Init**: pending.
   * 
   * - **Starting**: starting.
   * 
   * - **Testing**: in progress.
   * 
   * - **Stopping**: stopping.
   * 
   * - **Stopped**: completed.
   * 
   * @example
   * Init
   */
  status?: string;
  /**
   * @remarks
   * The end time of the failover test job. The time is displayed in UTC in the YYYY-MM-DDThh:mm:ssZ format based on the ISO 8601 standard.
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
   * The number of entries returned on the current page.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The list of failover test jobs.
   */
  failoverTestJobList?: DescribeFailoverTestJobsResponseBodyFailoverTestJobList[];
  /**
   * @remarks
   * The number of entries per page for a paginated query. Valid values: **1** to **100**. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Valid values:
   * 
   * - Leave this parameter empty for the first query or if no subsequent query is required.
   * 
   * - If a subsequent query is required, set this parameter to the NextToken value returned in the previous API call.
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
   * The total number of entries returned.
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

