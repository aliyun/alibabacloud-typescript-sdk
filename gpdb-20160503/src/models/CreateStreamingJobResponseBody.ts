// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStreamingJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * Job ID.
   * 
   * @example
   * 1
   */
  jobId?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * B4CAF581-2AC7-41AD-8940-D56DF7AADF5B
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
      jobId: 'number',
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

