// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddYikeUserCreditResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. This parameter is returned when the increase fails. Valid values:
   * - NOT_ENOUGH_ALLOCATE_CREDIT_QUOTA: The credit balance of the Alibaba Cloud account is insufficient.
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
   * Indicates whether the credits are increased successfully. Valid values:
   * - true: Succeeded.
   * - false: Failed.
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

