// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiResponseBodyOpenIdConnectConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the parameter that corresponds to the token.
   * 
   * @example
   * xxx
   */
  idTokenParamName?: string;
  /**
   * @remarks
   * The OpenID Connect mode. Valid values:
   * 
   * *   **IDTOKEN**: indicates the APIs that are called by clients to obtain tokens. If you specify this value, the PublicKeyId parameter and the PublicKey parameter are required.
   * *   **BUSINESS**: indicates business APIs. Tokens are used to call the business APIs. If you specify this value, the IdTokenParamName parameter is required.
   * 
   * @example
   * IDTOKEN
   */
  openIdApiType?: string;
  /**
   * @remarks
   * The public key.
   * 
   * @example
   * EB1837F8693CCED0BF750B3AD48467BEB569E780A14591CF92
   */
  publicKey?: string;
  /**
   * @remarks
   * The ID of the public key.
   * 
   * @example
   * 88483727556929326703309904351185815489
   */
  publicKeyId?: string;
  static names(): { [key: string]: string } {
    return {
      idTokenParamName: 'IdTokenParamName',
      openIdApiType: 'OpenIdApiType',
      publicKey: 'PublicKey',
      publicKeyId: 'PublicKeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idTokenParamName: 'string',
      openIdApiType: 'string',
      publicKey: 'string',
      publicKeyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

