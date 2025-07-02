// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDoctorHDFSDirectoriesResponseBodyDataMetricsTotalDataDayGrowthSize extends $dara.Model {
  /**
   * @example
   * Day growth size of total data
   */
  description?: string;
  /**
   * @example
   * totalDataDayGrowthSize
   */
  name?: string;
  /**
   * @example
   * MB
   */
  unit?: string;
  /**
   * @example
   * 256482228248
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

