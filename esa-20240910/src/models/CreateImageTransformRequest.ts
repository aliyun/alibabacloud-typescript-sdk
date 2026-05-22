// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageTransformRequest extends $dara.Model {
  /**
   * @example
   * on
   */
  autoAvif?: string;
  /**
   * @example
   * on
   */
  autoWebp?: string;
  enable?: string;
  rule?: string;
  ruleEnable?: string;
  ruleName?: string;
  sequence?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  siteId?: number;
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      autoAvif: 'AutoAvif',
      autoWebp: 'AutoWebp',
      enable: 'Enable',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoAvif: 'string',
      autoWebp: 'string',
      enable: 'string',
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'number',
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

