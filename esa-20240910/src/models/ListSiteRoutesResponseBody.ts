// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSiteRoutesResponseBodyConfigs extends $dara.Model {
  /**
   * @remarks
   * The bypass mode. Valid values:
   * - on: Enabled.
   * - off: Disabled.
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
   * The configuration type. You can use this parameter to query global or rule configurations. Valid values:
   * 
   * - global: Queries global configurations.
   * - rule: Queries rule configurations.
   * 
   * @example
   * global
   */
  configType?: string;
  /**
   * @remarks
   * The CDN fallback. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  fallback?: string;
  /**
   * @remarks
   * The configuration mode. Valid values:
   * - simple: Simple mode.
   * - custom: Custom mode.
   * 
   * @example
   * simple
   */
  mode?: string;
  /**
   * @remarks
   * The route switch. Valid values:
   * - on: Enabled.
   * - off: Disabled.
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
   * The Edge Routine name.
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
   * The execution order of the rule.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * The version number of the site.
   * 
   * @example
   * 1
   */
  siteVersion?: number;
  /**
   * @remarks
   * The Edge Routine timeout period, in seconds.
   * 
   * @example
   * 60
   */
  timeout?: string;
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
      timeout: 'Timeout',
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

export class ListSiteRoutesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration list in the response.
   */
  configs?: ListSiteRoutesResponseBodyConfigs[];
  /**
   * @remarks
   * The current page number, which is the same as the PageNumber request parameter.
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
   * The total number of records.
   * 
   * @example
   * 16
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of pages.
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

