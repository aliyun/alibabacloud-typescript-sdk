// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCompenInfosForOpRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  category?: number;
  compenId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      compenId: 'compen_id',
      orderId: 'order_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'number',
      compenId: 'string',
      orderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

