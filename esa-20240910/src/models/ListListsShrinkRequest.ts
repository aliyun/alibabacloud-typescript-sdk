// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListListsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the page number for paginated results.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Specifies the number of results to return per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * A JSON object containing query parameters to filter the results.
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

