// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDashboardRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The route name.
   * 
   * @example
   * test-route
   */
  routeName?: string;
  static names(): { [key: string]: string } {
    return {
      routeName: 'routeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDashboardRequest extends $dara.Model {
  /**
   * @remarks
   * The language. Valid values:
   * - zh: Chinese
   * - en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The unique ID of the API.
   * 
   * @example
   * api-ctl7no6m1h****
   */
  apiId?: string;
  /**
   * @remarks
   * The filter configuration.
   */
  filter?: GetDashboardRequestFilter;
  /**
   * @remarks
   * The dashboard name. Valid values:
   * - LOG: access log
   * - PLUGIN: plug-in log
   * 
   * @example
   * PLUGIN
   */
  name?: string;
  /**
   * @remarks
   * The plug-in type ID.
   * 
   * @example
   * pls-dn82a9djd8z****
   */
  pluginClassId?: string;
  /**
   * @remarks
   * The plug-in ID.
   * 
   * @example
   * inner-ai-search-cvd3mcum1hks660icn10
   */
  pluginId?: string;
  /**
   * @remarks
   * The route ID.
   * 
   * @example
   * route-xxx
   */
  routeId?: string;
  /**
   * @remarks
   * The dashboard source. Valid values:
   * - SLS: log dashboard
   * 
   * @example
   * SLS
   */
  source?: string;
  /**
   * @remarks
   * The AI service identifier.
   * 
   * @example
   * outbound|443||ds.ai
   */
  upstreamCluster?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'acceptLanguage',
      apiId: 'apiId',
      filter: 'filter',
      name: 'name',
      pluginClassId: 'pluginClassId',
      pluginId: 'pluginId',
      routeId: 'routeId',
      source: 'source',
      upstreamCluster: 'upstreamCluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      apiId: 'string',
      filter: GetDashboardRequestFilter,
      name: 'string',
      pluginClassId: 'string',
      pluginId: 'string',
      routeId: 'string',
      source: 'string',
      upstreamCluster: 'string',
    };
  }

  validate() {
    if(this.filter && typeof (this.filter as any).validate === 'function') {
      (this.filter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

