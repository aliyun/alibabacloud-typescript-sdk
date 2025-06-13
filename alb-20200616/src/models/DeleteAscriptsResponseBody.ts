// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAScriptsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The asynchronous task ID.
   * 
   * @example
   * 03cf3fe1-ab37-479b-92a6-b481d762****
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1B7B7695-3596-50C8-B739-030C6C685E61
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

