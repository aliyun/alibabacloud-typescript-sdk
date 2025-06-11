// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddExternalSAMLIdPCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The X.509 certificate in the PEM format.
   * 
   * The certificate is provided by the SAML identity provider (IdP).
   * 
   * @example
   * MIIC8DCCAdigAwIBAgIQP9eomUYGeoND****
   */
  x509Certificate?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      x509Certificate: 'X509Certificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
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

