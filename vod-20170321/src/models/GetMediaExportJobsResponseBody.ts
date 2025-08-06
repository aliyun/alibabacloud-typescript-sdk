// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaExportJobsResponseBodyMediaExportJobList extends $dara.Model {
  appId?: string;
  creationTime?: string;
  errorCode?: string;
  errorMessage?: string;
  fileURL?: string;
  jobId?: string;
  jobName?: string;
  match?: string;
  mediaType?: string;
  modificationTime?: string;
  sortBy?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      creationTime: 'CreationTime',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      fileURL: 'FileURL',
      jobId: 'JobId',
      jobName: 'JobName',
      match: 'Match',
      mediaType: 'MediaType',
      modificationTime: 'ModificationTime',
      sortBy: 'SortBy',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      creationTime: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      fileURL: 'string',
      jobId: 'string',
      jobName: 'string',
      match: 'string',
      mediaType: 'string',
      modificationTime: 'string',
      sortBy: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaExportJobsResponseBody extends $dara.Model {
  failedJobIds?: string[];
  mediaExportJobList?: GetMediaExportJobsResponseBodyMediaExportJobList[];
  nonExistJobIds?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      failedJobIds: 'FailedJobIds',
      mediaExportJobList: 'MediaExportJobList',
      nonExistJobIds: 'NonExistJobIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedJobIds: { 'type': 'array', 'itemType': 'string' },
      mediaExportJobList: { 'type': 'array', 'itemType': GetMediaExportJobsResponseBodyMediaExportJobList },
      nonExistJobIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.failedJobIds)) {
      $dara.Model.validateArray(this.failedJobIds);
    }
    if(Array.isArray(this.mediaExportJobList)) {
      $dara.Model.validateArray(this.mediaExportJobList);
    }
    if(Array.isArray(this.nonExistJobIds)) {
      $dara.Model.validateArray(this.nonExistJobIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

