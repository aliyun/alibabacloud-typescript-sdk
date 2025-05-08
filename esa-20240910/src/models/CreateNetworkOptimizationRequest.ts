// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNetworkOptimizationRequest extends $dara.Model {
  /**
   * @remarks
   * Whether to enable GRPC, disabled by default. Possible values:
   * - on: Enable
   * - off: Disable
   * 
   * @example
   * on
   */
  grpc?: string;
  /**
   * @remarks
   * Whether to enable HTTP2 origin, disabled by default. Possible values:
   * - on: Enable
   * - off: Disable
   * 
   * @example
   * on
   */
  http2Origin?: string;
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
   * Rule switch. This parameter is not required when adding a global configuration. Possible values:
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
   * 340035003106221
   */
  siteId?: number;
  /**
   * @remarks
   * The version number of the site configuration. For sites with version management enabled, this parameter can specify the effective version of the configuration, defaulting to version 0.
   * 
   * @example
   * 1
   */
  siteVersion?: number;
  /**
   * @remarks
   * Whether to enable smart routing service, disabled by default. Possible values:
   * - on: Enable
   * - off: Disable
   * 
   * @example
   * on
   */
  smartRouting?: string;
  /**
   * @remarks
   * Maximum upload file size in MB, range: 100～500.
   * 
   * @example
   * 100
   */
  uploadMaxFilesize?: string;
  /**
   * @remarks
   * Whether to enable Websocket, enabled by default. Possible values:
   * - on: Enable
   * - off: Disable
   * 
   * @example
   * on
   */
  websocket?: string;
  static names(): { [key: string]: string } {
    return {
      grpc: 'Grpc',
      http2Origin: 'Http2Origin',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
      smartRouting: 'SmartRouting',
      uploadMaxFilesize: 'UploadMaxFilesize',
      websocket: 'Websocket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grpc: 'string',
      http2Origin: 'string',
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'number',
      siteId: 'number',
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

