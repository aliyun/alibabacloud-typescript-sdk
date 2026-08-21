// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshVodObjectCachesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to purge all resources in the corresponding directory when the back-to-origin content is inconsistent with the origin server resources. Default value: false.
   * 
   * - **true**: purges all resources in the corresponding directory. When "Purge All Resources" is selected, if the requested content matches a resource in the directory, the CDN node fetches the new resource from the origin server, returns it to the user, and re-caches the resource.
   * - **false**: purges only changed resources in the corresponding directory. When "Purge Changed Resources" is selected, if the requested content matches a resource in the directory, the CDN node retrieves the Last-Modified information of the resource from the origin server. If it matches the currently cached resource, the cached resource is returned directly. If it does not match, the CDN node fetches the new resource from the origin server, returns it to the user, and re-caches the resource.
   * 
   * @example
   * false
   */
  force?: boolean;
  /**
   * @remarks
   * The URL of the file to prefetch. Separate multiple URLs with line breaks (
   *  or 
   * ).
   * 
   * This parameter is required.
   * 
   * @example
   * abc.com/image/1.png
   */
  objectPath?: string;
  /**
   * @remarks
   * The type of purge. Valid values:
   * 
   * - **File** (default): file purge.
   * - **Directory**: directory purge.
   * - **Regex**: regular expression-based purge.
   * - **IgnoreParams**: parameter-stripped purge. Parameter stripping refers to removing the question mark (?) and all characters after it from the request URL. Parameter-stripped purge means that you submit a parameter-stripped URL through the API, and the submitted URL is matched against cached resource URLs after parameter stripping. If a cached resource URL matches the submitted URL after parameter stripping, the CDN node purges the cached resource.
   * 
   * @example
   * File
   */
  objectType?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      force: 'Force',
      objectPath: 'ObjectPath',
      objectType: 'ObjectType',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'boolean',
      objectPath: 'string',
      objectType: 'string',
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

