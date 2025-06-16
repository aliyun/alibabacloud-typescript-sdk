// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFailoverTestJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the failover test.
   * 
   * @example
   * ftj-xxxxxxxxx
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C44F62BE-9CE7-4277-B117-69243F3988BF
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

