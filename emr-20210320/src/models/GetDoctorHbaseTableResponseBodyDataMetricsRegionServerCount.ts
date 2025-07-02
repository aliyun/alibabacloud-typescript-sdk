// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDoctorHBaseTableResponseBodyDataMetricsRegionServerCount extends $dara.Model {
  /**
   * @remarks
   * Metric description.
   * 
   * @example
   * Number of region servers count
   */
  description?: string;
  /**
   * @remarks
   * Metric name.
   * 
   * @example
   * regionServerCount
   */
  name?: string;
  /**
   * @remarks
   * Metric unit.
   * 
   * @example
   * “”
   */
  unit?: string;
  /**
   * @remarks
   * Usage.
   * 
   * @example
   * 10
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

