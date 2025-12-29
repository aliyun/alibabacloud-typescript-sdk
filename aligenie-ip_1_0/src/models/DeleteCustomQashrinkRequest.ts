// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCustomQAShrinkRequest extends $dara.Model {
  customQAIdsShrink?: string;
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
      customQAIdsShrink: 'CustomQAIds',
      hotelId: 'HotelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customQAIdsShrink: 'string',
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

