// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCreateWafRulesShrinkRequest extends $dara.Model {
  configsShrink?: string;
  /**
   * @example
   * http_custom
   */
  phase?: string;
  rulesetId?: number;
  sharedShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  siteId?: number;
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      configsShrink: 'Configs',
      phase: 'Phase',
      rulesetId: 'RulesetId',
      sharedShrink: 'Shared',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configsShrink: 'string',
      phase: 'string',
      rulesetId: 'number',
      sharedShrink: 'string',
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

