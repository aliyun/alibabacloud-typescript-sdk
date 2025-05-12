// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefundVccResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * >  This parameter is returned only if Resource Access Management (RAM) permission verification failed.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code
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
   * Response message, which is \\"success\\" if the request succeeds
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * AC8C713A-A9F4-5984-A5E1-76496DF35153
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

