// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDoctorHiveDatabasesResponseBodyDataFormats extends $dara.Model {
  /**
   * @remarks
   * The daily increment of storage format-specific data.
   * 
   * @example
   * 1000
   */
  formatDayGrowthSize?: number;
  /**
   * @remarks
   * The name of the storage format.
   * 
   * @example
   * TextInputFormat
   */
  formatName?: string;
  /**
   * @remarks
   * The proportion of data in a specific storage format.
   * 
   * @example
   * 0.5
   */
  formatRatio?: number;
  /**
   * @remarks
   * The amount of storage format-specific data.
   * 
   * @example
   * 1000
   */
  formatSize?: number;
  /**
   * @remarks
   * The day-to-day growth rate of storage format-specific data.
   * 
   * @example
   * 0.5
   */
  formatSizeDayGrowthRatio?: number;
  /**
   * @remarks
   * The unit of the amount of storage format-specific data.
   * 
   * @example
   * MB
   */
  formatSizeUnit?: string;
  static names(): { [key: string]: string } {
    return {
      formatDayGrowthSize: 'FormatDayGrowthSize',
      formatName: 'FormatName',
      formatRatio: 'FormatRatio',
      formatSize: 'FormatSize',
      formatSizeDayGrowthRatio: 'FormatSizeDayGrowthRatio',
      formatSizeUnit: 'FormatSizeUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      formatDayGrowthSize: 'number',
      formatName: 'string',
      formatRatio: 'number',
      formatSize: 'number',
      formatSizeDayGrowthRatio: 'number',
      formatSizeUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

