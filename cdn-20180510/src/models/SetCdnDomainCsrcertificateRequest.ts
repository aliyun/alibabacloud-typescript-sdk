// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetCdnDomainCSRCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name for which you want to configure an SSL certificate. The domain name must have HTTPS secure acceleration enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The content of the certificate. The certificate must match the certificate signing request (CSR) created by calling the [CreateCdnCertificateSigningRequest](https://help.aliyun.com/document_detail/144478.html) operation. Make sure that the content of the certificate is encoded in Base64 and then encoded by encodeURIComponent.
   * 
   * This parameter is required.
   * 
   * @example
   * ----BEGIN CERTIFICATE----- MIIFz****-----END CERTIFICATE-----
   */
  serverCertificate?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      serverCertificate: 'ServerCertificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      serverCertificate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

