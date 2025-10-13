// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRoutineRouteResponseBody extends $dara.Model {
  /**
   * @remarks
   * Bypass mode. Valid values:
   * 
   * *   on
   * *   off
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
   * The configuration type to query. Valid values:
   * 
   * *   global: global configurations.
   * *   rule: queries rule configurations.
   * 
   * @example
   * global
   */
  configType?: string;
  /**
   * @remarks
   * The exception origin fetch switch. After you turn on this switch, if a function exception occurs, such as CPU usage exceeding the upper limit, requests are sent back to the origin. Valid values:
   * 
   * *   on
   * *   off
   * 
   * @example
   * on
   */
  fallback?: string;
  /**
   * @remarks
   * The configuration mode. Valid values: Valid values:
   * 
   * *   simple
   * *   custom
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
   * The routing switch. Valid values:
   * 
   * *   on
   * *   off
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
   * The function name.
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
   * The order in which the rule is executed.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * The version number of the website.
   * 
   * @example
   * 0
   */
  siteVersion?: number;
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

