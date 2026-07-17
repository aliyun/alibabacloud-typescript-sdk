// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetComputeEngineJobDetailResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  configs?: { [key: string]: any };
  createTime?: string;
  endpoint?: string;
  extraInfo?: { [key: string]: any };
  finishTime?: string;
  jobId?: string;
  jobName?: string;
  jobType?: string;
  lastErrorCode?: string;
  lastErrorInfo?: string;
  requestId?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      configs: 'Configs',
      createTime: 'CreateTime',
      endpoint: 'Endpoint',
      extraInfo: 'ExtraInfo',
      finishTime: 'FinishTime',
      jobId: 'JobId',
      jobName: 'JobName',
      jobType: 'JobType',
      lastErrorCode: 'LastErrorCode',
      lastErrorInfo: 'LastErrorInfo',
      requestId: 'RequestId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      configs: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      createTime: 'string',
      endpoint: 'string',
      extraInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      finishTime: 'string',
      jobId: 'string',
      jobName: 'string',
      jobType: 'string',
      lastErrorCode: 'string',
      lastErrorInfo: 'string',
      requestId: 'string',
      state: 'string',
    };
  }

  validate() {
    if(this.configs) {
      $dara.Model.validateMap(this.configs);
    }
    if(this.extraInfo) {
      $dara.Model.validateMap(this.extraInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

