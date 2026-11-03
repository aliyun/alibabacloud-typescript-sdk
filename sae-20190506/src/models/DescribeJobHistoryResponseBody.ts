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
   * The completion time of the job.
   * 
   * @example
   * 1657522839
   */
  completionTime?: number;
  /**
   * @remarks
   * The number of failed instances.
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
   * manual-3db7a8fa-5d40-4edc-92e4-49d50eab****
   */
  jobId?: string;
  /**
   * @remarks
   * The additional information returned when an exception occurs during job execution.
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
   * - **0**: Not run.
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
   * The number of successful instances.
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
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The list of jobs.
   */
  jobs?: DescribeJobHistoryResponseBodyDataJobs[];
  /**
   * @remarks
   * The number of entries per page in the paging Settings for a paged query. Valid values: 0 to 10000.
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
   * The API status code or POP error code. Valid values:
   * - **2xx**: Success.
   * - **3xx**: Redirect.
   * - **4xx**: Client error.
   * - **5xx**: Server error.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: DescribeJobHistoryResponseBodyData;
  /**
   * @remarks
   * The error code.
   * - If the request is successful, the **ErrorCode** parameter is not returned.
   * - If the request fails, the **ErrorCode** parameter is returned. For more information, see the **Error codes** section in this topic.
   * 
   * @example
   * InvalidAppId.NotFound
   */
  errorCode?: string;
  /**
   * @remarks
   * The additional information.
   * - If the request is successful, **success** is returned.
   * - If the request fails, a specific error code is returned.
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
   * - **true**: The query succeeded.
   * - **false**: The query failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID used to query detailed call information.
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

