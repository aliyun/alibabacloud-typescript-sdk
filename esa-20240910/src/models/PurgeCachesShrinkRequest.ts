// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PurgeCachesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The refresh content.
   */
  contentShrink?: string;
  /**
   * @remarks
   * Specifies whether to refresh edge computing cached resources. For example, this allows you to refresh content cached by the Edge Routine CacheAPI API operation using the edge function.
   * 
   * @example
   * true
   */
  edgeComputePurge?: boolean;
  /**
   * @remarks
   * Specifies whether to refresh all resources under the corresponding directory when the back-to-origin content is inconsistent with the origin server resources. Default value: false.
   * - **true**: Refreshes all resources under the corresponding directory.
   * - **false**: Refreshes only the changed resources under the corresponding directory.
   * 
   * > 
   * >  This parameter takes effect for directory refresh, cache tag refresh, parameter-ignored refresh, hostname refresh, and full site refresh.
   * 
   * @example
   * true
   */
  force?: boolean;
  /**
   * @remarks
   * The site ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456789****
   */
  siteId?: number;
  /**
   * @remarks
   * The type of the refresh node. Valid values:
   * - **file** (default): file refresh.
   * - **cachekey**: cache key refresh.
   * - **cachetag**: cache label refresh.
   * - **directory**: folder refresh.
   * - **ignoreParams**: parameter-ignored refresh. This refers to removing the question mark (?) and all parameters after it from the request URL. When you commit a parameter-stripped URL through this API operation, the committed URL is matched against cached resource URLs after their parameters are also stripped. If a cached resource URL matches the committed URL after parameter stripping, the point of presence executes the refresh on the cached resource.
   * - **hostname**: hostname refresh.
   * - **purgeall**: refreshes all cached content under the site.
   * 
   * This parameter is required.
   * 
   * @example
   * file
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      contentShrink: 'Content',
      edgeComputePurge: 'EdgeComputePurge',
      force: 'Force',
      siteId: 'SiteId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentShrink: 'string',
      edgeComputePurge: 'boolean',
      force: 'boolean',
      siteId: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

