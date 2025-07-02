// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDoctorHBaseTableResponseBodyDataMetricsWarmConfigDay extends $dara.Model {
  /**
   * @remarks
   * Metric description.
   * 
   * @example
   * Size of the warm data size
   */
  description?: string;
  /**
   * @remarks
   * Metric name.
   * 
   * @example
   * warmConfigDay
   */
  name?: string;
  /**
   * @remarks
   * Metric unit.
   * 
   * @example
   * MB
   */
  unit?: string;
  /**
   * @remarks
   * Metric value.
   * 
   * @example
   * 1000
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

