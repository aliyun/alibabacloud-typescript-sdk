// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExplorerRegistryModuleExamplesResponseBodyExplorerRegistryModuleExamples extends $dara.Model {
  /**
   * @remarks
   * The example name.
   * 
   * @example
   * 201-use-case-create-actiontrail-trail
   */
  exampleName?: string;
  /**
   * @remarks
   * The example path.
   * 
   * @example
   * /
   */
  examplePath?: string;
  /**
   * @remarks
   * The example schema.
   * 
   * @example
   * {}
   */
  exampleSchema?: { [key: string]: any };
  /**
   * @remarks
   * The module name.
   * 
   * @example
   * iactestname1
   */
  moduleName?: string;
  /**
   * @remarks
   * The module version.
   * 
   * @example
   * 1.11.0
   */
  moduleVersion?: string;
  /**
   * @remarks
   * The workspace name.
   * 
   * @example
   * alibaba
   */
  namespaceName?: string;
  /**
   * @remarks
   * The status.
   * 
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
  /**
   * @remarks
   * The list of Explorer community module examples.
   */
  explorerRegistryModuleExamples?: ListExplorerRegistryModuleExamplesResponseBodyExplorerRegistryModuleExamples[];
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
   * VSjwD+sJ8OZJ8fNjV89AZs7o2AdSD25ZQLeWZ8REjXA=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BA8F6459-EED6-556B-8130-D150A3866E56
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
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

