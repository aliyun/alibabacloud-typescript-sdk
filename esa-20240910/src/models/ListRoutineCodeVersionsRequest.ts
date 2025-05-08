// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRoutineCodeVersionsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ListRoutineCodeVersions
   */
  name?: string;
  pageNumber?: number;
  pageSize?: number;
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

