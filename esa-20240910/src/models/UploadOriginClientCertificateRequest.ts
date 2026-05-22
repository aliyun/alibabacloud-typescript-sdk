// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadOriginClientCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  certificate?: string;
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  privateKey?: string;
  /**
   * @remarks
   * This parameter is required.
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

