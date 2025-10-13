// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSiteRoutesResponseBodyConfigs extends $dara.Model {
  /**
   * @remarks
   * The bypass mode. Valid values:
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
   * 35281609698****
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
  fallback?: string;
  /**
   * @remarks
   * The configuration mode. Specifies whether to check the image used by the instance supports hot migration. Valid values:
   * 
   * *   simple: Simple Mode
   * *   custom: Custom Mode
   * 
   * @example
   * simple
   */
  mode?: string;
  /**
   * @remarks
   * The route switch. Valid values:
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
   * 1
   */
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      bypass: 'Bypass',
      configId: 'ConfigId',
      configType: 'ConfigType',
      fallback: 'Fallback',
      mode: 'Mode',
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

export class ListSiteRoutesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned configurations.
   */
  configs?: ListSiteRoutesResponseBodyConfigs[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 16
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 10
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': ListSiteRoutesResponseBodyConfigs },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.configs)) {
      $dara.Model.validateArray(this.configs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

