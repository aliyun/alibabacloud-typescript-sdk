// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAIVideoSummaryJobResponseBodyAIVideoSummaryJobListAIVideoSummaryJob extends $dara.Model {
  code?: string;
  creationTime?: string;
  data?: string;
  jobId?: string;
  mediaId?: string;
  message?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      creationTime: 'CreationTime',
      data: 'Data',
      jobId: 'JobId',
      mediaId: 'MediaId',
      message: 'Message',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      creationTime: 'string',
      data: 'string',
      jobId: 'string',
      mediaId: 'string',
      message: 'string',
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

export class ListAIVideoSummaryJobResponseBodyAIVideoSummaryJobList extends $dara.Model {
  AIVideoSummaryJob?: ListAIVideoSummaryJobResponseBodyAIVideoSummaryJobListAIVideoSummaryJob[];
  static names(): { [key: string]: string } {
    return {
      AIVideoSummaryJob: 'AIVideoSummaryJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIVideoSummaryJob: { 'type': 'array', 'itemType': ListAIVideoSummaryJobResponseBodyAIVideoSummaryJobListAIVideoSummaryJob },
    };
  }

  validate() {
    if(Array.isArray(this.AIVideoSummaryJob)) {
      $dara.Model.validateArray(this.AIVideoSummaryJob);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAIVideoSummaryJobResponseBodyNonExistAIVideoSummaryJobIds extends $dara.Model {
  string?: string[];
  static names(): { [key: string]: string } {
    return {
      string: 'String',
    };
  }

  static types(): { [key: string]: any } {
    return {
      string: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.string)) {
      $dara.Model.validateArray(this.string);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAIVideoSummaryJobResponseBody extends $dara.Model {
  AIVideoSummaryJobList?: ListAIVideoSummaryJobResponseBodyAIVideoSummaryJobList;
  nonExistAIVideoSummaryJobIds?: ListAIVideoSummaryJobResponseBodyNonExistAIVideoSummaryJobIds;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      AIVideoSummaryJobList: 'AIVideoSummaryJobList',
      nonExistAIVideoSummaryJobIds: 'NonExistAIVideoSummaryJobIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIVideoSummaryJobList: ListAIVideoSummaryJobResponseBodyAIVideoSummaryJobList,
      nonExistAIVideoSummaryJobIds: ListAIVideoSummaryJobResponseBodyNonExistAIVideoSummaryJobIds,
      requestId: 'string',
    };
  }

  validate() {
    if(this.AIVideoSummaryJobList && typeof (this.AIVideoSummaryJobList as any).validate === 'function') {
      (this.AIVideoSummaryJobList as any).validate();
    }
    if(this.nonExistAIVideoSummaryJobIds && typeof (this.nonExistAIVideoSummaryJobIds as any).validate === 'function') {
      (this.nonExistAIVideoSummaryJobIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

