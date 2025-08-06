// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMediaExportJobsResponseBodyMediaExportJobList extends $dara.Model {
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

export class ListMediaExportJobsResponseBody extends $dara.Model {
  mediaExportJobList?: ListMediaExportJobsResponseBodyMediaExportJobList[];
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      mediaExportJobList: 'MediaExportJobList',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaExportJobList: { 'type': 'array', 'itemType': ListMediaExportJobsResponseBodyMediaExportJobList },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.mediaExportJobList)) {
      $dara.Model.validateArray(this.mediaExportJobList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

