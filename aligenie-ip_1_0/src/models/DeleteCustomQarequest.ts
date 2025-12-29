// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCustomQARequest extends $dara.Model {
  customQAIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7a3***013
   */
  hotelId?: string;
  static names(): { [key: string]: string } {
    return {
      customQAIds: 'CustomQAIds',
      hotelId: 'HotelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customQAIds: { 'type': 'array', 'itemType': 'string' },
      hotelId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customQAIds)) {
      $dara.Model.validateArray(this.customQAIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

