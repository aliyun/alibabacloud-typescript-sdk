// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateHotelSceneBookItemRequestUpdateHotelSceneBookReq extends $dara.Model {
  /**
   * @remarks
   * icon
   * 
   * This parameter is required.
   * 
   * @example
   * https://ailabs.alibabausercontent.com/platform/28d7a91e3c05db3855725fc39e0387e7/welcome_audios/aa918294b6ca3aa115c51135bf9b80cb/l9f996sq.png
   */
  icon?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * 青椒肉丝
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1250
   */
  price?: number;
  static names(): { [key: string]: string } {
    return {
      icon: 'Icon',
      id: 'Id',
      name: 'Name',
      price: 'Price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      icon: 'string',
      id: 'number',
      name: 'string',
      price: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelSceneBookItemRequest extends $dara.Model {
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
  updateHotelSceneBookReq?: UpdateHotelSceneBookItemRequestUpdateHotelSceneBookReq;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      updateHotelSceneBookReq: 'UpdateHotelSceneBookReq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      updateHotelSceneBookReq: UpdateHotelSceneBookItemRequestUpdateHotelSceneBookReq,
    };
  }

  validate() {
    if(this.updateHotelSceneBookReq && typeof (this.updateHotelSceneBookReq as any).validate === 'function') {
      (this.updateHotelSceneBookReq as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

