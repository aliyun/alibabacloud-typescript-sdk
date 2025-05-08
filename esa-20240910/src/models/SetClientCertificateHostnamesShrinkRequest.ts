// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetClientCertificateHostnamesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The domain names to associate.
   * 
   * This parameter is required.
   */
  hostnamesShrink?: string;
  /**
   * @remarks
   * The ID of the client CA certificate.
   * 
   * @example
   * babab9db65ee5efcca9f3d41d4b50d66
   */
  id?: string;
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
      hostnamesShrink: 'Hostnames',
      id: 'Id',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostnamesShrink: 'string',
      id: 'string',
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

