// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIPv6Request extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  enable?: string;
  region?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      region: 'Region',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'string',
      region: 'string',
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

