// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteHttpIncomingResponseHeaderModificationRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 352816096987136
   */
  configId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 672344269424192
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
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

