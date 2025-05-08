// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWafRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Rule configuration, specifying the detailed configuration for creating a rule.
   */
  configShrink?: string;
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
   * Ruleset ID.
   * 
   * @example
   * 10000001
   */
  rulesetId?: number;
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
      configShrink: 'Config',
      phase: 'Phase',
      rulesetId: 'RulesetId',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configShrink: 'string',
      phase: 'string',
      rulesetId: 'number',
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

