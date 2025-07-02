// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDoctorHDFSDirectoriesResponseBodyDataMetricsTotalFileDayGrowthCount extends $dara.Model {
  /**
   * @example
   * Day growth count of total files
   */
  description?: string;
  /**
   * @example
   * totalFileDayGrowthCount
   */
  name?: string;
  /**
   * @example
   * ”“
   */
  unit?: string;
  /**
   * @example
   * 27809
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

