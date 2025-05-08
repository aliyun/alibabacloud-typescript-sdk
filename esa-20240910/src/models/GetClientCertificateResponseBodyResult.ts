// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClientCertificateResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the CA certificate.
   * 
   * @example
   * babab9db65ee5efcca9f3d41d4b50d66
   */
  CACertificateId?: string;
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
   * The time when the certificate was created.
   * 
   * @example
   * 2024-06-24 07:48:51
   */
  createTime?: string;
  fingerprintSha256?: string;
  /**
   * @remarks
   * The certificate ID.
   * 
   * @example
   * baba39055622c008b90285a8838ed09a
   */
  id?: string;
  /**
   * @remarks
   * The certificate authority (CA) that issued the certificate.
   * 
   * @example
   * GlobalSign nv-sa
   */
  issuer?: string;
  /**
   * @remarks
   * The certificate name.
   * 
   * @example
   * yourCertName
   */
  name?: string;
  /**
   * @remarks
   * The time when the certificate expires.
   * 
   * @example
   * 2024-03-31 02:08:00
   */
  notAfter?: string;
  /**
   * @remarks
   * The time when the certificate takes effect.
   * 
   * @example
   * 2023-03-31 02:08:00
   */
  notBefore?: string;
  /**
   * @remarks
   * The public-key algorithm of the certificate.
   * 
   * @example
   * RSA
   */
  pubkeyAlgorithm?: string;
  /**
   * @remarks
   * The Subject Alternative Name (SAN) of the certificate.
   * 
   * @example
   * www.example.com,*.example.com
   */
  SAN?: string;
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
   * The certificate status.
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * The certificate type.
   * 
   * @example
   * dcdn
   */
  type?: string;
  /**
   * @remarks
   * The time when the certificate was updated.
   * 
   * @example
   * 2024-09-22 05:33:13
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      CACertificateId: 'CACertificateId',
      commonName: 'CommonName',
      createTime: 'CreateTime',
      fingerprintSha256: 'FingerprintSha256',
      id: 'Id',
      issuer: 'Issuer',
      name: 'Name',
      notAfter: 'NotAfter',
      notBefore: 'NotBefore',
      pubkeyAlgorithm: 'PubkeyAlgorithm',
      SAN: 'SAN',
      serialNumber: 'SerialNumber',
      signatureAlgorithm: 'SignatureAlgorithm',
      status: 'Status',
      type: 'Type',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CACertificateId: 'string',
      commonName: 'string',
      createTime: 'string',
      fingerprintSha256: 'string',
      id: 'string',
      issuer: 'string',
      name: 'string',
      notAfter: 'string',
      notBefore: 'string',
      pubkeyAlgorithm: 'string',
      SAN: 'string',
      serialNumber: 'string',
      signatureAlgorithm: 'string',
      status: 'string',
      type: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

