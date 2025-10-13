// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSiteRoutesRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 35281609698****
   */
  configId?: number;
  /**
   * @remarks
   * The configuration type. You can use this parameter to query global configurations or feature configurations. This parameter takes effect only if the functionName parameter is passed.
   * 
   * Valid values:
   * 
   * *   global
   * *   rule
   * 
   * @example
   * global
   */
  configType?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 500. Default value: 500.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The rule name. This parameter takes effect only when parameter functionName is specified.
   * 
   * @example
   * test_route
   */
  routeName?: string;
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

