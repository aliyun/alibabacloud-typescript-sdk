// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExplorerRegistryModulesResponseBodyExplorerRegistryModules extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * demo
   */
  description?: string;
  /**
   * @remarks
   * The number of downloads.
   * 
   * @example
   * 34
   */
  downloads?: number;
  /**
   * @remarks
   * The latest version number.
   * 
   * @example
   * v1
   */
  latestVersion?: string;
  /**
   * @remarks
   * The module name.
   * 
   * @example
   * terraform-alicloud-modules/mongodb
   */
  moduleName?: string;
  /**
   * @remarks
   * The workspace name.
   * 
   * @example
   * test_namespace
   */
  namespaceName?: string;
  /**
   * @remarks
   * The source.
   * 
   * @example
   * terraform-alicloud-modules/mongodb/alicloud
   */
  source?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * Default
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      downloads: 'downloads',
      latestVersion: 'latestVersion',
      moduleName: 'moduleName',
      namespaceName: 'namespaceName',
      source: 'source',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      downloads: 'number',
      latestVersion: 'string',
      moduleName: 'string',
      namespaceName: 'string',
      source: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExplorerRegistryModulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of Explorer community modules.
   */
  explorerRegistryModules?: ListExplorerRegistryModulesResponseBodyExplorerRegistryModules[];
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * Valid values: 0 to 200.
   * 
   * Default value: 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page of results.
   * 
   * If the total number of entries exceeds the maxResults limit, the data is truncated. You can use nextToken to query the next page of data.
   * 
   * @example
   * DxEkv+3w0EDAQgcRFBp8Ep4dD+2BRJj42DLT6GrZysw=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1A662F56-CA76-55F6-869D-7F26293B8E67
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 170
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      explorerRegistryModules: 'explorerRegistryModules',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      explorerRegistryModules: { 'type': 'array', 'itemType': ListExplorerRegistryModulesResponseBodyExplorerRegistryModules },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.explorerRegistryModules)) {
      $dara.Model.validateArray(this.explorerRegistryModules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

