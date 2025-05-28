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

