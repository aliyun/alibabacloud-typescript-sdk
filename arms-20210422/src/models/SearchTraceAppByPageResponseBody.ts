// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchTraceAppByPageResponseBodyPageBeanTraceApps extends $dara.Model {
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

export class SearchTraceAppByPageResponseBodyPageBean extends $dara.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  traceApps?: SearchTraceAppByPageResponseBodyPageBeanTraceApps[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      traceApps: 'TraceApps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      traceApps: { 'type': 'array', 'itemType': SearchTraceAppByPageResponseBodyPageBeanTraceApps },
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

export class SearchTraceAppByPageResponseBody extends $dara.Model {
  pageBean?: SearchTraceAppByPageResponseBodyPageBean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageBean: 'PageBean',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageBean: SearchTraceAppByPageResponseBodyPageBean,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pageBean && typeof (this.pageBean as any).validate === 'function') {
      (this.pageBean as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

