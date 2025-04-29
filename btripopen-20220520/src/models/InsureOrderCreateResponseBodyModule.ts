// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InsureOrderCreateResponseBodyModuleInsureOrderDetailList } from "./InsureOrderCreateResponseBodyModuleInsureOrderDetailList";


export class InsureOrderCreateResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 1
   */
  copies?: number;
  insureOrderDetailList?: InsureOrderCreateResponseBodyModuleInsureOrderDetailList[];
  /**
   * @example
   * 1021000196500370001
   */
  insureOrderId?: string;
  /**
   * @example
   * 3000
   */
  premium?: number;
  static names(): { [key: string]: string } {
    return {
      copies: 'copies',
      insureOrderDetailList: 'insure_order_detail_list',
      insureOrderId: 'insure_order_id',
      premium: 'premium',
    };
  }

  static types(): { [key: string]: any } {
    return {
      copies: 'number',
      insureOrderDetailList: { 'type': 'array', 'itemType': InsureOrderCreateResponseBodyModuleInsureOrderDetailList },
      insureOrderId: 'string',
      premium: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.insureOrderDetailList)) {
      $dara.Model.validateArray(this.insureOrderDetailList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

