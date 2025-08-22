// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExplorerRegistryModulesRequest extends $dara.Model {
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
  moduleName?: string;
  /**
   * @example
   * DxEkv+3w0EDAQgcRFBp8Ep4dD+2BRJj42DLT6GrZysw=
   */
  nextToken?: string;
  /**
   * @example
   * Normal
   */
  sort?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      maxResults: 'maxResults',
      moduleName: 'moduleName',
      nextToken: 'nextToken',
      sort: 'sort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      maxResults: 'number',
      moduleName: 'string',
      nextToken: 'string',
      sort: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

