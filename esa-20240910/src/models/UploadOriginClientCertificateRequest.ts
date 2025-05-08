// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadOriginClientCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The certificate content.
   * 
   * This parameter is required.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   */
  certificate?: string;
  /**
   * @remarks
   * The certificate name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The private key of the certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * -----BEGIN PRIVATE KEY-----
   */
  privateKey?: string;
  /**
   * @remarks
   * The website ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456789****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      certificate: 'Certificate',
      name: 'Name',
      privateKey: 'PrivateKey',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificate: 'string',
      name: 'string',
      privateKey: 'string',
      siteId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

