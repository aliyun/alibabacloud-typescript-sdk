// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCompressionRuleResponseBody extends $dara.Model {
  brotli?: string;
  configId?: number;
  configType?: string;
  gzip?: string;
  requestId?: string;
  rule?: string;
  ruleEnable?: string;
  ruleName?: string;
  sequence?: number;
  siteVersion?: number;
  zstd?: string;
  static names(): { [key: string]: string } {
    return {
      brotli: 'Brotli',
      configId: 'ConfigId',
      configType: 'ConfigType',
      gzip: 'Gzip',
      requestId: 'RequestId',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
      siteVersion: 'SiteVersion',
      zstd: 'Zstd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brotli: 'string',
      configId: 'number',
      configType: 'string',
      gzip: 'string',
      requestId: 'string',
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'number',
      siteVersion: 'number',
      zstd: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

