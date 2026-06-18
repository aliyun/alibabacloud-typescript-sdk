// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadOriginClientCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the certificate in PEM format.
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
   * The private key for the certificate in PEM format.
   * 
   * This parameter is required.
   * 
   * @example
   * -----BEGIN PRIVATE KEY-----
   */
  privateKey?: string;
  /**
   * @remarks
   * The site ID. To get this ID, call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) API.
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

