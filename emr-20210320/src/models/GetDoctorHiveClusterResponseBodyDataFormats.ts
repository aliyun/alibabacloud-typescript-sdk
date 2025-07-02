// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDoctorHiveClusterResponseBodyDataFormats extends $dara.Model {
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
   * 0.5
   */
  formatRatio?: number;
  /**
   * @remarks
   * The amount of data in the format.
   * 
   * @example
   * 100
   */
  formatSize?: number;
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
      formatName: 'FormatName',
      formatRatio: 'FormatRatio',
      formatSize: 'FormatSize',
      formatSizeUnit: 'FormatSizeUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      formatName: 'string',
      formatRatio: 'number',
      formatSize: 'number',
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

