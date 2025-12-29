// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateHotelShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 31342884
   */
  appKey?: string;
  /**
   * @example
   * 2022-02-22 00:00:00
   */
  estOpenTime?: string;
  hotelAddress?: string;
  /**
   * @example
   * a*****@hotel.com
   */
  hotelEmail?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e6dd44fd16084db8a60d69fd625d9f0f
   */
  hotelId?: string;
  hotelName?: string;
  /**
   * @example
   * 130***
   */
  phoneNumber?: string;
  relatedPksShrink?: string;
  remark?: string;
  /**
   * @example
   * 4
   */
  roomNum?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AAEVK***UE3d3Z2ETwh
   */
  tbOpenId?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      estOpenTime: 'EstOpenTime',
      hotelAddress: 'HotelAddress',
      hotelEmail: 'HotelEmail',
      hotelId: 'HotelId',
      hotelName: 'HotelName',
      phoneNumber: 'PhoneNumber',
      relatedPksShrink: 'RelatedPks',
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
      hotelId: 'string',
      hotelName: 'string',
      phoneNumber: 'string',
      relatedPksShrink: 'string',
      remark: 'string',
      roomNum: 'number',
      tbOpenId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

