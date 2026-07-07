// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListListsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The page number for paging.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for paging.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The query parameters passed in JSON format, which contain various filter conditions.
   * 
   * @example
   * ListLists
   */
  queryArgsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryArgsShrink: 'QueryArgs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      queryArgsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

