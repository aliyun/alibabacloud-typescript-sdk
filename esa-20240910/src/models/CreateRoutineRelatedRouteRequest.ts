// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRoutineRelatedRouteRequest extends $dara.Model {
  byPass?: string;
  /**
   * @remarks
   * The routine name.
   * 
   * This parameter is required.
   * 
   * @example
   * CreateRoutineRelatedRoute
   */
  name?: string;
  /**
   * @remarks
   * The route.
   * 
   * This parameter is required.
   * 
   * @example
   * *.example.com/path1*
   */
  route?: string;
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
      byPass: 'ByPass',
      name: 'Name',
      route: 'Route',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      byPass: 'string',
      name: 'string',
      route: 'string',
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

