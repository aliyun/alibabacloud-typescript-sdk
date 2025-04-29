// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IFlightOrderDetailQueryResponseBodyModuleFlightModifyOrderList } from "./IflightOrderDetailQueryResponseBodyModuleFlightModifyOrderList";
import { IFlightOrderDetailQueryResponseBodyModuleFlightRefundOrderList } from "./IflightOrderDetailQueryResponseBodyModuleFlightRefundOrderList";
import { IFlightOrderDetailQueryResponseBodyModuleFlightSaleOrder } from "./IflightOrderDetailQueryResponseBodyModuleFlightSaleOrder";


export class IFlightOrderDetailQueryResponseBodyModule extends $dara.Model {
  flightModifyOrderList?: IFlightOrderDetailQueryResponseBodyModuleFlightModifyOrderList[];
  flightRefundOrderList?: IFlightOrderDetailQueryResponseBodyModuleFlightRefundOrderList[];
  flightSaleOrder?: IFlightOrderDetailQueryResponseBodyModuleFlightSaleOrder;
  static names(): { [key: string]: string } {
    return {
      flightModifyOrderList: 'flight_modify_order_list',
      flightRefundOrderList: 'flight_refund_order_list',
      flightSaleOrder: 'flight_sale_order',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightModifyOrderList: { 'type': 'array', 'itemType': IFlightOrderDetailQueryResponseBodyModuleFlightModifyOrderList },
      flightRefundOrderList: { 'type': 'array', 'itemType': IFlightOrderDetailQueryResponseBodyModuleFlightRefundOrderList },
      flightSaleOrder: IFlightOrderDetailQueryResponseBodyModuleFlightSaleOrder,
    };
  }

  validate() {
    if(Array.isArray(this.flightModifyOrderList)) {
      $dara.Model.validateArray(this.flightModifyOrderList);
    }
    if(Array.isArray(this.flightRefundOrderList)) {
      $dara.Model.validateArray(this.flightRefundOrderList);
    }
    if(this.flightSaleOrder && typeof (this.flightSaleOrder as any).validate === 'function') {
      (this.flightSaleOrder as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

