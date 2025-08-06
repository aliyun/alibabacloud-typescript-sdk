// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAIVideoTagJobResponseBodyAIVideoTagJobListAIVideoTagJob extends $dara.Model {
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

export class ListAIVideoTagJobResponseBodyAIVideoTagJobList extends $dara.Model {
  AIVideoTagJob?: ListAIVideoTagJobResponseBodyAIVideoTagJobListAIVideoTagJob[];
  static names(): { [key: string]: string } {
    return {
      AIVideoTagJob: 'AIVideoTagJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIVideoTagJob: { 'type': 'array', 'itemType': ListAIVideoTagJobResponseBodyAIVideoTagJobListAIVideoTagJob },
    };
  }

  validate() {
    if(Array.isArray(this.AIVideoTagJob)) {
      $dara.Model.validateArray(this.AIVideoTagJob);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAIVideoTagJobResponseBodyNonExistAIVideoTagJobIds extends $dara.Model {
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

export class ListAIVideoTagJobResponseBody extends $dara.Model {
  AIVideoTagJobList?: ListAIVideoTagJobResponseBodyAIVideoTagJobList;
  nonExistAIVideoTagJobIds?: ListAIVideoTagJobResponseBodyNonExistAIVideoTagJobIds;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      AIVideoTagJobList: 'AIVideoTagJobList',
      nonExistAIVideoTagJobIds: 'NonExistAIVideoTagJobIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIVideoTagJobList: ListAIVideoTagJobResponseBodyAIVideoTagJobList,
      nonExistAIVideoTagJobIds: ListAIVideoTagJobResponseBodyNonExistAIVideoTagJobIds,
      requestId: 'string',
    };
  }

  validate() {
    if(this.AIVideoTagJobList && typeof (this.AIVideoTagJobList as any).validate === 'function') {
      (this.AIVideoTagJobList as any).validate();
    }
    if(this.nonExistAIVideoTagJobIds && typeof (this.nonExistAIVideoTagJobIds as any).validate === 'function') {
      (this.nonExistAIVideoTagJobIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

