// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudAssistantAttributesResponseBodyCloudAssistant extends $dara.Model {
  /**
   * @remarks
   * The number of running tasks of Cloud Assistant on the instance.
   * 
   * @example
   * 0
   */
  activeTaskCount?: number;
  /**
   * @remarks
   * Indicates whether Cloud Assistant is running on the instance. Valid values:
   * 
   * true: A heartbeat was detected within the last 2 minutes.
   * 
   * false: No heartbeat was detected within the last 2 minutes.
   * 
   * @example
   * true
   */
  cloudAssistantStatus?: string;
  /**
   * @remarks
   * The version number of the Cloud Assistant Agent. This value is empty if the Cloud Assistant Agent is not installed or is not running.
   * 
   * @example
   * 2.2.0.106
   */
  cloudAssistantVersion?: string;
  /**
   * @remarks
   * The instance ID of the simple application server instance.
   * 
   * @example
   * 85dbe3e7cc7b49e1a3df4af3bfa4ebbf
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of completed tasks of Cloud Assistant on the instance.
   * 
   * @example
   * 4
   */
  invocationCount?: number;
  /**
   * @remarks
   * The time of the last heartbeat of Cloud Assistant. This value is updated approximately every minute, with a random fluctuation of up to 5 seconds (minimum 55 seconds, maximum 65 seconds).
   * 
   * @example
   * 2021-03-15T09:00:00Z
   */
  lastHeartbeatTime?: string;
  /**
   * @remarks
   * The time when the last command was executed. The time is displayed in UTC (Z) in the YYYY-MM-DDThh:mm:ssZ format.
   * 
   * @example
   * 2021-03-15T08:00:00Z
   */
  lastInvokedTime?: string;
  /**
   * @remarks
   * The operating system type of the instance. Valid values:
   * 
   * - Windows.
   * - Linux.
   * - FreeBSD.
   * 
   * @example
   * Linux
   */
  OSType?: string;
  /**
   * @remarks
   * Indicates whether Cloud Assistant on the instance supports the session management feature. If session management is not supported, the Cloud Assistant version is outdated. Update the client to the latest version.
   * 
   * The minimum Cloud Assistant versions that support session management are as follows:
   * 
   * Linux: 2.2.3.189
   * Windows: 2.1.3.189
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

export class DescribeCloudAssistantAttributesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The installation status of Cloud Assistant on the instances.
   */
  cloudAssistant?: DescribeCloudAssistantAttributesResponseBodyCloudAssistant[];
  /**
   * @remarks
   * The current page number.
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30637AD6-D977-4833-A54C-CC89483E****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cloudAssistant: 'CloudAssistant',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudAssistant: { 'type': 'array', 'itemType': DescribeCloudAssistantAttributesResponseBodyCloudAssistant },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cloudAssistant)) {
      $dara.Model.validateArray(this.cloudAssistant);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

