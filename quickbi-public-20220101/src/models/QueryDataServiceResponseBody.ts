// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDataServiceResponseBodyResultHeaders extends $dara.Model {
  /**
   * @remarks
   * Aggregation operator. Only present for measure fields, such as SUM, AVG, and MAX.
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
   * The alias of the field. The key of the map data row in the result parameter values.
   */
  column?: string;
  /**
   * @remarks
   * The data type of the field. Common types include number, string, date, datetime, time, and geographic.
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
   * - Date granularity: yearRegion (year), monthRegion (month), weekRegion (week), dayRegion (day), hourRegion (hour), minRegion (minute), secRegion (second)
   * 
   * - Geographic granularity: COUNTRY (country level), PROVINCE (province level), CITY (city level), XIAN (district/county level), REGION (region)
   * 
   * @example
   * yearRegion
   */
  granularity?: string;
  /**
   * @remarks
   * 字段别名，结果参数values中map数据行的key。
   * 
   * @example
   * area
   */
  label?: string;
  /**
   * @remarks
   * Field type, used to distinguish between dimension and measure fields.
   * 
   * @example
   * StandardDimension
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aggregator: 'Aggregator',
      column: 'Column',
      dataType: 'DataType',
      granularity: 'Granularity',
      label: 'Label',
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

export class QueryDataServiceResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Column headers.
   */
  headers?: QueryDataServiceResponseBodyResultHeaders[];
  /**
   * @remarks
   * The SQL of the query request.
   * 
   * @example
   * SELECT COMPANY_T_1_.`area` AS D_AREA_2_, COMPANY_T_1_.`city` AS D_CITY_3_, SUM(COMPANY_T_1_.`profit_amt`) AS D_PROFIT_4_ FROM `quickbi_test`.`company_sales_record_copy` AS COMPANY_T_1_ WHERE COMPANY_T_1_.`area` LIKE \\"%华东%\\" GROUP BY COMPANY_T_1_.`area`, COMPANY_T_1_.`city` HAVING SUM(COMPANY_T_1_.`order_amt`) > 1 LIMIT 0, 10
   */
  sql?: string;
  /**
   * @remarks
   * The queried results returned.
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
      headers: { 'type': 'array', 'itemType': QueryDataServiceResponseBodyResultHeaders },
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

export class QueryDataServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 78C1AA2D-9201-599E-A0BA-6FC462E57A95
   */
  requestId?: string;
  /**
   * @remarks
   * Returns the result of the interface query.
   */
  result?: QueryDataServiceResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request was successful. Possible values:
   * 
   * - true: The request was successful
   * 
   * - false: The request failed
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
      result: QueryDataServiceResponseBodyResult,
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

