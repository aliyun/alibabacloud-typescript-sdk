// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateHotelSceneBookItemShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * hotelID
   * 
   * This parameter is required.
   * 
   * @example
   * 80d84ea8ed9e422fbad52715c8fc56f1
   */
  hotelId?: string;
  /**
   * @remarks
   * updateHotelSceneBookReq
   * 
   * This parameter is required.
   */
  updateHotelSceneBookReqShrink?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      updateHotelSceneBookReqShrink: 'UpdateHotelSceneBookReq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      updateHotelSceneBookReqShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

