// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDataResponseBodyResultHeaders extends $dara.Model {
  /**
   * @remarks
   * Aggregation operator. Only present for measure fields, such as SUM, AVG, and MAX.
   * - SUM: Sum
   * - MAX: Maximum value
   * - MIN: Minimum value
   * - AVG: Average
   * - COUNT: Count
   * - COUNTD: Distinct count
   * - STDDEV_POP: Population standard deviation
   * - STDDEV_SAMP: Sample standard deviation
   * - VAR_POP: Population variance
   * - VAR_SAMP: Sample variance
   * 
   * @example
   * SUM
   */
  aggregator?: string;
  /**
   * @remarks
   * Field name, corresponding to the physical table field name.
   * 
   * @example
   * Specific physical field name
   */
  column?: string;
  /**
   * @remarks
   * The keyword of the sensitive field type.
   * 
   * @example
   * string
   */
  dataType?: string;
  /**
   * @remarks
   * The granularity of the dimension field.
   * This field is returned only when the requested field is a date or geographic dimension, with the following possible values:
   * 
   * - Date Granularity: yearRegion (year), monthRegion (month), weekRegion (week), dayRegion (day), hourRegion (hour), minRegion (minute), secRegion (second)
   * 
   * - Geographic Granularity: COUNTRY (international level), PROVINCE (provincial level), CITY (city level), XIAN (district/county level), REGION (region)
   * 
   * @example
   * REGION
   */
  granularity?: string;
  /**
   * @remarks
   * Field alias, which serves as the key in the map data rows of the `values` parameter.
   * 
   * @example
   * area
   */
  label?: string;
  /**
   * **if can be null:**
   * true
   */
  originalColumn?: string;
  /**
   * @remarks
   * Field type, used to distinguish between dimension and measure fields.
   * - Dimension: dimension
   * - Measure: measure
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
   * Column headers.
   */
  headers?: QueryDataResponseBodyResultHeaders[];
  /**
   * @remarks
   * The SQL query that was executed.
   * > The filter conditions in the returned SQL statement include not only the parameters passed through this interface but also the row and column permission configurations.
   * 
   * @example
   * test
   */
  sql?: string;
  /**
   * @remarks
   * The results of the query.
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
   * Request ID.
   * 
   * @example
   * a4d1a221d-41za1-****
   */
  requestId?: string;
  /**
   * @remarks
   * Returns the result of the interface execution. Possible values:
   * 
   * - true: Execution succeeded
   * - false: Execution failed
   */
  result?: QueryDataResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request was successful. Possible values:
   * 
   * - true: Request succeeded
   * - false: Request failed
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

