// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRoutineRouteRequest extends $dara.Model {
  bypass?: string;
  fallback?: string;
  routeEnable?: string;
  routeName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  routineName?: string;
  rule?: string;
  sequence?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  siteId?: number;
  /**
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

