// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExplorerRegistryModuleVersionsResponseBodyExplorerRegistryModuleVersions extends $dara.Model {
  /**
   * @remarks
   * The module details.
   * 
   * @example
   * {}
   */
  moduleDetail?: { [key: string]: any };
  /**
   * @remarks
   * The module file.
   * 
   * @example
   * {}
   */
  moduleFile?: { [key: string]: any };
  /**
   * @remarks
   * The module name.
   * 
   * @example
   * eip-slb-ecs-polardb
   */
  moduleName?: string;
  /**
   * @remarks
   * The workspace name.
   * 
   * @example
   * namespace-test
   */
  namespaceName?: string;
  /**
   * @remarks
   * The resource properties.
   * 
   * @example
   * {}
   */
  properties?: { [key: string]: any };
  /**
   * @remarks
   * The source.
   * 
   * @example
   * test_namespace/RegistryModule-test4
   */
  source?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 1.5.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      moduleDetail: 'moduleDetail',
      moduleFile: 'moduleFile',
      moduleName: 'moduleName',
      namespaceName: 'namespaceName',
      properties: 'properties',
      source: 'source',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleDetail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      moduleFile: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      moduleName: 'string',
      namespaceName: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      source: 'string',
      version: 'string',
    };
  }

  validate() {
    if(this.moduleDetail) {
      $dara.Model.validateMap(this.moduleDetail);
    }
    if(this.moduleFile) {
      $dara.Model.validateMap(this.moduleFile);
    }
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExplorerRegistryModuleVersionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of Explorer community module versions.
   */
  explorerRegistryModuleVersions?: ListExplorerRegistryModuleVersionsResponseBodyExplorerRegistryModuleVersions[];
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
   * oIM6ssGyh00noi5zoDR1hJ4dD+2BRJj42DLT6GrZysw=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F2D40488-3F74-568B-87EC-1C04D098DF8B
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 22
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      explorerRegistryModuleVersions: 'explorerRegistryModuleVersions',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      explorerRegistryModuleVersions: { 'type': 'array', 'itemType': ListExplorerRegistryModuleVersionsResponseBodyExplorerRegistryModuleVersions },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.explorerRegistryModuleVersions)) {
      $dara.Model.validateArray(this.explorerRegistryModuleVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

