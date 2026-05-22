// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetClientCertificateHostnamesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  hostnamesShrink?: string;
  id?: string;
  /**
   * @remarks
   * This parameter is required.
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

