// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComputeEngineJobResponseBodyJobList extends $dara.Model {
  appName?: string;
  createTime?: number;
  endpoint?: string;
  extraInfo?: { [key: string]: any };
  finishTime?: number;
  jobId?: string;
  message?: string;
  reason?: string;
  startedAt?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      createTime: 'CreateTime',
      endpoint: 'Endpoint',
      extraInfo: 'ExtraInfo',
      finishTime: 'FinishTime',
      jobId: 'JobId',
      message: 'Message',
      reason: 'Reason',
      startedAt: 'StartedAt',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      createTime: 'number',
      endpoint: 'string',
      extraInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      finishTime: 'number',
      jobId: 'string',
      message: 'string',
      reason: 'string',
      startedAt: 'string',
      state: 'string',
    };
  }

  validate() {
    if(this.extraInfo) {
      $dara.Model.validateMap(this.extraInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComputeEngineJobResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  jobList?: ListComputeEngineJobResponseBodyJobList[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      jobList: 'JobList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      jobList: { 'type': 'array', 'itemType': ListComputeEngineJobResponseBodyJobList },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.jobList)) {
      $dara.Model.validateArray(this.jobList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

