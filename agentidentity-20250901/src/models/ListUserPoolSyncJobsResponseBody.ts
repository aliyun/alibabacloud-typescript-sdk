// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserPoolSyncJobsResponseBodySynchronizationJobsJobSummary extends $dara.Model {
  created?: string;
  deleted?: string;
  same?: string;
  updated?: string;
  static names(): { [key: string]: string } {
    return {
      created: 'Created',
      deleted: 'Deleted',
      same: 'Same',
      updated: 'Updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'string',
      deleted: 'string',
      same: 'string',
      updated: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserPoolSyncJobsResponseBodySynchronizationJobs extends $dara.Model {
  endTime?: string;
  errorMessage?: string;
  identityProviderType?: string;
  jobSummary?: ListUserPoolSyncJobsResponseBodySynchronizationJobsJobSummary;
  startTime?: string;
  status?: string;
  synchronizationJobId?: string;
  triggerType?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      errorMessage: 'ErrorMessage',
      identityProviderType: 'IdentityProviderType',
      jobSummary: 'JobSummary',
      startTime: 'StartTime',
      status: 'Status',
      synchronizationJobId: 'SynchronizationJobId',
      triggerType: 'TriggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      errorMessage: 'string',
      identityProviderType: 'string',
      jobSummary: ListUserPoolSyncJobsResponseBodySynchronizationJobsJobSummary,
      startTime: 'string',
      status: 'string',
      synchronizationJobId: 'string',
      triggerType: 'string',
    };
  }

  validate() {
    if(this.jobSummary && typeof (this.jobSummary as any).validate === 'function') {
      (this.jobSummary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserPoolSyncJobsResponseBody extends $dara.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  synchronizationJobs?: ListUserPoolSyncJobsResponseBodySynchronizationJobs[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      synchronizationJobs: 'SynchronizationJobs',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      synchronizationJobs: { 'type': 'array', 'itemType': ListUserPoolSyncJobsResponseBodySynchronizationJobs },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.synchronizationJobs)) {
      $dara.Model.validateArray(this.synchronizationJobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

