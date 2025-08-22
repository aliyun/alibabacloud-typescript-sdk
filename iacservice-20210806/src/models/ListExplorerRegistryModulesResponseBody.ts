// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExplorerRegistryModulesResponseBodyExplorerRegistryModules extends $dara.Model {
  /**
   * @example
   * demo
   */
  description?: string;
  /**
   * @example
   * 34
   */
  downloads?: number;
  /**
   * @example
   * v1
   */
  latestVersion?: string;
  /**
   * @example
   * terraform-alicloud-modules/mongodb
   */
  moduleName?: string;
  /**
   * @example
   * test_namespace
   */
  namespaceName?: string;
  /**
   * @example
   * terraform-alicloud-modules/mongodb/alicloud
   */
  source?: string;
  /**
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
  explorerRegistryModules?: ListExplorerRegistryModulesResponseBodyExplorerRegistryModules[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * DxEkv+3w0EDAQgcRFBp8Ep4dD+2BRJj42DLT6GrZysw=
   */
  nextToken?: string;
  /**
   * @example
   * 1A662F56-CA76-55F6-869D-7F26293B8E67
   */
  requestId?: string;
  /**
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

