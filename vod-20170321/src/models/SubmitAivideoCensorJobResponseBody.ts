// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAIVideoCensorJobResponseBodyAIVideoCensorJob extends $dara.Model {
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

export class SubmitAIVideoCensorJobResponseBody extends $dara.Model {
  AIVideoCensorJob?: SubmitAIVideoCensorJobResponseBodyAIVideoCensorJob;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      AIVideoCensorJob: 'AIVideoCensorJob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIVideoCensorJob: SubmitAIVideoCensorJobResponseBodyAIVideoCensorJob,
      requestId: 'string',
    };
  }

  validate() {
    if(this.AIVideoCensorJob && typeof (this.AIVideoCensorJob as any).validate === 'function') {
      (this.AIVideoCensorJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

