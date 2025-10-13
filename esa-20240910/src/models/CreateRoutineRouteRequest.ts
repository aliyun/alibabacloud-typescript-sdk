// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRoutineRouteRequest extends $dara.Model {
  /**
   * @remarks
   * Bypass mode Valid values:
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
   * The name of the route.
   * 
   * @example
   * test_route
   */
  routeName?: string;
  /**
   * @remarks
   * The edge function name.
   * 
   * This parameter is required.
   * 
   * @example
   * test-routine1
   */
  routineName?: string;
  /**
   * @remarks
   * The content of the rule.
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
   * The website ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

