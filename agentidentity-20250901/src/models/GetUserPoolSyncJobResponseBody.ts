// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserPoolSyncJobResponseBodySynchronizationJobJobSummary extends $dara.Model {
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

export class GetUserPoolSyncJobResponseBodySynchronizationJob extends $dara.Model {
  endTime?: string;
  errorMessage?: string;
  identityProviderType?: string;
  jobSummary?: GetUserPoolSyncJobResponseBodySynchronizationJobJobSummary;
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
      jobSummary: GetUserPoolSyncJobResponseBodySynchronizationJobJobSummary,
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

export class GetUserPoolSyncJobResponseBody extends $dara.Model {
  requestId?: string;
  synchronizationJob?: GetUserPoolSyncJobResponseBodySynchronizationJob;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      synchronizationJob: 'SynchronizationJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      synchronizationJob: GetUserPoolSyncJobResponseBodySynchronizationJob,
    };
  }

  validate() {
    if(this.synchronizationJob && typeof (this.synchronizationJob as any).validate === 'function') {
      (this.synchronizationJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

