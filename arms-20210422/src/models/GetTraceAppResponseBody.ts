// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTraceAppResponseBodyTraceApp extends $dara.Model {
  appId?: number;
  appName?: string;
  createTime?: number;
  labels?: string[];
  pid?: string;
  regionId?: string;
  show?: boolean;
  type?: string;
  updateTime?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      createTime: 'CreateTime',
      labels: 'Labels',
      pid: 'Pid',
      regionId: 'RegionId',
      show: 'Show',
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
      show: 'boolean',
      type: 'string',
      updateTime: 'number',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceAppResponseBody extends $dara.Model {
  requestId?: string;
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

