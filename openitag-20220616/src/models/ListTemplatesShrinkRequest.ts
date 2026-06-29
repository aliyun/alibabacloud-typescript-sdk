// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTemplatesShrinkRequest extends $dara.Model {
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
  typesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
      typesShrink: 'Types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      searchKey: 'string',
      typesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

