// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRepoSyncTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return value
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the invocation succeeded. Valid values:
   * 
   * - `true`: The invocation succeeded.
   * 
   * - `false`: Failed to invoke.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 8F8A0BA6-7F06-4BAE-B147-10BD6A25****
   */
  requestId?: string;
  /**
   * @remarks
   * Sync task ID
   * 
   * @example
   * rst-gbch330f0c****
   */
  syncTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      syncTaskId: 'SyncTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
      syncTaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

