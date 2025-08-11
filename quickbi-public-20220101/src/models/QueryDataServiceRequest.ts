// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDataServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The API ID in the data service. For more information, see [Data Service](https://help.aliyun.com/document_detail/144980.html).
   * 
   * This parameter is required.
   * 
   * @example
   * f4cc43bc3***
   */
  apiId?: string;
  /**
   * @remarks
   * The query conditions for the data service, passed in as Key-Value pairs. This is a map-type string. Here, Key is the name of the request parameter, and Value is the value of the request parameter. Keys and Values must appear in pairs.
   * 
   * **Note:**
   * 
   * - When the operator of the request parameter is set to **enumeration filter**, the value can contain multiple values. In this case, the format of the value is a JSON list. For example: `area=["East China","North China","South China"]`     
   * 
   * - For dates, different formats are provided based on the type:
   * 
   *     - Year: 2019
   * 
   *     - Quarter: 2019Q1
   * 
   *     - Month: 201901 (with leading zero)
   *     
   *     - Week: 2019-52
   * 
   *     - Day: 20190101
   * 
   *     - Hour: 14:00:00 (minutes and seconds are 00)
   *     
   *     - Minute: 14:12:00 (seconds are 00)
   * 
   *     - Second: 14:34:34
   * 
   * @example
   * { "area": ["asdf", "west"],  "shopping_date": "2019Q1",  }
   */
  conditions?: string;
  /**
   * @remarks
   * A list of parameter names to be returned, as a List-type string.
   * 
   * @example
   * ["area", "city", "price", "date"]
   */
  returnFields?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      conditions: 'Conditions',
      returnFields: 'ReturnFields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      conditions: 'string',
      returnFields: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

