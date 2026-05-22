// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadOriginClientCertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Common Name of the certificate.
   * 
   * @example
   * www.example.com
   */
  commonName?: string;
  /**
   * @remarks
   * The SHA-256 fingerprint of the certificate.
   * 
   * @example
   * 1dc5fc9af4eead2570c70d94b416130baeb6d4429b51fd3557379588456aca66
   */
  fingerprintSha256?: string;
  /**
   * @remarks
   * The certificate ID.
   * 
   * @example
   * babaabcd****
   */
  id?: string;
  /**
   * @remarks
   * The CA that issued the certificate.
   * 
   * @example
   * GlobalSign nv-sa
   */
  issuer?: string;
  /**
   * @remarks
   * The time when the certificate expires.
   * 
   * @example
   * 2024-12-01T02:13:07Z
   */
  notAfter?: string;
  /**
   * @remarks
   * The time when the certificate takes effect.
   * 
   * @example
   * 2023-12-01T02:13:07Z
   */
  notBefore?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  /**
   * @remarks
   * The serial number of the certificate.
   * 
   * @example
   * babaded901474b9693acf530e0fb1daa
   */
  serialNumber?: string;
  /**
   * @remarks
   * The signature algorithm of the certificate.
   * 
   * @example
   * SHA256-RSA
   */
  signatureAlgorithm?: string;
  /**
   * @remarks
   * The status of the certificate.
   * 
   * @example
   * OK
   */
  status?: string;
  /**
   * @remarks
   * The validity period of the certificate. Unit: day.
   * 
   * @example
   * 365
   */
  validityDays?: string;
  static names(): { [key: string]: string } {
    return {
      commonName: 'CommonName',
      fingerprintSha256: 'FingerprintSha256',
      id: 'Id',
      issuer: 'Issuer',
      notAfter: 'NotAfter',
      notBefore: 'NotBefore',
      requestId: 'RequestId',
      serialNumber: 'SerialNumber',
      signatureAlgorithm: 'SignatureAlgorithm',
      status: 'Status',
      validityDays: 'ValidityDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonName: 'string',
      fingerprintSha256: 'string',
      id: 'string',
      issuer: 'string',
      notAfter: 'string',
      notBefore: 'string',
      requestId: 'string',
      serialNumber: 'string',
      signatureAlgorithm: 'string',
      status: 'string',
      validityDays: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

