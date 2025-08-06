// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAIVideoFaceRecogJobResponseBodyAIVideoFaceRecogJobListAIVideoFaceRecogJob extends $dara.Model {
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

export class ListAIVideoFaceRecogJobResponseBodyAIVideoFaceRecogJobList extends $dara.Model {
  AIVideoFaceRecogJob?: ListAIVideoFaceRecogJobResponseBodyAIVideoFaceRecogJobListAIVideoFaceRecogJob[];
  static names(): { [key: string]: string } {
    return {
      AIVideoFaceRecogJob: 'AIVideoFaceRecogJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIVideoFaceRecogJob: { 'type': 'array', 'itemType': ListAIVideoFaceRecogJobResponseBodyAIVideoFaceRecogJobListAIVideoFaceRecogJob },
    };
  }

  validate() {
    if(Array.isArray(this.AIVideoFaceRecogJob)) {
      $dara.Model.validateArray(this.AIVideoFaceRecogJob);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAIVideoFaceRecogJobResponseBodyNonExistAIVideoFaceRecogJobIds extends $dara.Model {
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

export class ListAIVideoFaceRecogJobResponseBody extends $dara.Model {
  AIVideoFaceRecogJobList?: ListAIVideoFaceRecogJobResponseBodyAIVideoFaceRecogJobList;
  nonExistAIVideoFaceRecogJobIds?: ListAIVideoFaceRecogJobResponseBodyNonExistAIVideoFaceRecogJobIds;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      AIVideoFaceRecogJobList: 'AIVideoFaceRecogJobList',
      nonExistAIVideoFaceRecogJobIds: 'NonExistAIVideoFaceRecogJobIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIVideoFaceRecogJobList: ListAIVideoFaceRecogJobResponseBodyAIVideoFaceRecogJobList,
      nonExistAIVideoFaceRecogJobIds: ListAIVideoFaceRecogJobResponseBodyNonExistAIVideoFaceRecogJobIds,
      requestId: 'string',
    };
  }

  validate() {
    if(this.AIVideoFaceRecogJobList && typeof (this.AIVideoFaceRecogJobList as any).validate === 'function') {
      (this.AIVideoFaceRecogJobList as any).validate();
    }
    if(this.nonExistAIVideoFaceRecogJobIds && typeof (this.nonExistAIVideoFaceRecogJobIds as any).validate === 'function') {
      (this.nonExistAIVideoFaceRecogJobIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

