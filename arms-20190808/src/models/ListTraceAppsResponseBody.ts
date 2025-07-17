// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTraceAppsResponseBodyTraceAppsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTraceAppsResponseBodyTraceApps extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 123
   */
  appId?: number;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cc7a37ee31aea4ed1a059eff8034b****
   */
  clusterId?: string;
  /**
   * @remarks
   * The time when the monitoring task was created. The value is a timestamp. Unit: milliseconds.
   * 
   * @example
   * 1529667762000
   */
  createTime?: number;
  /**
   * @remarks
   * The labels of the application.
   */
  labels?: string[];
  /**
   * @remarks
   * The language.
   * 
   * @example
   * PHP
   */
  language?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The process identifier (PID) of the application.
   * 
   * @example
   * a5f9bdeb-2627-4dbe-9247-****
   */
  pid?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * Resource group
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Indicates whether the application is displayed in the Application Real-Time Monitoring Service (ARMS) console. Valid values:
   * 
   * *   `true`: yes
   * *   `false`: no
   * 
   * @example
   * true
   */
  show?: boolean;
  /**
   * @remarks
   * The application source.
   * 
   * @example
   * ACK
   */
  source?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: ListTraceAppsResponseBodyTraceAppsTags[];
  /**
   * @remarks
   * The type of the monitoring task. Valid values:
   * 
   * *   `TRACE`: Application Monitoring
   * *   `RETCODE`: Browser Monitoring
   * 
   * @example
   * TRACE
   */
  type?: string;
  /**
   * @remarks
   * The time when the monitoring task was updated. The value is a timestamp. Unit: milliseconds.
   * 
   * @example
   * 1529667762000
   */
  updateTime?: number;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 113197164949****
   */
  userId?: string;
  /**
   * @remarks
   * The type of the workload.
   * 
   * @example
   * Deployment
   */
  workloadKind?: string;
  /**
   * @remarks
   * The name of the workload.
   * 
   * @example
   * nginx-deployment
   */
  workloadName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      clusterId: 'ClusterId',
      createTime: 'CreateTime',
      labels: 'Labels',
      language: 'Language',
      namespace: 'Namespace',
      pid: 'Pid',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      show: 'Show',
      source: 'Source',
      tags: 'Tags',
      type: 'Type',
      updateTime: 'UpdateTime',
      userId: 'UserId',
      workloadKind: 'WorkloadKind',
      workloadName: 'WorkloadName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appName: 'string',
      clusterId: 'string',
      createTime: 'number',
      labels: { 'type': 'array', 'itemType': 'string' },
      language: 'string',
      namespace: 'string',
      pid: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      show: 'boolean',
      source: 'string',
      tags: { 'type': 'array', 'itemType': ListTraceAppsResponseBodyTraceAppsTags },
      type: 'string',
      updateTime: 'number',
      userId: 'string',
      workloadKind: 'string',
      workloadName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTraceAppsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned for the request. Valid values:
   * 
   * *   `2XX`: The request is successful.
   * *   `3XX`: A redirection message is returned.
   * *   `4XX`: The request is invalid.
   * *   `5XX`: A server error occurs.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The error message returned if the request parameters are invalid.
   * 
   * @example
   * Internal error. Please try again. Contact the DingTalk service account if the issue persists after multiple retries.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40B10E04-81E8-4643-970D-F1B38F2E****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * 
   * *   `true`: The call was successful.
   * *   `false`: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The list of Application Monitoring tasks.
   */
  traceApps?: ListTraceAppsResponseBodyTraceApps[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceApps: 'TraceApps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceApps: { 'type': 'array', 'itemType': ListTraceAppsResponseBodyTraceApps },
    };
  }

  validate() {
    if(Array.isArray(this.traceApps)) {
      $dara.Model.validateArray(this.traceApps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

