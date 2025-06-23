// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePortViewSourceCountriesResponseBodySourceCountrys extends $dara.Model {
  /**
   * @remarks
   * The number of requests.
   * 
   * @example
   * 3390671
   */
  count?: number;
  /**
   * @remarks
   * The abbreviation of the country or area. For example, **cn** indicates China and **us** indicates the United States.
   * 
   * > For more information, see [Location parameters](https://help.aliyun.com/document_detail/167926.html).
   * 
   * @example
   * cn
   */
  countryId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      countryId: 'CountryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      countryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

