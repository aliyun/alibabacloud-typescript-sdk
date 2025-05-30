// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableInfoResponseBodyDataNativeColumns extends $dara.Model {
  /**
   * @remarks
   * The column comments.
   * 
   * @example
   * The name of shop.
   */
  comment?: string;
  /**
   * @remarks
   * The sensitivity-level label of the column. For more information, see [Label-based access control](https://www.alibabacloud.com/help/maxcompute/user-guide/label-based-access-control).
   * 
   * @example
   * 0
   */
  label?: string;
  /**
   * @remarks
   * The column name.
   * 
   * @example
   * shop_name
   */
  name?: string;
  /**
   * @remarks
   * The column type.
   * 
   * @example
   * STRING
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      label: 'label',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      label: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

