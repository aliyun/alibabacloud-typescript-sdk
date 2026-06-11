// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDataResponseBodyResultHeaders extends $dara.Model {
  /**
   * @remarks
   * The aggregate operator. Returned only for measure fields.
   * 
   * - SUM: The sum.
   * 
   * - MAX: The maximum value.
   * 
   * - MIN: The minimum value.
   * 
   * - AVG: The average value.
   * 
   * - COUNT: The count.
   * 
   * - COUNTD: The count of unique values.
   * 
   * - STDDEV_POP: The population standard deviation.
   * 
   * - STDDEV_SAMP: The sample standard deviation.
   * 
   * - VAR_POP: The population variance.
   * 
   * - VAR_SAMP: The sample variance.
   * 
   * @example
   * SUM
   */
  aggregator?: string;
  /**
   * @remarks
   * The physical table field name.
   * 
   * @example
   * test
   */
  column?: string;
  /**
   * @remarks
   * The field data type. Common types:
   * 
   * - number
   * 
   * - string
   * 
   * - date
   * 
   * - time
   * 
   * - datetime
   * 
   * @example
   * string
   */
  dataType?: string;
  /**
   * @remarks
   * The dimension granularity. Returned only for date or geographic dimensions. Valid values:
   * 
   * - Date granularity: yearRegion (year), monthRegion (month), weekRegion (week), dayRegion (day), hourRegion (hour), minRegion (minute), secRegion (second)
   * 
   * - Geographic granularity: COUNTRY (country), PROVINCE (province), CITY (city), XIAN (county/district), REGION (region)
   * 
   * @example
   * REGION
   */
  granularity?: string;
  /**
   * @remarks
   * The field alias. Used as the key in each Values map entry.
   * 
   * @example
   * area
   */
  label?: string;
  /**
   * @remarks
   * The original field name in the dataset.
   * 
   * @example
   * area
   * 
   * **if can be null:**
   * true
   */
  originalColumn?: string;
  /**
   * @remarks
   * Whether the field is a dimension or measure.
   * 
   * - Dimension
   * 
   * - Measure
   * 
   * @example
   * Dimension
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aggregator: 'Aggregator',
      column: 'Column',
      dataType: 'DataType',
      granularity: 'Granularity',
      label: 'Label',
      originalColumn: 'OriginalColumn',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregator: 'string',
      column: 'string',
      dataType: 'string',
      granularity: 'string',
      label: 'string',
      originalColumn: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The column headers.
   */
  headers?: QueryDataResponseBodyResultHeaders[];
  /**
   * @remarks
   * The SQL statement for the query.
   * 
   * > The returned SQL includes both the filter conditions from this call and any row-level or column-level permission rules.
   * 
   * @example
   * SELECT COMPANY_T_1_.`area` AS D_AREA_2_, COMPANY_T_1_.`city` AS D_CITY_3_, SUM(COMPANY_T_1_.`profit_amt`) AS D_PROFIT_4_ FROM `quickbi_test`.`company_sales_record_copy` AS COMPANY_T_1_ WHERE COMPANY_T_1_.`area` LIKE \\"%test%\\" GROUP BY COMPANY_T_1_.`area`, COMPANY_T_1_.`city` HAVING SUM(COMPANY_T_1_.`order_amt`) > 1 LIMIT 0, 10
   */
  sql?: string;
  /**
   * @remarks
   * The query results.
   */
  values?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      sql: 'Sql',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'array', 'itemType': QueryDataResponseBodyResultHeaders },
      sql: 'string',
      values: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  validate() {
    if(Array.isArray(this.headers)) {
      $dara.Model.validateArray(this.headers);
    }
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * a4d1a221d-41za1-****
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the API call. Valid values:
   * 
   * - true: The call was successful.
   * 
   * - false: The call failed.
   */
  result?: QueryDataResponseBodyResult;
  /**
   * @remarks
   * Whether the request succeeded. Valid values:
   * 
   * - true: The request was successful.
   * 
   * - false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryDataResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

