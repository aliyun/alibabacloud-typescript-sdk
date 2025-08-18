// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PurgeCachesRequestContentCacheKeys extends $dara.Model {
  /**
   * @remarks
   * When refreshing, specify the header information corresponding to the cache key. When the custom cache key feature switch is enabled, the cache key will be generated based on the specified header for refreshing.
   * 
   * **UserGeo: Country/Region**
   * - Country/region codes follow the ISO 3166-2 standard.
   * 
   * **UserDeviceType: Device Type, currently there are three enum values**
   * - desktop
   *  - tablet
   *  - mobile
   * 
   * **UserLanguage: Language**
   * - Language codes follow the ISO 639-1 or BCP47 standards. For example, input \\"zh\\" to refresh content in Chinese.
   */
  headers?: { [key: string]: string };
  /**
   * @remarks
   * URL address to be refreshed.
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
   * List of cachekeys to be refreshed, required when the type is cachekey.
   */
  cacheKeys?: PurgeCachesRequestContentCacheKeys[];
  /**
   * @remarks
   * List of cachetags to be refreshed, required when the type is cachetag.
   */
  cacheTags?: string[];
  /**
   * @remarks
   * List of directories to be refreshed, required when the type is directory.
   */
  directories?: string[];
  /**
   * @remarks
   * List of files to be refreshed, required when the type is file.
   */
  files?: any[];
  /**
   * @remarks
   * List of hostnames to be refreshed, required when the type is hostname.
   */
  hostnames?: string[];
  /**
   * @remarks
   * List of files with ignored parameters, required when the type is ignoreParams.
   */
  ignoreParams?: string[];
  /**
   * @remarks
   * Flag for purging all content. Default is false, set to true when the type is purgeall.
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
   * Content to be refreshed.
   */
  content?: PurgeCachesRequestContent;
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

