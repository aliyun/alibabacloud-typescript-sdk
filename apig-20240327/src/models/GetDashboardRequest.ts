// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDashboardRequestFilter } from "./GetDashboardRequestFilter";


export class GetDashboardRequest extends $dara.Model {
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
  filter?: GetDashboardRequestFilter;
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
      filter: 'filter',
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
      filter: GetDashboardRequestFilter,
      name: 'string',
      pluginClassId: 'string',
      pluginId: 'string',
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

