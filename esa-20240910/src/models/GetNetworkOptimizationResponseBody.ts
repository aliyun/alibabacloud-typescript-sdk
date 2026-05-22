// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNetworkOptimizationResponseBody extends $dara.Model {
  /**
   * @remarks
   * Configuration ID.
   * 
   * @example
   * 35281609698****
   */
  configId?: number;
  /**
   * @remarks
   * Configuration type, which can be used to query global or rule configurations. Value range:
   * 
   * - global: Query global configuration.
   * - rule: Query rule configuration.
   * 
   * @example
   * global
   */
  configType?: string;
  /**
   * @remarks
   * Whether to enable GRPC, default is disabled. Value range:
   * - on: Enable
   * - off: Disable
   * 
   * @example
   * on
   */
  grpc?: string;
  /**
   * @remarks
   * Whether to enable HTTP2 origin, default is disabled. Value range:
   * 
   * - on: Enable
   * - off: Disable
   * 
   * @example
   * on
   */
  http2Origin?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * C370DAF1-C838-4288-A1A0-9A87633D248E
   */
  requestId?: string;
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
  /**
   * @remarks
   * Rule execution order. The smaller the value, the higher the priority.
   * 
   * @example
   * 2
   */
  sequence?: number;
  /**
   * @remarks
   * Site configuration version number. For sites with version management enabled, this parameter can specify the effective site version, defaulting to version 0.
   * 
   * @example
   * 1
   */
  siteVersion?: number;
  /**
   * @remarks
   * Whether to enable smart routing service, default is disabled. Value range:
   * - on: Enable
   * - off: Disable
   * 
   * @example
   * on
   */
  smartRouting?: string;
  /**
   * @remarks
   * Maximum upload file size in MB, with a range from 100 to 500.
   * 
   * @example
   * 500
   */
  uploadMaxFilesize?: string;
  /**
   * @remarks
   * Whether to enable Websocket, default is enabled. Value range:
   * - on: Enable
   * - off: Disable
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
      requestId: 'RequestId',
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
      requestId: 'string',
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

