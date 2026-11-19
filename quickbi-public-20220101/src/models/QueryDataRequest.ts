// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDataRequest extends $dara.Model {
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
   * The query conditions for Data Service. Specify the conditions as key-value pairs in a map-type string. The key is the request parameter name, and the value is the request parameter value. Keys and values must appear in pairs.
   * 
   * **Note:**
   * 
   * - When the operator of the request parameter is set to **enumeration filter**, the value can contain multiple values. In this case, the value must be a JSON-formatted list. Example: `area=["East China","North China","South China"]`     
   * 
   * - For dates, different input formats are provided based on the type:
   * 
   *     - Year: 2019
   * 
   *     - Quarter: 2019Q1
   * 
   *     - Month: 201901 (with a leading zero)
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
   * { "area": ["test", "test"],  "shopping_date": "2019Q1",  }
   */
  conditions?: string;
  /**
   * @remarks
   * The list of names of the return parameters, which is a list-type string.
   * 
   * @example
   * ["area", "city", "price", "date"]
   */
  returnFields?: string;
  /**
   * @remarks
   * The user ID in Quick BI. For information about how to obtain the user ID, see [Query user information by account](https://next.api.aliyun.com/document/quickbi-public/2022-01-01/QueryUserInfoByAccount).
   * > This parameter specifies the identity of the user who uses Data Service. It can be used in combination with the row-level and column-level permission configurations of the dataset.
   * 
   * 
   * 
   * >Notice: If this parameter is not specified, is left empty, or is set to null, the user ID of the owner of the current Quick BI organization is used by default.</notice>
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

