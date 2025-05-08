// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadClientCaCertificateRequest extends $dara.Model {
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
   * yourCertName
   */
  name?: string;
  /**
   * @remarks
   * The website ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      certificate: 'Certificate',
      name: 'Name',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificate: 'string',
      name: 'string',
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

