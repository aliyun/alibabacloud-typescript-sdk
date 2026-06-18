// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteWafRulesetRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the WAF ruleset. Call the [ListWafRulesets](https://help.aliyun.com/document_detail/2878359.html) API to obtain this ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000001
   */
  id?: number;
  /**
   * @remarks
   * The site ID. Call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) API to obtain this ID.
   * 
   * @example
   * 1
   */
  siteId?: number;
  /**
   * @remarks
   * If version management is enabled for the site, use this parameter to specify the version to modify. The default value is 0.
   * 
   * @example
   * 0
   */
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      siteId: 'number',
      siteVersion: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

