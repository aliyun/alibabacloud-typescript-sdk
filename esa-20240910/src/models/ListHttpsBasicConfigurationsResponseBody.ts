// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHttpsBasicConfigurationsResponseBodyConfigs extends $dara.Model {
  /**
   * @remarks
   * Custom ciphersuite, indicating the specific encryption algorithm selected when CiphersuiteGroup is set to custom.
   * 
   * @example
   * TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
   */
  ciphersuite?: string;
  /**
   * @remarks
   * Ciphersuite group, defaults to enabling all ciphersuites. Value range:
   * - all: all ciphersuites.
   * - strict: strong ciphersuites.
   * - custom: custom ciphersuites.
   * 
   * @example
   * strict
   */
  ciphersuiteGroup?: string;
  /**
   * @remarks
   * Configuration ID.
   * 
   * @example
   * 395386449776640
   */
  configId?: number;
  /**
   * @remarks
   * Configuration type, which can be used to query global or rule configurations. Value range:
   * - global: Query global configuration.
   * - rule: Query rule configuration.
   * 
   * @example
   * global
   */
  configType?: string;
  /**
   * @remarks
   * Whether to enable HTTP2, default is on. Value range:
   * - on: enabled.
   * - off: disabled.
   * 
   * @example
   * on
   */
  http2?: string;
  /**
   * @remarks
   * Whether to enable HTTP3, default is on. Value range:
   * - on: enabled.
   * - off: disabled.
   * 
   * @example
   * on
   */
  http3?: string;
  /**
   * @remarks
   * Whether to enable HTTPS, default is enabled. Value range:
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  https?: string;
  /**
   * @remarks
   * Whether to enable OCSP, default is off. Value range:
   * - on: enabled.
   * - off: disabled.
   * 
   * @example
   * on
   */
  ocspStapling?: string;
  /**
   * @remarks
   * Rule content, using conditional expressions to match user requests. This parameter is not required when adding a global configuration. There are two usage scenarios:
   * - Match all incoming requests: Set the value to true.
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
  /**
   * @remarks
   * Rule execution order. The smaller the value, the higher the priority.
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
   * Response body configuration.
   */
  configs?: ListHttpsBasicConfigurationsResponseBodyConfigs[];
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * EDBD3EB3-97DA-5465-AEF5-8DCA5DC5E395
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of records.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  /**
   * @remarks
   * Total number of pages.
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

