// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWmExtractTaskRequestCsvControl extends $dara.Model {
  /**
   * @remarks
   * The timestamp watermark parameter that specifies how much information a single timestamp holds. You must keep the value of this parameter consistent for watermark embedding and watermark extraction. Otherwise, the extraction fails.
   * 
   * @example
   * 1
   */
  embedBitsNumberInEachTime?: number;
  /**
   * @remarks
   * The lossy embedding control parameter that specifies columns to be modified You must keep the value of this parameter consistent for watermark embedding and watermark extraction. Otherwise, the extraction fails.
   * 
   * @example
   * 1
   */
  embedColumn?: number;
  /**
   * @remarks
   * The lossy embedding control parameter that specifies the modification precision. You must keep the value of this parameter consistent for watermark embedding and watermark extraction. Otherwise, the extraction fails.
   * 
   * @example
   * 0
   */
  embedPrecision?: number;
  /**
   * @remarks
   * The timestamp watermark parameter that specifies the embedding position of the timestamp watermarks. You must keep the value of this parameter consistent for watermark embedding and watermark extraction. Otherwise, the extraction fails.
   * 
   * @example
   * Min
   */
  embedTimePosition?: string;
  /**
   * @remarks
   * The CSV watermark embedding method. You must keep the value of this parameter consistent for watermark embedding and watermark extraction. Otherwise, the extraction fails.
   * 
   * @example
   * lossless_row_shift_embed
   */
  method?: string;
  /**
   * @remarks
   * The timestamp watermark parameter that specifies the timestamp format. You must keep the value of this parameter consistent for watermark embedding and watermark extraction. Otherwise, the extraction fails.
   * 
   * @example
   * Year-Mon-Day Hour:Min:Sec.MilSec
   */
  timeFormat?: string;
  static names(): { [key: string]: string } {
    return {
      embedBitsNumberInEachTime: 'EmbedBitsNumberInEachTime',
      embedColumn: 'EmbedColumn',
      embedPrecision: 'EmbedPrecision',
      embedTimePosition: 'EmbedTimePosition',
      method: 'Method',
      timeFormat: 'TimeFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      embedBitsNumberInEachTime: 'number',
      embedColumn: 'number',
      embedPrecision: 'number',
      embedTimePosition: 'string',
      method: 'string',
      timeFormat: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

