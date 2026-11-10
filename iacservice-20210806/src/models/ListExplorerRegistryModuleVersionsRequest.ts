// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExplorerRegistryModuleVersionsRequest extends $dara.Model {
  /**
   * @remarks
   * The search keyword. Fuzzy matching is supported based on the module name.
   * 
   * @example
   * key
   */
  keyword?: string;
  /**
   * @remarks
   * The maximum number of entries to return per page.
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
   * The name of the module.
   * 
   * @example
   * vpc
   */
  moduleName?: string;
  /**
   * @remarks
   * The version of the module.
   * 
   * @example
   * 1.11.0
   */
  moduleVersion?: string;
  /**
   * @remarks
   * The name of the workspace where the module resides.
   * 
   * @example
   * alibaba
   */
  namespaceName?: string;
  /**
   * @remarks
   * The token used to return the next page of query results.
   * 
   * If the total number of entries exceeds the value of maxResults, the returned results are truncated. You can use nextToken to query the next page.
   * 
   * @example
   * lJTuhMWkNH89zZWyYM9GjpAbgRb+bPPPwN0Q3pclzKI=
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      maxResults: 'maxResults',
      moduleName: 'moduleName',
      moduleVersion: 'moduleVersion',
      namespaceName: 'namespaceName',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      maxResults: 'number',
      moduleName: 'string',
      moduleVersion: 'string',
      namespaceName: 'string',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

