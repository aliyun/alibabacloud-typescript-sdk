// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHttpsBasicConfigurationsResponseBodyConfigs extends $dara.Model {
  /**
   * @remarks
   * The custom cipher suite, which specifies the encryption algorithms selected when CiphersuiteGroup is set to custom.
   * 
   * @example
   * TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
   */
  ciphersuite?: string;
  /**
   * @remarks
   * The cipher suite group. All cipher suites are enabled by default. Valid values:
   * - all: all cipher suites.
   * - strict: strong cipher suites.
   * - custom: custom cipher suites.
   * 
   * @example
   * strict
   */
  ciphersuiteGroup?: string;
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 395386449776640
   */
  configId?: number;
  /**
   * @remarks
   * The configuration type. You can use this parameter to query global or rule configurations. Valid values:
   * 
   * - global: queries global configurations.
   * - rule: queries rule configurations.
   * 
   * @example
   * global
   */
  configType?: string;
  /**
   * @remarks
   * Specifies whether to enable HTTP/2. HTTP/2 is enabled by default. Valid values:
   * - on: enabled.
   * - off: disabled.
   * 
   * @example
   * on
   */
  http2?: string;
  /**
   * @remarks
   * Specifies whether to enable HTTP/3. HTTP/3 is enabled by default. Valid values:
   * - on: enabled.
   * - off: disabled.
   * 
   * @example
   * on
   */
  http3?: string;
  /**
   * @remarks
   * Specifies whether to enable HTTPS. HTTPS is enabled by default. Valid values:
   * 
   * - on: enabled.
   * 
   * - off: disabled.
   * 
   * @example
   * on
   */
  https?: string;
  /**
   * @remarks
   * Specifies whether to enable OCSP stapling. OCSP stapling is disabled by default. Valid values:
   * - on: enabled.
   * - off: disabled.
   * 
   * @example
   * on
   */
  ocspStapling?: string;
  /**
   * @remarks
   * The rule content, which uses a conditional expression to match user requests. You do not need to set this parameter when adding a global configuration. Two scenarios are supported:
   * - Match all incoming requests: set the value to true.
   * - Match specified requests: set the value to a custom expression, such as (http.host eq \\"video.example.com\\").
   * 
   * @example
   * (http.host eq \\"video.example.com\\")
   */
  rule?: string;
  /**
   * @remarks
   * The rule switch. You do not need to set this parameter when adding a global configuration. Valid values:
   * - on: enabled.
   * - off: disabled.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The rule name. You do not need to set this parameter when adding a global configuration.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * The rule execution order. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * Specifies whether to enable TLS 1.0. TLS 1.0 is disabled by default. Valid values:
   * - on: enabled.
   * - off: disabled.
   * 
   * @example
   * on
   */
  tls10?: string;
  /**
   * @remarks
   * Specifies whether to enable TLS 1.1. TLS 1.1 is disabled by default. Valid values:
   * - on: enabled.
   * - off: disabled.
   * 
   * @example
   * on
   */
  tls11?: string;
  /**
   * @remarks
   * Specifies whether to enable TLS 1.2. TLS 1.2 is disabled by default. Valid values:
   * - on: enabled.
   * - off: disabled.
   * 
   * @example
   * on
   */
  tls12?: string;
  /**
   * @remarks
   * Specifies whether to enable TLS 1.3. TLS 1.3 is disabled by default. Valid values:
   * - on: enabled.
   * - off: disabled.
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

export class ListHttpsBasicConfigurationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configurations returned.
   */
  configs?: ListHttpsBasicConfigurationsResponseBodyConfigs[];
  /**
   * @remarks
   * The current page number, which is the same as the PageNumber request parameter.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EDBD3EB3-97DA-5465-AEF5-8DCA5DC5E395
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 2
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': ListHttpsBasicConfigurationsResponseBodyConfigs },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.configs)) {
      $dara.Model.validateArray(this.configs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

