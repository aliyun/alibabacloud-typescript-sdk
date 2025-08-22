// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshDcdnObjectCachesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to refresh resources in a directory if the resources are different from the resources in the same directory in the origin server. Default value: false.
   * 
   * *   **true**: refresh all resources in the directory.
   * *   **false**: refresh the changed resources in the directory.
   * 
   * @example
   * false
   */
  force?: boolean;
  /**
   * @remarks
   * The path of the objects that you want to refresh. Separate multiple URLs with line feed characters (\\n) or a pair of carriage return and line feed characters (\\r\\n).
   * 
   * This parameter is required.
   * 
   * @example
   * example.com/example.txt
   */
  objectPath?: string;
  /**
   * @remarks
   * The refresh type. Valid values:
   * 
   * *   **File** (default): refreshes resources based on URLs.
   * *   **Directory**: refreshes resources based on directories.
   * *   **Regex**: refreshes content based on regular expressions.
   * *   **IgnoreParams**: removes the question mark (`?`) and parameters after `?` in a request URL and refreshes content. After you call this operation with the request URL submitted, the system compares the submitted URL with the URL of the cached resource without specific parameters. If the URLs match, the DCDN POPs refresh the cached resource.
   * 
   * >*   For more information about features of URL refresh and directory refresh, see [Refresh and prefetch resources](https://help.aliyun.com/document_detail/64936.html).
   * >*   If you set ObjectType to Directory, the resources in the directory that you want to refresh are marked as expired. You cannot delete the directory. If clients request resources after the resources on POPs are marked as expired, DCDN checks whether the resources on your origin server are updated with a later version. If a later version exists, DCDN retrieves the resources of the later version and returns the resources to the clients. Otherwise, DCDN retrieves the 304 status code from the origin server.
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

