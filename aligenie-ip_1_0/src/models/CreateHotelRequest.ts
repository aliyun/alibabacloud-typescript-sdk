// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHotelRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 333566791
   */
  appKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2022-10-1 00:00:00
   */
  estOpenTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  hotelAddress?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test@hotel.com
   */
  hotelEmail?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  hotelName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 13xxxxxxxx
   */
  phoneNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * jTO****Rw
   */
  relatedPk?: string;
  /**
   * @remarks
   * 酒店关联产品列表
   */
  relatedPks?: string[];
  /**
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100
   */
  roomNum?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AAEV***E3d3Z2ETwh
   */
  tbOpenId?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      estOpenTime: 'EstOpenTime',
      hotelAddress: 'HotelAddress',
      hotelEmail: 'HotelEmail',
      hotelName: 'HotelName',
      phoneNumber: 'PhoneNumber',
      relatedPk: 'RelatedPk',
      relatedPks: 'RelatedPks',
      remark: 'Remark',
      roomNum: 'RoomNum',
      tbOpenId: 'TbOpenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      estOpenTime: 'string',
      hotelAddress: 'string',
      hotelEmail: 'string',
      hotelName: 'string',
      phoneNumber: 'string',
      relatedPk: 'string',
      relatedPks: { 'type': 'array', 'itemType': 'string' },
      remark: 'string',
      roomNum: 'number',
      tbOpenId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.relatedPks)) {
      $dara.Model.validateArray(this.relatedPks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

