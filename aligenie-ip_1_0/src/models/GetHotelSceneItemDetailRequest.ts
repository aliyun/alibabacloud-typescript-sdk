// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotelSceneItemDetailRequest extends $dara.Model {
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
   * @example
   * 10336
   */
  itemId?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      itemId: 'ItemId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      itemId: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

