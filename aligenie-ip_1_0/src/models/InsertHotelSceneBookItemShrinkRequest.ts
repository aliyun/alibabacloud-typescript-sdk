// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsertHotelSceneBookItemShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * addHotelSceneItemReq
   * 
   * This parameter is required.
   */
  addHotelSceneItemReqShrink?: string;
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
  static names(): { [key: string]: string } {
    return {
      addHotelSceneItemReqShrink: 'AddHotelSceneItemReq',
      hotelId: 'HotelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addHotelSceneItemReqShrink: 'string',
      hotelId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

