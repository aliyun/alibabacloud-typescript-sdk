// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAIASRJobResponseBodyAIASRJobListAIASRJob extends $dara.Model {
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

export class ListAIASRJobResponseBodyAIASRJobList extends $dara.Model {
  AIASRJob?: ListAIASRJobResponseBodyAIASRJobListAIASRJob[];
  static names(): { [key: string]: string } {
    return {
      AIASRJob: 'AIASRJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIASRJob: { 'type': 'array', 'itemType': ListAIASRJobResponseBodyAIASRJobListAIASRJob },
    };
  }

  validate() {
    if(Array.isArray(this.AIASRJob)) {
      $dara.Model.validateArray(this.AIASRJob);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAIASRJobResponseBodyNonExistAIASRJobIds extends $dara.Model {
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

export class ListAIASRJobResponseBody extends $dara.Model {
  AIASRJobList?: ListAIASRJobResponseBodyAIASRJobList;
  nonExistAIASRJobIds?: ListAIASRJobResponseBodyNonExistAIASRJobIds;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      AIASRJobList: 'AIASRJobList',
      nonExistAIASRJobIds: 'NonExistAIASRJobIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIASRJobList: ListAIASRJobResponseBodyAIASRJobList,
      nonExistAIASRJobIds: ListAIASRJobResponseBodyNonExistAIASRJobIds,
      requestId: 'string',
    };
  }

  validate() {
    if(this.AIASRJobList && typeof (this.AIASRJobList as any).validate === 'function') {
      (this.AIASRJobList as any).validate();
    }
    if(this.nonExistAIASRJobIds && typeof (this.nonExistAIASRJobIds as any).validate === 'function') {
      (this.nonExistAIASRJobIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

