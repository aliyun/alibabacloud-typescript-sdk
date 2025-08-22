// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExplorerRegistryModuleVersionsRequest extends $dara.Model {
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
   * vpc
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

