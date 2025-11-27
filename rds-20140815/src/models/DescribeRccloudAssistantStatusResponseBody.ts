// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCCloudAssistantStatusResponseBodyInstanceCloudAssistantStatusSet extends $dara.Model {
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
   * *   **true**: Heartbeats are detected in the last 2 minutes.
   * *   **false**: No heartbeat is detected in the last 2 minutes.
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
   * The instance ID.
   * 
   * @example
   * rc-e2g521l55k038cr8****
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
   * 2025-03-15T09:00:00Z
   */
  lastHeartbeatTime?: string;
  /**
   * @remarks
   * The time when commands were last run.
   * 
   * @example
   * 2025-03-15T09:00:00Z
   */
  lastInvokedTime?: string;
  /**
   * @remarks
   * The operating system type of the instance.
   * 
   * @example
   * Linux
   */
  OSType?: string;
  /**
   * @remarks
   * Indicates whether Cloud Assistant supports Session Manager on the instance. If Session Manager is not supported, the version of Cloud Assistant Agent is outdated. Update Cloud Assistant Agent to the latest version.
   * 
   * To support Session Manager, the version of Cloud Assistant Agent cannot be earlier than 2.2.3.189.
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

export class DescribeRCCloudAssistantStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the installation status of Cloud Assistant on the instances.
   */
  instanceCloudAssistantStatusSet?: DescribeRCCloudAssistantStatusResponseBodyInstanceCloudAssistantStatusSet[];
  /**
   * @remarks
   * The token that marks the end of the current returned page. If this parameter is empty, all data is retrieved.
   * 
   * This parameter is required.
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
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0688F1D2-CDA8-5617-A43C-ADAC61D80D43
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
      instanceCloudAssistantStatusSet: { 'type': 'array', 'itemType': DescribeRCCloudAssistantStatusResponseBodyInstanceCloudAssistantStatusSet },
      nextToken: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceCloudAssistantStatusSet)) {
      $dara.Model.validateArray(this.instanceCloudAssistantStatusSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

