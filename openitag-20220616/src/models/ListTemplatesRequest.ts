// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Search content
   * 
   * @example
   * demo
   */
  searchKey?: string;
  /**
   * @remarks
   * List of application types.
   */
  types?: string[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
      types: 'Types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      searchKey: 'string',
      types: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.types)) {
      $dara.Model.validateArray(this.types);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

