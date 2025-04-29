// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightOrderListQueryV2ResponseBodyModuleInsureInfoList extends $dara.Model {
  /**
   * @example
   * 1002308231
   */
  insureId?: string;
  insureOrderAmount?: number;
  insurePrice?: number;
  insureType?: string;
  nameList?: string[];
  /**
   * @example
   * 5
   */
  number?: number;
  /**
   * @example
   * 0
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      insureId: 'insure_id',
      insureOrderAmount: 'insure_order_amount',
      insurePrice: 'insure_price',
      insureType: 'insure_type',
      nameList: 'name_list',
      number: 'number',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      insureId: 'string',
      insureOrderAmount: 'number',
      insurePrice: 'number',
      insureType: 'string',
      nameList: { 'type': 'array', 'itemType': 'string' },
      number: 'number',
      status: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.nameList)) {
      $dara.Model.validateArray(this.nameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

