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

