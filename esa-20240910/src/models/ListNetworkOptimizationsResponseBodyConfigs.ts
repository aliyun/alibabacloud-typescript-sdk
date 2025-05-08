// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNetworkOptimizationsResponseBodyConfigs extends $dara.Model {
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
   * Configuration type, which can be used to query global or rule-based configurations. The value range is as follows:
   * 
   * - global: Query global configuration.
   * - rule: Query rule-based configuration.
   * 
   * @example
   * global
   */
  configType?: string;
  /**
   * @remarks
   * Whether to enable GRPC, default is off. The value range is:
   * - on: enabled.
   * - off: disabled.
   * 
   * @example
   * on
   */
  grpc?: string;
  /**
   * @remarks
   * Whether to enable HTTP2 origin, defaulting to off. The value range is as follows:
   * 
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  http2Origin?: string;
  /**
   * @remarks
   * Rule content, using conditional expressions to match user requests. This parameter is not required when adding a global configuration. There are two usage scenarios:
   * - Match all incoming requests: Set the value to true
   * - Match specific requests: Set the value to a custom expression, e.g., (http.host eq \\"video.example.com\\")
   * 
   * @example
   * (http.host eq \\"video.example.com\\")
   */
  rule?: string;
  /**
   * @remarks
   * Rule switch. This parameter is not required when adding a global configuration. The value range is as follows:
   * - on: Enabled.
   * - off: Disabled.
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
   * Site configuration version number. For sites with version management enabled, this parameter can specify the site version for which the configuration takes effect, defaulting to version 0.
   * 
   * @example
   * 1
   */
  siteVersion?: number;
  /**
   * @remarks
   * Whether to enable smart routing service, defaulting to off. The value range is as follows:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  smartRouting?: string;
  /**
   * @remarks
   * Maximum file size for upload, in MB. The value range is 100 to 500.
   * 
   * @example
   * 500
   */
  uploadMaxFilesize?: string;
  /**
   * @remarks
   * Whether to enable Websocket, enabled by default. Value range: 
   * - on: Enabled. 
   * - off: Disabled.
   * 
   * @example
   * on
   */
  websocket?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      configType: 'ConfigType',
      grpc: 'Grpc',
      http2Origin: 'Http2Origin',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
      siteVersion: 'SiteVersion',
      smartRouting: 'SmartRouting',
      uploadMaxFilesize: 'UploadMaxFilesize',
      websocket: 'Websocket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      configType: 'string',
      grpc: 'string',
      http2Origin: 'string',
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'number',
      siteVersion: 'number',
      smartRouting: 'string',
      uploadMaxFilesize: 'string',
      websocket: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

