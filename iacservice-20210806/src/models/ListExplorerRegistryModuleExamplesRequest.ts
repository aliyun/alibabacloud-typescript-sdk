// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExplorerRegistryModuleExamplesRequest extends $dara.Model {
  /**
   * @example
   * complete
   */
  exampleName?: string;
  /**
   * @example
   * key
   */
  keyword?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * sls
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

