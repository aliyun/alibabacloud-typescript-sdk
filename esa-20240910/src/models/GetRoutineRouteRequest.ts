// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRoutineRouteRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the configuration. Call the [ListSiteRoutes](https://help.aliyun.com/document_detail/2879631.html) operation to get the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 35281609698****
   */
  configId?: number;
  /**
   * @remarks
   * The ID of the site. Call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to get the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
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

