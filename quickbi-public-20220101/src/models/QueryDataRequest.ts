// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDataRequest extends $dara.Model {
  /**
   * @remarks
   * The API ID in the data service. For more information, see: [Data Service](https://help.aliyun.com/document_detail/144980.html).
   * 
   * This parameter is required.
   * 
   * @example
   * f4cc43bc3***
   */
  apiId?: string;
  /**
   * @remarks
   * The query conditions for the data service, passed in as Key and Value pairs. A map-type string. Here, Key is the name of the request parameter, and Value is the value of the request parameter. Key and Value must appear in pairs.
   * 
   * **Note:**
   * 
   * - When the operator of the request parameter is set to **enumeration filtering**, the value can contain multiple values, and the format of the value should be a JSON-formatted List. For example: `area=["East China","North China","South China"]`
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
   * test
   */
  conditions?: string;
  /**
   * @remarks
   * A list of return parameter names, in a List-type string.
   * 
   * @example
   * ["area", "city", "price", "date"]
   */
  returnFields?: string;
  /**
   * @remarks
   * The userId in Quick BI. For how to obtain the userId, see: [Query User Information by Account Interface](https://next.api.aliyun.com/document/quickbi-public/2022-01-01/QueryUserInfoByAccount)
   * > This parameter is used to specify the identity of the person using the data service, which can be used in conjunction with the row and column permission configurations of the dataset.
   * 
   * 
   * 
   * >Notice: If the parameter is not passed, an empty string is passed, or null is passed, the default userId will be the owner of the current Quick BI organization.</notice>
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

