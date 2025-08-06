// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitPreprocessJobsConsoleResponseBodyTranscodeJobsTranscodeJob extends $dara.Model {
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitPreprocessJobsConsoleResponseBodyTranscodeJobs extends $dara.Model {
  transcodeJob?: SubmitPreprocessJobsConsoleResponseBodyTranscodeJobsTranscodeJob[];
  static names(): { [key: string]: string } {
    return {
      transcodeJob: 'TranscodeJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transcodeJob: { 'type': 'array', 'itemType': SubmitPreprocessJobsConsoleResponseBodyTranscodeJobsTranscodeJob },
    };
  }

  validate() {
    if(Array.isArray(this.transcodeJob)) {
      $dara.Model.validateArray(this.transcodeJob);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitPreprocessJobsConsoleResponseBody extends $dara.Model {
  requestId?: string;
  transcodeJobs?: SubmitPreprocessJobsConsoleResponseBodyTranscodeJobs;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      transcodeJobs: 'TranscodeJobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      transcodeJobs: SubmitPreprocessJobsConsoleResponseBodyTranscodeJobs,
    };
  }

  validate() {
    if(this.transcodeJobs && typeof (this.transcodeJobs as any).validate === 'function') {
      (this.transcodeJobs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

