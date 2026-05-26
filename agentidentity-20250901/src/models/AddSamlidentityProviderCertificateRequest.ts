// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddSAMLIdentityProviderCertificateRequest extends $dara.Model {
  /**
   * @example
   * my-agent-userpool
   */
  userPoolName?: string;
  /**
   * @example
   * -----BEGIN CERTIFICATE-----
   * MIIDdz...
   * -----END CERTIFICATE-----
   */
  x509Certificate?: string;
  static names(): { [key: string]: string } {
    return {
      userPoolName: 'UserPoolName',
      x509Certificate: 'X509Certificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPoolName: 'string',
      x509Certificate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

