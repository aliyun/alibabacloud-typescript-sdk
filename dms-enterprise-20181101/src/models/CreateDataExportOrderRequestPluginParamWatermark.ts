// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataExportOrderRequestPluginParamWatermark extends $dara.Model {
  /**
   * @remarks
   * The field into which the watermark is to be embedded.
   * 
   * @example
   * user_number
   */
  columnName?: string;
  /**
   * @remarks
   * The information to be embedded as a watermark into data.
   * 
   * @example
   * test
   */
  dataWatermark?: string;
  /**
   * @remarks
   * The information to be embedded as a watermark into files.
   * 
   * @example
   * test
   */
  fileWatermark?: string;
  /**
   * @remarks
   * One or more primary keys or unique keys.
   */
  keys?: string[];
  /**
   * @remarks
   * The methods in which the watermark is embedded.
   */
  watermarkTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      dataWatermark: 'DataWatermark',
      fileWatermark: 'FileWatermark',
      keys: 'Keys',
      watermarkTypes: 'WatermarkTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      dataWatermark: 'string',
      fileWatermark: 'string',
      keys: { 'type': 'array', 'itemType': 'string' },
      watermarkTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.keys)) {
      $dara.Model.validateArray(this.keys);
    }
    if(Array.isArray(this.watermarkTypes)) {
      $dara.Model.validateArray(this.watermarkTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

