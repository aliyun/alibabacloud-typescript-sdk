// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAScriptsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The asynchronous task ID.
   * 
   * @example
   * 2e82b5f4-1ba9-4d20-89c8-1082ebaa****
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ACA19FE1-C09E-53C7-8FDA-560F49D71891
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

