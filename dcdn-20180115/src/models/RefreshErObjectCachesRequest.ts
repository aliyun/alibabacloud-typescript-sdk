// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshErObjectCachesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to refresh resources in a directory if the resources requested are different from the resources on the origin server. Default value: false.
   * 
   * *   **true**: refreshes all resources in the directory.
   * *   **false**: refreshes the changed resources in the directory.
   * 
   * @example
   * false
   */
  force?: boolean;
  /**
   * @remarks
   * The domain names that are merged for refreshing. POPs that provide services for the domain names are refreshed.
   * 
   * >  Separate multiple domain names with commas (,).
   * 
   * @example
   * a.test.com,b.test.com
   */
  mergeDomainName?: string;
  /**
   * @remarks
   * The URL that you want to refresh.
   * 
   * > *   Separate URLs with line feeds (\\n or \\r\\n). Each object path can be up to 1,024 characters in length.
   * >*   The URLs in a request must belong to the same domain name.
   * >*   You can refresh up to 1,000 URLs in each request.
   * 
   * This parameter is required.
   * 
   * @example
   * http://example.com/examplefile.txt
   */
  objectPath?: string;
  /**
   * @remarks
   * The refresh type. Valid values:
   * 
   * *   **File** (default): refreshes content based on URLs.
   * *   **Directory**: refreshes content based on directories.
   * *   **Regex**: refreshes content based on regular expressions.
   * *   **IgnoreParams**: removes the question mark (`?`) and parameters after the question mark (`?`) in a request URL and refreshes content. After you call this operation with the request URL submitted, the system compares the submitted URL with the URL of the cached resource without specific parameters. If the URLs match, the points of presence (POPs) refresh the cached resource.
   * 
   * >  If you refresh the files in one or more directories, the resources in the directory that you want to refresh are marked as expired. You cannot delete the directory. If clients request resources on POPs that are marked as expired, Dynamic Content Delivery Network (DCDN) checks whether the resources on your origin server are updated. If resources are updated, DCDN retrieves the latest version of the resources and returns the resources to the clients. Otherwise, the origin server returns the 304 status code.
   * 
   * This parameter is required.
   * 
   * @example
   * File
   */
  objectType?: string;
  /**
   * @remarks
   * The ID of the routine, which is in the format of "Name.Subdomain" and is the unique identifier of a custom routine.
   * 
   * @example
   * test.mysubdomain
   */
  routineId?: string;
  static names(): { [key: string]: string } {
    return {
      force: 'Force',
      mergeDomainName: 'MergeDomainName',
      objectPath: 'ObjectPath',
      objectType: 'ObjectType',
      routineId: 'RoutineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'boolean',
      mergeDomainName: 'string',
      objectPath: 'string',
      objectType: 'string',
      routineId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

