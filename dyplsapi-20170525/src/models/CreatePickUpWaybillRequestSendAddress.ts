// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePickUpWaybillRequestSendAddress extends $dara.Model {
  /**
   * @remarks
   * The detailed address of the sender.
   * 
   * This parameter is required.
   * 
   * @example
   * XX community
   */
  addressDetail?: string;
  /**
   * @remarks
   * The district where the sender is located.
   * 
   * This parameter is required.
   * 
   * @example
   * wenjiang
   */
  areaName?: string;
  /**
   * @remarks
   * The city where the sender is located.
   * 
   * This parameter is required.
   * 
   * @example
   * chengdu
   */
  cityName?: string;
  /**
   * @remarks
   * The province where the sender is located.
   * 
   * This parameter is required.
   * 
   * @example
   * Sichuan
   */
  provinceName?: string;
  /**
   * @remarks
   * The street where the sender is located.
   * 
   * @example
   * XX Street
   */
  townName?: string;
  static names(): { [key: string]: string } {
    return {
      addressDetail: 'AddressDetail',
      areaName: 'AreaName',
      cityName: 'CityName',
      provinceName: 'ProvinceName',
      townName: 'TownName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressDetail: 'string',
      areaName: 'string',
      cityName: 'string',
      provinceName: 'string',
      townName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

