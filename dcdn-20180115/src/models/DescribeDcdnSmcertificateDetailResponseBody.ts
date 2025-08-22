// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnSMCertificateDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the certificate expires. The time is displayed in UTC.
   * 
   * @example
   * 2022-08-31T09:42:28Z
   */
  certExpireTime?: string;
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * @example
   * 648****-cn-hangzhou
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The name of the certificate.
   * 
   * @example
   * yourCertName
   */
  certName?: string;
  /**
   * @remarks
   * The certificate authority (CA) that issued the certificate.
   * 
   * @example
   * DigiCert Inc
   */
  certOrg?: string;
  /**
   * @remarks
   * The top-level domain name.
   * 
   * @example
   * example.com
   */
  commonName?: string;
  /**
   * @remarks
   * The content of the encryption certificate.
   * 
   * @example
   * --BEGIN CERTIFICATE-----***-----END CERTIFICATE--
   */
  encryptCertificate?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A7C69682-7F88-40DD-A198-10D0309E439D
   */
  requestId?: string;
  /**
   * @remarks
   * The domain name on the additional certificate.
   * 
   * @example
   * ***.example.com
   */
  sans?: string;
  /**
   * @remarks
   * The content of the signature certificate.
   * 
   * @example
   * --BEGIN CERTIFICATE-----***-----END CERTIFICATE--
   */
  signCertificate?: string;
  static names(): { [key: string]: string } {
    return {
      certExpireTime: 'CertExpireTime',
      certIdentifier: 'CertIdentifier',
      certName: 'CertName',
      certOrg: 'CertOrg',
      commonName: 'CommonName',
      encryptCertificate: 'EncryptCertificate',
      requestId: 'RequestId',
      sans: 'Sans',
      signCertificate: 'SignCertificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certExpireTime: 'string',
      certIdentifier: 'string',
      certName: 'string',
      certOrg: 'string',
      commonName: 'string',
      encryptCertificate: 'string',
      requestId: 'string',
      sans: 'string',
      signCertificate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

