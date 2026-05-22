// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageTransformResponseBody extends $dara.Model {
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
  configId?: number;
  configType?: string;
  enable?: string;
  requestId?: string;
  rule?: string;
  ruleEnable?: string;
  ruleName?: string;
  sequence?: number;
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      autoAvif: 'AutoAvif',
      autoWebp: 'AutoWebp',
      configId: 'ConfigId',
      configType: 'ConfigType',
      enable: 'Enable',
      requestId: 'RequestId',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoAvif: 'string',
      autoWebp: 'string',
      configId: 'number',
      configType: 'string',
      enable: 'string',
      requestId: 'string',
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'number',
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

