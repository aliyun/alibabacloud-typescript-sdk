// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePickUpWaybillRequestConsigneeAddress extends $dara.Model {
  /**
   * @remarks
   * The detailed address of the consignee.
   * 
   * This parameter is required.
   * 
   * @example
   * XX community
   */
  addressDetail?: string;
  /**
   * @remarks
   * The district where the consignee is located.
   * 
   * This parameter is required.
   * 
   * @example
   * xihu
   */
  areaName?: string;
  /**
   * @remarks
   * The city where the consignee is located.
   * 
   * This parameter is required.
   * 
   * @example
   * hangzhou
   */
  cityName?: string;
  /**
   * @remarks
   * The province where the consignee is located.
   * 
   * This parameter is required.
   * 
   * @example
   * zhejiang
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

