// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDataResponseBodyResultHeaders extends $dara.Model {
  /**
   * @remarks
   * The aggregation operator. This field is available only for measure fields, such as SUM, AVG, and MAX. Valid values:
   * - SUM: Sum.
   * - MAX: Maximum value.
   * - MIN: Minimum value.
   * - AVG: Average value.
   * - COUNT: Count.
   * - COUNTD: Deduplicate count.
   * - STDDEV_POP: Population standard deviation.
   * - STDDEV_SAMP: Sample standard deviation.
   * - VAR_POP: Population variance.
   * - VAR_SAMP: Sample variance.
   * 
   * @example
   * SUM
   */
  aggregator?: string;
  /**
   * @remarks
   * The name of the field, which corresponds to the field name in the physical table.
   * 
   * @example
   * test
   */
  column?: string;
  /**
   * @remarks
   * The data type of the field. Valid values:
   * - number: Numeric.
   * - string: String.
   * - date: Date.
   * - time: Time.
   * - datetime: Date and time.
   * 
   * @example
   * string
   */
  dataType?: string;
  /**
   * @remarks
   * The granularity of the dimension field. This field is returned only when the requested field is a date dimension or a geographic dimension. Valid values:
   * 
   * - Date granularity: yearRegion (year), monthRegion (month), weekRegion (week), dayRegion (day), hourRegion (hour), minRegion (minute), and secRegion (second).
   * 
   * - Geographic granularity: COUNTRY (country), PROVINCE (province), CITY (city), XIAN (district/county), and REGION (region).
   * 
   * @example
   * REGION
   */
  granularity?: string;
  /**
   * @remarks
   * The alias of the field, which is the key of the map data row in the values result parameter.
   * 
   * @example
   * area
   */
  label?: string;
  /**
   * @remarks
   * The original name of the corresponding field in the dataset.
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
   * The type of the field, which is used to distinguish whether the field is a dimension or a measure. Valid values:
   * - Dimension: Dimension.
   * - Measure: Measure.
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

export class QueryDataResponseBodyResultValuesV2RowValue extends $dara.Model {
  /**
   * @remarks
   * The field alias set in Data Service.
   * 
   * @example
   * test
   */
  l?: string;
  /**
   * @remarks
   * The original value.
   * 
   * @example
   * 0
   */
  r?: string;
  /**
   * @remarks
   * The display value.
   * 
   * @example
   * 0
   */
  v?: string;
  static names(): { [key: string]: string } {
    return {
      l: 'L',
      r: 'R',
      v: 'V',
    };
  }

  static types(): { [key: string]: any } {
    return {
      l: 'string',
      r: 'string',
      v: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataResponseBodyResultValuesV2 extends $dara.Model {
  /**
   * @remarks
   * The row values.
   */
  rowValue?: QueryDataResponseBodyResultValuesV2RowValue[];
  static names(): { [key: string]: string } {
    return {
      rowValue: 'RowValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rowValue: { 'type': 'array', 'itemType': QueryDataResponseBodyResultValuesV2RowValue },
    };
  }

  validate() {
    if(Array.isArray(this.rowValue)) {
      $dara.Model.validateArray(this.rowValue);
    }
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
   * The SQL statement of the query.
   * > In addition to the parameter conditions of the current API, the filter conditions in the returned SQL statement also include the row-level and column-level permission configurations.
   * 
   * @example
   * SELECT COMPANY_T_1_.`area` AS D_AREA_2_, COMPANY_T_1_.`city` AS D_CITY_3_, SUM(COMPANY_T_1_.`profit_amt`) AS D_PROFIT_4_ FROM `quickbi_test`.`company_sales_record_copy` AS COMPANY_T_1_ WHERE COMPANY_T_1_.`area` LIKE \\"%test%\\" GROUP BY COMPANY_T_1_.`area`, COMPANY_T_1_.`city` HAVING SUM(COMPANY_T_1_.`order_amt`) > 1 LIMIT 0, 10
   */
  sql?: string;
  /**
   * @remarks
   * The returned query results.
   * 
   * @example
   * [{"area":"test","city":"test"},{"area":"test","city":"test"}]
   */
  values?: { [key: string]: any }[];
  /**
   * @remarks
   * The returned query results, including the original value fields.
   */
  valuesV2?: QueryDataResponseBodyResultValuesV2[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      sql: 'Sql',
      values: 'Values',
      valuesV2: 'ValuesV2',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'array', 'itemType': QueryDataResponseBodyResultHeaders },
      sql: 'string',
      values: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      valuesV2: { 'type': 'array', 'itemType': QueryDataResponseBodyResultValuesV2 },
    };
  }

  validate() {
    if(Array.isArray(this.headers)) {
      $dara.Model.validateArray(this.headers);
    }
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    if(Array.isArray(this.valuesV2)) {
      $dara.Model.validateArray(this.valuesV2);
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
   * The ID of the request.
   * 
   * @example
   * a4d1a221d-41za1-****
   */
  requestId?: string;
  /**
   * @remarks
   * The execution result of the API. Valid values:
   * 
   * - true: The execution is successful.
   * - false: The execution fails.
   * 
   * @example
   * true
   */
  result?: QueryDataResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - true: The request is successful.
   * - false: The request fails.
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

