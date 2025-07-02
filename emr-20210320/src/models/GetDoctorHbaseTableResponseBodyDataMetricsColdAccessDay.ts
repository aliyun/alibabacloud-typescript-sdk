// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDoctorHBaseTableResponseBodyDataMetricsColdAccessDay extends $dara.Model {
  /**
   * @remarks
   * Description of the metric.
   * 
   * @example
   * Cold access day
   */
  description?: string;
  /**
   * @remarks
   * Name of the metric.
   * 
   * @example
   * coldAccessDay
   */
  name?: string;
  /**
   * @remarks
   * Unit of the metric.
   * 
   * @example
   * day
   */
  unit?: string;
  /**
   * @remarks
   * Value of the metric.
   * 
   * @example
   * 3
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

