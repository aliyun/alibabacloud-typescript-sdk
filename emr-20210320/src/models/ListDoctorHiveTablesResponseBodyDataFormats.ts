// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDoctorHiveTablesResponseBodyDataFormats extends $dara.Model {
  /**
   * @remarks
   * The daily increment of data in the format.
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
   * The proportion of the data in the format.
   * 
   * @example
   * 0.23
   */
  formatRatio?: number;
  /**
   * @remarks
   * The amount of data in the format.
   * 
   * @example
   * 506930200
   */
  formatSize?: number;
  /**
   * @remarks
   * The day-to-day growth rate of data in the format.
   * 
   * @example
   * 0.04
   */
  formatSizeDayGrowthRatio?: number;
  /**
   * @remarks
   * The unit of the amount of data in the format.
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

