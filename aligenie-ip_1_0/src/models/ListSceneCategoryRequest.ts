// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSceneCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * hotelId
   * 
   * This parameter is required.
   * 
   * @example
   * 80d84ea8ed9e422fbad52715c8fc56f1
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * REPAIR
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
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

