// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDohUserInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The end time for the query. Format: YYYY-MM-DD
   * 
   * If you do not specify this parameter, the default value is the time when you perform the query.
   * 
   * @example
   * 2019-07-04
   */
  endDate?: string;
  /**
   * @remarks
   * The language in which you want the values of some response parameters to be returned. These response parameters support multiple languages.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The start time for the query. Format: YYYY-MM-DD
   * 
   * You can query the user information of the last 90 days only. `Set the parameter to a value no earlier than 90 days from the current time`.
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

