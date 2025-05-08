// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTieredCacheRequest extends $dara.Model {
  /**
   * @remarks
   * The tiered cache architecture mode. Valid values:
   * 
   * *   edge: edge tiered cache.
   * *   edge_smart: edge tiered cache + smart tiered cache.
   * *   edge_regional: edge tiered cache + regional tiered cache.
   * *   edge_regional_smart: edge tiered cache + regional tiered cache + smart tiered cache.
   * 
   * This parameter is required.
   * 
   * @example
   * edge_smart
   */
  cacheArchitectureMode?: string;
  /**
   * @remarks
   * The website ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
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

