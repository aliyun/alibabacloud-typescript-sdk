// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubYikeUserCreditResponseBody extends $dara.Model {
  /**
   * @example
   * NOT_ENOUGH_ALLOCATE_CREDIT_QUOTA
   */
  errorCode?: string;
  /**
   * @remarks
   * RequestId
   * 
   * @example
   * ****63E8B7C7-4812-46AD-0FA56029AC86****
   */
  requestId?: string;
  /**
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

