// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetClientCaCertificateHostnamesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  hostnames?: string[];
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      hostnames: 'Hostnames',
      id: 'Id',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostnames: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      siteId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.hostnames)) {
      $dara.Model.validateArray(this.hostnames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

