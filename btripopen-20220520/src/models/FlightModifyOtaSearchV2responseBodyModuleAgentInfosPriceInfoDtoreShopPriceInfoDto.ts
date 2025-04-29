// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightModifyOtaSearchV2ResponseBodyModuleAgentInfosPriceInfoDTOReShopPriceInfoDTO extends $dara.Model {
  reShopAdultChangeFee?: number;
  reShopAdultPrice?: number;
  reShopAdultPriceGap?: number;
  reShopChildChangeFee?: number;
  reShopChildPrice?: number;
  reShopChildPriceGap?: number;
  reShopInfChangeFee?: number;
  reShopInfPrice?: number;
  reShopInfPriceGap?: number;
  static names(): { [key: string]: string } {
    return {
      reShopAdultChangeFee: 're_shop_adult_change_fee',
      reShopAdultPrice: 're_shop_adult_price',
      reShopAdultPriceGap: 're_shop_adult_price_gap',
      reShopChildChangeFee: 're_shop_child_change_fee',
      reShopChildPrice: 're_shop_child_price',
      reShopChildPriceGap: 're_shop_child_price_gap',
      reShopInfChangeFee: 're_shop_inf_change_fee',
      reShopInfPrice: 're_shop_inf_price',
      reShopInfPriceGap: 're_shop_inf_price_gap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reShopAdultChangeFee: 'number',
      reShopAdultPrice: 'number',
      reShopAdultPriceGap: 'number',
      reShopChildChangeFee: 'number',
      reShopChildPrice: 'number',
      reShopChildPriceGap: 'number',
      reShopInfChangeFee: 'number',
      reShopInfPrice: 'number',
      reShopInfPriceGap: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

