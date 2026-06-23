// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScheduledPreloadJobsResponseBodyJobs extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * 15685865xxx14622
   */
  aliUid?: string;
  /**
   * @remarks
   * The task creation time in ISO 8601 format (e.g., 2024-01-01T00:00:00+Z).
   * 
   * @example
   * 2024-06-01T08:53:13Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The list of prefetch domains.
   * 
   * @example
   * testurl.com
   */
  domains?: string;
  /**
   * @remarks
   * The error information.
   * 
   * @example
   * invalid domain:test.com
   */
  errorInfo?: string;
  /**
   * @remarks
   * The number of prefetch plans.
   * 
   * @example
   * 1
   */
  executionCount?: number;
  /**
   * @remarks
   * The OSS URL of the failed file.
   * 
   * @example
   * https://xxxobject.oss-cn-reginon.aliyuncs.com/9d91_xxxxxxxxxxx_158bb6e0f97c477791209bb46bd599f7
   */
  failedFileOss?: string;
  /**
   * @remarks
   * The URL list file ID (used for downloading).
   * 
   * @example
   * 665d3b48621bccf3fe29e1a7
   */
  fileId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 665d3af3621bccf3fe29e1a4
   */
  id?: string;
  /**
   * @remarks
   * The URL insertion method.
   * 
   * @example
   * oss
   */
  insertWay?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * Site ID.
   * 
   * @example
   * 190007158391808
   */
  siteId?: number;
  /**
   * @remarks
   * The number of URLs that have been submitted to the system for prefetch.
   * 
   * @example
   * 1
   */
  taskSubmitted?: number;
  /**
   * @remarks
   * The task type (refresh/prefetch).
   * 
   * @example
   * preload
   */
  taskType?: string;
  /**
   * @remarks
   * The total number of URLs.
   * 
   * @example
   * 2
   */
  urlCount?: number;
  /**
   * @remarks
   * The number of submitted URLs.
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
   * The list of prefetch task information.
   */
  jobs?: ListScheduledPreloadJobsResponseBodyJobs[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CB1A380B-09F0-41BB-A198-72F8FD6DA2FE
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records after filtering.
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

