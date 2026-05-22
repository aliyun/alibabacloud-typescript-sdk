// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRoutineCodeVersionsRequest extends $dara.Model {
  /**
   * @remarks
   * The function name.
   * 
   * This parameter is required.
   * 
   * @example
   * ListRoutineCodeVersions
   */
  name?: string;
  /**
   * @remarks
   * The page number of the returned page. Default value: 1. Valid values: 1 and 2.
   * 
   * @example
   * 1
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
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchKeyWord: 'SearchKeyWord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

