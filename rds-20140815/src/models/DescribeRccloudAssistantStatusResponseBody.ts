// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCCloudAssistantStatusResponseBodyInstanceCloudAssistantStatusSet extends $dara.Model {
  activeTaskCount?: number;
  cloudAssistantStatus?: string;
  cloudAssistantVersion?: string;
  instanceId?: string;
  invocationCount?: number;
  lastHeartbeatTime?: string;
  lastInvokedTime?: string;
  /**
   * @example
   * Linux
   */
  OSType?: string;
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
  instanceCloudAssistantStatusSet?: DescribeRCCloudAssistantStatusResponseBodyInstanceCloudAssistantStatusSet[];
  /**
   * @remarks
   * This parameter is required.
   */
  nextToken?: string;
  pageNumber?: string;
  pageSize?: string;
  requestId?: string;
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

