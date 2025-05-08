// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PurgeCachesRequestContentCacheKeys } from "./PurgeCachesRequestContentCacheKeys";


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

