// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTieredCacheRequest extends $dara.Model {
  /**
   * @remarks
   * The multi-tier cache architecture mode. Valid values:
   * - edge: the edge cache layer
   * - edge_smart: the edge cache layer and the intelligent cache layer
   * - edge_regional: the edge cache layer and the regional cache layer
   * - edge_regional_smart: the edge cache layer, the regional cache layer, and the intelligent cache layer
   * 
   * This parameter is required.
   * 
   * @example
   * edge_smart
   */
  cacheArchitectureMode?: string;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to query the site ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      cacheArchitectureMode: 'CacheArchitectureMode',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheArchitectureMode: 'string',
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

