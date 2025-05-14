// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSegmentationJobResponseBody extends $dara.Model {
  /**
   * @example
   * ****cdb3e74639973036bc84****
   */
  jobId?: string;
  /**
   * @example
   * ******3B-0E1A-586A-AC29-742247******
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

