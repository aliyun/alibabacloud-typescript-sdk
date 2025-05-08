// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserRoutinesRequest extends $dara.Model {
  /**
   * @example
   * ListUserRoutines
   */
  pageNumber?: number;
  pageSize?: number;
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

