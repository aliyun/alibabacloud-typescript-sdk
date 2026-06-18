// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNetworkOptimizationRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 352816096987136
   */
  configId?: number;
  /**
   * @remarks
   * Controls whether gRPC is enabled. This feature is disabled by default. Valid values:
   * 
   * - on: gRPC is enabled.
   * 
   * - off: gRPC is disabled.
   * 
   * @example
   * on
   */
  grpc?: string;
  /**
   * @remarks
   * Controls whether HTTP/2 to origin is enabled. This feature is disabled by default. Valid values:
   * 
   * - on: HTTP/2 to origin is enabled.
   * 
   * - off: HTTP/2 to origin is disabled.
   * 
   * @example
   * on
   */
  http2Origin?: string;
  /**
   * @remarks
   * The conditional expression used to match requests. This parameter is optional for global configurations.
   * 
   * - To match all incoming requests, set the value to true.
   * 
   * - To match specific requests, set the value to a custom expression, for example, (http.host eq "video.example.com").
   * 
   * @example
   * (http.host eq \\"video.example.com\\")
   */
  rule?: string;
  /**
   * @remarks
   * Controls whether the rule is enabled. This parameter is optional for global configurations. Valid values:
   * 
   * - on: The rule is enabled.
   * 
   * - off: The rule is disabled.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The rule name. This parameter is optional for global configurations.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * The rule execution order. Smaller values have higher priority.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * The site ID. Call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to obtain this ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * Controls whether smart routing is enabled. This feature is disabled by default. Valid values:
   * 
   * - on: Smart routing is enabled.
   * 
   * - off: Smart routing is disabled.
   * 
   * @example
   * on
   */
  smartRouting?: string;
  /**
   * @remarks
   * The maximum upload file size, in MB. The value must be an integer from 100 to 500.
   * 
   * @example
   * 100
   */
  uploadMaxFilesize?: string;
  /**
   * @remarks
   * Controls whether WebSocket is enabled. This feature is enabled by default. Valid values:
   * 
   * - on: WebSocket is enabled.
   * 
   * - off: WebSocket is disabled.
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

