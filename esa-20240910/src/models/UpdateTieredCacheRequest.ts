// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTieredCacheRequest extends $dara.Model {
  /**
   * @remarks
   * The multi-level cache architecture mode. Valid values:
   * - edge: edge cache layer.
   * - edge_smart: edge cache layer + smart cache layer.
   * - edge_regional: edge cache layer + regional cache layer.
   * - edge_regional_smart: edge cache layer + regional cache layer + smart cache layer.
   * 
   * This parameter is required.
   * 
   * @example
   * edge_smart
   */
  cacheArchitectureMode?: string;
  /**
   * @remarks
   * The site ID. You can call [ListSites](https://help.aliyun.com/document_detail/2850189.html) to obtain the site ID.
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

