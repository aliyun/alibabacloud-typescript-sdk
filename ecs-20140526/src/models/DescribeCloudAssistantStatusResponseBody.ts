// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudAssistantStatusResponseBodyInstanceCloudAssistantStatusSetInstanceCloudAssistantStatus extends $dara.Model {
  /**
   * @remarks
   * The number of tasks that Cloud Assistant was running on the instance.
   * 
   * @example
   * 0
   */
  activeTaskCount?: number;
  /**
   * @remarks
   * Indicates whether Cloud Assistant is running on the instance. Valid values:
   * 
   * *   true: Heartbeats are detected in the last 2 minutes.
   * *   false: No heartbeats are detected in the last 2 minutes.
   * 
   * @example
   * true
   */
  cloudAssistantStatus?: string;
  /**
   * @remarks
   * The version number of Cloud Assistant Agent. This parameter is empty if Cloud Assistant Agent is not installed or is not running on the instance.
   * 
   * @example
   * 2.2.0.106
   */
  cloudAssistantVersion?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-bp1iudwa5b1tqa****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of tasks that Cloud Assistant completed on the instance.
   * 
   * @example
   * 2
   */
  invocationCount?: number;
  /**
   * @remarks
   * The last heartbeat time of Cloud Assistant. The value is updated every minute on average. The interval can be 55, 60, or 65 seconds.
   * 
   * @example
   * 2021-03-15T09:00:00Z
   */
  lastHeartbeatTime?: string;
  /**
   * @remarks
   * The time when commands were last run.
   * 
   * @example
   * 2021-03-15T08:00:00Z
   */
  lastInvokedTime?: string;
  /**
   * @remarks
   * The operating system type of the instance. Valid values:
   * 
   * *   Windows
   * *   Linux
   * *   FreeBSD
   * 
   * @example
   * Linux
   */
  OSType?: string;
  /**
   * @remarks
   * Indicates whether Cloud Assistant supports Session Manager on the instance. If Session Manager is not supported, the version of Cloud Assistant Agent is outdated. Update Cloud Assistant Agent to the latest version.
   * 
   * To support Session Manager, the version of Cloud Assistant Agent cannot be earlier than the following versions:
   * 
   * *   Linux: 2.2.3.189
   * *   Windows: 2.1.3.189
   * 
   * @example
   * true
   */
  supportSessionManager?: boolean;
  static names(): { [key: string]: string } {
    return {
      activeTaskCount: 'ActiveTaskCount',
      cloudAssistantStatus: 'CloudAssistantStatus',
      cloudAssistantVersion: 'CloudAssistantVersion',
      instanceId: 'InstanceId',
      invocationCount: 'InvocationCount',
      lastHeartbeatTime: 'LastHeartbeatTime',
      lastInvokedTime: 'LastInvokedTime',
      OSType: 'OSType',
      supportSessionManager: 'SupportSessionManager',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeTaskCount: 'number',
      cloudAssistantStatus: 'string',
      cloudAssistantVersion: 'string',
      instanceId: 'string',
      invocationCount: 'number',
      lastHeartbeatTime: 'string',
      lastInvokedTime: 'string',
      OSType: 'string',
      supportSessionManager: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudAssistantStatusResponseBodyInstanceCloudAssistantStatusSet extends $dara.Model {
  instanceCloudAssistantStatus?: DescribeCloudAssistantStatusResponseBodyInstanceCloudAssistantStatusSetInstanceCloudAssistantStatus[];
  static names(): { [key: string]: string } {
    return {
      instanceCloudAssistantStatus: 'InstanceCloudAssistantStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceCloudAssistantStatus: { 'type': 'array', 'itemType': DescribeCloudAssistantStatusResponseBodyInstanceCloudAssistantStatusSetInstanceCloudAssistantStatus },
    };
  }

  validate() {
    if(Array.isArray(this.instanceCloudAssistantStatus)) {
      $dara.Model.validateArray(this.instanceCloudAssistantStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudAssistantStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the installation status of Cloud Assistant on the instances.
   */
  instanceCloudAssistantStatusSet?: DescribeCloudAssistantStatusResponseBodyInstanceCloudAssistantStatusSet;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
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
   * The number of entries per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
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
   * The total number of instances.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceCloudAssistantStatusSet: 'InstanceCloudAssistantStatusSet',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceCloudAssistantStatusSet: DescribeCloudAssistantStatusResponseBodyInstanceCloudAssistantStatusSet,
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.instanceCloudAssistantStatusSet && typeof (this.instanceCloudAssistantStatusSet as any).validate === 'function') {
      (this.instanceCloudAssistantStatusSet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

