// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PurgeCachesRequestContentCacheKeys extends $dara.Model {
  headers?: { [key: string]: string };
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
  cacheKeys?: PurgeCachesRequestContentCacheKeys[];
  cacheTags?: string[];
  directories?: string[];
  files?: any[];
  hostnames?: string[];
  ignoreParams?: string[];
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
  content?: PurgeCachesRequestContent;
  edgeComputePurge?: boolean;
  force?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  siteId?: number;
  /**
   * @remarks
   * This parameter is required.
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

