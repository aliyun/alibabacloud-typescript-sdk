// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHttpsBasicConfigurationResponseBody extends $dara.Model {
  ciphersuite?: string;
  ciphersuiteGroup?: string;
  configId?: number;
  configType?: string;
  http2?: string;
  http3?: string;
  https?: string;
  ocspStapling?: string;
  requestId?: string;
  rule?: string;
  ruleEnable?: string;
  ruleName?: string;
  sequence?: number;
  tls10?: string;
  tls11?: string;
  tls12?: string;
  tls13?: string;
  static names(): { [key: string]: string } {
    return {
      ciphersuite: 'Ciphersuite',
      ciphersuiteGroup: 'CiphersuiteGroup',
      configId: 'ConfigId',
      configType: 'ConfigType',
      http2: 'Http2',
      http3: 'Http3',
      https: 'Https',
      ocspStapling: 'OcspStapling',
      requestId: 'RequestId',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
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
      configType: 'string',
      http2: 'string',
      http3: 'string',
      https: 'string',
      ocspStapling: 'string',
      requestId: 'string',
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'number',
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

