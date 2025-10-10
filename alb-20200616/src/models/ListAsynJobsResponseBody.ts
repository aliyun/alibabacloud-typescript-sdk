// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAsynJobsResponseBodyJobs extends $dara.Model {
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
   * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 2134663231234
   */
  createTime?: number;
  /**
   * @remarks
   * If the value of **Status** is Failed, an error code is returned.
   * 
   * @example
   * 506
   */
  errorCode?: string;
  /**
   * @remarks
   * If the value of **Status** is Failed, an error message is returned.
   * 
   * @example
   * AllocateEipAddress Failed
   */
  errorMessage?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 365F4154-92F6-4AE4-92F8-7FF34B5****
   */
  id?: string;
  /**
   * @remarks
   * The timestamp that indicates the end time of the task. Unit: milliseconds.
   * 
   * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 2144663233315
   */
  modifyTime?: number;
  /**
   * @remarks
   * The type of the operation. Valid values:
   * 
   * *   **Create**
   * *   **Update**
   * *   **Delete**
   * 
   * @example
   * Create
   */
  operateType?: string;
  /**
   * @remarks
   * The associated resource ID.
   * 
   * @example
   * alb-o8mszt95oamfjy****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the associated resource. Valid values:
   * 
   * *   **loadbalancer**: an ALB instance
   * *   **listener**: a listener
   * *   **rule**: a forwarding rule
   * *   **acl**: an ACL
   * *   **securitypolicy**: a security policy
   * *   **servergroup**: a server group
   * 
   * @example
   * acl
   */
  resourceType?: string;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   **Succeeded**
   * *   **Failed**
   * *   **Processing**
   * 
   * @example
   * Succeeded
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      createTime: 'CreateTime',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      id: 'Id',
      modifyTime: 'ModifyTime',
      operateType: 'OperateType',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      createTime: 'number',
      errorCode: 'string',
      errorMessage: 'string',
      id: 'string',
      modifyTime: 'number',
      operateType: 'string',
      resourceId: 'string',
      resourceType: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsynJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The tasks.
   */
  jobs?: ListAsynJobsResponseBodyJobs[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If **NextToken** is empty, no next page exists.
   * *   If a value is returned for **NextToken**, the value is the token that determines the start point of the next query.
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
   * 365F4154-92F6-4AE4-92F8-7FF34B540710
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1000
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      jobs: 'Jobs',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobs: { 'type': 'array', 'itemType': ListAsynJobsResponseBodyJobs },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.jobs)) {
      $dara.Model.validateArray(this.jobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

