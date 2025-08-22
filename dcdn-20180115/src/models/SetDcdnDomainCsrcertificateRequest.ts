// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDcdnDomainCSRCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name that is secured by the certificate. The domain name uses HTTPS acceleration.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The content of the certificate. The certificate must match the certificate signing request (CSR) created by calling the [CreateDcdnCertificateSigningRequest](https://help.aliyun.com/document_detail/144478.html) operation. Make sure that the certificate is in PEM format and its content is Base64-encoded and then encoded by encodeURIComponent.
   * 
   * This parameter is required.
   * 
   * @example
   * test
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

