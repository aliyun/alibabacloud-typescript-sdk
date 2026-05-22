// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOriginProtectionRequest extends $dara.Model {
  /**
   * @example
   * off
   */
  autoConfirmIPList?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      autoConfirmIPList: 'AutoConfirmIPList',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoConfirmIPList: 'string',
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

