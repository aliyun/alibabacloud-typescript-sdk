// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCompenInfosForOpRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  category?: number;
  /**
   * @example
   * 82508250249123456
   */
  compenId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1002086203277812345
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

