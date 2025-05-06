// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelJobRunResponseBody extends $dara.Model {
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * jr-1a2bc3
   */
  jobRunId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobRunId: 'jobRunId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobRunId: 'string',
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

