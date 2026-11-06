// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDashboardShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The language. Valid values:
   * - zh: Chinese.
   * - en: English.
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
  filterShrink?: string;
  /**
   * @remarks
   * The name of the dashboard. Valid values:
   * - LOG: Access log.
   * - PLUGIN: Plugin log.
   * Note: This parameter is required. If it is not specified, the API returns the InvalidParameter.IsEmpty(400) error.
   * 
   * @example
   * PLUGIN
   */
  name?: string;
  /**
   * @remarks
   * The plugin class ID.
   * 
   * @example
   * pls-dn82a9djd8z****
   */
  pluginClassId?: string;
  /**
   * @remarks
   * The plugin ID.
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
   * The source of the dashboard. Valid values:
   * - SLS: Log dashboard.
   * Note: This parameter is required. If it is not specified, the API returns the InvalidParameter.IsEmpty(400) error.
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
      filterShrink: 'filter',
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
      filterShrink: 'string',
      name: 'string',
      pluginClassId: 'string',
      pluginId: 'string',
      routeId: 'string',
      source: 'string',
      upstreamCluster: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

