// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddChatGroupResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * None
   */
  message?: string;
  /**
   * @example
   * 399s88-***
   */
  requestId?: string;
  /**
   * @example
   * false
   */
  success?: boolean;
  /**
   * @example
   * 8938****
   */
  uniqueCode?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      uniqueCode: 'UniqueCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      uniqueCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

