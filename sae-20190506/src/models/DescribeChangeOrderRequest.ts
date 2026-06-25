// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeChangeOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The change order ID. You can obtain it by calling the [ListChangeOrders](https://help.aliyun.com/document_detail/126615.html) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 76fa5c0-9ebb-4bb4-b383-1f885447****
   */
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

