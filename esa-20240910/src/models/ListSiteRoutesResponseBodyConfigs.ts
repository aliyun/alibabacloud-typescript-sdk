// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSiteRoutesResponseBodyConfigs extends $dara.Model {
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
   * 1
   */
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      bypass: 'Bypass',
      configId: 'ConfigId',
      configType: 'ConfigType',
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

