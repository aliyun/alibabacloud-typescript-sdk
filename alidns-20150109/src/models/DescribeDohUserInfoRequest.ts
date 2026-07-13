// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDohUserInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The end date of the query. Use the \\`YYYY-MM-DD\\` format.
   * 
   * If you do not specify this parameter, the current date is used.
   * 
   * @example
   * 2019-07-04
   */
  endDate?: string;
  /**
   * @remarks
   * The language.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The start date of the query. Use the \\`YYYY-MM-DD\\` format.
   * 
   * You can query data from the last 90 days. The date must be within the last 90 days.
   * 
   * @example
   * 2019-07-04
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      lang: 'Lang',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      lang: 'string',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

