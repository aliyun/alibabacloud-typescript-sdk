// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableInfoResponseBodyDataClusterInfoSortCols extends $dara.Model {
  /**
   * @remarks
   * The name of the sorting field.
   * 
   * @example
   * col_2
   */
  name?: string;
  /**
   * @remarks
   * The sorting order.
   * 
   * @example
   * DESC
   */
  order?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      order: 'order',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      order: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

