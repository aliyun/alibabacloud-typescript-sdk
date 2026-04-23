// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitTranscodeJobsResponseBodyTranscodeJobsTranscodeJob extends $dara.Model {
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

export class SubmitTranscodeJobsResponseBodyTranscodeJobs extends $dara.Model {
  transcodeJob?: SubmitTranscodeJobsResponseBodyTranscodeJobsTranscodeJob[];
  static names(): { [key: string]: string } {
    return {
      transcodeJob: 'TranscodeJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transcodeJob: { 'type': 'array', 'itemType': SubmitTranscodeJobsResponseBodyTranscodeJobsTranscodeJob },
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

export class SubmitTranscodeJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E4EBD2BF-5EB0-4476-8829-9D94E1B1****
   */
  requestId?: string;
  transcodeJobs?: SubmitTranscodeJobsResponseBodyTranscodeJobs;
  /**
   * @remarks
   * The ID of the transcoding task that was submitted.
   * 
   * @example
   * 9f4a0df7da2c8a81c8c0408c84****
   */
  transcodeTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      transcodeJobs: 'TranscodeJobs',
      transcodeTaskId: 'TranscodeTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      transcodeJobs: SubmitTranscodeJobsResponseBodyTranscodeJobs,
      transcodeTaskId: 'string',
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

