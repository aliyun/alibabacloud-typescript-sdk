// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListListsRequestQueryArgs } from "./ListListsRequestQueryArgs";


export class ListListsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The query arguments in the JSON format, which contain filter conditions.
   * 
   * @example
   * ListLists
   */
  queryArgs?: ListListsRequestQueryArgs;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryArgs: 'QueryArgs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      queryArgs: ListListsRequestQueryArgs,
    };
  }

  validate() {
    if(this.queryArgs && typeof (this.queryArgs as any).validate === 'function') {
      (this.queryArgs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

