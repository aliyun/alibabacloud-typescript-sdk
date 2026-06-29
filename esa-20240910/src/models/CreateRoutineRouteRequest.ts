// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRoutineRouteRequest extends $dara.Model {
  /**
   * @remarks
   * The bypass mode. Valid values:
   * - on: enabled
   * - off: disabled.
   * 
   * @example
   * on
   */
  bypass?: string;
  /**
   * @remarks
   * The fallback-to-origin switch. When enabled, if the function encounters an exception such as CPU usage exceeding the limit, the request is forwarded to the origin server. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  fallback?: string;
  /**
   * @remarks
   * The route switch. Valid values:
   * - on: enabled
   * - off: disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * on
   */
  routeEnable?: string;
  /**
   * @remarks
   * The route name.
   * 
   * This parameter is required.
   * 
   * @example
   * test_route
   */
  routeName?: string;
  /**
   * @remarks
   * The Edge Routine name.
   * 
   * This parameter is required.
   * 
   * @example
   * test-routine1
   */
  routineName?: string;
  /**
   * @remarks
   * The rule content.
   * 
   * This parameter is required.
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
   * The site ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * The Edge Routine timeout period. Valid values: 5 to 60.
   * 
   * @example
   * 5
   */
  timeout?: string;
  static names(): { [key: string]: string } {
    return {
      bypass: 'Bypass',
      fallback: 'Fallback',
      routeEnable: 'RouteEnable',
      routeName: 'RouteName',
      routineName: 'RoutineName',
      rule: 'Rule',
      sequence: 'Sequence',
      siteId: 'SiteId',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bypass: 'string',
      fallback: 'string',
      routeEnable: 'string',
      routeName: 'string',
      routineName: 'string',
      rule: 'string',
      sequence: 'number',
      siteId: 'number',
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

