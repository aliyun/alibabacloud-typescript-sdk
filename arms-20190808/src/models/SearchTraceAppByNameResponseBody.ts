// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchTraceAppByNameResponseBodyTraceAppsTags extends $dara.Model {
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

export class SearchTraceAppByNameResponseBodyTraceApps extends $dara.Model {
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
   * The timestamp generated when the task was created.
   * 
   * @example
   * 1593486786000
   */
  createTime?: number;
  /**
   * @remarks
   * The aliases of the application.
   */
  labels?: string[];
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
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxyexli2****
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
   * A list of tags.
   */
  tags?: SearchTraceAppByNameResponseBodyTraceAppsTags[];
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
   * The timestamp generated when the task information was updated.
   * 
   * @example
   * 1593486786000
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
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      createTime: 'CreateTime',
      labels: 'Labels',
      pid: 'Pid',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      show: 'Show',
      tags: 'Tags',
      type: 'Type',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appName: 'string',
      createTime: 'number',
      labels: { 'type': 'array', 'itemType': 'string' },
      pid: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      show: 'boolean',
      tags: { 'type': 'array', 'itemType': SearchTraceAppByNameResponseBodyTraceAppsTags },
      type: 'string',
      updateTime: 'number',
      userId: 'string',
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

export class SearchTraceAppByNameResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F7781D4A-2818-41E7-B7BB-79D809E9****
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the monitoring task.
   */
  traceApps?: SearchTraceAppByNameResponseBodyTraceApps[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      traceApps: 'TraceApps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      traceApps: { 'type': 'array', 'itemType': SearchTraceAppByNameResponseBodyTraceApps },
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

