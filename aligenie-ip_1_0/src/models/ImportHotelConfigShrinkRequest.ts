// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportHotelConfigShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7***83
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  importHotelConfigShrink?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      importHotelConfigShrink: 'ImportHotelConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      importHotelConfigShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

