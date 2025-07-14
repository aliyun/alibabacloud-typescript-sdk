// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddFingerprintToOIDCProviderRequest extends $dara.Model {
  /**
   * @remarks
   * The fingerprint of the HTTPS CA certificate.
   * 
   * The fingerprint can contain letters and digits.
   * 
   * The fingerprint can be up to 128 characters in length.
   * 
   * @example
   * 902ef2deeb3c5b13ea4c3d5193629309e231****
   */
  fingerprint?: string;
  /**
   * @remarks
   * The name of the OIDC IdP.
   * 
   * @example
   * TestOIDCProvider
   */
  OIDCProviderName?: string;
  static names(): { [key: string]: string } {
    return {
      fingerprint: 'Fingerprint',
      OIDCProviderName: 'OIDCProviderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fingerprint: 'string',
      OIDCProviderName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

