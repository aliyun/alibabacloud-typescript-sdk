// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadOriginCaCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the CA certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   */
  certificate?: string;
  /**
   * @remarks
   * The name of the certificate.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](~~ListSites~~) operation to get this ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890***
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

