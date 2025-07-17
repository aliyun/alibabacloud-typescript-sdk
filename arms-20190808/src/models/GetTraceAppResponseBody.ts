// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTraceAppResponseBodyTraceAppTags extends $dara.Model {
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

export class GetTraceAppResponseBodyTraceApp extends $dara.Model {
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
   * arms-k8s-demo
   */
  appName?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * c905d1364c2dd4b6284a3f41790c4****
   */
  clusterId?: string;
  /**
   * @remarks
   * The timestamp generated when the task was created.
   * 
   * @example
   * 1576599253000
   */
  createTime?: number;
  /**
   * @remarks
   * The aliases of the application.
   */
  labels?: string[];
  /**
   * @remarks
   * The programming language of the application.
   * 
   * @example
   * java
   */
  language?: string;
  /**
   * @remarks
   * The process identifier (PID) of the application.
   * 
   * @example
   * b590lhguqs@d8deedfa9bf****
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
   * The source of the application.
   * 
   * @example
   * ACSK8S
   */
  source?: string;
  /**
   * @remarks
   * A list of key-value pairs.
   */
  tags?: GetTraceAppResponseBodyTraceAppTags[];
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
   * 1635700348000
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
      clusterId: 'ClusterId',
      createTime: 'CreateTime',
      labels: 'Labels',
      language: 'Language',
      pid: 'Pid',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      show: 'Show',
      source: 'Source',
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
      clusterId: 'string',
      createTime: 'number',
      labels: { 'type': 'array', 'itemType': 'string' },
      language: 'string',
      pid: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      show: 'boolean',
      source: 'string',
      tags: { 'type': 'array', 'itemType': GetTraceAppResponseBodyTraceAppTags },
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

export class GetTraceAppResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D80ADAAC-8C32-5479-BD14-C28CF832****
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the array object.
   */
  traceApp?: GetTraceAppResponseBodyTraceApp;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      traceApp: 'TraceApp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      traceApp: GetTraceAppResponseBodyTraceApp,
    };
  }

  validate() {
    if(this.traceApp && typeof (this.traceApp as any).validate === 'function') {
      (this.traceApp as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

