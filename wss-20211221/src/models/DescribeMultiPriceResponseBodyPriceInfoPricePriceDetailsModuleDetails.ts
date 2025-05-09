// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMultiPriceResponseBodyPriceInfoPricePriceDetailsModuleDetails extends $dara.Model {
  /**
   * @example
   * 734.65
   */
  discountPrice?: number;
  /**
   * @example
   * DesktopType
   */
  moduleCode?: string;
  moduleName?: string;
  /**
   * @example
   * eds.enterprise_office.8c32g
   */
  moduleValue?: string;
  /**
   * @example
   * 10900
   */
  originalPrice?: number;
  /**
   * @example
   * 292.2
   */
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      discountPrice: 'DiscountPrice',
      moduleCode: 'ModuleCode',
      moduleName: 'ModuleName',
      moduleValue: 'ModuleValue',
      originalPrice: 'OriginalPrice',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountPrice: 'number',
      moduleCode: 'string',
      moduleName: 'string',
      moduleValue: 'string',
      originalPrice: 'number',
      tradePrice: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

