// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExplorerRegistryModuleExamplesRequest extends $dara.Model {
  /**
   * @remarks
   * The example name of the module.
   * 
   * @example
   * complete
   */
  exampleName?: string;
  /**
   * @remarks
   * The search keyword. Supports fuzzy match based on the module name or module example name.
   * 
   * @example
   * key
   */
  keyword?: string;
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
   * The name of the module.
   * 
   * @example
   * sls
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
   * The name of the workspace to which the module belongs.
   * 
   * @example
   * alibaba
   */
  namespaceName?: string;
  /**
   * @remarks
   * The pagination token for the next page of results.
   * 
   * If the total number of entries exceeds the maxResults limit, the data is truncated. You can use nextToken to query the next page of data.
   * 
   * @example
   * IbuvZbAXFOiB4nKg8iOH447bhHWDavGTOMijI2Jep7c=
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      exampleName: 'exampleName',
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
      exampleName: 'string',
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

