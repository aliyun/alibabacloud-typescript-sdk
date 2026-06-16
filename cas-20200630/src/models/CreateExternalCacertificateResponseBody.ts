// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExternalCACertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The content of the certificate.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   * MIIEkjCCA3qgAwIBAgIQCgFBQgAAAVOFc2oLheynCDANBgkqhkiG9w0BAQsFADA/
   * ...
   * ...
   * ...
   * KOqkqm57TH2H3eDJAkSnh6/DNFu0Qg==
   * -----END CERTIFICATE-----
   */
  certificate?: string;
  /**
   * @remarks
   * The CA certificate chain.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   * ...
   * ...
   * -----END CERTIFICATE-----
   * -----BEGIN CERTIFICATE-----
   * ...
   * ...
   * -----END CERTIFICATE-----
   */
  certificateChain?: string;
  /**
   * @remarks
   * The unique identifier for the certificate.
   * 
   * @example
   * 1ed4068c-6f1b-6deb-8e32-3f8439a851cb
   */
  identifier?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 12345678-1234-1234-1234-123456789ABC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certificate: 'Certificate',
      certificateChain: 'CertificateChain',
      identifier: 'Identifier',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificate: 'string',
      certificateChain: 'string',
      identifier: 'string',
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

