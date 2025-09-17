// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccessTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The value of the activation code. The value is returned only once after the CreateAccessToken operation is called and cannot be subsequently queried. Make sure that you properly save the returned value.
   * 
   * @example
   * B57QoTXEA2Tytr0uZWoNY5Aju5Jt****
   */
  accessTokenCode?: string;
  /**
   * @remarks
   * The ID of the activation code.
   * 
   * @example
   * at-bp1akz2zp67r0k6r****
   */
  accessTokenId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DB4A7EA2-6FDA-5655-B067-854532FB****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessTokenCode: 'AccessTokenCode',
      accessTokenId: 'AccessTokenId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTokenCode: 'string',
      accessTokenId: 'string',
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

