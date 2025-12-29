// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceQAShrinkRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  active?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7***83
   */
  hotelId?: string;
  /**
   * @example
   * ***
   */
  keyword?: string;
  pageShrink?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      hotelId: 'HotelId',
      keyword: 'Keyword',
      pageShrink: 'Page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
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

