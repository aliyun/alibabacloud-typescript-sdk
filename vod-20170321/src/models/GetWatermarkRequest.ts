// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWatermarkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the watermark template to query. Only a single watermark template ID is supported. You can obtain the ID by using one of the following methods:
   * - Call the [AddWatermark](~~AddWatermark~~) operation to add a watermark template. The ID is returned.
   * - Call the [ListWatermark](~~ListWatermark~~) operation to query the list of watermark templates. The ID is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * 9bcc8bfadb843f*****09a2671d0df97
   */
  watermarkId?: string;
  static names(): { [key: string]: string } {
    return {
      watermarkId: 'WatermarkId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      watermarkId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

