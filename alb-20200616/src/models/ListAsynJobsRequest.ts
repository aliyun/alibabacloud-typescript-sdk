// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAsynJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the operation.
   * 
   * @example
   * CreateLoadBalancer
   */
  apiName?: string;
  /**
   * @remarks
   * The timestamp that indicates the start time of the task. Unit: milliseconds.
   * 
   * Specify the timestamp in the Unix format to indicate the total amount of time that is from 00:00:00 (UTC+0) on January 1, 1970 to when the status of the asynchronous task is queried.
   * 
   * @example
   * 2021-06-03T17:22Z
   */
  beginTime?: number;
  /**
   * @remarks
   * The timestamp that indicates the end time of the task. Unit: milliseconds.
   * 
   * Specify the timestamp in the Unix format to indicate the total amount of time that is from 00:00:00 (UTC+0) on January 1, 1970 to when the status of the asynchronous task is returned.
   * 
   * @example
   * 2021-06-04T17:22Z
   */
  endTime?: number;
  /**
   * @remarks
   * The asynchronous task IDs.
   */
  jobIds?: string[];
  /**
   * @remarks
   * The number of entries per page. Valid values: **1** to **100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   You do not need to specify this parameter for the first request.
   * *   You must specify the token that is obtained from the previous query as the value of **NextToken**.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The resource IDs.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The type of the associated resource. Valid values:
   * 
   * *   **loadbalancer**: an Application Load Balancer (ALB) instance
   * *   **listener**: a listener
   * *   **rule**: a forwarding rule
   * *   **acl**: an access control list (ACL)
   * *   **securitypolicy**: a security policy
   * *   **servergroup**: a server group
   * 
   * @example
   * acl
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      jobIds: 'JobIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      beginTime: 'number',
      endTime: 'number',
      jobIds: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.jobIds)) {
      $dara.Model.validateArray(this.jobIds);
    }
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

