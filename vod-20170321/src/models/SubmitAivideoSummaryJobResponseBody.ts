// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAIVideoSummaryJobResponseBodyAIVideoSummaryJob extends $dara.Model {
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

export class SubmitAIVideoSummaryJobResponseBody extends $dara.Model {
  AIVideoSummaryJob?: SubmitAIVideoSummaryJobResponseBodyAIVideoSummaryJob;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      AIVideoSummaryJob: 'AIVideoSummaryJob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIVideoSummaryJob: SubmitAIVideoSummaryJobResponseBodyAIVideoSummaryJob,
      requestId: 'string',
    };
  }

  validate() {
    if(this.AIVideoSummaryJob && typeof (this.AIVideoSummaryJob as any).validate === 'function') {
      (this.AIVideoSummaryJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

