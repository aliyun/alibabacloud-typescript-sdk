// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateJwtAuthenticationTokenRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  audiences?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_example_identifier
   */
  credentialProviderIdentifier?: string;
  customClaims?: { [key: string]: any };
  /**
   * @example
   * 900
   */
  expiration?: number;
  /**
   * @example
   * true
   */
  includeDerivedShortToken?: boolean;
  /**
   * @example
   * https://test.issuer.com
   */
  issuer?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_jwt_subject
   */
  subject?: string;
  static names(): { [key: string]: string } {
    return {
      audiences: 'audiences',
      credentialProviderIdentifier: 'credentialProviderIdentifier',
      customClaims: 'customClaims',
      expiration: 'expiration',
      includeDerivedShortToken: 'includeDerivedShortToken',
      issuer: 'issuer',
      subject: 'subject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audiences: { 'type': 'array', 'itemType': 'string' },
      credentialProviderIdentifier: 'string',
      customClaims: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      expiration: 'number',
      includeDerivedShortToken: 'boolean',
      issuer: 'string',
      subject: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.audiences)) {
      $dara.Model.validateArray(this.audiences);
    }
    if(this.customClaims) {
      $dara.Model.validateMap(this.customClaims);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

