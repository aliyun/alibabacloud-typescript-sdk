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
   * The time when the job was executed.
   * 
   * @example
   * 1657522839
   */
  completionTime?: number;
  /**
   * @remarks
   * The number of instances that failed to run.
   * 
   * @example
   * 0
   */
  failed?: number;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * event-b798157b-40a2-4388-b578-71fb897103**-**
   */
  jobId?: string;
  /**
   * @remarks
   * The returned message. Take note of the following rules:
   * 
   * *   If the call is successful, **success** is returned.
   * *   If the call fails, an error code is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The time when the job was created.
   * 
   * @example
   * 1657522800
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the job. Valid values:
   * 
   * *   **0**: The job is not executed.
   * *   **1**: The job was executed.
   * *   **2**: The job failed to be executed.
   * *   **3**: The job is being executed.
   * 
   * @example
   * 1
   */
  state?: string;
  /**
   * @remarks
   * The number of instances that are successfully run.
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
   * The HTTP status code. Valid values:
   * 
   * *   **2xx**: The call was successful.
   * *   **3xx**: The call was redirected.
   * *   **4xx**: The call failed.
   * *   **5xx**: A server error occurred.
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
   * The error code returned. Take note of the following rules:
   * 
   * *   **ErrorCode** is not returned if the request succeeds.
   * *   **ErrorCode** is returned if the request fails. For more information, see the "**Error codes**" section in this topic.
   * 
   * @example
   * Null
   */
  errorCode?: string;
  /**
   * @remarks
   * The returned message. Take note of the following rules:
   * 
   * *   If the call is successful, **success** is returned.
   * *   If the call fails, an error code is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 53F15A18-8079-5992-810C-0211A5AE****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID that is used to query the details of the request.
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

