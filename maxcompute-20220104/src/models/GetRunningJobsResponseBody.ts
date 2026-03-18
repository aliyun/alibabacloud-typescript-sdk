// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRunningJobsResponseBodyDataRunningJobInfoList extends $dara.Model {
  cuSnapshot?: number;
  instanceId?: string;
  jobOwner?: string;
  memorySnapshot?: number;
  progress?: number;
  project?: string;
  quotaNickname?: string;
  runningAtTime?: number;
  submittedAtTime?: number;
  static names(): { [key: string]: string } {
    return {
      cuSnapshot: 'cuSnapshot',
      instanceId: 'instanceId',
      jobOwner: 'jobOwner',
      memorySnapshot: 'memorySnapshot',
      progress: 'progress',
      project: 'project',
      quotaNickname: 'quotaNickname',
      runningAtTime: 'runningAtTime',
      submittedAtTime: 'submittedAtTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cuSnapshot: 'number',
      instanceId: 'string',
      jobOwner: 'string',
      memorySnapshot: 'number',
      progress: 'number',
      project: 'string',
      quotaNickname: 'string',
      runningAtTime: 'number',
      submittedAtTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRunningJobsResponseBodyData extends $dara.Model {
  pageNumber?: number;
  pageSize?: number;
  runningJobInfoList?: GetRunningJobsResponseBodyDataRunningJobInfoList[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      runningJobInfoList: 'runningJobInfoList',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      runningJobInfoList: { 'type': 'array', 'itemType': GetRunningJobsResponseBodyDataRunningJobInfoList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.runningJobInfoList)) {
      $dara.Model.validateArray(this.runningJobInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRunningJobsResponseBody extends $dara.Model {
  data?: GetRunningJobsResponseBodyData;
  errorCode?: string;
  errorMsg?: string;
  httpCode?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetRunningJobsResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

