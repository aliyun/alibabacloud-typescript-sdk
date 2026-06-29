// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSubtaskItemsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the annotated data for task packages. The starting value is 1, and the default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of annotated data entries per page to display in a paged query. Default value is 20.
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

