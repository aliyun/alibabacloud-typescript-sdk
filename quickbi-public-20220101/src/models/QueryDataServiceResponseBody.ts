// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDataServiceResponseBodyResultHeaders extends $dara.Model {
  /**
   * @remarks
   * The aggregation operator. This parameter is returned only for measure fields, such as SUM, AVG, and MAX.
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
   * A specific physical field name
   */
  column?: string;
  /**
   * @remarks
   * The data type of the field. Common values include number, string, date, datetime, time, and geographic.
   * 
   * @example
   * string
   */
  dataType?: string;
  /**
   * @remarks
   * The granularity of the dimension field. This parameter is returned only when the requested field is a date dimension or geographic dimension field. Valid values:
   * 
   * - Date granularity: yearRegion (year), monthRegion (month), weekRegion (week), dayRegion (day), hourRegion (hour), minRegion (minute), and secRegion (second).
   * 
   * - Geographic information granularity: COUNTRY (country level), PROVINCE (province level), CITY (city level), XIAN (district or county level), and REGION (region level).
   * 
   * @example
   * yearRegion
   */
  granularity?: string;
  /**
   * @remarks
   * The alias of the field, which is the key of the map data row in the Values response parameter.
   * 
   * @example
   * area
   */
  label?: string;
  /**
   * @remarks
   * The type of the field, which is used to distinguish whether the field is a dimension or a measure.
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
   * The column headers.
   */
  headers?: QueryDataServiceResponseBodyResultHeaders[];
  /**
   * @remarks
   * The SQL statement of the query request.
   * 
   * @example
   * SELECT COMPANY_T_1_.`area` AS D_AREA_2_, COMPANY_T_1_.`city` AS D_CITY_3_, SUM(COMPANY_T_1_.`profit_amt`) AS D_PROFIT_4_ FROM `quickbi_test`.`company_sales_record_copy` AS COMPANY_T_1_ WHERE COMPANY_T_1_.`area` LIKE \\"%East China%\\" GROUP BY COMPANY_T_1_.`area`, COMPANY_T_1_.`city` HAVING SUM(COMPANY_T_1_.`order_amt`) > 1 LIMIT 0, 10
   */
  sql?: string;
  /**
   * @remarks
   * The returned query results.
   * 
   * @example
   * [{"area":"East China","city":"Sanming"},{"area":"East China","city":"Shanghai"}]
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
   * The ID of the request.
   * 
   * @example
   * 78C1AA2D-9201-599E-A0BA-6FC462E57A95
   */
  requestId?: string;
  /**
   * @remarks
   * The query result returned by the API.
   */
  result?: QueryDataServiceResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - true: The request is successful.
   * 
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

