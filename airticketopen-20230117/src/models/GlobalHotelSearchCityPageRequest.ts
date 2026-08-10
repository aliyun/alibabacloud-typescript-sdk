// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GlobalHotelSearchCityPageRequest extends $dara.Model {
  /**
   * @remarks
   * The distributor account ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  accountNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The country code in ISO 3166-1 alpha-2 format.
   * 
   * @example
   * CN
   */
  countryCode?: string;
  /**
   * @remarks
   * The pagination offset, starting from 0.
   * 
   * @example
   * 0
   */
  start?: number;
  /**
   * @remarks
   * TraceId
   * 
   * @example
   * TraceId
   */
  tracerId?: string;
  static names(): { [key: string]: string } {
    return {
      accountNo: 'AccountNo',
      count: 'Count',
      countryCode: 'CountryCode',
      start: 'Start',
      tracerId: 'TracerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNo: 'number',
      count: 'number',
      countryCode: 'string',
      start: 'number',
      tracerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

