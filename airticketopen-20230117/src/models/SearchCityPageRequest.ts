// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchCityPageRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  accountNo?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @example
   * CN
   */
  countryCode?: string;
  /**
   * @example
   * 0
   */
  start?: number;
  /**
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

