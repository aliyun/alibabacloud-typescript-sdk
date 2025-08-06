// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAIVideoTagJobResponseBodyAIVideoTagJob extends $dara.Model {
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

export class SubmitAIVideoTagJobResponseBody extends $dara.Model {
  AIVideoTagJob?: SubmitAIVideoTagJobResponseBodyAIVideoTagJob;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      AIVideoTagJob: 'AIVideoTagJob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIVideoTagJob: SubmitAIVideoTagJobResponseBodyAIVideoTagJob,
      requestId: 'string',
    };
  }

  validate() {
    if(this.AIVideoTagJob && typeof (this.AIVideoTagJob as any).validate === 'function') {
      (this.AIVideoTagJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

