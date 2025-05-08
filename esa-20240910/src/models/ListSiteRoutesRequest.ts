// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSiteRoutesRequest extends $dara.Model {
  /**
   * @example
   * 35281609698****
   */
  configId?: number;
  /**
   * @example
   * global
   */
  configType?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
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
   * 123456****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      configType: 'ConfigType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      routeName: 'RouteName',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      configType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      routeName: 'string',
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

