// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryStreamPushJobResponseBodyData extends $dara.Model {
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
   * The type of the stream push job. Valid values:
   * 
   * - **1**: Continuous job.
   * - **2**: Triggered job, which ends after an interruption.
   * 
   * @example
   * 1
   */
  jobType?: number;
  /**
   * @remarks
   * The current stream push status. Valid values:
   * 
   * - **1**: Pushing.
   * - **2**: Waiting to push.
   * - **3**: Push ended.
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
   * - **0**: Main stream.
   * - **1**: Sub stream.
   * 
   * @example
   * 1
   */
  streamType?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      jobType: 'JobType',
      pushStatus: 'PushStatus',
      pushUrl: 'PushUrl',
      streamType: 'StreamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
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

export class QueryStreamPushJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * - **200**: The call is successful.
   * - Other values: An error code. For more information, see [Error codes](https://help.aliyun.com/document_detail/145071.html).
   * 
   * @example
   * 400
   */
  code?: string;
  /**
   * @remarks
   * The result returned if the call is successful.
   */
  data?: QueryStreamPushJobResponseBodyData;
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
   * The unique identifier that Alibaba Cloud generates for the request.
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
      data: QueryStreamPushJobResponseBodyData,
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

