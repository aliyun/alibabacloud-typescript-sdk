// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshObjectCacheByCacheTagRequest extends $dara.Model {
  /**
   * @remarks
   * The tags of Cache. If multiple tags are returned, the tags are separated by commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * tag1,tag2
   */
  cacheTag?: string;
  /**
   * @remarks
   * The accelerated domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * Specifies whether to purge all resources that you submit if the requested content is one of the resources that you submit to purge. Default value: false.
   * 
   * *   **true**: The nearest POP fetches all resources from the origin server, delivers them to the client, and updates the cache with the new version.
   * *   **false**: The nearest POP checks the Last-Modified parameter of the resource on the origin server. If the parameter value is the same as that of the cached resource, the POP serves the cached resource. If the parameter value is not the same as that of the cached resource, the POP fetches the latest version from the origin server, delivers it to the client, and updates the cache with the new version.
   * 
   * @example
   * true
   */
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      cacheTag: 'CacheTag',
      domainName: 'DomainName',
      force: 'Force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheTag: 'string',
      domainName: 'string',
      force: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

