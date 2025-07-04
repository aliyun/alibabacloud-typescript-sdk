// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCCloudAssistantStatusResponseBodyInstanceCloudAssistantStatusSet extends $dara.Model {
  /**
   * @example
   * 0
   */
  activeTaskCount?: number;
  /**
   * @example
   * true
   */
  cloudAssistantStatus?: string;
  /**
   * @example
   * 2.2.0.106
   */
  cloudAssistantVersion?: string;
  /**
   * @example
   * rc-e2g521l55k038cr8****
   */
  instanceId?: string;
  /**
   * @example
   * 2
   */
  invocationCount?: number;
  /**
   * @example
   * 2025-03-15T09:00:00Z
   */
  lastHeartbeatTime?: string;
  /**
   * @example
   * 2025-03-15T09:00:00Z
   */
  lastInvokedTime?: string;
  /**
   * @example
   * Linux
   */
  OSType?: string;
  /**
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

