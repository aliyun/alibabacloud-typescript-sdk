// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDoctorHDFSDirectoriesResponseBodyDataMetricsSmallFileDayGrowthCount extends $dara.Model {
  /**
   * @example
   * Day growth count of small files
   */
  description?: string;
  /**
   * @example
   * smallFileDayGrowthCount
   */
  name?: string;
  /**
   * @example
   * ”“
   */
  unit?: string;
  /**
   * @example
   * 12345
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

