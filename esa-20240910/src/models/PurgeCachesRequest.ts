// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PurgeCachesRequestContentCacheKeys extends $dara.Model {
  /**
   * @remarks
   * The header information corresponding to the cache key specified during the refresh. When the custom cache key feature is enabled, the cache key is generated based on the specified headers for the refresh.
   * 
   * **UserGeo: country/region**
   * 
   * - Country/region codes follow the ISO 3166-2 standard.
   * 
   * **UserDeviceType: device type. Valid values:**
   * 
   * - desktop
   * 
   * - tablet
   * 
   * - mobile
   * 
   * **UserLanguage: language**
   * 
   * - Language codes follow the ISO 639-1 or BCP 47 standard. For example, set this to zh to refresh content in Chinese.
   */
  headers?: { [key: string]: string };
  /**
   * @remarks
   * The URL to refresh.
   * 
   * @example
   * http://a.com/1.jpg?b=1
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      url: 'string',
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PurgeCachesRequestContent extends $dara.Model {
  /**
   * @remarks
   * The list of cache keys to refresh. This parameter is required when Type is set to cachekey.
   */
  cacheKeys?: PurgeCachesRequestContentCacheKeys[];
  /**
   * @remarks
   * The list of cache tags to refresh. This parameter is required when Type is set to cachetag.
   */
  cacheTags?: string[];
  /**
   * @remarks
   * The list of directories to refresh. This parameter is required when Type is set to directory.
   */
  directories?: string[];
  /**
   * @remarks
   * The list of files to refresh. This parameter is required when Type is set to file.
   */
  files?: any[];
  /**
   * @remarks
   * The list of hostnames to refresh. This parameter is required when Type is set to hostname.
   */
  hostnames?: string[];
  /**
   * @remarks
   * The list of files with parameters ignored. This parameter is required when Type is set to ignoreParams.
   */
  ignoreParams?: string[];
  /**
   * @remarks
   * Specifies whether to refresh the entire site. Default value: false. Set this parameter to true when Type is set to purgeall.
   * 
   * @example
   * true
   */
  purgeAll?: boolean;
  static names(): { [key: string]: string } {
    return {
      cacheKeys: 'CacheKeys',
      cacheTags: 'CacheTags',
      directories: 'Directories',
      files: 'Files',
      hostnames: 'Hostnames',
      ignoreParams: 'IgnoreParams',
      purgeAll: 'PurgeAll',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheKeys: { 'type': 'array', 'itemType': PurgeCachesRequestContentCacheKeys },
      cacheTags: { 'type': 'array', 'itemType': 'string' },
      directories: { 'type': 'array', 'itemType': 'string' },
      files: { 'type': 'array', 'itemType': 'any' },
      hostnames: { 'type': 'array', 'itemType': 'string' },
      ignoreParams: { 'type': 'array', 'itemType': 'string' },
      purgeAll: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.cacheKeys)) {
      $dara.Model.validateArray(this.cacheKeys);
    }
    if(Array.isArray(this.cacheTags)) {
      $dara.Model.validateArray(this.cacheTags);
    }
    if(Array.isArray(this.directories)) {
      $dara.Model.validateArray(this.directories);
    }
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    if(Array.isArray(this.hostnames)) {
      $dara.Model.validateArray(this.hostnames);
    }
    if(Array.isArray(this.ignoreParams)) {
      $dara.Model.validateArray(this.ignoreParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PurgeCachesRequest extends $dara.Model {
  /**
   * @remarks
   * The refresh content.
   */
  content?: PurgeCachesRequestContent;
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
      content: 'Content',
      edgeComputePurge: 'EdgeComputePurge',
      force: 'Force',
      siteId: 'SiteId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: PurgeCachesRequestContent,
      edgeComputePurge: 'boolean',
      force: 'boolean',
      siteId: 'number',
      type: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

