// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAIAgentVideoAuditTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * **********fb04483915d4f2**********
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * **********-586A-AC29-742247******
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

