// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDataRequest extends $dara.Model {
  /**
   * @remarks
   * The API ID in [DataService Studio](https://help.aliyun.com/document_detail/144980.html).
   * 
   * This parameter is required.
   * 
   * @example
   * f4cc43bc3***
   */
  apiId?: string;
  /**
   * @remarks
   * Filter conditions as a JSON map string. Each key is a request parameter name, and each value is the parameter value.
   * 
   * **Note:**
   * 
   * - If the operator of a request parameter is set to **Enumeration Filter**, the value can contain multiple values. In this case, the value must be in the format of a JSON list. For example: `area=["East China","North China","South China"]`
   * 
   * - For dates, use the following formats based on the date type:
   * 
   *   - Year: 2019
   * 
   *   - Quarter: 2019Q1
   * 
   *   - Month: 201901 (with a leading zero)
   * 
   *   - Week: 2019-52
   * 
   *   - Day: 20190101
   * 
   *   - Hour: 14:00:00 (minutes and seconds are 00)
   * 
   *   - Minute: 14:12:00 (seconds are 00)
   * 
   *   - Second: 14:34:34
   * 
   * @example
   * { "area": ["test", "test"],  "shopping_date": "2019Q1",  }
   */
  conditions?: string;
  /**
   * @remarks
   * A JSON array of field names to return.
   * 
   * @example
   * ["area", "city", "price", "date"]
   */
  returnFields?: string;
  /**
   * @remarks
   * The Quick BI user ID. Obtain this value from [QueryUserInfoByAccount](https://next.api.aliyun.com/document/quickbi-public/2022-01-01/QueryUserInfoByAccount).
   * 
   * > Specifies the user identity for DataService Studio, used with row-level and column-level permission configurations.
   * 
   * >Notice: 
   * 
   * If omitted, empty, or null, defaults to the Quick BI organization owner\\"s user ID.
   * 
   * @example
   * b5d8fd9348cc4327****afb604
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      conditions: 'Conditions',
      returnFields: 'ReturnFields',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      conditions: 'string',
      returnFields: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

