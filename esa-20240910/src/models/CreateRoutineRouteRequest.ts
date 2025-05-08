// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRoutineRouteRequest extends $dara.Model {
  /**
   * @example
   * on
   */
  bypass?: string;
  /**
   * @example
   * on
   */
  routeEnable?: string;
  /**
   * @example
   * test_route
   */
  routeName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-routine1
   */
  routineName?: string;
  /**
   * @example
   * (http.host eq \\"video.example.com\\")
   */
  rule?: string;
  /**
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      bypass: 'Bypass',
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

