// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListPriceInfoDTOReShopPriceInfoDTO } from "./FlightModifyListingSearchV2responseBodyModuleTransferFlightListPriceInfoDtoreShopPriceInfoDto";


export class FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListPriceInfoDTO extends $dara.Model {
  /**
   * @example
   * 1000
   */
  adultPrice?: number;
  /**
   * @example
   * 1000
   */
  adultTax?: number;
  /**
   * @example
   * 1000
   */
  adultTotalPrice?: number;
  /**
   * @example
   * 1000
   */
  beforeControlPrice?: number;
  /**
   * @example
   * 1000
   */
  childPrice?: number;
  /**
   * @example
   * 1000
   */
  childTax?: number;
  /**
   * @example
   * 1000
   */
  childTotalPrice?: number;
  /**
   * @example
   * 1000
   */
  infantPrice?: number;
  /**
   * @example
   * 1000
   */
  infantTax?: number;
  /**
   * @example
   * 1000
   */
  infantTotalPrice?: number;
  /**
   * @example
   * 1000
   */
  originalAdultPrice?: number;
  /**
   * @example
   * 1000
   */
  originalAdultTotalPrice?: number;
  reShopPriceInfoDTO?: FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListPriceInfoDTOReShopPriceInfoDTO;
  static names(): { [key: string]: string } {
    return {
      adultPrice: 'adult_price',
      adultTax: 'adult_tax',
      adultTotalPrice: 'adult_total_price',
      beforeControlPrice: 'before_control_price',
      childPrice: 'child_price',
      childTax: 'child_tax',
      childTotalPrice: 'child_total_price',
      infantPrice: 'infant_price',
      infantTax: 'infant_tax',
      infantTotalPrice: 'infant_total_price',
      originalAdultPrice: 'original_adult_price',
      originalAdultTotalPrice: 'original_adult_total_price',
      reShopPriceInfoDTO: 're_shop_price_info_d_t_o',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adultPrice: 'number',
      adultTax: 'number',
      adultTotalPrice: 'number',
      beforeControlPrice: 'number',
      childPrice: 'number',
      childTax: 'number',
      childTotalPrice: 'number',
      infantPrice: 'number',
      infantTax: 'number',
      infantTotalPrice: 'number',
      originalAdultPrice: 'number',
      originalAdultTotalPrice: 'number',
      reShopPriceInfoDTO: FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListPriceInfoDTOReShopPriceInfoDTO,
    };
  }

  validate() {
    if(this.reShopPriceInfoDTO && typeof (this.reShopPriceInfoDTO as any).validate === 'function') {
      (this.reShopPriceInfoDTO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

