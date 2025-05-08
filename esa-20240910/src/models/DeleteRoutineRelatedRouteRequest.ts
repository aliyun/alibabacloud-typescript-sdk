// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRoutineRelatedRouteRequest extends $dara.Model {
  /**
   * @remarks
   * The routine name.
   * 
   * This parameter is required.
   * 
   * @example
   * DeleteRoutineRelatedRoute
   */
  name?: string;
  /**
   * @remarks
   * The route URL.
   * 
   * This parameter is required.
   * 
   * @example
   * *.example.com/path1*
   */
  route?: string;
  /**
   * @remarks
   * The route ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 0c3b82a3d1524e9f750da11d0cc0be0a
   */
  routeId?: string;
  /**
   * @remarks
   * The website ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 54362329990032
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      route: 'Route',
      routeId: 'RouteId',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      route: 'string',
      routeId: 'string',
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

