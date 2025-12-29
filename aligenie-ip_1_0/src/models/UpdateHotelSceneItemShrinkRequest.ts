// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateHotelSceneItemShrinkRequest extends $dara.Model {
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
   * updateHotelSceneReq
   * 
   * This parameter is required.
   */
  updateHotelSceneOperateReqShrink?: string;
  /**
   * @remarks
   * UpdateHotelSceneReq
   * 
   * This parameter is required.
   */
  updateHotelSceneReqShrink?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      updateHotelSceneOperateReqShrink: 'UpdateHotelSceneOperateReq',
      updateHotelSceneReqShrink: 'UpdateHotelSceneReq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      updateHotelSceneOperateReqShrink: 'string',
      updateHotelSceneReqShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

