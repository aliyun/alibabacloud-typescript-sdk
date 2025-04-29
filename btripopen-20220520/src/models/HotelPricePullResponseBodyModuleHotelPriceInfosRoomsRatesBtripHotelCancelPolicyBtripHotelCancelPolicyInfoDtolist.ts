// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelPricePullResponseBodyModuleHotelPriceInfosRoomsRatesBtripHotelCancelPolicyBtripHotelCancelPolicyInfoDTOList extends $dara.Model {
  /**
   * @example
   * 1
   */
  hour?: number;
  /**
   * @example
   * 20
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      hour: 'hour',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hour: 'number',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

