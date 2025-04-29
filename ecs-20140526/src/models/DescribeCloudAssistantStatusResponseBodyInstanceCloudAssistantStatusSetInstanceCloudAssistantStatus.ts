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

