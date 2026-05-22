// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHttpsBasicConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * Custom cipher suite, indicating the specific encryption algorithm selected when CiphersuiteGroup is set to custom.
   * 
   * @example
   * TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
   */
  ciphersuite?: string;
  /**
   * @remarks
   * Cipher suite group, default is all cipher suites. Value range:
   * 
   * - all: All cipher suites.
   * - strict: Strong cipher suites.
   * - custom: Custom cipher suites.
   * 
   * @example
   * all
   */
  ciphersuiteGroup?: string;
  /**
   * @remarks
   * Configuration ID.
   * 
   * @example
   * 352816096987136
   */
  configId?: number;
  /**
   * @remarks
   * Configuration type, which can be used to query global or rule configurations. Value range:
   * - global: Query global configuration;
   * - rule: Query rule configuration;
   * 
   * @example
   * global
   */
  configType?: string;
  /**
   * @remarks
   * Whether to enable HTTP2, default is enabled. Value range:
   * 
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  http2?: string;
  /**
   * @remarks
   * Whether to enable HTTP3, which is enabled by default. The value can be:
   * - on: Enabled. 
   * - off: Disabled.
   * 
   * @example
   * on
   */
  http3?: string;
  /**
   * @remarks
   * Whether to enable HTTPS, default is enabled. Value range:
   * 
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  https?: string;
  /**
   * @remarks
   * Whether to enable OCSP, default is disabled. Value range:
   * 
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  ocspStapling?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * C370DAF1-C838-4288-A1A0-9A87633D2***
   */
  requestId?: string;
  /**
   * @remarks
   * Matching rule content.
   * 
   * @example
   * (http.host eq \\"video.example.com\\")
   */
  rule?: string;
  /**
   * @remarks
   * Rule switch. Value range:
   * 
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * Rule name.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * Rule execution sequence.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * Whether to enable TLS1.0, default is disabled. Value range:
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  tls10?: string;
  /**
   * @remarks
   * Whether to enable TLS1.1, default is disabled. Value range:
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  tls11?: string;
  /**
   * @remarks
   * Whether to enable TLS1.2, default is disabled. Value range:
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  tls12?: string;
  /**
   * @remarks
   * Whether to enable TLS1.3, default is disabled. Value range:
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
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

