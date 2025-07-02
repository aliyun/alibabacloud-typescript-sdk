// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDoctorHiveTableResponseBodyDataFormats extends $dara.Model {
  /**
   * @remarks
   * The daily amount increment of the data in a specific storage format.
   * 
   * @example
   * 1232124
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
   * The ratio of the data in a specific storage format.
   * 
   * @example
   * 0.23
   */
  formatRatio?: number;
  /**
   * @remarks
   * The size of storage format-specific data.
   * 
   * @example
   * 506930200
   */
  formatSize?: number;
  /**
   * @remarks
   * The day-to-day growth rate of the amount of the data in a specific storage format.
   * 
   * @example
   * 0.04
   */
  formatSizeDayGrowthRatio?: number;
  /**
   * @remarks
   * The unit of the data size.
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

