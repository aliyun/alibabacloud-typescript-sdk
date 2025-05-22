// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FilterUsersRequestOrderParam extends $dara.Model {
  /**
   * @remarks
   * The field that you want to sort by.
   * 
   * Valid values:
   * 
   * *   EndUserId: the username.
   * *   id: the ID of the primary key.
   * *   gmt_created: the creation time.
   * 
   * @example
   * id
   */
  orderField?: string;
  /**
   * @remarks
   * The direction of the sort.
   * 
   * Valid values:
   * 
   * *   ASC: the ascending order.
   * *   DESC (default): the descending order.
   * 
   * @example
   * ASC
   */
  orderType?: string;
  static names(): { [key: string]: string } {
    return {
      orderField: 'OrderField',
      orderType: 'OrderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderField: 'string',
      orderType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

