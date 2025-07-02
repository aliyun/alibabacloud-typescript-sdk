// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Order extends $dara.Model {
  createTime?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
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

