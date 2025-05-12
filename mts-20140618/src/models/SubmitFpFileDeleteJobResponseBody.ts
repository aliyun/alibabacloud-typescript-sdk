// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitFpFileDeleteJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 39f8e0bc005e4f309379701645f4****
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D127C68E-F1A1-4CE5-A874-8FF724881A12
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

