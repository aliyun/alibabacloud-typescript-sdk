// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSAMLProviderRequest extends $dara.Model {
  /**
   * @remarks
   * The supported signature algorithm. Valid values:
   * 
   * - rsa-sha256
   * 
   * - rsa-sha1 (default)
   * 
   * @example
   * rsa-sha1
   */
  authnSignAlgo?: string;
  /**
   * @remarks
   * The IdP escription.
   * 
   * @example
   * This is a provider.
   */
  description?: string;
  /**
   * @remarks
   * The metadata file, which is Base64-encoded.
   * 
   * The file is provided by an IdP that supports Security Assertion Markup Language (SAML) 2.0.
   * 
   * @example
   * PD94bWwgdmVy****
   */
  encodedSAMLMetadataDocument?: string;
  /**
   * @remarks
   * The IdP name.
   * 
   * It can be up to 128 characters in length, and can contain letters, digits, `periods (.), hyphens (-), and underscores (_)`. The name cannot start or end with `periods (.), hyphens (-), or underscores (_)`.
   * 
   * This parameter is required.
   * 
   * @example
   * test-provider
   */
  SAMLProviderName?: string;
  static names(): { [key: string]: string } {
    return {
      authnSignAlgo: 'AuthnSignAlgo',
      description: 'Description',
      encodedSAMLMetadataDocument: 'EncodedSAMLMetadataDocument',
      SAMLProviderName: 'SAMLProviderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authnSignAlgo: 'string',
      description: 'string',
      encodedSAMLMetadataDocument: 'string',
      SAMLProviderName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

