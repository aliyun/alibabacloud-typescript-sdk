// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomQAShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 520a0c0***5eb
   */
  hotelId?: string;
  /**
   * @example
   * ***
   */
  keyword?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  pageShrink?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      keyword: 'Keyword',
      pageShrink: 'Page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      keyword: 'string',
      pageShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

