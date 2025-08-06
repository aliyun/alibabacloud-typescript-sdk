// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAIVideoFaceRecogJobResponseBodyAIVideoFaceRecogJob extends $dara.Model {
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

export class SubmitAIVideoFaceRecogJobResponseBody extends $dara.Model {
  AIVideoFaceRecogJob?: SubmitAIVideoFaceRecogJobResponseBodyAIVideoFaceRecogJob;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      AIVideoFaceRecogJob: 'AIVideoFaceRecogJob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIVideoFaceRecogJob: SubmitAIVideoFaceRecogJobResponseBodyAIVideoFaceRecogJob,
      requestId: 'string',
    };
  }

  validate() {
    if(this.AIVideoFaceRecogJob && typeof (this.AIVideoFaceRecogJob as any).validate === 'function') {
      (this.AIVideoFaceRecogJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

