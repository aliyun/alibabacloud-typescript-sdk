// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAIVideoTerrorismRecogJobResponseBodyAIVideoTerrorismRecogJob extends $dara.Model {
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

export class SubmitAIVideoTerrorismRecogJobResponseBody extends $dara.Model {
  AIVideoTerrorismRecogJob?: SubmitAIVideoTerrorismRecogJobResponseBodyAIVideoTerrorismRecogJob;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      AIVideoTerrorismRecogJob: 'AIVideoTerrorismRecogJob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIVideoTerrorismRecogJob: SubmitAIVideoTerrorismRecogJobResponseBodyAIVideoTerrorismRecogJob,
      requestId: 'string',
    };
  }

  validate() {
    if(this.AIVideoTerrorismRecogJob && typeof (this.AIVideoTerrorismRecogJob as any).validate === 'function') {
      (this.AIVideoTerrorismRecogJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

