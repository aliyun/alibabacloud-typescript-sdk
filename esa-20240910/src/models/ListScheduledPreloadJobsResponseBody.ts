// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScheduledPreloadJobsResponseBodyJobs extends $dara.Model {
  aliUid?: string;
  createdAt?: string;
  domains?: string;
  errorInfo?: string;
  executionCount?: number;
  failedFileOss?: string;
  fileId?: string;
  id?: string;
  insertWay?: string;
  name?: string;
  siteId?: number;
  taskSubmitted?: number;
  taskType?: string;
  urlCount?: number;
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
  jobs?: ListScheduledPreloadJobsResponseBodyJobs[];
  requestId?: string;
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

