// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeJobStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of running instances.
   * 
   * @example
   * 0
   */
  active?: number;
  /**
   * @remarks
   * The completion time of the job execution.
   * 
   * @example
   * 1657522839
   */
  completionTime?: number;
  /**
   * @remarks
   * The number of instances that failed.
   * 
   * @example
   * 0
   */
  failed?: number;
  /**
   * @remarks
   * The ID of the job.
   * 
   * @example
   * event-b798157b-40a2-4388-b578-71fb897103**-**
   */
  jobId?: string;
  /**
   * @remarks
   * The additional information. Valid values:
   * 
   * - **success**: The request is successful.
   * - Specific error code: An exception occurred and a specific error code is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The creation time of the job.
   * 
   * @example
   * 1657522800
   */
  startTime?: number;
  /**
   * @remarks
   * The running status of the job. Valid values:
   * 
   * - **0**: Not executed.
   * - **1**: Succeeded.
   * - **2**: Failed.
   * - **3**: Running.
   * 
   * @example
   * 1
   */
  state?: string;
  /**
   * @remarks
   * The number of instances that succeeded.
   * 
   * @example
   * 3
   */
  succeeded?: number;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      completionTime: 'CompletionTime',
      failed: 'Failed',
      jobId: 'JobId',
      message: 'Message',
      startTime: 'StartTime',
      state: 'State',
      succeeded: 'Succeeded',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'number',
      completionTime: 'number',
      failed: 'number',
      jobId: 'string',
      message: 'string',
      startTime: 'number',
      state: 'string',
      succeeded: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API status code or POP error code. Valid values:
   * 
   * - **2xx**: Success.
   * - **3xx**: Redirection.
   * - **4xx**: Request error.
   * - **5xx**: Server error.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeJobStatusResponseBodyData;
  /**
   * @remarks
   * The error code. Valid values:
   * 
   * - Successful request: The **ErrorCode** field is not returned.
   * - Failed request: The **ErrorCode** field is returned. For more information, see the **Error codes** section of this topic.
   * 
   * @example
   * InvalidAppId.NotFound
   */
  errorCode?: string;
  /**
   * @remarks
   * The additional information. Valid values:
   * 
   * - **success**: The request is successful.
   * - Specific error code: An exception occurred and a specific error code is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 53F15A18-8079-5992-810C-0211A5AE****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the job status was queried successfully. Valid values:
   * 
   * - **true**: The query was successful.
   * - **false**: The query failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID used to accurately query call information.
   * 
   * @example
   * 0b1639af16575057857241351e****
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeJobStatusResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
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

