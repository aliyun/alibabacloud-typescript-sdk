// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachElasticNetworkInterfaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed reason why the access was denied.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * Response
   * 
   * @example
   * You don\\"t have the permission to do this operation.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9C50C9CD-E799-54DA-BA7A-1FAF3DF8****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
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

