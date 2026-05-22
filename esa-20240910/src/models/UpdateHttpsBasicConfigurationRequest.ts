// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateHttpsBasicConfigurationRequest extends $dara.Model {
  ciphersuite?: string;
  ciphersuiteGroup?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  configId?: number;
  http2?: string;
  http3?: string;
  https?: string;
  ocspStapling?: string;
  rule?: string;
  ruleEnable?: string;
  ruleName?: string;
  sequence?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  siteId?: number;
  tls10?: string;
  tls11?: string;
  tls12?: string;
  tls13?: string;
  static names(): { [key: string]: string } {
    return {
      ciphersuite: 'Ciphersuite',
      ciphersuiteGroup: 'CiphersuiteGroup',
      configId: 'ConfigId',
      http2: 'Http2',
      http3: 'Http3',
      https: 'Https',
      ocspStapling: 'OcspStapling',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
      siteId: 'SiteId',
      tls10: 'Tls10',
      tls11: 'Tls11',
      tls12: 'Tls12',
      tls13: 'Tls13',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphersuite: 'string',
      ciphersuiteGroup: 'string',
      configId: 'number',
      http2: 'string',
      http3: 'string',
      https: 'string',
      ocspStapling: 'string',
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'number',
      siteId: 'number',
      tls10: 'string',
      tls11: 'string',
      tls12: 'string',
      tls13: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

