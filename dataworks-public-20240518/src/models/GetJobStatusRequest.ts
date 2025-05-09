// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the asynchronous task that is generated after you call an asynchronous operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 70ecdaec-bf21-4c11-8ecb-4f77453ceea8
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

