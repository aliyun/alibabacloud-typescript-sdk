// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelIndexInfoRequest extends $dara.Model {
  /**
   * @example
   * 330000
   */
  cityCode?: string;
  /**
   * @example
   * 0
   */
  hotelStatus?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 1038882
   */
  pageToken?: string;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'city_code',
      hotelStatus: 'hotel_status',
      pageSize: 'page_size',
      pageToken: 'page_token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      hotelStatus: 'number',
      pageSize: 'number',
      pageToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

