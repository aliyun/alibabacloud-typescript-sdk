// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWafRulesetRequest extends $dara.Model {
  /**
   * @remarks
   * Ruleset name.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * WAF operation phase.
   * 
   * This parameter is required.
   * 
   * @example
   * http_custom
   */
  phase?: string;
  /**
   * @remarks
   * Site ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  siteId?: number;
  /**
   * @remarks
   * Site version.
   * 
   * @example
   * 0
   */
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      phase: 'Phase',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      phase: 'string',
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

