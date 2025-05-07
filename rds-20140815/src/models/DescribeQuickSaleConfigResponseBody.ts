// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeQuickSaleConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The product code. Valid values:
   * 
   * *   rds: The instance is a subscription instance.
   * *   bards: The instance is a pay-as-you-go instance.
   * 
   * @example
   * rds
   */
  commodity?: string;
  /**
   * @remarks
   * The configuration details of the product.
   */
  items?: { [key: string]: any };
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5DFFE9EC-3369-5937-A4E2-507C0C86A4C6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      commodity: 'Commodity',
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodity: 'string',
      items: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.items) {
      $dara.Model.validateMap(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

