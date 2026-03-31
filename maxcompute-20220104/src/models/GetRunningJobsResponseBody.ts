// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRunningJobsResponseBodyDataRunningJobInfoList extends $dara.Model {
  /**
   * @remarks
   * The compute unit (CU) snapshot proportion of the job.
   * 
   * @example
   * 0.45
   */
  cuSnapshot?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 2023050206371544gomgtp3ljcr4
   */
  instanceId?: string;
  /**
   * @remarks
   * The account that submits the job.
   * 
   * @example
   * ALIYUN$xxx@test.aliyunid.com
   */
  jobOwner?: string;
  /**
   * @remarks
   * The memory snapshot proportion of the job.
   * 
   * @example
   * 0.45
   */
  memorySnapshot?: number;
  /**
   * @remarks
   * The progress of the job.
   * 
   * @example
   * 0
   */
  progress?: number;
  /**
   * @remarks
   * The name of the MaxCompute project.
   * 
   * @example
   * project_20221021123044_981b
   */
  project?: string;
  /**
   * @remarks
   * The nickname of the quota that is used by the job.
   * 
   * @example
   * my_quota
   */
  quotaNickname?: string;
  /**
   * @remarks
   * The time when the job starts to run.
   * 
   * @example
   * 1689746864
   */
  runningAtTime?: number;
  /**
   * @remarks
   * The time when the job is submitted.
   * 
   * @example
   * 1689746864
   */
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
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of jobs in the running state.
   */
  runningJobInfoList?: GetRunningJobsResponseBodyDataRunningJobInfoList[];
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 64
   */
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
  /**
   * @remarks
   * The returned data.
   */
  data?: GetRunningJobsResponseBodyData;
  /**
   * @remarks
   * *   If the value of success was false, an error code was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * 0A3B1FD2006A24C8D8BE65CDAC028298
   */
  errorMsg?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. If this parameter was not empty and the value of this parameter was not 200, the request failed.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0bc3b4ab16684833172127321e2c25
   */
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

