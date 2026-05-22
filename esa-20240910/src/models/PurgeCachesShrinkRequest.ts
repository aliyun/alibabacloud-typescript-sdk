// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PurgeCachesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Content to be refreshed.
   */
  contentShrink?: string;
  /**
   * @remarks
   * Used for refreshing cached resources in edge computing, such as allowing the refresh of content cached using the CacheAPI interface of an edge function.
   * 
   * @example
   * true
   */
  edgeComputePurge?: boolean;
  /**
   * @remarks
   * Indicates whether to refresh all resources under the directory when the content from the origin and the source resource are inconsistent. The default is false.
   * - **true**: Refreshes all resources under the specified directory.
   * - **false**: Refreshes only the changed resources under the specified directory.
   * 
   * > 
   * >  Applies to: Directory refresh, cachetag refresh, ignoreParams refresh, hostname refresh, and purge all cache of the site.
   * 
   * @example
   * true
   */
  force?: boolean;
  /**
   * @remarks
   * Site ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456789****
   */
  siteId?: number;
  /**
   * @remarks
   * The type of refresh task. Possible values:
   * - **file** (default): File refresh.
   * - **cachekey**: Cachekey refresh.
   * - **cachetag**: Cachetag refresh.
   * - **directory**: Directory refresh.
   * - **ignoreParams**: Ignore parameters refresh. Ignoring parameters means removing the ? and everything after it in the request URL. When performing an ignore parameters refresh, the user first submits the URL without parameters through the interface. The submitted URLs to be refreshed will then be matched against the cached resource URLs with the parameters removed. If the cached resource URL, after removing the parameters, matches the URL to be refreshed, the CDN node will refresh the cached resources.
   * - **hostname**: Hostname refresh.
   * - **purgeall**: Purge all cache under the site.
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

