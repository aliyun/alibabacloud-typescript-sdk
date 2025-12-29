// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsertHotelSceneBookItemRequestAddHotelSceneItemReq extends $dara.Model {
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
   * @remarks
   * This parameter is required.
   * 
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FOOD
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      icon: 'Icon',
      name: 'Name',
      price: 'Price',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      icon: 'string',
      name: 'string',
      price: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertHotelSceneBookItemRequest extends $dara.Model {
  /**
   * @remarks
   * addHotelSceneItemReq
   * 
   * This parameter is required.
   */
  addHotelSceneItemReq?: InsertHotelSceneBookItemRequestAddHotelSceneItemReq;
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
      addHotelSceneItemReq: 'AddHotelSceneItemReq',
      hotelId: 'HotelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addHotelSceneItemReq: InsertHotelSceneBookItemRequestAddHotelSceneItemReq,
      hotelId: 'string',
    };
  }

  validate() {
    if(this.addHotelSceneItemReq && typeof (this.addHotelSceneItemReq as any).validate === 'function') {
      (this.addHotelSceneItemReq as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

