// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUsersRequest extends $dara.Model {
  /**
   * @remarks
   * The number of annotated members displayed per page in a paged query. Default value: 20.
   * 
   * @example
   * 20
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page number of the annotate member list. The starting value is 1. The default value is 1.
   * 
   * @example
   * 1
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

