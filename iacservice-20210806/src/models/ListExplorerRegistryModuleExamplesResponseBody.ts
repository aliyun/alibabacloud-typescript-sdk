// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExplorerRegistryModuleExamplesResponseBodyExplorerRegistryModuleExamples extends $dara.Model {
  /**
   * @example
   * 201-use-case-create-actiontrail-trail
   */
  exampleName?: string;
  /**
   * @example
   * /
   */
  examplePath?: string;
  /**
   * @example
   * {}
   */
  exampleSchema?: { [key: string]: any };
  /**
   * @example
   * iactestname1
   */
  moduleName?: string;
  /**
   * @example
   * 1.11.0
   */
  moduleVersion?: string;
  /**
   * @example
   * alibaba
   */
  namespaceName?: string;
  /**
   * @example
   * Available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      exampleName: 'exampleName',
      examplePath: 'examplePath',
      exampleSchema: 'exampleSchema',
      moduleName: 'moduleName',
      moduleVersion: 'moduleVersion',
      namespaceName: 'namespaceName',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exampleName: 'string',
      examplePath: 'string',
      exampleSchema: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      moduleName: 'string',
      moduleVersion: 'string',
      namespaceName: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.exampleSchema) {
      $dara.Model.validateMap(this.exampleSchema);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExplorerRegistryModuleExamplesResponseBody extends $dara.Model {
  explorerRegistryModuleExamples?: ListExplorerRegistryModuleExamplesResponseBodyExplorerRegistryModuleExamples[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * VSjwD+sJ8OZJ8fNjV89AZs7o2AdSD25ZQLeWZ8REjXA=
   */
  nextToken?: string;
  /**
   * @example
   * BA8F6459-EED6-556B-8130-D150A3866E56
   */
  requestId?: string;
  /**
   * @example
   * 132
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      explorerRegistryModuleExamples: 'explorerRegistryModuleExamples',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      explorerRegistryModuleExamples: { 'type': 'array', 'itemType': ListExplorerRegistryModuleExamplesResponseBodyExplorerRegistryModuleExamples },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.explorerRegistryModuleExamples)) {
      $dara.Model.validateArray(this.explorerRegistryModuleExamples);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

