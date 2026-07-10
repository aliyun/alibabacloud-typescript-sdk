// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelSuggestV2Request extends $dara.Model {
  btripUserId?: string;
  checkIn?: string;
  checkOut?: string;
  cityCode?: string;
  keyword?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  searchType?: number;
  static names(): { [key: string]: string } {
    return {
      btripUserId: 'btrip_user_id',
      checkIn: 'check_in',
      checkOut: 'check_out',
      cityCode: 'city_code',
      keyword: 'keyword',
      searchType: 'search_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      btripUserId: 'string',
      checkIn: 'string',
      checkOut: 'string',
      cityCode: 'string',
      keyword: 'string',
      searchType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

