// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExplorerRegistryModuleVersionsResponseBodyExplorerRegistryModuleVersions extends $dara.Model {
  /**
   * @example
   * {}
   */
  moduleDetail?: { [key: string]: any };
  /**
   * @example
   * {}
   */
  moduleFile?: { [key: string]: any };
  /**
   * @example
   * eip-slb-ecs-polardb
   */
  moduleName?: string;
  /**
   * @example
   * namespace-test
   */
  namespaceName?: string;
  /**
   * @example
   * {}
   */
  properties?: { [key: string]: any };
  /**
   * @example
   * test_namespace/RegistryModule-test4
   */
  source?: string;
  /**
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
  explorerRegistryModuleVersions?: ListExplorerRegistryModuleVersionsResponseBodyExplorerRegistryModuleVersions[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * oIM6ssGyh00noi5zoDR1hJ4dD+2BRJj42DLT6GrZysw=
   */
  nextToken?: string;
  /**
   * @example
   * F2D40488-3F74-568B-87EC-1C04D098DF8B
   */
  requestId?: string;
  /**
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

