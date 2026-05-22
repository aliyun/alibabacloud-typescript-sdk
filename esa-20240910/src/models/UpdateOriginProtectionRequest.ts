// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOriginProtectionRequest extends $dara.Model {
  /**
   * @example
   * off
   */
  autoConfirmIPList?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  originConverge?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      autoConfirmIPList: 'AutoConfirmIPList',
      originConverge: 'OriginConverge',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoConfirmIPList: 'string',
      originConverge: 'string',
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

