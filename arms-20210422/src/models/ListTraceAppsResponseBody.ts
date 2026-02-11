// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTraceAppsResponseBodyTraceApps extends $dara.Model {
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

export class ListTraceAppsResponseBody extends $dara.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
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

