// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitPreprocessJobsResponseBodyPreprocessJobsPreprocessJob extends $dara.Model {
  /**
   * @remarks
   * The ID of the job.
   * 
   * @example
   * bb396607fd11fee9effbb99c4****
   */
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

export class SubmitPreprocessJobsResponseBodyPreprocessJobs extends $dara.Model {
  preprocessJob?: SubmitPreprocessJobsResponseBodyPreprocessJobsPreprocessJob[];
  static names(): { [key: string]: string } {
    return {
      preprocessJob: 'PreprocessJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preprocessJob: { 'type': 'array', 'itemType': SubmitPreprocessJobsResponseBodyPreprocessJobsPreprocessJob },
    };
  }

  validate() {
    if(Array.isArray(this.preprocessJob)) {
      $dara.Model.validateArray(this.preprocessJob);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitPreprocessJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the job.
   */
  preprocessJobs?: SubmitPreprocessJobsResponseBodyPreprocessJobs;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E4EBD2BF-5EB0-4476-8829-9D94E1B1****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      preprocessJobs: 'PreprocessJobs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preprocessJobs: SubmitPreprocessJobsResponseBodyPreprocessJobs,
      requestId: 'string',
    };
  }

  validate() {
    if(this.preprocessJobs && typeof (this.preprocessJobs as any).validate === 'function') {
      (this.preprocessJobs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

