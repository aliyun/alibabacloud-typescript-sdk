// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitDynamicImageJobResponseBodyDynamicImageJob extends $dara.Model {
  /**
   * @remarks
   * The ID of the animated image job.
   * 
   * @example
   * ad90a501b1bfb72374ad0050746****
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

export class SubmitDynamicImageJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the animated image job.
   */
  dynamicImageJob?: SubmitDynamicImageJobResponseBodyDynamicImageJob;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 25818875-5F78-74A6-BEF6-D7393642****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicImageJob: 'DynamicImageJob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicImageJob: SubmitDynamicImageJobResponseBodyDynamicImageJob,
      requestId: 'string',
    };
  }

  validate() {
    if(this.dynamicImageJob && typeof (this.dynamicImageJob as any).validate === 'function') {
      (this.dynamicImageJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

