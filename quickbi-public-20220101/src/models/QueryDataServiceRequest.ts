// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDataServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the API in Data Service. For more information, see [Data Service](https://help.aliyun.com/document_detail/144980.html).
   * 
   * This parameter is required.
   * 
   * @example
   * f4cc43bc3***
   */
  apiId?: string;
  /**
   * @remarks
   * The query conditions for Data Service, which are passed as key-value pairs. The value is a string of the map type. The key is the name of the request parameter, and the value is the value of the request parameter. Keys and values must appear in pairs.
   * 
   * **Note:**
   * 
   * - When the operator of a request parameter is set to **Enum Filter**, the value can contain multiple values. In this case, the value must be a JSON-formatted list. Example: `area=["East China","North China","South China"]`     
   * 
   * - For dates, different input formats are provided based on the type:
   * 
   *     - Year: 2019
   * 
   *     - Quarter: 2019Q1
   * 
   *     - Month: 201901 (including the leading zero)
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
   * { "area": ["East China", "North China"],  "shopping_date": "2019Q1",  }
   */
  conditions?: string;
  /**
   * @remarks
   * The list of names of the response parameters. The value is a string of the list type.
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

