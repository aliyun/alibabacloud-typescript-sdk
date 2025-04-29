// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EstimatedPriceQueryResponseBodyModuleHotelFeeDetail } from "./EstimatedPriceQueryResponseBodyModuleHotelFeeDetail";
import { EstimatedPriceQueryResponseBodyModuleTrafficFee } from "./EstimatedPriceQueryResponseBodyModuleTrafficFee";


export class EstimatedPriceQueryResponseBodyModule extends $dara.Model {
  hotelFeeDetail?: EstimatedPriceQueryResponseBodyModuleHotelFeeDetail[];
  /**
   * @remarks
   * 酒店费用总额，单位为元
   * 
   * @example
   * 500
   */
  totalHotelFee?: number;
  trafficFee?: EstimatedPriceQueryResponseBodyModuleTrafficFee;
  static names(): { [key: string]: string } {
    return {
      hotelFeeDetail: 'hotel_fee_detail',
      totalHotelFee: 'total_hotel_fee',
      trafficFee: 'traffic_fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelFeeDetail: { 'type': 'array', 'itemType': EstimatedPriceQueryResponseBodyModuleHotelFeeDetail },
      totalHotelFee: 'number',
      trafficFee: EstimatedPriceQueryResponseBodyModuleTrafficFee,
    };
  }

  validate() {
    if(Array.isArray(this.hotelFeeDetail)) {
      $dara.Model.validateArray(this.hotelFeeDetail);
    }
    if(this.trafficFee && typeof (this.trafficFee as any).validate === 'function') {
      (this.trafficFee as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

