// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryStreamPushJobListResponseBodyDataJobList extends $dara.Model {
  /**
   * @remarks
   * The time when the job was created. Unit: seconds.
   * 
   * @example
   * 1581595942
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the job.
   * 
   * @example
   * 23********
   */
  jobId?: string;
  /**
   * @remarks
   * The type of the stream push job. Valid values:
   * 
   * - **1**: continuous job.
   * - **2**: triggered job. The job ends after it is interrupted.
   * 
   * @example
   * 1
   */
  jobType?: number;
  /**
   * @remarks
   * The current stream push status. Valid values:
   * 
   * - **1**: pushing.
   * - **2**: waiting to push.
   * - **3**: push ended.
   * 
   * @example
   * 1
   */
  pushStatus?: number;
  /**
   * @remarks
   * The stream push URL.
   * 
   * @example
   * rtmp://****
   */
  pushUrl?: string;
  /**
   * @remarks
   * The stream type. Valid values:
   * 
   * - **0**: main stream.
   * - **1**: sub stream.
   * 
   * @example
   * 0
   */
  streamType?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      jobId: 'JobId',
      jobType: 'JobType',
      pushStatus: 'PushStatus',
      pushUrl: 'PushUrl',
      streamType: 'StreamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      jobId: 'string',
      jobType: 'number',
      pushStatus: 'number',
      pushUrl: 'string',
      streamType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryStreamPushJobListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The job list information.
   */
  jobList?: QueryStreamPushJobListResponseBodyDataJobList[];
  /**
   * @remarks
   * The total number of jobs.
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      jobList: 'JobList',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobList: { 'type': 'array', 'itemType': QueryStreamPushJobListResponseBodyDataJobList },
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

export class QueryStreamPushJobListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. Valid values:
   * 
   * - **200**: The call was successful.
   * - Other values: error codes. For more information, see [Error codes](https://help.aliyun.com/document_detail/145071.html).
   * 
   * @example
   * 400
   */
  code?: string;
  /**
   * @remarks
   * The data returned if the call is successful.
   */
  data?: QueryStreamPushJobListResponseBodyData;
  /**
   * @remarks
   * The error message returned if the call fails.
   * 
   * @example
   * Request parameter error.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E55***B7-4***-4***-8***-D3******F565
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - **true**: The call was successful.
   * - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryStreamPushJobListResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
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

