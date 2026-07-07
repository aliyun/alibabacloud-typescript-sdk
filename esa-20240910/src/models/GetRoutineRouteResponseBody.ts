// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRoutineRouteResponseBody extends $dara.Model {
  /**
   * @remarks
   * The bypass mode. Valid values:
   * - on: enabled.
   * - off: disabled.
   * 
   * @example
   * on
   */
  bypass?: string;
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 352816******
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
   * The back-to-origin on exception switch. When enabled, if the function encounters an exception such as CPU usage exceeding the limit, the request is forwarded to the origin. Valid values:
   * - on: enabled.
   * - off: disabled.
   * 
   * @example
   * on
   */
  fallback?: string;
  /**
   * @remarks
   * The configuration mode. Valid values:
   * - simple: simple mode.
   * - custom: custom mode.
   * 
   * @example
   * simple
   */
  mode?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  /**
   * @remarks
   * The route switch. Valid values:
   * - on: enabled.
   * - off: disabled.
   * 
   * @example
   * on
   */
  routeEnable?: string;
  /**
   * @remarks
   * The route name.
   * 
   * @example
   * test_route
   */
  routeName?: string;
  /**
   * @remarks
   * The Edge Routine name.
   * 
   * @example
   * test-routine1
   */
  routineName?: string;
  /**
   * @remarks
   * The rule content.
   * 
   * @example
   * (http.host eq \\"video.example.com\\")
   */
  rule?: string;
  /**
   * @remarks
   * The rule execution order.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * The version number of the site.
   * 
   * @example
   * 0
   */
  siteVersion?: number;
  /**
   * @remarks
   * The Edge Routine timeout period. Valid values: 5 to 60. Unit: seconds.
   * 
   * @example
   * 5
   */
  timeout?: string;
  static names(): { [key: string]: string } {
    return {
      bypass: 'Bypass',
      configId: 'ConfigId',
      configType: 'ConfigType',
      fallback: 'Fallback',
      mode: 'Mode',
      requestId: 'RequestId',
      routeEnable: 'RouteEnable',
      routeName: 'RouteName',
      routineName: 'RoutineName',
      rule: 'Rule',
      sequence: 'Sequence',
      siteVersion: 'SiteVersion',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bypass: 'string',
      configId: 'number',
      configType: 'string',
      fallback: 'string',
      mode: 'string',
      requestId: 'string',
      routeEnable: 'string',
      routeName: 'string',
      routineName: 'string',
      rule: 'string',
      sequence: 'number',
      siteVersion: 'number',
      timeout: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

