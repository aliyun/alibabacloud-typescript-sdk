// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelIndexInfoRequest extends $dara.Model {
  cityCode?: string;
  hotelStatus?: number;
  internation?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  pageSize?: number;
  pageToken?: string;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'city_code',
      hotelStatus: 'hotel_status',
      internation: 'internation',
      pageSize: 'page_size',
      pageToken: 'page_token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      hotelStatus: 'number',
      internation: 'boolean',
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

