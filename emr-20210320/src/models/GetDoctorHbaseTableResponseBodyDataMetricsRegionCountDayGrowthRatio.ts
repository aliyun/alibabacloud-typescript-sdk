// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDoctorHBaseTableResponseBodyDataMetricsRegionCountDayGrowthRatio extends $dara.Model {
  /**
   * @remarks
   * Metric description.
   * 
   * @example
   * Day growth ratio of region count
   */
  description?: string;
  /**
   * @remarks
   * Metric name.
   * 
   * @example
   * regionCountDayGrowthRatio
   */
  name?: string;
  /**
   * @remarks
   * Metric unit.
   * 
   * @example
   * ""
   */
  unit?: string;
  /**
   * @remarks
   * Metric value.
   * 
   * @example
   * 0.8
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

