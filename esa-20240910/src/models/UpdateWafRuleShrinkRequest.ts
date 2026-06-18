// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWafRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration of the rule.
   */
  configShrink?: string;
  /**
   * @remarks
   * The ID of the WAF rule. To obtain the rule ID, call the [ListWafRules](https://help.aliyun.com/document_detail/2878257.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 20000001
   */
  id?: number;
  /**
   * @remarks
   * The position of the rule within the rule set.
   * 
   * @example
   * 1
   */
  position?: number;
  /**
   * @remarks
   * The ID of the site. To obtain the site ID, call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  siteId?: number;
  /**
   * @remarks
   * The version number of the site configuration. For sites with configuration version management enabled, use this parameter to specify the effective configuration version. The default is version 0.
   * 
   * @example
   * 0
   */
  siteVersion?: number;
  /**
   * @remarks
   * The status of the rule.
   * 
   * @example
   * on
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      configShrink: 'Config',
      id: 'Id',
      position: 'Position',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configShrink: 'string',
      id: 'number',
      position: 'number',
      siteId: 'number',
      siteVersion: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

