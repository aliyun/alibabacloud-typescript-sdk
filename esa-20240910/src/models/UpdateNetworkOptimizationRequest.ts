// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNetworkOptimizationRequest extends $dara.Model {
  /**
   * @remarks
   * Configuration ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 352816096987136
   */
  configId?: number;
  /**
   * @remarks
   * Whether to enable GRPC, default is disabled. Possible values:
   * - on: Enable
   * - off: Disable
   * 
   * @example
   * on
   */
  grpc?: string;
  /**
   * @remarks
   * Whether to enable HTTP2 origin, default is disabled. Possible values:
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
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * Whether to enable the smart routing service, default is disabled. Possible values:
   * - on: Enable
   * - off: Disable
   * 
   * @example
   * on
   */
  smartRouting?: string;
  /**
   * @remarks
   * Maximum upload file size, in MB, with a range of 100 to 500.
   * 
   * @example
   * 100
   */
  uploadMaxFilesize?: string;
  /**
   * @remarks
   * Whether to enable Websocket, default is enabled. Possible values:
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
      grpc: 'Grpc',
      http2Origin: 'Http2Origin',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
      siteId: 'SiteId',
      smartRouting: 'SmartRouting',
      uploadMaxFilesize: 'UploadMaxFilesize',
      websocket: 'Websocket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      grpc: 'string',
      http2Origin: 'string',
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'number',
      siteId: 'number',
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

