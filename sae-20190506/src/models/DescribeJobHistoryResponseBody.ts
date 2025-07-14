// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeJobHistoryResponseBodyDataJobs extends $dara.Model {
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
   * manual-3db7a8fa-5d40-4edc-92e4-49d50eab****
   */
  jobId?: string;
  /**
   * @remarks
   * The message returned if exceptions occur during job running.
   * 
   * @example
   * Null
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
   * *   **0**: The job was not executed.
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

export class DescribeJobHistoryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The jobs.
   */
  jobs?: DescribeJobHistoryResponseBodyDataJobs[];
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 0 to 10000.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of jobs.
   * 
   * @example
   * 20
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      jobs: 'Jobs',
      pageSize: 'PageSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      jobs: { 'type': 'array', 'itemType': DescribeJobHistoryResponseBodyDataJobs },
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.jobs)) {
      $dara.Model.validateArray(this.jobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobHistoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned. Valid values:
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
  data?: DescribeJobHistoryResponseBodyData;
  /**
   * @remarks
   * The error code returned. Take note of the following rules:
   * 
   * *   If the call is successful, the **ErrorCode** parameter is not returned.
   * *   If the call fails, the **ErrorCode** parameter is returned. For more information, see the "**Error codes**" section in this topic.
   * 
   * @example
   * Null
   */
  errorCode?: string;
  /**
   * @remarks
   * The message returned. Take note of the following rules:
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
      data: DescribeJobHistoryResponseBodyData,
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

