// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomCertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The content of the certificate. This parameter is returned only if Immediately is set to 1 or 2.
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
   * The certificate chain of the certificate. This parameter is returned only if Immediately is set to 2.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   * MIIBfzCCATGgAwIBAgIUfI5kSdcO2S0+LkpdL3b2VUJG10YwBQYDK2VwMDUxCzAJ
   * ...
   * ...
   * ...
   * ZYYG
   * -----END CERTIFICATE-----
   * -----BEGIN CERTIFICATE-----
   * MIIBczCCARgCAQAwgYoxFDASBgNVBAMMC2FsaXl1bi50ZXN0MQ0wCwYDVQQ
   * ...
   * ...
   * ...
   * KL5cUmF
   * -----END CERTIFICATE-----
   */
  certificateChain?: string;
  /**
   * @remarks
   * The unique identifier of the certificate.
   * 
   * @example
   * 160ae6bb538d538c70c01f81dcf2****
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
  /**
   * @remarks
   * The serial number of the certificate. This parameter is returned only if Immediately is set to 1 or 2.
   * 
   * @example
   * 084bde9cd233f0ddae33adc438cfbbbd****
   */
  serialNumber?: string;
  static names(): { [key: string]: string } {
    return {
      certificate: 'Certificate',
      certificateChain: 'CertificateChain',
      identifier: 'Identifier',
      requestId: 'RequestId',
      serialNumber: 'SerialNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificate: 'string',
      certificateChain: 'string',
      identifier: 'string',
      requestId: 'string',
      serialNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

