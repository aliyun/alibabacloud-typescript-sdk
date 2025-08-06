// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAIASRJobResponseBodyAIASRJob extends $dara.Model {
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

export class SubmitAIASRJobResponseBody extends $dara.Model {
  AIASRJob?: SubmitAIASRJobResponseBodyAIASRJob;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      AIASRJob: 'AIASRJob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIASRJob: SubmitAIASRJobResponseBodyAIASRJob,
      requestId: 'string',
    };
  }

  validate() {
    if(this.AIASRJob && typeof (this.AIASRJob as any).validate === 'function') {
      (this.AIASRJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

