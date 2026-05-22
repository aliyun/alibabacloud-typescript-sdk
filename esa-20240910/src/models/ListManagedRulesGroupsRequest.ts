// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListManagedRulesGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * Page number, used to specify the page number for pagination queries.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, used to specify the number of items per page for pagination queries.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

