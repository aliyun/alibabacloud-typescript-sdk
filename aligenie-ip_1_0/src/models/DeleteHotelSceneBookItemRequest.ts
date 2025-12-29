// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteHotelSceneBookItemRequest extends $dara.Model {
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
   * 11823
   */
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      id: 'number',
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

