// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScheduledPreloadJobsResponseBodyJobs extends $dara.Model {
  /**
   * @remarks
   * Alibaba Cloud account ID.
   * 
   * @example
   * 15685865xxx14622
   */
  aliUid?: string;
  /**
   * @remarks
   * Job creation time.
   * 
   * @example
   * 2024-06-01T08:53:13Z
   */
  createdAt?: string;
  /**
   * @remarks
   * List of domains to prefetch.
   * 
   * @example
   * testurl.com
   */
  domains?: string;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * invalid domain:test.com
   */
  errorInfo?: string;
  /**
   * @remarks
   * Number of prefetch schedules.
   * 
   * @example
   * 1
   */
  executionCount?: number;
  /**
   * @remarks
   * The OSS address of the failed file.
   * 
   * @example
   * https://xxxobject.oss-cn-reginon.aliyuncs.com/9d91_xxxxxxxxxxx_158bb6e0f97c477791209bb46bd599f7
   */
  failedFileOss?: string;
  /**
   * @remarks
   * URL list file ID (used for downloading).
   * 
   * @example
   * 665d3b48621bccf3fe29e1a7
   */
  fileId?: string;
  /**
   * @remarks
   * Job ID.
   * 
   * @example
   * 665d3af3621bccf3fe29e1a4
   */
  id?: string;
  /**
   * @remarks
   * URL insertion method.
   * 
   * @example
   * oss
   */
  insertWay?: string;
  /**
   * @remarks
   * Job name.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * Site ID
   * 
   * @example
   * 190007158391808
   */
  siteId?: number;
  /**
   * @remarks
   * Number of URLs submitted to the system for prefetching.
   * 
   * @example
   * 1
   */
  taskSubmitted?: number;
  /**
   * @remarks
   * Task type (refresh or prefetch).
   * 
   * @example
   * preload
   */
  taskType?: string;
  /**
   * @remarks
   * Total number of URLs.
   * 
   * @example
   * 2
   */
  urlCount?: number;
  /**
   * @remarks
   * Number of URLs submitted.
   * 
   * @example
   * 1
   */
  urlSubmitted?: number;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      createdAt: 'CreatedAt',
      domains: 'Domains',
      errorInfo: 'ErrorInfo',
      executionCount: 'ExecutionCount',
      failedFileOss: 'FailedFileOss',
      fileId: 'FileId',
      id: 'Id',
      insertWay: 'InsertWay',
      name: 'Name',
      siteId: 'SiteId',
      taskSubmitted: 'TaskSubmitted',
      taskType: 'TaskType',
      urlCount: 'UrlCount',
      urlSubmitted: 'UrlSubmitted',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      createdAt: 'string',
      domains: 'string',
      errorInfo: 'string',
      executionCount: 'number',
      failedFileOss: 'string',
      fileId: 'string',
      id: 'string',
      insertWay: 'string',
      name: 'string',
      siteId: 'number',
      taskSubmitted: 'number',
      taskType: 'string',
      urlCount: 'number',
      urlSubmitted: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduledPreloadJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of prefetch job details.
   */
  jobs?: ListScheduledPreloadJobsResponseBodyJobs[];
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * CB1A380B-09F0-41BB-A198-72F8FD6DA2FE
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of records after filtering.
   * 
   * @example
   * 5
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      jobs: 'Jobs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobs: { 'type': 'array', 'itemType': ListScheduledPreloadJobsResponseBodyJobs },
      requestId: 'string',
      totalCount: 'string',
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

