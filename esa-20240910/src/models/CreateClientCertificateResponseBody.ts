// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClientCertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the CA certificate.
   * 
   * @example
   * babaded901474b9693acf530e0fb1dbb
   */
  CACertificateId?: string;
  /**
   * @remarks
   * The certificate content.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   */
  certificate?: string;
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
   * The certificate ID on ESA.
   * 
   * @example
   * babaded901474b9693acf530e0fb1d95
   */
  id?: string;
  /**
   * @remarks
   * The CA that issued the certificate.
   * 
   * @example
   * DCDN CA
   */
  issuer?: string;
  /**
   * @remarks
   * The time when the certificate expires.
   * 
   * @example
   * 2024-12-01T02:12:49Z
   */
  notAfter?: string;
  /**
   * @remarks
   * The time when the certificate takes effect.
   * 
   * @example
   * 2023-12-01T02:12:49Z
   */
  notBefore?: string;
  /**
   * @remarks
   * The private key of the certificate.
   * 
   * @example
   * -----BEGIN PRIVATE KEY-----
   */
  privateKey?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C370DAF1-C838-4288-A1A0-9A87633D248E
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
   * active
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
      CACertificateId: 'CACertificateId',
      certificate: 'Certificate',
      commonName: 'CommonName',
      fingerprintSha256: 'FingerprintSha256',
      id: 'Id',
      issuer: 'Issuer',
      notAfter: 'NotAfter',
      notBefore: 'NotBefore',
      privateKey: 'PrivateKey',
      requestId: 'RequestId',
      serialNumber: 'SerialNumber',
      signatureAlgorithm: 'SignatureAlgorithm',
      status: 'Status',
      validityDays: 'ValidityDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CACertificateId: 'string',
      certificate: 'string',
      commonName: 'string',
      fingerprintSha256: 'string',
      id: 'string',
      issuer: 'string',
      notAfter: 'string',
      notBefore: 'string',
      privateKey: 'string',
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

