// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDefaultWatermarkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the watermark template. You can specify only one watermark template ID. You can obtain the ID by using one of the following methods:
   * 
   * *   Obtain the watermark template ID from the response to the [AddWatermark](~~AddWatermark~~) operation that you call to create a watermark template.
   * *   Obtain the watermark template ID from the response to the [ListWatermark](~~ListWatermark~~) operation that you call to query all watermark templates within your account.
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

