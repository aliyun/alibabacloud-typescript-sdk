// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAIVideoPornRecogJobResponseBodyAIVideoPornRecogJob extends $dara.Model {
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

export class SubmitAIVideoPornRecogJobResponseBody extends $dara.Model {
  AIVideoPornRecogJob?: SubmitAIVideoPornRecogJobResponseBodyAIVideoPornRecogJob;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      AIVideoPornRecogJob: 'AIVideoPornRecogJob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIVideoPornRecogJob: SubmitAIVideoPornRecogJobResponseBodyAIVideoPornRecogJob,
      requestId: 'string',
    };
  }

  validate() {
    if(this.AIVideoPornRecogJob && typeof (this.AIVideoPornRecogJob as any).validate === 'function') {
      (this.AIVideoPornRecogJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

