// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteOriginRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration ID. You can call the [ListOriginRules](~~ListOriginRules~~) operation to obtain the configuration ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 33793140540****
   */
  configId?: number;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](~~ListSites~~) operation to obtain the site ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3400350********
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

