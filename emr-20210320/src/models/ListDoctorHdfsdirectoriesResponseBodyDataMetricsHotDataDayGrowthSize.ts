// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDoctorHDFSDirectoriesResponseBodyDataMetricsHotDataDayGrowthSize extends $dara.Model {
  /**
   * @example
   * Day growth size of hot data
   */
  description?: string;
  /**
   * @example
   * hotDataDayGrowthSize
   */
  name?: string;
  /**
   * @example
   * MB
   */
  unit?: string;
  /**
   * @example
   * 123154
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

