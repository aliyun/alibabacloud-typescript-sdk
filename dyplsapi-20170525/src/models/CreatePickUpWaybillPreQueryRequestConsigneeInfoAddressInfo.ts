// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePickUpWaybillPreQueryRequestConsigneeInfoAddressInfo extends $dara.Model {
  /**
   * @remarks
   * The detailed address of the consignee.
   * 
   * @example
   * XX community
   */
  addressDetail?: string;
  /**
   * @remarks
   * The district where the consignee is located.
   * 
   * @example
   * chang,an
   */
  areaName?: string;
  /**
   * @remarks
   * The city where the consignee is located.
   * 
   * @example
   * Xi,an
   */
  cityName?: string;
  /**
   * @remarks
   * The province where the consignee is located.
   * 
   * @example
   * Shanxi
   */
  provinceName?: string;
  /**
   * @remarks
   * The street where the consignee is located.
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

