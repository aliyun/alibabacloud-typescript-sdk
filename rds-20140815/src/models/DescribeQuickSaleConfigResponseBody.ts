// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeQuickSaleConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The commodity code. Valid values:
   * 
   * - rds: subscription
   * - bards: pay-as-you-go
   * 
   * @example
   * rds
   */
  commodity?: string;
  /**
   * @remarks
   * The commodity configuration details.
   */
  items?: { [key: string]: any };
  /**
   * @remarks
   * Id of the request
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

