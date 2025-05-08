// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHttpsBasicConfigurationRequest extends $dara.Model {
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
   * Cipher suite group. Default uses all cipher suites. Value range:
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
   * Whether to enable HTTP2. Default is enabled. Value range:
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  http2?: string;
  /**
   * @remarks
   * Whether to enable HTTP3. Default is enabled. Value range:
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  http3?: string;
  /**
   * @remarks
   * Whether to enable HTTPS. Default is enabled. Value range:
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  https?: string;
  /**
   * @remarks
   * Whether to enable OCSP. Default is disabled. Value range:
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  ocspStapling?: string;
  /**
   * @remarks
   * Rule content, using conditional expressions to match user requests. This parameter is not required when adding a global configuration. There are two usage scenarios:
   * - Match all incoming requests: Set the value to true
   * - Match specific requests: Set the value to a custom expression, for example: (http.host eq \\"video.example.com\\")
   * 
   * @example
   * (http.host eq \\"video.example.com\\")
   */
  rule?: string;
  /**
   * @remarks
   * Rule switch. This parameter is not required when adding a global configuration. Value range:
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * Rule name. This parameter is not required when adding a global configuration.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  sequence?: number;
  /**
   * @remarks
   * Site ID, which can be obtained by calling the [ListSites](~~ListSites~~) API.
   * 
   * This parameter is required.
   * 
   * @example
   * 5407498413****
   */
  siteId?: number;
  /**
   * @remarks
   * Whether to enable TLS1.0. Default is disabled. Value range:
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  tls10?: string;
  /**
   * @remarks
   * Whether to enable TLS1.1. Default is enabled. Value range:
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  tls11?: string;
  /**
   * @remarks
   * Whether to enable TLS1.2. Default is enabled. Value range:
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  tls12?: string;
  /**
   * @remarks
   * Whether to enable TLS1.3. Default is enabled. Value range:
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

