// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchVccConnectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * Detailed reason for access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Code number
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * Response content
   * 
   * @example
   * {}
   */
  content?: any;
  /**
   * @remarks
   * Return message
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * AC8C713A-A9F4-5984-A5E1-76496DF3EFCD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: 'any',
      message: 'string',
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

