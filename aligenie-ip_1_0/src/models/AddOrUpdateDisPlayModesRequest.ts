// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddOrUpdateDisPlayModesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  hotelDeviceModeList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7***83
   */
  hotelId?: string;
  static names(): { [key: string]: string } {
    return {
      hotelDeviceModeList: 'HotelDeviceModeList',
      hotelId: 'HotelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelDeviceModeList: { 'type': 'array', 'itemType': 'string' },
      hotelId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hotelDeviceModeList)) {
      $dara.Model.validateArray(this.hotelDeviceModeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

