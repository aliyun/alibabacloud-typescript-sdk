// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SyncMessengerSubscriptionTokenResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 39***
   */
  requestId?: string;
  /**
   * @example
   * false
   */
  success?: boolean;
  /**
   * @example
   * 39ss**
   */
  taskCode?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskCode: 'TaskCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

