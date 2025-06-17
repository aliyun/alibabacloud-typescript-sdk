// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnOrderCommodityCodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The commodity code that includes the organization unit.
   * 
   * @example
   * xxx
   */
  orderCommodityCode?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BFFCDFAD-DACC-484E-9BE6-0AF3B3A0DD23
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderCommodityCode: 'OrderCommodityCode',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderCommodityCode: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

