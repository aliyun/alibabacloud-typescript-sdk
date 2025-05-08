// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSeoBypassRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * on
   */
  enable?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'string',
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

