// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAIVideoCategoryJobResponseBodyAIVideoCategoryJob extends $dara.Model {
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

export class SubmitAIVideoCategoryJobResponseBody extends $dara.Model {
  AIVideoCategoryJob?: SubmitAIVideoCategoryJobResponseBodyAIVideoCategoryJob;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      AIVideoCategoryJob: 'AIVideoCategoryJob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIVideoCategoryJob: SubmitAIVideoCategoryJobResponseBodyAIVideoCategoryJob,
      requestId: 'string',
    };
  }

  validate() {
    if(this.AIVideoCategoryJob && typeof (this.AIVideoCategoryJob as any).validate === 'function') {
      (this.AIVideoCategoryJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

