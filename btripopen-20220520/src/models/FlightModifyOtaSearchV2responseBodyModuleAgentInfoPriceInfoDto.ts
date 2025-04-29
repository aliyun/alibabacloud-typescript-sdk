// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightModifyOtaSearchV2ResponseBodyModuleAgentInfoPriceInfoDTOReShopPriceInfoDTO } from "./FlightModifyOtaSearchV2responseBodyModuleAgentInfoPriceInfoDtoreShopPriceInfoDto";


export class FlightModifyOtaSearchV2ResponseBodyModuleAgentInfoPriceInfoDTO extends $dara.Model {
  /**
   * @example
   * 126000
   */
  adultPrice?: number;
  /**
   * @example
   * 11000
   */
  adultTax?: number;
  /**
   * @example
   * 137000
   */
  adultTotalPrice?: number;
  /**
   * @example
   * 126000
   */
  beforeControlPrice?: number;
  /**
   * @example
   * 64000
   */
  childPrice?: number;
  /**
   * @example
   * 2000
   */
  childTax?: number;
  /**
   * @example
   * 66000
   */
  childTotalPrice?: number;
  /**
   * @example
   * 120
   */
  infantPrice?: number;
  /**
   * @example
   * 0
   */
  infantTax?: number;
  /**
   * @example
   * 120
   */
  infantTotalPrice?: number;
  /**
   * @example
   * 1300
   */
  originalAdultPrice?: number;
  /**
   * @example
   * 12300
   */
  originalAdultTotalPrice?: number;
  reShopPriceInfoDTO?: FlightModifyOtaSearchV2ResponseBodyModuleAgentInfoPriceInfoDTOReShopPriceInfoDTO;
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
      reShopPriceInfoDTO: FlightModifyOtaSearchV2ResponseBodyModuleAgentInfoPriceInfoDTOReShopPriceInfoDTO,
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

