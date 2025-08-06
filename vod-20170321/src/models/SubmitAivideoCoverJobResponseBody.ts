// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAIVideoCoverJobResponseBodyAIVideoCoverJob extends $dara.Model {
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

export class SubmitAIVideoCoverJobResponseBody extends $dara.Model {
  AIVideoCoverJob?: SubmitAIVideoCoverJobResponseBodyAIVideoCoverJob;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      AIVideoCoverJob: 'AIVideoCoverJob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIVideoCoverJob: SubmitAIVideoCoverJobResponseBodyAIVideoCoverJob,
      requestId: 'string',
    };
  }

  validate() {
    if(this.AIVideoCoverJob && typeof (this.AIVideoCoverJob as any).validate === 'function') {
      (this.AIVideoCoverJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

