// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetResourcePriceResponseBodyPriceList } from "./GetResourcePriceResponseBodyPriceList";
import { GetResourcePriceResponseBodyPriceModel } from "./GetResourcePriceResponseBodyPriceModel";


export class GetResourcePriceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidParameter.ProductType
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The parameter ProductType is invalid.
   */
  message?: string;
  /**
   * @remarks
   * The price objects.
   * 
   * This parameter is returned only if a value is specified for AppInstanceType.
   */
  priceList?: GetResourcePriceResponseBodyPriceList[];
  /**
   * @remarks
   * The price object.
   * 
   * This parameter is returned only if a value is specified for NodeInstanceType.
   */
  priceModel?: GetResourcePriceResponseBodyPriceModel;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      priceList: 'PriceList',
      priceModel: 'PriceModel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      priceList: { 'type': 'array', 'itemType': GetResourcePriceResponseBodyPriceList },
      priceModel: GetResourcePriceResponseBodyPriceModel,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.priceList)) {
      $dara.Model.validateArray(this.priceList);
    }
    if(this.priceModel && typeof (this.priceModel as any).validate === 'function') {
      (this.priceModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

