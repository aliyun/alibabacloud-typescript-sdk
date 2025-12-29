// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotelsShrinkRequest extends $dara.Model {
  /**
   * **if can be null:**
   * true
   */
  hotelRequestShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  pageShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      hotelRequestShrink: 'HotelRequest',
      pageShrink: 'Page',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelRequestShrink: 'string',
      pageShrink: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

