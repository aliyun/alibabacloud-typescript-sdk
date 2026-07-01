// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddYikeUserCreditResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the operation fails. The following value is supported:
   * 
   * - NOT_ENOUGH_ALLOCATE_CREDIT_QUOTA: The credit balance of the main account is insufficient.
   * 
   * @example
   * NOT_ENOUGH_ALLOCATE_CREDIT_QUOTA
   */
  errorCode?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ****63E8B7C7-4812-46AD-0FA56029AC86****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful.
   * 
   * - true: The operation was successful.
   * 
   * - false: The operation failed.
   * 
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

