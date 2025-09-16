// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHttpIncomingResponseHeaderModificationRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 430509230649344
   */
  configId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 347168101647504
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

