// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDashboardShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The language. Valid values: zh (Chinese) and en (English).
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * API ID
   * 
   * @example
   * api-c9uuekzmia8q2****
   */
  apiId?: string;
  /**
   * @remarks
   * The filter configurations.
   */
  filterShrink?: string;
  /**
   * @remarks
   * The dashboard name.
   * 
   * *   LOG: access logs
   * *   PLUGIN: plug-in logs
   * 
   * @example
   * PLUGIN
   */
  name?: string;
  /**
   * @remarks
   * The plug-in ID.
   * 
   * @example
   * pls-dn82a9djd8z****
   */
  pluginClassId?: string;
  pluginId?: string;
  /**
   * @remarks
   * The dashboard source. Valid values:
   * 
   * *   SLS: Simple Log Service
   * 
   * @example
   * SLS
   */
  source?: string;
  upstreamCluster?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'acceptLanguage',
      apiId: 'apiId',
      filterShrink: 'filter',
      name: 'name',
      pluginClassId: 'pluginClassId',
      pluginId: 'pluginId',
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

