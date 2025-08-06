// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshVodObjectCachesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to purge resources in a directory if the resources requested are different from the resources on the origin server.
   * 
   * *   **true**: refreshes all resources in the directory. If you set this parameter to true, when the requested content matches the resource in the directory, the POP retrieves the resource from the origin server, returns the resource to the client, and caches the resource.
   * *   **false** (default): refreshes the changed resources in the directory. If you set this parameter to false, when the requested content matches the resource in the directory, the POP obtains the Last-Modified parameter of the resource from the origin server. If the value of the obtained Last-Modified parameter is the same as that of the cached resource, the cached resource is returned. Otherwise, the POP retrieves the resource from the origin server, returns the resource to the client, and caches the resource.
   * 
   * @example
   * false
   */
  force?: boolean;
  /**
   * @remarks
   * The URL of the file to be prefetched. Separate multiple URLs with line breaks (\\n or \\r\\n).
   * 
   * This parameter is required.
   * 
   * @example
   * abc.com/image/1.png
   */
  objectPath?: string;
  /**
   * @remarks
   * The type of the object that you want to refresh. Valid values:
   * 
   * *   **File** (default): refreshes one or more files.
   * *   **Directory**: refreshes the files in specified directories.
   * *   **Regex**: refreshes content based on regular expressions.
   * *   **IgnoreParams**: removes the question mark (?) and parameters after the question mark (?) in a request URL and refreshes content. After you call this operation with the request URL submitted, the system compares the submitted URL with the URL of the cached resource without specific parameters. If the URLs match, the POPs refresh the cached resource.
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

