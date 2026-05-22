// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserRoutinesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page. Default value: 1. Valid values: 1 to 10.
   * 
   * @example
   * ListUserRoutines
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The keyword used for fuzzy search.
   * 
   * @example
   * hello
   */
  searchKeyWord?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchKeyWord: 'SearchKeyWord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      searchKeyWord: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

