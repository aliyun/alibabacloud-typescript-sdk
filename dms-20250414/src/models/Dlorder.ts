// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DLOrder extends $dara.Model {
  /**
   * @remarks
   * The name of the column.
   * 
   * @example
   * col1
   */
  col?: string;
  /**
   * @remarks
   * The position of the column in the sort order.
   * 
   * @example
   * 1
   */
  order?: number;
  static names(): { [key: string]: string } {
    return {
      col: 'Col',
      order: 'Order',
    };
  }

  static types(): { [key: string]: any } {
    return {
      col: 'string',
      order: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

