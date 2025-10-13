// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRoutineRoutesResponseBodyConfigs extends $dara.Model {
  /**
   * @remarks
   * Bypass mode. Valid values:
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
  /**
   * @remarks
   * The exception origin switch. After you turn on this switch, if a function exception occurs, such as CPU usage exceeding the upper limit, requests are sent back to the origin. Valid values:
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
   * The configuration mode. Valid values:
   * 
   * *   simple: Simple mode.
   * *   custom: Custom mode.
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
   * The routine name.
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
   * The website ID.
   * 
   * @example
   * 554889455535696
   */
  siteId?: number;
  /**
   * @remarks
   * The website name.
   * 
   * @example
   * test.com
   */
  siteName?: string;
  /**
   * @remarks
   * The version number of the website configurations.
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
      siteId: 'SiteId',
      siteName: 'SiteName',
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
      siteId: 'number',
      siteName: 'string',
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

export class ListRoutineRoutesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned configurations.
   */
  configs?: ListRoutineRoutesResponseBodyConfigs[];
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
   * 20
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
   * 83
   */
  totalCount?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 2
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
      configs: { 'type': 'array', 'itemType': ListRoutineRoutesResponseBodyConfigs },
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

