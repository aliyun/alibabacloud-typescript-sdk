// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRoutineRoutesResponseBodyConfigs extends $dara.Model {
  /**
   * @example
   * on
   */
  bypass?: string;
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
  fallback?: string;
  /**
   * @example
   * simple
   */
  mode?: string;
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
   * @example
   * 554889455535696
   */
  siteId?: number;
  /**
   * @example
   * test.com
   */
  siteName?: string;
  /**
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
  configs?: ListRoutineRoutesResponseBodyConfigs[];
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
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @example
   * 83
   */
  totalCount?: number;
  /**
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

