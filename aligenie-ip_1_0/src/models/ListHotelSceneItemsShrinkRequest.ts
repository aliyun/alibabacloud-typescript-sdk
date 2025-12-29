// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotelSceneItemsShrinkRequest extends $dara.Model {
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
   * ListHotelSceneReq
   * 
   * This parameter is required.
   */
  listHotelSceneReqShrink?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      listHotelSceneReqShrink: 'ListHotelSceneReq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      listHotelSceneReqShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

